import AddItem from './AddItem'
import {
  ITEMS_CREATE_PENDING,
  ITEMS_CREATE_SUCCESS,
  ITEMS_CREATE_FAILURE,
  ADD_ITEM_CHANGE,
  ADD_ITEM_CLEAR,
  API
} from '@state/actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
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
        type: ADD_ITEM_CHANGE,
        data: {
          text
        }
      })
    },
    handleSubmitEditing: (text) => () => {
      dispatch({
        type: API,
        types: [
          ITEMS_CREATE_PENDING,
          ITEMS_CREATE_SUCCESS,
          ITEMS_CREATE_FAILURE
        ],
        method: 'POST',
        data: {
          text
        }
      })
      dispatch({
        type: ADD_ITEM_CLEAR
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItem)
