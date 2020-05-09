import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import getToken from './helpers/getToken';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Feed from './pages/Feed';

const AppStack = createStackNavigator();

export default function Routes() {
  const token = getToken();

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Signup" component={Signup} />
        {token && <AppStack.Screen name="Feed" component={Feed} />}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
