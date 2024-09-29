import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar, I18nManager, StyleSheet, Text } from 'react-native';

import Home from "./components/screens/Home";
import ProductsGroupScreen from "./components/screens/ProductsGroupScreen";
import AppDrawerContent from "./components/AppDrawerContent";

const Drawer = createDrawerNavigator();

// I18nManager.forceRTL(true);

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#f54120" barStyle="light-content" />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <AppDrawerContent {...props} />}
          screenOptions={({ navigation }) => ({
            drawerPosition: 'right',
            drawerActiveBackgroundColor: null,
            // drawerActiveTintColor: 'gray',
            // drawerInactiveTintColor: 'gray',
            headerShown: false,
            sceneContainerStyle: {
              backgroundColor: "#ebebeb"
            },
            drawerItemStyle: {
              position: 'relative',
              marginHorizontal: 0,
            },
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
          <Drawer.Screen name="Auth" component={() => <Text style={{color: '#000'}}>Auth</Text>} />
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="ProductsGroupScreen" component={ProductsGroupScreen}
            // options={{
            //   title: "",
            //   drawerLabel: () => <Text style={styles.label}>دسته بندی محصولات</Text>,
            //   drawerIcon: () => <Text style={styles.icon}>&#xf0ca;</Text>,
            //   drawerItemStyle: {
            //     borderBottomWidth: 1,
            //     borderBottomColor: '#eee',
            //     marginHorizontal: 0,
            //   }
            // }}
          />
          <Drawer.Screen name="Cart" component={() => <Text style={{color: '#000'}}>Cart</Text>} />
          <Drawer.Screen name="Latest" component={() => <Text style={{color: '#000'}}>Latest</Text>} />
          <Drawer.Screen name="FAQ" component={() => <Text style={{color: '#000'}}>FAQ</Text>} />
          <Drawer.Screen name="Contact" component={() => <Text style={{color: '#000'}}>Contact</Text>} />
          <Drawer.Screen name="About" component={() => <Text style={{color: '#000'}}>About</Text>} />
          <Drawer.Screen name="Creator" component={() => <Text style={{color: '#000'}}>Creator</Text>} />
          <Drawer.Screen name="Share" component={() => <Text style={{color: '#000'}}>Share</Text>} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

// const styles = StyleSheet.create({
//   icon: {
//     color: '#888888',
//     fontFamily: 'Font Awesome 6 Free Solid',
//     fontSize: 20,
//     position: 'absolute',
//     right: 22
//   },
//   label: {
//     color: 'gray',
//     marginRight: 25
//   }
// });
