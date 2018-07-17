import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const TabMenuAndroid = () => {
  return (
       <View style={{flex: 1}}>
          <Ionicons style={styles.burguer} name="ios-menu" size={32} color="#0c2b42" />
          <View style={styles.menuTab}>
            <View style={styles.tab1}>
              <Ionicons name="md-key" size={32} color="#0c2b42" />
              <Icon name="wallet" size={32} color="gray" />
              <Ionicons name="ios-card" size={32} color="gray" />
              <Ionicons name="ios-keypad" size={32} color="gray" />
            </View>  
            <View style={styles.tab2}>
              <Ionicons name="md-home" size={20} color="#0c2b42" />
              <Ionicons name="md-square-outline" size={20} color="gray" />
              <Ionicons name="ios-arrow-back" size={20} color="gray" />
            </View>
          </View>  
        </View>    
    );
}

const styles = StyleSheet.create({
  menuTab: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  tab1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20
  },
  tab2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#A9A9A9',
    padding: 10
  },
  burguer: {
    padding: 10
  }
});

export default TabMenuAndroid;