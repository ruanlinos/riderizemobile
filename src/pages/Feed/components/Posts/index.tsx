/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ptBR from 'date-fns/locale/pt-BR';
import ImagePicker from 'react-native-image-picker';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {
  gql,
  InMemoryCache,
  HttpLink,
  ApolloClient,
  NormalizedCacheObject,
} from 'apollo-boost';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { setContext } from 'apollo-link-context';
import styles from './styles';

const GET_POSTS = gql`
  query getAllPosts {
    posts {
      id
      name
      image_post
      image_profile
      created_at
    }
  }
`;

const CREATE_POST = gql`
  mutation createPost($input: CreatePostInput) {
    createPost(input: $input) {
      post {
        id
        name
        created_at
        updated_at
        image_post
        image_profile
      }
      error
    }
  }
`;

const DELETE_POST = gql`
  mutation deletePost($input: DeletePostInput) {
    deletePost(input: $input) {
      message
      error
    }
  }
`;

const Posts: React.FC = () => {
  const [token, setToken] = useState('');
  const {
    loading: postsLoading,
    error: postsError,
    data: postsData,
    refetch,
  } = useQuery(GET_POSTS);
  let formData = new FormData();
  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: 'http://localhost:8000/graphql',
  });
  async function getToken() {
    const value = await AsyncStorage.getItem('token');
    if (value) setToken(value);
  }

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    link: authLink.concat(link),
  });
  const [createPost, { data: _payloadCreate }] = useMutation(CREATE_POST, {
    client,
  });
  const [deletePost, { data: _payloadDelete }] = useMutation(DELETE_POST, {
    client,
  });

  useEffect(() => {
    getToken();
  }, []);

  async function handleDeletePost(id: string) {
    try {
      await deletePost({
        variables: {
          input: {
            id,
          },
        },
      }).then(() => refetch());
    } catch (error) {
      console.error(error);
    }
  }
  const chooseFile = async () => {
    const options = {
      title: 'Selecione uma imagem',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    async function sendFile() {
      try {
        const response = await axios.post(
          'http://localhost:8000/graphql',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        formData = new FormData();

        await createPost({
          variables: {
            input: {
              image_post: response.data?.data?.uploadFile?.file?.url,
            },
          },
        }).then(() => refetch());
      } catch (err) {
        console.error(err);
      }
    }

    ImagePicker.showImagePicker(options, (response) => {
      const fileName = response.uri;
      const type = response.type?.split('/')[1];
      const { uri } = response;

      const source = {
        uri,
        type,
        name: fileName,
      };
      formData.append(
        'operations',
        '{"query":"mutation UploadFileMutation($input: UploadFileInput!) { uploadFile(input: $input) {file {id _id url original_name path created_at updated_at }}}","variables":{"file":null}}'
      );
      formData.append('map', '{"input.file":["variables.input.file"]}');
      formData.append('input.file', source);

      if (response.uri) sendFile();
      if (!response.uri) formData = new FormData();
    });
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.logoHeader}>RIDERIZE</Text>
        <View style={styles.headerIconsContainer}>
          <AntDesign
            name="search1"
            style={styles.icon}
            color="#8F5DE8"
            size={22}
          />
          <TouchableOpacity activeOpacity={0.9} style={styles.icon}>
            <View>
              <View>
                <MaterialCommunityIcons
                  name="telegram"
                  color="#8F5DE8"
                  size={30}
                />
              </View>

              <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>1</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.headerButtonContainer}>
        <TouchableOpacity
          style={styles.createNewPostContainer}
          onPress={() => chooseFile()}
        >
          <Text style={styles.createNewPostText}>Criar nova publicação</Text>
          <AntDesign
            name="pluscircleo"
            color="#FFFFFF"
            size={15}
            style={styles.createNewPostIcon}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={postsData?.posts}
        renderItem={({ item }) => (
          <View style={styles.postContainer} key={item.id}>
            <View style={styles.postContainerHeader}>
              <View style={styles.userInforContainer}>
                <Image
                  style={styles.postUserAvatar}
                  source={{ uri: item.image_profile }}
                />
                <View>
                  <Text style={styles.postUserName}>{item.name}</Text>
                  <Text style={styles.postDate}>
                    {formatDistanceToNow(new Date(item.created_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </Text>
                </View>
              </View>
              <Entypo
                name="dots-three-horizontal"
                color="#C4C4C4"
                size={20}
                style={styles.createNewPostIcon}
                onPress={() => handleDeletePost(item.id)}
              />
            </View>
            <Image
              style={styles.postImage}
              source={{ uri: item.image_post }}
              resizeMode="cover"
            />
            <View style={styles.postActionsContainer}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="heart-outline"
                  color="#C4C4C4"
                  size={30}
                  style={styles.postActionsIcons}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="comment-text-outline"
                  color="#C4C4C4"
                  size={30}
                  style={styles.postActionsIcons}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="share-variant"
                  color="#C4C4C4"
                  size={30}
                  style={styles.postActionsIcons}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Posts;
