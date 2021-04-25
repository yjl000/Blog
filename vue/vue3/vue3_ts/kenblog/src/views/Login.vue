<template>
  <div>
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
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import validateInput, { RulesProp } from '../components/ValidateInput.vue'
import validateForm from '../components/ValidateForm.vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {
    validateInput,
    validateForm
  },
  setup () {
    const inputRef = ref<any>('')
    const router = useRouter()
    const emailValue = ref('')
    const passValue = ref('')
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
      if (result) {
        // router.push({
        //   name: 'column',
        //   params: {
        //     id: 1
        //   }
        // })
        router.push('/')
      }
    }

    return {
      emailRules,
      emailValue,
      passValue,
      passRules,
      onFormSubmit,
      inputRef
    }
  }
})
</script>
