const TODO_KEY = 'todos_key'
export default {
  readTodos () {
    return JSON.parse(localStorage.getItem(TODO_KEY) || '[]')
  },
  saveTodos (todo) {
    localStorage.setItem(TODO_KEY, JSON.stringify(todo))
  }
}
