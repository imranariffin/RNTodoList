import _ from 'lodash'
import {
  ITEMS_CREATE_PENDING,
  ITEMS_CREATE_SUCCESS,
  ITEMS_CREATE_FAILURE,
  ITEMS_GET_PENDING,
  ITEMS_GET_SUCCESS,
  ITEMS_GET_FAILURE,
  ITEMS_UPDATE_PENDING,
  ITEMS_UPDATE_SUCCESS,
  ITEMS_UPDATE_FAILURE,
  ITEMS_DELETE_PENDING,
  ITEMS_DELETE_SUCCESS,
  ITEMS_DELETE_FAILURE
} from '@state/actions'

const initialState = {
  byIds: {},
  allIds: [],
  activeIds: [],
  completedIds: [],
  isLoading: false,
  error: {}
}

const sortItemsCallback = (itemsById) => (itemId1, itemId2) =>
  itemsById[itemId1].text.localeCompare(itemsById[itemId2].text)

const items = (state = initialState, action) => {
  switch (action.type) {
    case ITEMS_CREATE_PENDING: {
      const {
        byIds,
        allIds,
        activeIds,
        completedIds,
      } = state

      return {
        byIds: _.cloneDeep(byIds),
        allIds: [].concat(allIds),
        activeIds: [].concat(activeIds),
        completedIds: [].concat(completedIds),
        error: {},
        isLoading: false,
        isPendingCreation: true
      }
    }
    case ITEMS_CREATE_SUCCESS: {
      const {
        byIds: _byIds,
        allIds: _allIds,
        activeIds: _activeIds,
        completedIds
      } = state
      const {
        data: {
          id,
          text,
          completed
        }
      } = action

      const byIds = _.cloneDeep(_byIds)
      byIds[id] = {
        id,
        text,
        completed,
        isPendingUpdation: false,
        isPendingDeletion: false
      }
      const allIds = _allIds
        .concat(id)
        .sort(sortItemsCallback(byIds))
      const activeIds = _activeIds
        .concat(id)
        .sort(sortItemsCallback(byIds))

      return {
        byIds,
        allIds,
        activeIds,
        completedIds: [].concat(completedIds),
        isLoading: false,
        isPendingCreation: false,
        error: {}
      }
    }
    case ITEMS_CREATE_FAILURE: {
      const {
        byIds,
        allIds,
        activeIds,
        completedIds,
      } = state
      const {
        data: {
          error: {
            message
          }
        }
      } = action

      return {
        byIds: _.cloneDeep(byIds),
        allIds: [].concat(allIds),
        activeIds: [].concat(activeIds),
        completedIds: [].concat(completedIds),
        isLoading: false,
        isPendingCreation: false,
        error: {
          message
        }
      }
    }
    case ITEMS_GET_PENDING: {
      const {
        byIds,
        allIds,
        activeIds,
        completedIds,
      } = state

      return {
        byIds: _.cloneDeep(byIds),
        allIds: [].concat(allIds),
        activeIds: [].concat(activeIds),
        completedIds: [].concat(completedIds),
        error: {},
        isLoading: true
      }
    }
    case ITEMS_GET_SUCCESS: {
      const {
        data: {
          items
        }
      } = action

      const byIds = items.reduce((_byIds, item) => {
        return {
          ..._byIds,
          [item.id]: {
            id: item.id,
            text: item.text,
            completed: item.completed,
            isPendingDeletion: false,
            isPendingUpdation: false
          }
        }
      }, {})
      const allIds = Object.keys(byIds)
        .sort(sortItemsCallback(byIds))
      const activeIds = allIds
        .filter(id => !byIds[id].completed)
        .sort(sortItemsCallback(byIds))
      const completedIds = allIds
        .filter(id => byIds[id].completed)
        .sort(sortItemsCallback(byIds))

      return {
        byIds,
        allIds,
        activeIds,
        completedIds,
        error: {},
        isLoading: false
      }
    }
    case ITEMS_GET_FAILURE: {
      const {
        data: {
          error
        }
      } = action
      const {
        byIds,
        allIds,
        activeIds,
        completedIds
      } = state

      return {
        byIds: _.cloneDeep(byIds),
        allIds: [].concat(allIds),
        activeIds: [].concat(activeIds),
        completedIds: [].concat(completedIds),
        isLoading: false,
        error: {...error}
      }
    }
    case ITEMS_UPDATE_PENDING: {
      const {
        data: {
          id
        }
      } = action
      const {
        byIds: _byIds,
        allIds,
        activeIds,
        completedIds,
        isLoading,
        error
      } = state

      const byIds = _.cloneDeep(_byIds)
      byIds[id].isPendingUpdation = true

      return {
        byIds,
        allIds: [].concat(allIds),
        activeIds: [].concat(activeIds),
        completedIds: [].concat(completedIds),
        isLoading,
        error: _.cloneDeep(error)
      }
    }
    case ITEMS_UPDATE_SUCCESS: {
      const {
        data: {
          id,
          text,
          completed
        }
      } = action
      const {
        byIds: _byIds,
        allIds,
        isLoading,
        error
      } = state

      const byIds = _.cloneDeep(_byIds)
      byIds[id].isPendingUpdation = false
      if (!_.isUndefined(text)) {
        byIds[id].text = text
      }
      if (!_.isUndefined(completed)) {
        byIds[id].completed = completed
      }
      const activeIds = allIds
        .filter(_id => !byIds[_id].completed)
        .sort(sortItemsCallback(byIds))
      const completedIds = allIds
        .filter(_id => byIds[_id].completed)
        .sort(sortItemsCallback(byIds))

      return {
        byIds,
        allIds: [].concat(allIds),
        activeIds: activeIds,
        completedIds: completedIds,
        isLoading,
        error: _.cloneDeep(error)
      }
    }
    case ITEMS_DELETE_PENDING: {
      const {
        data: {
          id
        }
      } = action
      const {
        byIds: _byIds,
        allIds,
        activeIds,
        completedIds,
        error
      } = state

      const byIds = _.cloneDeep(_byIds)
      byIds[id].isPendingDeletion = true

      return {
        byIds,
        allIds: [].concat(allIds),
        activeIds: [].concat(activeIds),
        completedIds: [].concat(completedIds),
        isLoading: false,
        error: {...error}
      }
    }
    case ITEMS_DELETE_SUCCESS: {
      const {
        data: {
          id
        }
      } = action
      const {
        byIds: _byIds,
        allIds: _allIds,
        activeIds: _activeIds,
        completedIds: _completedIds,
        error
      } = state

      const byIds = _.cloneDeep(_byIds)
      delete byIds[id]
      const allIds = _allIds.filter(_id => _id !== id)
      const activeIds = _activeIds.filter(_id => _id !== id)
      const completedIds = _completedIds.filter(_id => _id !== id)

      return {
        byIds,
        allIds,
        activeIds,
        completedIds,
        isLoading: false,
        error: {...error}
      }
    }
    case ITEMS_DELETE_FAILURE: {
      const {
        data: {
          id,
          error: _error
        }
      } = action
      const {
        byIds: _byIds,
        allIds,
        activeIds,
        completedIds,
        isLoading
      } = state

      const byIds = _.cloneDeep(_byIds)
      byIds[id].isPendingDeletion = false
      const error = {
        message: _error.message
      }

      return {
        byIds,
        allIds: [].concat(allIds),
        activeIds: [].concat(activeIds),
        completedIds: [].concat(completedIds),
        isLoading,
        error
      }
    }
    case 'DISMISS_ALL_ERRORS': {
      const {
        byIds: _byIds,
        allIds,
        activeIds,
        completedIds,
        isLoading
      } = state

      const byIds = _.cloneDeep(_byIds)

      return {
        byIds,
        allIds: [].concat(allIds),
        activeIds: [].concat(activeIds),
        completedIds: [].concat(completedIds),
        isLoading,
        error: {}
      }
    }
    default:
      return state
  }
}

export default items
