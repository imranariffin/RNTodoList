import React from 'react'
import { View, StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

export default () => (
  <View style={styles.root}></View>
)

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 40,
    backgroundColor: COLORS.BLUE
  }
})
