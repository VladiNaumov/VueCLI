<template>
  <button class="btn" :class="color" @click="$emit('action')">

     <!-- через <slot></slot> передаем надписи на кнопках  --> 
      <slot></slot>
  </button>
</template>

<script>
export default {

  /*
     emits [' '] оповещение родительского компонента о событие, а родительский компонент будет отлавливать это событие 
     с помощью установки атрибута v-on: "название_события"  и при получении события поизводить определенные действия.
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