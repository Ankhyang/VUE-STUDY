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
import utils from '../utils/storageUtils'
export default {
  components: {
    todoItem
  },
  computed: {
    ...mapState(['todoList'])
  },
  watch: {
    todoList: {
      deep: true, // 深度监视
      handler: utils.saveTodos // 保存todos到LocalStroage
    }
  }
}
</script>

<style scoped>
  .todo-main {
    padding: 0px;
    width: 500px;
    margin: 0 auto;
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
