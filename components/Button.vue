<template>
  <button @click.prevent="get_data(id)" :style="{ backgroundColor: color }">
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
    async get_data (id) {
      const json = await this.$jsonp('/api/busLookup.php', {
        busid: id,
        callbackName: 'get'
      })
      console.log(id)
      console.log(json)
      this.data = json
    }
  }
}
</script>

<style scoped>
button {
  height: 80px;
  min-width: 60px;
}
</style>
