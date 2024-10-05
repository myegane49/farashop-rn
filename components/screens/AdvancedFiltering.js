import { View, FlatList, StyleSheet, TouchableOpacity, Text, Modal, TouchableWithoutFeedback } from "react-native";
import { RadioButton } from 'react-native-paper'; 

import Header from "../Header";
import { useState } from "react";

import prodsGroupList from "../../temp-json/prodsGroupList.json";
import ProductBox from '../productSlider/ProductBox';

const AdvancedFiltering = ({ navigation, route }) => {
  const [sort, setSort] = useState(1)
  const [isModalVisible, setModalVisible] = useState(false);
  const prods = prodsGroupList.find(group => group.id == route.params.id)
  const sortOptions = [
    {title: 'وضعیت', id: 1},
    {title: 'پربازدیدترین', id: 2},
    {title: 'پرفروشترین', id: 3},
    {title: 'جدیدترین', id: 4},
    {title: 'ارزانترین', id: 5},
    {title: 'گرانترین', id: 6}
  ]

  return (
    <>
      <Header style={styles.header} navigation={navigation} headerTitle={route.params.title} />
      <View style={styles.filters}>
        <TouchableOpacity style={styles.view}>
          <Text style={[styles.icon, styles.viewIcon]}>&#xf0ca;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn} onPress={() => setModalVisible(true)}>
          <View style={styles.filterText}>
            <Text style={styles.filterTitle}>مرتب سازی</Text>
            <Text style={styles.filterSummary}>{sortOptions.find(el => el.id == sort).title}</Text>
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

      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>

              {sortOptions.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.radioButtonContainer}
                  onPress={() => setSort(option.id)}
                >
                  <Text style={styles.optionText}>{option.title}</Text>
                  <RadioButton
                    value={option.id}
                    status={option.id == sort ? 'checked' : 'unchecked'}
                    onPress={() => setSort(option.id)}
                    color="green"
                  />
                </TouchableOpacity>
              ))}

            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <FlatList
        data={prods.items}
        contentContainerStyle={styles.prodsList}
        renderItem={({ item }) => {
          return (
            <ProductBox title={item.title} imgSrc={item.img} price={item.price} status={item.status} style={styles.PBox} />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
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
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
});

export default AdvancedFiltering;
