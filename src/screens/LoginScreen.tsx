import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  Image,
  Dimensions,
} from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/authActions";
import { useTranslation } from "react-i18next";

const { width } = Dimensions.get("window");

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { t } = useTranslation();

  // ✅ Animation for flipping effect on button only
  const rotateAnim = useState(new Animated.Value(0))[0];

  const handleLogin = (): void => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 600,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      rotateAnim.setValue(0);
      dispatch<any>(login(username, password));
    });
  };

  const rotateY = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"], // ✅ Full Flip Rotation
  });

  return (
    <View style={styles.container}>
      {/* ✅ Image */}
      <Image
        source={require("../../assets/Gemini_Generated_Image_kypwpzkypwpzkypw.jpeg")}
        style={styles.topImage}
        resizeMode="contain"
      />

      {/* ✅ Login Card Overlapping the Image */}
      <View style={styles.card}>
        <Text style={styles.title}>{t("login")}</Text>

        <TextInput
          style={styles.input}
          placeholder={t("username")}
          placeholderTextColor="#fff"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder={t("password")}
          placeholderTextColor="#fff"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />

        {/* ✅ Animated Login Button */}
        <Animated.View style={{ transform: [{ rotateY }] }}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginText}>{t("login")}</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF9933", // ✅ Background color
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  topImage: {
    width: width, // ✅ Responsive width
    height: width * 0.9, // ✅ Responsive height
    marginBottom: -2, // ✅ Moves image upwards slightly
    borderRadius: 12,
  },
  card: {
    width: "100%",
    padding: 20,
    backgroundColor: "rgba(42, 63, 47, 0.9)", // ✅ 50% Transparency applied
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    alignItems: "center",
    position: "relative",
    top: -40, // ✅ Moves card upwards to overlap image
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF9933", // ✅ Highlighted title
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)", // ✅ More transparent input fields
    padding: 14,
    borderRadius: 8,
    marginBottom: 15,
    color: "#fff",
  },
  loginButton: {
    width: "100%",
    padding: 15,
    backgroundColor: "#FF8C19", // ✅ Maintained orange for contrast
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  loginText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default LoginScreen;
