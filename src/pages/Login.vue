<template>
  <div class="login-div">
    <el-card class="box-card">
      <h4>餐饮管理系统</h4>
      <el-input v-model="acc"
                placeholder="请输入管理员账号"></el-input>
      <el-input class="pwd-input"
                v-model="pwd"
                placeholder="请输入密码"></el-input>
      <el-button @click="clickLogin"
                 type="primary"
                 class="btn">登录</el-button>
    </el-card>
  </div>
</template>

<script>
import { API_LOGIN } from '../api/apis'

export default {
  data() {
    return {
      acc: '',
      pwd: '',
      isreq: true //点击后是否发送请求 true: 发送登录请求   false: 不发送请求
    }
  },
  methods: {
    clickLogin() {
      // 防抖节流： 3秒定时器..点击一次发送一次请求后，3秒后才能发送下一次请求
      if (this.isreq == false) return

      //发送一次登录请求，把标识设置为false
      this.isreq = false

      //发送请求
      API_LOGIN(this.acc, this.pwd).then(res => {
        if (res.data.code == 0) {
          //登录成功!
          this.$message({
            message: '登陆成功!',
            type: 'success'
          })

          this.$router.push('/index/home')
        } else {
          this.$message.error('登录失败,用户名或密码错误')
        }
      })

      setTimeout(() => {
        this.isreq = true //3秒后，又可以进行点击
      }, 3000)
    }
  }
}
</script>

<style lang="less" scoped>
@base: #2d3a4b;

.login-div {
  width: 100%;
  height: 100%;
  background-color: @base;
  display: flex;
  justify-content: center;
  align-items: center;

  .box-card {
    width: 300px;
    text-align: center;

    h4 {
      color: @base;
      margin: 14px 0;
    }

    .pwd-input {
      margin-top: 8px;
    }
    .btn {
      margin-top: 12px;
      width: 100%;
    }
  }
}
</style>