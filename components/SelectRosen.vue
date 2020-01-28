<template>
  <div>
    <div class="menu-area">
      <Button v-for="rosen in rosenList" :name="rosen.name" />
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
}
</style>
