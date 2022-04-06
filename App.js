import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import "react-native-gesture-handler";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import HomeStack from "./routes/homeStack";

const Stack = createNativeStackNavigator();

//Custom Font
const getFont = () => {
  return Font.loadAsync({
    "Oswald-VariableFont_wght": require("./assets/font/Oswald-VariableFont_wght.ttf"),
    "SendFlowers-Regular": require("./assets/font/SendFlowers-Regular.ttf"),
  });
};

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
