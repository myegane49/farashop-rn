import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar, TouchableOpacity, I18nManager, Text } from 'react-native';

import Home from "./components/screens/Home";
import Cart from "./components/screens/Cart";

const Drawer = createDrawerNavigator();

// I18nManager.forceRTL(true);

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#f54120" barStyle="light-content" />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" screenOptions={({ navigation }) => ({
          drawerPosition: 'right',
          headerShown: false
          // headerStyle: {
          //   backgroundColor: '#f54120',
          //   height: 70
          // },
          // headerTintColor: '#fff',
          // headerRight: () => {
          //   return <TouchableOpacity onPress={() => navigation.openDrawer()}>
          //             <Text style={{ fontFamily: 'Font Awesome 6 Free Solid', fontSize: 30 }}>&#xf0c9;</Text>
          //           </TouchableOpacity>
          //   },
          // headerLeft: () => {
          //   return null
          // }
        })}>
          <Drawer.Screen name="Home" component={Home} options={{
              title: "",
              drawerLabel: "صفحه نخست",
              drawerContentStyle: {
                backgroundColor: "#fff",
              },
            }}
          />
          <Drawer.Screen name="Cart" component={Cart} options={{
            title: "",
            drawerLabel: "سبد خرید"
          }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
