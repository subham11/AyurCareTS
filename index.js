/**
 * @format
 */

import 'react-native-reanimated'; // ✅ Required for Reanimated to work properly
import 'react-native-gesture-handler'; // ✅ Needed for gesture navigation
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
