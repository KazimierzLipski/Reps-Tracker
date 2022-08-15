import React, { useCallback, useEffect, useReducer, useState } from "react";
import { View, Text, TextInput } from "react-native";
import useHttp from "../../hooks/use-http";
import StyledButton from "../UI/StyledButton";

function Exercise(props) {
  const [doneColor, setDoneColor] = useState("bg-red-700");
  const [exercise, setExercise] = useState(props.exercise);
  const { isLoading, error, sendRequest} = useHttp();

  const adderReducer = (state, action) => {
    let amount = 0;
    if (action.type === "SET") return { toAdd: action.value };
    else if (action.type === "ADD") amount = 1;
    else if (action.type === "SUB") amount = -1;
    else if (action.type === "RESET")
      return { ...state, toAdd: (exercise.amountDue / 5).toString() };
    return { ...state, toAdd: (+state.toAdd + amount).toString() };
  };
  const [toAddState, dispatchToAdd] = useReducer(adderReducer, {
    toAdd: (exercise.amountDue / 5).toString(),
  });

  const adder = amountToAdd => {
    setExercise(() => {
      let newExercise = {...exercise, amountDone: (isNaN(exercise.amountDone) ? 0 : +exercise.amountDone) + +(isNaN(+amountToAdd) ? 0 : +amountToAdd) };
      sendRequest({
        url: 'https://reps-tracker-default-rtdb.europe-west1.firebasedatabase.app/reps.json',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: { ...newExercise, date: new Date() }
      }, arg => console.log(arg)); // SET
      return newExercise});
  }


  const addHandler = (event) => {
    console.log(exercise, toAddState);
    adder(toAddState.toAdd)
  };

  const typeAmountHandler = (enteredText) => {
    dispatchToAdd({ type: "SET", value: enteredText });
  };

  useEffect(() => {
    setDoneColor(
      exercise.amountDue <= exercise.amountDone ? "bg-green-700" : "bg-red-700"
    );
    // sendRequest(); // GET DATA
    console.log("Changed color");
  }, [exercise.amountDone]);

  return (
    <View className="w-72 mx-4 flex justify-center items-center ">
      <View className="rounded-xl p-3 shadow-lg my-3 bg-amber-200 w-72 mx-auto">
        <Text
          className={
            "rounded-xl py-3 shadow-lg my-3 text-md text-center text-white " +
            doneColor
          }
        >
          Exercise: {exercise.name} To do: {exercise.amountDue} Done:{" "}
          {exercise.amountDone}
        </Text>
        <View className="flex flex-1 flex-row items-center justify-center">
          <TextInput
            className="text-center border-spacing-4 border-blue-400 w-8 bg-slate-100 h-8 mx-auto"
            value={toAddState.toAdd}
            onChangeText={typeAmountHandler}
          />
          <StyledButton
            className="w-8 h-8 flex items-center justify-center text-center text-lg bg-sky-400 border-sky-800 border"
            title="➕"
            onPress={() => {
              dispatchToAdd({ type: "ADD" });
            }}
          />
          <StyledButton
            className="w-8 h-8 flex items-center justify-center text-center text-lg bg-sky-400 border-sky-800 border"
            title="➖"
            onPress={() => {
              dispatchToAdd({ type: "SUB" });
            }}
          />
          <StyledButton
            className="w-8 h-8 flex items-center justify-center text-center text-lg bg-sky-400 border-sky-800 border"
            title="🔄"
            onPress={() => {
              dispatchToAdd({ type: "RESET" });
            }}
          />
          <StyledButton
            className="w-8 h-8 flex items-center justify-center text-center text-lg bg-sky-400 border-sky-800 border"
            title="Add"
            onPress={addHandler}
          />
        </View>
      </View>
    </View>
  );
}

export default Exercise;
