import { StyleSheet, Text, View , Button , FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import ShoesItems from '../components/ShoesItems';
import TitleForm from '../components/TitleForm';
import { widthPixel } from '../utils/normalize';


const ActivityHome = ({navigation}) => {
  const lista = useSelector((state) => state.list.list);
  const renderShoesItem = ({ item }) => <ShoesItems item={item} navigation={navigation} />;
  return (
    <View style={styles.screen}>
      <TitleForm title={"Elige tu zapatilla"} subtitle={"¿Cual es la que vas a usar ahora?"}/>
      <FlatList data={lista} renderItem={renderShoesItem}></FlatList>
    </View>
  )
}

export default ActivityHome

const styles = StyleSheet.create({
  screen:{
    flex:1,
    width:widthPixel(338),
    alignSelf:"center",
  },
  touchablePlus :{
    position: "absolute",
    alignSelf: "flex-end",
    bottom: 16,
    display: "flex",
  }
})