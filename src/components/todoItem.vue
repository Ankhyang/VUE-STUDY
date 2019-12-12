<template>
  <div>
    <li class="todo_item">
      <el-checkbox name="type">{{todo.title}}</el-checkbox>
      <button class="btn btn-danger" style="display:none">删除</button>
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

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
