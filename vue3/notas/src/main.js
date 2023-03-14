import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'


createApp(App).use(store).use(router).use(VueAxios,axios).mount('#app')

import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/js/bootstrap.min"
