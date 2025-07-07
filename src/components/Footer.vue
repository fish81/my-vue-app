<template>
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-brand">
          <div class="footer-logo">梦之鱼</div>
          <div class="footer-desc">让梦想在数字世界畅游</div>
        </div>
        <div class="footer-links">
          <div class="footer-link-group">
            <div class="footer-link-title">快速链接</div>
            <RouterLink to="/" class="footer-link">首页</RouterLink>
            <RouterLink to="/about" class="footer-link">关于</RouterLink>
            <RouterLink to="/products/product1" class="footer-link">产品</RouterLink>
            <RouterLink to="/contact" class="footer-link">联系我们</RouterLink>
          </div>
          <div class="footer-link-group">
            <div class="footer-link-title">联系我们</div>
            <div class="footer-contact">邮箱：info@dreamfish.com</div>
            <div class="footer-contact">电话：400-123-4567</div>
            <div class="footer-contact">地址：上海市浦东新区梦想路88号</div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2023 梦之鱼 | 版权所有</span>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  .footer {
    background: #ffffff;
    color: #858585;
    padding: 40px 0 0 0;
    font-size: 15px;
    letter-spacing: 0.5px;
    box-shadow: 0 -2px 8px rgba(0,0,0,0.04);
  }
  
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 24px;
  }
  
  .footer-brand {
    flex: 1 1 220px;
    margin-bottom: 24px;
  }
  
  .footer-logo {
    font-size: 2rem;
    font-weight: normal;
    letter-spacing: 2px;
    margin-bottom: 8px;
  }
  
  .footer-desc {
    color: #929292;
    font-size: 1rem;
  }
  
  .footer-links {
    display: flex;
    flex: 2 1 400px;
    gap: 48px;
    flex-wrap: wrap;
  }
  
  .footer-link-group {
    min-width: 140px;
    margin-bottom: 16px;
  }
  
  .footer-link-title {
    font-weight: bold;
    margin-bottom: 10px;
    color: #fff;
    font-size: 1.05rem;
  }
  
  .footer-link {
    display: block;
    color: #1f1f1f;
    text-decoration: none;
    margin-bottom: 8px;
    transition: color 0.2s;
    font-size: 0.98rem;
  }
  .footer-link:hover {
    color: #409eff;
  }
  
  .footer-contact {
    color: #1f1f1f;
    margin-bottom: 6px;
    font-size: 0.97rem;
  }
  
  .footer-bottom {
    border-top: 1px solid #ccc;
    margin-top: 32px;
    padding: 16px 0;
    text-align: center;
    color: #b0b8c1;
    font-size: 0.95rem;
    background: ffffff;
  }
  </style>