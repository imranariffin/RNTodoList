import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import ListItem from '../ListItem'
import Colors from '../../constants/Colors'

class AddItem extends Component {
  render() {
    const {addItemText, onEditingAddItem, onAddItem} = this.props

    return (
      <ListItem
        item={{}}
        isEditing={true}
      >
        <TextInput
          style={styles.textInput}
          value={addItemText}
          onChangeText={onEditingAddItem}
          onSubmitEditing={onAddItem}
        />
      </ListItem>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white
  }
})

export default AddItem
