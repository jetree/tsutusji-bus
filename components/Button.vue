<template>
  <button @click.prevent="get">
    {{ name }}
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
button {
  height: 80px;
  min-width: 100px;
  background-color: aqua;
}
</style>
