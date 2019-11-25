<template>
  <div>
    <ul class="todo-main">
      <todoItem v-for="(todo, index) in todoList" :todo="todo" :key="index" :index="index"/>
    </ul>
  </div>
</template>

<script type="text/javascript">
import {mapState} from 'vuex'
import todoItem from './todoItem'
export default {
  components: {
    todoItem
  },
  computed: {
    ...mapState(['todoList'])
  }
}
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
