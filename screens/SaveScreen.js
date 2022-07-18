import React, { useState } from "react";
import { View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import CurrencyInput from "react-native-currency-input";

import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount } from "../features/currentSaved/currentSavedSlice";

import { currencyFormat, currencyDeformat } from "../helpers/currencyFormat";

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
        render={(props) => (
          <CurrencyInput
            {...props}
            value={save}
            onChangeValue={setSave}
            prefix="$"
            separator="."
            delimiter=","
            precision={2}
            minValue={0}
          />
        )}
      />
      <Button
        icon="currency-usd"
        mode="contained"
        onPress={() => {
          dispatch(incrementByAmount(currencyDeformat(save)));
        }}
      >
        Save
      </Button>
    </View>
  );
}
