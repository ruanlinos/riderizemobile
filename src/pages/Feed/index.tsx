/* eslint-disable consistent-return */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Posts from './components/Posts';
import styles from './styles';

const Feed: React.FC = () => {
  const Tab = createBottomTabNavigator();

  function CenterButton({ badgeCount }: { badgeCount: number }) {
    return (
      <TouchableOpacity activeOpacity={0.9}>
        <View>
          <View style={styles.centerButtonContainer}>
            <Text style={styles.centerButtonText}>R</Text>
          </View>
          {badgeCount > 0 && (
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>{badgeCount}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <NavigationContainer independent>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Posts') {
              iconName = focused ? 'message-text' : 'message-text-outline';
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }
            if (route.name === 'Settings') {
              iconName = focused ? 'message-text' : 'message-text-outline';
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }
            if (route.name === 'User') {
              iconName = 'account';
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }
            if (route.name === 'Search') {
              iconName = 'search1';
              return <AntDesign name={iconName} size={size} color={color} />;
            }
            if (route.name === 'Compass') {
              iconName = 'compass';
              return <Entypo name={iconName} size={size} color={color} />;
            }
            if (route.name === 'Riderize') {
              return <CenterButton badgeCount={1} />;
            }

            // You can return any component that you like here!
          },
        })}
        tabBarOptions={{
          activeTintColor: '#8F5DE8',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}
      >
        <Tab.Screen name="Posts" component={Posts} />
        <Tab.Screen name="User" component={Posts} />
        <Tab.Screen name="Riderize" component={Posts} />
        <Tab.Screen name="Search" component={Posts} />
        <Tab.Screen name="Compass" component={Posts} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Feed;
