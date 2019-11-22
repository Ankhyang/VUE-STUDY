import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const getters = {
  evenOrOdd (state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

const actions = {
  increment ({commit}) {
    commit('INCREMENT')
  },
  decrement ({commit}) {
    commit('DECREMENT')
  },
  incrementAsync ({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  },
  incrementIfOdd ({commit}) {
    if (state.count % 2 === 0) {
      commit('INCREMENT')
    }
  }
}

export default new Vuex.Store({
  getters, // 包含多个计算属性的对象
  actions, // 包含多个动作的对象
  mutations, // 包含多个触发state的
  state // 状态对象
})
