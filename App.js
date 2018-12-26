import React, { Component } from 'react'
import {
  StyleSheet, Text, View, FlatList, TextInput, Button
} from 'react-native'
import Header from './lib/components/Header'
import AddItem from './lib/components/AddItem'
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
        items: [1,2,3,4,5,6,7,8,9].map(x => ({
          id: x.toString(),
          text: `Item #${x}`,
          completed: false,
        })),
        isLoading: false,
      })
    }, 1000)
  }

  deleteItem = (itemId) => () => {
    const items = this.state.items.filter(e => e.id !== itemId)
    this.setState({items})
  }

  editingAddItem = (text) => {
    this.setState({text})
  }

  onDoneEditingAddItem = () => {
    this.setState({
      items: [{
        id: `${this.state.items.length}`,
        completed: false,
        text: this.state.text,
      }].concat(this.state.items),
      text: ''
    })
  }

  toggleCompleted = (itemId) => () => {
    const items = this.state.items.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          completed: !item.completed
        }
      }

      return {...item}
    })

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
        <View style={styles.body}>
          <AddItem
            addItemText={this.state.text}
            onEditingAddItem={this.editingAddItem}
            onAddItem={this.onDoneEditingAddItem}
          />
          <Screen
            items={this.state.items}
            isLoading={this.state.isLoading}
            deleteItem={this.deleteItem}
            toggleCompleted={this.toggleCompleted}
          />
        </View>
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
  body: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  }
})
