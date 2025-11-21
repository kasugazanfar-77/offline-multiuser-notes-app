import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './src/context/AuthContext';
import { NotesProvider } from './src/context/NotesContext';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import NotesListScreen from './src/screens/NotesListScreen';
import NoteEditorScreen from './src/screens/NoteEditorScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NotesProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Notes" component={NotesListScreen} />
            <Stack.Screen name="Editor" component={NoteEditorScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NotesProvider>
    </AuthProvider>
  );
}
