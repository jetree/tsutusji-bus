<template>
  <div class="container">
    <div>
      <ul>
        <li v-for="rosen in rosen" :key="rosen.id">
          <button @click.prevent="get_data(rosen.id)">
            {{ rosen.name }}
          </button>
        </li>
      </ul>
      {{ data }}
      <ul>
        <li v-for="item in data.rosen">{{ item.id }}:{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

export default {
  components: {},
  data: () => {
    return {
      rosen: [
        {
          id: '1',
          name: '循環線'
        },
        {
          id: '2',
          name: '幹線'
        },
        {
          id: '3',
          name: '鯖江南・新横江線'
        },
        {
          id: '4',
          name: '神明線'
        },
        {
          id: '5',
          name: '片上・北中山線'
        },
        {
          id: '6',
          name: '立待線'
        },
        {
          id: '7',
          name: '吉川線'
        },
        {
          id: '8',
          name: '豊線'
        },
        {
          id: '9',
          name: '中河・北中山線'
        },
        {
          id: '10',
          name: '河和田線'
        },
        {
          id: '11',
          name: '通学便 市内高校ルート'
        },
        {
          id: '12',
          name: '通学便 片上・北中山ルート'
        },
        {
          id: '13',
          name: '通学便 立待ルート'
        },
        {
          id: '14',
          name: '通学便 吉川ルート'
        },
        {
          id: '15',
          name: '通学便 豊ルート'
        },
        {
          id: '16',
          name: '通学便 中河・北中山ルート'
        },
        {
          id: '17',
          name: '通学便 河和田ルート'
        },
        {
          id: '99',
          name: '福鉄鯖浦線'
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
      const json = await this.$jsonp('/api/rosenidLookup.php', {
        callbackName: 'get'
      })
      console.log(id)
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
