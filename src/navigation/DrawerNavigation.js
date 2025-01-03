import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from './TabNavigation';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeTabs" component={TabNavigation} options={{ title: 'Home' }} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
