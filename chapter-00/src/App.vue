<!-- это главный компонент:  -->

<template>
  <div class="container pt-1">
    <div class ="card">

      <!-- вывод значения с помощью интерполяции -->
      <h1>{{title}}</h1>
      
     <AppBody v-bind:text="appBody"></AppBody>

      <HelloVue> </HelloVue>
     
    </div>
     
  </div>
  
</template>


<script>

import AppBody from './components/AppBody.vue';
import HelloVue from './components/AppHello.vue';

export default{
    data(){
        return{
            title: "The Header",
            appBody: "Test.. test... test ---->   Hello, Im AppBody"
        }
    },
    
    components:{AppBody,  HelloVue}
}

</script>

<style scoped>
 
</style>
