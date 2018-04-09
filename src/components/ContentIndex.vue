<template>
  <div class="index-box">
    <ul class="clearfix index-header">
      <li>
        <div class="index-header-list clearfix">
          <span class="iconfont">&#xe62f;</span>
          <div class="index-header-list-box">
            <div class="index-list-sum">¥<span>0.00</span>元</div>
            <b>今日销售总额</b>
          </div>
        </div>
      </li>
      <li>
        <div class="index-header-list">
          <span class="iconfont">&#xe64e;</span>
          <div class="index-header-list-box">
            <div class="index-list-sum"><span>888</span>个</div>
            <b>今日订单数</b>
          </div>
        </div>
      </li>
      <li>
        <div class="index-header-list">
          <span class="iconfont">&#xe623;</span>
          <div class="index-header-list-box">
            <div class="index-list-sum"><span>888</span>个</div>
            <b>今日注册会员</b>
          </div>
        </div>
      </li>
      <li>
        <div class="index-header-list">
          <span class="iconfont">&#xe624;</span>
          <div class="index-header-list-box">
            <div class="index-list-sum"><span>888</span>个</div>
            <b>今日入驻商家数</b>
          </div>
        </div>
      </li>
      <li>
        <div class="index-header-list">
          <span class="iconfont">&#xe61c;</span>
          <div class="index-header-list-box">
            <div class="index-list-sum"><span>10/80</span></div>
            <b>员工数/员工总数</b>
          </div>
        </div>
      </li>
    </ul>
    <div class="index-content">
      <ul class="index-content-box">
        <li>
          <div class="index-content-header clearfix">
            <b>待处理</b><span><i>80个</i></span>
          </div>
          <div class="index-content-content">
            <div class="clearfix"><b>商家信息修改</b><span><i>10个</i></span></div>
            <div class="clearfix"><b>待审核商品</b><span><i>10个</i></span></div>
            <div class="clearfix"><b>会员充值</b><span><i>10个</i></span></div>
            <div class="clearfix"><b>会员提现</b><span><i>10个</i></span></div>
            <div class="clearfix"><b>意见反馈</b><span><i>10个</i></span></div>
            <div class="clearfix"><b>商品评价</b><span><i>10个</i></span></div>
            <div class="clearfix"><b>入驻申请</b><span><i>10个</i></span></div>
            <div class="clearfix"><b>会员申请</b><span><i>10个</i></span></div>
          </div>
        </li>
        <li>
          <div class="index-content-header clearfix">
            <b>今日商品</b><span><i>80个</i></span>
          </div>
          <div class="index-content-content">
            <div class="clearfix"><b>平台商品总数</b><span><i>10个</i></span></div>
            <div class="clearfix"><b>入驻商商品总数</b><span><i>10个</i></span></div>
            <div class="clearfix"><b>库存警告商品数</b><span><i>10个</i></span></div>
            <div class="clearfix"><b>团购商品数</b><span><i>10个</i></span></div>
            <div class="clearfix"><b>秒杀商品数</b><span><i>10个</i></span></div>
            <div class="clearfix"><b>精选推荐商品数</b><span><i>10个</i></span></div>
            <div class="clearfix"><b>热销商品数</b><span><i>10个</i></span></div>
            <div class="clearfix"><b>已下架商品总数</b><span><i>10个</i></span></div>
          </div>
        </li>
        <li>
          <div class="index-content-header clearfix">
            <b>订单统计</b><span><i>80个</i></span>
          </div>
          <div class="index-content-content">
            <div class="clearfix"><b>预约订单</b><span><i>10个</i></span></div>
            <div class="clearfix"><b>代付款订单</b><span><i>10个</i></span></div>
            <div class="clearfix"><b>待服务订单</b><span><i>10个</i></span></div>
            <div class="clearfix"><b>代发货订单</b><span><i>10个</i></span></div>
            <div class="clearfix"><b>已发货订单</b><span><i>10个</i></span></div>
            <div class="clearfix"><b>退款申请</b><span><i>10个</i></span></div>
            <div class="clearfix"><b>退货申请</b><span><i>10个</i></span></div>
            <div class="clearfix"><b>已成交订单</b><span><i>10个</i></span></div>
          </div>
        </li>
      </ul>
    </div>
    <div id="sysinfo">

    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
  .index-box{

    .index-header{
      text-align: center;
      width: 96%;
      margin: 20px auto 0;
      border: 1px solid #cfcdce;
      height: 67px;
      border-radius: 6px;
      li{
        width: 20%;
        float: left;
        height:67px;
        position: relative;
        &:after{
          content: '';
          position: absolute;
          right:0;
          top: 50%;
          margin-top: -16.5px;
          height: 33px;
          width: 1px;
          background: #d2d0d1;
        }
        &:last-child:after{
          height: 0;
        }
        .index-header-list{
          position: absolute;
          left: 50%;
          top: 50%;
          -webkit-transform: translateX()(-50%)translateY(-50%);
          -moz-transform: translateX(-50%)translateY(-50%);
          -ms-transform: translateX(-50%)translateY(-50%);
          -o-transform: translateX(-50%)translateY(-50%);
          transform: translateX(-50%)translateY(-50%);
          .iconfont{
            font-size: 30px;
            line-height: 38px;
          }
          .index-header-list-box{
            float: left;
            margin-left: 10px;
            span{
            }
            b{
              font-weight: normal;
            }
            .index-list-sum{
              color: #d2965a;
            }
          }
        }
      }
    }
    .index-content{
      margin-top: 20px;
      b{
        font-weight: normal;

      }
      i{
        font-style: normal;
      }
      .index-content-box{
        width: 96%;
        margin: 20px auto 0;
        li{
          -webkit-border-radius: 6px;
          -moz-border-radius: 6px;
          border-radius: 6px;
          border: 2px solid #e8e6e7;
          float: left;
          width: 32.33%;
          margin-right: 0.5%;
          .index-content-header{
            height: 42px;
            line-height: 42px;
            border-bottom: 1px solid #e2e0e1;
            position: relative;
            &:after{
              content: '';
              position: absolute;
              left: 21px;
              height: 21px;
              margin-top: 10px;
              width: 4px;
              background: #0e9bad;
            }
            b{
              margin-left:50px;
              float: left;
            }
            span{
              float: right;
              margin-right: 23px;
              color: #ae4c41;
            }
          }
          .index-content-content{
            line-height: 34px;
            div{
              b{
                float: left;
                margin-left: 21px;
              }
              span{
                float: right;
                margin-right: 23px;
              }
            }
          }
        }
      }
    }
  }
</style>
