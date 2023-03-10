import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  Home: undefined;
  Workout: { image: string; exercise: string[]; id: string };
  // add additional screen types here
};

type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;
type WorkoutScreenRouteProp = RouteProp<RootStackParamList, "Workout">;
// add additional route prop types here

export type { RootStackParamList, HomeScreenRouteProp, WorkoutScreenRouteProp };
