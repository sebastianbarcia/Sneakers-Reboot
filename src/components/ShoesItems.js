import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { fontPixel, pixelSizeHorizontal } from "../utils/normalize";
import { useRoute } from "@react-navigation/native";

const ShoesItems = ({ item, navigation }) => {
  const routeScreen = useRoute();
 //xd
  const handleShoes = (item) => {
    switch (routeScreen.name) {

      case "userProfile":
        navigation.push("sneakerItem", {
          item,
          routeScreen
        });
        break;
      case "ActivityHome":
        navigation.push("sneakerItem", {
          item,
          routeScreen
        });
        break;

      default:
        break;
    }
  };

  return (
    <TouchableOpacity onPress={() => handleShoes(item)}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: pixelSizeHorizontal(20),
        }}
      >
        <Image
          style={{ width: 77, height: 64 }}
          source={{ uri: item.items.image.original }}
        ></Image>
        <View style={{ gap: 6 }}>
          <Text
            style={{ fontSize: fontPixel(16), fontWeight: "bold" }}
          >{`${item.items.brand} ${item.items.name}`}</Text>
          <Text style={{ fontSize: fontPixel(14) }}>
            {`${item.items.kmsDone.toFixed(2)}/${item.items.estimateKm}km`}{" "}
          </Text>
        </View>
        <Ionicons name="md-chevron-forward" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default ShoesItems;

const styles = StyleSheet.create({});
