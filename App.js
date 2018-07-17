import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { Constants } from 'expo';
import TabMenuIos from './components/TabMenuIos';
import TabMenuAndroid from './components/TabMenuAndroid';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' ?  <TabMenuIos/> : <TabMenuAndroid/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
  }
});
