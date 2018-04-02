<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<script>
import Index from './page/Index'
import Login from './page/Login'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  componets: {
    Index,
    Login
  }
}
</script>

<style lang="less">
  @import "./assets/css/base.less";
  @font-face {
    font-family: 'iconfont';  /* project id 611137 */
    src: url('//at.alicdn.com/t/font_611137_d3pn5nkngwcm1jor.eot');
    src: url('//at.alicdn.com/t/font_611137_d3pn5nkngwcm1jor.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_611137_d3pn5nkngwcm1jor.woff') format('woff'),
    url('//at.alicdn.com/t/font_611137_d3pn5nkngwcm1jor.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_611137_d3pn5nkngwcm1jor.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:18px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    float: left;
  }
  html{
    .wh(100%,100%);
    body{
    .wh(100%,100%);
      #app{
        .wh(100%,100%);
      }
    }
  }
</style>
