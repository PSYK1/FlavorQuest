import { StyleSheet, Text, View, Image } from "react-native";

export default function OnSignup() {
  const foods = [{ src: require("../assets/images/pancake.png") }];
  let likes = [0, 0, 0, 0, 0, 0, 0];

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/pancake.png")}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
