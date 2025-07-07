import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DropdownMenu from '../DropdownMenu.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: []
})

describe('DropdownMenu', () => {
  const mockItems = [
    {
      label: '测试项目1',
      path: '/test1'
    },
    {
      label: '测试项目2',
      children: [
        {
          label: '子项目1',
          path: '/test2/sub1'
        }
      ]
    }
  ]

  it('正确渲染触发器插槽', () => {
    const wrapper = mount(DropdownMenu, {
      props: {
        items: mockItems
      },
      global: {
        plugins: [router]
      }
    })
    
    expect(wrapper.find('.dropdown-trigger').exists()).toBe(true)
    expect(wrapper.find('.arrow').exists()).toBe(true)
  })
  it('鼠标悬停时显示下拉菜单', async () => {
    const wrapper = mount(DropdownMenu, {
      props: {
        items: mockItems
      },
      global: {
        plugins: [router]
      }
    })
    
    const dropdownMenu = wrapper.find('.dropdown-menu')
    
    // 初始状态下拉菜单应该是隐藏的
    expect(dropdownMenu.attributes('style')).toContain('display: none')
    
    // 触发鼠标悬停事件
    await wrapper.find('.dropdown').trigger('mouseenter')
    expect(dropdownMenu.attributes('style')).not.toContain('display: none')
    
    // 鼠标移出时菜单应该隐藏
    await wrapper.find('.dropdown').trigger('mouseleave')
    expect(dropdownMenu.attributes('style')).toContain('display: none')
  })

  it('正确渲染菜单项和子菜单', () => {
    const wrapper = mount(DropdownMenu, {
      props: {
        items: mockItems
      },
      global: {
        plugins: [router]
      }
    })
    
    const menuItems = wrapper.findAll('.dropdown-item')
    expect(menuItems.length).toBe(2)
    
    // 检查第一个菜单项（无子菜单）
    expect(menuItems[0].find('.dropdown-link').text()).toBe('测试项目1')
    expect(menuItems[0].find('.submenu').exists()).toBe(false)
    
    // 检查第二个菜单项（有子菜单）
    expect(menuItems[1].find('.dropdown-link').text()).toBe('测试项目2')
    expect(menuItems[1].find('.submenu').exists()).toBe(true)
    expect(menuItems[1].find('.submenu-item').text()).toBe('子项目1')
  })
})
