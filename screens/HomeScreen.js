import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../styles/HomeScreenStyle';

export default function HomeScreen({navigation}) {
    const [ingredient, setIngredient] = React.useState("");
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Home Screen</Text>
        <TextInput
                style={styles.textInput}
                placeholder={`Add ingredient`}
                placeholderTextColor='#8F8F8F'
                onChangeText={(text) => setIngredient(text)}
            />
        <TouchableOpacity onPress={() => navigation.navigate('CangreburgerIngredients', {
            ingredient
        })} style={styles.boton}>
            <Text style={styles.textoBoton}>See cangreburger Ingredients</Text>
        </TouchableOpacity>
      </View>
    );
  }