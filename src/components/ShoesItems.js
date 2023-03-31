import { StyleSheet, Text, View , Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { fontPixel, pixelSizeHorizontal } from '../utils/normalize';

const ShoesItems = ({item}) => {
  return (
    <TouchableOpacity >
    <View style={{display:"flex" , flexDirection:"row" , justifyContent:"space-between" , marginBottom: pixelSizeHorizontal(20)}}>
        <Image style={{width:77 , height:64}} source={{uri :"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e03f8fa2-652d-4ef8-aa02-1d8b8bb0e018/pegasus-39-zapatillas-de-running-asfalto-rZmWzq.png" }}></Image>
        <View style={{gap:6}}>
            <Text style={{fontSize:fontPixel(16) , fontWeight:"bold"}}>Nike air pegasus</Text>
            <Text style={{fontSize:fontPixel(14)}}>250km / 400km </Text>
        </View>
        <Ionicons name="md-chevron-forward" size={24} color="black" />
    </View>
    <View >
    
    </View>
    </TouchableOpacity>
  )
}

export default ShoesItems

const styles = StyleSheet.create({})