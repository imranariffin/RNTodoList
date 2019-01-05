import itemsReducer from '@state/reducers/items'

describe('items reducer', () => {
  describe('initially', () => {
    it('returns correct initial state', () => {
      const action = {type: 'SOME_ACTION_TYPE'}
      expect(itemsReducer(undefined, action)).toEqual({
        byIds: {},
        allIds: [],
        activeIds: [],
        completedIds: [],
        isLoading: false,
        error: {}
      })
    })
  })

  describe('action is `ITEMS_CREATE_PENDING`', () => {
    const state = {
      byIds: {
        someActiveItem: {
          id: 'someActiveItem',
          completed: false,
          text: 'Some active item',
          isPendingDeletion: false,
          isPendingUpdation: false
        },
        someCompletedItem: {
          id: 'someCompletedItem',
          completed: true,
          text: 'Some completed item',
          isPendingDeletion: false,
          isPendingUpdation: false
        }
      },
      allIds: ['someActiveItem', 'someCompletedItem'],
      activeIds: ['someActiveItem'],
      completedIds: ['someCompletedItem'],
      isLoading: false,
      isPendingCreation: false,
      error: {}
    }
    const action = {
      type: 'ITEMS_CREATE_PENDING',
      data: {
        text: 'New item'
      }
    }

    it('should return correct state', () => {
      const newState = itemsReducer(state, action)

      expect(newState.byIds).toEqual(state.byIds)
      expect(newState.allIds).toEqual(state.allIds)
      expect(newState.activeIds).toEqual(state.activeIds)
      expect(newState.completedIds).toEqual(state.completedIds)
      expect(newState.isLoading).toBe(false)
      expect(newState.isPendingCreation).toBe(true)
      expect(newState.error).toEqual(state.error)
    })

    it('should deep copy', () => {
      const newState = itemsReducer(state, action)

      expect(newState.byIds === state.byIds).toBe(false)
      expect(newState.allIds === state.allIds).toBe(false)
      expect(newState.activeIds === state.activeIds).toBe(false)
      expect(newState.completedIds === state.completedIds).toBe(false)
      expect(newState.error === state.error).toBe(false)
    })
  })

  describe('action is `ITEMS_CREATE_SUCCESS`', () => {
    const state = {
      byIds: {
        someActiveItem: {
          id: 'someActiveItem',
          completed: false,
          text: 'Some active item',
          isPendingDeletion: false,
          isPendingUpdation: false
        },
        someCompletedItem: {
          id: 'someCompletedItem',
          completed: true,
          text: 'Some completed item',
          isPendingDeletion: false,
          isPendingUpdation: false
        }
      },
      allIds: ['someActiveItem', 'someCompletedItem'],
      activeIds: ['someActiveItem'],
      completedIds: ['someCompletedItem'],
      isLoading: false,
      isPendingCreation: true,
      error: {}
    }
    const action = {
      type: 'ITEMS_CREATE_SUCCESS',
      data: {
        id: 'newItem',
        text: 'New item',
        completed: false
      }
    }

    it('should return correct state', () => {
      const newState = itemsReducer(state, action)

      expect(newState).toEqual({
        byIds: {
          someActiveItem: {
            id: 'someActiveItem',
            completed: false,
            text: 'Some active item',
            isPendingDeletion: false,
            isPendingUpdation: false
          },
          someCompletedItem: {
            id: 'someCompletedItem',
            completed: true,
            text: 'Some completed item',
            isPendingDeletion: false,
            isPendingUpdation: false
          },
          newItem: {
            id: 'newItem',
            completed: false,
            text: 'New item',
            isPendingDeletion: false,
            isPendingUpdation: false
          }
        },
        allIds: ['newItem', 'someActiveItem', 'someCompletedItem'],
        activeIds: ['newItem', 'someActiveItem'],
        completedIds: ['someCompletedItem'],
        isLoading: false,
        isPendingCreation: false,
        error: {}
      })
    })

    it('should deep copy', () => {
      const newState = itemsReducer(state, action)

      expect(newState.byIds === state.byIds).toBe(false)
      expect(newState.allIds === state.allIds).toBe(false)
      expect(newState.activeIds === state.activeIds).toBe(false)
      expect(newState.completedIds === state.completedIds).toBe(false)
      expect(newState.error === state.error).toBe(false)
    })
  })

  describe('action is `ITEMS_CREATE_FAILURE`', () => {
    const state = {
      byIds: {
        someActiveItem: {
          id: 'someActiveItem',
          completed: false,
          text: 'Some active item',
          isPendingDeletion: false,
          isPendingUpdation: false
        },
        someCompletedItem: {
          id: 'someCompletedItem',
          completed: true,
          text: 'Some completed item',
          isPendingDeletion: false,
          isPendingUpdation: false
        }
      },
      allIds: ['someActiveItem', 'someCompletedItem'],
      activeIds: ['someActiveItem'],
      completedIds: ['someCompletedItem'],
      isLoading: false,
      isPendingCreation: true,
      error: {}
    }
    const action = {
      type: 'ITEMS_CREATE_FAILURE',
      data: {
        text: 'New item',
        error: {
          message: 'Error creating new item'
        }
      }
    }

    it('should return correct state', () => {
      const newState = itemsReducer(state, action)

      expect(newState.byIds).toEqual(state.byIds)
      expect(newState.allIds).toEqual(state.allIds)
      expect(newState.activeIds).toEqual(state.activeIds)
      expect(newState.completedIds).toEqual(state.completedIds)
      expect(newState.isLoading).toBe(state.isLoading)
      expect(newState.error).toEqual({
        message: 'Error creating new item'
      })
    })
  })

  describe('action is `ITEMS_GET_PENDING`', () => {
    const state = {
      byIds: {
        someActiveItem: {
          id: 'someActiveItem',
          completed: false,
          text: 'Some active item',
          isPendingDeletion: false,
          isPendingUpdation: false
        },
        someCompletedItem: {
          id: 'someCompletedItem',
          completed: true,
          text: 'Some completed item',
          isPendingDeletion: false,
          isPendingUpdation: false
        }
      },
      allIds: ['someActiveItem', 'someCompletedItem'],
      activeIds: ['someActiveItem'],
      completedIds: ['someCompletedItem'],
      isLoading: false,
      error: {}
    }
    const action = {
      type: 'ITEMS_GET_PENDING',
      data: {}
    }

    it('should return correct state', () => {
      const newState = itemsReducer(state, action)

      expect(newState.byIds).toEqual(state.byIds)
      expect(newState.allIds).toEqual(state.allIds)
      expect(newState.activeIds).toEqual(state.activeIds)
      expect(newState.completedIds).toEqual(state.completedIds)
      expect(newState.isLoading).toBe(true)
      expect(newState.error).toEqual(state.error)
    })

    it('should deep copy', () => {
      const newState = itemsReducer(state, action)

      expect(newState.byIds === state.byIds).toBe(false)
      expect(newState.allIds === state.allIds).toBe(false)
      expect(newState.activeIds === state.activeIds).toBe(false)
      expect(newState.completedIds === state.completedIds).toBe(false)
      expect(newState.error === state.error).toBe(false)
    })
  })

  describe('action is `ITEMS_GET_SUCCESS`', () => {
    const state = {
      byIds: {
        someActiveItem: {
          id: 'someActiveItem',
          completed: false,
          text: 'Some active item',
          isPendingDeletion: false,
          isPendingUpdation: false
        },
        someCompletedItem: {
          id: 'someCompletedItem',
          completed: true,
          text: 'Some completed item',
          isPendingDeletion: false,
          isPendingUpdation: false
        }
      },
      allIds: ['someActiveItem', 'someCompletedItem'],
      activeIds: ['someActiveItem'],
      completedIds: ['someCompletedItem'],
      isLoading: true,
      error: {}
    }
    const action = {
      type: 'ITEMS_GET_SUCCESS',
      data: {
        items: [{
          id: 'newActiveItem',
          text: 'New active item',
          completed: false
        }, {
          id: 'newCompletedItem',
          text: 'New completed item',
          completed: true
        }]
      }
    }

    it('should return correct state', () => {
      const newState = itemsReducer(state, action)

      expect(newState.byIds).toEqual({
        newCompletedItem: {
          id: 'newCompletedItem',
          completed: true,
          text: 'New completed item',
          isPendingDeletion: false,
          isPendingUpdation: false
        },
        newActiveItem: {
          id: 'newActiveItem',
          completed: false,
          text: 'New active item',
          isPendingDeletion: false,
          isPendingUpdation: false
        }
      })
      expect(newState.allIds).toEqual(['newActiveItem', 'newCompletedItem'])
      expect(newState.activeIds).toEqual(['newActiveItem'])
      expect(newState.completedIds).toEqual(['newCompletedItem'])
      expect(newState.isLoading).toBe(false)
      expect(newState.error).toEqual(state.error)
    })

    it('should deep copy', () => {
      const newState = itemsReducer(state, action)

      expect(newState.byIds === state.byIds).toBe(false)
      expect(newState.allIds === state.allIds).toBe(false)
      expect(newState.activeIds === state.activeIds).toBe(false)
      expect(newState.completedIds === state.completedIds).toBe(false)
      expect(newState.error === state.error).toBe(false)
    })
  })

  describe('action is `ITEMS_GET_FAILURE`', () => {
    const state = {
      byIds: {
        someActiveItem: {
          id: 'someActiveItem',
          completed: false,
          text: 'Some active item',
          isPendingDeletion: false,
          isPendingUpdation: false
        },
        someCompletedItem: {
          id: 'someCompletedItem',
          completed: true,
          text: 'Some completed item',
          isPendingDeletion: false,
          isPendingUpdation: false
        }
      },
      allIds: ['someActiveItem', 'someCompletedItem'],
      activeIds: ['someActiveItem'],
      completedIds: ['someCompletedItem'],
      isLoading: true,
      error: {}
    }
    const action = {
      type: 'ITEMS_GET_FAILURE',
      data: {
        error: {
          message: 'Some error message'
        }
      }
    }

    it('should return correct state', () => {
      const newState = itemsReducer(state, action)

      expect(newState.byIds).toEqual(state.byIds)
      expect(newState.allIds).toEqual(state.allIds)
      expect(newState.activeIds).toEqual(state.activeIds)
      expect(newState.completedIds).toEqual(state.completedIds)
      expect(newState.isLoading).toEqual(false)
      expect(newState.error).toEqual(action.data.error)
    })

    it('should deep copy', () => {
      const newState = itemsReducer(state, action)

      expect(newState.byIds === state.byIds).toBe(false)
      expect(newState.allIds === state.allIds).toBe(false)
      expect(newState.activeIds === state.activeIds).toBe(false)
      expect(newState.completedIds === state.completedIds).toBe(false)
      expect(newState.error === state.error).toBe(false)
    })
  })

  describe('action is `ITEMS_UPDATE_PENDING`', () => {
    const state = {
      byIds: {
        someActiveItem: {
          id: 'someActiveItem',
          completed: false,
          text: 'Some active item',
          isPendingDeletion: false,
          isPendingUpdation: false
        },
        someCompletedItem: {
          id: 'someCompletedItem',
          completed: true,
          text: 'Some completed item',
          isPendingDeletion: false,
          isPendingUpdation: false
        }
      },
      allIds: ['someActiveItem', 'someCompletedItem'],
      activeIds: ['someActiveItem'],
      completedIds: ['someCompletedItem'],
      isLoading: false,
      error: {}
    }
    const action = {
      type: 'ITEMS_UPDATE_PENDING',
      data: {
        id: 'someActiveItem',
        completed: true
      }
    }

    it('should return correct state', () => {
      const newState = itemsReducer(state, action)

      expect(newState).toEqual({
        byIds: {
          someActiveItem: {
            id: 'someActiveItem',
            completed: false,
            text: 'Some active item',
            isPendingDeletion: false,
            isPendingUpdation: true
          },
          someCompletedItem: {
            id: 'someCompletedItem',
            completed: true,
            text: 'Some completed item',
            isPendingDeletion: false,
            isPendingUpdation: false
          }
        },
        allIds: ['someActiveItem', 'someCompletedItem'],
        activeIds: ['someActiveItem'],
        completedIds: ['someCompletedItem'],
        isLoading: false,
        error: {}
      })
    })

    it('should deep copy', () => {
      const newState = itemsReducer(state, action)

      expect(newState.byIds === state.byIds).toBe(false)
      expect(newState.allIds === state.allIds).toBe(false)
      expect(newState.activeIds === state.activeIds).toBe(false)
      expect(newState.completedIds === state.completedIds).toBe(false)
      expect(newState.error === state.error).toBe(false)
    })
  })

  describe('action is `ITEMS_UPDATE_SUCCESS`', () => {
    const state = {
      byIds: {
        someActiveItem: {
          id: 'someActiveItem',
          completed: false,
          text: 'Some active item',
          isPendingDeletion: false,
          isPendingUpdation: false
        },
        someCompletedItem: {
          id: 'someCompletedItem',
          completed: true,
          text: 'Some completed item',
          isPendingDeletion: false,
          isPendingUpdation: false
        }
      },
      allIds: ['someActiveItem', 'someCompletedItem'],
      activeIds: ['someActiveItem'],
      completedIds: ['someCompletedItem'],
      isLoading: false,
      error: {}
    }
    const action = {
      type: 'ITEMS_UPDATE_SUCCESS',
      data: {
        id: 'someActiveItem',
        text: 'Not active anymore',
        completed: true
      }
    }

    it('should return correct state', () => {
      const newState = itemsReducer(state, action)

      expect(newState).toEqual({
        byIds: {
          someActiveItem: {
            id: 'someActiveItem',
            completed: true,
            text: 'Not active anymore',
            isPendingDeletion: false,
            isPendingUpdation: false
          },
          someCompletedItem: {
            id: 'someCompletedItem',
            completed: true,
            text: 'Some completed item',
            isPendingDeletion: false,
            isPendingUpdation: false
          }
        },
        allIds: ['someActiveItem', 'someCompletedItem'],
        activeIds: [],
        completedIds: ['someActiveItem', 'someCompletedItem'],
        isLoading: false,
        error: {}
      })
    })

    it('should deep copy', () => {
      const newState = itemsReducer(state, action)

      expect(newState.byIds === state.byIds).toBe(false)
      expect(newState.allIds === state.allIds).toBe(false)
      expect(newState.activeIds === state.activeIds).toBe(false)
      expect(newState.completedIds === state.completedIds).toBe(false)
      expect(newState.error === state.error).toBe(false)
    })
  })

  describe('action is `ITEMS_DELETE_PENDING`', () => {
    const state = {
      byIds: {
        someActiveItem: {
          id: 'someActiveItem',
          completed: false,
          text: 'Some active item',
          isPendingDeletion: false,
          isPendingUpdation: false
        },
        someCompletedItem: {
          id: 'someCompletedItem',
          completed: true,
          text: 'Some completed item',
          isPendingDeletion: false,
          isPendingUpdation: false
        }
      },
      allIds: ['someActiveItem', 'someCompletedItem'],
      activeIds: ['someActiveItem'],
      completedIds: ['someCompletedItem'],
      isLoading: false,
      error: {}
    }
    const action = {
      type: 'ITEMS_DELETE_PENDING',
      data: {
        id: 'someActiveItem'
      }
    }

    it('should return correct state', () => {
      const newState = itemsReducer(state, action)

      expect(newState).toEqual({
        byIds: {
          someActiveItem: {
            id: 'someActiveItem',
            completed: false,
            text: 'Some active item',
            isPendingDeletion: true,
            isPendingUpdation: false
          },
          someCompletedItem: {
            id: 'someCompletedItem',
            completed: true,
            text: 'Some completed item',
            isPendingDeletion: false,
            isPendingUpdation: false
          }
        },
        allIds: ['someActiveItem', 'someCompletedItem'],
        activeIds: ['someActiveItem'],
        completedIds: ['someCompletedItem'],
        isLoading: false,
        error: {}
      })
    })

    it('should deep copy', () => {
      const newState = itemsReducer(state, action)

      expect(newState.byIds === state.byIds).toBe(false)
      expect(newState.allIds === state.allIds).toBe(false)
      expect(newState.activeIds === state.activeIds).toBe(false)
      expect(newState.completedIds === state.completedIds).toBe(false)
      expect(newState.error === state.error).toBe(false)
    })
  })

  describe('action is `ITEMS_DELETE_SUCCESS`', () => {
    const state = {
      byIds: {
        someActiveItem: {
          id: 'someActiveItem',
          completed: false,
          text: 'Some active item',
          isPendingDeletion: true,
          isPendingUpdation: false
        },
        someCompletedItem: {
          id: 'someCompletedItem',
          completed: true,
          text: 'Some completed item',
          isPendingDeletion: false,
          isPendingUpdation: false
        }
      },
      allIds: ['someActiveItem', 'someCompletedItem'],
      activeIds: ['someActiveItem'],
      completedIds: ['someCompletedItem'],
      isLoading: false,
      error: {}
    }
    const action = {
      type: 'ITEMS_DELETE_SUCCESS',
      data: {
        id: 'someActiveItem'
      }
    }

    it('should return correct state', () => {
      const newState = itemsReducer(state, action)

      expect(newState).toEqual({
        byIds: {
          someCompletedItem: {
            id: 'someCompletedItem',
            completed: true,
            text: 'Some completed item',
            isPendingDeletion: false,
            isPendingUpdation: false
          }
        },
        allIds: ['someCompletedItem'],
        activeIds: [],
        completedIds: ['someCompletedItem'],
        isLoading: false,
        error: {}
      })
    })

    it('should deep copy', () => {
      const newState = itemsReducer(state, action)

      expect(newState.byIds === state.byIds).toBe(false)
      expect(newState.allIds === state.allIds).toBe(false)
      expect(newState.activeIds === state.activeIds).toBe(false)
      expect(newState.completedIds === state.completedIds).toBe(false)
      expect(newState.error === state.error).toBe(false)
    })
  })

  describe('action is `ITEMS_DELETE_FAILURE`', () => {
    const state = {
      byIds: {
        someActiveItem: {
          id: 'someActiveItem',
          completed: false,
          text: 'Some active item',
          isPendingDeletion: true,
          isPendingUpdation: false
        },
        someCompletedItem: {
          id: 'someCompletedItem',
          completed: true,
          text: 'Some completed item',
          isPendingDeletion: false,
          isPendingUpdation: false
        }
      },
      allIds: ['someActiveItem', 'someCompletedItem'],
      activeIds: ['someActiveItem'],
      completedIds: ['someCompletedItem'],
      isLoading: false,
      error: {}
    }
    const action = {
      type: 'ITEMS_DELETE_FAILURE',
      data: {
        id: 'someActiveItem',
        error: {
          message: 'Error trying to delete item `someActiveItem`'
        }
      }
    }

    it('should return correct state', () => {
      const newState = itemsReducer(state, action)

      expect(newState).toEqual({
        byIds: {
          someActiveItem: {
            id: 'someActiveItem',
            completed: false,
            text: 'Some active item',
            isPendingDeletion: false,
            isPendingUpdation: false
          },
          someCompletedItem: {
            id: 'someCompletedItem',
            completed: true,
            text: 'Some completed item',
            isPendingDeletion: false,
            isPendingUpdation: false
          }
        },
        allIds: ['someActiveItem', 'someCompletedItem'],
        activeIds: ['someActiveItem'],
        completedIds: ['someCompletedItem'],
        isLoading: false,
        error: {
          message: 'Error trying to delete item `someActiveItem`'
        }
      })
    })

    it('should deep copy', () => {
      const newState = itemsReducer(state, action)

      expect(newState.byIds === state.byIds).toBe(false)
      expect(newState.allIds === state.allIds).toBe(false)
      expect(newState.activeIds === state.activeIds).toBe(false)
      expect(newState.completedIds === state.completedIds).toBe(false)
      expect(newState.error === state.error).toBe(false)
    })
  })
})
