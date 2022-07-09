import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import { useSelector, useDispatch } from "react-redux";
import {
  incrementByAmount,
  decrementByAmount,
} from "../features/currentSaved/currentSavedSlice";

import currencyFormat from "../helpers/currencyFormat";

// TODO: now that firebase auth works, show user info?
// What else to put on this page?



export default function HomeScreen() {
  const currentSaved = useSelector((state) => state.currentSaved.value);
  const dispatch = useDispatch();

  const denomination = "$ ";

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text variant="titleLarge">
        {denomination + currencyFormat(currentSaved)}
      </Text>
    </View>
  );
}
