import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import ListItem from '@components/ListItem'
import Colors from '@constants/Colors'
import { connect } from 'react-redux'

class AddItem extends Component {
  componentDidMount() {
    const { addItemTextInput } = this.refs
    const { addingNewItem } = this.props
    if (addItemTextInput && addingNewItem) {
      addItemTextInput.focus()
    }
  }
  componentDidUpdate() {
    const { addItemTextInput } = this.refs
    const { addingNewItem } = this.props
    if (addItemTextInput) {
      if (addingNewItem) {
        return addItemTextInput.focus()
      }
      addItemTextInput.blur()
    }
  }
  render() {
    const {text, handleChangeText, handleSubmitEditing, addingNewItem} = this.props
    if (!addingNewItem) {
      return null
    }
    return (
      <ListItem
        item={{}}
        isEditing={true}
      >
        <TextInput
          ref='addItemTextInput'
          style={styles.textInput}
          placeholder='What do you plan to do?'
          value={text}
          onChangeText={handleChangeText}
          onSubmitEditing={handleSubmitEditing(text)}
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
