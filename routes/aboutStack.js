import { createDrawerNavigator } from "react-navigation-drawer";
import About from "../screens/about";
import Home from "../screens/home";

const Drawer = createDrawerNavigator();

export default function AboutStack() {
  return (
    <Drawer.Navigator initialRouteName={Home}>
      <Drawer.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}
