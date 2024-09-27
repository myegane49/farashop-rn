import { View, Text, StyleSheet } from "react-native";

import MainHeader from "../headers/MainHeader";

const ProductGroup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MainHeader navigation={navigation} />
      <Text style={styles.text}>دسته بندی محصولات</Text>
    </View>
  );
};

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

export default ProductGroup;
