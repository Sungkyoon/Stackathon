import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Repair from './Repair.js';

export default function Flip({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalRepairOpen, setModalRepair] = useState(false);
  const [purchase, setPurchase] = useState(0);
  const [repair, setRepair] = useState(0);
  const [closing, setClosing] = useState(0);
  const [utility, setUtility] = useState(3170);
  const [arv, setArv] = useState(0);
  const [total, setTotal] = useState(0);

  const handleSubmit = () => {
    let one = purchase * 1;
    let two = repair * 1;
    let three = closing * 1;
    let four = utility * 1;
    let five = arv * 1;
    let values = [one, two, three, four];
    let total = five - values.reduce((a, b) => a + b, 0);
    setTotal(
      total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })
    );
    setModalOpen(true);
    console.log('THIS IS TWO', two);
    navigation.navigate('FlipProfit', total);
  };
  const updateRepair = (finalPrice) => {
    setRepair(finalPrice);
    setModalRepair(false);
  };

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 120 : 0;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView
        behavior='height'
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <ScrollView>
          <View style={styles.flip}>
            <Modal visible={modalOpen}>
              <ImageBackground
                source={require('../assets/Modal.png')}
                style={styles.modalContent}
              >
                <Text style={styles.modalTextTop}>Your Profit is</Text>
                <Text style={styles.modalText}>{total}</Text>
                <View style={styles.button}>
                  <Button
                    title='Go Back'
                    color='white'
                    onPress={() => setModalOpen(false)}
                  />
                </View>
              </ImageBackground>
            </Modal>

            <Modal visible={modalRepairOpen}>
              <Repair
                updateRepair={updateRepair}
                setModalRepair={setModalRepair}
              />
            </Modal>
            <View style={styles.container}>
              <Text style={styles.textTop}>Purchase Price:</Text>
              <TextInputMask
                style={styles.input}
                type={'money'}
                options={{
                  unit: '$',
                  delimiter: ',',
                  separator: '.',
                  precision: 2,
                }}
                placeholder={purchase.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
                onChangeText={(val) => setPurchase(val)}
                value={purchase}
                keyboardType='numeric'
              />

              <Text style={styles.text}> Repair Cost:</Text>
              <TouchableOpacity onPress={() => setModalRepair(true)}>
                <Text style={styles.textLink}>
                  {' '}
                  Don't know repair cost? Calculate here!
                </Text>
              </TouchableOpacity>
              <TextInputMask
                style={styles.input}
                type={'money'}
                options={{
                  unit: '$',
                  delimiter: ',',
                  separator: '.',
                  precision: 2,
                }}
                placeholder={repair.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
                onChangeText={(val) => setRepair(val)}
                value={repair}
                keyboardType='numeric'
              />

              <Text style={styles.text}> Closing Cost:</Text>
              <Text>(Agent/Attorney Fee, Title Insurance, Taxes)</Text>
              <TextInputMask
                style={styles.input}
                type={'money'}
                options={{
                  unit: '$',
                  delimiter: ',',
                  separator: '.',
                  precision: 2,
                }}
                placeholder={closing.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
                onChangeText={(val) => setClosing(val)}
                value={closing}
                keyboardType='numeric'
              />

              <Text style={styles.text}> Monthly Expenses:</Text>
              <Text>Average cost calculated for you (For 6 months)</Text>
              <TextInputMask
                style={styles.input}
                type={'money'}
                options={{
                  unit: '$',
                  delimiter: ',',
                  separator: '.',
                  precision: 2,
                }}
                placeholder='$0.00'
                onChangeText={(val) => setUtility(val)}
                value={utility.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
                keyboardType='numeric'
              />

              <Text style={styles.text}> ARV(After Repair Value):</Text>
              <TextInputMask
                style={styles.input}
                type={'money'}
                options={{
                  unit: '$',
                  delimiter: ',',
                  separator: '.',
                  precision: 2,
                }}
                placeholder={arv.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
                onChangeText={(val) => setArv(val)}
                value={arv}
                keyboardType='numeric'
              />

              {/* <TouchableOpacity onPress={() => navigation.navigate('FlipProfit')}> */}
              <TouchableOpacity>
                <View style={styles.button}>
                  <Button title='submit' color='white' onPress={handleSubmit} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    fontSize: 20,
    width: '70%',
    // marginBottom: '5%',
    margin: '3%',
    marginBottom: '3%',
    borderRadius: 10,
  },
  textTop: {
    fontSize: 20,
    marginTop: 50,
  },

  text: {
    fontSize: 20,
    margin: 10,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 100,
    padding: 10,
    marginHorizontal: '15%',
    margin: 15,
  },
  textLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  modalContent: {
    alignItems: 'center',
    height: '100%',
  },
  modalTextTop: {
    marginTop: '30%',
    color: 'white',
    fontSize: 55,
    textShadowColor: 'green',
    textShadowRadius: 5,
    textDecorationLine: 'underline',
  },
  modalText: {
    marginTop: '10%',
    fontSize: 60,
    marginBottom: '30%',
    color: 'white',
    textShadowColor: 'green',
    textShadowRadius: 20,
  },
});
