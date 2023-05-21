import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import Navbar from "./Navbar";
import { FIREBASE_AUTH } from "../firebaseConfig";

export default function Home() {
  const [search, setSearch] = useState("");
  const [listings, setListings] = useState([
    {
      src: require("../assets/images/foodBowl.png"),
      description: "Bowl with food",
      size: "Medium",
      rating: 4.4,
      price: 120,
    },
    {
      src: require("../assets/images/foodBowl.png"),
      description: "Bowl with food",
      size: "Medium",
      rating: 4.4,
      price: 120,
    },
    {
      src: require("../assets/images/foodBowl.png"),
      description: "Bowl with food",
      size: "Medium",
      rating: 4.4,
      price: 120,
    },
    {
      src: require("../assets/images/foodBowl.png"),
      description: "Bowl with food",
      size: "Medium",
      rating: 4.4,
      price: 120,
    },
    {
      src: require("../assets/images/foodBowl.png"),
      description: "Bowl with food",
      size: "Medium",
      rating: 4.4,
      price: 120,
    },
  ]);

  const fontsLoaded = useFonts({
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
    RobotoBold: require("../assets/fonts/Roboto-Bold.ttf"),
    MontserratMedium: require("../assets/fonts/Montserrat-Medium.ttf"),
    OpenSans: require("../assets/fonts/OpenSans.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

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
        <View style={styles.filterContainer}>
          <View style={[styles.filter, styles.shadowProp]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                console.log("Hello");
              }}
            >
              <Text style={styles.filterOptions}>Rated 4+</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.filter, styles.shadowProp]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                console.log("Hello");
              }}
            >
              <Text style={styles.filterOptions}>Rated 4+</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.filter, styles.shadowProp]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                console.log("Hello");
              }}
            >
              <Text style={styles.filterOptions}>Rated 4+</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.filter, styles.shadowProp]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                console.log("Hello");
              }}
            >
              <Text style={styles.filterOptions}>Rated 4+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {listings.map((element, index) => {
          return (
            <View key={index}>
              <View style={styles.listing}>
                <View style={styles.visual}>
                  <Image
                    source={element.src}
                    style={{
                      height: 150,
                      width: 150,
                      borderRadius: 15,
                    }}
                  ></Image>
                  <View style={styles.rating}>
                    <Text>{element.rating}</Text>
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
                      {element.description}
                    </Text>
                    <Text style={{ fontFamily: "OpenSans", fontSize: 18 }}>
                      Size: {element.size}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{ fontFamily: "OpenSans", fontWeight: "bold" }}
                    >
                      ${element.price}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.hr}></View>
            </View>
          );
        })}
      </ScrollView>
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
    width: "100%",
    flexDirection: "row",
    margin: "5%",
    justifyContent: "space-around",
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
});
