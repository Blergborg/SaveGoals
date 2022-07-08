import React from "react";
import {View} from 'react-native';
import {Text} from 'react-native-paper'


// TODO: now that firebase auth works, show user info?
// What else to put on this page?

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text variant="titleLarge">TIME TO SAVE!</Text>
    </View>
  );
}
