import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import toast from '@/components/common/toast/index'
import FastClick from 'fastclick'
import lazyPlugin from 'vue3-lazy'

FastClick.attach(document.body)

const app = createApp(App)
app.use(router)
app.use(store)
app.use(toast)
app.use(lazyPlugin, {
  loading: require('@/assets/Img/common/placeholder.png'),
  error: 'error.png'
})
app.mount('#app')
