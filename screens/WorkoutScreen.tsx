
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native/Libraries/Components/Pressable/Pressable";

const WorkoutScreen = () => {
  const route = useRoute();
  console.log(route);
  const navigation = useNavigation();
  return (
    <ScrollView style={{ marginTop: 30 }}>
      <Image
        style={{ width: "100%", height: 170 }}
        source={{ uri: route.params.image }}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        style={{ position: "absolute", top: 10, left: 20, color: "white" }}
        name="arrow-back-circle-outline"
        size={44}
        color="black"
      />
      {route.params.excersises.map((item, index) =>(
        <Pressable key={index}>
          <Image style={{width:90, height:90, marginTop:15}} source={{uri:item.image}}/>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({});
