import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/login';
import NovaSenha from './src/pages/login/nova_senha';
import { StyleSheet } from 'react-native'; 


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="NovaSenha" component={NovaSenha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({});
