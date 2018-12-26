import React, { Component } from 'react'
import {
  StyleSheet, Text, View, FlatList, TextInput, Button
} from 'react-native'
import Header from './lib/components/Header'
import AddItem from './lib/components/AddItem'
import NavTab from './lib/components/NavTab'
import FloatingButton from './lib/components/FloatingButton/index'
import TodoList from './lib/components/TodoList'
import Tabs from './lib/constants/Tabs'
import Colors from './lib/constants/Colors'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: {
        byIds: {},
        allIds: [],
        activeIds: [],
        completedIds: [],
        isLoading: true,
      },
      text: '',
      addingItem: false,
      currentTab: Tabs.ALL,
    }
  }

  render() {
    const currentTab = this.state.currentTab
    let items
    switch(currentTab) {
      case Tabs.all:
        items = this.state.items.allIds
          .map(itemId => this.state.items.byIds[itemId])
        break
      case Tabs.active:
        items = this.state.items.activeIds
          .map(itemId => this.state.items.byIds[itemId])
        break
      case Tabs.completed:
        items = this.state.items.completedIds
          .map(itemId => this.state.items.byIds[itemId])
        break
      default:
        items = this.state.items.allIds
          .map(itemId => this.state.items.byIds[itemId])
    }

    return (
      <View style={styles.container}>
        <Header/>
        <View style={styles.body}>
          {
            this.state.addingItem &&
            <AddItem
              addItemText={this.state.text}
              onEditingAddItem={this.editingAddItem}
              onAddItem={this.onDoneEditingAddItem}
            />
          }
          <TodoList
            items={items}
            isLoading={this.state.isLoading}
            deleteItem={this.deleteItem}
            toggleCompleted={this.toggleCompleted}
          />
        </View>
        <NavTab onSelectTab={this.onSelectTab}/>
        <FloatingButton onPress={this.toggleAddNewItem}/>
      </View>
    )
  }

  componentDidMount() {
    this.setState({
      items: {
        ...this.state.items,
        isLoading: true,
      }
    })
    setTimeout(() => {
      const byIds = [1,2,3]
        .map(x => ({
          id: x.toString(),
          text: `Item #${x}`,
          completed: false,
        }))
        .reduce((acc, item) => ({
          ...acc,
          [item.id]: {...item},
        }), {})
      const allIds = Object.keys(byIds)
      const activeIds = allIds.filter(itemId => !byIds[itemId].completed)
      const completedIds = allIds.filter(itemId => byIds[itemId].completed)

      this.setState({
        items: {
          byIds,
          allIds,
          activeIds,
          completedIds,
          isLoading: false,
        },
      })
    }, 1000)
  }

  deleteItem = (itemId) => () => {
    if (!(itemId in this.state.items.byIds)) {
      return
    }

    let byIds = {...this.state.items.byIds}
    delete byIds[itemId]
    const allIds = Object.keys(byIds)
    const activeIds = allIds.filter(itemId => !byIds[itemId].completed)
    const completedIds = allIds.filter(itemId => byIds[itemId].completed)

    this.setState({
      items: {
        ...this.state.items,
        byIds,
        allIds,
        activeIds,
        completedIds,
      }
    })
  }

  editingAddItem = (text) => {
    this.setState({text})
  }

  onDoneEditingAddItem = () => {

    let byIds = {...this.state.items.byIds}
    const newItemId = `${byIds.length}`
    byIds[newItemId] = {
      id: newItemId,
      completed: false,
      text: this.state.text,
    }
    const allIds = Object.keys(byIds)
    const activeIds = allIds.filter(itemId => !byIds[itemId].completed)
    const completedIds = allIds.filter(itemId => byIds[itemId].completed)

    this.setState({
      items: {
        ...this.state.items,
        byIds,
        allIds,
        activeIds,
        completedIds,
      },
      text: ''
    })
  }

  toggleCompleted = (itemId) => () => {
    let byIds = {...this.state.items.byIds}
    byIds[itemId] = {
      ...byIds[itemId],
      completed: !byIds[itemId].completed
    }
    const allIds = Object.keys(byIds)
    const activeIds = allIds.filter(itemId => !byIds[itemId].completed)
    const completedIds = allIds.filter(itemId => byIds[itemId].completed)

    this.setState({
      items: {
        ...this.state.items,
        byIds,
        allIds,
        activeIds,
        completedIds,
      }
    })
  }

  toggleAddNewItem = () => {
    this.setState({
      addingItem: !this.state.addingItem
    })
  }

  onSelectTab = (tab) => {
    this.setState({
      currentTab: tab,
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue
  },
  body: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  }
})
