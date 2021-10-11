import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import { Ionicons } from "@expo/vector-icons";
import NoteInput from "./screens/NoteInput";
import NoteItem from "./screens/NoteItem";

export default function HomeScreen() {
  const [isMode, setIsMode] = useState(false);
  const [curnotes, setCurNotes] = useState([]);

  const onNote = (notes) => {
    setCurNotes((currentNotes) => [
      ...currentNotes,
      {
        id: Math.random().toString(),
        value: [notes.title, notes.content],
        Date: moment().format("Do MMMM YYYY, h:mm a"),
      },
    ]);
    setIsMode(false);
  };

  const onBack = () => {
    Alert.alert("Warning", "Are you sure you want to go back", [
      {
        text: "Yes",
        onPress: () => {
          setIsMode(false);
        },
      },
      {
        text: "No",
        onPress: () => {
          console.log("Ok");
        },
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.txt}>Notes App</Text>
        <Ionicons
          style={styles.icons}
          name="add-circle-sharp"
          size={40}
          color="yellow"
          onPress={() => setIsMode(true)}
        />
      </View>
      <NoteInput visible={isMode} onBack={onBack} note={onNote} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={curnotes}
        renderItem={(itemData) => (
          <NoteItem
            id={itemData.item.id}
            title={itemData.item.value[0]}
            content={itemData.item.value[1]}
            date={itemData.item.Date}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "#353535",
  },
  txt: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    padding: 10,
  },
  container1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    position: "absolute",
    top: 15,
    left: 225,
  },
});
