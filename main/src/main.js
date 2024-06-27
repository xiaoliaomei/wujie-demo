import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Wujie from "wujie-vue3" //引入一下对应的框架

const app = createApp(App)
app.use(Wujie)
app.mount('#app')
