<template>
<div class="column-detail-page w-75 mx-auto">
  <div class="column-info row mb-4 border-bottom pb-4 aligin-items-center">
    <div class="col-2 text-center">
      <img class="rounded-circle mx-auto" width="100" height="100" :src="column.avatar" :alt="column.title">
    </div>
    <div class="col-9">
      <h4>{{column.title}}</h4>
      <p class="text-muted">{{column.description}}</p>
    </div>
  </div>
  <post-list :list="list"></post-list>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { testData, testPosts } from '../hooks/testData'
import PostList from '../components/PostList.vue'
export default defineComponent({
  components: {
    PostList
  },
  setup () {
    const route = useRoute()
    const currentId = +route.params.id
    const column = testData.find(c => c.id === currentId)
    const list = testPosts.filter(post => post.columnId === currentId)
    console.log(list, column)
    return {
      column,
      list
    }
  }
})
</script>
