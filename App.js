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
import uuidv4 from 'uuid/v4'
import { Provider } from 'react-redux'
import store from './lib/state/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header/>
          <View style={styles.body}>
            <AddItem/>
            <TodoList/>
          </View>
          <NavTab/>
          <FloatingButton/>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  body: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  }
})
