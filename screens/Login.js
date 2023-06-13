import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image, Animated } from "react-native";
import { useFonts } from "expo-font";
import { React, useState, useEffect, useRef } from "react";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Svg, Circle } from "react-native-svg";

const height = Dimensions.get("window").height;

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongInfo, setWrongInfo] = useState(false);

  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);

  let [toggled, setToggled] = useState(false);
  const height = useRef(new Animated.Value(1)).current;

  // const [fontsLoaded] = useFonts({
  //   Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
  //   RobotoBold: require("../assets/fonts/Roboto-Bold.ttf"),
  //   MontserratMedium: require("../assets/fonts/Montserrat-Medium.ttf"),
  //   OpenSans: require("../assets/fonts/OpenSans.ttf"),
  // });

  // if (!fontsLoaded) {
  //   return undefined;
  // }

  useEffect(() => {
    Animated.timing(height, {
      toValue: toggled ? 1 : 0,
      duration: 400,
    }).start();
  }, [toggled]);

  return (
    <View style={styles.cont}>
      <View style={styles.circle}>
        <Animated.View
          style={{
            elevation: 100,
            zIndex: 100,
            position: "absolute",
            height: height.interpolate({
              inputRange: [0, 2],
              outputRange: ["250vh", "00vh"],
            }),
          }}
        >
          {/* <View style={[StyleSheet.absoluteFill, { alignItems: "center", justifyContent: "center" }]}> */}
          <Svg max-width="100%" width="auto" max-height="100vh" height="auto" viewBox="0 0 100 100">
            <Circle cx="50" cy="100" r="180" stroke="black" strokeWidth="0" fill="black" preserveAspectRatio="none" />
          </Svg>
          {/* </View> */}
        </Animated.View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => {
          //   signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
          //     .then((userCredential) => {
          //       // console.log(userCredential);
          //       navigation.navigate("Restaurants");
          //     })
          //     .catch((error) => {
          //       if (email === "") {
          //         setEmptyEmail(true);
          //       } else {
          //         setEmptyEmail(false);
          //       }
          //       if (password === "") {
          //         setEmptyPassword(true);
          //       } else {
          //         setEmptyPassword(false);
          //       }
          //       if (!(email === "") && !(password === "")) {
          //         setWrongInfo(true);
          //       }
          //     });
          // }}
          onPress={() => setToggled((prev) => !prev)}
        >
          <Text style={{ fontFamily: "Roboto", fontSize: 15 }}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log("Hello")}>
          <Text style={{ fontFamily: "Roboto", fontSize: 15 }}>Face ID</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text style={{ fontFamily: "Roboto", fontSize: 15 }}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => console.log("Hello")}>
          <Text style={{ fontFamily: "Roboto", fontSize: 15, color: "white" }}>Forgot email or password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    // height: "100vh",
    position: "relative",
  },
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
    height: "28%",
    width: "100%",
    alignItems: "center",
    // justifyContent: "center",
  },
  field: {
    height: "21%",
    width: "75%",
    paddingLeft: "2%",
    margin: "2%",
    marginTop: "26px",
    marginBottom: "0px",
    borderWidth: 1,
    borderRadius: 10,
    // position: "relative",
  },
  circle: {
    // marginTop: "20px",
    height: "35px",
    width: "100%",
    alignItems: "center",

    // backgroundColor: "black",
    // borderTopLeftRadius: height * 2,
    // borderTopRightRadius: height * 2,
  },
  buttons: {
    width: "100%",
    height: "33%",
    marginTop: 30,

    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "35%",
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
  error: {
    color: "red",
    height: "0px",
    // position: "absolute",
  },
});
