import React from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";

interface GoalDataProps {
  dataGoal: { goal: string; id: string };
  onDeleteItem: (id: string) => void;
  onUpdateItem: (id: string) => void;
}

const GoalItem: React.FC<GoalDataProps> = ({
  dataGoal,
  onDeleteItem,
  onUpdateItem,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onDeleteItem(dataGoal.id)}
      onLongPress={() => onUpdateItem(dataGoal.id)}
    >
      <View
        style={{
          padding: 10,
          backgroundColor: "#e8ebeb",
          margin: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ fontSize: 14 }}>{dataGoal.goal}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;
