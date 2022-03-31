import Toast from "./Toast.vue";
import { createApp } from "vue";

const component = {
  install(app){
    const toastContructor = createApp(Toast)
    const toast = toastContructor.mount(document.createElement('div'))
    document.body.appendChild(toast.$el)    
    app.config.globalProperties.$toast = toast
  }
}

export default component