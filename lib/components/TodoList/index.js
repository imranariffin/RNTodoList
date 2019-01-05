import TodoList from './TodoList'
import Tabs from '../../constants/Tabs'
import {
  ITEMS_UPDATE_PENDING,
  ITEMS_UPDATE_SUCCESS,
  ITEMS_UPDATE_FAILURE,
  ITEMS_DELETE_PENDING,
  ITEMS_DELETE_SUCCESS,
  ITEMS_DELETE_FAILURE
}
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  const {
    items: {
      byIds,
      allIds,
      activeIds,
      completedIds
    },
    views: { currentTab }
  } = state

  let ids
  switch (currentTab) {
    case Tabs.all:
      ids = allIds
      break
    case Tabs.active:
      ids = activeIds
      break
    case Tabs.completed:
      ids = completedIds
  }
  const items = ids.map(id => byIds[id])

  return {
    items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCompleted: (id, completed) => () => {
      console.log(`toggleCompleted(${id}, ${completed})`)
      dispatch({
        types: [
          ITEMS_UPDATE_PENDING,
          ITEMS_UPDATE_SUCCESS,
          ITEMS_UPDATE_FAILURE
        ],
        method: 'put',
        data: {
          id,
          completed: !completed,
        }
      })
    },
    deleteItem: (id) => () => {
      dispatch({
        types: [
          ITEMS_DELETE_PENDING,
          ITEMS_DELETE_SUCCESS,
          ITEMS_DELETE_FAILURE
        ],
        method: 'delete',
        data: { id }
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
