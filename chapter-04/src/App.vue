<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Динамические компоненты</h2>

      <!-- С помощью атрибута ref для html-элемента устанавливается ключ, через который потом можно ссылаться на этот элемент. --> 
      <app-button ref="myBtn" :color="oneColor" @action="active = 'one'">One</app-button>
      <app-button :color="twoColor" @action="active = 'two'">Two</app-button>
      
    </div>

    <!-- запоминание состояния  --> 
    <keep-alive> <component :is="componentName"></component></keep-alive>

  </div>
</template>

<script>
import AppButton from './components/AppButton'
import AppTextOne from './components/AppTextOne'
import AppTextTwo from './components/AppTextTwo'

export default {
  data() {
    return {
      active: 'one'
    }
  },
  mounted() {

    this.$refs.myBtn.btnLog()
  },
  /*  вычисляемые свойства или computed, который во многом аналогичны функциям, но в то же время отличаются от них. */
  computed: {
   
    componentName: {
      get() {
        return 'app-text-' + this.active
      },
      set(value) {
        console.log('componentName', value)
      }
    },
    oneColor() {
      return this.active === 'one' ? 'primary' : ''
    },
    twoColor() {
      return this.active === 'two' ? 'primary' : ''
    }
  },

  /* регистрация компонента */
  components: {AppButton, AppTextOne, AppTextTwo}
}
</script>

<style scoped>

</style>
