import { createApp } from 'vue'
import './style/style.scss'
import './style/reset.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router/index'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.config.globalProperties.$router = router
app.use(router)
app.use(ElementPlus)
app.mount('#app')
