import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { logout } from "../store/actions/authActions";

const LanguageModal: React.FC = () => {
  const { i18n } = useTranslation();
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // ✅ Corrected Logoff function
  const handleLogoff = () => {
    dispatch(logout()); // ✅ Set isLoggedIn = false
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }], // ✅ Corrected to "Login" (as per RootNavigator)
    });
  };

  // ✅ Function to get current language label
  const getCurrentLanguageLabel = () => {
    switch (i18n.language) {
      case "en":
        return "English";
      case "es":
        return "Español";
      case "hi":
        return "हिन्दी";
      default:
        return "Language";
    }
  };

  // ✅ Available languages
  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "hi", label: "हिन्दी" },
  ];

  return (
    <>
      {/* ✅ Updated Logoff Button (No modal opening) */}
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => setVisible(true)} style={styles.triggerButton}>
          <Text style={styles.triggerText}>{getCurrentLanguageLabel()}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogoff} style={styles.triggerButton}>
          <Text style={styles.triggerText}>LogOff</Text>
        </TouchableOpacity>
      </View>

      {/* ✅ The Language Selection Modal */}
      <Modal animationType="fade" transparent visible={visible} onRequestClose={() => setVisible(false)}>
        <Pressable style={styles.overlay} onPress={() => setVisible(false)} />

        <View style={styles.centeredWrapper}>
          <View style={styles.modalContent}>
            {languages.map((lang) => (
              <TouchableOpacity
                key={lang.code}
                style={styles.languageItem}
                onPress={() => {
                  i18n.changeLanguage(lang.code);
                  setVisible(false);
                }}
              >
                <Text style={styles.languageText}>{lang.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  triggerButton: {
    marginRight: 16,
    padding: 8,
  },
  triggerText: {
    fontSize: 16,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#00000055", // semi‐transparent for dimming
  },
  centeredWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  languageItem: {
    paddingVertical: 8,
  },
  languageText: {
    fontSize: 16,
  },
});

export default LanguageModal;
