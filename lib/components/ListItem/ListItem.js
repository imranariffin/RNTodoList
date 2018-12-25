import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

class ListItem extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.left}>
          <Text>
            {this.props.children}
          </Text>
        </View>
        <View style={styles.right}>
          <Button
            title='Delete'
            color='red'
            onPress={this.props.deleteItem}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 5,
    height: 80,
    flexGrow: 0,
    backgroundColor: 'grey'
  },
  left: {
    flex: 5,
    textAlign: 'center',
    justifyContent: 'center',
  },
  right: {
    flex: 1,
  }
})

export default ListItem
