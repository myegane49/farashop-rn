import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./screens/Home";
import Cart from "./screens/Cart";

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        drawerPosition: 'right'
      }}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            title: "",
            drawerLabel: "صفحه نخست",
            drawerContentStyle: {
              backgroundColor: "#fff",
            },
          }}
        />
        <Drawer.Screen name="Cart" component={Cart} options={{
          title: "سبد خرید",
          drawerLabel: "سبد خرید"
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
