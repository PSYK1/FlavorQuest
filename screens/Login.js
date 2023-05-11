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
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const height = Dimensions.get("window").height;

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <TextInput
          style={styles.field}
          placeholder="Eamil"
          value={email}
          onChangeText={(text) => setEmail(text)}></TextInput>
        <TextInput
          style={styles.field}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry></TextInput>
      </View>
      <View style={styles.circle}>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Home");
            }}>
            <Text style={{ fontFamily: "Roboto", fontSize: 15 }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Hello")}>
            <Text style={{ fontFamily: "Roboto", fontSize: 15 }}>Face ID</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Signup");
            }}>
            <Text style={{ fontFamily: "Roboto", fontSize: 15 }}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.link}
            onPress={() => console.log("Hello")}>
            <Text
              style={{ fontFamily: "Roboto", fontSize: 15, color: "white" }}>
              Forgot email or password?
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
    height: "30%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  field: {
    height: "18%",
    width: "70%",
    paddingLeft: "2%",
    margin: "2%",
    borderWidth: 1,
    borderRadius: 10,
  },
  circle: {
    height: "33%",
    width: "170%",
    alignItems: "center",
    backgroundColor: "black",
    borderTopLeftRadius: height * 2,
    borderTopRightRadius: height * 2,
  },
  buttons: {
    width: "110%",
    height: "33%",
    marginTop: 30,
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
    height: "45%",
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
