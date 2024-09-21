import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const MainHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text style={[styles.cart, styles.icon]}>&#xf07a;</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.mGlass, styles.icon]}>&#xf002;</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.right}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image style={styles.logo} source={require('../../assets/images/header-logo.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text style={[styles.bars, styles.icon]}>&#xf0c9;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor:'#f54120',
    width: '100%',
    top: 0
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  bars: { 
    marginLeft: 20,
    marginRight: 10
  },
  logo: {
    height: 50,
    width: 175
  },
  cart: {
    marginRight: 20,
    marginLeft: 7,
  },
  mGlass: {
    marginLeft: 5,
  },
  icon: {
    fontFamily: 'Font Awesome 6 Free Solid',
    fontSize: 20,
    color: '#fff',
  }
});

export default MainHeader;