import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Text from './Text';

const Header = ({ navigation, headerType, headerTitle, style, screen }) => {
  return (
    <View style={[styles.container, style]}>
      {
        headerType == 'prod' ?
          <View style={styles.left}>
            <TouchableOpacity>
              <Text style={[styles.ellipses, styles.icon]}>&#xf142;</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Text style={[styles.cart, styles.icon]}>&#xf07a;</Text>
            </TouchableOpacity>
          </View>
        :
          <View style={styles.left}>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Text style={[styles.cart, styles.icon]}>&#xf07a;</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.mGlass, styles.icon]}>&#xf002;</Text>
            </TouchableOpacity>
          </View>
      }

      {
        headerType == 'main' ? 
          <View style={styles.right}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image style={styles.logo} source={require('../assets/images/header-logo.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Text style={[styles.bars, styles.icon]}>&#xf0c9;</Text>
            </TouchableOpacity>
          </View>
        :
          <View style={styles.right}>
            <Text style={styles.headerTitle} numberOfLines={1} ellipsizeMode="tail" >{headerTitle}</Text>
            <TouchableOpacity onPress={() => {
              if (screen?.prevState) {
                navigation.navigate(screen.name, screen.data)
              } else if (navigation.canGoBack()) {
                navigation.goBack();
              } else {
                navigation.openDrawer();
              }
            }}>
              <Text style={[styles.bars, styles.icon]}>&#xf061;</Text>
            </TouchableOpacity>
          </View>
      }
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
    top: 0,
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
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    width: 180    
  },
  ellipses: {
    marginRight: 20,
    marginLeft: 10
  }
});

export default Header;