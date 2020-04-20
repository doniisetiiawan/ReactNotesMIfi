import React, { Component } from 'react';
import { FlatList, Text, TouchableHighlight, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rowStyle: {
    borderBottomColor: '#9E7CE3',
    borderBottomWidth: 1,
    padding: 20,
  },
  rowText: {
    fontWeight: '600',
  },
});

class NoteList extends Component {
  _onPress() {
    this.props.navigation.navigate('Note');
  }

  render() {
    return (
      <FlatList
        data={this.props.notes}
        renderItem={({ item }) => (
          <TouchableHighlight
            onPress={() => this.props.onSelectNote(item)}
            style={styles.rowStyle}
            underlayColor="#9E7CE3"
          >
            <Text style={styles.rowText}>{item.title}</Text>
          </TouchableHighlight>
        )}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

export default NoteList;
