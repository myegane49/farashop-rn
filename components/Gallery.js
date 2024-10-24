import { StyleSheet, Image, TouchableOpacity, View, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;

const Gallery = ({images, navigation}) => {
  return (
    <View style={styles.container}>
      {
        images.map(item => {
          return (
            <TouchableOpacity style={styles.link} key={item.ID} onPress={() => {
              if (item.LinkType == 1) {
                navigation.navigate('AdvancedFiltering', {
                  id: item.LinkID,
                  type: 3,
                })
              } else {
                navigation.navigate('Product', {prodId: item.LinkID})
              }
            }}>
              <Image source={{uri: 'https://www.shop9.ir/images/farashop/dynamic-link/' + item.Picture}} style={styles.image} />
            </TouchableOpacity>
          );
        })
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4
  },
  link: {
    width: screenWidth * 0.45,
    margin: 4,
    elevation: 5,
  },
  image: {
    borderWidth: 1,
    borderColor: '#bbbbbb',
    width: '100%',
    height: 145,
    borderRadius: 5
  }
});

export default Gallery;