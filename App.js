import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView, TextInput, Button
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [1,2,3,4].map(x => x.toString()),
      text: '',
      addingItem: false,
    }
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
        <ScrollView
          contentContainerStyle={styles.scrollView}
          scrollEnabled={true}
        >
          {
            this.state.items.map(item =>
              <Text
                key={`${item}`}
                style={styles.item}
              >
                {item}
              </Text>)
          }
        </ScrollView>
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
  item: {
    padding: 5,
    height: 80,
    flexGrow: 0,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey'
  }
})
