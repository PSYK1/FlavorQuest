import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

import * as Location from "expo-location";

import Navbar from "./Navbar";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Restaurants() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [radius, setRadius] = useState(30);

  const numOfRestaurants = 50;

  const [restaurantName, setRestaurantName] = useState("");

  const [nearbyRestaurants, setNearbyRestaurants] = useState([]);

  const yelpBaseURL = "https://api.yelp.com/v3/businesses/search?";
  const yelpAccessToken =
    "kj8LnkfFaSshHOgV6Ziv9EODuUJ7zBcYjOOzlFc7hEnsvruSxdCus87AmERNqD483rAoU8Znty9uPSkDMq0q7U2Dh3QDS04Dj_SxjOLLJ0R-9et54qZnLZLXJTJoZHYx";

  const reroll = () => {
    let rand = Math.floor(Math.random() * 40);
    setRestaurantName(nearbyRestaurants[rand].name);
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${yelpAccessToken}`,
        },
      };
      fetch(
        `${yelpBaseURL}latitude=${location.coords.latitude}&longitude=${
          location.coords.longitude
        }&radius=${40000}&limit=${numOfRestaurants}`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          setNearbyRestaurants(response.businesses);
          let rand = Math.floor(Math.random() * 40);
          setRestaurantName(response.businesses[rand].name);
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{restaurantName}</Text>
      <TouchableOpacity style={styles.button} onPress={() => reroll()}>
        <Text style={{ fontFamily: "Roboto", fontSize: 15 }}>ReRoll</Text>
      </TouchableOpacity>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
