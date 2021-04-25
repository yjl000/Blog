<template>
    <teleport to='#modal'>
    <div id="center" v-if="isOpen">
        <h2><slot>this is modal</slot></h2>
        <button @click="buttonClick">close</button>
    </div>
    </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',
  props: {
    isOpen: Boolean,
  },
  emits: {
      'close-modal': null
  },
  setup(props, context) {
      const buttonClick = () => {
        context.emit('close-modal')
      }

      return {
          buttonClick
      }
  }
});
</script>

<style>
#center {
    width: 200px;
    height: 200px;
    border: 2px solid black;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -100px;
    background: #fff;
}
</style>