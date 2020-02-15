<template>
  <div>
    <!-- {{ bus }}<br> -->
    <!-- {{ busMarker }} -->
    
    <div class="container">
      <button @click.prevent="getCurrentPosition" id="getCurrentPositionButton">
        <fa :icon="faLocationArrow" />
      </button>
      <div id="map" style="max-width:800px" />
    </div>
  </div>
</template>

<script>
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

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
        2: {},
        3: {},
        4: {},
        5: {},
        6: {},
        7: {},
        8: {},
        9: {},
        10: {}
      }
    }
  },
  computed: {
    busstop () {
      return this.$store.getters['bus/busstop']
    },
    faLocationArrow(){
      return faLocationArrow
    }
  },
  watch: {
    busstop (val, old) {
      // console.log(this)
      this.set_busstop_icon()
    },
    // bus (val, old) {
    //   const busid = old.busid
    //   console.log(old)
    //   this.remove_bus_icon(busid)
    //   this.set_bus_icon(busid)
    // }
    'bus.1' (val) {
      // console.log('watch', val)
      // console.log('watch', this)
      this.remove_bus_icon(1)
      this.set_bus_icon(1)
    },
    'bus.2' (val) {
      this.remove_bus_icon(2)
      this.set_bus_icon(2)
    },
    'bus.3' (val) {
      this.remove_bus_icon(3)
      this.set_bus_icon(3)
    },
    'bus.4' (val) {
      this.remove_bus_icon(4)
      this.set_bus_icon(4)
    },
    'bus.5' (val) {
      this.remove_bus_icon(5)
      this.set_bus_icon(5)
    },
    'bus.6' (val) {
      this.remove_bus_icon(6)
      this.set_bus_icon(6)
    },
    'bus.7' (val) {
      this.remove_bus_icon(7)
      this.set_bus_icon(7)
    },
    'bus.8' (val) {
      this.remove_bus_icon(8)
      this.set_bus_icon(8)
    },
    'bus.9' (val) {
      this.remove_bus_icon(9)
      this.set_bus_icon(9)
    },
    'bus.10' (val) {
      this.remove_bus_icon(10)
      this.set_bus_icon(10)
    }
    // bus: {
    //   // handler: (val, old) => {
    //   handler: function (val, old) {
    //     // const busid = old.busidz
    //     console.log(old)
    //     console.log(this)
    //     // this.set_bus_icon(busid)
    //   },
    //   deep: true
    // }
  },
  mounted () {
    this.get_window_height()
    this.createMap()
    this.interval(1)
    this.interval(2)
    this.interval(3)
    this.interval(4)
    this.interval(5)
    this.interval(6)
    this.interval(7)
    this.interval(8)
    this.interval(9)
    this.interval(10)
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
      const icon = new Y.Icon('https://tutujibus.com/image/busstop32.png')
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
      // console.log(this.bus[busid])
      if (this.bus[busid] === undefined) {
        return
      }
      const bus = new Y.Marker(new Y.LatLng(this.bus[busid].latitude, this.bus[busid].longitude))
      // console.log('bus', bus)
      bus.id = busid
      this.ymap.addFeature(bus)
    },
    remove_bus_icon (busid) {
      const busMarker = this.ymap.getFeatures().find((Feature) => {
        return (Feature.id === busid)
      })
      // console.log('sakujo', busMarker)
      if(busMarker === undefined){
        return
      }
      this.ymap.removeFeature(busMarker)
    },
    async get_bus_position (busid) {
      const json = await this.$jsonp('https://tutujibus.com/busLookup.php', {
        busid,
        callbackName: 'get_' + busid
      })
      // console.log(busid, json)
      // console.log(busid, json)
      // console.log(busid, Object.keys(json).length)
      // if (Object.keys(json).length === 0) {
      //   this.bus[busid] = {}
      // }
      this.bus[busid] = json
    },
    interval (busid) {
      setInterval(() => {
        this.get_bus_position(busid)
      }, 6000)
    },
    get_window_height(){
      let height = window.innerHeight;
      const map = document.getElementById('map')
      console.log('height', height)
      console.log('map', map)
      height  = height - 190
      console.log('height', height)
      map.style.height = height +'px'
    },
    getCurrentPosition(){
      if( !navigator.geolocation ){
        return
        // alert( "あなたの端末では、現在位置を取得できません。" )
      }
      // console.log(this)
      const self = this
      const optionObj = {
        "enableHighAccuracy": false ,
        "timeout": 3000 ,
        "maximumAge": 5000 ,
      }
      // エラーコードのメッセージを定義
      const errorMessage = {
            0: "原因不明のエラーが発生しました…。" ,
            1: "位置情報の取得が許可されませんでした…。" ,
            2: "電波状況などで位置情報が取得できませんでした…。" ,
            3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。" ,
          } 
      navigator.geolocation.getCurrentPosition(
        // [第1引数] 取得に成功した場合の関数
        function(position){
          const data = position.coords
          self.ymap.panTo(new Y.LatLng(data.latitude, data.longitude), true);
        },
        // [第2引数] 取得に失敗した場合の関数
        function errorFunc( error ){
        // エラーコードに合わせたエラー内容をアラート表示
        console.log( errorMessage[error.code] )
        },
        optionObj
        )
    }
  }
}
</script>
<style lang="scss" scoped>
$header-height: 50px;
$footer-height: 140px;

/* #map{
  /* height: calc(100vh - 190px); */
/* } */
.container{
  max-width: 800px;
  position: relative;
}
#getCurrentPositionButton{
  width: 50px;
  height: 50px;
  position: absolute;
  left: 20px;
  bottom: 30px;
  color: aliceblue;
  background: #ef3f98;
  opacity: 0.8;
  z-index: 1;
  font-size: 20px;
  border-radius: 50%;
}
</style>
