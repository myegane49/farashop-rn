import React, { useState } from 'react';
import { View, Image, Dimensions, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import Pagination from './Pagination';

const carouselHeight = 250
const screenWidth = Dimensions.get('window').width;

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const width = Dimensions.get('window').width;

  const data = [
    { imgSrc: require('../../assets/images/slide1.jpg') },
    { imgSrc: require('../../assets/images/slide2.jpg') },
    { imgSrc: require('../../assets/images/slide3.jpg') },
  ];

  return (
    <View style={styles.container}>
      <Carousel
        width={width}
        data={data}
        height={carouselHeight}
        autoPlay={false}
        autoPlayInterval={4000}
        onSnapToItem={index => {
          setActiveIndex(index)
        }}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => Alert.alert('slide')}>
              <Image source={item.imgSrc } style={styles.image} />
            </TouchableOpacity>
          </View>
        )}
      />
      <Pagination index={activeIndex} total={data.length} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: carouselHeight,
    position: 'relative'
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