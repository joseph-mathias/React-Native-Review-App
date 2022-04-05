import React from "react";
import { globalStyles } from "../styles/global";
import { View, Text } from "react-native-web";

export default function ReviewDetails({ route }) {
  console.log("data", route);
  return (
    <View style={globalStyles.container}>
      <Text>{route.params.title}</Text>
      <Text>{route.params.body}</Text>
      <Text>{route.params.rating}</Text>
    </View>
  );
}
