import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ListItem from '../ListItem'

class TodoList extends Component {
  render() {

    const {items, isLoading, deleteItem, toggleCompleted, extraData} = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          data={items}
          extraData={extraData}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({item}) => (
            <ListItem
              deleteItem={deleteItem(item.id)}
              item={item}
              toggleCompleted={toggleCompleted(item.id)}
            >
              <Text
                style={{
                  textDecorationLine: item.completed ? 'line-through': 'none'
                }}>
                {item.text}
              </Text>
            </ListItem>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default TodoList
