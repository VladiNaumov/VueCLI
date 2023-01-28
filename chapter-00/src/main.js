import { createApp } from 'vue'
import App from './App.vue'
import TheHeader from './TheHeader'
import'./theme.css'



/* main.js точка входа в приложение  */

const app = createApp(App)

// global регистрастрация 
app.component('the-header', TheHeader)

app.mount('#app')
