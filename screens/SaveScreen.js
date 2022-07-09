import React, { useState } from "react";
import { View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";

import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount } from "../features/currentSaved/currentSavedSlice";
import currencyFormat from "../helpers/currencyFormat";

export default function SaveScreen() {
  const [save, setSave] = useState("0");

  const currentSaved = useSelector((state) => state.currentSaved.value);
  const dispatch = useDispatch();

  return (
    // TODO: Styling
    // TODO: Add Buttons to navigate to recurring saves form/collection
    // TODO: Update currently saved amount on button press (Further, check if currently saved amount is now greater than a goal price?)
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text variant="bodyLarge">Look at the Savings $$$</Text>
      <Text>{currentSaved}</Text>
      <TextInput
        style={{ width: 300 }}
        label="Amount Saved"
        mode="flat"
        keyboardType="decimal-pad"
        value={save}
        onChangeText={(newSave) => setSave(newSave)}
      />
      <Button
        icon="currency-usd"
        mode="contained"
        onPress={() => dispatch(incrementByAmount(parseInt(save)))}
      >
        Save
      </Button>
    </View>
  );
}
