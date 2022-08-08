import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/ContextLoginScreen";
// import { TabNavigator } from "./TabNavigator";

const Stack = createStackNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    {/* Now that Firebase auth works, need to figure out best Navigator strategy. */}
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} /> 
    </Stack.Navigator>
  </NavigationContainer>

      // {/* <Stack.Screen name="App" component={TabNavigator} /> */}
);

export default RootNavigator;
