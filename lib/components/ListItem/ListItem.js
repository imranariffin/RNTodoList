import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Switch, Image, TouchableOpacity } from 'react-native'
import Colors from '@constants/Colors'

class ListItem extends Component {
  render() {

    const {
      children,
      toggleCompleted,
      deleteItem = () => {},
      item,
      isEditing = false
    } = this.props
    const customContainerStyle = isEditing ? {backgroundColor: Colors.white} : {}
    const containerStyle = StyleSheet.flatten([styles.container, customContainerStyle])

    return (
      <View style={containerStyle}>
        <View style={styles.left}>
          <Switch
            value={item.completed}
            onValueChange={toggleCompleted}
            disabled={isEditing}
          />
        </View>
        <View style={styles.center}>
          {children}
        </View>
        <View style={styles.right}>
          <TouchableOpacity
            onPress={deleteItem}
            disabled={isEditing}>
            <Image
              source={require('./delete.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    height: 50,
    marginTop: 10,
    flexGrow: 0,
    backgroundColor: Colors.white
  },
  left: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 5,
    textAlign: 'center',
    justifyContent: 'center',
  },
  right: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default ListItem
