<template>
  <div class="container">
    <!--отменяем обычное поведение html т.е данная страница не будет перегружаться-->
    <form class="card" @submit.prevent="createPersen">
      <h2>Работа с базой данных</h2>

      <div class="form-control">
        <label for="name">введите имя</label>
        <!--трекаем данный imput-->
        <input type="text" id="name" v-model.trim="name">

      </div>
        <!--если name ничего не писали т.е name равно пустой строке :disamble = true то кнопка будет выключена-->
      <button class="btm primary" :disabled="name.length ===0">создать человека</button>
    </form>

  </div>
</template>

<script>
export default {
  data(){

    return{
      name:''
    } 
  }, methods:{
      createPersen(){
        // this.name 05.01
      }
  }
}
</script>

<style>

</style>
