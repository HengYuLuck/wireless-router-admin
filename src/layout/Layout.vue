<script setup>

import Header from '../components/Header.vue';
import UseButton from "../components/UseButton.vue";
</script>

<template>
  <div class="tw-w-full tw-h-full">
    <Header></Header>
    <router-view />
    <UseButton class="tw-bg-red-500 tw-text-green-500 tw-px-10"></UseButton>
  </div>

</template>

<style scoped>

</style>
