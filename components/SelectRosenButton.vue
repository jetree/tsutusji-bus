<template>
  <button @click.prevent="get_klm" :style="{ backgroundColor: color }">
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
    get_klm(){
      const klmData = "http://www.tutujibus.com/kml3/" + this.id + ".klm"
      console.log(klmData)
      const geoXmlLayer = new Y.GeoXmlLayer(klmData)
      console.log(geoXmlLayer)
      this.ymap.addLayer(geoXmlLayer)
      this.$store.dispatch('bus/get_klm', klmData)
    }
  }
}
</script>

