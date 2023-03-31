import { StyleSheet, Text, Pressable  } from "react-native";
import React from "react";
import { fontPixel, heightPixel, pixelSizeHorizontal, widthPixel } from "../utils/normalize";

const ButtonModal = ({
    styleButtonType,
    onPress,
    title
}) => {
  return (
    <Pressable
      style={[styles.button, styleButtonType]}
      onPress={onPress}
    >
      <Text style={styles.textBtn}>{title}</Text>
    </Pressable>
  );
};

export default ButtonModal;

const styles = StyleSheet.create({
    button: {
        width: widthPixel(149),
        height: heightPixel(42),
        justifyContent:"center",
        alignItems:"center",
        borderRadius:4
      },
      textBtn:{
        fontSize: fontPixel(14),
        color:"white",
        fontWeight:"bold"
      }
});
