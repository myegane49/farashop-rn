import { StyleSheet, Image, TouchableOpacity } from "react-native";

const Banner = ({navigation, data}) => {
  return (
    <TouchableOpacity style={styles.link} onPress={() => {
      if (data.LinkType == 1) {
        navigation.navigate('AdvancedFiltering', {
          id: data.LinkID,
          type: 3,
        })
      } else {
        navigation.navigate('Product', {prodId: data.LinkID})
      }
    }}>
      <Image source={{uri: "https://www.shop9.ir/images/farashop/dynamic-link/" + data.Picture}} style={styles.image} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    width: '100%'
  },
  image: {
    width: '100%',
    height: 145,
    marginVertical: 10
  }
});

export default Banner;