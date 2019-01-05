import {
  ITEMS_STORAGE_SAVE_PENDING,
  ITEMS_STORAGE_SAVE_SUCCESS,
  ITEMS_STORAGE_SAVE_FAILURE,
  ITEMS_CREATE_SUCCESS,
  ITEMS_GET_SUCCESS,
  ITEMS_UPDATE_SUCCESS,
  ITEMS_DELETE_SUCCESS
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
        dispatch({
          type: ITEMS_STORAGE_SAVE_PENDING,
          data: {}
        })
        try {
          await storage.saveItems(items)
          dispatch({
            type: ITEMS_STORAGE_SAVE_SUCCESS,
            data: {}
          })
        } catch (error) {
          const { message } = error
          dispatch({
            type: ITEMS_STORAGE_SAVE_FAILURE,
            data: {},
            error: { message }
          })
        }
        break
      }
      default:
        break
    }
    return returnedAction
  }
