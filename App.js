import React, { Component } from 'react'
import {
  StyleSheet, Text, View, FlatList, TextInput, Button
} from 'react-native'
import uuidv4 from 'uuid/v4'
import { Provider } from 'react-redux'
import Header from '@components/Header'
import AddItem from '@components/AddItem'
import NavTab from '@components/NavTab'
import FloatingButton from '@components/FloatingButton'
import TodoList from '@components/TodoList'
import ErrorDialog from '@components/ErrorDialog'
import Tabs from '@constants/Tabs'
import Colors from '@constants/Colors'
import store from '@state/store'
import { getItems } from '@state/actions'

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
          <ErrorDialog/>
        </View>
      </Provider>
    )
  }

  componentDidMount() {
    const { dispatch } = store
    dispatch(getItems())
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
