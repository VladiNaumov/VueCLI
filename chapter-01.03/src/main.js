import { createApp } from 'vue'
import App from './App.vue'

//import AppButton from './AppButton'
import'./css/theme.css'




/* main.js точка входа в приложение  */

const app = createApp(App)

// (global) глобальная регистрастрация компонента AppButton
//app.component('app-button', AppButton)



app.mount('#app')




