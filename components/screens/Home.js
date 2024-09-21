import { View, Text, StyleSheet, Button } from "react-native";

import MainHeader from "../headers/MainHeader";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MainHeader navigation={navigation} />
      <Text style={styles.text}>خوش آمدید</Text>
    </View>
  );
};

export default Home;

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
