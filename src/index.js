//Brugt følgende video som kilde:
//https://www.youtube.com/watch?v=6wk1OrGKE1w

import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { db } from "../config";
import { ref, onValue } from "firebase/database";

const FetchDatabase = () => {
  const [restaurantData, setrestaurantData] = useState([]);

  //Henter data fra firebase
  useEffect(() => {
    const starCountRef = ref(db, "posts/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newRestaurants = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      console.log(newRestaurants);
      setrestaurantData(newRestaurants);
    });
  }, []);

  //Returnerer data fra firebase i en liste i react native
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Fetched data from Firebase</Text>
      {restaurantData.map((item, index) => {
        return (
          <View key={index}>
            <Text style={styles.text}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default FetchDatabase;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
});
