import {
  ADD_ITEM_TOGGLE_DISPLAY,
  ADD_ITEM_CHANGE,
  ADD_ITEM_CLEAR
} from '@state/actions'

const initialState = {
  addItem: {
    text: '',
    isFocus: false
  }
}

const forms = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TOGGLE_DISPLAY: {
      return {
        addItem: {
          ...state.addItem,
          isFocus: !state.addItem.isFocus
        }
      }
    }
    case ADD_ITEM_CLEAR: {
      return {
        addItem: {
          ...state.addItem,
          text: ''
        }
      }
    }
    case ADD_ITEM_CHANGE: {
      const {
        data: {
          text
        }
      } = action
      return {
        addItem: {
          ...state.addItem,
          text
        }
      }
    }
    default:
      return state
  }
}

export default forms
