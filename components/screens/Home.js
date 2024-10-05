import { View, SafeAreaView, ScrollView, StyleSheet, Image } from "react-native";

import Header from "../Header";
import ImageSlider from "../slider/ImageSlider";
import Buttons from "../Buttons";
import ProductSlider from "../productSlider/ProductSlider";
import Banner from "../Banner";
import Gallery from "../Gallery";

const Home = ({ navigation }) => {
  const sliderData = [
    {imgSrc: "https://www.shop9.ir/Portals/Modules/Superlinks/4814/10403220240905_44058-moile-less-quality.jpg"},
    {imgSrc: "https://www.shop9.ir/Portals/Modules/Superlinks/4814/10523220240905_hedset-gaming-mobile-less-quality.jpg"},
    {imgSrc: "https://www.shop9.ir/Portals/Modules/Superlinks/4814/12303520240918_cofee-maker-mobile.jpg"},
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Header navigation={navigation} headerType="main" headerTitle="" />
          <ImageSlider data={sliderData} navigation={navigation} cStyles={sliderStyles} pagStyles={pagStyles} />
          <Buttons navigation={navigation} />
          <ProductSlider navigation={navigation} title="جدیدترین ها" />
          <Banner imgSrc={require('../../assets/images/banner.jpg')} link="" />
          <Gallery />
          <Banner imgSrc={require('../../assets/images/banner2.jpg')} link="" />
          <ProductSlider navigation={navigation} title="انواع کیف" />
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

const sliderStyles = StyleSheet.create({
  container: {
  },
  itemContainer: {
  },
  image: {
  },
});


const pagStyles = StyleSheet.create({
  dot: {
  },
  activeDot: {
  },
  inactiveDot: {
  },
});

export default Home;