<template>
  <div class="container pt-1">

    <div class ="card">

      <h2>HELLO MAAILMA {{ now }}</h2>

      <!-- помещаем  в шаблон компонент TheHeader 
      <the-header></the-header> 

      <the-header></the-header> 
      -->

    </div>

    <div class ="card" v-for="item in news" :key="item">
      <h3>{{ item }}</h3>
    </div>


  </div>
  
</template>

<script>

export default {
  data(){
    return{
      now: new Date().toLocaleDateString(),
      news:['Uutiset 1', 'UUtiset 2']
    }
  }
    
}


</script>



<style>


</style>
