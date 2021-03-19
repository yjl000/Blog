<template>
    <div>
        <img :src="result && result.message">
    </div>
</template>
<script>
import axios from 'axios'
import { defineComponent } from 'vue'
export default defineComponent({
    async setup() {
        const rawData = await axios.get('https://dog.ceo/api/breeds/image');
        return {
            result: rawData.data
        }
    }
})
</script>