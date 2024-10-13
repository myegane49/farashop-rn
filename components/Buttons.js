import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";

const Buttons = ({data}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        inverted={true}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.btn}>
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
