import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
} from "react-native";

const TaskInput = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const textInputHandler = (text) => {
    setEnteredTask(text);
  };
  const addBtnHandler = () => {
    props.addBtnHandler(enteredTask);
    setEnteredTask("");
  };
  return (
    <Modal visible={props.modalState} animationType="slide" transparent={true}>
      <View style={styles.inputContainer}>
        <View style={styles.modalView}>
          <TextInput
            style={styles.textInput}
            onChangeText={textInputHandler}
            value={enteredTask}
          />
          <View style={styles.btnContainer}>
            <Pressable onPress={addBtnHandler} style={styles.addPressable}>
              <Text style={styles.pressableText}>ADD</Text>
            </Pressable>
            <Pressable
              onPress={props.cancelBtnHandler}
              style={styles.cancelPressable}
            >
              <Text style={styles.pressableText}>CANCEL</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: { marginTop: 150 },
  modalView: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "#4d4d4d",
    borderRadius: 20,
    padding: 35,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  textInput: {
    width: "90%",
    height: 50,
    borderColor: "white",
    // borderWidth: 2,
    marginTop: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
    backgroundColor: "white",
    fontSize: 20,
  },
  btnContainer: {
    marginTop: 30,
    flexDirection: "row",
  },
  addPressable: {
    width: "30%",
    height: 50,
    backgroundColor: "#00cc00",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  cancelPressable: {
    width: "30%",
    height: 50,
    backgroundColor: "#ff6666",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  pressableText: {
    fontFamily: "Helvetica",
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
  },
});

export default TaskInput;
