import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  BookConsulting: { doctor: Doctor };
};

type NavigationProp = StackNavigationProp<RootStackParamList, "BookConsulting">;

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  hospital: string;
}

const timeSlots = [
  "10:15 AM", "10:30 AM", "10:45 AM", "11:00 AM",
  "11:15 AM", "11:30 AM", "11:45 AM", "12:00 PM",
];

const BookConsulting: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();
  const { doctor } = route.params as { doctor: Doctor };
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // if (!doctor) {
  //   return (
  //     <SafeAreaView style={styles.safeArea}>
  //       <Text style={styles.errorText}>Doctor data not found.</Text>
  //     </SafeAreaView>
  //   );
  // }

  const handleSlotSelection = (slot: string) => {
    setSelectedSlot(slot);
    Alert.alert(
      "Appointment Confirmed",
      `Your appointment with ${doctor.name} at ${slot} has been booked.`,
      [{ text: "OK", onPress: () => navigation.goBack() }]
    );
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Book Consulting</Text>
      </View>

      {/* Doctor Details */}
      <View style={styles.doctorInfo}>
        <Text style={styles.doctorName}>{doctor.name}</Text>
        <Text style={styles.specialization}>{doctor.specialization}</Text>
        <Text style={styles.hospital}>{doctor.hospital}</Text>
      </View>

      {/* Time Slots */}
      <Text style={styles.sectionTitle}>Available Time Slots</Text>
      <FlatList
        data={timeSlots}
        keyExtractor={(item) => item}
        numColumns={3}
        contentContainerStyle={styles.slotList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.slotButton,
              selectedSlot === item && styles.selectedSlot,
            ]}
            onPress={() => handleSlotSelection(item)}
          >
            <Text style={styles.slotText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  errorText: { fontSize: 18, fontWeight: "bold", textAlign: "center", marginTop: 20, color: "red" },
  safeContainer: { flex: 1, backgroundColor: "#FFF" },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#007AFF",
  },
  backButton: { padding: 5 },
  backButtonText: { fontSize: 18, color: "#FFF" },
  headerText: { fontSize: 18, fontWeight: "bold", color: "#FFF", marginLeft: 10 },
  doctorInfo: { padding: 20 },
  doctorName: { fontSize: 20, fontWeight: "bold" },
  specialization: { fontSize: 16, color: "#666" },
  hospital: { fontSize: 14, color: "#666" },
  sectionTitle: { fontSize: 16, fontWeight: "bold", padding: 10 },
  slotList: { alignItems: "center", padding: 10 },
  slotButton: {
    backgroundColor: "#E0E0E0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 8,
    alignItems: "center",
  },
  selectedSlot: { backgroundColor: "#007AFF" },
  slotText: { fontSize: 14, fontWeight: "bold", color: "#000" },
});

export default BookConsulting;