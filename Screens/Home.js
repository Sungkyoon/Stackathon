import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import FlipProfit from './FlipProfit.js';

export default function Home({ navigation }) {
  const pressHandlerFlip = () => {
    // navigation.navigate('Flip');
    navigation.navigate('Flip');
  };
  const pressHandlerRental = () => {
    // navigation.navigate('Flip');
    navigation.navigate('Rental');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHead}> Welcome to ROI Calculator! </Text>
      <Text>( Return of Investment ) </Text>
      <Text style={styles.text}>Select your type of Investment below</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title='Flipping' color='white' onPress={pressHandlerFlip} />
        </View>
        <View style={styles.button}>
          <Button title='Rental' color='white' onPress={pressHandlerRental} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 10,
    width: 160,
    margin: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  container: {
    alignItems: 'center',
  },
  text: {
    marginTop: '10%',
    fontSize: 20,
  },
  textHead: {
    marginTop: '5%',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
