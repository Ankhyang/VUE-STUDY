<template>
  <div>
    <el-input v-model="inputTodo" placeholder="请输入选项" @keyup.enter="addTodo" class="header-input"></el-input>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      inputTodo: ''
    }
  },
  methods: {
    addTodo () {
      // 获取输入的数据
      const inputTodo = this.inputTodo.trim()
      if (!inputTodo) {
        alert('请重新输入')
        return
      }
      // 封装一个对象
      const todo = {
        title: inputTodo,
        complete: false
      }
      this.$store.dispatch('addTodo', todo)
    }
  }
}
</script>

<style scoped>
  .header-input{
    width: 560px !important;
  }
</style>
