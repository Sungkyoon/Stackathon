import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Profit({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {' '}
        Your Profit is
        {/* {navigation.getParam('total')} */}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    margin: 10,
  },
});
