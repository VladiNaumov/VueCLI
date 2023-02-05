<template>
  <div class="container pt-1">
    <div class ="card">
       <!-- вывод значения с помощью интерполяции -->
      <h2>NEWS NOW {{ time }}</h2> 
      <span>Открыто: <strong>{{ openRate }}</strong></span>

      <!-- помещаем  в шаблон компонент AppNews -->
      <app-news 

        v-for="item in news"

        v-bind:key="item.id"
        v-bind:title="item.title"
        v-bind:id="item.id"
        v-bind:isOpen="item.isOpen"
        
        v-on:open-news="openRate++"
                
      ></app-news> 
        <!--
          Для обработки ввода пользователя и событий элементов html в Vue 3 применяется директива v-on,
          после которой через двоеточие указывается тип обрабатываемого события: 
        -->

    </div>
     
  </div>
  
</template>

<script>
 
import AppNews from './components/AppNews.vue';

export default {
  data(){
    return{
      time: new Date().toLocaleDateString(),
      openRate: 0,
      news:[{
        title:'Президент Турции Тайип Эрдоган заявил, что Анкара может принять решение по членству Финляндии в НАТО', 
        id: 1,
        isOpen: false   
        },
        {
        title:'Власти США продолжают поддерживать Киев из-за запасов титана',
        id: 2,
        isOpen: false
        } 
    
          ]}
  },

  // локальное регистрация компонента
  components:{AppNews}
}
</script>

<style scoped>
  h2 {
    color: blue;
  }
</style>
