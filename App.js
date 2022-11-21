import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import ApplyScreen from './app/screens/ApplyScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import UnitStation from './app/screens/UnitStation';



const Stack = createStackNavigator();

export default function App() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName ="Riara University">
        <Stack.Screen name="Riara University" component={WelcomeScreen} options = {{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options = {{headerShown: false}} />
        <Stack.Screen name="Online Application" component={ApplyScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen}  />
        <Stack.Screen name="Unit " component={UnitStation}  />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

