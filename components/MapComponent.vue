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
      this.set_busstop_icon()
    }
  },
  mounted () {
    this.createMap()
  },
  methods: {
    createMap () {
      this.ymap = new Y.Map('map')
      this.ymap.drawMap(new Y.LatLng(this.latitude, this.longitude), 14, Y.LayerSetId.NORMAL)
    },
    set_busstop_icon () {
      this.ymap.clearFeatures()
      if (this.busstop == null) {
        return
      }
      const markers = []
      const latitudeList = []
      const longitudeList = []
      const icon = new Y.Icon('http://tutujibus.com/image/busstop32.png')
      for (let i = 0; i < this.busstop.length; i++) {
        markers.push(new Y.Marker(new Y.LatLng(this.busstop[i].latitude, this.busstop[i].longitude), { icon }))
        latitudeList.push(this.busstop[i].latitude)
        longitudeList.push(this.busstop[i].longitude)
      }
      this.ymap.addFeatures(markers)

      // 地図の表示範囲を変更
      // 最も離れた２地点を作る
      const pointALatitude = Math.max.apply(null, latitudeList)
      const pointALongitude = Math.max.apply(null, longitudeList)
      const pointBLatitude = Math.min.apply(null, latitudeList)
      const pointBLongitude = Math.min.apply(null, longitudeList)
      this.ymap.drawBounds(
        new Y.LatLngBounds(
          new Y.LatLng(pointBLatitude, pointBLongitude),
          new Y.LatLng(pointALatitude, pointALongitude)), Y.LayerSetId.NORMAL)
    }
  }
}
</script>
