<template>
  <div class="card">

    <!-- использование слота <slot name="header"></slot> -->
    <slot name="header">No header</slot>

    <!-- использование слота <slot name="default">No text</slot> -->
    <slot name="default">No text</slot>

    <div v-if="$slots.body">
      <slot name="body"></slot>
    </div>

    <div>
    <slot name="footer">No footer</slot>
    </div>

  </div>
</template>

<script>
  export default {
    mounted() {
      console.log(this.$slots)
    }
  }
</script>

<style scoped>

</style>