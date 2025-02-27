// src/navigation/AppDrawer.tsx
import React from 'react';
import CustomDrawer from './CustomDrawer';
import BottomTabNavigator from './BottomTabNavigator'; 
import { createDrawerNavigator, DrawerContentComponentProps, DrawerNavigationOptions } from '@react-navigation/drawer';
// or any other main screen(s) you want in the drawer

const Drawer = createDrawerNavigator();

interface DrawerProps extends DrawerContentComponentProps {}

const AppDrawer: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props: DrawerProps) => <CustomDrawer {...props} />}
      screenOptions={{
        // You can set drawer position, style, etc.
        drawerPosition: 'left', // If you want it to slide in from the left
        headerShown: false, // We'll handle the header inside the tabs or stack
      } as DrawerNavigationOptions}
    >
      <Drawer.Screen name="Main" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
