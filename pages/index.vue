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
      longitude: 136.188187,
      latitude: 35.943302
    }
  }
}
</script>

<style scoped>
.container {
  margin: 10px auto;
  max-width: 800px;
  background-color: #ddd;
}
</style>
