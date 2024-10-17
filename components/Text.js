import { Text as RNText, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: 'IRANSansMobileFaNum'
  },
});

const Text = ({style, children}) => {
  return <RNText style={[styles.defaultFont, style]}>{children}</RNText>;
};

export default Text