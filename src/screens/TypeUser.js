import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { widthPixel, fontPixel, pixelSizeHorizontal } from "../utils/normalize";
import { typesUsers } from "../data/dataTypesUsers";
import TypeUserGrid from "../components/TypeUserGrid";
import ShowProduct from "../components/ShowProduct";
const TypeUser = ({ route, navigation }) => {
  const { shoesUser } = route.params;

  const handleSelect = (item) => {
    const selected = { ...shoesUser, item };
    navigation.push("UserKm", {
      selected,
    });
  };

  return (
    <View>
      <ShowProduct
        imgSrc={shoesUser.image.original}
        title={`¿Cada cuanto las utilizas?`}
      />
      <Text style={styles.subtitle}>
        {`Que uso le vas a dar a tus ${shoesUser.name} y calcularemos el tiempo de uso estimado`}
      </Text>
      <TypeUserGrid typesUsers={typesUsers} onSelect={handleSelect} />
    </View>
  );
};

export default TypeUser;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: fontPixel(14),
    textAlign: "left",
    marginTop: pixelSizeHorizontal(6),
    marginBottom: pixelSizeHorizontal(16),
    width: widthPixel(338),
    alignSelf: "center",
  },
});
