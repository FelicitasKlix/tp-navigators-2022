import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreenDrawer from '../screens/HomeScreenDrawer';
import CangreburgerIngredientsScreenDrawer from '../screens/CangreburgerIngredientsScreenDrawer'

const Drawer = createDrawerNavigator();

export default function DrawerExample() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName ='HomeScreen'>
        <Drawer.Screen name = "HomeScreen" component={HomeScreenDrawer}/>
        <Drawer.Screen name = "CangreburgerIngredientsScreen" component={CangreburgerIngredientsScreenDrawer}/>
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

