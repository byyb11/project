<template>
  <section id="left-menu">
    <h1>菜单</h1>
    <section id="menu-list">
      <ul>
        <li>Home</li>
        <li>菜单1</li>
        <li>菜单2</li>
        <li>菜单3</li>
        <li>菜单4</li>
      </ul>
    </section>
  </section>
</template>
<script>

</script>
<style lang="less" scoped>
#left-menu{
  width: 15%;
  background: #354656;
  height: 100%;
  float: left;
  h1{
    line-height: 70px;
    height: 70px;
    text-align: center;
    color: #fff;
  }
  #menu-list{
    ul{
      li{
        line-height: 60px;
        height: 60px;
        text-align:center;
        color: #fff;
      }
    }
  }
}
</style>
