/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SimpleButton from './components/SimpleButton';
import NoteScreen from './components/NoteScreen';
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

function HomeScreen({ navigation }) {
  navigation.setOptions({
    headerTitle: () => (
      <Text style={styles.navBarTitleText}>
        React Notes
      </Text>
    ),
    headerRight: () => (
      <SimpleButton
        onPress={() => navigation.push('Note')}
        customText="Create Note"
        style={styles.navBarRightButton}
        textStyle={styles.navBarButtonText}
      />
    ),
  });

  return (
    <HomeScreenx navigation={navigation} />
  );
}

const Stack = createStackNavigator();

function App() {
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
          component={HomeScreen}
        />
        <Stack.Screen
          name="Note"
          component={NoteScreen}
          options={{
            headerTitle: () => (
              <Text style={styles.navBarTitleText}>
                Create Note
              </Text>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
