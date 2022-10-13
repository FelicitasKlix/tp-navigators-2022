import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/HomeScreenStyle';

export default function CangreburgerIngredients({navigation, route}) {
  let ingredient = route.params.ingredient  
  console.log(route)
  return (
      <View style={styles.container}>
        <Text style={styles.texto}>Welcome to Krusty Krab!!</Text>
        <Text>{ingredient}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.boton}>
            <Text style={styles.textoBoton}>Go Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
