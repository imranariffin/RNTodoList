import { AsyncStorage } from 'react-native'

export const STORAGE_KEY_ITEMS = 'STORAGE_KEY:items'

export default {
  saveItems: async (items) => {
    const itemsString = JSON.stringify(items)
    await AsyncStorage.setItem(STORAGE_KEY_ITEMS, itemsString)
  },
  loadState: async () => {
    const itemsString = await AsyncStorage.getItem(STORAGE_KEY_ITEMS)
    return JSON.parse(itemsString)
  }
}
