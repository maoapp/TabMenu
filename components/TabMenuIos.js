import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';


const TabMenuIos = () => {
  return (
          <View style={styles.menuTab}>
            <View style={styles.tab}>
              <Ionicons name="md-key" size={32} color="#0c2b42" />
              <Icon name="wallet" size={32} color="gray" />
              <Ionicons name="ios-card" size={32} color="gray" />
              <Ionicons name="ios-keypad" size={32} color="gray" />
              <Icon name="list" size={32} color="gray" />
            </View>  
          </View>  
    );
}

const styles = StyleSheet.create({
  menuTab: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default TabMenuIos;