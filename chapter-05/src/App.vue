<template>
  
  <!--  -->
  <div class="container">
    <!--Подписка на события- Для подписки на события DOM и выполнения JavaScript-кода по их наступлении используйте директиву v-on  -->
    <!--  отмена дефолтного поведения html страницы  v-on:submit.prevent-->
    <form class="card" v-on:submit.prevent="submitHandler">
      <h1>Анкета на Vue разработчика!</h1>
        <div class="form-control">
          <label for="name">Как тебя зовут?</label>
          <input
            type="text"
            id="name"
            placeholder="Введи имя"
            v-model.trim="name">
          
            <!-- директива v-model, которая позволяет связать помощью двусторонней привязки html-элементы input, 
              select, textarea и свойства из приложения Vue. v-model.trim="name"> 
            -->
          <small v-if="errors.name">{{ errors.name }}</small>
        </div>


      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input
            type="number"
            id="age"
            max="70"
            v-model.number="age"
        >
        <!-- v-model.number - указывает нам что мы хотим использовать тип number  -->
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <!--
          Элемент select позволяет создать список с возможностью одиночного либо множественного выбора. 
          При привязке к элементу <select> директива v-model отслеживает свойство value вложенных в select элементов <option> 
          и событие change для отслеживания изменения выбиранного элемента. 
          При этом значение атрибута selected у элементов option игнорируется.
        -->
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option value="nsk">Новосибирск</option>
        </select>
      </div>

      <!--
        Флажок или checkbox представляет элемент управления, который может находиться в двух состояниях: отмеченном и неотмеченном. 
        При установке привязки директива v-model использует его атрибут checked и событие change для отслеживания изменения значения. 
        При этом начальное значение атрибута checked.

        Одиночный флажок может быть привязан к логическому значению true или false:
      -->
      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input type="radio" v-model="relocate" name="trip" value="yes" /> Да</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" v-model="relocate" name="trip" value="no" /> Нет</label>
        </div>
      </div>

      <!--
        Переключатели (radiobutton или радиокнопки) позволяют определить группу альтернативных вариантов, из которых можно выбрать только один. 
        При установке привязки, также как и для элементов <input type="checkbox">, директива v-model использует его атрибут checked 
        и событие change для отслеживания изменения значения, а начальное значение атрибута checked.

      Переключатели привязываются к одному свойству. При выборе переключателя связанное свойство получает выбранное значение:
      -->

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" name="skills" value="vuex" /> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" name="skills" value="cli" /> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" name="skills" value="router" /> Vue Router</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Правила нашей компании</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="agree" /> С правилами согласен</label>
        </div>
      </div>
      
      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        age: 23,
        city: 'spb',
        relocate: 'yes',
        skills: [],
        agree: false,
        errors: {
          name: null
        }
      
      }

    },

    methods:{
      // этим методом проверяем валидность формы
      formIsValid() {
        let isValid = true

        if (this.name.length === 0) {
          this.errors.name = 'Имя не может быть пустым'
          isValid = false
        } else {
          this.errors.name = null
        }

        return isValid
      },
      submitHandler(){
        if (this.formIsValid()) {
          console.group('Form Data')
          console.log('Name:', this.name)
          console.log('Age:', this.age)
          console.log('City:', this.city)
          console.log('To Tokyo:', this.relocate)
          console.log('Skills:', this.skills)
          console.log('Agree:', this.agree)
          console.groupEnd()
        }
      }
    }
  }
</script>

<style>

.form-control small {
    color: #e53935;
  }

  .form-control.invalid input {
    border-color: #e53935;
  }

</style>
