import { View, Image, Dimensions, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import ProductBox from './ProductBox';
import prodsList from '../../temp-json/prods.json';

const width = Dimensions.get('window').width;

const ProductSlider = () => {
  return (
    <View style={styles.container}>
      <Carousel
        width={width / 2}
        style={styles.carousel}
        data={prodsList}
        renderItem={({ item }) => (
          <ProductBox title={item.title} imgSrc={item.imgSrc} price={item.price} status={item.status} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start'
  },
  carousel: {
    width: width,
    backgroundColor: 'red',
  }
});

export default ProductSlider;