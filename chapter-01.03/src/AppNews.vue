<!-- это компонент:
    компонент - это маленькое Vue приложение и его нужно импортировать в main.js потом зарегистрировать 
    для того чтобы "Vue" знала о нем его нужно зарегистрировать -->

<template>
    <div class="card" >
        <h3>{{ title }}</h3>

        <app-button @action="open" v-bind:text="isNewOpen ? 'Closed' : 'Open'"></app-button>

        <app-button  text="отметить как непрочитанное" color="danger" v-if="wasRead" @action="$emit('unmark', id)"></app-button>

        <div v-if="isNewOpen">
            <hr />
            <p> В этой статье компонент Vue.js будет использоваться для 
                добавления функции комментариев на страницу сведений о блоге, 
                в основном для достижения следующих функций
            </p>
            <app-button v-if="!wasRead" class="btm primary" @click="mark" text="прочесть новость"></app-button>
        </div>

    </div>
</template>
    
    
<script>
    export default{
        /*
           параметр "props:{}" служит для передачи компоненту извне различные данные, определенные в этом параметре.
           Через props:{} мы можем передать данные от родительского компонента в дочерний. 
        */

  props: {
    wasRead: Boolean,
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(value) {
        return value === true || value === false
      }
    }
  },
  emits: {
    'open-news': null,
    'read-news'(id) {
      if (id) {
        return true
      }
      console.warn('Нет параметра id для emit read-news')
      return false
    },
    unmark: null
  },
  data() {
    return {
      isNewsOpen: this.isOpen
    }
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('open-news')
      }
    },
    mark() {
      this.isNewsOpen = false

      /*
        $emit ('  ') оповещение родительского компонента о событие,
        а родительский компонент будет отлавливать это событие с помощью установки атрибута v-on: "название_события"
        и при получении события поизводить определенные действия.
        */

      this.$emit('read-news', this.id)
    },
    // unmark() {
    //   this.$emit('unmark', this.id)
    // }
  },
  components: {AppButton, AppNewsList}
    }
    
    
</script>