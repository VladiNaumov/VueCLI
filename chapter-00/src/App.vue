<template>
  <div class="container pt-1">

    <div class ="card">

      <h2>NEWS NOW {{ now }}</h2>

      
      <!-- помещаем  в шаблон компонент TheHeader -->
      <!--<the-header></the-header> -->

      <!-- помещаем  в шаблон компонент AppNews -->
      <app-news 

        v-for="item in news"
        v-bind:key="item.id"
        v-bind:title="item.title"
        v-bind:id="item.id"
        v-bind:isOpen="item.isOpen"
  
      ></app-news> 

    </div>

     
  </div>
  
</template>

<script>
 
import AppNews from './AppNews.vue';

export default {
  data(){
    return{
      now: new Date().toLocaleDateString(),
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
  components:{
    // локальное регистрация компонента 
    'app-news': AppNews
      
  }
    
}


</script>



<style>


</style>
