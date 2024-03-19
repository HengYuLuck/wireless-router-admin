<script setup>
import { onMounted } from 'vue';

import { useTitle } from '@vueuse/core'
import HelloWorld from "./components/HelloWorld.vue";

const title = useTitle()
onMounted(() => {
  title.value = '无线路由器管理平台'
})
</script>

<template>
  <router-view />
</template>

<style scoped>
</style>
