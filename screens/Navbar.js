import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function Navbar() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}>
        <Image source={require("../assets/images/home.png")}></Image>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}>
        <Image source={require("../assets/images/pan.png")}></Image>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}>
        <Image source={require("../assets/images/heart.png")}></Image>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}>
        <Image source={require("../assets/images/burm.png")}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "2%",
    height: "7%",
    width: "100%",
    backgroundColor: "#000000",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "flex-end",
  },
});
