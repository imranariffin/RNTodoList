
const initialState = {
  addItem: {
    text: '',
    isFocus: false
  }
}

const forms = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TOGGLE_DISPLAY': {
      return {
        addItem: {
          ...state.addItem,
          isFocus: !state.addItem.isFocus
        }
      }
    }
    case 'ADD_ITEM_CLEAR': {
      return {
        addItem: {
          ...state.addItem,
          text: ''
        }
      }
    }
    default:
      return state
  }
}

export default forms
