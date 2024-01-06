/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import Navigations from './src/navigations';
import { sharedStyles } from './src/theme/Styles';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={sharedStyles.flex}>
      <Navigations />
    </SafeAreaView>
  );
}

export default App;
