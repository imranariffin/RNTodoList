import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import Tabs from '../../constants/Tabs'
import Colors from '../../constants/Colors'

class NavTab extends Component {
  render() {
    const {onSelectTab, currentTab = Tabs.all} = this.props
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.selectTab(Tabs.all)}
          style={styles.all}>
          <Text
            style={{color: currentTab === Tabs.all ? Colors.tabIconSelected : Colors.black}}>
            {Tabs.all}
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.selectTab(Tabs.active)}
          style={styles.active}>
          <Text
            style={{color: currentTab === Tabs.active ? Colors.tabIconSelected : Colors.black}}>
            {Tabs.active}
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.selectTab(Tabs.completed)}
          style={styles.completed}>
          <Text
            style={{color: currentTab === Tabs.completed ? Colors.tabIconSelected : Colors.black}}>
            {Tabs.completed}
          </Text>
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
    backgroundColor: Colors.tabIconDefault,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: Colors.tabBar,
  },
  all: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.tabIconDefault,
  },
  active: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.tabIconDefault,
  },
  completed: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.tabIconDefault,
  }
})

export default NavTab
