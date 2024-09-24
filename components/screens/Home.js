import { View, Text, StyleSheet, Button } from "react-native";

import MainHeader from "../headers/MainHeader";
import ImageSlider from "../slider/ImageSlider";
import Buttons from "../Buttons";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MainHeader navigation={navigation} />
      <ImageSlider />
      <Buttons />
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
