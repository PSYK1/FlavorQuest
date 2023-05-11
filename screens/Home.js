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

const Home = () => {
  const [search, setSearch] = useState("");

  const [fontsLoaded] = useFonts({
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
            style={{ marginLeft: "10%", fontFamily: "OpenSans", fontSize: 30 }}>
            Good Morning, Burmy
          </Text>
        </View>
        <View style={styles.filterContainer}>
          <View style={[styles.filter, styles.shadowProp]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                console.log("Hello");
              }}>
              <Text style={styles.filterOptions}>Rated 4+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.listing}>
          <View style={styles.visual}>
            <Image
              source={require("../assets/images/foodBowl.png")}
              style={styles.image}></Image>
            <View styles={{ position: "absolute", marginTop: 16 }}>
              <Text>4.4</Text>
            </View>
          </View>
          <View style={styles.description}>
            <Text style={{ fontFamily: "OpenSans", fontSize: 26 }}>
              Food Bowl
            </Text>
            <Text style={{ fontFamily: "OpenSans", fontSize: 18 }}>
              Size: Diameter 15cm
            </Text>
            <View>
              <Text>$120</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Home;

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
    width: "100%",
    height: "40%",
    flexDirection: "row",
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
  content: {
    height: "80%",
    widht: "100%",
    alignItems: "center",
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 15,
  },
  listing: {
    width: "100%",
    flexDirection: "row",
    margin: "5%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  // visual: {
  //   width: "40%",
  // },
  // description: {
  //   width: "60%",
  // },
});
