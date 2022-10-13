import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/HomeScreenStyle';

export default function CangreburgerIngredientsScreenDrawer({navigation}) { 
  const [counter, setCounter] = React.useState(0)
  React.useEffect(() => {
    const unsuscribe = navigation.addListener('focus', () => {
      setCounter(counter => counter + 1)
    });
    return unsuscribe;
  }, [navigation]);
  return (
      <View style={styles.container}>
        <Text style={styles.texto}>Welcome to Krusty Krab Drawer!!</Text>
        <Text>{counter}</Text>
      </View>
    );
  }