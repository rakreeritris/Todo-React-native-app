import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [cousrseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModalIsVisible(!modalIsVisible);
  };
  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };
  return (
    <View style={styles.appContainer}>
      <Button
        title="Add your goal"
        color="#5e0acc"
        onPress={() => setModalIsVisible(true)}
      ></Button>

      <GoalInput
        visible={modalIsVisible}
        setModalIsVisible={setModalIsVisible}
        addGoalHandler={addGoalHandler}
      ></GoalInput>
      <GoalItem
        data={cousrseGoals}
        deleteGoalHandler={deleteGoalHandler}
      ></GoalItem>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 25,
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: "center",
  },
});
