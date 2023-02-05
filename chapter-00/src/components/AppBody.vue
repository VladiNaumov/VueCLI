<!-- это компонент:
    компонент - это маленькое Vue приложение и его нужно импортировать, для того чтобы "Vue" знала о нем его нужно зарегистрировать -->

<template>
    <div class="card">
        <!-- вывод значения с помощью интерполяции -->
        
        <h1>{{ title }}</h1>

        <p>{{ text }}</p>
            
            
    </div>

     <div>
        <HelloVue>

        </HelloVue>

    </div>
    
</template>


<script>

import HelloVue from './AppHello.vue';

export default{
    props:{
        text: String,
              
    },

    
    data(){
        return{
            title: 'The body'
        }
    },
    

    components:{HelloVue}
}

</script>