import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import toast from '@/components/common/toast/index'
import FastClick from 'fastclick'

FastClick.attach(document.body)

const app = createApp(App)
app.use(router)
app.use(store)
app.use(toast)
app.mount('#app')
