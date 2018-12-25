import React, { Component } from 'react'
import {
  StyleSheet, Text, View, FlatList, TextInput, Button
} from 'react-native'
import ListItem from './lib/components/ListItem'
import Header from './lib/components/Header'
import NavTab from './lib/components/NavTab'
import All from './lib/screens/All'
import Active from './lib/screens/Active'
import Completed from './lib/screens/Completed'

const SCREENS = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED'
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoading: true,
      text: '',
      addingItem: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        items: [1,2,3,4,5,6,7,8,9].map(x => x.toString()),
        isLoading: false,
      })
    }, 1000)
  }

  deleteItem = (item) => () => {
    const items = this.state.items.filter(e => e !== item)
    this.setState({items})
  }

  render() {

    const currentTab = this.state.currentTab
    let Screen

    switch(currentTab) {
      case SCREENS.ALL:
        Screen = All
        break
      case SCREENS.ACTIVE:
        Screen = Active
        break
      case SCREENS.COMPLETED:
        Screen = Completed
        break
      default:
        Screen = All
    }

    return (
      <View style={styles.container}>
        <Header/>
        <Screen
          items={this.state.items}
          isLoading={this.state.isLoading}
          deleteItem={this.deleteItem}
        />
        <NavTab/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },
})
