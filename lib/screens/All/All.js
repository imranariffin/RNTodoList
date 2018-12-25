import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import ListItem from '../../components/ListItem'

class All extends Component {
  render() {

    const {items: filteredItems, isLoading, deleteItem} = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          data={filteredItems}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({item}) => (
            <ListItem
              deleteItem={deleteItem(item)}>
              {item}
            </ListItem>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'maroon',
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
  }
})

export default All
