import { createStackNavigator } from '@react-navigation/stack';

import ProductsGroup from "./ProductsGroup";

const Stack = createStackNavigator();

const ProductsGroupScreen = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="ProductsGroup" component={ProductsGroup} navigation={navigation} />
    </Stack.Navigator>
  );
};

export default ProductsGroupScreen;
