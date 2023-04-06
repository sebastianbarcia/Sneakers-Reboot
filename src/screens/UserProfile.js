import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { fontPixel, pixelSizeHorizontal, widthPixel } from "../utils/normalize";
import UserPic from "../components/UserPic";
import { FontAwesome5 } from "@expo/vector-icons";
import ShoesItems from "../components/ShoesItems";
import { useDispatch, useSelector } from "react-redux";
import { getShoes } from "../store/actions/shoesUserList.action";
import { Ionicons } from "@expo/vector-icons";

const UserProfile = ({ navigation, route }) => {
  
 // const { userShoe } = route.params;
  
  const dispatch = useDispatch();
  const lista = useSelector((state) => state.list.list);
  
  useEffect(() => {
    dispatch(getShoes());
    
  }, []);

  const handleAddSneaker = () =>{
    
    navigation.push('Form')
    
  }

  const renderShoesItem = ({ item }) => <ShoesItems item={item} navigation={navigation} />;

  return (
    <View style={styles.container}>
      <View style={styles.profileUser}>
        <View style={styles.textProfile}>
          <Text style={styles.userName}>Sebastian Barcia</Text>
          <Text style={styles.text}>Argentina</Text>
          <Text style={styles.text}>30 años</Text>
          <Text style={styles.text}>700 kms</Text>
        </View>
        <View
          style={styles.containerIcons}
        >
          <UserPic navigation={navigation} />
          <Pressable onPress={() => console.log("edit")}>
            <FontAwesome5 name="edit" size={18} color="black" />
          </Pressable>
        </View>
      </View>
      <Text style={styles.titleList}>Zapatillas registradas</Text>
      <FlatList data={lista} renderItem={renderShoesItem}></FlatList>
      <TouchableOpacity
        style={styles.touchablePlus}
        onPress={
          handleAddSneaker
        }
      >
        <Ionicons name="ios-add-circle" size={64} color="grey" />
      </TouchableOpacity>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    width: widthPixel(338),
    alignSelf: "center",
    flex: 1,
    marginTop: 20,
  },
  profileUser: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textProfile: {
    gap: 8,
  },
  userName: {
    fontSize: fontPixel(20),
    fontWeight: "bold",
  },
  text: {
    fontSize: fontPixel(14),
  },
  titleList: {
    fontSize: fontPixel(16),
    marginBottom: pixelSizeHorizontal(20),
    marginTop: pixelSizeHorizontal(40),
  },
  containerIcons :{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  touchablePlus :{
    position: "absolute",
    alignSelf: "flex-end",
    bottom: 16,
    display: "flex",
  }
});
