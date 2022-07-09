import React from "react";
import {FlatList, View, Text, StyleSheet } from 'react-native';
// import {Text} from 'react-native-paper';
import {FAB} from 'react-native-paper';
import GoalListTile from "../components/GoalListTile";
import { AddScreenNavigator } from "../components/AddScreenNavigator";
import { AddGoalScreen } from "./GoalFormScreen";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 150,
  },
})

export default function GoalScreen({navigation}) {
  return (
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <View style={styles.container}>
      <FlatList 
        data={[
          {key: 'Soccer Ball', price: '$100.00'},
          {key: 'Synthesizer', price: '$100.00'},
          {key: 'Earrings', price: '$100.00'},
          {key: 'Drill Press', price: '$100.00'},
          {key: 'Laser Cutter', price: '$100.00'},
          {key: '3D Printer Parts', price: '$100.00'},
          {key: 'Laptop', price: '$100.00'},
        ]}
        // renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        renderItem={({item}) => <GoalListTile name={item.key} price={item.price}/>}
      />
      <FAB 
        icon="plus"
        style={{ position: 'absolute', margin: 16, right: 0, bottom: 40 }}
        // onPress={() => <AddScreenNavigator screenName="Add Goal" screenComponent={<AddGoalScreen/>}/>}
        onPress={() => {}}
      />
    </View>
  );
}