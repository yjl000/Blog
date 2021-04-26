<template>
  <div>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '../components/ColumnList.vue'
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
  components: {
    ColumnList
  },
  setup () {
    return {
      list: testData
    }
  }
})
</script>
