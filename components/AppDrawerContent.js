import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import Text from './Text';

const AppDrawerContent = (props) => {
  return (
    <DrawerContentScrollView contentContainerStyle={{ paddingTop: 0 }} {...props}>
      <View style={styles.header}>
        <TouchableOpacity style={[styles.drawerItem, styles.authItem]} onPress={() => props.navigation.navigate('Auth')}>
          <Text style={[styles.label, styles.auth]}>ورود و ثبت نام</Text>
          <Text style={[styles.icon, styles.authIcon]}>&#xf007;</Text>
        </TouchableOpacity>
        <Text style={styles.version}>ویرایش 3.2.0</Text>
      </View>

      <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Home')}>
        <Text style={styles.label}>خانه</Text>
        <Text style={styles.icon}>&#xf015;</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.drawerItem, styles.drawerItemBorder]} onPress={() => props.navigation.navigate('ProductsGroup')}>
        <Text style={styles.label}>دسته بندی محصولات</Text>
        <Text style={styles.icon}>&#xf0ca;</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.drawerItem, styles.drawerItemBorder]} onPress={() => props.navigation.navigate('Cart')}>
        <Text style={styles.cartCount}>0</Text>
        <Text style={styles.label}>سبد خرید</Text>
        <Text style={styles.icon}>&#xf07a;</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.drawerItem, styles.drawerItemBorder]} onPress={() => props.navigation.navigate('Latest')}>
        <Text style={styles.label}>جدیدترین ها</Text>
        <Text style={styles.icon}>&#xf005;</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('FAQ')}>
        <Text style={styles.label}>سوالات متداول</Text>
        <Text style={styles.icon}>&#xf059;</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Contact')}>
        <Text style={styles.label}>ارتباط با ما</Text>
        <Text style={styles.icon}>&#xf879;</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('About')}>
        <Text style={styles.label}>درباره ما</Text>
        <Text style={styles.icon}>&#xf3cf;</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Creator')}>
        <Text style={styles.label}>درباره سازنده</Text>
        <Text style={styles.icon}>&#xf544;</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Share')}>
        <Text style={styles.label}>اشتراک گذاری</Text>
        <Text style={styles.icon}>&#xf1e0;</Text>
      </TouchableOpacity>

      {/* <DrawerItemList {...props} /> */}

      {/* <DrawerItem 
        label=" Button" 
        onPress={() => alert(' button pressed!')} 
      />

      <View style={{ padding: 20 }}>
        <Button title="Log Out" onPress={() => alert('Logged out!')} />
      </View> */}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f54120',
  },
  drawerItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 17,
    position: 'relative',
  },
  drawerItemBorder: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  icon: {
    color: '#888888',
    fontFamily: 'Font Awesome 6 Free Solid',
    fontSize: 20,
    marginRight: 25
  },
  label: {
    color: '#888888',
    fontSize: 16,
    marginRight: 25
  },
  cartCount: {
    height: 34,
    width: 34,
    borderRadius: 17,
    color: '#000',
    backgroundColor: '#ccc',
    position: 'absolute',
    left: 25,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  version: {
    color: '#fff',
    textAlign: 'left',
    marginLeft: 10,
    marginBottom: 10
  },
  auth: {
    color: '#fff',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 7,
    paddingHorizontal: 14,
    paddingVertical: 7,
    fontSize: 14,
    marginRight: 20
  },
  authIcon: {
    color: '#fff'
  },
  authItem: {
    marginTop: 40,
    paddingVertical: 0
  }
});

export default AppDrawerContent;
