import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/HomeScreenStyle';

export default function CangreburgerIngredientsScreenDrawer({navigation}) { 
  return (
      <View style={styles.container}>
        <Text style={styles.texto}>Welcome to Krusty Krab Drawer!!</Text>
      </View>
    );
  }