<script setup lang="ts">
import { ref } from 'vue'

const features = [
  {
    title: '数据库',
    description: '强大的 PostgreSQL 数据库支持，为您的应用提供可靠的数据存储服务。',
    icon: '🗄️'
  },
  {
    title: '认证系统',
    description: '内置用户认证和授权系统，轻松实现用户管理和安全控制。',
    icon: '🔐'
  },
  {
    title: '实时数据',
    description: '支持实时数据同步，打造流畅的多人协作体验。',
    icon: '⚡'
  },
  {
    title: '文件存储',
    description: '安全可靠的文件存储服务，支持图片、视频等各类文件的管理。',
    icon: '📁'
  }
]

const companies = [
  '阿里巴巴', '腾讯', '百度', '字节跳动', '美团', '京东'
]
</script>

<template>
  <div class="home">
    <!-- 主标题区域 -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="main-title">
          <span class="gradient-text">周末完成开发</span>
          <br>
          <span>支持百万级扩展</span>
        </h1>
        <p class="subtitle">
          梦之鱼是新一代开发平台，提供完整的后端基础设施。
          <br>
          从数据库到认证，从API到存储，一站式解决您的所有需求。
        </p>
        <div class="cta-buttons">
          <button class="btn primary">开始使用</button>
          <button class="btn secondary">预约演示</button>
        </div>
      </div>
    </section>

    <!-- 客户logo展示 -->
    <section class="trusted-by">
      <p class="section-title">值得信赖的企业级服务</p>
      <div class="company-logos">
        <div v-for="company in companies" :key="company" class="company-logo">
          {{ company }}
        </div>
      </div>
    </section>

    <!-- 特性展示 -->
    <section class="features">
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  padding: 0;
  overflow-x: hidden;
}

.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.main-title {
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-weight: 800;
}

.gradient-text {
  background: linear-gradient(45deg, #3ECF8E, #409eff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.btn {
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn.primary {
  background: #3ECF8E;
  color: white;
  border: none;
}

.btn.primary:hover {
  background: #35b67c;
  transform: translateY(-2px);
}

.btn.secondary {
  background: white;
  color: #333;
  border: 1px solid #ddd;
}

.btn.secondary:hover {
  border-color: #3ECF8E;
  color: #3ECF8E;
  transform: translateY(-2px);
}

.trusted-by {
  padding: 4rem 2rem;
  text-align: center;
  background: #fff;
}

.section-title {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.company-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.company-logo {
  padding: 1rem 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  color: #666;
  font-weight: 500;
}

.features {
  padding: 4rem 2rem;
  background: #f8f9fa;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  /* transform: translateY(-5px); */
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .company-logos {
    gap: 1rem;
  }

  .company-logo {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 2rem;
  }

  .hero {
    padding: 1rem;
  }

  .features {
    padding: 2rem 1rem;
  }
}
</style>