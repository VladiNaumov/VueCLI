<!-- это компонент:
    компонент - это маленькое Vue приложение и его нужно импортировать в main.js потом зарегистрировать 
    для того чтобы "Vue" знала о нем его нужно зарегистрировать -->

<template>
    <div class="card" >
        <h3>{{ title }}</h3>
        <button class="btm" @click="open">
            {{ isNewOpen ? 'Closed' : 'Open' }}
        </button>

        <button class="btn danger" v-if="wasRead" @click="unmark" > 
            отметить как непрочитанное 
        </button>

        <div v-if="isNewOpen">
            <hr />
            <p> В этой статье компонент Vue.js будет использоваться для 
                добавления функции комментариев на страницу сведений о блоге, 
                в основном для достижения следующих функций
            </p>
            <button v-if="!wasRead" class="btm primary" @click="mark">прочесть новость</button>
        </div>

    </div>
</template>
    
    
<script>
    export default{
        /*
           параметр "props:{}" служит для передачи компоненту извне различные данные, определенные в этом параметре.
           Через props:{} мы можем передать данные от родительского компонента в дочерний. 
        */
        props:{

            wasRead: Boolean,

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

        /*     */

        emits: {
            'open-news': null,
            'read-news': null,
             unmark: null
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
                $emit ('  ') оповещение родительского компонента о событие,
                а родительский компонент будет отлавливать это событие с помощью установки атрибута v-on: "название_события"
                 и при получении события поизводить определенные действия.
                 */

                    this.$emit('open-news') 
                }
               
            },

            mark(){
                this.isNewOpen = false
                this.$emit('read-news', this.id)
            },

            unmark(){
                this.$emit('unmark', this.id)
            }


        }
    }
    
    
</script>