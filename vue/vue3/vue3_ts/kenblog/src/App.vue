<template>
  <div class="container">
    {{count}}
    <button @click="clickMe">click Me</button>
    <global-header :user="user"></global-header>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input placeholder="请输入邮箱地址" type="text" v-model="emailValue" :rules="emailRules"></validate-input>
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input placeholder="请输入密码" type="password" v-model="passValue" :rules="passRules"></validate-input>
      </div>
      <template #submit>
        <span class="btn btn-danger">提交</span>
      </template>
      <!-- <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button> -->
    </validate-form>
    <!-- <column-list :list="list"></column-list> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import validateInput, { RulesProp } from './components/ValidateInput.vue'
import validateForm from './components/ValidateForm.vue'
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
    // ColumnList,
    GlobalHeader,
    validateInput,
    validateForm
  },
  setup () {
    const inputRef = ref<any>('')
    const emailValue = ref('')
    const passValue = ref('')
    // eslint-disable-next-line prefer-const
    let count = ref(0)
    const clickMe = () => {
      count.value++
    }
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' },
      { type: 'range', message: '请输入正确的电子邮箱长度' }
    ]
    const passRules: RulesProp = [
      { type: 'required', message: '密码不能为空' },
      { type: 'range', message: '请输入正确的密码长度' }
    ]
    const onFormSubmit = (result: boolean) => {
      console.log(result)
    }
    return {
      list: testData,
      user,
      emailRules,
      emailValue,
      passValue,
      passRules,
      onFormSubmit,
      inputRef,
      count,
      clickMe
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
