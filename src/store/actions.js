import {ADD_TODO, SELECT_ALL, DELETE_COMPLETE_TODOS, DELETE_ITEM} from './mutation-type'
export default {
  addTodo ({commit}, todo) {
    // 提交一个comutation请求
    commit(ADD_TODO, {todo}) // 传递给mutation的是一个包含数据的对象
  },
  selectAll ({commit}, value) {
    commit(SELECT_ALL, {value})
  },
  deleteCompleteTodos ({commit}) {
    commit(DELETE_COMPLETE_TODOS)
  },
  deleteItem ({commit}, index) {
    commit(DELETE_ITEM, {index})
  }
}
