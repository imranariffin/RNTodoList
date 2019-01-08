import ErrorDialog from './ErrorDialog'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  const {
    items: {
      error: { message: errorMessage}
    }
  } = state
  const shouldDisplay = !!errorMessage

  return {
    shouldDisplay,
    errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dismissError: () => {
      dispatch({
        type: 'DISMISS_ALL_ERRORS',
        data: {}
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorDialog)
