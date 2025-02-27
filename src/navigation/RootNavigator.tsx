// src/navigation/RootNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import AppDrawer from './AppDrawer';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import UserProfile from '../screens/UserProfile';
import DoctorsList from '../screens/DoctorsList';
import BookConsulting from '../screens/BookConsulting';
import ProductList from '../screens/ProductList'; // ✅ Import Product List

const Stack = createStackNavigator();

const RootNavigator = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="App" component={AppDrawer} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
      <Stack.Screen name="UserProfile" component={UserProfile} options={{ title: "User Profile" }} />
      <Stack.Screen name="DoctorsList" component={DoctorsList} options={{ title: "Doctors List" }} />
      <Stack.Screen name="BookConsulting" component={BookConsulting} options={{ title: "Book Consultation" }} />
      <Stack.Screen name="ProductList" component={ProductList} options={{ title: "Product List" }} /> 
    </Stack.Navigator>
  );
};

export default RootNavigator;
