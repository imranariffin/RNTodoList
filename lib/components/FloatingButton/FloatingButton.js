import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import Colors from '@constants/Colors'

class FloatingButton extends Component {
  render() {
    const {handlePress, addingNewItem} = this.props
    const buttonIcon = !addingNewItem
      ? require('./add.png')
      : require('./multiply.png')
    const buttonColor = !addingNewItem
      ? Colors.primary
      : Colors.warningBackground
    const containerStyle = {...styles.container, backgroundColor: buttonColor}

    return (
      <TouchableOpacity
        style={containerStyle}
        onPress={handlePress}>
        <Image
          source={buttonIcon}/>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    position: 'absolute',
    right: 20,
    bottom: 80,
    width: 60,
    height: 60,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default FloatingButton
