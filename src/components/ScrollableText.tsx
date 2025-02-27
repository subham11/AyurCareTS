// src/components/ScrollableText.tsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import { View, Text, Animated, Dimensions, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import "../i18n"; // Import i18n setup

const ScrollableText: React.FC = () => {
  const { t } = useTranslation(); // Use i18n translations
  const screenWidth = Dimensions.get("window").width;
  const animatedValue = useRef(new Animated.Value(screenWidth)).current;
  const [currentMessageIndex, setCurrentMessageIndex] = useState<number>(0);

  const messages: string[] = t("scroll_messages", { returnObjects: true }) as unknown as string[];

  const startScrolling = useCallback(() => {
    animatedValue.setValue(screenWidth);
    Animated.timing(animatedValue, {
      toValue: -screenWidth * 2,
      duration: 15000,
      useNativeDriver: true,
    }).start(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    });
  }, [animatedValue, messages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      startScrolling();
    }, 16000); // Ensures next message starts after animation ends

    return () => clearInterval(interval); // Cleanup interval
  }, [startScrolling]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ translateX: animatedValue }] }}>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode="clip">
          {messages[currentMessageIndex]}
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF8000",
    paddingVertical: 2,
    overflow: "hidden",
    width: "100%",
    height: 30,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ScrollableText;
