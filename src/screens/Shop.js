import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Shop = () => {
  return (
    <View style={styles.screen}>
      <Text>Shop</Text>
    </View>
  )
}

export default Shop

const styles = StyleSheet.create({
  screen:{ flex:1 , justifyContent:"center" , alignItems:"center"}
})