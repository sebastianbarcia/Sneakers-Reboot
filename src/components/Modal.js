import { StyleSheet, Text, View, Modal as RNmodal } from "react-native";
import React from "react";
import ButtonModal from "./ButtonModal";
import { widthPixel } from "../utils/normalize";

const Modal = ({
  modalVisible,
  selectedItem,
  onCancelModal,
  onSelectItem,
}) => {
  return (
    <RNmodal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalMainView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{selectedItem}</Text>
          
          <View style={styles.modalActions}>
            <ButtonModal
              styleButtonType={styles.buttonCancel}
              title="CANCELAR"
              onPress={onCancelModal}
            />
            <ButtonModal
              styleButtonType={styles.buttonDelete}
              title="CONFIRMAR"
               onPress={() => {
                onSelectItem();
               }}
            />
          </View>
        </View>
      </View>
    </RNmodal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalMainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 11,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:24,
    paddingBottom:24,
    width: widthPixel(374),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
   width:334,
    paddingBottom:20, 
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalBoldText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonCancel: {
    backgroundColor: "#E0DDDD",
  },
  buttonDelete: {
    backgroundColor: "#2699FB",
  },
});
