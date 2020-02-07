/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import Login from './app/login'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Dashboard from './app/dashboard'
import AuthLoading from './app/authLoading'
import AppContainer from './routes'

const App = () => {

 return (
  //  <Login/>
  <AppContainer/>
 );

  

};


export default App;
