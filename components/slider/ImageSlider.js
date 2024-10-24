import React, { useState } from 'react';
import { View, Image, Dimensions, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import Pagination from './Pagination';

const carouselHeight = 250
const screenWidth = Dimensions.get('window').width;

const ImageSlider = ({data, cStyles, pagStyles, type, navigation}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const width = Dimensions.get('window').width;

  return (
    <View style={[styles.container, cStyles.container]}>
      <Carousel
        width={width}
        data={data}
        height={carouselHeight}
        autoPlay={false}
        autoPlayInterval={4000}
        onSnapToItem={index => {
          setActiveIndex(index)
        }}
        renderItem={({ item }) =>
          <View style={[styles.itemContainer, cStyles.itemContainer]}>
            <TouchableOpacity onPress={() => {
              if (type != 'product') {
                if (item.LinkType == 1) {
                  navigation.navigate('AdvancedFiltering', {
                    id: item.LinkID,
                    type: 3,
                  })
                } else {
                  navigation.navigate('Product', {prodId: item.LinkID})
                }
              }
            }}>
              {type == 'product' 
                ? <Image source={{uri: `https://www.shop9.ir${item.Path}`}} style={[styles.image, cStyles.image]} />
                : <Image source={{uri: `https://www.shop9.ir/images/farashop/dynamic-link/${item.Picture}`}} style={[styles.image, cStyles.image]} />
              }
            </TouchableOpacity>
          </View>
        }
      />
      <Pagination index={activeIndex} total={data.length} cStyles={pagStyles} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: carouselHeight,
    position: 'relative',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: screenWidth,
    height: carouselHeight
  },
});

export default ImageSlider;