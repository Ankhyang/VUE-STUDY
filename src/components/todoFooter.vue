<template>
  <div class="footer">
    <el-checkbox v-model="checkAll">全选</el-checkbox>&emsp;&emsp;
    <span>已完成{{completeSize}}</span>&emsp;<span>/ 全部{{totalSize}}</span>&emsp;
    <el-button type="primary" size="mini" v-show="completeSize" @click="deleteAllCompleted">清除已完成任务</el-button>
  </div>
</template>

<script type="text/javascript">
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['totalSize', 'completeSize']),
    checkAll: {
      get () { // 决定是否需要勾选
        return this.$store.getters.isSelectAll
      },
      set (value) {
        this.$store.dispatch('selectAll', value)
      }
    }
  },
  methods: {
    deleteAllCompleted () {
      this.$store.dispatch('deleteCompleteTodos')
    }
  }
}
</script>

<style scoped>
  .footer{
    width: 500px;
    text-align: left;
    padding: 20px 5px;
    margin: 0 auto;
  }
</style>
