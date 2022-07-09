// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import store from "./store";
import { Provider } from "react-redux";

import RootNavigator from "./navigation/RootNavigator";

// TODO: Redux (current amount saved, user creds, currency denomination(?), language(keyboard?), ... )
// Onboarding slides (best way to check if user is new?)
// Splash screen for loading on start
// Local cache / storage for simple data (e.g. next cheapest goal(s), distance from next cheapest goal(s), ...)

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <RootNavigator />
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
