import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';

export default function Home({ navigation }) {
  const pressHandler = () => {
    // navigation.navigate('Flip');
    navigation.goBack('Home');
  };

  return (
    <ImageBackground
      source={require('../assets/ComingSoon2.png')}
      style={styles.container}
    >
      <Text style={styles.text}> Rental Investments</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'black',
  },
  text: {
    marginTop: '30%',
    fontSize: 40,
    color: 'white',
  },
});
