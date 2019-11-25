<template>
  <div id="app">
    <todoHeader/>
    <todoList/>
  </div>
</template>

<script>
import todoHeader from './components/todoHeader'
import todoList from './components/todoList'
export default {
  name: 'App',
  components: {
    todoHeader,
    todoList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
