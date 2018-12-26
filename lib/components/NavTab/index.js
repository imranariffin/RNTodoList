import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { SCREENS } from '../../../App'

class NavTab extends Component {
  render() {
    const { onSelectTab } = this.props
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.selectTab(SCREENS.ALL)}
          style={styles.all}>
          <Text>ALL</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.selectTab(SCREENS.ACTIVE)}
          style={styles.active}>
          <Text>ACTIVE</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.selectTab(SCREENS.COMPLETED)}
          style={styles.completed}>
          <Text>COMPLETED</Text>
        </TouchableHighlight>
      </View>
    )
  }

  selectTab = (tab) => () => {
    this.props.onSelectTab(tab)
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  all: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  active: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  completed: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  }
})

export default NavTab
