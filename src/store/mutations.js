import {ADD_TODO} from './mutation-type'
export default {
  [ADD_TODO] (state, {todo}) {
    state.todoList.unshift(todo)
  }
}
