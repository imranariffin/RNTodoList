import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import Tabs from '../../constants/Tabs'
import Colors from '../../constants/Colors'

class NavTab extends Component {
  render() {
    const { onSelectTab } = this.props
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.selectTab(Tabs.all)}
          style={styles.all}>
          <Text>ALL</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.selectTab(Tabs.active)}
          style={styles.active}>
          <Text>ACTIVE</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.selectTab(Tabs.completed)}
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
    backgroundColor: Colors.white,
    flexDirection: 'row'
  },
  all: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.red,
  },
  active: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.green,
  },
  completed: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue,
  }
})

export default NavTab
