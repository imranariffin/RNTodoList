import React, { Component } from 'react'
import {
  StyleSheet, Text, View, FlatList, TextInput, Button
} from 'react-native'
import ListItem from './lib/components/ListItem'

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
    return (
      <View style={styles.container}>
        {
          this.state.addingItem &&
          <TextInput
            blurOnSubmit={false}
            style={styles.textInput}
            value={this.state.text}
            onChangeText={text => this.setState({text})}
            onSubmitEditing={e => {
              this.setState({
                  items: [this.state.text, ...this.state.items],
                  text: ''
              })
            }}
          />
        }
        {
          this.state.addingItem &&
          <Button
            title='Add item'
            color='turquoise'
            disabled={!this.state.text}
            onPress={() => {
              if (this.state.text) {
                this.setState({
                  items: [this.state.text, ...this.state.items],
                  text: ''
                })
              }
            }}
          /> ||
          <Button
            title='Add item'
            onPress={() => {
              this.setState({addingItem: true})
            }}
          />
        }
        {
          this.state.addingItem &&
          <Button
            title='Cancel'
            color='red'
            onPress={() => {
              this.setState({addingItem: false})
            }}
          />

        }
        <FlatList
          data={this.state.items}
          extraData={this.state}
          keyExtractor={(item, index) => `${index}`}
          refreshing={!!this.state.isLoading}
          onRefresh={() => {
            this.setState({items: [], isLoading: true})
            setTimeout(() => {
              this.setState({
                items: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,17,18,19,20,21,22,24,25,262].map(e => e.toString()),
                isLoading: false
              })
            }, 1000)
          }}
          onEndReached={() => {
            this.setState({isLoading: true})
            setTimeout(() => {
              this.setState({
                items: this.state.items.concat([101,102,103,104,105,106,107,109]),
                isLoading: false,
              })
            }, 1000)
          }}
          onEndReachedThreshold={0.01}
          renderItem={({item}) => (<ListItem deleteItem={this.deleteItem(item)}>{item}</ListItem>)
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'blue'
  },
  textInput: {
    width: '100%',
    height: 40,
    backgroundColor: 'yellow'
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'green'
  },
})
