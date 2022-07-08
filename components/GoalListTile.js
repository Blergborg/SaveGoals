import React from "react";
import {Avatar, Card, IconButton} from 'react-native-paper';

const GoalListTile = ({name, price}) => {
  return (
    <Card.Title 
      title={name}
      subtitle={price}
      left={(props) => <Avatar.Icon {...props} icon="camera" />}
      right={(props) => <IconButton {...props} icon="pencil" onPress={() => {console.log(`Edit ${name} tile.`)}}/>}
    />
  );
}

export default GoalListTile;