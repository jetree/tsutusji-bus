<template>
  <div @click.stop class="SelectRosenArea">
    <SelectRosenButton
      @click.prevent="get_klm()"
      v-for="rosen in rosenList"
      :id="rosen.id"
      :key="rosen.id"
      :name="rosen.name"
      :color="rosen.color"
      class="button"
    />
  </div> 
</template>

<script>
import SelectRosenButton from '~/components/SelectRosenButton.vue'

export default {
  components:{
    SelectRosenButton
  },
  props: {
    rosenList: {
      type: Array,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
  .SelectRosenArea{
      z-index:2;
      width:90%;
      max-height: 50%;
      min-width: 300px;
      padding: 1em;
      background:#fff;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      overflow-y: scroll;
    .button{
      text-align: center;
      vertical-align: middle;
      width: 30%;
      min-height: 60px;
      margin: 5px 0;
      border-radius: 5px;
      position: relative;
      .rosen-name{
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
      }
    }
  }
</style>
