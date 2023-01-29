<!-- это компонент:
    компонент - это маленькое Vue приложение и его нужно импортировать в main.js потом зарегистрировать 
    для того чтобы "Vue" знала о нем его нужно зарегистрировать -->

<template>
    <div class="card" >
        <h3>{{ title }}</h3>
        <button class="btm" @click="isOpen = !isOpen">открыть</button>
        <p v-if="isOpen">В этой статье компонент Vue.js будет использоваться для 
            добавления функции комментариев на страницу сведений о блоге, 
            в основном для достижения следующих функций
        </p>

    </div>
</template>
    
    
<script>
    export default{

        // Каждый компонент определяет параметр props, через который мы можем передать компоненту извне различные данные
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
              isOpen: false
            }
        }
    }
    
    // 39:44
</script>