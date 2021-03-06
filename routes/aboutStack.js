import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/about";

const Stack = createNativeStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}
