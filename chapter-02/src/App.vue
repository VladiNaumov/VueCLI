<template>
  <div class="container pt-1">
    <div class="card">
      <!-- вывод значения с помощью интерполяции -->
      <h2>NEWS NOW {{ now }}</h2>
      <span>Открыто: <strong>{{ openRate }}</strong> | Прочитано: <strong>{{ readRate }}</strong></span>
      
    </div>

    <!-- помещаем  в шаблон компонент AppNews -->
    <app-news
        v-for="item in news"
        v-bind:key="item.id"
        v-bind:title="item.title"
        v-bind:id="item.id"
        v-bind:is-open="item.isOpen"
        v-bind:was-read="item.wasRead"
        
        v-on:open-news="openNews"
        v-on:read-news="readNews"
        v-on:unmark="unreadNews"
    ></app-news>

    <!--Для обработки ввода пользователя и событий элементов html в Vue 3 применяется директива v-on,
       после которой через двоеточие указывается тип обрабатываемого события: -->

  </div>

</template>

<script>
  import AppNews from './components/AppNews'

  export default {

    data() {
      return {
        now: new Date().toLocaleDateString(),
        openRate: 0,
        readRate: 0,
        news: [
          {
            title: 'Правительство РФ приняло постановление, по которому с 1 февраля часть социальных выплат проиндексируют на 11,9%.',
            id: 1,
            isOpen: false,
            wasRead: false
          },
          {
            title: 'Историей, произошедшей с ним на днях в аэропорту Хельсинки, поделился Денис из Санкт-Петербурга.',
            id: 2,
            isOpen: false,
            wasRead: false
          }
        ]
      }
    },

    /*
    Обычно данные из родительского компонента в дочерний передаются с помощью входных параметров. 
    Но представьте структуру, где есть несколько вложенных компонентов и требуется передать что-то 
    из родительского компонента в глубоко вложенный дочерний. Придётся передавать входные параметры 
    вниз по всей цепочке компонентов, что иногда может быть очень неудобно.

    В таких случаях можно использовать пару provide и inject. 
    Родительские компоненты могут служить провайдерами зависимостей для всех своих потомков, 
    независимо от того, насколько глубокая иерархия компонентов. Работа этой возможности состоит из двух частей: 
    родительский компонент имеет опцию provide для предоставления данных, а дочерний компонент имеет опцию inject 
    для внедрения и использования этих данных. 
    */

    provide() {
      return {
        title: 'Список всех новостей',
        news: this.news
      }
    },

    methods: {
      openNews() {
        this.openRate++
      },
      readNews(id) {
        const idx = this.news.findIndex(news => news.id === id)
        this.news[idx].wasRead = true
        this.readRate++
      },
      unreadNews(id) {
        const news = this.news.find(news => news.id === id)
        news.wasRead = false
        this.readRate--
      }
    },

    /* локальное регистрация компонента */
    components:{AppNews}
  }
</script>

<style scoped>
  h2 {
    color: blue;
  }
</style>
