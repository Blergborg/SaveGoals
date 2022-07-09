import React, { useState } from "react";
import { View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";

export default function SaveScreen() {
  const [save, setSave] = useState("0");

  return (
    // TODO: Styling
    // TODO: Add Buttons to navigate to recurring saves form/collection
    // TODO: Update currently saved amount on button press (Further, check if currently saved amount is now greater than a goal price?)
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text variant="bodyLarge">Look at the Savings $$$</Text>
      <TextInput
        style={{ width: 300 }}
        label="Amount Saved"
        mode="flat"
        keyboardType="decimal-pad"
        value={save}
        onChangeText={(save) => setSave(save)}
      />
      <Button
        icon="currency-usd"
        mode="contained"
        onPress={() => console.log("Save Button Pressed")}
      >
        Save
      </Button>
    </View>
  );
}
