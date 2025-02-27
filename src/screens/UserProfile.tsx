// src/screens/UserProfile.tsx
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
// import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";

type UserProfileNavigationProp = {
  navigate: (screen: string) => void;
  canGoBack: () => boolean;
  goBack: () => void;
};

const UserProfile: React.FC = () => {
  const navigation = useNavigation<UserProfileNavigationProp>();
  const route = useRoute();
  // const navigation = useNavigation();
  const { user } = route.params as {
    user: {
      id: string;
      name: string;
      image: any;
      profileDetails: string;
      profilePrice: string;
      profileReviews: string;
      description: string;
    };
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack(); // ✅ Ensures it only navigates back if possible
            } else {
              navigation.navigate("Home"); // ✅ Fallback in case of incorrect stack
            }
          }}>
            <Text style={styles.backButton}>{"<"}</Text>
          </TouchableOpacity>
          <Text style={styles.profileTitle}>Profile</Text>
          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.shareText}>Share</Text>
          </TouchableOpacity>
        </View>

        {/* User Info */}
        <View style={styles.profileCard}>
          <Image source={user.image} style={styles.profileImage} />
          <View>
            <Text style={styles.profileName}>{user.name}</Text>
            <Text style={styles.profileDetails}>{user.profileDetails}</Text>
            <Text style={styles.profilePrice}>{user.profilePrice}</Text>
            <Text style={styles.profileReviews}>{user.profileReviews}</Text>
          </View>
        </View>
        {/* ✅ Book Consulting Button */}
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => navigation.navigate("BookConsulting", { doctor: user})}
        >
          <Text style={styles.bookButtonText}>Book Consulting</Text>
        </TouchableOpacity>
        {/* User Description */}
        <Text style={styles.description}>{user.description}</Text>

        {/* Reviews Section */}
        <Text style={styles.reviewTitle}>User Reviews</Text>
        <View style={styles.reviewCard}>
          <Text style={styles.reviewName}>Shreya</Text>
          <Text>★★★★★</Text>
          <Text>Great insights, thank you!</Text>
        </View>

        <View style={styles.reviewCard}>
          <Text style={styles.reviewName}>Joseph</Text>
          <Text>★★★★★</Text>
          <Text>Very helpful guidance.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff", // Ensures safe area background color matches
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  backButton: {
    fontSize: 18,
    color: "black",
  },
  profileTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  shareButton: {
    backgroundColor: "#25D366",
    padding: 8,
    borderRadius: 5,
  },
  shareText: {
    color: "white",
    fontSize: 14,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileDetails: {
    fontSize: 14,
    color: "gray",
  },
  profilePrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ff9933",
  },
  profileReviews: {
    fontSize: 14,
    color: "black",
  },
  description: {
    fontSize: 14,
    marginTop: 10,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  reviewCard: {
    backgroundColor: "#f8f8f8",
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  reviewName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bookButton: {
    backgroundColor: "#ff9933",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UserProfile;
