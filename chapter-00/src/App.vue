<!-- это главный компонент:  -->


<template>
  <div class="container pt-1">

    <div class ="card">

      <h1>{{title}}</h1>

    </div>
     
  </div>
  
</template>


<script>

export default{
    data(){
        return{
            title: 'The Header from App.vue'
        }
    }
}


</script>


<style>


</style>
