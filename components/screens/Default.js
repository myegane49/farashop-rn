import { View, StyleSheet } from "react-native";

import Header from "../Header";

const Default = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} headerTitle={route.params.title} />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  }
});

export default Default;