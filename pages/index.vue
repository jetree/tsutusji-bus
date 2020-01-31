<template>
  <div>
    <div class="container">
      <MapComponent :longitude="longitude" :latitude="latitude" />
    </div>
  </div>
</template>

<script>
import MapComponent from '~/components/MapComponent'

export default {
  components: {
    MapComponent
  },
  data: () => {
    return {
      longitude: 35.943302,
      latitude: 136.188187
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
