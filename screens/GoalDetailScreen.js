// TODO: show details of a goal
// buy or delete goal
// celebration animation on buy (different page?)

import React from "react";
import { View, Text } from "react-native";

export const GoalDetailScreen = ({ name, price }) => (
  <View>
    <Text>Goal Name: {name}</Text>
    <Text>Goal Price: {price}</Text>
  </View>
);
