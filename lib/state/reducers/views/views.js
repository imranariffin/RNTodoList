import Tabs from '../../../constants/Tabs'

const initialState = {
  currentTab: Tabs.all,
  addingNewItem: false
}

const views = (state, action) => {
  switch (action.type) {
    case 'SWITCH_TAB':{
      const {
        data: {
          tab: currentTab
        }
      } = action
      return {
        ...state,
        currentTab
      }
      break
    }
    case 'TOGGLE_ADDING_NEW_ITEM': {
      const { addingNewItem } = state
      return {
        ...state,
        addingNewItem: !addingNewItem
      }
    }
    default:
      return state
  }
}

export default views
