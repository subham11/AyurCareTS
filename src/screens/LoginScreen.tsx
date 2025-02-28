import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
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

  const handleLogin = (): void => {
    dispatch<any>(login(username, password));
  };

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

        {/* ✅ Normal Login Button (No Animation) */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>{t("login")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF9933",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  topImage: {
    width: width,
    height: width * 0.9,
    marginBottom: -2,
    borderRadius: 12,
  },
  card: {
    width: "100%",
    padding: 20,
    backgroundColor: "rgba(42, 63, 47, 0.9)",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    alignItems: "center",
    position: "relative",
    top: -40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF9933",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    padding: 14,
    borderRadius: 8,
    marginBottom: 15,
    color: "#fff",
  },
  loginButton: {
    width: "100%",
    padding: 15,
    backgroundColor: "#FF8C19",
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
