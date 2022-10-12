import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../styles/HomeScreenStyle';

export default function HomeScreenDrawer({navigation}) {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Home Screen Drawer</Text>
      </View>
    );
  }