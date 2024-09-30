import { View, FlatList, StyleSheet, TouchableOpacity, Text, SafeAreaView, ScrollView, Image } from "react-native";

import Header from "../Header";
import prodsGroupList from "../../temp-json/prodsGroupList.json";
import { useState } from "react";

const elevationVal = 20

const ProductsGroup = ({ navigation }) => {
  const [levelOneCurrent, setLevelOneCurrent] = useState(1)

  return (
    <>
      <Header style={styles.header} navigation={navigation} headerTitle="دسته بندی محصولات" />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.levelOneContainer}>
            <View style={styles.levelOne}>
              <FlatList
                data={prodsGroupList}
                inverted={true}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity style={[styles.levelOneBtn, levelOneCurrent == item.id ? styles.levelOneBtnActive : {}]}
                      onPress={() => setLevelOneCurrent(item.id)}>
                      <Text style={[styles.levelOneText, levelOneCurrent == item.id ? styles.levelOneTextActive : {}]}>{item.title}</Text>
                    </TouchableOpacity>
                  );
                }}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
              />
            </View>
          </View>

          <FlatList
            style={styles.levelTwo}
            data={prodsGroupList.find((list => list.id == levelOneCurrent)).items}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.levelTwoBtn}>
                  <Image source={{uri: item.img}} style={styles.levelTwoImg} />
                  <Text style={styles.levelTwoText}>{item.title}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  levelOneContainer: {
    backgroundColor: '#f54120',
    height: 60,
    flexDirection: 'column-reverse',
    elevation: elevationVal,
    zIndex: 20
  },
  levelOne: {
    height: 40,
    position: 'relative',
    bottom: 1,
  },
  levelOneBtn: {
    paddingHorizontal: 10,
    height: 40,
  },
  levelOneBtnActive: {
    borderBottomWidth: 3,
    borderBottomColor: '#fff',
  },
  levelOneText: {
    color: '#ccc',
    fontSize: 16
  },
  levelOneTextActive: {
    color: '#fff'
  },
  header: {
    elevation: elevationVal
  },
  levelTwo: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    // marginTop: 2
  },
  levelTwoBtn: {
    height: 80,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
    width: '100%',
    paddingHorizontal: 20,
  },
  levelTwoText: {
    color: '#000',
    fontSize: 20
  },
  levelTwoImg: {
    height: '85%',
    width: 60,
    backgroundColor: 'blue'
  }
});

export default ProductsGroup;
