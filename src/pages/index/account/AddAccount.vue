<template>
  <div>
    <!-- 添加账号页面 -->
    <el-card >
        <h4>添加账号</h4>
      <el-divider></el-divider>
      <div>账号 <el-input v-model="account"></el-input></div>
      <div>密码 <el-input v-model="password"></el-input></div>

    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.el-input {
  width: 300px;
}
.div{
    float: left;
    margin-right: 60px;
    margin-left: 60px;
}
</style>