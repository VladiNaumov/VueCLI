<!-- это главный компонент:  -->

<template>
  <div class="container pt-1">
    <div class ="card">

      <h1>{{title}}</h1>
      
      
      <AppNews>

      </AppNews>
      
      
      <HelloVue>
        
      </HelloVue>
      

    </div>
     
  </div>
  
</template>


<script>

import AppNews from './components/AppNews.vue';
import HelloVue from './components/AppHello.vue';

export default{
    data(){
        return{
            title: 'The Header from App.vue'
        }
    },
    
    components:{AppNews,  HelloVue}
}

</script>

<style scoped>
 
</style>
