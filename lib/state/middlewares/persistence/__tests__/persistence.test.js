import persistenceMiddleware from '@state/middlewares/persistence'

describe('persistence middleware', () => {
  describe('items updated from server', () => {
    const succesAsyncActionsOnItems = [
      'ITEMS_CREATE_SUCCESS',
      'ITEMS_GET_SUCCESS',
      'ITEMS_UPDATE_SUCCESS',
      'ITEMS_DELETE_SUCCESS'
    ].forEach(actionType => {
      const items = {}
      const action = {
        type: actionType,
        data: {
          items
        }
      }
      it('should update items in the storage', async () => {
        const storageClient = {
          saveItems: jest.fn(),
          getItems: jest.fn()
        }
        const store = {
          getState: jest.fn().mockReturnValue(items),
          dispatch: jest.fn()
        }
        const next = jest.fn(action => action)

        const callMiddleware = persistenceMiddleware(storageClient)(store)(next)
        const returnedAction = await callMiddleware(action)

        expect(storageClient.saveItems).toHaveBeenCalledTimes(1)
        expect(storageClient.getItems).toHaveBeenCalledTimes(0)
        expect(store.getState).toHaveBeenCalledTimes(1)
        expect(store.getState.mock.results[0].value).toEqual(items)
        expect(store.dispatch).toHaveBeenCalledTimes(2)
        expect(store.dispatch.mock.calls[0][0]).toEqual({
          type: 'ITEMS_STORAGE_SAVE_PENDING',
          data: {}
        })
        expect(store.dispatch.mock.calls[1][0]).toEqual({
          type: 'ITEMS_STORAGE_SAVE_SUCCESS',
          data: {}
        })
        expect(next).toHaveBeenCalledWith(action)
        expect(next).toHaveBeenCalledTimes(1)
        expect(returnedAction).toEqual(action)
      })
    })
  })
  describe('other actions', () => {
    const action = {
      type: 'SOME_OTHER_ACTION_TYPE',
      data: {}
    }
    it('should do nothing but return `next`', async () => {
      const storageClient = {
        saveItems: jest.fn(),
        getItems: jest.fn()
      }
      const store = {
        getState: jest.fn(),
        dispatch: jest.fn()
      }
      const next = jest.fn(action => action)

      const callMiddleware = persistenceMiddleware(storageClient)(store)(next)
      const returnedAction = await callMiddleware(action)

      expect(storageClient.saveItems).toHaveBeenCalledTimes(0)
      expect(storageClient.getItems).toHaveBeenCalledTimes(0)
      expect(store.getState).toHaveBeenCalledTimes(0)
      expect(store.dispatch).toHaveBeenCalledTimes(0)
      expect(next).toHaveBeenCalledWith(action)
      expect(next).toHaveBeenCalledTimes(1)
      expect(returnedAction).toEqual(action)
    })
  })
})
