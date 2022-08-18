<template>
 <div>
    <main-hader />
    <router-view></router-view>
 </div>
</template>

<script>
import MainHader from './header/MainHeader.vue'

export default {
  components: {
    MainHader ,
  },
}
</script>

<style>

</style>