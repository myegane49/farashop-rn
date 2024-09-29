import { View, FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";

import Header from "../Header";
import prodsGroupList from "../../temp-json/prodsGroupList.json";
import { useState } from "react";

const levelOnHeight = 37
const levelOnePaddingTop = 20

const ProductsGroup = ({ navigation }) => {
  const [levelOneCurrent, setLevelOneCurrent] = useState(1)

  return (
    <View style={styles.container}>
      <Header navigation={navigation} headerTitle="دسته بندی محصولات" />
      <View style={styles.levelOne}>
        <FlatList
          data={prodsGroupList}
          inverted={true}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={[styles.levelOneBtn, levelOneCurrent == item.id ? styles.levelOneBtnActive : {}]}>
                <Text style={[styles.levelOneText, levelOneCurrent == item.id ? styles.levelOneTextActive : {}]}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  levelOne: {
    backgroundColor: 'blue',
    height: levelOnHeight + levelOnePaddingTop,
    paddingTop: levelOnePaddingTop
  },
  levelOneBtn: {
    paddingHorizontal: 10,
    height: levelOnHeight,
    backgroundColor: 'yellow'
  },
  levelOneBtnActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  levelOneText: {
    color: '#ccc',
    fontSize: 16
  },
  levelOneTextActive: {
    color: '#fff'
  }

});

export default ProductsGroup;
