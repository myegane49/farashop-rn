import { View, FlatList, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback, SafeAreaView, ActivityIndicator } from "react-native";
import { RadioButton } from 'react-native-paper';
import axios from 'axios';
import React, { useState, useEffect } from "react";

import Header from "../Header";
import ProductBox from '../productSlider/ProductBox';
import Loading from "../Loading";
import Text from "../Text";
import Buttons from "../Buttons";

const take = 8
const sortOptions = [
  {title: 'وضعیت', id: 1},
  {title: 'جدیدترین', id: 2},
  {title: 'پربازدیدترین', id: 3},
  {title: 'پرفروشترین', id: 4},
  {title: 'ارزانترین', id: 5},
  {title: 'گرانترین', id: 6}
]

const AdvancedFiltering = ({ navigation, route }) => {
  const [sort, setSort] = useState({
    sortOption: 1,
    isModalVisible: false
  })
  const [prods, setProds] = useState({
    products: [],
    skip: take,
    totalCount: 0
  })
  const [parent, setParent] = useState({
    parentId: 0,
    parentTitle: '',
    title: ''
  })
  const [hasMore, setHasMore] = useState(true);
  const [loadMore, setLoadMore] = useState(false);
  const [subLevel, setSubLevel] = useState(null)
  const [loading, setLoading] = useState(true)

  console.log(prods.skip)

  useEffect(() => {
    axios.post('https://www.shop9.ir/api/shop/AF/Find4App', {
      ProductGroupId: route.params.type == 3 ? route.params.id : null,
      TagID: route.params.type == 2 ? route.params.id : null,
      Skip: 0,
      Take: take,
      MinPrice: 0,
      MaxPrice: 0,
      Q: null,
      OrderBy: sort.sortOption,
      Status: 0,
      Platform: 2,
      AttributeOptionIds: [],
    }).then(res => {
      setProds(prevData => ({
        ...prevData,
        products: res.data.Products.Products,
        totalCount: res.data.Products.TotalCount
      }))
    }).then(() => {
      return axios.post('https://www.shop9.ir/api/shop/Category/GetBy', {
        ParentID: route.params.id,
        SelectType: 4
      })
    }).then(res => {
      if (res.data.length > 0) {
        setSubLevel(res.data)
      } else {
        setSubLevel(null)
      }
    }).then(() => {
      return axios.post('https://www.shop9.ir/api/shop/Category/GetBy', {
        ParentID: 0,
        SelectType: 4
      })
    }).then(res => {
      const currGroup = res.data.find(el => el.ID == route.params.id)
      setParent({
        parentId: currGroup.ParentId,
        parentTitle: res.data.find(el => el.ID == currGroup.ParentId).Title,
        title: currGroup.Title
      })
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    })

  }, [sort.sortOption, route.params.id]);

  const loadMoreItems = () => {
    if (loadMore || !hasMore) return;
    setLoadMore(true);

    axios.post('https://www.shop9.ir/api/shop/AF/Find4App', {
      ProductGroupId: route.params.type == 3 ? route.params.id : null,
      TagID: route.params.type == 2 ? route.params.id : null,
      Skip: prods.skip,
      Take: take,
      MinPrice: 0,
      MaxPrice: 0,
      Q: null,
      OrderBy: sort.sortOption,
      Status: 0,
      Platform: 2,
      AttributeOptionIds: [],
    }).then(res => {
      if (prods.products.length != prods.totalCount) {
        setProds(prevData => ({
          ...prevData,
          products: [...prevData.products, ...res.data.Products.Products],
          skip: prevData.skip + take
        }))
      } 
      if (prods.products.length == prods.totalCount) setHasMore(false);
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      setLoadMore(false);
    })
  };

  return (
    <>
      {
        loading ?
        <Loading /> :

        <>
          <Header style={styles.header} navigation={navigation} headerTitle={parent.title} screen={{
            name: 'AdvancedFiltering',
            prevState: route.params.prevState,
            data: {
              id: parent.parentId,
              type: 3,
              title: parent.parentTitle
            }
          }} />
          <View style={styles.filters}>
            <TouchableOpacity style={styles.view}>
              <Text style={[styles.icon, styles.viewIcon]}>&#xf0ca;</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterBtn} onPress={() => setSort(prevData => ({...prevData, isModalVisible: true}))}>
              <View style={styles.filterText}>
                <Text style={styles.filterTitle}>مرتب سازی</Text>
                <Text style={styles.filterSummary}>{sortOptions.find(el => el.id == sort.sortOption).title}</Text>
              </View>
              <Text style={styles.icon}>&#xf161;</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterBtn}>
              <View style={styles.filterText}>
                <Text style={styles.filterTitle}>فیلتر کردن</Text>
                <Text style={styles.filterSummary}>رنگ، نوع، قیمت و ...</Text>
              </View>
              <Text style={styles.icon}>&#xf0b0;</Text>
            </TouchableOpacity>
          </View>

          {
            subLevel ?
            <Buttons data={subLevel} type="prodGroup" navigation={navigation} parentId={route.params.id} parentTitle={route.params.title} /> :
            null
          }

          <Modal
            visible={sort.isModalVisible}
            animationType="fade"
            transparent={true}
            onRequestClose={() => setSort(prevData => ({...prevData, isModalVisible: false}))}
          >
            <TouchableWithoutFeedback onPress={() => setSort(prevData => ({...prevData, isModalVisible: false}))}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>

                  {sortOptions.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.radioButtonContainer}
                      onPress={() => setSort({isModalVisible: false, sortOption: option.id})}
                    >
                      <Text style={styles.optionText}>{option.title}</Text>
                      <RadioButton
                        value={option.id}
                        status={option.id == sort.sortOption ? 'checked' : 'unchecked'}
                        onPress={() => setSort({isModalVisible: false, sortOption: option.id})}
                        color="green"
                      />
                    </TouchableOpacity>
                  ))}

                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal> 

          <FlatList
            data={prods.products}
            contentContainerStyle={styles.prodsList}
            numColumns={2}
            // initialNumToRender={6}
            // maxToRenderPerBatch={6} 
            // windowSize={3}
            onEndReached={loadMoreItems}
            // onEndReachedThreshold={2}
            ListFooterComponent={() => {
              return loadMore ? <ActivityIndicator size="large" color="#f54120" style={styles.loadingIndicator} /> : null
            }}
            renderItem={({ item }) => {
              return (
                <ProductBox navigation={navigation} prod={item} style={styles.PBox} />
              );
            }}
            keyExtractor={(item) => item.ID.toString()}
          />
        </>
      }
    </>
  );
};

const styles = StyleSheet.create({
  filters: {
    flexShrink: 1,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
    elevation: 5
  },
  filterBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftColor: '#eee',
    borderLeftWidth: 1,
    paddingVertical: 5
  },
  icon: {
    color: 'gray',
    fontFamily: 'Font Awesome 6 Free Solid',
    fontSize: 18,
    marginLeft: 7
  },
  filterText: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  filterTitle: {
    color: 'gray',
    fontSize: 16
  },
  filterSummary: {
    color: '#ccc',
    fontSize: 12
  },
  view: {
    width: 47,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewIcon: {
    fontSize: 22
  },
  prodsList: {
    marginTop: 7,
  },
  PBox: {
    marginBottom: 7
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    paddingRight: 30,
    borderRadius: 5,
    alignItems: 'flex-end',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    marginRight: 20,
    color: 'black'
  },
  loadingIndicator: {
    padding: 16,
  },
});

export default React.memo(AdvancedFiltering);
