import { View, SafeAreaView, ScrollView, StyleSheet, Dimensions, TouchableOpacity,  } from "react-native";
import axios from 'axios';
import { useState, useEffect } from "react";

import Header from "../Header";
import ImageSlider from "../slider/ImageSlider";
import Loading from "../Loading";
import Text from "../Text";

const screenWidth = Dimensions.get('window').width;
const carouselHeight = 300

const Product = ({ navigation, route }) => {
  const prodId = route.params.prodId
  const [prod, setProd] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.post('https://www.shop9.ir/api/shop/Product/GetDetails', {
      ProductID: prodId,
    }).then(res => {
      setProd(res.data)
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      setLoading(false)
    })
  }, []);
  
  const removeHtmlTags = (text) => {
    text = text.replace(/&nbsp;/g, '').replace(/&zwnj;/g, '')
    return text.replace(/<[^>]*>/g, '');
  };
  
  return (
    <SafeAreaView>
      {
        loading ?
        <Loading /> :

        <ScrollView>
          <View style={styles.container}>
            <Header navigation={navigation} headerType="prod" headerTitle={prod.Title.Main} />
            <ImageSlider navigation={navigation} data={prod.ProductImages.Gallery} type="product" cStyles={sliderStyles} pagStyles={pagStyles} />

            <View style={styles.titleContainer}>
              <View style={styles.titleBtns}>
                <TouchableOpacity><Text style={styles.titleBtn}>&#xf1e0;</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.titleBtn}>&#xf004;</Text></TouchableOpacity>
              </View>
              <Text style={styles.title}>{prod.Title.Main}</Text>
            </View>

            <View style={styles.paddingContainer}>
              <View style={styles.tabs}>
                <TouchableOpacity style={styles.tab}>
                  <Text style={styles.tabText}>نظرات کاربران</Text>
                  <Text style={styles.tabIcon}>&#xf086;</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                  <Text style={styles.tabText}>مشخصات</Text>
                  <Text style={styles.tabIcon}>&#xf328;</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.info}>
                <View style={styles.attrs}>
                  <View>
                    <Text style={styles.attr}>رنگ</Text>
                    <Text style={styles.attrOption}>قرمز</Text>
                  </View>
                  <View>
                    <Text style={styles.attr}>باتری</Text>
                    <Text style={styles.attrOption}>72h</Text>
                  </View>
                  <View>
                    <Text style={styles.attr}>گارانتی</Text>
                    <Text style={styles.attrOption}>۲۴ ماه</Text>
                  </View>
                </View>

                <Text style={styles.desc}>{removeHtmlTags(prod.Description)}</Text>

                <View style={styles.priceBox}>
                  <Text style={styles.price}>{prod.Prices.PriceUnit}</Text>
                  <Text style={styles.price}>{prod.Prices.NewPrice}</Text>
                </View>

                <TouchableOpacity style={styles.addToCartBtn}>
                  <Text style={styles.addToCartBtnText}>افزودن به سبد خرید</Text>
                  <Text style={styles.addToCartBtnIcon}>&#xf217;</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleContainer: {
    backgroundColor: '#fafafa',
    padding: 15,
    width: '100%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 2
  },
  titleBtns: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleBtn: {
    color: '#ccc',
    fontFamily: 'Font Awesome 6 Free Solid',
    fontSize: 20,
    marginRight: 25
  },
  title: {
    color: '#000',
    marginVertical: 20
  },
  paddingContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    paddingVertical: 10,
    width: '48%'
  },
  tabIcon: {
    fontSize: 18,
    color: '#ccc',
    fontFamily: 'Font Awesome 6 Free Solid',
  },
  tabText: {
    color: '#000',
    marginRight: 10
  },
  info: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 1
  },
  attrs: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginBottom: 17
  },
  attr: {
    color: '#000',
    paddingHorizontal: 5
  },
  attrOption: {
    color: 'gray',
    textAlign: 'right',
    direction: 'rtl',
    backgroundColor: '#ccc',
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginVertical: 3
  },
  desc: {
    color: '#000',
    fontSize: 13,
    lineHeight: 22,
    padding: 4
  },
  priceBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  price: {
    color: '#66bb6a',
    fontSize: 22,
    marginRight: 3,
    marginTop: 15
  },
  addToCartBtn: {
    backgroundColor: '#66bb6a',
    marginTop: 20,
    borderRadius: 3,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addToCartBtnText: {
    color: '#fff',
    fontSize: 20,
    marginRight: 15
  },
  addToCartBtnIcon: {
    fontFamily: 'Font Awesome 6 Free Solid',
    color: '#fff',
    fontSize: 22
  }
});

const sliderStyles = StyleSheet.create({
  container: {
    height: carouselHeight,
    backgroundColor: '#fff'
  },
  itemContainer: {
  },
  image: {
    height: carouselHeight,
    width: screenWidth * 0.75,
  }
});

const pagStyles = StyleSheet.create({
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    marginHorizontal: 2.5,
  },
  activeDot: {
    backgroundColor: '#f54120',
  },
  inactiveDot: {
    backgroundColor: '#efd1cb',
  },
});

export default Product;