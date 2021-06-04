import React from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";

const TaskList = (props) => {
  return (
    <View style={styles.taskListContainer}>
      <Text style={styles.tastText}>{props.title}</Text>
      <Pressable
        onPress={props.onDeleteHandler.bind(this, props.key)}
        style={styles.pressable}
      >
        <Text style={styles.pressableText}>-</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  taskListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    paddingLeft: 30,
    marginTop: 10,
  },
  tastText: {
    fontSize: 20,
    color: "#0033cc",
    fontWeight: "bold",
  },
  pressable: {
    width: "20%",
    height: 50,
    backgroundColor: "#ff6666",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  pressableText: {
    fontFamily: "Helvetica",
    fontWeight: "bold",
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    paddingBottom: 5,
  },
});
export default TaskList;
