<template>
  <div>
    <li :style="{background: bgColor}" class="todo_item" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
      <el-checkbox v-model="todo.complete">{{todo.title}}</el-checkbox>
      <el-button type="danger" v-show="isShow" size="mini" @click="deleteItem">删除</el-button>
    </li>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    todo: Object,
    index: Number
  },
  data () {
    return {
      bgColor: '#ffffff',
      isShow: false
    }
  },
  methods: {
    deleteItem () {
      this.$store.dispatch('deleteItem', this.index)
    },
    handleEnter (enter) {
      if (enter) {
        this.bgColor = '#fcfcfc'
        this.isShow = true
      } else {
        this.bgColor = '#ffffff'
        this.isShow = false
      }
    }
  }
}
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li button{
    margin-left: 80%;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }
  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
