import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  heightPixel,
  widthPixel,
  fontPixel,
  pixelSizeHorizontal,
} from "../utils/normalize";
import { typesUsers } from "../data/dataTypesUsers";
import TypeUserGrid from "../components/TypeUserGrid";
const TypeUser = ({ route }) => {
  const { shoesUser } = route.params;

  const handleSelect = () => {
    console.log("hola")
  }


  return (
      <View>
        <Image
          style={styles.image}
          source={{ uri: shoesUser.image.original }}
        ></Image>
        <Text style={styles.title}>¿Cada cuanto las utilizas?</Text>
        <Text style={styles.subtitle}>
          Que uso le vas a dar a tus zapatillas y calcularemos el tiempo de uso
          estimado
        </Text>
        <TypeUserGrid typesUsers={typesUsers} onSelect={handleSelect}/>
      </View>
  );
};

export default TypeUser;

const styles = StyleSheet.create({
  image: {
    height: heightPixel(210),
    width: "100%",
  },
  title: {
    textAlign: "left",
    fontSize: fontPixel(20),
    fontWeight: "bold",
    marginBottom: pixelSizeHorizontal(8),
    marginTop: pixelSizeHorizontal(16),
    width: widthPixel(338),
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
  subtitle: {
    fontSize: fontPixel(14),
    textAlign: "left",
    marginTop: pixelSizeHorizontal(6),
    marginBottom: pixelSizeHorizontal(16),
    width: widthPixel(338),
    alignSelf: "center",
  },
});
