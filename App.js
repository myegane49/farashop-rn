import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar, I18nManager, StyleSheet } from 'react-native';

import Home from "./components/screens/Home";
import ProductsGroup from "./components/screens/ProductsGroup";
import AppDrawerContent from "./components/AppDrawerContent";
import AdvancedFiltering from "./components/screens/AdvancedFiltering";
import Product from "./components/screens/Product";
import Default from "./components/screens/Default"

const Drawer = createDrawerNavigator();

// I18nManager.forceRTL(true);

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#f54120" barStyle="light-content" />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          backBehavior="history"
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
            // unmountOnBlur: true
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
          <Drawer.Screen name="Auth" component={Default} initialParams={{title: 'auth'}} />
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="ProductsGroup" component={ProductsGroup}
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
          <Drawer.Screen name="Cart" component={Default} initialParams={{title: 'cart'}} />
          <Drawer.Screen name="Latest" component={AdvancedFiltering} initialParams={{type: 2, id: 6}} />
          <Drawer.Screen name="FAQ" component={Default} initialParams={{title: 'faq'}} />
          <Drawer.Screen name="Contact" component={Default} initialParams={{title: 'contact'}} />
          <Drawer.Screen name="About" component={Default} initialParams={{title: 'about'}} />
          <Drawer.Screen name="Creator" component={Default} initialParams={{title: 'creator'}} />
          <Drawer.Screen name="Share" component={Default} initialParams={{title: 'share'}} />

          <Drawer.Screen name="AdvancedFiltering" component={AdvancedFiltering} />
          <Drawer.Screen name="Product" component={Product} />
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
