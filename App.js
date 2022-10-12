import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import CangreburgerIngredients from './screens/CangreburgerIngredientsScreen';
import HomeScreenDrawer from './screens/HomeScreenDrawer';
import CangreburgerIngredientsScreenDrawer from './screens/CangreburgerIngredientsScreenDrawer'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName ='HomeScreen'>
        <Drawer.Screen name = "HomeScreen" component={HomeScreenDrawer}/>
        <Drawer.Screen name = "CangreburgerIngredientsScreen" component={CangreburgerIngredientsScreenDrawer}/>
      </Drawer.Navigator>
    </NavigationContainer>
    /*
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="CangreburgerIngredients" component={CangreburgerIngredients}/>
      </Stack.Navigator>
    </NavigationContainer>*/

  );
}

