import React from 'react';
import {Animated, Platform, StyleSheet, View, ViewStyle} from 'react-native';
import BottomTabNavigator from './Components/BottomTabNavigator';
// import { SafeAreaProvider } from 'react-native-safe-area-context'

export default class App extends React.Component{
    render(){
      return(
          <BottomTabNavigator/> 
      )
    }
}

