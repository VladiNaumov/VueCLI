<template>
   <!--Также мы можем использовать сокращенный синтаксис для определения обработчиков событий: @click == v-on:-->
  <button class="btn" :class="color" @click="$emit('action')">
        
   <slot> <!-- slots - возможность установить контент по умолчанию -->  </slot>

  </button>
</template>

<script>
import { slotFlagsText } from '@vue/shared';


export default {
    
   /*
     emits [' '] оповещение родительского компонента о событие, а родительский компонент будет отлавливать это событие 
     с помощью установки атрибута v-on: "название_события"  и при получении события поизводить определенные действия. */
    emits: ["action"],

  /*  параметр "props:{}" служит для передачи этому компоненту извне различные данные, определенные в этом параметре. */
    props: {
        color: {
            type: String,
            default: "",
            validator(value) {
                return ["", "primary", "danger"].includes(value);
            }
        }
    },
    methods: {
        btnLog() {
            console.log("Button log");
        }
    },
    /* регистрация компонента   */
    components: { slotFlagsText }
}
</script>

<style scoped>

</style>