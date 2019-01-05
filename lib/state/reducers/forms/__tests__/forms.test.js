import formsReducer from '@state/reducers/forms'

describe('forms reducer', () => {
  describe('initially', () => {
    const action = {
      type: 'SOME_ACTION_TYPE'
    }

    it('should return initial state', () => {
      const newState = formsReducer(undefined, action)

      expect(newState).toEqual({
        addItem: {
          text: '',
          isFocus: false,
        }
      })
    })
  })

  describe('action is `ADD_ITEM_TOGGLE_DISPLAY`', () => {
    const state = {
      addItem: {
        text: 'Some text',
        isFocus: false
      }
    }
    const action = {
      type: 'ADD_ITEM_TOGGLE_DISPLAY'
    }

    it('should return correct state', () => {
      const newState = formsReducer(state, action)
      const nextNewState = formsReducer(newState, action)

      expect(newState).toEqual({
        addItem: {
          text: 'Some text',
          isFocus: true
        }
      })
      expect(nextNewState).toEqual({
        addItem: {
          text: 'Some text',
          isFocus: false
        }
      })
    })

    it('should deep copy', () => {
      const newState = formsReducer(state, action)
      const nextNewState = formsReducer(newState, action)

      expect(newState.addItem === state.addItem).toBe(false)
      expect(nextNewState.addItem === newState.addItem).toBe(false)
    })
  })

  describe('action is `ADD_ITEM_CLEAR`', () => {
    const state = {
      addItem: {
        text: 'Some text',
        isFocus: true
      }
    }
    const action = {
      type: 'ADD_ITEM_CLEAR'
    }

    it('should return correct state', () => {
      const newState = formsReducer(state, action)

      expect(newState).toEqual({
        addItem: {
          isFocus: true,
          text: ''
        }
      })
    })

    it('should deep copy', () => {
      const newState = formsReducer(state, action)
      const nextNewState = formsReducer(newState, action)

      expect(newState.addItem === state.addItem).toBe(false)
      expect(nextNewState.addItem === newState.addItem).toBe(false)
    })
  })
})
