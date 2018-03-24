import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
export default class Untitled extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect1} />
        <Text style={styles.text1}>QuizDuel</Text>
        <TextInput placeholder="TextInput" style={styles.textInput1} />
        <View style={styles.rect2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: { backgroundColor: "white", flex: 1, flexDirection: "column" },
  text1: {
    backgroundColor: "transparent",
    top: 147.78,
    left: 83.73,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 50
  },

  textInput1: {
    height: 1,
    width: 296.89,
    top: 403.29,
    left: 45.1,
    position: "absolute"
  },

  rect2: {
    top: 486.86,
    left: 39,
    width: 289.55,
    height: 59.51,
    position: "absolute",
    borderWidth: 5,
    borderColor: "rgba(255,255,255,1)"
  },

  rect1: {
    top: 0.17,
    left: -0.85,
    width: 360.01,
    height: 639.32,
    position: "absolute",
    backgroundColor: "rgba(76,128,205,1)",
    opacity: 1
  }
});
