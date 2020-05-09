import React, { useRef } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks/lib/useMutation';
import TextInput from '../../components/Input';
import styles from './styles';

const CREATE_USER = gql`
  mutation createUser($input: CreateUserInput) {
    createUser(input: $input) {
      user {
        _id
        email
        name
      }
      error
    }
  }
`;

const Signup: React.FC = () => {
  const [createNewUser, { data: _data }] = useMutation(CREATE_USER);
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (loginData: any, { reset }: any) => {
    try {
      await createNewUser({
        variables: {
          input: loginData,
        },
      });
      reset();
      navigation.navigate('Login');
    } catch (err) {
      console.error(err);
    }
  };

  function otherLoginOptions() {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Text style={styles.logoHeader}>R</Text>
        <Text style={styles.headerDescription}>
          Informe seu nome, email e senha e se torne um membro agora mesmo!
        </Text>
      </View>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <View style={styles.containerForm}>
          <View style={styles.inputContainer}>
            <TextInput
              label="Nome"
              name="name"
              placeholder="Digite seu nome"
              autoCompleteType="name"
              style={styles.textInput}
            />
          </View>
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
              autoCapitalize="none"
              placeholder="Digite sua senha"
              autoCompleteType="password"
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.otherLoginButtonContainer}
            onPress={() => formRef?.current?.submitForm()}
          >
            <Text style={styles.otherLoginButtonText}>Cadastrar-se</Text>
          </TouchableOpacity>
          <Text style={styles.singupText}>Já é um membro?</Text>
          <TouchableOpacity onPress={() => otherLoginOptions()}>
            <Text style={styles.singupButton}>Realizar o Login!</Text>
          </TouchableOpacity>
        </View>
      </Form>
    </SafeAreaView>
  );
};

export default Signup;
