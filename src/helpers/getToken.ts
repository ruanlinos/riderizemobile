import AsyncStorage from '@react-native-community/async-storage';

export default async function getToken() {
  const value = await AsyncStorage.getItem('token');
  return value;
}
