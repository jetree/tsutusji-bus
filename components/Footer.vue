<template>
  <footer>
    <nav class="nav">
      <div class="container">
        <ul>
          <li class="nav-item">
            <div class="nav-icon" >
              <fa :icon="faRoute" />
            </div>
            <p>路線選択</p>
          </li>
        </ul>
        <!-- <SelectRosen :rosen-list="rosen" /> -->
      </div>
    </nav>
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
import { faRoute} from '@fortawesome/free-solid-svg-icons'

Vue.use(VueJsonp)

export default {
  components: {
    SelectRosen
  },
  computed:{
    faRoute(){
      return faRoute
    }
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

<style lang="scss" scoped>
footer {
  width: 100%;
  position: fixed;
  bottom: 0;
}
.nav{
  background-color: rgb(250, 140, 176);
  height: 60px;
  display: flex;
  ul{
    padding: 0;
  }
  &-item{
    height: 100%;
    display: block;
    list-style: none;
    text-align: center;
  }
  &-icon{
    font-size: 30px;
    padding: 0 auto;
  }
}
.container {
  max-width: 800px;
  margin: 0 auto;
}
.footer {
  font-size: 0.60rem;
  padding-top: 10px;
  height: 40px;
  background-color: #FF6699;
  text-align: center;
}
</style>
