import React, { useRef } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import TextInput from '../../components/Input';
import styles from './styles';

const LOGIN = gql`
  mutation login($input: LoginInput) {
    login(input: $input) {
      clientMutationId
      token
    }
  }
`;

const Login: React.FC = () => {
  const [login, { data: payload }] = useMutation(LOGIN);
  const navigation = useNavigation();

  function signUpOptions() {
    navigation.navigate('Signup');
  }

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: any, { reset }: any) => {
    try {
      const response = await login({
        variables: {
          input: data,
        },
      });
      if (response.data?.login?.token) {
        try {
          await AsyncStorage.setItem('token', response.data?.login?.token);
        } catch (error) {
          console.error(error);
        }
        navigation.navigate('Feed');
      }
    } catch (err) {
      console.error(err);
    }
    reset();
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Text style={styles.logoHeader}>R</Text>
        <Text style={styles.headerDescription}>
          Caso já seja um membro entre com seu Email e Senha!
        </Text>
      </View>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <View style={styles.containerForm}>
          <View style={styles.inputContainer}>
            <TextInput
              label="Email"
              name="email"
              placeholder="Digite seu email"
              autoCompleteType="email"
              style={styles.textInput}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              label="Senha"
              name="password"
              secureTextEntry
              placeholder="Digite sua senha"
              autoCompleteType="password"
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => formRef?.current?.submitForm()}
            style={styles.otherLoginButtonContainer}
          >
            <Text style={styles.otherLoginButtonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.singupText}>Ainda não é um membro?</Text>
          <TouchableOpacity>
            <Text onPress={() => signUpOptions()} style={styles.singupButton}>
              Cadastre-se!
            </Text>
          </TouchableOpacity>
        </View>
      </Form>
    </SafeAreaView>
  );
};

export default Login;
