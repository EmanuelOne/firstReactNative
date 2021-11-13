import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [todos, setTodos] = React.useState([]);
  // [
  //   "Buy Egg",
  //   "Message Linda",
  //   "Add the Milk to Feed",
  // ]
  const [text, setText] = React.useState("");
  const handleAddTask = () => {
    Keyboard.dismiss();
    // console.log("Adding Task", text);
    setTodos([...todos, text]);
    setText("");
  };
  return (
    <View style={styles.container}>
      {/* Todo's Task */}
      <View style={styles.textWrapper}>
        <Text style={styles.sectionTitle}>Todo's Task</Text>
        <View style={styles.item}>
          {/* This is where the task will go */}
          {todos.map((item, key) => (
            <Task {...{ key }} message={item} {...{ index: key, setTodos }} />
          ))}
        </View>
      </View>
      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTextWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          onChangeText={(text) => setText(text)}
          defaultValue={text}
          value={text}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWraper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(232, 234, 237, 1)",
  },
  textWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  item: {
    marginTop: 30,
  },
  writeTextWrapper: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  addWraper: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  addText: {
    backgroundColor: "#fff",
  },
  input: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
});
