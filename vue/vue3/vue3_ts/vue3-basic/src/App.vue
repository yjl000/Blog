<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{ count }}</h1>
    <h1>{{ double }}</h1>
    <p>{{error}}</p>
    <ul>
      <li v-for="number in numbers" :key="number">
        <h3>{{ number }}</h3>
      </li>
    </ul>
    <Suspense timeout="0">
      <template #default>
        <!-- <async-show /> -->
        <dog-show />
      </template>
      <template #fallback>
        <h2>async loading......</h2>
      </template>
    </Suspense>
    <button @click="openModal">open Modal</button>

    <h2>name: {{ person.name }}</h2>
    <h2>{{ greetings }}</h2>
    <modal :isOpen="modalIsOpen" @close-modal="onModalClose">
      My Modal !!
    </modal>
    <h3 v-if="loading">Loading...</h3>
    <img v-if="loaded" :src="result[0].url" />
    <h1>X: {{ x }}, Y: {{ y }}</h1>
    <button @click="increase">👍+1</button>
    <button @click="updateGreeting">update greeting</button>
  </div>
</template>

<script lang="ts">
// https://dog.ceo/api/breeds/image/random
// https://api.thecatapi.com/v1/images/search?limit=1
import {
  ref,
  computed,
  reactive,
  toRefs,
  onMounted,
  onUnmounted,
  onUpdated,
  onRenderTriggered,
  watch,
  onErrorCaptured
} from "vue";
import useMounsePosition from "./hooks/useMousePosition";
import useURLLoader from "./hooks/useUrlLoader";
import modal from "./components/Modal.vue";
// import AsyncShow from "./components/AsyncShow.vue";
import DogShow from "./components/DogShow.vue";
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: { name?: string };
}

interface DogResult {
  message: string;
  status: string;
}

interface CatResult {
  id: string;
  url: string;
  width: number;
  height: number;
}

export default {
  name: "App",
  setup() {
    const error = ref(null)
    onErrorCaptured((e: any) => {
      error.value = e
      return true
    })
    // const count = ref(0)
    // const increase = () => {
    //   count.value++
    // }
    // const double = computed(() => {
    //   return count.value * 2
    // })
    onMounted(() => {
      console.log("onMount");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onRenderTriggered((event) => {
      console.log(event);
    });
    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++;
      },
      double: computed(() => {
        return data.count * 2;
      }),
      numbers: [1, 2, 3],
      person: {},
    });
    const greetings = ref("");
    const updateGreeting = () => {
      greetings.value += "Hello! ";
    };
    watch([greetings, () => data.count], (newValue, oldValue) => {
      console.log("old: ", oldValue);
      console.log("new: ", newValue);
      document.title = "update" + greetings.value;
    });
    data.numbers[0] = 5;
    data.person.name = "ken";
    // 不用toRefs,单独拿出属性，会失去响应式的效果
    const refData = toRefs(data);

    // // 鼠标移动事件
    // const x = ref(0)
    // const y = ref(0)
    // const updateMouse = (e: MouseEvent) => {
    //   x.value = e.pageX
    //   y.value = e.pageY
    // }

    // onMounted(() => {
    //   document.addEventListener('click', updateMouse)
    // })

    // onUnmounted(() => {
    //   document.removeEventListener('click', updateMouse)
    // })
    const { x, y } = useMounsePosition();

    // const { result, loaded, loading } = useURLLoader<DogResult>('https://dog.ceo/api/breeds/image/random');
    const { result, loaded, loading } = useURLLoader<CatResult[]>(
      "https://api.thecatapi.com/v1/images/search?limit=1"
    );

    watch(result, () => {
      if (result.value) {
        console.log("value: ", result.value[0].url);
      }
    });

    const modalIsOpen = ref(false);
    const openModal = () => {
      modalIsOpen.value = true;
    };
    const onModalClose = () => {
      modalIsOpen.value = false;
    };
    return {
      ...refData,
      greetings,
      updateGreeting,
      x,
      y,
      result,
      loaded,
      loading,
      modalIsOpen,
      openModal,
      onModalClose,
      error
    };
  },
  components: {
    modal,
    // AsyncShow,
    DogShow,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
