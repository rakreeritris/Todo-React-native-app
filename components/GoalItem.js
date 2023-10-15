import React from "react";
import { StyleSheet, View, FlatList, Text, Pressable } from "react-native";
const GoalItem = (props) => {
  const deleteGoalHandler = (id) => {
    props.deleteGoalHandler(id);
  };
  return (
    <View style={styles.goalContainer}>
      <FlatList
        data={props.data}
        renderItem={(itemData) => {
          return (
            <Pressable
              onPress={() => props.deleteGoalHandler(itemData.item.id)}
              android_ripple={{ color: "green" }}
            >
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            </Pressable>
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      ></FlatList>
    </View>
  );
};
export default GoalItem;
const styles = StyleSheet.create({
  goalContainer: {
    flex: 5,
  },
  goalItem: {
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "pink",
    marginTop: 12,
    marginBottom: 12,
    padding: 12,
  },
  goalText: {
    textAlign: "center",
    color: "purple",
  },
});
