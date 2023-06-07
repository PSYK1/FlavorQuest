import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import foods from "../assets/jsData/foods";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Svg, Circle } from "react-native-svg";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function Signup() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");

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
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../assets/logo.png")} />
          </View>
          <Text style={{ fontFamily: "OpenSans", fontSize: 36 }}>F l a v o r Q u e s t</Text>
        </View>
        <View style={styles.headerBot}>
          <Text style={{ fontFamily: "RobotoBold", fontSize: 24, padding: 5 }}>Start Your Quest</Text>
          <Text style={{ fontFamily: "Roboto", fontSize: 15, padding: 5 }}>Make life a little easier</Text>
        </View>
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.field}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        ></TextInput>
        <TextInput style={styles.field} placeholder="Email" value={email} onChangeText={(text) => setEmail(text)}></TextInput>
        <TextInput
          style={styles.field}
          placeholder="Phone Number"
          value={phone}
          onChangeText={(text) => setPhone(text)}
        ></TextInput>
        <TextInput
          style={styles.field}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        ></TextInput>
      </View>
      <View style={styles.circle}>
        <View style={[StyleSheet.absoluteFill, { alignItems: "center", justifyContent: "center" }]}>
          <Svg height="100%" width="100%" viewBox="0 -80 100 100">
            <Circle cx="50" cy="100" r="180" stroke="black" strokeWidth="0" fill="black" />
          </Svg>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
                .then((userCredential) => {
                  updateProfile(FIREBASE_AUTH.currentUser, {
                    displayName: username,
                  })
                    .then(() => {
                      updateProfile(FIREBASE_AUTH.currentUser, {
                        photoURL: "https://i.pinimg.com/originals/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg",
                      })
                        .then(() => {
                          updateProfile(FIREBASE_AUTH.currentUser, {
                            phoneNumber: phone,
                          })
                            .then(() => {
                              navigation.navigate("OnSignup", {
                                likeDislikeList: foods,
                                index: 0,
                              });
                            })
                            .catch((error) => {
                              console.log("Hello1" + error);
                            });
                        })
                        .catch((error) => {
                          console.log("Hello2" + error);
                        });
                    })
                    .catcn((error) => {
                      console.log("Hello3" + error);
                    });
                })
                .catch((error) => {
                  console.log("Hello4" + error);
                });
            }}
          >
            <Text style={{ fontFamily: "Roboto", fontSize: 15 }}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.link}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ fontFamily: "Roboto", fontSize: 15, color: "white" }}>Back to login</Text>
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
    height: "100vh",
  },
  header: {
    height: "37%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerTop: {
    alignItems: "center",
    marginTop: "10%",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: 400,
    height: 200,
    resizeMode: "contain",
  },
  headerBot: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: "40%",
    width: "100%",
    alignItems: "center",
    // justifyContent: "center",
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
    marginTop: "20px",
    height: "35%",
    width: "100%",
    alignItems: "center",
    // backgroundColor: "black",
    // borderTopLeftRadius: height * 2,
    // borderTopRightRadius: height * 2,
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
