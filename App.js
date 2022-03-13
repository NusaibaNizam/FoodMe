import React from 'react';
import AppNavigator from './App/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './App/Redux/store';



export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </Provider>
  );
}
