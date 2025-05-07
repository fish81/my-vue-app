<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import DropdownMenu from './components/DropdownMenu.vue'

const menuItems = [
  {
    label: '产品1',
    path: '/products/product1',
  },
  {
    label: '产品2',
    path: '/products/product2',
  },
  {
    label: '产品3',
    path: '/products/product3',
  },
  {
    label: '产品4',
    path: '/products/product4',
  },
]

</script>
<template>
  <div class="app-container">
    <!-- 顶部导航栏 -->
    <header class="header">
      <div class="logo">梦之鱼</div>
      <nav class="nav">
        <RouterLink to="/" class="nav-link">首页</RouterLink>
        <DropdownMenu :items="menuItems" />
        <RouterLink to="/about" class="nav-link">关于</RouterLink>
        <!-- <RouterLink to="/about" class="nav-link"></RouterLink> -->
        <RouterLink to="/contact" class="nav-link">联系我们</RouterLink>
      </nav>
    </header>

    <!-- 路由视图 -->
    <main class="content">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
    <RouterView name="footer" />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden; /* 禁止横向滚动 */
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  color: rgb(44, 44, 44);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 1.5rem;
  /* font-weight: bold; */
}

.nav {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: #333;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color,color 0.2s;
}

.nav-link:hover {
  color: #409eff;
}

.nav-link.router-link-active {
  /* background-color: rgba(255, 255, 255, 0.2); */
}

.content {
  flex: 1;
  padding: 20px;
  background-color: #f5f7fa;
  min-height: 0;
}

/* 路由过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
  