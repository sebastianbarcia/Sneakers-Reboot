import { StyleSheet, View, Text } from "react-native";
import React, { useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleForm from "../components/TitleForm";
import UserPic from "../components/UserPic";
import { widthPixel, heightPixel } from "../utils/normalize";
import DateTimePicker from "@react-native-community/datetimepicker";
import { dataCountry } from "../data/dataCountry";
import { Dropdown } from "react-native-element-dropdown";
import { useSelector } from "react-redux";
import { Alert } from "react-native";
import { TextInput } from "react-native-paper";
import ButtonForm from "../components/ButtonForm";
import { useDispatch } from "react-redux";
import { signup } from "../store/actions/auth.actions";

const Register = ({ navigation }) => {
  //usestates
  //inputs
  const [email, setMail] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [password, setPassword] = useState("");

  //date
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [openDate, setOpenDate] = useState(false);

  //dropdown
  const [valueDropdown, setValueDropdown] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const dispatch = useDispatch();

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleShowDatePicker = () => {
    setShowDatePicker(true);
    setOpenDate(true);
  };

  const handleClosePicker = () => {
    setShowDatePicker(false);
  };

  //DROPDOWN LABEL
  const renderLabel = () => {
    if (valueDropdown || isFocus) {
      return (
        <Text style={[styles.labelDropdown, isFocus && { color: "blue" }]}>
          Elige tu pais
        </Text>
      );
    }
    return null;
  };

  // EVENTO CHECK DATOS

  const handleCheck = () => {
    if (password.length > 8 && nameUser && email) {
      dispatch(
        signup(password, email, nameUser, valueDropdown, date, usesPhotos)
      );
    } else {
      Alert.alert(
        "Datos incorrectos",
        "Por favor proporcione una contraseña, su nombre completo y su correo electronico para que pueda acceder a la aplicación",
        [{ text: "OK" }]
      );
    }
  };

  const usesPhotos = useSelector((state) => state.image.photos.image);

  return (
    <View>
      <SafeAreaView style={styles.screenView}>
        <TitleForm
          title={"Crea tu cuenta"}
          subtitle={"Unos datos y podras controlar el uso de tus zapatillas"}
        />

        <View style={styles.container}>
          <View style={{ marginBottom: 20 }}>
            <UserPic navigation={navigation} />
          </View>
          <TextInput
            mode="outlined"
            label="Escribe tu nombre"
            placeholder="Type something"
            autoCapitalize="none"
            value={nameUser}
            onTouchStart={handleClosePicker}
            onChangeText={setNameUser}
            right={<TextInput.Affix text="/100" />}
          />
          <TextInput
            mode="outlined"
            value={email}
            onChangeText={setMail}
            label="Escribe tu mail"
            placeholder="Type something"
            autoCapitalize="none"
            keyboardType="email-address"
            onTouchStart={handleClosePicker}
            right={<TextInput.Affix text="/100" />}
          />
          <TextInput
            mode="outlined"
            label="Escribe una contraseña"
            placeholder="Type something"
            secureTextEntry
            value={password}
            onTouchStart={handleClosePicker}
            onChangeText={setPassword}
            right={<TextInput.Affix text="/100" />}
          />

          <TextInput
            label={"Fecha de nacimiento"}
            mode="outlined"
            value={openDate ? date.toLocaleDateString() : ""}
            onTouchStart={handleShowDatePicker}
          />

          <View style={styles.containerDropdown}>
            {renderLabel()}
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyleDropdown}
              selectedTextStyle={styles.selectedTextStyleDropdown}
              inputSearchStyle={styles.inputSearchStyleDropdown}
              iconStyle={styles.iconStyleDropdown}
              data={dataCountry}
              search
              maxHeight={300}
              labelField="label"
              valueField="label"
              placeholder={!isFocus ? "Elige tu pais" : "..."}
              searchPlaceholder="Search..."
              value={valueDropdown}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValueDropdown(item.label);
                setIsFocus(false);
              }}
            />
          </View>
        </View>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="spinner"
            dateFormat="day month year"
            onChange={handleDateChange}
          />
        )}
        <View style={{ position: "absolute", bottom: 42, alignSelf: "center" }}>
          <ButtonForm text={"CONFIRMAR"} handleCheck={handleCheck} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 20,
  },
  dropdown: {
    alignSelf: "center",
    width: widthPixel(338),
    height: heightPixel(48),
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 42,
    top: 6,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  screenView: {
    height: "100%",
    backgroundColor: "white",
  },
  input: {
    marginTop: 10,
    backgroundColor: "transparent",
  },

  containerDropdown: {
    backgroundColor: "white",
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 16,
  },
  iconDropdown: {
    marginRight: 5,
  },
  labelDropdown: {
    position: "absolute",
    backgroundColor: "white",
    left: 16,
    bottom: 43,
    zIndex: 999,
    paddingHorizontal: 4,
    fontSize: 12,
  },
  placeholderStyleDropdown: {
    fontSize: 16,
  },
  selectedTextStyleDropdown: {
    fontSize: 16,
  },
  iconStyleDropdown: {
    width: 20,
    height: 20,
  },
  inputSearchStyleDropdown: {
    height: 40,
    fontSize: 16,
  },
});
