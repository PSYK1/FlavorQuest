import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function Signup() {
  const navigation = useNavigation();

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
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Image source={require("../assets/logo.png")} />
          <Text style={{ fontFamily: "OpenSans", fontSize: 36 }}>
            F l a v o r Q u e s t
          </Text>
        </View>
        <View style={styles.headerBot}>
          <Text style={{ fontFamily: "RobotoBold", fontSize: 24, padding: 5 }}>
            Start Your Quest
          </Text>
          <Text style={{ fontFamily: "Roboto", fontSize: 15, padding: 5 }}>
            Make life a little easier
          </Text>
        </View>
      </View>
      <View style={styles.input}>
        <TextInput style={styles.field} placeholder="Username"></TextInput>
        <TextInput style={styles.field} placeholder="Email"></TextInput>
        <TextInput style={styles.field} placeholder="PhoneNumber"></TextInput>
        <TextInput style={styles.field} placeholder="Password"></TextInput>
      </View>
      <View style={styles.circle}>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("OnSignup");
            }}>
            <Text style={{ fontFamily: "Roboto", fontSize: 15 }}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.link}
            onPress={() => {
              navigation.navigate("Login");
            }}>
            <Text
              style={{ fontFamily: "Roboto", fontSize: 15, color: "white" }}>
              Back to login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
  header: {
    height: "37%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerTop: {
    alignItems: "center",
    marginTop: "5%",
  },
  headerBot: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: "40%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  field: {
    height: "15%",
    width: "70%",
    paddingLeft: "2%",
    margin: "2%",
    borderWidth: 1,
    borderRadius: 10,
  },
  circle: {
    height: "23%",
    width: "140%",
    alignItems: "center",
    backgroundColor: "black",
    borderTopLeftRadius: height * 2,
    borderTopRightRadius: height * 2,
  },
  buttons: {
    width: "100%",
    height: "35%",
    marginTop: 30,
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "35%",
    height: "60%",
    borderRadius: 8,
    marginTop: 10,
    padding: 10,
    backgroundColor: "#FCD08E",
  },
  link: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "45%",
  },
});
