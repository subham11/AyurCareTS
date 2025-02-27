// src/navigation/CustomDrawer.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomDrawer: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
        {/* Header / Profile Section */}
        <View style={styles.profileSection}>
          {/* Replace with user profile image if you have it */}
          <Image
            source={{ uri: 'https://via.placeholder.com/80' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.subText}>View and edit profile</Text>
          <Text style={styles.completionText}>9% completed</Text>
        </View>

        {/* Drawer Items */}
        <TouchableOpacity style={styles.menuItem} onPress={() => { /* e.g. navigate to a screen */ }}>
          <Text style={styles.menuText}>Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
          <Text style={styles.menuText}>Test Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
          <Text style={styles.menuText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
          <Text style={styles.menuText}>Consultations</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
          <Text style={styles.menuText}>My Doctors</Text>
        </TouchableOpacity>

        {/* ...Add other menu items as needed... */}
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subText: {
    color: 'blue',
    marginTop: 4,
  },
  completionText: {
    marginTop: 4,
    color: '#666',
  },
  menuItem: {
    padding: 16,
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 14,
  },
});

export default CustomDrawer;
