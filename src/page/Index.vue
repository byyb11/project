<template>
  <section id="content" class="clearfix">
    <LeftMenu></LeftMenu>
    <section class="right-content">
      <Header></Header>
      <router-view></router-view>
    </section>
  </section>
</template>
<script>
import Header from '@/components/Header'
import LeftMenu from '@/components/LeftMenu'
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  components: {
    Header,
    LeftMenu
  }
}
</script>
<style lang="less" scoped>
#content{
  height: 100%;
  .right-content{
    float: left;
    width: 85%;
  }
}
</style>
