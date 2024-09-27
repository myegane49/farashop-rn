import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const AppDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles}>
        <Text style={{ marginTop: 10, fontSize: 18 }}>John Doe</Text>
      </View>

      <DrawerItemList {...props} />

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
    backgroundColor: '#f54120'
  }
});

export default AppDrawerContent;
