import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Flip() {
  const onChange = (e) => {
    e.target.value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };
  return (
    <View style={styles.flip}>
      <Formik
        initialValues={{
          Purchase: '',
          Repair: '',
          Closing: '',
          Utility: 3171.5,
          ARV: '',
        }}
        onSubmit={(values) => {
          // Do calculations later
          console.log(values);
        }}
      >
        {(formikProps) => (
          <View>
            <View style={styles.container}>
              <Text style={styles.textTop}>Purchase Price:</Text>
              <TextInput
                style={styles.input}
                type='number'
                placeholder='Purchase Price...'
                onChangeText={(formikProps) =>
                  formikProps.values.Purchase.setFieldValue(
                    'Purchase',
                    formikProps.values.Purchase.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })
                  )
                }
                value={formikProps.values.Purchase}
                keyboardType='numeric'
              />

              <Text style={styles.text}> Repair Cost:</Text>
              <TextInput
                style={styles.input}
                placeholder='Repair Cost...'
                onChangeText={formikProps.handleChange('Repair')}
                value={formikProps.values.Repair.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
                keyboardType='numeric'
              />

              <Text style={styles.text}> Closing Fee:</Text>
              <TextInput
                style={styles.input}
                placeholder='Closing Fee...'
                onChangeText={formikProps.handleChange('Closing')}
                value={formikProps.values.Closing.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
                keyboardType='numeric'
              />

              <Text style={styles.text}> Utility:</Text>
              <TextInput
                style={styles.input}
                placeholder='Utility...'
                onChangeText={formikProps.handleChange('Utility')}
                value={formikProps.values.Utility.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
                keyboardType='numeric'
              />

              <Text style={styles.text}> ARV(After Repair Value):</Text>
              <TextInput
                style={styles.input}
                placeholder='ARV ( After Repair Value ...'
                onChangeText={formikProps.handleChange('ARV')}
                value={formikProps.values.ARV.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
                keyboardType='numeric'
              />
            </View>
            <TouchableOpacity>
              <View style={styles.button}>
                <Button
                  title='submit'
                  color='white'
                  onPress={formikProps.handleSubmit}
                />
              </View>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
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
});
