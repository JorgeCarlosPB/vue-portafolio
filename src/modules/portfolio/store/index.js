/*import { createStore } from 'vuex'

export default createStore({
  state: {
    mode: {light:1, dark:2},
    colores: [
      {id: '1', color1: 'black', color2: '#212121', color3: 'white', estado: true},
      {id: '2', color1: '#eeeeee', color2: 'white', color3: 'black', estado: false},
    ]
  },

  getters: {
    allMode(state, getters, rootState){
      return state.colores    
    },

    lightMode(state, getters, rootState){
      return state.colores[0]      
    },

    darkMode(state, getters, rootState){
      return state.colores[1]      
    },
    getCurrentTheme(state, getters, rootState){
      return state.colores.filter(color => color.estado)
    },

   
  },
  mutations: {
    changeTheme(state){
      state.todos.state = !state.todos.state 
    }

  },
  actions: {
  },
  modules: {
  }
})*/

import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const portfolio = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default portfolio
