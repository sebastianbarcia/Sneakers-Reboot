import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OnBoarding from '../components/OnBoarding'

const Profile = () => {
  return (
    <OnBoarding/>
  )
}

export default Profile

const styles = StyleSheet.create({
  screen:{ flex:1 , justifyContent:"center" , alignItems:"center"}
})