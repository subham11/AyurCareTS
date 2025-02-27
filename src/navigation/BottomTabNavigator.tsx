// src/navigation/BottomTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProductList from '../screens/ProductList'; // ✅ Import ProductList screen
import { useTranslation } from 'react-i18next';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import LanguageModal from '../components/LanguageModal';
import DoctorsList from '../screens/DoctorsList';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear } from "@fortawesome/free-solid-svg-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SettingsIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      style={{ marginRight: 16, padding: 8 }}
    >
      <FontAwesomeIcon icon={faGear} color="white" />
    </TouchableOpacity>
  );
};

// ✅ Create a stack navigator for Product List
const ProductStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProductListMain" component={ProductList} />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#FF9933' },
        headerRight: () => <LanguageModal />,
        headerLeft: () => <SettingsIcon />,
        tabBarStyle: { backgroundColor: '#FF9933' },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="ProductList" component={ProductStack} options={{ title: "Products" }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{ title: t('search') }} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ title: t('notifications') }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: t('settings') }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
