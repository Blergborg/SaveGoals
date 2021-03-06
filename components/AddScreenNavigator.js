import React from "react";
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

export const AddScreenNavigator = ({screenName, screenComponent}) => (
  <Stack.Navigator>
    <Stack.Screen name={screenName} component={screenComponent} />
  </Stack.Navigator>
);