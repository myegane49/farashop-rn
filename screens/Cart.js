import { View, Text, StyleSheet } from "react-native";

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>سبد خرید</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
