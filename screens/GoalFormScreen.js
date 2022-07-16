import React from "react";
import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
// Camera access
// Gallery access
// Paste from clipboard

// TODO: Navigation to get here.
// Implement firestore
// Local cache / storage
// Access camera / gallery
// Compress pictures

export const GoalFormScreen = ({ route }) => {
  const { curName, curPrice, curDescription } = route.params;

  const [name, setName] = useState(curName ? curName : "");
  const [price, setPrice] = useState(curPrice ? curPrice : 0);
  const [description, setDescription] = useState(
    curDescription ? curDescription : ""
  );

  return (
    <View>
      <Text>Add New Goal</Text>
      <TextInput
        style={styles.input}
        label="Name"
        value={name}
        onChangeText={(newName) => setName(newName)}
      />
      <TextInput
        style={styles.input}
        label="Price"
        value={price}
        onChangeText={(newPrice) => setPrice(newPrice)}
      />
      <TextInput
        style={styles.input}
        label="Description"
        value={description}
        onChangeText={(newDesc) => setDescription(newDesc)}
      />
      <Button title="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
  },
});
