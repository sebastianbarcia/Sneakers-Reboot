import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import ActivityNavigator from '../navigators/ActivityNavigator'

const Activity = () => {
  
  return (
    <ActivityNavigator/>
  )
}

export default Activity

const styles = StyleSheet.create({
  screen:{ flex:1 , justifyContent:"center" , alignItems:"center"}
})