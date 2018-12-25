import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default () => (
  <View style={styles.container}>
    <View style={styles.all}><Text>ALL</Text></View>
    <View style={styles.active}><Text>ACTIVE</Text></View>
    <View style={styles.completed}><Text>COMPLETED</Text></View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  all: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  active: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  completed: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  }
})
