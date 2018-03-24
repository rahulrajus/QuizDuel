import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionic";
import { View, StyleSheet } from "react-native";
export default class Key extends Component {
  static containerStyle = { width: 32.5, height: 39.16 };
  render() {
    return (
      <View style={[Key.containerStyle, this.props.style]}>
        <Icon style={styles.icon1} name="ios-key" size={40} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  icon1: {
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)"
  }
});
