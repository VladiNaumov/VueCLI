<!-- это компонент:
    компонент - это маленькое Vue приложение и его нужно импортировать, для того чтобы "Vue" знала о нем его нужно зарегистрировать -->

<template>
    <div class="card" >
        <!-- вывод значения с помощью интерполяции -->
        <h3>{{ title }}</h3>
         <!--Также мы можем использовать сокращенный синтаксис для определения обработчиков событий: @action == v-on:-->
        <button class="btm" @click="open">{{ isNewOpen ? 'Закрыть' : 'Открыть' }}</button>

        <div v-if="isNewOpen">
           <p>
            В этой статье компонент Vue.js будет использоваться для 
            добавления функции комментариев на страницу сведений о блоге, 
            в основном для достижения следующих функций.
          </p>
        </div>

    </div>
</template>
    
    
<script>
    export default{
    /*
    параметр "props:{}" служит для передачи данному компоненту извне различные данные, определенные в этом параметре.
    Через props:{} мы можем передать данные от родительского компонента в дочерний (в данном случае в этот компонент, то есть в компонент AppBotton). 
  */
        props:{

            title: {
                type: String,
                required: true
            },
            id:{
                type: Number,
                required: true
            },
            /*
            isOpen: {
                type: Boolean,
                required: false,
                default: false,
                validator(value){
                    console.log(value)
                    return value === true || value === false
                }
            }
            */
        },

        data(){
            return{
              isNewOpen: this.isOpen
            }
        },
        methods:{
            open(){
                this.isNewOpen =!this.isNewOpen
                if(this.isNewOpen){

             /*
                $emit (' ') оповещение родительского компонента о событие,
                а родительский компонент будет отлавливать это событие с помощью установки атрибута v-on: "название_события"
                 и при получении события поизводить определенные действия.
             */
                    this.$emit('open-news') 
                }
            }
        }
    }
</script>