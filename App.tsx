// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Homescreen from "./screens/Homescreen";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
<StackNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
    // marginLeft: StatusBar.currentHeight
  },
});
