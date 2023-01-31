import { createApp} from 'vue'
import App from './App.vue'
import './css/theme.css'



/* main.js точка входа в приложение  */

const app = createApp(App)

/* (global) глобальная регистрастрация компонента HelloWorld */
   //app.component('hello-World', HelloWorld)

app.mount('#app')