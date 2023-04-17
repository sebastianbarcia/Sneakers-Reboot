import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import ButtonForm from "../components/ButtonForm";
import { useState } from "react";

import {
  TextInput,
  Button,
  Portal,
  Dialog,
  Paragraph,
} from "react-native-paper";

import TitleForm from "../components/TitleForm";

const Login = () => {
  const [mailLogin, setMailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [datos, setDatos] = useState("");
  const handleClosePicker = () => {
    setShowDatePicker(false);
  };

  const handleCheckLogin = () => {
   setDatos({mail: mailLogin , password: passwordLogin} );
  };

  console.log(datos)
  return (
    <SafeAreaView style={styles.screenView}>
         <TitleForm
          title={"Inicia tu sesión"}
          subtitle={"Unos datos y ya podrás controlar el uso de tus zapatillas"}
        />
      <View style={styles.container}>
        <TextInput
          mode="outlined"
          value={mailLogin}
          onChangeText={setMailLogin}
          label="Escribe tu mail"
          placeholder="Type something"
          keyboardType="email-address"
          autoCapitalize="none"
          onTouchStart={handleClosePicker}
          right={<TextInput.Affix text="/100" />}
        />
        <TextInput
          mode="outlined"
          label="Escribe una contraseña"
          placeholder="Type something"
          autoCapitalize="none"
          secureTextEntry
          value={passwordLogin}
          onTouchStart={handleClosePicker}
          onChangeText={setPasswordLogin}
          right={<TextInput.Affix text="/100" />}
        />
      
      </View>
      <View style={{ position: "absolute", bottom: 42, alignSelf: "center" }}>
          <ButtonForm text={"CONFIRMAR"} handleCheck={handleCheckLogin} />
        </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 20,
  },
  screenView: {
    height: "100%",
    backgroundColor: "white",
  },
});
