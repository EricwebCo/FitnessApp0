
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import {useState, useEffect} from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function WorkoutScreen () {
  const route = useRoute();
  const navigation = useNavigation();
  const [excersises, setExcersises] = useState<any>([])
  
  useEffect(() => {  
    console.log(route);
    setExcersises(route.params.excersises)
  }, [])
  
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
      {excersises.map((item, index) =>(
        <TouchableOpacity key={index} onPress={()=>{}}>
          <Image style={{width:90, height:90, marginTop:15}} source={{uri:item.image}}/>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

 WorkoutScreen;

