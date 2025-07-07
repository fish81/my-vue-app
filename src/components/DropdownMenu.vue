<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface MenuItem {
  label: string
  path?: string
  children?: MenuItem[]
}

const props = defineProps<{
  items: MenuItem[]
}>()

const isOpen = ref(false)
const isMobile = ref(false)

// 检查是否为移动端
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

// 点击外部关闭菜单
const handleClickOutside = (event: MouseEvent) => {
  const dropdown = document.querySelector('.dropdown')
  if (dropdown && !dropdown.contains(event.target as Node)) {
    isOpen.value = false
  }
}

// 切换菜单状态
const toggleMenu = () => {
  if (isMobile.value) {
    isOpen.value = !isOpen.value
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div 
    class="dropdown"
    :class="{ 'is-mobile': isMobile }"
    @mouseenter="!isMobile && (isOpen = true)"
    @mouseleave="!isMobile && (isOpen = false)"
    @click="toggleMenu"
  >
    <div class="dropdown-trigger">
      <slot name="trigger">
        <span>产品</span>
        <span class="arrow" :class="{ 'is-open': isOpen }">▼</span>
      </slot>
    </div>

    <transition name="dropdown">
      <div v-show="isOpen" class="dropdown-menu">
        <div 
          v-for="(item, index) in items" 
          :key="index"
          class="dropdown-item"
          :class="{ 'has-children': item.children }"
        >
          <RouterLink 
            v-if="item.path" 
            :to="item.path"
            class="dropdown-link"
          >
            {{ item.label }}
          </RouterLink>
          <span v-else class="dropdown-link">{{ item.label }}</span>

          <!-- 子菜单 -->
          <div v-if="item.children" class="submenu">
            <RouterLink
              v-for="(child, childIndex) in item.children"
              :key="childIndex"
              :to="child.path || ''"
              class="submenu-item"
            >
              {{ child.label }}
            </RouterLink>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 16px;
  cursor: pointer;
  color: #333333;
  transition: all 0.3s ease;
}

.arrow {
  font-size: 10px;
  margin-left: 4px;
  transition: transform 0.3s ease;
}

.arrow.is-open {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 160px;
  background: rgba(255, 255, 255, 0.98);
  border-radius: 4px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 4px 0;
  margin-top: 8px;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.dropdown-item {
  position: relative;
}

.dropdown-link {
  display: block;
  padding: 8px 16px;
  color: #333;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.dropdown-link:hover {
  background-color: #f5f7fa;
  color: #409eff;
}

/* 子菜单样式 */
.submenu {
  position: absolute;
  left: 100%;
  top: 0;
  min-width: 160px;
  background: rgba(255, 255, 255, 0.98);
  border-radius: 4px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 4px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateX(10px);
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
}

.dropdown-item:hover .submenu {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
}

.submenu-item {
  display: block;
  padding: 8px 16px;
  color: #333;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.submenu-item:hover {
  background-color: #f5f7fa;
  color: #409eff;
}

/* 过渡动画 */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translate(-50%, -10px);
}

/* 移动端样式 */
@media (max-width: 768px) {
  .dropdown {
    width: 100%;
  }

  .dropdown-trigger {
    width: 100%;
    justify-content: space-between;
    padding: 15px 10px;
    border-bottom: 1px solid #eee;
  }

  .dropdown-menu {
    position: static;
    transform: none;
    width: 100%;
    margin-top: 0;
    box-shadow: none;
    background: transparent;
    padding: 0;
  }

  .dropdown-item {
    border-bottom: 1px solid #eee;
  }

  .dropdown-link {
    padding: 12px 20px;
  }

  .submenu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    background: #f5f7fa;
    margin-left: 20px;
    border-radius: 0;
  }

  .submenu-item {
    padding: 12px 20px;
  }

  /* 移动端动画 */
  .dropdown-enter-from,
  .dropdown-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style> 