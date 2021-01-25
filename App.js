import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Animated, ScrollView } from 'react-native';
import Header from './Screens/Header.js';
import Flip from './Screens/Flip.js';
import Repair from './Screens/Repair.js';
import Navigator from './Routes/HomeStack';

export default function App() {
  const scroll = new Animated.Value(0);
  const headScroll = scroll.interpolate({
    inputRange: [0, 90],
    outputRange: [0, -90],
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ translateY: headScroll }],
        }}
      >
        {/* <Header /> */}
      </Animated.View>
      <Navigator />
      {/* <Flip
          onScroll={(e) => {
            scroll.setValue(e.nativeEvent.contentOffset.y);
          }}
        />
        <Repair
          onScroll={(e) => {
            scroll.setValue(e.nativeEvent.contentOffset.y);
          }}
        /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
