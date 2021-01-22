import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Animated,
} from 'react-native';
import Header from './Components/Header.js';
import Flip from './Components/Flip.js';

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
        <Header />
      </Animated.View>
      <Flip
        onScroll={(e) => {
          scroll.setValue(e.nativeEvent.contentOffset.y);
        }}
      />
      <FlatList />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
