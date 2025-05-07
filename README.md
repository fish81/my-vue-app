# 依赖库说明

| 库名 | 作用 | 官网 | 在本项目中的位置 | 使用方式 |
|------|------|------|------------------|----------|
| vue | 核心框架 | https://vuejs.org/ | 全局，src/ 目录下所有 Vue 组件 | `import { ref } from 'vue'`，`.vue` 文件模板 |
| vue-router | 路由管理 | https://router.vuejs.org/ | src/router/index.ts，App.vue | `import { createRouter } from 'vue-router'`，`<RouterView />` |
| pinia | 状态管理 | https://pinia.vuejs.org/ | 可用于 src/store/（如有），未必已用 | `import { defineStore } from 'pinia'` |
| nprogress | 路由/数据加载进度条 | https://github.com/rstacruz/nprogress | src/router/index.ts，main.ts | `import NProgress from 'nprogress'` |
| @vue/test-utils | Vue 单元测试工具 | https://test-utils.vuejs.org/ | 测试相关（如 tests/unit/） | `import { mount } from '@vue/test-utils'` |
| vitest | 单元测试框架 | https://vitest.dev/ | 测试相关 | `import { describe, it, expect } from 'vitest'` |
| @playwright/test | 端到端测试 | https://playwright.dev/ | 测试相关 | `import { test, expect } from '@playwright/test'` |
| eslint, eslint-plugin-vue, @vue/eslint-config-typescript, @vue/eslint-config-prettier, @vitest/eslint-plugin, eslint-plugin-playwright | 代码规范与风格检查 | https://eslint.org/ | 根目录及 .eslintrc 配置 | `npm run lint` |
| prettier | 代码格式化 | https://prettier.io/ | 根目录及 .prettierrc 配置 | `npm run format` |
| typescript, @types/node, @types/jsdom, @vue/tsconfig, @tsconfig/node22 | TypeScript 支持与类型声明 | https://www.typescriptlang.org/ | 全局 | `.ts`、`.vue` 文件，类型提示 |
| vite | 构建工具 | https://vitejs.dev/ | 根目录，项目启动/打包 | `npm run dev`，`npm run build` |
| @vitejs/plugin-vue | Vite 的 Vue 插件 | https://vitejs.dev/ | vite.config.js 插件 | 自动处理 .vue 文件 |
| vite-plugin-vue-devtools | Vue Devtools 支持 | https://github.com/webfansplz/vite-plugin-vue-devtools | vite.config.js 插件 | 开发调试增强 |
| npm-run-all2 | 脚本并行/串行运行工具 | https://github.com/mysticatea/npm-run-all | package.json scripts | `npm run build` 等复合命令 |
| jiti | 动态 JS/TS 运行 | https://github.com/unjs/jiti | 依赖于某些工具链 | 内部调用 |
| jsdom | Node 环境下的 DOM 实现 | https://github.com/jsdom/jsdom | 测试相关 | `import { JSDOM } from 'jsdom'` |

> 说明：
> - “在本项目中的位置”指常见的使用文件或目录，部分依赖可能未直接用到但为工具链依赖。
> - “使用方式”给出常见的 import 或命令行用法，具体可查阅各自官网。
