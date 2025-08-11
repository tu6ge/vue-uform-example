import { createApp } from 'vue'
import App from './App.vue'
import { plugin } from "vue-uform";

createApp(App).use(plugin,{}).mount('#app')
