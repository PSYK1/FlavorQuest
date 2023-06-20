import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_DB, FIREBASE_AUTH } from "../firebaseConfig";
import { doc, setDoc, collection } from "firebase/firestore";

export default function SwipeScreen({ likeDislikeList, index }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={likeDislikeList[index].loc}></Image>
      <View style={styles.options}>
        <TouchableOpacity
          onPress={() => {
            likeDislikeList[index].like = -1;
            if (index === likeDislikeList.length - 1) {
              const likes = [];
              const dislikes = [];
              for (let i = 0; i < likeDislikeList.length; i++) {
                if (likeDislikeList[i].like === 1) {
                  console.log(likeDislikeList[i].categories);
                  likes.push(likeDislikeList[i].categories);
                } else {
                  console.log(likeDislikeList[i].categories);
                  dislikes.push(likeDislikeList[i].categories);
                }
              }
              setDoc(doc(FIREBASE_DB, "likesDislikes", FIREBASE_AUTH.currentUser.email), {
                likes: likes,
                dislikes: dislikes,
              });
              navigation.navigate("Restaurants");
            } else {
              navigation.navigate("OnSignup", {
                likeDislikeList: likeDislikeList,
                index: index + 1,
              });
            }
            console.log(likeDislikeList);
          }}
        >
          <Image source={require("../assets/images/thumbsDown.png")}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            likeDislikeList[index].like = 1;
            if (index === likeDislikeList.length - 1) {
              const likes = [];
              const dislikes = [];
              for (let i = 0; i < likeDislikeList.length; i++) {
                if (likeDislikeList[i].like === 1) {
                  likes.push(likeDislikeList[i].categories);
                } else {
                  dislikes.push(likeDislikeList[i].categories);
                }
              }
              setDoc(doc(FIREBASE_DB, "likesDislikes", FIREBASE_AUTH.currentUser.email), {
                likes: likes,
                dislikes: dislikes,
              });
              navigation.navigate("Restaurants");
            } else {
              navigation.navigate("OnSignup", {
                likeDislikeList: likeDislikeList,
                index: index + 1,
              });
            }
            console.log(likeDislikeList);
          }}
        >
          <Image source={require("../assets/images/like.png")}></Image>
        </TouchableOpacity>
      </View>
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
  options: {
    width: "100%",
    height: "100%",
    paddingBottom: "10%",
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
});
