import { View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";

import Text from '../Text';

const ProductBox = ({navigation, prod, style}) => {

  return (
    <View style={[styles.card, style]}>
      <TouchableOpacity style={styles.imageLink} onPress={() => navigation.navigate('Product', {prodId: prod.ID})}>
        <Image source={prod.Picture ? {uri: `https://www.shop9.ir${prod.PicturePath}${prod.PictureExt}`} : require("../../assets/images/nopic.webp")} style={styles.image} resizeMode="contain" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Product', {prodId: prod.ID})}>
        <Text style={styles.title}>{prod.Title}</Text>
      </TouchableOpacity>

      <View style={styles.cardFooter}>
        {prod.Status == 1 ? 
          <TouchableOpacity onPress={() => Alert.alert('افزوده شد!')}>
            <Text style={styles.icon}>&#xf07a;</Text>
          </TouchableOpacity>
          : null
        }
        <View style={styles.priceBox}>
          <Text style={[styles.price, styles.unit]}>{prod.Prices.PriceUnit}</Text>
          <Text style={styles.price}>{prod.Prices.FormattedNewPrice}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 280,
    width: 175,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ababab',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 8
  },
  imageLink: {
    height: "45%",
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%'
  },
  title: {
    color: "black",
    fontSize: 14
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    fontFamily: 'Font Awesome 6 Free Solid',
    fontSize: 18,
    color: '#64ba69',
  },
  price: {
    color: '#64ba69'
  },
  unit: {
    marginRight: 4
  },
  priceBox: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default ProductBox;