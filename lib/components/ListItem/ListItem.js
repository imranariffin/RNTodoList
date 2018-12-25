import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class ListItem extends Component {
  render() {
    return (
      <Text style={styles.root}>
        {this.props.children}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    padding: 5,
    height: 80,
    flexGrow: 0,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey'
  }
})

export default ListItem
