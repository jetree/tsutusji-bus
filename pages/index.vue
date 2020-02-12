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

<style lang="scss" scoped>
$header-height: 70px
$footer-height: calc(50 + 80 + 10)px

.container {
  margin: 0px auto;
  height: calc(100% - $header-height - $footer-height);
  max-width: 800px;
  background-color: #ddd;
}
</style>
