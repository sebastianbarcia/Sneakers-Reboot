import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontPixel, pixelSizeHorizontal, widthPixel } from '../utils/normalize';
import ShowProduct from '../components/ShowProduct';
import SliderKm from '../components/Slider';
import { Ionicons } from '@expo/vector-icons'; 
import { Button } from 'react-native';
import { useState } from 'react';
import Modal from '../components/Modal';


import { useSelector , useDispatch } from "react-redux";
import { confirmShoe } from "../store/actions/dataShoesUser.actions";

const UserKmLimit = ({route , navigation}) => {
  const { selected } = route.params;
  const dispatch = useDispatch();

  const [values, setValues] = useState([500]);

  //MODAL

  const [modalVisible, setModalVisible] = useState(false);
  
  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };
  
   
    function estimateKms(){
       setModalVisible(true);
    }

function onSelectItem(){
  const userShoe = {...selected , estimateKm: values[0]}
    dispatch(confirmShoe(userShoe));
    setModalVisible(!modalVisible);
       navigation.push("userProfile", {
         userShoe 
       })
}

 

  return (
    <View>
      <ShowProduct imgSrc={selected.image.original} title={`¿ Cuantos kilometros vas a hacerles a tus ${selected.name} ?`}/>
      <SliderKm values={values} onSelectValue={setValues}/>
      <View style={styles.info}>
      <Ionicons name="information-circle-outline" size={25} color="black" />
      <Text style={styles.infoText}>
        Te recomendamos no hacer mas de 500 km con ellas y un máximo de 1000 kms.
        informacion informacion informacion informacion informacion informacion  
        informacion informacion informacion  
      </Text>
      </View>
      <Button title="CONFIRMAR" onPress={estimateKms} ></Button>
      <Modal
       modalVisible={modalVisible}
        selectedItem={`¿Confirma la zapatilla ${selected.name}?`}
        onCancelModal={onCancelModal}
        onSelectItem={onSelectItem}
      />  
    </View>
  )
}

export default UserKmLimit

const styles = StyleSheet.create({
  info:{
    alignSelf:"center",
    width:widthPixel(338),
    marginTop: pixelSizeHorizontal(46),
    marginBottom: pixelSizeHorizontal(36),
    display:'flex',
    flexDirection:"row",
    alignItems:"center",
    gap:24.8,
  },
  infoText:{
    fontSize:fontPixel(14),
    width:widthPixel(288)
  }
})