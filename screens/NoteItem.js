import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function NoteItem(props) {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.listItem}>
        <View style={styles.topc}>
          <Text style={styles.txt}>{props.title}</Text>
        </View>
        <View style={styles.bottomc}>
          <Text style={styles.date}>{props.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    marginTop: 8,
    padding: 10,
    width: 350,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    elevation: 1,
  },
  topc: {
    flexDirection: "row",
  },
  bottomc: {
    flexDirection: "row",
  },
  txt: {
    fontWeight: "600",
    fontSize: 20,
    color: "#000",
  },
  date: {
    fontSize: 14,
  },
});
