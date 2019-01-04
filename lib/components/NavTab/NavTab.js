import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native'
import Tabs from '../../constants/Tabs'
import Colors from '../../constants/Colors'

class NavTab extends Component {
  render() {
    const {handleSelectTab, currentTab = Tabs.all} = this.props
    const all = {
      icon: currentTab === Tabs.all
        ? require('./list-selected.png')
        : require('./list.png'),
      style: currentTab === Tabs.all
        ? {color: Colors.tabIconSelected}
        : {color: Colors.black},
    }
    const active = {
      icon: currentTab === Tabs.active
        ? require('./focus-selected.png')
        : require('./focus.png'),
      style: currentTab === Tabs.active
        ? {color: Colors.tabIconSelected}
        : {color: Colors.black},
    }
    const completed = {
      icon: currentTab === Tabs.completed
        ? require('./completed-selected.png')
        : require('./completed.png'),
      style: currentTab === Tabs.completed
        ? {color: Colors.tabIconSelected}
        : {color: Colors.black},
    }

    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={handleSelectTab(Tabs.all)}
          style={StyleSheet.flatten([styles.tab, styles.center])}
          underlayColor={Colors.tabIconDefault}>
          <View style={styles.center}>
            <Image
              source={all.icon}/>
            <Text
              style={all.style}>
              {Tabs.all}
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={handleSelectTab(Tabs.active)}
          style={StyleSheet.flatten([styles.tab, styles.center])}
          underlayColor={Colors.tabIconDefault}>
          <View style={styles.center}>
            <Image
              source={active.icon}/>
            <Text
              style={active.style}>
              {Tabs.active}
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={handleSelectTab(Tabs.completed)}
          style={StyleSheet.flatten([styles.tab, styles.center])}
          underlayColor={Colors.tabIconDefault}>
          <View style={styles.center}>
            <Image
              source={completed.icon}/>
            <Text
              style={completed.style}>
              {Tabs.completed}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: Colors.tabIconDefault,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: Colors.tabBar,
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: Colors.dimGrey,
  },
  tab: {
    backgroundColor: Colors.tabIconDefault,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default NavTab
