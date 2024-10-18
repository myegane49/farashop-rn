import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";

import Text from "./Text";

const Buttons = ({data, type, navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        inverted={true}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.btn} onPress={() => {
              if (type == 'prodGroup') {
                navigation.navigate('AdvancedFiltering', {
                  id: item.ID,
                  type: 3,
                  title: item.Title,
                  prevState: true
                })
              }
            }}>
              <Text style={styles.btnText}>{item.Title}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.ID.toString()}
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
