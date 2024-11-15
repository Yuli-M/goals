import {
  FlatList,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import AboutPage from "./about";
import GoalInput from "@/components/GoalInput";
import GoalItem from "@/components/GoalItem";

export default function Index() {
  interface GoalList {
    goal: string;
    id: string;
  }

  const [goalList, setGoalList] = useState<GoalList[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedGoalId, setSelectedGoalId] = useState<string | null>(null);
  const [inputText, setInputText] = useState("");

  /*const addGoalHandler = (goal: string) => {
    //handle
    const newID = Math.random().toString();
    setGoalList([...goalList, { goal: goal, id: newID }]);
  };*/

  const addGoalHandler = (goal: string) => {
    if (isEditing && selectedGoalId) {
      // Actualizar meta existente
      setGoalList((currentGoals) =>
        currentGoals.map((item) =>
          item.id === selectedGoalId ? { ...item, goal } : item
        )
      );
      setIsEditing(false);
      setSelectedGoalId(null);
    } else {
      // para agregar una nueva meta
      const newID = Math.random().toString();
      setGoalList([...goalList, { goal, id: newID }]);
    }
    setInputText("");
  };

  function deleteItemHandle(id: string) {
    console.log("delete", id);
    setGoalList((currentGoals) => {
      return currentGoals.filter((item) => item.id != id);
    });
  }

  function updateItemHandle(id: string) {
    console.log("update ", id);
    const itemToEdit = goalList.find((item) => item.id === id);
    if (itemToEdit) {
      setIsEditing(true);
      setSelectedGoalId(id);
      setInputText(itemToEdit.goal); // el texto actual ingresado
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GoalInput
        onAddGoal={addGoalHandler}
        inputText={inputText}
        setInputText={setInputText}
      />
      <FlatList
        data={goalList}
        renderItem={(itemData) => (
          <GoalItem
            dataGoal={itemData.item}
            onDeleteItem={deleteItemHandle}
            onUpdateItem={updateItemHandle}
          />
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}
