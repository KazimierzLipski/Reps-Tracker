import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Charts from "./screens/Charts";

const initExercises = [
  { name: "Push-ups", amountDue: 100, amountDone: 0 },
  { name: "Pull-ups", amountDue: 40, amountDone: 0 },
  { name: "Dips", amountDue: 30, amountDone: 0 },
  { name: "Chin-ups", amountDue: 20, amountDone: 0 },
  { name: "Handstand Push-ups", amountDue: 25, amountDone: 0 },
  { name: "Inner Back Pull-Ups", amountDue: 20, amountDone: 0 },
  { name: "Lever-Ups", amountDue: 20, amountDone: 0 },
  { name: "Squats", amountDue: 100, amountDone: 0 },
];

// dummy data 
// const sevenDaysDataPushUps = [97,82,79,100,95,100,91]

// const sevenDaysDataDips = [30,30,29,20,12,28,19]


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Charts" component={Charts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
