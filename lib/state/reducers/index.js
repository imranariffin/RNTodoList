import { combineReducers } from 'redux'
import forms from './forms'
import items from './items'
import views from './views'

export default combineReducers({
  forms,
  items,
  views
})
