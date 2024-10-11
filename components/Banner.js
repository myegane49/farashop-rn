import { StyleSheet, Image, TouchableOpacity } from "react-native";

const Banner = ({imgSrc, link}) => {
  return (
    <TouchableOpacity style={styles.link}>
      <Image source={{uri: imgSrc}} style={styles.image} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    width: '100%'
  },
  image: {
    width: '100%',
    height: 145,
    marginVertical: 10
  }
});

export default Banner;