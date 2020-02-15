<template>
  <button @click.prevent="get_busstop" :style="{ backgroundColor: color }">
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
    async get_busstop () {
      const json = await this.$jsonp('https://tutujibus.com/busstopLookup.php', {
        rosenid: this.id,
        callbackName: 'get'
      })
      console.log(json)
      this.$store.dispatch('bus/get_busstop', json)
    }
  }
}
</script>

<style scoped>
button {
  height: 80px;
  min-width: 60px;
  margin: 5px;
  border-radius: 5px;
}
</style>
