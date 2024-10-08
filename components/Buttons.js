import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import groupList from "../temp-json/prodsGroupList.json";

const Buttons = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={groupList}
        inverted={true}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AdvancedFiltering', {
              title: item.title,
              id: item.id
            })}>
              <Text style={styles.btnText}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 68,
  },
  btn: {
    backgroundColor: "#f54120",
    margin: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 17,
    paddingLeft: 17,
    borderRadius: 30,
  },
  btnText: {
    fontSize: 18,
    color: "white"
  }
});

export default Buttons;
