<template>
  <div>
    {{ bus }}<br>
    {{ busMarker }}
    <button @click.prevent="set_bus_icon(1)">
      click
    </button>
    <button @click.prevent="move_bus_icon(1)">
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
      ymap: '',
      busMarker: {},
      bus: {
        1: {
          isRunning: true,
          datetime: '20121111110057',
          busid: '4',
          rosenid: '1',
          binid: '6',
          latitude: 35.9463122814615,
          longitude: 136.188002291092,
          speed: 8.00399208068848,
          direction: 260.027038574219,
          destination: '神明駅',
          isdelay: false
        },
        5: {
          latitude: 0,
          longitude: 0
        },
        6: {
          latitude: '',
          longitude: ''
        }
      }
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
  // bus: {
  //   handler: (val, old) => {
  //     console.log(val)
  //     set_bus_icon(1)
  //   },
  //   deep: true
  // }
  },
  mounted () {
    this.createMap()
    // this.interval(1)
    // this.interval(5)
    // this.set_bus_icon(1)
  },
  methods: {
    createMap () {
      this.ymap = new Y.Map('map', {
        configure: {
          mapType: Y.Map.TYPE.SMARTPHONE
        }
      })
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
    },
    set_bus_icon (busid) {
      const bus = new Y.Marker(new Y.LatLng(this.bus[busid].latitude, this.bus[busid].longitude))
      console.log(bus)
      bus.id = busid
      console.log(bus)
      // this.busMarker = bus
      this.ymap.addFeature(bus)
    },
    move_bus_icon (busid) {
      const busMarker = this.ymap.getFeatures().find((Features) => {
        return (Features.id === busid)
      })
      console.log(busMarker)
      this.ymap.removeFeature(busMarker)
    },
    // async get_bus_position (id) {
    get_bus_position (id) {
      // const json = await this.$jsonp('/api/busLookup.php', {
      //   busid: id,
      //   callbackName: 'get_' + id
      // })
      // this.bus[id].latitude = json.latitude
      // this.bus[id].longitude = json.longitude
      this.bus[id].latitude += 0.002
      this.bus[id].longitude += 0.002
      // console.log(id)
    },
    interval (id) {
      setInterval(() => {
        this.get_bus_position(id)
      }, 5000)
    }
  }
}
</script>
