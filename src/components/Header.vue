<template>
  <section id="header">
    <div class="search-box">
     <span class="iconfont">&#xe60b;</span>
      <input type="text" class="search-input" placeholder="输入搜索内容">
    </div>
    <div class="header-right">
        <div class="remind iconfont">&#xe618;</div>
    </div>
  </section>
</template>
<script>
/* data数据写在return 可以有效的防止变量污染 */
export default {
  name: 'Header',
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 611137 */
    src: url('//at.alicdn.com/t/font_611137_nfdgfi5udqpycik9.eot');
    src: url('//at.alicdn.com/t/font_611137_nfdgfi5udqpycik9.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_611137_nfdgfi5udqpycik9.woff') format('woff'),
    url('//at.alicdn.com/t/font_611137_nfdgfi5udqpycik9.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_611137_nfdgfi5udqpycik9.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:18px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    float: left;
  }
  #header{
    height: 70px;
    background: #d5dde4;
    line-height: 70px;
    .search-box{
      margin-left:34px;
      .iconfont{
        float: left;
      }
      .search-input{
        height: 10px;
        background: #d5dde4;
        border: 0;
        outline: none;
      }
    }

  }
</style>
