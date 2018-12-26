import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import Colors from '../../constants/Colors'

export default class NavTab extends Component {
  render() {
    StatusBar.setBackgroundColor(Colors.primary)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          RN Todo List
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 15,
  },
  text: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: 'bold',
  }
})
