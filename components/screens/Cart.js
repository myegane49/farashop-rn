import { View, Text, StyleSheet } from "react-native";

import MainHeader from "../headers/MainHeader";

const Cart = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MainHeader navigation={navigation} />
      <Text style={styles.text}>سبد خرید</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
