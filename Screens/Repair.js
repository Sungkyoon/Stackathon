import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Touchable,
} from 'react-native';

export default function Repair({ updateRepair, setModalRepair }) {
  const [living, setLiving] = useState(0);
  const [kitchen, setKitchen] = useState(0);
  const [bedroom, setBedroom] = useState(0);
  const [bathroom, setBathroom] = useState(0);

  const onSubmit = () => {
    let one = +living * 5000;
    let two = +kitchen * 5000;
    let three = +bedroom * 2500;
    let four = +bathroom * 3000;
    let values = [one, two, three, four];
    let total = values.reduce((a, b) => a + b, 0);
    updateRepair(total);
    console.log('this is total -> ', total);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ScrollView>
        <View style={styles.button1Container}>
          <TouchableOpacity>
            <View style={styles.button1}>
              <Button
                title='Back'
                type='submit'
                color='white'
                onPress={() => setModalRepair(false)}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.container}>
            <Text style={styles.textTop}>Renovation</Text>
            <Text style={styles.amount}>(Enter Amount of Rooms)</Text>
            <Text style={styles.text}>Living Room </Text>
            <TextInput
              style={styles.input}
              placeholder='0'
              onChangeText={(val) => setLiving(val)}
              value={living}
              keyboardType='numeric'
            />
            <Text style={styles.text}>Kitchen </Text>
            <TextInput
              style={styles.input}
              placeholder='0'
              onChangeText={(val) => setKitchen(val)}
              value={kitchen}
              keyboardType='numeric'
            />
            <Text style={styles.text}>Bedroom </Text>
            <TextInput
              style={styles.input}
              key='3'
              placeholder='0'
              onChangeText={(val) => setBedroom(val)}
              value={bedroom}
              keyboardType='numeric'
            />
            <Text style={styles.text}>Bathroom </Text>
            <TextInput
              style={styles.input}
              key='4'
              placeholder='0'
              onChangeText={(val) => setBathroom(val)}
              value={bathroom}
              keyboardType='numeric'
            />
            <TouchableOpacity onPress={() => console.log(props)}>
              <View style={styles.button}>
                <Button
                  title='Get Total Repair Cost'
                  type='submit'
                  color='white'
                  onPress={onSubmit}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    fontSize: 20,
    width: '25%',
    // marginBottom: '5%',
    margin: '3%',
    marginBottom: '3%',
    borderRadius: 10,
  },
  textTop: {
    fontSize: 35,
    marginBottom: 5,
    textDecorationLine: 'underline',
  },

  text: {
    fontSize: 20,
    margin: 10,
  },
  amount: {
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 100,
    padding: 10,
    width: 200,
    margin: 50,
  },
  button1: {
    backgroundColor: 'red',
    borderRadius: 100,
    padding: 10,
    width: 80,
    margin: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
