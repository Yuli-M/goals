import React from "react";
import { useState } from "react";
import { TextInput, View, Button } from "react-native";

interface GoalInputProps {
  onAddGoal: (goal: string) => void;
  inputText: string;
  setInputText: (text: string) => void;
}

const GoalInput: React.FC<GoalInputProps> = ({
  onAddGoal,
  inputText,
  setInputText,
}) => {
  /*const [goal, setGoal] = useState("");
  const goalHandler = (goal: string) => {
    setGoal(goal);
  };*/

  const addGoalHandler = () => {
    //onAddGoal(goal);
    onAddGoal(inputText);
    setInputText("");
  };

  return (
    <View>
      <TextInput
        style={{
          paddingHorizontal: 97,
          backgroundColor: "#e8ebeb",
          width: "110%",
          height: 40,
          //flexDirection: "column",
          alignSelf: "center",
        }}
        onChangeText={setInputText}
        placeholder="Nueva meta"
        value={inputText}
      />

      <Button title="Add" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;
