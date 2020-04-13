/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SimpleButton from './components/SimpleButton';
import NoteScreen from './components/NoteScreen';
import HomeScreenx from './components/HomeScreen';

function HomeScreen({ navigation }) {
  navigation.setOptions({
    headerTitle: () => <Text>React Notes</Text>,
    headerRight: () => (
      <SimpleButton
        onPress={() => navigation.push('Note')}
        customText="Create Note"
      />
    ),
  });

  return (
    <HomeScreenx />
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Note"
          component={NoteScreen}
          options={{
            headerTitle: () => <Text>Create Note</Text>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
