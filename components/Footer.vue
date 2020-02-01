<template>
  <footer>
    <div class="container">
      <SelectRosen :rosen-list="rosen" />
    </div>
    <div class="footer">
      <p>CC BY <a href="https://twitter.com/doitokatsuki">LEE</a></p>
      <p>
        このサイトは<a
          href="http://www.city.sabae.fukui.jp/users/tutujibus/web-api/web-api.html"
        >
          「つつじバスロケーションWEB API」
        </a>
        を使用しています
      </p>
    </div>
  </footer>
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
  }
}
</script>

<style scoped>
footer {
  width: 100%;
  position: fixed;
  bottom: 0;
}
.container {
  margin: 0 auto;
}
.footer {
  font-size: 0.75rem;
  padding-top: 10px;
  height: 70px;
  background-color: #FF6699;
  text-align: center;
}
</style>
