import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import OnBoarding from '../components/OnBoarding'
import Form from '../components/Form'
import FormNavigator from '../navigators/ProfileNavigator'
import { useDispatch, useSelector } from "react-redux";
import { getShoes } from "../store/actions/shoesUserList.action";
import UserShoeNavigator from '../navigators/UserShoeNavigator'
import { useEffect } from 'react'

const Profile = () => {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.list.list);
   
    
  useEffect(() => {
    dispatch(getShoes());
   
  }, []);
  
  if(!list || (list.length === 0)){

      return (
        <>
        <FormNavigator/>
        
        </>
      )
  }else{
    return(
        <>
        <UserShoeNavigator/>
        </>
    )
  }

}

export default Profile

