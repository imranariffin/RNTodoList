import {
  ITEMS_CREATE_SUCCESS,
  ITEMS_GET_SUCCESS,
  ITEMS_UPDATE_SUCCESS,
  ITEMS_DELETE_SUCCESS,
  ITEMS_GET_FAILURE,
  saveItemsInStoragePending,
  saveItemsInStorageSuccess,
  saveItemsInStorageFailure,
  loadItemsFromStoragePending,
  loadItemsFromStorageSuccess,
  loadItemsFromStorageFailure,
} from '@state/actions'

export default (storage) =>
  ({ getState, dispatch }) => next => async action => {
    const returnedAction = next(action)
    switch (action.type) {
      case ITEMS_CREATE_SUCCESS:
      case ITEMS_GET_SUCCESS:
      case ITEMS_UPDATE_SUCCESS:
      case ITEMS_DELETE_SUCCESS: {
        const { items } = getState()
        dispatch(saveItemsInStoragePending(items))
        try {
          await storage.saveItems(items)
          dispatch(saveItemsInStorageSuccess(items))
        } catch (error) {
          dispatch(saveItemsInStorageFailure(items, error))
        }
        break
      }
      case ITEMS_GET_FAILURE: {
        try {
          dispatch(loadItemsFromStoragePending())
          const items = await storage.loadItems()
          dispatch(loadItemsFromStorageSuccess(items))
        } catch (error) {
          dispatch(loadItemsFromStorageFailure())
        }
      }
      default:
        break
    }
    return returnedAction
  }
