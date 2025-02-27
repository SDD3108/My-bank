import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React,{useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import UserBalanceScreen from './components/UserBalanceScreen';
import ProfileScreen from './components/ProfileScreen';
import SupportScreen from './components/SupportScreen';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name='Balance' options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="wallet" size={24} color={color} />
          ),
        }} component={UserBalanceScreen}  />
        <Tab.Screen name='Profile' options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" size={24} color={color} />
          ),
        }} component={ProfileScreen}  />
        <Tab.Screen name='Support' options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="contact-support" size={24} color={color} />
          ),
        }} component={SupportScreen}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
