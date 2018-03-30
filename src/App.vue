<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<script>
import Index from './page/Index'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  componets: {
    Index
  }
}
</script>

<style>
  @import "./assets/css/base.less";
  #app{

  }
</style>
