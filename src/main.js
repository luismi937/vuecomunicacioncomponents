import { createApp } from 'vue'
import App from './App.vue'
import router from './Router.js'

const app = createApp(App)
app.use(router) //  Esto es lo que habilita <RouterLink> y <RouterView>
app.mount('#app')

