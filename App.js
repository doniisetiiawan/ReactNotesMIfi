/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, StyleSheet } from 'react-native';

import SimpleButton from './components/SimpleButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function App() {
  return (
    <View style={styles.container}>
      <SimpleButton />
    </View>
  );
}

export default App;
