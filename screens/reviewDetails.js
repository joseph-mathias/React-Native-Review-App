import React from "react";
import { globalStyles } from "../styles/global";
import { View, Text } from "react-native-web";
import Card from "../shared/card";

export default function ReviewDetails({ route }) {
  console.log("data", route);
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone Rating: </Text>
          <Text>🚀🚀{route.params.rating}</Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
