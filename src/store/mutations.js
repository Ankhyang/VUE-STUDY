/* eslint-disable no-return-assign */
import {ADD_TODO, SELECT_ALL, DELETE_COMPLETE_TODOS, DELETE_ITEM, RECEIVE_TODOS} from './mutation-type'
import utils from '../utils/storageUtils'
export default {
  [ADD_TODO] (state, {todo}) {
    state.todoList.unshift(todo)
  },
  [SELECT_ALL] (state, {value}) {
    state.todoList.forEach(todo => todo.complete = value)
  },
  [DELETE_COMPLETE_TODOS] (state) {
    state.todoList = state.todoList.filter(todo => !todo.complete)
  },
  [DELETE_ITEM] (state, {index}) {
    state.todoList.splice(index, 1)
  },
  [RECEIVE_TODOS] (state) {
    state.todoList = utils.readTodos()
  }
}
