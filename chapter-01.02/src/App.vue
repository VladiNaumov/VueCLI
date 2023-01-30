<template>
  <div class="container pt-1">

    <div class ="card">

      <h2>NEWS NOW {{ time }}</h2>

      <span>Open: {{ openRate }} | Lukenut: {{ readRate }}</span>

      
      <!-- помещаем  в шаблон компонент TheHeader -->
      <!--<the-header></the-header> -->

      <!-- помещаем  в шаблон компонент AppNews -->
      <app-news 

        v-for="item in news"
        v-bind:key="item.id"
        v-bind:title="item.title"
        v-bind:id="item.id"
        v-bind:isOpen="item.isOpen"
        v-bind:vas-read="item.wasRead"
        
        v-on:open-news="openNews"
        v-on:read-news="readNews"
        v-on:unmark="unreadNews"
                
      ></app-news> 


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
      readRate: 0,
      news:[{
        title:'Президент Турции Тайип Эрдоган заявил, что Анкара может принять решение по членству Финляндии в НАТО', 
        id: 1,
        isOpen: false,  
        wasRead: false 
        },
        {
        title:'Власти США продолжают поддерживать Киев из-за запасов титана',
        id: 2,
        isOpen: false,
        wasRead: false
        } 
    
          ]}
  },
  methods:{
    openNews(){
      
      this.openRate++
    },
    readNews(id){
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = true
      this.readRate++
    },
    unreadNews(id){
      const news = this.news.find(news => news.id === id)
      news.wasRead = false
      this.readRate--
    }
  },

  components:{
    // локальное регистрация компонента 
    'app-news': AppNews,
   
      
  }
    
}


</script>



<style>


</style>
