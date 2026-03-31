import { createApp } from 'vue'

import { createPinia } from 'pinia'
// import App from './App.vue'
// import MainApp from './task1/MainApp.vue'
import MainApp from './task2/MainApp.vue'

const app=createApp(MainApp)

const pinia = createPinia()

app.use(pinia)

app.mount('#app')