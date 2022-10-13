import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerExample from './navigator/DrawerExample';
import StackExample from './navigator/StackExample';

export default function App() {
  return (
    <DrawerExample/>
      // <StackExample/>
  );
}

