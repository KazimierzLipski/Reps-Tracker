import React, { useCallback, useEffect, useReducer, useState } from "react";
import { View, Text, TextInput } from "react-native";
import useHttp from "../../hooks/use-http";
import StyledButton from "../UI/StyledButton";

function Exercise(props) {
  const [doneColor, setDoneColor] = useState("bg-red-700");
  const [exercise, setExercise] = useState(props.exercise);
  const { isLoading, error, sendRequest } = useHttp();
  let todayISO = new Date().toISOString().substring(0, 10);
  const URL =
    "https://reps-tracker-default-rtdb.europe-west1.firebasedatabase.app/reps/";

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

  const adder = (amountToAdd) => {
    setExercise(() => {
      let newExercise = {
        ...exercise,
        amountDone:
          (isNaN(exercise.amountDone) ? 0 : +exercise.amountDone) +
          +(isNaN(+amountToAdd) ? 0 : +amountToAdd),
      };
      sendRequest(
        {
          url: URL + todayISO + "/" + newExercise.name + ".json",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            amountDone: newExercise.amountDone,
            amountDue: newExercise.amountDue,
          },
        },
        (arg) => {}
      );
      return newExercise;
    });
  };

  const addHandler = (event) => {
    adder(toAddState.toAdd);
  };

  const typeAmountHandler = (enteredText) => {
    dispatchToAdd({ type: "SET", value: enteredText });
  };

  useEffect(() => {
    sendRequest(
      {
        url: URL + todayISO + "/" + exercise.name + ".json",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
      (arg) => setExercise({ ...exercise, amountDone: arg.amountDone })
    );
  }, []);

  useEffect(() => {
    setDoneColor(
      exercise.amountDue <= exercise.amountDone
        ? "bg-[#1e6d45]"
        : "bg-[#90272d]"
    );
  }, [exercise.amountDone]);

  let content = exercise.amountDone;
  if (isLoading) {
    content = "L";
  } else if (error && exercise.amountDone != 0) {
    content = "E";
  }

  return (
    <View className="mx-2 my-2 flex justify-center items-center ">
      <View className="rounded-xl pb-4 shadow-lg bg-slate-700 w-40">
        <Text
          className={
            "opacity-100 text-opacity-100 text-white rounded-xl py-1 shadow-lg mb-4 text-md text-center " +
            doneColor
          }
        >
          Exercise: {exercise.name + "\n"} To do: {exercise.amountDue} Done:{" "}
          {content}
        </Text>
        <View className="flex flex-1 flex-row items-center justify-center">
          <TextInput
            className="text-center border-spacing-4 border-blue-400 w-8 bg-slate-100 h-8 mx-auto"
            value={toAddState.toAdd}
            onChangeText={typeAmountHandler}
          />
          <StyledButton
            title="➕"
            onPress={() => {
              dispatchToAdd({ type: "ADD" });
            }}
          />
          <StyledButton
            title="➖"
            onPress={() => {
              dispatchToAdd({ type: "SUB" });
            }}
          />
          <StyledButton
            title="🔄"
            onPress={() => {
              dispatchToAdd({ type: "RESET" });
            }}
          />
          <StyledButton title="Add" onPress={addHandler} />
        </View>
      </View>
    </View>
  );
}

export default Exercise;
