<template>
  <div class="column-info row mb-4 border-bottom pb-4 aligin-items-center">
    <div class="column d-flex flex-column align-items-center">
      <div class="border column-list" v-for="item in list" :key="item.id">
        <h3>{{item.title}}</h3>
        <p>
        <span>{{item.createAt}}</span>
        </p>
        <div class="d-flex align-items-center justify-content-between">
          <img class="col-4" v-if="item.image" :src="item.image">
          <span>{{item.content}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { PostProps } from '../hooks/testData'
export default defineComponent({
  props: {
    list: {
      required: true,
      type: Array as PropType<PostProps[]>
    }
  }
})
</script>

<style scoped>
.column-list {
  width: 100%;
  margin-bottom: 30px;
  padding: 20px;
}
</style>
