export default {
  // 总数量
  totalSize (state) {
    return state.todoList.length
  },
  // 完成数量
  completeSize (state) {
    return state.todoList.reduce((prevTotal, cur) => prevTotal + (cur.complete ? 1 : 0), 0)
  },
  // 判断是否需要全选
  isSelectAll (state, getters) {
    return getters.completeSize === getters.totalSize && getters.completeSize > 0
  }
}
