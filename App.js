import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar, I18nManager, StyleSheet, Text } from 'react-native';

import Home from "./components/screens/Home";
import ProductGroup from "./components/screens/ProductsGroup";
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
          <Drawer.Screen name="Home" component={Home} options={{
              title: "",
              drawerLabel: () => <Text style={styles.label}>خانه</Text>,
              drawerIcon: () => <Text style={styles.icon}>&#xf015;</Text>
            }}
          />
          <Drawer.Screen name="ProductGroup" component={ProductGroup} options={{
              title: "",
              drawerLabel: () => <Text style={styles.label}>دسته بندی محصولات</Text>,
              drawerIcon: () => <Text style={styles.icon}>&#xf0ca;</Text>,
              drawerItemStyle: {
                borderBottomWidth: 1,
                borderBottomColor: '#eee',
                marginHorizontal: 0,
              }
            }}
          />
          <Drawer.Screen name="Cart" component={() => <Text style={{color: 'black'}}>Cart</Text>} options={{
            title: "",
            drawerLabel: () => <Text style={styles.label}>سبد خرید</Text>,
            drawerIcon: () => <Text style={styles.icon}>&#xf07a;</Text>,
          }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: '#888888',
    fontFamily: 'Font Awesome 6 Free Solid',
    fontSize: 20,
    position: 'absolute',
    right: 22
  },
  label: {
    color: 'gray',
    marginRight: 25
  }
});
