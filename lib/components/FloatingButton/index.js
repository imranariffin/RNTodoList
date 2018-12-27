import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

class FloatingButton extends Component {
  render() {
    const {onPress} = this.props
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}>
        <Text
          style={styles.text}>
          +
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    position: 'absolute',
    right: 20,
    bottom: 50,
    width: 60,
    height: 60,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 50
  }
})

export default FloatingButton
