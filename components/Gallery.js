import { StyleSheet, Image, TouchableOpacity, View } from "react-native";

const Gallery = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.link}>
        <Image source={require('../assets/images/gallery1.jpg')} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <Image source={require('../assets/images/gallery2.jpg')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4  
  },
  link: {
    width: '47%',
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