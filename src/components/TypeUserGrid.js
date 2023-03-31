import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  widthPixel,
} from "../utils/normalize";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const TypeUserGrid = ({ typesUsers, onSelect }) => {
  return (
    <View style={styles.screenView}>
      {typesUsers.map((item) => {
        return (
          <TouchableOpacity
            onPress={() => onSelect(item)}
            style={styles.container}
            key={item.id}
          >
            <View style={styles.title} key={item.id}>
              {item.use === "Ocasional" && (
                <MaterialCommunityIcons
                  name="speedometer-slow"
                  size={fontPixel(40)}
                  color="black"
                />
              )}
              {item.use === "Carreras" && (
                <FontAwesome5
                  name="running"
                  size={fontPixel(40)}
                  color="black"
                />
              )}
              {item.use === "Media Maratón" && (
                <MaterialCommunityIcons
                  name="run-fast"
                  size={fontPixel(40)}
                  color="black"
                />
              )}
              {item.use === "Maratón" && (
                <Ionicons name="ios-flash" size={fontPixel(40)} color="black" />
              )}
              <Text style={styles.text}>{item.use}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TypeUserGrid;

const styles = StyleSheet.create({
  screenView: {
    width: widthPixel(338),
    height: heightPixel(282),
    display: "flex",
    flexWrap: "wrap",
    flexDirection:"row",
    gap: 10,
    rowGap:18,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: pixelSizeHorizontal(16) 
  },
  container: {
    borderRadius: 4,
    height: heightPixel(120),
    backgroundColor: "#DBDBDB",
    width: widthPixel(164),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    fontSize: fontPixel(14),
    fontWeight: "bold",
    marginTop: pixelSizeHorizontal(6),
    marginBottom: pixelSizeHorizontal(2),
  },
  description: {
    fontSize: fontPixel(12),
  },
});
