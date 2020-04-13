/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';

function SimpleButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={props.style}>
        <Text style={props.textStyle}>
          {props.customText || 'Simple Button'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default SimpleButton;

SimpleButton.propTypes = {
  customText: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.string,
  textStyle: PropTypes.string,
};
