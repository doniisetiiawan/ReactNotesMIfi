import React from 'react';
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
});

function NoteScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        autoFocus
        placeholder="Untitled"
        style={styles.title}
      />
      <TextInput
        multiline
        placeholder="Start typing"
        style={styles.body}
      />
    </View>
  );
}

export default NoteScreen;
