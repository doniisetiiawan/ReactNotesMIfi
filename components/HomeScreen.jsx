import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import _ from 'underscore';

import SimpleButton from './SimpleButton';
import NoteList from './NoteList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  noNotesText: {
    color: '#48209A',
    marginBottom: 10,
  },
  simpleButton: {
    backgroundColor: '#5B29C1',
    borderColor: '#48209A',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 15,
    shadowColor: 'darkgrey',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  simpleButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedNote: { title: '', body: '' },
      notes: {
        1: { title: 'Note 1', body: 'body', id: 1 },
        2: { title: 'Note 2', body: 'body', id: 2 },
      },
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <NoteList
          notes={_(this.state.notes).toArray()}
          navigation={this.props.navigation}
          onSelectNote={(note) => this.props.navigation.push('Note', { note })}
        />
        <Text style={styles.noNotesText}>You haven't created any notes!</Text>
        <SimpleButton
          onPress={() => this.props.navigation.push('Note')}
          customText="Create Note"
          style={styles.simpleButton}
          textStyle={styles.simpleButtonText}
        />
      </View>
    );
  }
}

export default HomeScreen;
