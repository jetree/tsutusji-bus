<template>
  <div>
    <button @click.prevent="set_busstop_icon()">
      click
    </button>
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
  data: () => {
    return {
      ymap: ''
    }
  },
  computed: {
    busstop () {
      return this.$store.getters['bus/busstop']
    }
  },
  watch: {
    busstop (val, old) {
      // console.log('watch', val)
      this.set_busstop_icon()
    }
  },
  mounted () {
    this.createMap()
  },
  methods: {
    createMap () {
      this.ymap = new Y.Map('map')
      this.ymap.drawMap(new Y.LatLng(this.latitude, this.longitude), 13, Y.LayerSetId.NORMAL)
    },
    set_busstop_icon () {
      this.ymap.clearFeatures()
      if (this.busstop == null) {
        console.log('syuuryou')
        return
      }
      const markers = []
      markers.push(new Y.Marker(new Y.LatLng(this.latitude, this.longitude)))
      for (let i = 0; i < this.busstop.length; i++) {
        markers.push(new Y.Marker(new Y.LatLng(this.busstop[i].latitude, this.busstop[i].longitude)))
      }
      this.ymap.addFeatures(markers)
    }
  }
}
</script>
