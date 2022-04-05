import React from "react";
import { View, StyleSheet, Text } from "react-native-web";

export default function About() {
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
