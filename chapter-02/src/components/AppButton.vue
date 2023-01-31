<template>
  <button class="btn" :class="color" @click="$emit('action')">
    <slot />
  </button>
</template>

<script>

export default {

  

  /* Объявление генерируемых событий. Компонент может явно объявить события, которые он будет генерировать, используя опцию :emits */
  emits: ['action'],

  /*
    параметр "props:{}" служит для передачи компоненту извне различные данные, определенные в этом параметре.
    Через props:{} мы можем передать данные от родительского компонента в дочерний. 
  */
  props: {
    color: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'primary', 'danger'].includes(value)
      }
    }
  },
  methods: {
    btnLog() {
      console.log('Button log')
    }
  }
}
</script>

<style scoped>

</style>