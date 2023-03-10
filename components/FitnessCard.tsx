
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Fitness from "../data/Fitness";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FitnessCard = () => {
  const FitnessData = Fitness;
  const navigation = useNavigation();
  return (
    <View>
      {FitnessData.map((item, key) => (
        <Pressable
          onPress={() =>
            navigation.navigate("Workout", {
              image: item.image,
              exercise: item.excersises,
              id: item.id
            })
          }
          style={{ alignItems: "center", justifyContent: "center", margin: 10 }}
          key={key}
        >
          <Image
            style={{ height: 140, borderRadius: 10, width: "95%" }}
            source={{ uri: item.image }}
          />
          <Text
            style={{
              position: "absolute",
              fontSize: 16,
              fontWeight: "bold",
              color: "white",
              left: 20,
              top: 20,
            }}
          >
            {item.name}
          </Text>
          <MaterialCommunityIcons
            style={{
              position: "absolute",
              color: "white",
              bottom: 15,
              left: 20,
            }}
            name="lightning-bolt"
            size={24}
            color="black"
          />
        </Pressable>
      ))}
    </View>
  );
};

export default FitnessCard;

const styles = StyleSheet.create({});
