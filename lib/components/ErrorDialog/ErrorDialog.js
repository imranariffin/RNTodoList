import React, { Component } from 'react'
import { View, sStyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Snackbar from 'react-native-snackbar'
import Colors from '@constants/Colors'

class ErrorDialog extends Component {
  static propTypes = {
    errorMessage: PropTypes.string,
    shouldDisplay: PropTypes.bool.isRequired,
    dismissAllErrors: PropTypes.func.isRequired
  }

  render() {
    const {
      errorMessage,
      dismissAllErrors,
      shouldDisplay
    } = this.props
    if (!shouldDisplay) {
      return null
    }
    const snackbarOptions = {
      title: errorMessage,
      backgroundColor: Colors.crimson,
      duration: Snackbar.LENGTH_LONG,
      action: {
        onPress: () => {
          dismissAllErrors()
          Snackbar.dismiss()
        },
        color: Colors.secondary,
        title: 'dismiss'
      }
    }
    Snackbar.show(snackbarOptions)
    return (
      <View></View>
    )
  }
}

export default ErrorDialog
