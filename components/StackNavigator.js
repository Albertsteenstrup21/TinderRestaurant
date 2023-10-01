//StackNavigator.js
//Importere react og diverse komponenter
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ResetPassword from './stackComponents/ResetPassword';
import Membership from './stackComponents/Membership';
import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();

//Laver stack navigation
export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Membership" component={Membership} />
    </Stack.Navigator>
  );
}
