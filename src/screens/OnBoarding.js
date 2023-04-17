import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import Carousel from "pinar";
import { fontPixel, heightPixel, widthPixel } from "../utils/normalize";
import sliderOnBoarding from "../data/onBoardingData";
import ButtonForm from "../components/ButtonForm";

const OnBoarding = ({navigation}) => {

  function handleRegistration(){
    navigation.push("Register")
  }
  function handleLogin(){
    navigation.push("Login")
  }
  return (
    <>
      <Carousel>
        {sliderOnBoarding.map((item) => {
          return (
            <View style={styles.slider} key={item.id}>
              <ImageBackground
                source={item.img}
                resizeMode="cover"
                style={styles.image}
              >
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.paragraph}>{item.paragraph}</Text>
              </ImageBackground>
            </View>
          );
        })}
      </Carousel>
      <View style={styles.logo}>
        <Text style={styles.logotype}>Sneakers Reboot</Text>
      </View>
      <View style={{position: "absolute",  bottom: 42, alignSelf: "center", gap:16}}>
      <ButtonForm text={"REGISTRARSE"} handleCheck={handleRegistration}/>
      <ButtonForm text={"INICIAR SESIÓN"} handleCheck={handleLogin}/>
      </View>
    </>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  logo: {
    position: "absolute",
    top: 68,
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
  logotype:{
    fontSize: fontPixel(20),
    color:"white"
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 122,
    alignItems: "center",
  },
  slider: {
    flex: 1,
  },
  title: {
    fontSize: fontPixel(20),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
    color:"white",
    width: widthPixel(338),
  },
  paragraph:{
    color:"white",
    width: widthPixel(338),
    fontSize: fontPixel(16)
  },
  button:{
      position: "absolute",
      bottom: 42,
      backgroundColor: "black",
      padding: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: widthPixel(338),
      height: heightPixel(48),
      alignSelf: "center",
      borderRadius: 6,
  },
  buttonText:{ 
    color: "white", 
    fontSize: fontPixel(14) 
}
});
