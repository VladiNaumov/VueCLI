import {createApp} from 'vue'
import App from './App.vue'
import './css/theme.css'



/* main.js точка входа в приложение здесь подключен глобально компонент "app.vue" с которого начинается выполнение вашего приложения */

const app = createApp(App)

/* (global) глобальная регистрастрация компонента TheHeader */
   //app.component('the-header', TheHeader)

app.mount('#app')
