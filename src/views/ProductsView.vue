<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref,watchEffect } from 'vue'
const route = useRoute()
const productId = ref(route.params.id)
watchEffect(() => {
  productId.value = route.params.id
})
</script>

<template>
  <div class="products">
    <h2>产品展示</h2>
    <div class="product-list">
      <div class="product-item">产品 {{ productId }}</div>
    </div>
  </div>
</template>

<style scoped>
.products {
  padding: 20px;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.product-item {
  padding: 20px;
  background-color: #f0f4f8;
  border-radius: 6px;
  text-align: center;
}
</style> 