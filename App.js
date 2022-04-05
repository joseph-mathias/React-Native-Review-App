import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import HomeStack from "./routes/homeStack";
import AboutStack from "./routes/aboutStack";

//Custom Font
const getFont = () => {
  return Font.loadAsync({
    "Oswald-VariableFont_wght": require("./assets/font/Oswald-VariableFont_wght.ttf"),
    "SendFlowers-Regular": require("./assets/font/SendFlowers-Regular.ttf"),
  });
};

export default function App() {
  // const [fontsLoad, setFontsLoaded] = useState(false);

  // if (fontsLoad) {
  //   return ;
  // } else {
  //   <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />;
  // }

  return <AboutStack />;
}
