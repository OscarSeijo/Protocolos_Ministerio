import React, { Component } from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Icon } from 'react-native-elements';
import { propTypes } from 'prop-types';

 

// Importamos las vistas:
//import HomeScreen from '../pages/HomeScreen';
//import ShowDataScreen from '../pages/ShowDataScreen';

import SearchScreen from '../pages/SearchScreen';
import CategoriaScreen from '../pages/CategoriasScreen';
import LibreriaScreen from '../pages/LibreriaScreen';


const {navigate} = this.props.navigation;

// //////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////

// Aquí exportamos el navegador principal con sus vistas asignadas:

const MainNavigator = createStackNavigator({
  // Asignamos las vistas correspondientes:
  Home: {screen: HomeScreen},
  Libreria: {screen:LibreriaScreen}
  //data: ShowDataScreen,
}, {headerLayoutPreset: 'center'});


const AppStackNavigator = createAppContainer(MainNavigator);

export default AppStackNavigator;