import { View, Text, Dimensions, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import ProductBox from './ProductBox';
import prodsList from '../../temp-json/prods.json';

const width = Dimensions.get('window').width;

const ProductSlider = ({navigation, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.PsTop}>
        <TouchableOpacity onPress={() => Alert.alert(title)}>
          <Text style={styles.showMore}>نمایش بیشتر</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>

      <Carousel
        width={width / 2}
        style={styles.carousel}
        data={prodsList}
        renderItem={({ item }) => (
          <ProductBox navigation={navigation} prod={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 365,
    justifyContent: 'space-between'
  },
  carousel: {
    width: width,
  },
  PsTop: {
    marginVertical: 27,
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  showMore: {
    fontSize: 18,
    color: '#2db5e3'
  },
  title: {
    fontSize: 18,
    color: 'gray'
  }
});

export default ProductSlider;