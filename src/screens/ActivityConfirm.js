import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import ShowProduct from "../components/ShowProduct";
import React from "react";
import { fontPixel, pixelSizeHorizontal } from "../utils/normalize";
import { useState, useEffect } from "react";
import Modal from "../components/Modal";

const ActivityConfirm = ({ navigation, route }) => {
  const sneaker = route.params;

  const [segundos, setSegundos] = useState(0);
  const [corriendo, setCorriendo] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    let intervalo;
    if (corriendo) {
      intervalo = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalo);
    };
  }, [corriendo]);

  const formatearTiempo = (tiempo) => {
    const horas = Math.floor(tiempo / 3600);
    const minutos = Math.floor((tiempo % 3600) / 60);
    const segundos = tiempo % 60;
    return `${horas < 10 ? "0" + horas : horas}:${
      minutos < 10 ? "0" + minutos : minutos
    }:${segundos < 10 ? "0" + segundos : segundos}`;
  };
  const detenerCronometro = () => {
    setCorriendo(false);
    setModalVisible(true);
    console.log(formatearTiempo(segundos));
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
    setCorriendo(true);
  };

  const sendDispatchPodometer = () => {
    console.log("enviado:", formatearTiempo(segundos));
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <ShowProduct
        imgSrc={sneaker.sneaker.item.items.image.original}
        title={``}
      />
      <View style={styles.containerText}>
        <Text style={styles.titleText}>Actividad iniciada</Text>
        <View style={styles.containerTitleOne}>
          <Text style={styles.textSubtitles}>Tiempo</Text>
          <Text style={styles.functionText}>
            {`${formatearTiempo(segundos)}`}
          </Text>
        </View>
        <View style={styles.containerTitleTwo}>
          <Text style={styles.textSubtitles}>Kms recorridos</Text>
          <Text style={styles.functionText}>30 KMS</Text>
        </View>
      </View>
      <View style={styles.buttonStyle}>
        <Button title="PARAR" onPress={detenerCronometro}></Button>
        <Modal
          modalVisible={modalVisible}
          selectedItem={`¿Quieres sacarte la zapatilla?`}
          onCancelModal={onCancelModal}
          onSelectItem={sendDispatchPodometer}
        />
      </View>
    </>
  );
};

export default ActivityConfirm;

const styles = StyleSheet.create({
  containerTitleOne: {
    alignSelf: "center",
    marginTop: pixelSizeHorizontal(38),
    marginBottom: pixelSizeHorizontal(20),
  },
  containerText: { alignSelf: "center" },
  titleText: { fontSize: fontPixel(24), fontWeight: "bold" },
  functionText: {
    fontSize: fontPixel(22),
    textAlign: "center",
    fontWeight: "bold",
  },
  containerTitleTwo: {
    alignSelf: "center",
    marginTop: pixelSizeHorizontal(20),
    marginBottom: pixelSizeHorizontal(20),
  },
  buttonStyle: { marginTop: pixelSizeHorizontal(60) },
  textSubtitles: {
    fontSize: fontPixel(22),
    textAlign: "center",
    marginBottom: pixelSizeHorizontal(8),
  },
});
