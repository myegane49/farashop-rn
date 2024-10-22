import { View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import axios from 'axios';
import {useEffect, useState} from 'react'

import Header from "../Header";
import ImageSlider from "../slider/ImageSlider";
import Buttons from "../Buttons";
import ProductSlider from "../productSlider/ProductSlider";
import Banner from "../Banner";
import Gallery from "../Gallery";
import Loading from "../Loading";

const Home = ({ navigation }) => {
  const [data, setData] = useState({
    loading: true,
    newest: {},
    bags: {},
    slides: [],
    btns: [],
    banner1: {},
    banner2: {},
    gallery: []
  })
 
  useEffect(() => {
      axios.post('https://www.shop9.ir/api/shop/App/GetAll', {
        DynamicContentTake: 10,
        TagTake: 10,
        CartID: ''
      }).then(res => {
        setData(prevData => ({
          ...prevData,
          newest: res.data.DynamicContents.find(el => el.ContentID == 6),
          bags: res.data.DynamicContents.find(el => el.ContentID == 1567),
          slides: res.data.DynamicLinks.Sliders,
          btns: res.data.DynamicLinks.Texts,
          banner1: res.data.DynamicLinks.Banners.find(el => el.LinkID == 64),
          banner2: res.data.DynamicLinks.Banners.find(el => el.LinkID == 1345),
          gallery: res.data.DynamicLinks.Galleries
        }))
      }).catch(err => {
        console.log(err);
      }).finally(() => {
        setData(prevData => ({
          ...prevData,
          loading: false
        }));
      })
  }, []);
 
  return (
    <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Header navigation={navigation} headerType="main" headerTitle="" />
            {
              data.loading ?
              <Loading /> :
              <>
                <ImageSlider data={data.slides} navigation={navigation} cStyles={sliderStyles} pagStyles={pagStyles} />
                <Buttons data={data.btns} navigation={navigation} />
                <ProductSlider navigation={navigation} content={data.newest} />
                <Banner data={data.banner1} navigation={navigation} />
                <Gallery navigation={navigation} images={data.gallery} />
                <Banner navigation={navigation} data={data.banner2} />
                <ProductSlider navigation={navigation} content={data.bags} />
              </>
            }
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