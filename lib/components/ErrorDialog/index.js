import ErrorDialog from './ErrorDialog'
import { connect } from 'react-redux'
import { dismissAllErrors } from '@state/actions'

const mapStateToProps = (state) => {
  const {
    items: {
      error: { message: errorMessage }
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
    dismissAllErrors: () => {
      dispatch(dismissAllErrors())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorDialog)
