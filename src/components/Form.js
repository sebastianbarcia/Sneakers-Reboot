import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";

import {
  widthPixel,
  heightPixel,
} from "../utils/normalize";

//redux 
import { useSelector , useDispatch } from "react-redux";
import { filterShoes , filterModel } from "../store/actions/shoes.actions";
import { findSizes, sizesShoes } from "../store/actions/sizeShoes.actions";
import { shoesColor , filterColor } from "../store/actions/colorShoes.actions";
import { confirmShoe } from "../store/actions/dataShoesUser.actions";
import TitleForm from "./TitleForm";
const Form = ({ navigation }) => {

  //redux
  const dispatch = useDispatch();

  //Sizes shoes
  const filteredSize = useSelector(state => state.size.filteredSizes)

  const findSizesShoes = useSelector(state => state.size.findSizes)

  //shoes brand
  const filteredShoes = useSelector(state => state.brand.filteredShoes)
  //shoes model
  const modelFilter = useSelector(state => state.brand.filteredModel)
  
  const brandFilter = filteredShoes.filter((valor, indice) => {
      return filteredShoes.indexOf(valor) === indice;
  })
  const filtres = brandFilter.map((brand) => ({
      brand: brand,
  }))
   
  //color
  const colorShoes = useSelector(state => state.color.color)
  const filterColorShoes = useSelector(state => state.color.findColor)
  

  //brand
  const [isFocusBrand, setIsFocusBrand] = useState(false);
  const [valueBrand, setValueBrand] = useState(null);

  //model
  const [modelFiltered, setModelFiltered] = useState();
  const [valueModel, setValueModel] = useState(null);
  const [isFocusModel, setIsFocusModel] = useState(false);

  //talla
  const [isFocusSize, setIsFocusSize] = useState(false);

  //color
  const [isFocusColor, setIsFocusColor] = useState(false);

  //zapatilla elegida
  const [shoes, setShoes] = useState();
  
  const handleShoes = () => {
    
      
    if (shoes !== undefined && filterColorShoes.color !== undefined && findSizesShoes.size !== undefined) {
      const shoesUser = { ...shoes, color: filterColorShoes.color , size: findSizesShoes.size };
      
      //!IMPORTANTE LUEGO ESTO HAY QUE PONERLO EN LA ULTIMA PARTE PARA CONFIRMAR
     // dispatch(confirmShoe(shoesUser));
      
      navigation.push("Products", {
        shoesUser, 
      });
    }
  };

  const renderLabelModel = () => {
    if (valueModel || isFocusModel) {
      return (
        <Text style={[styles.label, isFocusModel && { color: "blue" }]}>
          Modelo
        </Text>
      );
    }
    return null;
  };
  const renderLabelBrand = () => {
    if (valueBrand || isFocusBrand) {
      return (
        <Text style={[styles.label, isFocusBrand && { color: "blue" }]}>
          Marca
        </Text>
      );
    }
    return null;
  };
  const renderLabelSize = () => {
    if (findSizesShoes.size || isFocusSize) {
      return (
        <Text style={[styles.label, isFocusSize && { color: "blue" }]}>
          Talla
        </Text>
      );
    }
    return null;
  };
  const renderLabelColor = () => {
    if (filterColorShoes.color || isFocusColor) {
      return (
        <Text style={[styles.label, isFocusColor && { color: "blue" }]}>
          Color
        </Text>
      );
    }
    return null;
  };

  //dejo acá!

  useEffect(() => {
    //filtrado que elimina marcas repetidas
    dispatch(filterShoes(filteredShoes))
    //tamaño
    dispatch(sizesShoes(filteredSize))
    //modelo
    setModelFiltered(modelFilter);
    //color
    dispatch(shoesColor(colorShoes))
    
   }, [valueBrand]);
  
  return (
    <SafeAreaView style={styles.screenView}>
      <TitleForm title="¿Cual es tu zapatilla?" subtitle="Elige entre todos los modelos de nuestra base de datos"/>
      <View style={styles.container}>
        {renderLabelBrand()}
        {/*Brand*/}
        <Dropdown
          style={[styles.dropdown, isFocusBrand && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={filtres}
          search
          maxHeight={300}
          labelField="brand"
          valueField="brand"
          placeholder={!isFocusBrand ? "Selecciona marca" : "..."}
          searchPlaceholder="Search..."
          value={valueBrand}
          onFocus={() => setIsFocusBrand(true)}
          onBlur={() => setIsFocusBrand(false)}
          onChange={(item) => {
            dispatch(filterModel(item.brand))
            setValueBrand(item.brand);
            setIsFocusBrand(false);
          }}
        />
      </View>

      {/*Model*/}

      <View style={styles.container}>
        {renderLabelModel()}
        <Dropdown
          style={[styles.dropdown, isFocusModel && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={modelFiltered}
          search
          maxHeight={300}
          labelField="name"
          valueField="name"
          placeholder={!isFocusModel ? "Selecciona modelo" : "..."}
          searchPlaceholder="Search..."
          value={valueModel}
          onFocus={() => setIsFocusModel(true)}
          onBlur={() => setIsFocusModel(false)}
          onChange={(item) => {
            setShoes(item);
            setValueModel(item.name);
            setIsFocusModel(false);
          }}
        />
      </View>

      {/*Talla*/}

      <View style={styles.container}>
        {renderLabelSize()}
        <Dropdown
          style={[styles.dropdown, isFocusSize && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={filteredSize}
          search
          maxHeight={300}
          labelField="size"
          valueField="size"
          placeholder={!isFocusSize ? "Selecciona talla" : "..."}
          searchPlaceholder="Search..."
          value={findSizesShoes.size}
          onFocus={() => setIsFocusSize(true)}
          onBlur={() => setIsFocusSize(false)}
          onChange={(item) => {
            dispatch(findSizes(item.size))
            setIsFocusSize(false);
          }}
        />
      </View>

      {/*Color*/}

      <View style={styles.container}>
        {renderLabelColor()}
        <Dropdown
          style={[styles.dropdown, isFocusColor && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={colorShoes}
          search
          maxHeight={300}
          labelField="color"
          valueField="color"
          placeholder={!isFocusColor ? "Selecciona color" : "..."}
          searchPlaceholder="Search..."
          value={filterColorShoes.color}
          onFocus={() => setIsFocusColor(true)}
          onBlur={() => setIsFocusColor(false)}
          onChange={(item) => {
            dispatch(filterColor(item.color))
            setIsFocusColor(false);
          }}
        />
      </View>
      <View style={{ marginTop: 98 }}>
        <Button onPress={handleShoes} title="CONFIRMAR"></Button>
      </View>
    </SafeAreaView>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    padding: 16,
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
});
