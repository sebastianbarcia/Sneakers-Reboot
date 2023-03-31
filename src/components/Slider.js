import { StyleSheet, Text, View } from 'react-native'
import { Slider } from "@miblanchard/react-native-slider";
import React from 'react'
import { fontPixel, pixelSizeHorizontal, widthPixel } from '../utils/normalize';

const SliderKm = ({onSelectValue, values}) => {
    
  return (
    <View style={{width:widthPixel(338), alignSelf:"center"}}>
         <Text style={styles.text}>{values}Km</Text>
                <Slider
                    value={values}
                    minimumValue={25}
                    maximumValue={1200}
                    step={25}
                    onValueChange={value => onSelectValue(value)}
                />

    </View>
  )
}

export default SliderKm

const styles = StyleSheet.create({
    text:{
        fontSize:fontPixel(20),
        fontWeight:"bold",
        alignSelf:"center",
        marginTop:pixelSizeHorizontal(28),
        marginBottom:pixelSizeHorizontal(15)
    }
})