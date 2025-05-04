<script setup lang="ts">
import { ref } from 'vue';
// 顶级属性自动解包
const obj = {
  str:ref("Hello")
}
</script>

<template>
<h1>{{ obj.str }}</h1>
</template>

<style scoped></style>
  