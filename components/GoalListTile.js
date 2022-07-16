import React from "react";
import { Avatar, Card, IconButton } from "react-native-paper";

const GoalListTile = ({ name, price, details, edit }) => {
  return (
    <Card onLongPress={details}>
      <Card.Title
        title={name}
        subtitle={price}
        // fn to navigation.navigate to details screen w/ Tile's item as params from GoalScreen.
        left={(props) => <Avatar.Icon {...props} icon="camera" />}
        right={(props) => (
          <IconButton
            {...props}
            icon="pencil"
            onPress={edit}
            // onPress={() => {
            //   console.log(`Edit ${name} tile.`);
            // }}
          />
        )}
      />
    </Card>
  );
};

export default GoalListTile;
