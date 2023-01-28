<!-- компонент - это маленькое Vue приложение и его нужно импортировать в main.js потом зарегистрировать -->

<template>

    <h2>{{title}}</h2>

</template>


<script>

export default{
    data(){
        return{
            title: 'The Header from Data'
        }
    }
}


</script>