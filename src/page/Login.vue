<template>
  <section id="login-box">
    <section class="top"></section>
    <section class="center"></section>
    <section class="bottom"></section>
    <section class="login-block">
      <h1>后台系统</h1>
      <div class="user-box user-pwd">
        <div class="user-block uswd-block">
          <span class="iconfont">&#xe61c;</span>
          <input type="text" placeholder="用户名" id="username">
        </div>
      </div>
      <div class="password-box user-pwd">
        <div class="'password-block uswd-block">
          <span class="iconfont">&#xe63c;</span>
          <input type="password" placeholder="密码" id="password">
        </div>
        <span id="error-title"></span>
      </div>
      <div class="remember">
        <input type="radio" id="reme-pwd">
        <label for="reme-pwd" v-bind:class="{ remnalog: isActive }"  v-on:click="toggle"></label>
        <span>记住用户名和密码</span>
      </div>
      <div class="login-btn" v-on:click="login">登录</div>
    </section>
  </section>
</template>
<script>
export default {
  data () {
    return {
      isActive: true
    }
  },
  methods: {
    toggle: function () {
      this.isActive = !this.isActive
    },
    login: function () {
      let userName = document.getElementById('username').value
      let password = document.getElementById('password').value
      let errorTitle = document.getElementById('error-title')
      let userData = {
        userName: userName,
        password: password
      }
      if (userName && password) {
        errorTitle.innerText = ''
        this.axios.get('http://localhost:8888/', {
          params: userData
        }).then(response => {
          console.log(response)
          if (response) {
            // this.$router.push({ path: '/Index' })
          }
        }).catch(err => {
          console.log(err)
        })
      } else {
        errorTitle.innerText = '用户名或密码不能为空'
      }
    }
  }
}
</script>
<style lang="less" scoped>
  #login-box{
    width: 100%;
    height: 100%;
    display:-ms-flex;
    display:-moz-flex;
    display: -o-flex;
    display:-webkit-flex;
    display: flex;
    flex-direction: column;
    .top,.center,.bottom{
      -wekit-flex:1;
      -ms-flex: 1;
      -moz-box-flex: 1;
      -o-flex: 1;
      flex: 1;
      &.top,&.bottom{
        background: #252d3a;
      }
      &.cnter{
        background: #e7ebee;
      }
    }
    .login-block{
      height: 394px;
      width: 390px;
      background: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%);
      border-radius: 5px;
      h1{
        line-height: 100px;
        text-align: center;
        color: #25ada3;
        font-size: 33px;
      }
      .user-pwd{
        height: 72px;
        line-height: 72px;
        background: #f2f6f9;
        width: 100%;
        position: relative;
        &.password-box{
          background: #fff;
          #error-title{
            position: absolute;
            // width: 318px;
            color:red;
            bottom: 0;
            left: 50%;
            line-height: 0;
            -webkit-transform: translateX(-50%);
            -moz-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            -o-transform: translateX(-50%);
            transform: translateX(-50%);
          }
        }
        .uswd-block{
          width: 318px;
          height: 35px;
          position: absolute;
          left: 50%;
          top: 50%;
          -webkit-transform: translateY(-50%)translateX(-50%);
          -moz-transform: translateY(-50%)translateX(-50%);
          -ms-transform: translateY(-50%)translateX(-50%);
          -o-transform: translateY(-50%)translateX(-50%);
          transform: translateY(-50%)translateX(-50%);
          .iconfont{
            font-size: 14px;
            height: 14px;
            position: absolute;
            left: 10px;
            line-height: 35px;
            z-index: 1;
          }
          input{
            height: 100%;
            width: 318px;
            outline: none;
            border: 1px solid #e9eaec;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            position: absolute;
            left: 0;
            top: 0;
            padding-left: 36px;
          }
        }
      }
      .remember{
        position: relative;
        margin-left: 35px;
        color: #bdced8;
        margin-top: 10px;
        margin-bottom: 10px;
        input{
          visibility: hidden;

        }
        label{
          position: absolute;
          left: 0;
          top: 0;
          height: 20px;
          width: 20px;
          border: 1px solid #eaeaec;
        }
        .remnalog{
          background: #26aea4;
          &:after{
            content: '√';
            color: #fff;
            position: absolute;
            left: 50%;
            -webkit-transform: translateX(-50%);
            -moz-transform:translateX(-50%);
            -ms-transform: translateX(-50%);
            -o-transform: translateX(-50%);
            transform: translateX(-50%);
          }
        }
      }
      .login-btn{
        width: 318px;
        background: #25aca5;
        height: 40px;
        line-height: 40px;
        color: #fff;
        text-align: center;
        margin: 22px auto 0;
        font-size: 16px;
        cursor: pointer;
      }
    }

  }
</style>
