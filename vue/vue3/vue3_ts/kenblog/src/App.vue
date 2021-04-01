<template>
  <div class="container">
    <global-header :user="user"></global-header>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
const user: UserProps = {
  isLogin: true,
  name: 'ken'
}
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1的专栏，有一段非常有意思的简介',
    avatar: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2的专栏，有一段非常有意思的简介',
    avatar: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png'
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是test1的专栏，有一段非常有意思的简介',
    avatar: ''
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是test2的专栏，有一段非常有意思的简介',
    avatar: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png'
  }
]
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup () {
    return {
      list: testData,
      user
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
