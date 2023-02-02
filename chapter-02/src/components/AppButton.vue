<template>
   <!--Также мы можем использовать сокращенный синтаксис для определения обработчиков событий: @click == v-on:-->
  <button class="btn" :class="color" @click="$emit('action')">
        
   <slot> <!-- slots - возможность установить контент по умолчанию -->  </slot>

  </button>
</template>

<script>
import { slotFlagsText } from '@vue/shared';


export default {
    /* Объявление генерируемых событий. Компонент может явно объявить события, которые он будет генерировать, используя опцию :emits */
    emits: ["action"],
  /*
    параметр "props:{}" служит для передачи данному компоненту извне различные данные, определенные в этом параметре.
    Через props:{} мы можем передать данные от родительского компонента в дочерний (в данном случае в этот компонент, то есть в компонент AppBotton). 
  */
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