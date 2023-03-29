import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { pixelSizeHorizontal, widthPixel } from "../utils/normalize";

const TitleForm = ({ title, subtitle }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default TitleForm;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: pixelSizeHorizontal(58),
    width: widthPixel(338),
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 6,
    marginBottom: pixelSizeHorizontal(55),
    width: widthPixel(338),
    alignSelf: "center",
  },
});
