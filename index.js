/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Index from './src/screen/index';
AppRegistry.registerComponent(appName, () => Index);
