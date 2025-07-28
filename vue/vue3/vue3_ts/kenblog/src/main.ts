import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Column from './views/ColumnDetail.vue'
import Test from './views/Test.vue'
import App from './App.vue'

const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    add (state) {
      state.count++
    }
  }
})
console.log('store', store.state.count)
store.commit('add')
console.log('store', store.state.count)

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/column/:id',
      name: 'column',
      component: Column
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
