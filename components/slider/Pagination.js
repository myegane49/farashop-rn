import React from 'react';
import { View, StyleSheet } from 'react-native';

const Pagination = ({ index, total, cStyles }) => {
  return (
    <View style={styles.paginationContainer}>
      {Array.from({ length: total }).map((_, i) => (
        <View
          key={i}
          style={[
            styles.dot, cStyles.dot,
            index === i ? styles.activeDot : styles.inactiveDot,
            index === i ? cStyles.activeDot : cStyles.inactiveDot
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    width: '100%'
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'gray',
  },
  inactiveDot: {
    backgroundColor: 'white',
  },
});

export default Pagination;
