import { StyleSheet, Pressable, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { useSelector } from "react-redux";

const UserPic = ({ navigation }) => {
  const usesPhotos = useSelector((state) => state.image.photos.image);

  const handlePic = () => {
    navigation.push("picShot");
  };
  return (
    <Pressable onPress={handlePic} style={styles.img}>
      {!usesPhotos ? (
        <FontAwesome5 name="user-alt" size={16} color="black" />
      ) : (
        <Image style={styles.imgPic} source={{ uri: usesPhotos }}></Image>
      )}
    </Pressable>
  );
};

export default UserPic;

const styles = StyleSheet.create({
  img: {
    width: 56,
    height: 56,
    backgroundColor: "grey",
    borderRadius: 99,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  imgPic: { width: "100%", height: "100%", borderRadius: 99 },
});
