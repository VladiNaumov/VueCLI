<template>
  <button class="btn" :class="color" @click="$emit('action')">

     <!-- через <slot></slot> передаем надписи на кнопках  --> 
      <slot></slot>
  </button>
</template>

<script>
export default {

  /* Объявление генерируемых событий. Компонент может явно объявить события родительского компонента, 
  которые он будет генерировать, используя опцию :emits 
  */

  emits: ['action'],
  /*
    параметр "props:{}" служит для передачи данному компоненту извне различные данные, определенные в этом параметре.
    Через props:{} мы можем передать данные от родительского компонента в дочерний (в данном случае в этот компонент, то есть в компонент AppBotton). 
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