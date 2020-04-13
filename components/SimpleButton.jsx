import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

function SimpleButton() {
  return (
    <TouchableOpacity onPress={() => console.log('Pressed!')}>
      <View>
        <Text>Simple Button</Text>
      </View>
    </TouchableOpacity>
  );
}

export default SimpleButton;
