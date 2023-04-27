import { StyleSheet, Text, Image } from 'react-native'
import React from 'react'
import { heightPixel , fontPixel , pixelSizeHorizontal , pixelSizeVertical , widthPixel } from '../utils/normalize'
import { Platform } from 'react-native'


const ShowProduct = ({imgSrc , title}) => {
  return (
    <>
       <Image
          style={styles.image}
          source={{ uri: imgSrc }}
        ></Image>
        <Text style={styles.title}>{title}</Text>
    </>
  )
}

export default ShowProduct

const styles = StyleSheet.create({
    image: {
        height: Platform.OS === "android" ?  heightPixel(240) : heightPixel(210),
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
})