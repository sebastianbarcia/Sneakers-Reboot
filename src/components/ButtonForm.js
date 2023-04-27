import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { fontPixel, heightPixel, widthPixel } from "../utils/normalize";
import React from "react";

const ButtonForm = ({ handleCheck, text }) => {
  return (
    <TouchableHighlight style={styles.button} onPress={handleCheck}>
      <View>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default ButtonForm;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: widthPixel(338),
    height: heightPixel(48),
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
    fontSize: fontPixel(14),
  },
});
