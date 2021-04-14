<template>
  <div class="validate-input-container pb-3">
    <input
          type="email"
          class="form-control"
          :class="{'is-invalid': inputRef.error}"
          :value="inputRef.val"
          @blur="validateInput"
          @input="updateValue"
          v-bind="$attrs"
        />
        <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType, onMounted, onUnmounted } from 'vue'
import { emitter } from './ValidateForm.vue'
const emailReg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/
interface RuleProp {
  type: 'required' | 'email' | 'range',
  message: string
}
export type RulesProp = RuleProp[]
export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  inheritAttrs: false,
  setup (props, context) {
    console.log('modelvalue', props.modelValue)
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })
    const clearValue = () => {
      inputRef.val = ''
      context.emit('update:modelValue', inputRef.val)
    }

    emitter.on('clear', clearValue)
    // setTimeout(() => {
    //   clearValue()
    // }, 3000)
    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every((rule) => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            case 'range':
              passed = inputRef.val.length >= 12 && inputRef.val.length <= 30
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
        return allPassed
      }
      return true
    }
    onMounted(() => {
      emitter.emit('form-item-created', validateInput)
    })
    onUnmounted(() => {
      emitter.on('clear', clearValue)
    })
    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>
