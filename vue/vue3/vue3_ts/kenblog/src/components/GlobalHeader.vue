<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">者也专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">登录</a></li>
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">注册</a></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <drop-down :title="`你好，${user.name}`">
          <drop-down-item><a class="dropdown-item" href="#">新建文章</a></drop-down-item>
          <drop-down-item disabled><a class="dropdown-item" href="#">编辑资料</a></drop-down-item>
          <drop-down-item><a class="dropdown-item" href="#">退出登录</a></drop-down-item>
        </drop-down>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import DropDown from './Dropdown.vue'
import DropDownItem from './DropDownItem.vue'
export interface UserProps {
  isLogin: boolean,
  name?: string,
  id?: number
}
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    DropDown,
    DropDownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})
</script>
