// Navigator for Goals (and Save?) Screen to Form and Details Screens w/ back nav

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import GoalScreen from "../screens/GoalScreen";
import { GoalFormScreen } from "../screens/GoalFormScreen";
import { GoalDetailScreen } from "../screens/GoalDetailScreen";

const Stack = createStackNavigator();

export const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Goals List" component={GoalScreen} />
    <Stack.Screen name="Goal Form" component={GoalFormScreen} />
    <Stack.Screen name="Details" component={GoalDetailScreen} />
  </Stack.Navigator>
);
