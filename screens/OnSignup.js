import { StyleSheet } from "react-native";
import SwipeScreen from "./SwipeScreen";
import { FIREBASE_AUTH } from "../firebaseConfig";

export default function OnSignup({ route }) {
  const { likeDislikeList, index } = route.params;

  console.log(FIREBASE_AUTH.currentUser);

  return <SwipeScreen likeDislikeList={likeDislikeList} index={index}></SwipeScreen>;
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
