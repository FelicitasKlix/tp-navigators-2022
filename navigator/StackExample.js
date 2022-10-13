import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CangreburgerIngredients from '../screens/CangreburgerIngredientsScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="CangreburgerIngredients" component={CangreburgerIngredients}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

