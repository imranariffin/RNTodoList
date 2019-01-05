import NavTab from './NavTab'
import { SWITCH_TAB } from '@state/actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  const {
    views: { currentTab }
  } = state
  return {
    currentTab
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectTab: (tab) => () => {
      dispatch({
        type: SWITCH_TAB,
        data: { tab }
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavTab)
