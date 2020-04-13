import React, { Component, createRef } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 64,
  },
  title: {
    height: 40,
  },
  body: {
    flex: 1,
  },
  inputContainer: {
    borderBottomColor: '#9E7CE3',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
});

class NoteScreen extends Component {
  constructor(props) {
    super(props);

    this.bodyRef = createRef();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            autoFocus
            placeholder="Untitled"
            style={[styles.textInput, styles.title]}
            onEndEditing={() => {
              this.bodyRef.current.focus();
            }}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            ref={this.bodyRef}
            multiline
            placeholder="Start typing"
            style={[styles.textInput, styles.body]}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
    );
  }
}

export default NoteScreen;
