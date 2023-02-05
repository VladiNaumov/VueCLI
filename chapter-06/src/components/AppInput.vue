<template>
  <div class="form-control" :class="{invalid: error}">
    <label :for="id">{{ label }}</label>
    <input
        type="text"
        :id="id"
        :placeholder="placeholder"
        :value="value"
        @input="change"
    >
    <small v-if="error">{{ error }}</small>
  </div>
</template>

<script>
export default {
  /*
     emits [' '] оповещение родительского компонента о событие, а родительский компонент будет отлавливать это событие 
     с помощью установки атрибута v-on: "название_события"  и при получении события поизводить определенные действия.
  */
  emits: ['update:value'],

  /*  параметр "props:{}" служит для передачи этому компоненту извне различные данные, определенные в этом параметре. */
  
  props: {
    value: String,
    placeholder: String,
    label: String,
    error: String
  },
  
  methods: {
    change(event) {
      this.$emit('update:value', event.target.value)
    }
  },
  data() {
    return {
      id: 'input-' + Math.random()
    }
  }
}
</script>

<style scoped>

</style>