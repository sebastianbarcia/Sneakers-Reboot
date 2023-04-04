import { StyleSheet,Pressable ,Image } from 'react-native'
import { FontAwesome5 } from "@expo/vector-icons";
import React from 'react'

const UserPic = ({navigation}) => {
  const handlePic = () =>{
    navigation.push("picShot")
  }
  return (
    <Pressable onPress={handlePic} 
    style={styles.img}>
      <FontAwesome5 name="user-alt" size={16} color="black" />
        {/* <Image source={{""}}></Image> */}
    </Pressable>
  )
}

export default UserPic

const styles = StyleSheet.create({
    img:{
        width: 56,
        height: 56,
        backgroundColor: "grey",
        borderRadius: 99,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }
})