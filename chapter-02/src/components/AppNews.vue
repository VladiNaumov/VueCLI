<!-- это компонент:
    компонент - это маленькое Vue приложение и его нужно импортировать, для того чтобы "Vue" знала о нем его нужно зарегистрировать -->

<template>
  <div class="card">
     <!-- вывод значения с помощью интерполяции -->
    <h3>{{ title }}</h3>

    <!--Также мы можем использовать сокращенный синтаксис для определения обработчиков событий: @action == v-on:-->
    <app-button @action="open">{{ isNewsOpen ? 'Закрыть' : 'Открыть' }}</app-button>

    <app-button color="danger" v-if="wasRead" @action="$emit('unmark', id)" >Отметить непрочитанной</app-button>

    <div v-if="isNewsOpen">
      
      <p>
        В этой статье компонент Vue.js будет использоваться для 
        добавления функции комментариев на страницу сведений о блоге, 
        в основном для достижения следующих функций.
      </p>

      <app-button v-if="!wasRead" color="primary" @action="mark">Прочесть новость</app-button>

      <app-news-list></app-news-list>
      
    </div>
  </div>
</template>

<script>

import AppButton from './AppButton'
import AppNewsList from './AppNewsList'

export default {

   /*
    параметр "props:{}" служит для передачи данному компоненту извне различные данные, определенные в этом параметре.
    Через props:{} мы можем передать данные от родительского компонента в дочерний (в данном случае в этот компонент, то есть в компонент AppBotton). 
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

  /*
     emits [' '] оповещение родительского компонента о событие, а родительский компонент будет отлавливать это событие 
     с помощью установки атрибута v-on: "название_события"  и при получении события поизводить определенные действия. */
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
      $emit (' ') оповещение родительского компонента о событие,
      а родительский компонент будет отлавливать это событие с помощью установки атрибута v-on: "название_события"
      и при получении события поизводить определенные действия.
    */
      
      this.$emit('read-news', this.id)
    },

    // unmark() {
    //   this.$emit('unmark', this.id)
    // }
  },

  /* регистрация компонента   */
  components: {AppButton, AppNewsList}
}
</script>