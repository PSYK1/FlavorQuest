import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { FIREBASE_AUTH, FIREBASE_DB } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

import * as Location from "expo-location";

import Navbar from "./Navbar";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Restaurants() {
  const numOfRestaurants = 50;

  const [listing, setListing] = useState({
    name: "",
    image: "",
    rating: 0,
    price: "",
  });

  const [nearbyRestaurants, setNearbyRestaurants] = useState([]);
  // const [userLikes, setUserLikes] = useState("american");

  const yelpBaseURL = "https://api.yelp.com/v3/businesses/search?";
  const yelpAccessToken =
    "kj8LnkfFaSshHOgV6Ziv9EODuUJ7zBcYjOOzlFc7hEnsvruSxdCus87AmERNqD483rAoU8Znty9uPSkDMq0q7U2Dh3QDS04Dj_SxjOLLJ0R-9et54qZnLZLXJTJoZHYx";

  const reroll = () => {
    let rand = Math.floor(Math.random() * 40);
    setListing({
      name: nearbyRestaurants[rand].name,
      image: nearbyRestaurants[rand].image_url,
      rating: nearbyRestaurants[rand].rating,
      price: nearbyRestaurants[rand].price,
    });
  };

  useEffect(() => {
    const docRef = doc(
      FIREBASE_DB,
      "likesDislikes",
      FIREBASE_AUTH.currentUser.email
    );

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${yelpAccessToken}`,
        },
      };

      getDoc(docRef)
        .then((snap) => {
          let value = "";
          let arr = snap.data().likes;
          for (let i in arr) {
            if (i == arr.length - 1) {
              value += arr[i];
            } else {
              value += arr[i] + ",";
            }
          }
          return value.toLowerCase();
        })
        .then((userLikes) => {
          console.log(userLikes);
          fetch(
            `${yelpBaseURL}latitude=${location.coords.latitude}&longitude=${
              location.coords.longitude
            }&radius=${40000}&limit=${numOfRestaurants}&categories=${userLikes}`,
            options
          )
            .then((response) => response.json())
            .then((response) => {
              buisinessesCustomerWillLike = setNearbyRestaurants(
                response.businesses
              );
              let rand = Math.floor(Math.random() * 40);
              setListing({
                name: response.businesses[rand].name,
                image: response.businesses[rand].image_url,
                rating: response.businesses[rand].rating,
                price: response.businesses[rand].price,
              });
            })
            .catch((err) => console.log(err));
        })
        .catch((error) => console.log(error));
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <View style={styles.intro}>
          <Text
            style={{ marginLeft: "10%", fontFamily: "OpenSans", fontSize: 30 }}
          >
            Good Morning, {FIREBASE_AUTH.currentUser.displayName}
          </Text>
        </View>
      </View>

      <View>
        <View style={styles.listing}>
          <View style={styles.visual}>
            <Image
              source={{ uri: listing.image }}
              style={{
                height: 150,
                width: 150,
                borderRadius: 15,
              }}
            ></Image>
            <View style={styles.rating}>
              <Text>{listing.rating}</Text>
            </View>
          </View>
          <View style={styles.description}>
            <View style={{ marginBottom: 30 }}>
              <Text
                style={{
                  fontFamily: "OpenSans",
                  fontSize: 25,
                  fontWeight: "600",
                }}
              >
                {listing.name}
              </Text>
            </View>
            <View>
              <Text style={{ fontFamily: "OpenSans", fontWeight: "bold" }}>
                Price: {listing.price}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.hr}></View>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            reroll();
          }}
          style={styles.button}
        >
          <Text>Reroll</Text>
        </TouchableOpacity>
      </View>
      <Navbar></Navbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  intro: {
    width: "100%",
    height: "60%",
    justifyContent: "flex-end",
  },
  title: {},
  square: {
    width: "100%",
    height: "20%",
    backgroundColor: "#FCD08E",
    justifyContent: "center",
  },
  filterContainer: {
    height: "40%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  filter: {
    padding: "1%",
    margin: "3%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderRadius: 10,
  },
  filterOptions: {
    fontFamily: "OpenSans",
    fontSize: 14,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  rating: {
    width: 35,
    height: 20,
    backgroundColor: "#FCD08E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 0.5,
  },
  listing: {
    height: "45%",
    width: "100%",
    flexDirection: "row",
    margin: "5%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  visual: {
    width: "40%",
  },
  description: {
    width: "60%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  hr: {
    marginLeft: "7.5%",
    marginRight: "7.5%",
    width: "85%",
    height: 1.5,
    backgroundColor: "#BFBFBF",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "35%",
    height: "25%",
    borderRadius: 8,
    backgroundColor: "#FCD08E",
  },
});
