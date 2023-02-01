<!-- это компонент:
    компонент - это маленькое Vue приложение и его нужно импортировать, для того чтобы "Vue" знала о нем -его нужно зарегистрировать -->

<template>

    <h2>{{title}}</h2>

</template>


<script>

export default{
    data(){
        return{
            title: 'HELLO, The Header from Data'
        }
    }
}


</script>