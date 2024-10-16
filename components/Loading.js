import { View, ScrollView, StyleSheet, ActivityIndicator, Dimensions } from "react-native";

const Loading = () => {
  return (
    <ScrollView>
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#f54120" />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height
  }
})

export default Loading