import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AutoGrowingTextInput } from "react-native-autogrow-textinput";

export default function NoteInput(props) {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredContent, setenteredContent] = useState("");

  const onSave = () => {
    if (enteredTitle === "" || enteredContent === "") {
      alert("Please add a Title or Content");
    } else {
      const newnote = {
        title: enteredTitle,
        content: enteredContent,
      };
      props.note(newnote);
      setenteredTitle("");
      setenteredContent("");
    }
  };

  const renderSave = () => {
    if (enteredTitle === "" || enteredContent === "") {
      console.log("empty");
    } else {
      return (
        <Pressable style={styles.icons}>
          <Ionicons
            name="save-sharp"
            size={30}
            color="yellow"
            onPress={onSave}
          />
        </Pressable>
      );
    }
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Text style={styles.txt}>Type your Notes</Text>
          {renderSave()}
          <Pressable style={styles.icons1}>
            <Ionicons
              name="arrow-back-outline"
              size={30}
              color="yellow"
              onPress={props.onBack}
            />
          </Pressable>
        </View>
        <View style={styles.container3}>
          <TextInput
            style={styles.input}
            placeholder="Title"
            placeholderTextColor="white"
            multiline={true}
            numberOfLines={1}
            maxLength={25}
            onChangeText={setenteredTitle}
            value={enteredTitle}
          />
        </View>
        <View style={styles.container4}>
          <AutoGrowingTextInput
            style={styles.input1}
            placeholder="Content"
            placeholderTextColor="white"
            onChangeText={setenteredContent}
            value={enteredContent}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#353839",
  },
  txt: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    padding: 10,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    position: "absolute",
    top: 13,
    left: 350,
  },
  icons1: {
    position: "absolute",
    top: 13,
    right: 350,
  },
  container3: {
    padding: 5,
    margin: 5,
    width: "97%",
  },
  input: {
    fontSize: 30,
    color: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  input1: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    fontSize: 20,
    color: "#fff",
  },
  container4: {
    padding: 5,
    marginTop: 10,
    marginLeft: 5,
    width: "97%",
  },
});
