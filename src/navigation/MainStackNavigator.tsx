// src/navigation/MainStackNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import LanguageDropdown from '../components/LanguageDropdown';
import UserProfile from '../screens/UserProfile';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => <LanguageDropdown />,
      }}
    >
      <Stack.Screen
        name="MainTabs"
        component={BottomTabNavigator}
        options={{ headerShown: true, title: 'Dashboard' }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile} // ✅ Add UserProfile here
        options={{ title: "User Profile" }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
