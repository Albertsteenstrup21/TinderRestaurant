// ProfileScreen.js

//importere react
import React from 'react';
import { View, Button } from 'react-native';

//navigerer til de ResetPassword og Membership
export default function ProfileScreen({ navigation, route }) {
  const navController = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View >
      <Button
        title="Reset password"
        onPress={() => navController('ResetPassword')}
      />
      <Button
        title="Change Membership"
        onPress={() => navController('Membership')}
      />
    </View>
  );
}
