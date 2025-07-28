<template>
  <div class="frist">
    <div class="a">订单信息：{{ orderName }}</div>
    <div class="b">总金额：{{ amount }}</div>
  </div>
  <div class="sec">
    地址：<input type="text" v-model="orderName">
  </div>
  <div class="third">
    <div>
      <span>短期意外险：</span>
      <input type="text" v-model="orderName">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  setup () {
    const orderName = ref('平安产险')
    const amount = ref(5000)
    const n1 = ref(1), n2 = ref(1), n3 = ref(1)
    return {
      orderName,
      amount,
      list: []
    }
  }
})
</script>
