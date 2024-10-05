import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";

const ProductBox = ({title, imgSrc, price, status, style}) => {

  return (
    <View style={[styles.card, style]}>
      <Image source={imgSrc ? {uri: imgSrc} : require("../../assets/images/nopic.webp")} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.cardFooter}>
        <TouchableOpacity onPress={() => Alert.alert('افزوده شد!')}>
          <Text style={styles.icon}>&#xf07a;</Text>
        </TouchableOpacity>
        <View style={styles.priceBox}>
          <Text style={[styles.price, styles.unit]}>تومان</Text>
          <Text style={styles.price}>{price}</Text>
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
  image: {
    height: "45%",
    width: '100%',
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