import FloatingButton from './FloatingButton'
import { TOGGLE_ADDING_NEW_ITEM } from '../../state/actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  const {
    views: { addingNewItem }
  } = state
  return {
    addingNewItem
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlePress: () => {
      dispatch({
        type: TOGGLE_ADDING_NEW_ITEM,
        data: {}
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FloatingButton)
