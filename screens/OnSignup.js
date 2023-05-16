import { StyleSheet } from "react-native";
import SwipeScreen from "./SwipeScreen";

export default function OnSignup({ route }) {
  const { likeDislikeList, index } = route.params;
  return (
    <SwipeScreen likeDislikeList={likeDislikeList} index={index}></SwipeScreen>
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
