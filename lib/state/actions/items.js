import { API } from '@state/actions/api'

export const ITEMS_CREATE_PENDING = 'ITEMS_CREATE_PENDING'
export const ITEMS_CREATE_SUCCESS = 'ITEMS_CREATE_SUCCESS'
export const ITEMS_CREATE_FAILURE = 'ITEMS_CREATE_FAILURE'

export const ITEMS_GET_PENDING = 'ITEMS_GET_PENDING'
export const ITEMS_GET_SUCCESS = 'ITEMS_GET_SUCCESS'
export const ITEMS_GET_FAILURE = 'ITEMS_GET_FAILURE'

export const ITEMS_UPDATE_PENDING = 'ITEMS_UPDATE_PENDING'
export const ITEMS_UPDATE_SUCCESS = 'ITEMS_UPDATE_SUCCESS'
export const ITEMS_UPDATE_FAILURE = 'ITEMS_UPDATE_FAILURE'

export const ITEMS_DELETE_PENDING = 'ITEMS_DELETE_PENDING'
export const ITEMS_DELETE_SUCCESS = 'ITEMS_DELETE_SUCCESS'
export const ITEMS_DELETE_FAILURE = 'ITEMS_DELETE_FAILURE'

export const ITEMS_STORAGE_SAVE_PENDING = 'ITEMS_STORAGE_SAVE_PENDING'
export const ITEMS_STORAGE_SAVE_SUCCESS = 'ITEMS_STORAGE_SAVE_SUCCESS'
export const ITEMS_STORAGE_SAVE_FAILURE = 'ITEMS_STORAGE_SAVE_FAILURE'

export const ITEMS_STORAGE_LOAD_PENDING = 'ITEMS_STORAGE_LOAD_PENDING'
export const ITEMS_STORAGE_LOAD_SUCCESS = 'ITEMS_STORAGE_LOAD_SUCCESS'
export const ITEMS_STORAGE_LOAD_FAILURE = 'ITEMS_STORAGE_LOAD_FAILURE'

export const getItems = () => {
  return {
    type: API,
    types: [
      ITEMS_GET_PENDING,
      ITEMS_GET_SUCCESS,
      ITEMS_GET_FAILURE
    ],
    method: 'GET',
    data: {}
  }
}

export const saveItemsInStoragePending = (items) => {
  return {
    type: ITEMS_STORAGE_SAVE_PENDING,
    data: { items }
  }
}

export const saveItemsInStorageSuccess = (items) => {
  return {
    type: ITEMS_STORAGE_SAVE_SUCCESS,
    data: { items }
  }
}

export const saveItemsInStorageFailure = (items, error) => {
  return {
    type: ITEMS_STORAGE_SAVE_FAILURE,
    data: {
      items ,
      error
    },
  }
}

export const loadItemsFromStoragePending = () => {
  return {
    type: ITEMS_STORAGE_LOAD_PENDING,
    data: {}
  }
}

export const loadItemsFromStorageSuccess = (items) => {
  return {
    type: ITEMS_STORAGE_LOAD_SUCCESS,
    data: {
      items
    }
  }
}

export const loadItemsFromStorageFailure = (error) => {
  return {
    type: ITEMS_STORAGE_LOAD_FAILURE,
    data: { error }
  }
}
