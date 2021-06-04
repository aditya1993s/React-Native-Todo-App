import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import {
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
  View,
} from "react-native";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const modalBtnHandler = () => {
    setShowModal(true);
  };
  const cancelBtnModal = () => {
    setShowModal(false);
  };
  const addBtnHandler = (itemToAdd) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      { key: Math.random().toString(), value: itemToAdd },
    ]);
    setShowModal(false);
  };
  const onDeleteHandler = (itemkeyToDelete) => {
    setTasks((currentTasks) =>
      currentTasks.filter((item) => item.key != itemkeyToDelete)
    );
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require("./assets/backdrop.jpg")}
      ></Image>
      <View style={styles.addBtnContainer}>
        <Pressable onPress={modalBtnHandler} style={styles.addPressable}>
          <Text style={styles.pressableText}>ADD TASK</Text>
        </Pressable>
      </View>
      <TaskInput
        modalState={showModal}
        cancelBtnHandler={cancelBtnModal}
        addBtnHandler={addBtnHandler}
      />
      <FlatList
        data={tasks}
        renderItem={(item) => {
          return (
            <TaskList
              title={item.item.value}
              onDeleteHandler={onDeleteHandler.bind(this, item.item.key)}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    // top: -15,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.5,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    marginTop: 40,
  },
  addBtnContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  addPressable: {
    width: "30%",
    height: 50,
    backgroundColor: "#ff9933",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  pressableText: {
    fontFamily: "Helvetica",
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
  },
});
