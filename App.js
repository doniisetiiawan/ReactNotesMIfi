/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import _ from 'underscore';

import SimpleButton from './components/SimpleButton';
import NoteScreenx from './components/NoteScreen';
import HomeScreenx from './components/HomeScreen';

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#5B29C1',
    borderBottomColor: '#48209A',
    borderBottomWidth: 1,
  },
  navBarTitleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 16,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: '#ffffff',
    fontSize: 16,
    marginVertical: 16,
  },
});

const Stack = createStackNavigator();

class App extends Component {
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

  updateNote(note) {
    const newNotes = { ...this.state.notes };
    newNotes[note.id] = note;
    console.log(newNotes);
    this.setState({ notes: newNotes });
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: styles.navBar,
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreenx}
            options={{
              headerTitle: () => (
                <Text style={styles.navBarTitleText}>
                  React Notes
                </Text>
              ),
            }}
          />
          <Stack.Screen
            name="Note"
            component={NoteScreenx}
            options={{
              headerTitle: () => (
                <Text style={styles.navBarTitleText}>
                  Create Note
                </Text>
              )
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
