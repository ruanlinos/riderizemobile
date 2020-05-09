import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  function otherLoginOptions() {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Text style={styles.logoHeader}>R</Text>
        <Text style={styles.headerDescription}>
          Para ter acesso a todas as funcionalidades recomendamos que conecte
          seu strava!
        </Text>
        <TouchableOpacity style={styles.stravaButtonContainer}>
          <Text style={styles.stravaButtonText}>Conectar Strava</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.otherLoginButtonContainer}>
          <Text
            style={styles.otherLoginButtonText}
            onPress={() => otherLoginOptions()}
          >
            Outras opções de Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
