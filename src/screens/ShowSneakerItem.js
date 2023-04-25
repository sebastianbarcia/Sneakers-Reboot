import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import ShowProduct from "../components/ShowProduct";
import { fontPixel, pixelSizeHorizontal, widthPixel } from "../utils/normalize";
import { removeShoe } from "../store/actions/dataShoesUser.actions";
import { useDispatch } from "react-redux";
import { getShoes } from "../store/actions/shoesUserList.action";

const ShowSneakerItem = ({ route , navigation }) => {
  //falta la cantidad de kilometros que hizo la zapatilla y la fecha de ultimo dia de actividad

  const sneaker = route.params;
  const day = new Date(sneaker.item.date);
  const routeScreenData = sneaker.routeScreen.name
 
  const dispatch = useDispatch();
 
  const handleDelete = (item) => {
   
    dispatch(removeShoe(item))
    
   //ahi que cambiar esto porque solo va a userProfile  navigation.push("userProfile")
  }
  
  const handleStart = () => {
    navigation.push("activityConfirm" , {sneaker} )
    
  }

  return (
    <>
      <ShowProduct
        imgSrc={sneaker.item.items.image.original}
        title={`${sneaker.item.items.brand} ${sneaker.item.items.name}`}
      />
      <View style={styles.container}>
        <Text style={styles.fontSize}>Uso de {sneaker.item.items.item.use}</Text>
        <View
          style={styles.numbers}
        >
          <Text style={styles.fontSize}>{sneaker.item.items.kmsDone} kms</Text>
          <Text style={styles.fontSize}>{sneaker.item.items.estimateKm} kms</Text>
        </View>
        <View style={styles.linearContainer }>
          <View
            style={{
              width: `${(sneaker.item.items.kmsDone / sneaker.item.items.estimateKm) * 100}%`,
              borderWidth: 2,
            }}
          ></View>
        </View>
        <View style={styles.containerItemsText}>
        <Text style={styles.fontSize}>Talle: {sneaker.item.items.size}</Text>
        <Text style={styles.fontSize}>Color: {sneaker.item.items.color}</Text>
        <Text style={styles.fontSize}>Inicio de actividad: { `${day.getDate()}/${day.getMonth()}/${day.getFullYear()}`}</Text>
        <Text style={styles.fontSize}>Ultima actividad: 1/1/2023 </Text>

        </View>
        <View style={styles.buttonDelete} >
          {routeScreenData === "userProfile" ?  <Button title="ELIMINAR" onPress={()=>handleDelete(sneaker.item.id)}></Button> : <Button title="EMPEZAR" onPress={handleStart}></Button>}
         
        </View>
      </View>
    </>
  );
};

export default ShowSneakerItem;

const styles = StyleSheet.create({
  container:{ width: widthPixel(338), alignSelf: "center" },
  numbers: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: pixelSizeHorizontal(16),
    marginBottom: pixelSizeHorizontal(10) 
  },
  linearContainer:{ backgroundColor: "gray", marginBottom:pixelSizeHorizontal(16) },
  buttonDelete:{marginTop:pixelSizeHorizontal(125)},
  containerItemsText:{gap: pixelSizeHorizontal(16)},
  fontSize:{
    fontSize:fontPixel(14)
  }
});
