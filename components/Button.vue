<template>
  <button @click.prevent="get" :style="{ backgroundColor: color }">
    {{ name }}
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
button {
  height: 80px;
  min-width: 60px;
}
</style>
