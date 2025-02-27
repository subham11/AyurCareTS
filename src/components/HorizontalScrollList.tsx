import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../types";

type UserItem = {
  id: string;
  name: string;
  image: any;
  profileDetails: string;
  profilePrice: string;
  profileReviews: string;
  description: string;
};

// Local user data with full details
const userList: UserItem[] = [
  {
    id: "1",
    name: "Umiksha",
    image: require("../../assets/doctors/Doc_01.jpg"),
    profileDetails: "Vedic doctor | 3+ Years Experience",
    profilePrice: "₹ 24/min",
    profileReviews: "★★★★★ (7007 orders)",
    description:
      "Meet Umiksha, an experienced doctor passionate about assisting clients with spiritual guidance. Provides clarity, insight, and practical remedies.",
  },
  {
    id: "2",
    name: "Shreya",
    image: require("../../assets/doctors/Doc_02.jpg"),
    profileDetails: "Ayurvedic Doctor | 2 Years Experience",
    profilePrice: "₹ 30/min",
    profileReviews: "★★★★☆ (5234 orders)",
    description:
      "Shreya specializes in health reading and provides deep insights into your future with accurate predictions.",
  },
  {
    id: "3",
    name: "Joseph",
    image: require("../../assets/doctors/Doc_03.jpg"),
    profileDetails: "Ayurvedic Doctor | 5 Years Experience",
    profilePrice: "₹ 40/min",
    profileReviews: "★★★★★ (8900 orders)",
    description:
      "Joseph is an expert in ayurvedic reading and has helped thousands find direction in life.",
  },
  {
    id: "4",
    name: "Ananya",
    image: require("../../assets/doctors/Doc_04.jpg"),
    profileDetails: "Ayurvedic Doctor | 4 Years Experience",
    profilePrice: "₹ 35/min",
    profileReviews: "★★★★☆ (4120 orders)",
    description:
      "Ananya uses ayurvedic medicine to guide clients toward better life decisions and self-improvement.",
  },
  {
    id: "5",
    name: "Rahul",
    image: require("../../assets/doctors/Doc_05.jpg"),
    profileDetails: "Ayurvedic Doctor | 6 Years Experience",
    profilePrice: "₹ 50/min",
    profileReviews: "★★★★★ (7200 orders)",
    description:
      "Rahul provides aurvedic consultation to align your home and office for prosperity and success.",
  },
];

type UserProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'UserProfile'
>;

const HorizontalScrollList: React.FC = () => {
  const navigation = useNavigation<UserProfileScreenNavigationProp>();
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={userList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("UserProfile", { user: item })} // ✅ Navigates correctly
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  item: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
});

export default HorizontalScrollList;
