import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import ListItem from '../ListItem'
import Colors from '../../constants/Colors'
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

const mapStateToProps = (state) => {
  console.log('mapStateToProps')
  const {
    forms: {
      addItem: {
        text
      }
    },
    views: { addingNewItem }
  } = state
  return {
    text,
    addingNewItem
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeText: (text) => {
      dispatch({
        type: 'ADD_ITEM_CHANGE',
        data: {
          text
        }
      })
    },
    handleSubmitEditing: (text) => () => {
      dispatch({
        types: [
          'ITEMS_CREATE_PENDING',
          'ITEMS_CREATE_SUCCESS',
          'ITEMS_CREATE_FAILURE'
        ],
        method: 'POST',
        data: {
          text
        }
      })
      dispatch({
        type: 'ADD_ITEM_CLEAR'
      })
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItem)
