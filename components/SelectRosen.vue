<template>
  <div>
    <div class="menu-area">
      <Button
        @click.prevent="get"
        v-for="rosen in rosenList"
        :id="rosen.id"
        :key="rosen.id"
        :name="rosen.name"
        :color="rosen.color"
      />
      <!-- <div v-for="rosen in rosenList">{{ rosen.name }}</div> -->
    </div>
  </div>
</template>

<script>
import Button from '~/components/Button.vue'

export default {
  components: {
    Button
  },
  props: {
    rosenList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.menu-area {
  display: flex;
  overflow-x: scroll;
  background-color: rgb(250, 140, 176);
}
</style>
