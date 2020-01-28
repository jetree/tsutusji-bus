<template>
  <div class="container">
    <div>
      <SelectRosen :rosen-list="rosen" />
      <!-- <Rosen /> -->
      <!-- <ul>
        <li v-for="rosen in rosen" :key="rosen.id">
          <button @click.prevent="get_data(rosen.id)">
            {{ rosen.name }}
          </button>
        </li>
      </ul>
      {{ data }}
      <ul>
        <li v-for="item in data.rosen">{{ item.id }}:{{ item.name }}</li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueJsonp from 'vue-jsonp'
import SelectRosen from '~/components/SelectRosen.vue'

Vue.use(VueJsonp)

export default {
  components: {
    SelectRosen
  },
  data: () => {
    return {
      rosen: [
        {
          id: '1',
          name: '循環線',
          color: '#E65100'
        },
        {
          id: '2',
          name: '幹線',
          color: '#C2185B'
        },
        {
          id: '3',
          name: '鯖江南・新横江線',
          color: '#097138'
        },
        {
          id: '4',
          name: '神明線',
          color: '#B2EBF2'
        },
        {
          id: '5',
          name: '片上・北中山線',
          color: '#3949AB'
        },
        {
          id: '6',
          name: '立待線',
          color: '#C5E1A5'
        },
        {
          id: '7',
          name: '吉川線',
          color: '#FFFF8D'
        },
        {
          id: '8',
          name: '豊線',
          color: '#F48FB1'
        },
        {
          id: '9',
          name: '中河・北中山線',
          color: '#9C27B0'
        },
        {
          id: '10',
          name: '河和田線',
          color: '#F9A825'
        },
        {
          id: '11',
          name: '通学便 市内高校ルート',
          color: '#795548'
        },
        {
          id: '12',
          name: '通学便 片上・北中山ルート',
          color: '#795548'
        },
        {
          id: '13',
          name: '通学便 立待ルート',
          color: '#795548'
        },
        {
          id: '14',
          name: '通学便 吉川ルート',
          color: '#795548'
        },
        {
          id: '15',
          name: '通学便 豊ルート',
          color: '#795548'
        },
        {
          id: '16',
          name: '通学便 中河・北中山ルート',
          color: '#795548'
        },
        {
          id: '17',
          name: '通学便 河和田ルート',
          color: '#795548'
        },
        {
          id: '99',
          name: '福鉄鯖浦線',
          color: '#795548'
        }
      ],
      data: ''
    }
  },
  // async mounted() {
  //   const json = await this.$jsonp('/api/busstopLookup.php', {
  //     rosenid: 1,
  //     callbackName: 'get'
  //   })
  //   console.log(json)
  //   this.data = json
  // },
  methods: {
    async get_data(id) {
      const json = await this.$jsonp('/api/busLookup.php', {
        busid: 1,
        callbackName: 'get'
      })
      console.log(id)
      console.log(json)
      this.data = json
      //   this.$jsonp('/api/busstopLookup.php', {
      //     params: {
      //       rosenid: 2
      //     }
      //   })
      //     .then((json) => {
      //       console.log(json)
      //       this.data = json
      //     })
      //     .catch((err) => {
      //       console.log(err)
      //       // エラーの時
      //     })
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
