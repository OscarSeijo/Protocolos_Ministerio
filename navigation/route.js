import React, {Component} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {createAppContainer, TabNavigator, TabBarBottom } from 'react-navigation';
import { createStackNavigator, createSwitchNavigator, Navigation } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


//import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


// Importamos las vistas:
//import HomeScreen from '../pages/HomeScreen';
import LibreriaScreen from '../pages/LibreriaScreen';
//import ShowDataScreen from '../pages/ShowDataScreen';
 

const MainNavigator = createStackNavigator({

  Home: {screen: LibreriaScreen},

}, {headerLayoutPreset: 'center'});

const AppStackNavigator = createAppContainer(MainNavigator);


export default AppStackNavigator;