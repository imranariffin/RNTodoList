import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import ListItem from '../ListItem'

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
    backgroundColor: 'white'
  }
})

export default AddItem
