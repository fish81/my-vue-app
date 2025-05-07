import './assets/main.css'
import './assets/nprogress-custom.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import directives from './utils/directives'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(directives)

app.mount('#app')
