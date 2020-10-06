/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Login from './src/Login'
import Register from './src/Register'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DashBoard from './src/DashBoard';

class App extends Component{
  render() {
    return (
      <View style={styles.container}>
       <Login navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})

const screen=createStackNavigator({
  app:App,
  register:Register,
  dash:DashBoard,
  
})

export default createAppContainer(screen)

