import { useCallback, useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { TailwindProvider } from 'tailwindcss-react-native';
import Exercise from "./components/Exercise/Exercise";

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

export default function App() {
  return (
    <TailwindProvider>
      <View className="flex flex-1 pt-12 px-4">
        <View className="flex flex-1 flex-row justify-between items-center mb-6 border-b border-b-zinc-700">
          <ScrollView>
            <View className="flex flex-wrap flex-row justify-center items-center">
              {initExercises.map((exercise) => (
                <Exercise key={exercise.name} exercise={exercise}/>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </TailwindProvider>
  );
}
