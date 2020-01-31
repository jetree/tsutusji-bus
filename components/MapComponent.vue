<template>
  <div>
    <div id="map" style="max-width:800px; height:70vh" />
  </div>
</template>

<script>
export default {
  props: {
    longitude: {
      type: Number
    },
    latitude: {
      type: Number
    }
  },
  mounted () {
    this.createMap()
  },
  methods: {
    createMap () {
      console.log('ok')
      const ymap = new Y.Map('map')
      ymap.drawMap(new Y.LatLng(this.longitude, this.latitude), 13, Y.LayerSetId.NORMAL)
    }
  }
}
</script>
