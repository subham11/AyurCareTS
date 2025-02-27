import React, { useState } from "react";
import { 
  View, Text, FlatList, Image, TouchableOpacity, StyleSheet, 
  Modal, SafeAreaView 
} from "react-native";
import { diseaseCategories, Category } from "../data/diseaseCategories";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  DoctorsList: { subcategory: string };
};

type NavigationProps = StackNavigationProp<RootStackParamList, "DoctorsList">;
interface DiseaseCategoryListProps {
  navigation: NavigationProps; 
}

const DiseaseCategoryList: React.FC<DiseaseCategoryListProps> = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (category: any) => {
    setSelectedCategory(category);
    setModalVisible(true);
  };

  const navigateToDoctorsList = (subcategory: string) => {
    setModalVisible(false);
    navigation.navigate("DoctorsList", { subcategory });
  };

  const renderSubcategoryItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.subcategoryItem} onPress={() => navigateToDoctorsList(item.name)}>
      <View style={styles.subcategoryCard}>
        <Image source={item.icon} style={styles.subcategoryIcon} />
      </View>
      <Text style={styles.subcategoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={diseaseCategories}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItem} onPress={() => openModal(item)}>
            <View style={styles.iconContainer}>
              <Image source={item.icon} style={styles.icon} />
            </View>
            <Text style={styles.categoryText} numberOfLines={2}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Modal for Subcategories */}
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <SafeAreaView style={styles.modalSafeArea}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedCategory?.name}</Text>

              {/* ✅ Display Items in Two Columns */}
              <FlatList
                data={selectedCategory?.subcategories || []}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2} // ✅ Breaks into two columns
                contentContainerStyle={styles.subcategoryContainer}
                columnWrapperStyle={styles.row}
                renderItem={renderSubcategoryItem}
                showsVerticalScrollIndicator={false}
              />

              <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  listContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
  categoryItem: {
    width: "30%",
    alignItems: "center",
    marginBottom: 15,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#E5E5E5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  categoryText: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginTop: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalSafeArea: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "85%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    maxHeight: "80%", // ✅ Prevents Modal from Crossing Safe Area
  },
  subcategoryContainer: {
    paddingBottom: 20,
  },
  subcategoryItem: {
    width: "45%", // ✅ Makes each item take half the width
    alignItems: "center",
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  subcategoryCard: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#E5E5E5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  subcategoryIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginBottom: 5,
  },
  subcategoryText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: "#FF9933",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DiseaseCategoryList;
