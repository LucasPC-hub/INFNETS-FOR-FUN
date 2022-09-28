import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import data from './data.js'
import App from './App.vue'
import routes from "@/routes";

const router = createRouter({
    history: createWebHistory(),
    routes,
})


const app = createApp(App)
app.use(router, data)
app.mount('#app')
