import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Animated,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
} from "react-native";

const { width } = Dimensions.get("window");

// Define TypeScript type for image items
interface ImageItem {
  id: string;
  uri: any; // Changed type to support local images
  name: string;
}

// Importing images from the assets folder
const images: ImageItem[] = [
  { id: "1", uri: require("../../assets/doctors/Doc_01.jpg"), name: "Product 1" },
  { id: "2", uri: require("../../assets/doctors/Doc_02.jpg"), name: "Product 2" },
  { id: "3", uri: require("../../assets/doctors/Doc_03.jpg"), name: "Product 3" },
  { id: "4", uri: require("../../assets/doctors/Doc_04.jpg"), name: "Product 4" },
  { id: "5", uri: require("../../assets/doctors/Doc_05.jpg"), name: "Product 5" },
  { id: "6", uri: require("../../assets/doctors/Doc_06.jpg"), name: "Product 6" },
  { id: "7", uri: require("../../assets/doctors/Doc_07.jpg"), name: "Product 7" },
];

const ParallaxCarousel: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<ImageItem>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Handle manual navigation (left/right buttons)
  const goToIndex = (index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
      flatListRef.current?.scrollToIndex({ index, animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(newIndex);
        }}
        renderItem={({ item, index }) => {
          const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width * 0.3, 0, width * 0.3],
          });

          return (
            <View style={styles.imageContainer}>
              <Animated.Image
                source={item.uri} // ✅ Using local images
                style={[styles.image, { transform: [{ translateX }] }]}
                resizeMode="cover"
              />
              {/* Product Name Overlay - Centered */}
              <View style={styles.textOverlay}>
                <Text style={styles.productText}>{item.name}</Text>
              </View>
            </View>
          );
        }}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
      />

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {images.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              currentIndex === i ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>

      {/* Left Button */}
      <TouchableOpacity
        style={[styles.navButton, styles.leftButton]}
        onPress={() => goToIndex(currentIndex - 1)}
      >
        <Text style={styles.buttonText}>{"<"}</Text>
      </TouchableOpacity>

      {/* Right Button */}
      <TouchableOpacity
        style={[styles.navButton, styles.rightButton]}
        onPress={() => goToIndex(currentIndex + 1)}
      >
        <Text style={styles.buttonText}>{">"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  image: {
    width: width * 0.9,
    height: 230,
    borderRadius: 20,
  },
  textOverlay: {
    position: "absolute",
    width: "80%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 20,
  },
  productText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  pagination: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    alignSelf: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#FF9933",
  },
  inactiveDot: {
    backgroundColor: "gray",
  },
  navButton: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -15 }],
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 20,
  },
  leftButton: {
    left: 10,
  },
  rightButton: {
    right: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ParallaxCarousel;