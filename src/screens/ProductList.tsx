import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const categories = [
  { id: '1', name: 'Hair', image: require('../../assets/hair.png'), subcategories: ['Hair Fall', 'Dandruff', 'Hair Regrowth'] },
  { id: '2', name: 'Beard', image: require('../../assets/beard.png'), subcategories: ['Beard Growth', 'Beard Oil'] },
  { id: '3', name: 'Nutrition', image: require('../../assets/nutrition.png'), subcategories: ['Protein', 'Vitamins'] },
  { id: '4', name: 'Skin', image: require('../../assets/icons/skin.png'), subcategories: ['Acne', 'Moisturizers'] }
];

const products = {
  'Hair Fall': [{ id: '101', name: 'Stage 2 Hair Regrowth Kit', price: 899, image: require('../../assets/hair_product.png') }],
  'Dandruff': [{ id: '102', name: 'Dandruff Control Shampoo', price: 499, image: require('../../assets/shampoo.png') }],
  'Beard Growth': [{ id: '103', name: 'Beard Growth Oil', price: 699, image: require('../../assets/beard_oil.png') }]
};

const ProductList = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedSubcategory, setSelectedSubcategory] = useState(selectedCategory.subcategories[0]);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={22} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Product List</Text>
      </View>

      <View style={styles.container}>
        {/* Categories List */}
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.categoryItem, item.id === selectedCategory.id && styles.selectedCategory]}
              onPress={() => {
                setSelectedCategory(item);
                setSelectedSubcategory(item.subcategories[0]);
              }}
            >
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          style={styles.categoryList}
        />

        {/* Products List */}
        <FlatList
          data={products[selectedSubcategory] || []}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>₹{item.price}</Text>
              <TouchableOpacity style={styles.addToCartButton}>
                <Text style={styles.addToCartText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          )}
          style={styles.productList}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F5F5F5' },

  // Header Styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF9933',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },

  // Layout
  container: { flex: 1, flexDirection: 'row' },

  // Categories List
  categoryList: { width: '25%', backgroundColor: '#F5F5F5' },
  categoryItem: { padding: 10, alignItems: 'center' },
  selectedCategory: { backgroundColor: '#FF8C19' },
  categoryImage: { width: 50, height: 50, marginBottom: 5 },
  categoryText: { fontSize: 12, fontWeight: 'bold' },

  // Product List
  productList: { width: '75%', padding: 10 },
  productCard: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: { width: 100, height: 100 },
  productName: { fontSize: 14, fontWeight: 'bold', marginVertical: 5 },
  productPrice: { fontSize: 12, color: 'green' },

  // Add to Cart Button
  addToCartButton: { backgroundColor: '#FF9933', padding: 5, borderRadius: 5, marginTop: 5 },
  addToCartText: { color: 'white', fontWeight: 'bold' }
});

export default ProductList;
