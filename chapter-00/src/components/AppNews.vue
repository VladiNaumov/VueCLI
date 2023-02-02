<!-- это компонент:
    компонент - это маленькое Vue приложение и его нужно импортировать, для того чтобы "Vue" знала о нем его нужно зарегистрировать -->

<template>
    <div class="card">
        <!-- вывод значения с помощью интерполяции -->
        <h2>{{title}}</h2>

    </div>

    <HelloVue>

        
    </HelloVue>
    

</template>


<script>

import HelloVue from './AppHello.vue';

export default{
    data(){
        return{
            title: 'The body from AppNews'
        }
    },
    components:{HelloVue}
}


</script>