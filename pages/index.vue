<template>
  <div class="container">
    <div>
      <button @click.prevent="get_data">
        取得
      </button>
      {{ data }}

      <ul>
        <li v-for="item in data">{{ item.id }}:{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => {
    return {
      data: {},
      list: []
    }
  },
  methods: {
    async get_data() {
      const response = await this.$axios.get('/api/busstopLookup.php', {
        params: {
          rosenid: 1
        }
      })
      this.data = response.data
      console.log(JSON.stringify(this.data))
      this.list = response.data
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 800px;
  background-color: #ddd;
}
</style>
