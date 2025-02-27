// App.tsx
import { enableScreens } from 'react-native-screens';
enableScreens(); // Enable optimized screen management

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import store from './src/store';
import RootNavigator from './src/navigation/RootNavigator';
import './src/i18n'; // Initialize i18n

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
