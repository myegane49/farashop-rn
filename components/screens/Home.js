import { View, SafeAreaView, ScrollView, StyleSheet, Image } from "react-native";

import MainHeader from "../headers/MainHeader";
import ImageSlider from "../slider/ImageSlider";
import Buttons from "../Buttons";
import ProductSlider from "../productSlider/ProductSlider";
import Banner from "../Banner";
import Gallery from "../Gallery";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <MainHeader navigation={navigation} />
          <ImageSlider navigation={navigation} />
          <Buttons />
          <ProductSlider title="جدیدترین ها" />
          <Banner imgSrc={require('../../assets/images/banner.jpg')} link="" />
          <Gallery />
          <Banner imgSrc={require('../../assets/images/banner2.jpg')} link="" />
          <ProductSlider title="انواع کیف" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  }
});

export default Home;