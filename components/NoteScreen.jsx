import React, { Component, createRef } from 'react';
import {
  TextInput, View, StyleSheet, Text,
} from 'react-native';

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
    this.state = { note: { ...props.note } };
  }

  onChangeNote(note) {
    const newNotes = { ...this.state.notes };
    newNotes[note.id] = note;
    console.log(newNotes);
    this.setState({ notes: newNotes });
  }

  updateNote(title, body) {
    const note = Object.assign(this.state.note, {
      title,
      body,
    });
    this.onChangeNote(note);
    this.setState(note);
  }

  render() {
    console.log(this.state.note);
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
            value={this.state.note.title}
            onChangeText={(title) => this.updateNote(title, this.state.note.body)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            ref={this.bodyRef}
            multiline
            placeholder="Start typing"
            style={[styles.textInput, styles.body]}
            underlineColorAndroid="transparent"
            value={this.state.note.body}
            onChangeText={(body) => this.updateNote(this.state.note.title, body)}
          />
        </View>
      </View>
    );
  }
}

export default NoteScreen;
