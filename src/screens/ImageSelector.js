import { StyleSheet, Text, View , Image ,Button , Alert } from 'react-native'
import React ,{useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
//import * as Permission from 'expo-permissions'

const ImageSelector = ({onImage}) => {
    const [pickedUri , setPickedUri] = useState();

    const verifyPermission = async () => {
        const {status} = await ImagePicker.requestCameraPermissionsAsync()

        if(status !== 'granted'){
           Alert.alert(
            'permisos insuficientes', 
            'necesita dar permisos de la camara para usar la aplicación',
            [{text: "ok"}],
           )
           return false;
        }
        return true;

    } 

    const handlerTakeImage = async () => {
        const isCamaraOk = await verifyPermission();
        if(!isCamaraOk) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing:true,
            aspect:[16,9],
            quality: 0.8,
        })
        setPickedUri(image.assets[0].uri)
        onImage(image.assets[0].uri)
    } 
  return (
    <View style={styles.container}>
        <View style={styles.preview}>
            {!pickedUri ? (<Text>No hay imagen seleccionada...</Text>) : <Image style={styles.image} source={{uri:pickedUri}}></Image>}
        </View>
      <Button title='TOMAR FOTO' onPress={handlerTakeImage}></Button>
    </View>
  )
}

export default ImageSelector

const styles = StyleSheet.create({
    container:{marginBottom:10},
    preview:{width:'100%', height:200 , marginBottom:10, justifyContent:'center', alignItems:'center', borderColor:'black' , borderWidth:1},
    image:{width:'100%' , height:'100%'}
})