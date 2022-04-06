import React from "react";
import { View, Text, StyleSheet } from "react-native-web";

export default function header() {
  return (
    <View style={styles.header}>
      {/* Meni Icon */}
      <View>
        <Text style={styles.headerText}>Game Zone</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDiretion: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
});
