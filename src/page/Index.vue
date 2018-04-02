<template>
  <section id="content" class="clearfix">
    <LeftMenu></LeftMenu>
    <Header></Header>
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

</style>
