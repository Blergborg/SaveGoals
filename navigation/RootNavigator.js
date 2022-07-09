import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import { TabNavigator } from "./TabNavigator";

const Stack = createStackNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    {/* Now that Firebase auth works, need to figure out best Navigator strategy. */}
    {/* <Stack.Navigator> */}
      {/* <Stack.Screen name="Login" component={LoginScreen} />  */}
      {/* <Stack.Screen name="App" component={TabNavigator} /> */}
    {/* </Stack.Navigator> */}
    <TabNavigator />
  </NavigationContainer>
);

export default RootNavigator;
