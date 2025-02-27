// src/components/LanguageDropdown.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTranslation } from 'react-i18next';

const LanguageDropdown: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={currentLanguage}
        style={styles.picker}
        onValueChange={(itemValue) => {
          i18n.changeLanguage(itemValue);
        }}
        mode="dropdown"
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Español" value="es" />
        <Picker.Item label="हिन्दी" value="hi" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    width: 120,
  },
  picker: {
    height: 40,
    width: '100%',
  },
});

export default LanguageDropdown;
