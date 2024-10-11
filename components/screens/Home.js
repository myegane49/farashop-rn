import { View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import axios from 'axios';
import {useEffect, useState} from 'react'

import Header from "../Header";
import ImageSlider from "../slider/ImageSlider";
import Buttons from "../Buttons";
import ProductSlider from "../productSlider/ProductSlider";
import Banner from "../Banner";
import Gallery from "../Gallery";

const Home = ({ navigation }) => {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const [newest, setNewest] = useState({})
  const [bags, setBags] = useState({})
  const [slides, setSlides] = useState([])
  const [btns, setBtns] = useState([])
  const [banner1, setBanner1] = useState('')
  const [banner2, setBanner2] = useState('')
  const [gallery, setGallery] = useState([])

  useEffect(() => {
      axios.post('https://www.shop9.ir/api/shop/App/GetAll', {
        DynamicContentTake: 10,
        TagTake: 10,
        CartID: ''
      }).then(res => {
        setNewest(res.data.DynamicContents.find(el => el.ContentID == 6));
        setBags(res.data.DynamicContents.find(el => el.ContentID == 1567));
        setSlides(res.data.DynamicLinks.Sliders);
        setBtns(res.data.DynamicLinks.Texts);
        setBanner1(res.data.DynamicLinks.Banners.find(el => el.LinkID == 64));
        setBanner2(res.data.DynamicLinks.Banners.find(el => el.LinkID == 1345));
        setGallery(res.data.DynamicLinks.Galleries);
      }).catch(err => {
        setError("خطا در دریافت اطلاعات");
      }).finally(() => {
        setLoading(false);
      })
  }, []);
 
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Header navigation={navigation} headerType="main" headerTitle="" />
          <ImageSlider data={slides} cStyles={sliderStyles} pagStyles={pagStyles} />
          <Buttons data={btns} />
          <ProductSlider navigation={navigation} title={newest.Title} prods={newest.Items} />
          <Banner imgSrc={"https://www.shop9.ir/images/farashop/dynamic-link/" + banner1.Picture} link="" />
          <Gallery images={gallery} />
          <Banner imgSrc={"https://www.shop9.ir/images/farashop/dynamic-link/" + banner2.Picture} link="" />
          <ProductSlider navigation={navigation} title={bags.Title} prods={bags.Items} />
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