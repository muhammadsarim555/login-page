import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Constants } from 'expo';


import Login from './src/login';

export default class App extends Component {
  render() {
    return (
      <View >
        <Login />
      </View>
    );
  }
}

