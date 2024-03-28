<script setup>
import {defineProps, onMounted} from 'vue';
import {useAttrs} from "vue";
defineOptions({ // 默认不生效
  inheritAttrs: false
})
const props = defineProps({
  defaultBtnClass: {
    type: String,
    default: 'tw-border tw-p-1 tw-px-3 tw-text-xs  tw-rounded hover:tw-bg-sky-500/100 ',
  },
})
const $attrs = useAttrs()
onMounted(()=>{
  console.log($attrs);
})

</script>

<template>
<!--  <el-button v-bind="$attrs" :style="{margin : defaultMargin + 'px', height: defaultHeight + 'px'}">Default</el-button>-->
<div>
  测试
  <button v-bind="$attrs" :class="defaultBtnClass">test</button>
</div>
</template>

<style scoped>

</style>
