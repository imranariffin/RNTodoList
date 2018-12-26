import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { SCREENS, COLORS } from '../../constants'

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
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row'
  },
  all: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.RED,
  },
  active: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.GREEN,
  },
  completed: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BLUE,
  }
})

export default NavTab
