<template>
  <section id="left-menu">
    <div>
      <h1>菜单</h1>
      <section id="menu-list">
        <ul>
          <li v-for="item in menuList" :key="item.id" >
            <router-link v-bind:to="item.url">
              <div class="menu-box clearfix" v-on:click="tarson(item)">
                <span class="iconfont" v-html='item["menu-icon"]'></span>
                <span class="menu-name">{{item["menu-name"]}}</span>
              </div>
            </router-link>
            <span class="open-icon iconfont">&#xe642;</span>
            <div class="son-menu-box" v-show="item.targetson">
              <span  v-for='(item1,index) in item["son-list"]' :key="item1.id" v-bind:class="[ index == 0 ? activeClass : '','son-menu-list']" >
                {{item1['son-list-name']}}
              </span>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      'menuList': [
        {
          'menu-name': '系统首页',
          'menu-icon': '&#xe759;',
          'targetson': false,
          'url': '/Index/'
        },
        {
          'menu-name': '商家管理',
          'menu-icon': '&#xe624;',
          'son-list': [
            {
              'son-list-name': '平台商品列表'
            },
            {
              'son-list-name': '入驻商商品列表'
            },
            {
              'son-list-name': '添加新商品'
            },
            {
              'son-list-name': '商品分类'
            },
            {
              'son-list-name': '用户评论'
            }
          ],
          'targetson': false,
          'url': '/Index/'
        },
        {
          'menu-name': '订单管理',
          'menu-icon': '&#xe64e;',
          'targetson': false,
          'son-list': [
            {
              'son-list-name': '订单列表'
            },
            {
              'son-list-name': '入驻商订单列表'
            },
            {
              'son-list-name': '发货单列表'
            },
            {
              'son-list-name': '服务单列表'
            },
            {
              'son-list-name': '退款/售后列表'
            },
            {
              'son-list-name': '快递单列表'
            },
            {
              'son-list-name': '快递单历史'
            },
            {
              'son-list-name': '订单导出'
            }
          ],
          'url': '/Index/'

        },
        {
          'menu-name': '广告管理',
          'menu-icon': '&#xe674;',
          'targetson': false,
          'url': '/Index/'
        },
        {
          'menu-name': '会员管理',
          'menu-icon': '&#xe623;',
          'targetson': false,
          'son-list': [
            {
              'son-list-name': '会员列表'
            },
            {
              'son-list-name': '添加会员'
            },
            {
              'son-list-name': '会员等级'
            },
            {
              'son-list-name': '充值和提现申请'
            },
            {
              'son-list-name': '会员导出'
            }
          ],
          'url': '/Index/'
        },
        {
          'menu-name': '权限管理',
          'menu-icon': '&#xe84c;',
          'targetson': false,
          'url': '/Index/'
        },
        {
          'menu-name': '员工管理',
          'menu-icon': '&#xe632;',
          'targetson': false,
          'son-list': [
            {
              'son-list-name': '员工信息列表'
            },
            {
              'son-list-name': '添加员工'
            },
            {
              'son-list-name': '员工导出'
            }
          ],
          'url': '/Index/'
        },
        {
          'menu-name': '报表统计',
          'menu-icon': '&#xe62e;',
          'targetson': false,
          'url': '/Index/'
        }
      ],
      activeClass: 'active'
    }
  },
  methods: {
    tarson: function (obj) {
      obj.targetson = !obj.targetson
    }
  }
}
</script>
<style lang="less" scoped>
  #left-menu {
    position: relative;
    max-width: 100%;
    max-height: 100%;
    padding: 10px;
    box-sizing: border-box;
    overflow: hidden;
    background: #fff;
    color: #2b2b2b;
    font: 14px Arial;
    text-align: left;
    -webkit-transform-style: preserve-3d;
    outline: whitesmoke solid;
  }

  #left-menu>div {
    padding-right: 40px;
    margin-right: -30px;
    max-height: 100%;
    overflow-y: scroll;
  }
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
        text-align:center;
        color: #fff;
        border-top:1px solid #222c38 ;
        position:relative;
        cursor: pointer;
        .menu-box{
          text-align: center;
          color: #fff;
          /*position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translateY(-50%)translateX(-50%);
          -moz-transform:translateY(-50%)translateX(-50%) ;
          -ms-transform: translateY(-50%)translateX(-50%);
          -o-transform: translateY(-50%)translateX(-50%);
          transform:translateY(-50%)translateX(-50%) ;*/
          .iconfont{
            font-size: 21px;
            float: none;
          }
          .menu-name{
            margin-left: 12px;
            position: relative;
            top: -2px;
          }

        }
        .open-icon{
          color: #fff;
          font-size: 9px;
          position: absolute;
          top: 20px;
          right: 21px;
          height: 21px;
          line-height: 21px;
          cursor: pointer;
        }
        .son-menu-box{
          clear: both;
          .son-menu-list{
            display: block;
            height: 54px;
            line-height: 54px;
            border-top:1px solid #27343e ;
            cursor: pointer;
            position: relative;
          }
          .son-menu-list.active:before{
            content: '';
            height: 100%;
            background: #05aac3;
            width: 3px;
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      }
    }
  }
}
</style>
