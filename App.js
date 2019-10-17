import React, {Component} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import AppStackNavigator from './navigation/navigation';

import PropTypes from 'prop-types';

// You can import from local files
import HomeScreen from './pages/CategoriasScreen';

// or any pure javascript modules available in npm

export default class App extends React.Component{
   render(){
      return(

      		//<HomeScreen />
      		<AppStackNavigator />


         );
   }
}




