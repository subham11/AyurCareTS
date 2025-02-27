// src/components/LanguageMenu.tsx

import React from 'react';
import { Menu, Button } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

const LanguageMenu: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const { i18n } = useTranslation();

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  // Utility to show the button label based on the current language code
  const getLanguageLabel = (): string => {
    switch (i18n.language) {
      case 'en':
        return 'English';
      case 'es':
        return 'Español';
      case 'hi':
        return 'हिन्दी';
      default:
        return 'Language';
    }
  };

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <Button onPress={openMenu}>{getLanguageLabel()}</Button>
      }
    >
      <Menu.Item 
        onPress={() => {
          i18n.changeLanguage('en');
          closeMenu();
        }} 
        title="English" 
      />
      <Menu.Item 
        onPress={() => {
          i18n.changeLanguage('es');
          closeMenu();
        }} 
        title="Español" 
      />
      <Menu.Item 
        onPress={() => {
          i18n.changeLanguage('hi');
          closeMenu();
        }} 
        title="हिन्दी" 
      />
    </Menu>
  );
};

export default LanguageMenu;