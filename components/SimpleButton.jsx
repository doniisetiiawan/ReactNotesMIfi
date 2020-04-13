import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';

function SimpleButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View>
        <Text>{props.customText || 'Simple Button'}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default SimpleButton;

SimpleButton.propTypes = {
  customText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
