# VueCLI


Работа с Vue CLI 
src/chapter-00

Создание компонентов. 

src/chapter-01: project "NEWS NOW" START

src/chapter-02: project "NEWS NOW" FINISHED

src/chapter-03:  slots - возможность установить контент по умолчанию

src/chapter-04:  Динамические компоненты

Работа с элементами формы в Vue

src/chapter-05: создание формы (в одном компоненте App.vue) Basic

src/chapter-06: создание формы (использование подхода компоненты) Medium

Vue и работа с HTTP.

src/chapter-07: 
Vue работа с сервером и базой данных. Работаем  с REST API. Пример использования  метода  "fetch", библиотека  "axios", работа с асинхронными данными.


Миксины, директивы и плагины.

src/chapter-00 
В блоке вы узнаете про более продвинутые вещи, которые есть во Vue. Мы подробно разберем как и зачем используются миксины. Дальше мы создадим 2 собственные директивы, где на практике посмотрим, какой у них есть функционал. Вы узнаете как работают плагины на практике: мы с нуля создадим мультиязычный сайт. И последним примером будет новая возможность teleport. Мы создадим компонент модального окна.

Vue Router.

src/chapter-00 
Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.

Vuex - Работа с данными.

src/chapter-00 
В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.

Работа с Composition API.

src/chapter-00 
Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.

Vue на TypeScript.

src/chapter-00 
Vue 3 полностью переписан на TypeScript и он обладает потрясающей поддержкой этого языка. В этом исключительно практическом блоке вы узнаете, как начать работать с TypeScript и мы разберем несколько новых примеров с Composition API, типизацией и асинхронной работой компонентов с Suspense.

Практика. Создание приложения.

src/chapter-00 
В этом блоке мы напишем целое приложение с нуля, где соединим все те знания, которые получили на протяжении курса. Это будет полноценное приложение с базой данных, авторизацией и админкой.


/* проверка версии node */
node -v

/* проверка версии npm */
npm -v

/* install vue.js */
npm install -g @vue/cli

/* проверка версии vue */
vue -V

/* создание проекта под именем chapter-00 */
vue create chapter-00 

- manually select feature
- Babel (компилятор), CSS Pre-processor, LInter/Formatter (если нужен).
- 3.x (Preview)
- Sass/SCSS (with node-sass)
- ESLint + Standard config
- Lint and fix on commit
- In dedicated config files
- No


cd chapter-00

npm run serve

/* когда зависимости не подгружены */
npm install 