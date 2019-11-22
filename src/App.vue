<template>
  <div id="app">
    <p>我是数字 {{count}}, 我是{{evenOrOdd}}</p>
    <el-button @click="increment" type="primary">新增</el-button>
    <el-button @click="decrement" type="danger">减少</el-button>
    <el-button @click="incrementAsync" type="warning" plain >异步增加</el-button>
    <el-button @click="incrementIfOdd" type="success">偶数增加</el-button>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters(['evenOrOdd']),
    ...mapState(['count'])
  },
  methods: {
    ...mapActions(['increment', 'decrement', 'incrementAsync', 'incrementIfOdd'])
    // increment () {
    //   this.$store.dispatch('increment')
    // },
    // decrement () {
    //   this.$store.dispatch('decrement')
    // },
    // incrementAsync () {
    //   this.$store.dispatch('incrementAsync')
    // },
    // incrementIfOdd () {
    //   this.$store.dispatch('incrementIfOdd')
    // }
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
