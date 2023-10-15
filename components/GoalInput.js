import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const goalInputHandler = (text) => {
    setEnteredGoalText(text);
  };
  const addGoalHandler = () => {
    props.addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/icon.png")}
        ></Image>
        <TextInput
          placeholder="Enter your goal"
          style={styles.textInput}
          onChangeText={(text) => goalInputHandler(text)}
          value={enteredGoalText}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal.."
              onPress={() => addGoalHandler()}
            ></Button>
          </View>
          <View>
            <Button
              style={styles.button}
              title="Cancel.."
              onPress={() => props.setModalIsVisible(false)}
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    padding: 12,
    backgroundColor: "black",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    width: "100%",
    padding: 4,
    marginTop: 12,
    color: "white",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  button: {},
  image: {
    width: 50,
    height: 50,
  },
});
