import { createApp } from 'vue'
import App from './App.vue'
import TheHeader from './components/TheHeader'
import'./css/theme.css'




/* main.js точка входа в приложение  */

const app = createApp(App)

// (global) глобальная регистрастрация компонента TheHeader
app.component('the-header', TheHeader)



app.mount('#app')
