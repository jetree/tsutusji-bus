<template>
  <button @click.prevent="get_klm" :style="{ backgroundColor: color }">
    {{ name }}
  </button>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  data: () => {
    return {
      data: []
    }
  },
  methods: {
    get_klm(){

    }
  }
}
</script>

