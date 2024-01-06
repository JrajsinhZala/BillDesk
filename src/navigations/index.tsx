// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './type';
import CreateInvoice from '../CreateInvoice';
import ViewInvoice from '../ViewInvoice';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="createInvoice" component={CreateInvoice} />
        <Stack.Screen name="viewInvoice" component={ViewInvoice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
