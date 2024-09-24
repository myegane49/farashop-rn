import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import btnList from "../temp-json/btn.json";

const Buttons = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={btnList}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.btn}>
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
  }
});

export default Buttons;
