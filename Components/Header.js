import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.text}>ROI Calculator</Text>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
    height: 90,
    width: '100%',
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginTop: '7%',
  },
});
