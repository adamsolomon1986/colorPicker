import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PickerScreen from './components/pickerScreen';

import { Provider } from 'react-redux';
import { store } from './redux';
import PickerScreenComp from './components/pickerScreen';

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <PickerScreenComp/>
    </View>
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
