import { View, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image } from "react-native";
import {useEffect, useState} from 'react'
import axios from 'axios';

import Header from "../Header";
import Loading from "../Loading";
import Text from "../Text";

const elevationVal = 20

const ProductsGroup = ({ navigation }) => {
  const [data, setData] = useState({
    menus: [],
    levelOne: [],
    levelOneCurrent: 1
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.post('https://www.shop9.ir/api/shop/Category/GetBy', {
      ParentID: 0,
      SelectType: 4
    }).then(res => {
      setData({
        menus: res.data,
        levelOne: res.data.filter(el => el.ParentId == null),
        levelOneCurrent: res.data.filter(el => el.ParentId == null)[0].ID
      })
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    })
  }, []);
 
  return (
    <SafeAreaView>

      <>
        <Header style={styles.header} navigation={navigation} headerTitle="دسته بندی محصولات" />
        {
          loading ?
          <Loading /> :
          <ScrollView>
            <View style={styles.levelOneContainer}>
              <View style={styles.levelOne}>
                <FlatList
                  data={data.levelOne}
                  inverted={true}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity style={[styles.levelOneBtn, data.levelOneCurrent == item.ID ? styles.levelOneBtnActive : {}]}
                        onPress={() => setData(prevData => ({...prevData, levelOneCurrent: item.ID}))}>
                        <Text style={[styles.levelOneText, data.levelOneCurrent == item.ID ? styles.levelOneTextActive : {}]}>{item.Title}</Text>
                      </TouchableOpacity>
                    );
                  }}
                  keyExtractor={(item) => item.ID.toString()}
                  horizontal={true}
                />
              </View>
            </View>
            
            <View style={styles.levelTwo}>
              {
                data.menus.filter(el => el.ParentId == data.levelOneCurrent).map(item => {
                  return (
                    <TouchableOpacity key={item.ID.toString()} style={styles.levelTwoBtn} onPress={() => navigation.navigate('AdvancedFiltering', {
                      id: item.ID,
                      type: 3
                    })}>
                      <Image source={{uri: 'https://www.shop9.ir' + item.Picture}} style={styles.levelTwoImg} />
                      <Text style={styles.levelTwoText}>{item.Title}</Text>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
            
            {/* <FlatList
              style={styles.levelTwo}
              data={menus.filter(el => el.ParentId == levelOneCurrent)}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity style={styles.levelTwoBtn} onPress={() => navigation.navigate('AdvancedFiltering', {
                    id: item.ID,
                    type: 3,
                    title: item.Title
                  })}>
                    <Image source={{uri: 'https://www.shop9.ir' + item.Picture}} style={styles.levelTwoImg} />
                    <Text style={styles.levelTwoText}>{item.Title}</Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.ID.toString()}
            /> */}

          </ScrollView>
        }
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  levelOneContainer: {
    backgroundColor: '#f54120',
    height: 60,
    flexDirection: 'column-reverse',
    elevation: elevationVal,
    zIndex: 20,
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
    elevation: elevationVal,
  },
  levelTwo: {
    flexDirection: 'column',
    backgroundColor: '#fff',
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
  }
});

export default ProductsGroup;
