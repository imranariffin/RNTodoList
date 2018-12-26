import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

class FloatingButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.onPress}
      >
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
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 50
  }
})

export default FloatingButton
