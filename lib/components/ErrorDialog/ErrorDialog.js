import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'
import Colors from '@constants/Colors'

class ErrorDialog extends Component {
  static propTypes = {
    errorMessage: PropTypes.string.isRequired,
    shouldDisplay: PropTypes.bool.isRequired,
    dismissError: PropTypes.func.isRequired
  }

  render() {
    const {
      errorMessage,
      dismissError,
      shouldDisplay
    } = this.props
    if (!shouldDisplay) {
      return null
    }
    return (
      <View style={styles.container}>
        <View style={styles.dismissButton}>
          <TouchableWithoutFeedback onPress={dismissError}>
            <Text>[X]</Text>
          </TouchableWithoutFeedback>
        </View>
        <Text style={styles.errorMessage}>
          {errorMessage}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 100,
    backgroundColor: Colors.red,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dismissButton: {
    position: 'absolute',
    right: 0,
    top: 0
  },
  errorMessage: {}
})

export default ErrorDialog
