<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
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

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// 监听滚动
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="app-container">
    <!-- 顶部导航栏 -->
    <header class="header" :class="{ 'header-scrolled': isScrolled }">
      <div class="logo">
        <router-link to="/" style="text-decoration: none;">
          <!-- <img src="https://image.yumeng.icu/images/logo.png" alt="logo" class="logo-img"> -->
          <span class="logo-text">梦之鱼</span>
        </router-link>
      </div>
      
      <!-- 汉堡菜单按钮 -->
      <button class="mobile-menu-button" @click="toggleMobileMenu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <!-- 导航菜单 -->
      <nav class="nav" :class="{ 'nav-mobile-open': isMobileMenuOpen }">
        <RouterLink to="/" class="nav-link" @click="closeMobileMenu">首页</RouterLink>
        <DropdownMenu :items="menuItems" />
        <RouterLink to="/console" class="nav-link" @click="closeMobileMenu">控制台</RouterLink>
        <RouterLink to="/about" class="nav-link" @click="closeMobileMenu">关于</RouterLink>
        <RouterLink to="/contact" class="nav-link" @click="closeMobileMenu">联系我们</RouterLink>
      </nav>
    </header>

    <!-- 路由视图包装器 -->
    <div class="view-wrapper" @click="closeMobileMenu">
      <transition name="fade" mode="out-in">
        <div :key="$route.fullPath" class="view-container">
          <main class="content">
            <RouterView />
          </main>
          <RouterView name="footer" />
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: #f8f9fa;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  color: rgb(44, 44, 44);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  background-color: transparent;
  border: none;
}

.header-scrolled {
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  /* border-bottom: 1px solid #e0e0e0; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 1.5rem;
  z-index: 2;
}

.logo-text {
  font-size: 1.5rem;
  color: #333;
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
  transition: all 0.2s;
}

.nav-link:hover {
  color: #409eff;
}

.nav-link.router-link-active {
  color: #409eff;
}

.view-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
}

.view-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding: 20px;
  min-height: 0;
  background-color: transparent;
}

/* 移动端菜单按钮样式 */
.mobile-menu-button {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 2;
}

.hamburger-line {
  width: 100%;
  height: 2px;
  background-color: #333;
  transition: all 0.3s ease;
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

/* 移动端适配 */
@media (max-width: 768px) {
  .mobile-menu-button {
    display: flex;
  }

  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: #fff;
    flex-direction: column;
    padding: 80px 20px 20px;
    transition: right 0.3s ease;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  .nav-mobile-open {
    right: 0;
  }

  .nav-link {
    padding: 15px 10px;
    border-bottom: 1px solid #eee;
    width: 100%;
  }

  .nav-link:last-child {
    border-bottom: none;
  }

  .header {
    background-color: rgba(255, 255, 255, 0.98); /* 移动端始终显示背景 */
    backdrop-filter: blur(10px);
  }
}

/* 适配超小屏幕 */
@media (max-width: 320px) {
  .header {
    padding: 0 10px;
  }

  .logo {
    font-size: 1.2rem;
  }

  .content {
    padding: 10px;
  }
}
</style>
  