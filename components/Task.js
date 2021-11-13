import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Task = ({ message, index, setTodos }) => {
  const handleTodos = () => {
    setTodos((todo) => {
      const arr = [...todo];
      arr.splice(index, 1);
      return arr;
    });
  };
  return (
    <TouchableOpacity onPress={handleTodos}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square} />
          <Text style={styles.itemText}>{message}</Text>
        </View>
        <View style={styles.circular}></View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between",
    // height: "100%",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55bcf6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 10,
  },
  itemText: {
    maxWidth: "80%",
    // lineHeight: 1.4,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55bcf6",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
