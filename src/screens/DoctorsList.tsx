import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

type RootStackParamList = {
  DoctorsList: { subcategory: string };
  UserProfile: { user: Doctor };
};

type NavigationProps = StackNavigationProp<RootStackParamList, "DoctorsList">;

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  hospital: string;
  distance: string;
  price: string;
  image: any;
}

const doctorsData: Doctor[] = [
  {
    id: "1",
    name: "Dr. Prathap Kumar K",
    specialization: "ENT",
    experience: "13 Years",
    hospital: "Sri Siddharth ENT Hospital, Tirupati",
    distance: "1182 Km",
    price: "₹500",
    image: require("../../assets/doctors/Doc_01.jpg"),
  },
  {
    id: "2",
    name: "Dr. Chanukya Samavedam",
    specialization: "ENT",
    experience: "10 Years",
    hospital: "RISE ENT Hospital, Rajahmundry",
    distance: "736 Km",
    price: "₹625",
    image: require("../../assets/doctors/Doc_02.jpg"),
  },
  {
    id: "3",
    name: "Dr. Mayur Nair",
    specialization: "ENT",
    experience: "11 Years",
    hospital: "Private Clinic",
    distance: "200 Km",
    price: "₹700",
    image: require("../../assets/doctors/Doc_03.jpg"),
  },
];

const DoctorsList: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, "DoctorsList">>();
  const { subcategory } = route.params;
  const navigation = useNavigation<NavigationProps>();

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Header with Back Button */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesomeIcon icon={faAngleLeft} color="white" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {subcategory ? `Doctors for ${subcategory}` : "Doctors"}
        </Text>
      </View>

      <View style={styles.container}>
        <FlatList
          data={doctorsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("UserProfile", { user: item })}
            >
              <Image source={item.image} style={styles.doctorImage} />
              <View style={styles.details}>
                <Text style={styles.doctorName}>{item.name}</Text>
                <Text style={styles.specialization}>{item.specialization}</Text>
                <Text style={styles.experience}>{item.experience} · {item.hospital}</Text>
                <Text style={styles.distance}>{item.distance}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <TouchableOpacity style={styles.consultButton}>
                  <Text style={styles.consultText}>Digital Consult</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#FF9933",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  backButton: {
    marginRight: 10,
    padding: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#F8F8F8",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 4,
  },
  doctorImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  specialization: {
    fontSize: 14,
    color: "#666",
  },
  experience: {
    fontSize: 12,
    color: "#888",
  },
  distance: {
    fontSize: 12,
    color: "#888",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  consultButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 8,
    borderRadius: 5,
    marginTop: 8,
    alignItems: "center",
  },
  consultText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default DoctorsList;
