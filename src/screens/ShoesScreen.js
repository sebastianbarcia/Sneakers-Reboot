import { SafeAreaView, StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'
import { heightPixel, widthPixel , fontPixel } from '../utils/normalize'

const ShoesScreen = ({route}) => {
  const { shoesUser } = route.params
  
  return (
    <SafeAreaView>
    <View>
      <Image style={styles.image} source={{ uri: (shoesUser.image.original)}}></Image>
       <Text>{shoesUser.name}</Text>
      <Text>{shoesUser.size}</Text>
      <Text>{shoesUser.color}</Text> 
    </View>
    </SafeAreaView>
  )
}

export default ShoesScreen

const styles = StyleSheet.create(
  {image:{
    height:heightPixel(250),
    width:"100%"
  },
  name:{
    position:"absolute",
    top:230,
    display:"flex",
    alignSelf:"center",
    width:widthPixel(338),
  },
  title:{
    fontSize: fontPixel(16),
  }
})