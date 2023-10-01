//App.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

//Importerer React Navigation 
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Usikker på om det skal bruges senere hen
import { getApps, initializeApp } from "firebase/compat/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

//Importerer Ionicons til tab navigation
import Ionicons from "react-native-vector-icons/Ionicons";

//Importerer komponenter 
import MessageScreen from "./components/MessageScreen";
import ExplorerScreen from "./components/ExplorerScreen";
import StackNavigator from "./components/StackNavigator";

//Laver tab navigation
const Tab = createBottomTabNavigator();

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  
  // Laver navigationen til tab navigation inklusiv ikoner og farver
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Explorer") {
              iconName = focused
                ? "ios-restaurant"
                : "ios-restaurant-outline";
            } else if (route.name === "Message") {
              iconName = focused 
              ? "ios-chatbubble" 
              : "ios-chatbubble-outline";
            } else if (route.name === "Profile") {
              iconName = focused 
              ? "ios-person" 
              : "ios-person-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        {/* Indsætter komponenter i tab*/}
        <Tab.Screen name="Profile" component={StackNavigator} />
        <Tab.Screen name="Explorer" component={ExplorerScreen} />
        <Tab.Screen name="Message" component={MessageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
