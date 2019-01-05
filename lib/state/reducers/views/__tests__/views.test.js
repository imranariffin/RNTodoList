import viewsReducer from '@state/reducers/views'

describe('views reducer', () => {
  it('should switch tab', () => {
    const state = {
      currentTab: 'all',
      addingNewItem: false
    }
    const action = {
      type: 'SWITCH_TAB',
      data: {
        tab: 'active'
      }
    }
    expect(viewsReducer(state, action)).toEqual({
      currentTab: 'active',
      addingNewItem: false
    })
  })
  it('should toggle adding new item', () => {
    const state = {
      currentTab: 'all',
      addingNewItem: false
    }
    const action = {
      type: 'TOGGLE_ADDING_NEW_ITEM',
      data: {}
    }

    const newState = viewsReducer(state, action)
    const nextNewState = viewsReducer(newState, action)

    expect(newState).toEqual({
      currentTab: 'all',
      addingNewItem: true
    })
    expect(nextNewState).toEqual({
      currentTab: 'all',
      addingNewItem: false
    })
  })
})
