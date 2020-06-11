<template>
  <el-container>
    <el-aside width="200px">
      <!-- 左侧树菜单 -->
      <el-menu :default-active="defaultActive"
               background-color="#2D3A4B"
               text-color="#fff"
               active-text-color="#ffd04b"
               router
               unique-opened>
        <div v-for="item in treelist"
             :key="item.index">
          <!-- 根据过滤后的数组循环创建树菜单 -->
          <!-- <div v-for="item in newtreelist"
               :key="item.index"> -->
          <!-- submenu: 可展开带二级选项卡 -->
          <el-submenu v-if="item.children"
                      :index="item.index">
            <template slot="title">
              <i :class="item.icls"></i>
              <span>{{ item.title }}</span>
            </template>

            <!-- 二级儿子标题 -->
            <el-menu-item v-for="child in item.children"
                          :key="child.index"
                          :index="child.index">
              <i :class="child.icls"></i>
              <span slot="title">{{ child.title }}</span>
            </el-menu-item>
          </el-submenu>
          <!-- menu-item: 一级选项卡，不带展开 -->
          <el-menu-item v-else
                        :index="item.index">
            <i :class="item.icls"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
          <!-- </div> -->
        </div>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header height="50px">
        <!-- 面包屑 -->
        <div>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in breadlist"
                                :key="item">{{ item }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <!-- 头像 -->
        <div></div>
      </el-header>
      <el-main>
        <!-- 二级路由出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      // treelist: 左侧动态菜单数据
      //   index: 点击树选项卡，跳转的hash值
      //   icls: 树选项卡，前面的图标
      //   title: 树选项卡的一级名字
      //   children: 一级选项卡下面的二级菜单（选项卡） 带children属性的选项卡可以展开
      treelist: [
        {
          index: '/index/home',
          icls: 'el-icon-menu',
          title: '后台首页'
          //   role: ['super', 'normal']
        },
        {
          index: '/index/order',
          icls: 'el-icon-document',
          title: '订单管理'
          //   role: ['super']
        },
        {
          index: 'item',
          icls: 'el-icon-location',
          title: '商品管理',
          //   role: ['super'],
          children: [
            {
              index: '/index/goodslist',
              icls: 'el-icon-menu',
              title: '商品列表'
            },
            {
              index: '/index/goodsadd',
              icls: 'el-icon-menu',
              title: '商品添加'
            },
            {
              index: '/index/goodsclassify',
              icls: 'el-icon-menu',
              title: '商品分类'
            }
          ]
        },
        { index: '/index/shops', icls: 'el-icon-setting', title: '店铺管理' },
        {
          index: 'account',
          icls: 'el-icon-location',
          title: '账号管理',
          //   role: ['super'],
          children: [
            {
              index: '/index/accountlist',
              icls: 'el-icon-menu',
              title: '账号列表'
            },
            {
              index: '/index/addaccount',
              icls: 'el-icon-menu',
              title: '添加账号'
            },
            {
              index: '/index/changepwd',
              icls: 'el-icon-menu',
              title: '修改密码'
            }
          ]
        },
        {
          index: 'sale',
          icls: 'el-icon-location',
          title: '销售统计',
          //   role: ['super', 'normal'],
          children: [
            {
              index: '/index/goodsstatistical',
              icls: 'el-icon-menu',
              title: '商品统计'//goodsstatistical
            },
            {
              index: '/index/orderstatistical',
              icls: 'el-icon-menu',
              title: '订单统计'
            }
          ]
        }
      ],
      //面包屑数组
      breadlist: ['首页'],
      //默认选中
      defaultActive: ''
    }
  },
  methods: {
    //根据hash值变化，切换面包屑
    changeBreadlist(hash) {
      let arr = []
      //根据hash值，改变面包屑数组
      switch (hash) {
        case '/index/home':
          arr = ['首页']
          break
        case '/index/order':
          arr = ['订单管理']
          break
        case '/index/shops':
          arr = ['店铺管理']
          break

        case '/index/addaccount':
          arr = ['账号管理', '添加账号']
          break
        case '/index/changepwd':
          arr = ['账号管理', '修改密码']
          break
        case '/index/accountlist':
          arr = ['账号管理', '账号列表']
          break
      }

      this.breadlist = arr
    }
  },
  computed: {
    // newtreelist() {
    // //   return this.treelist.filter(i => i.role.includes(this.role));
    // //   return[]
    // }
  },
  // 检测某个数据(hash)的变化
  watch: {
    //监听路由对象的变化
    $route: {
      handler: val => {
        // 在这里this指向不正确，所以需要提前把this挂载到window上
        // 在这里取出this,调用对应的切换面包屑函数
        window._indexthis.changeBreadlist(val.path)
      },
      // 深度观察监听
      deep: true
    }
  },
  created() {
    // console.log(this.$router)  --> main.js里的router对象实例（最大的vuerouter实例）
    let hash = this.$route.path

    //根据hash值改变左侧树菜单默认选中
    this.defaultActive = hash
    //改变面包屑数组
    this.changeBreadlist(hash)

    //保存这个this
    window._indexthis = this
  }
}
</script>

<style lang="less" scoped>
@base: #2d3a4b; //主题色
@base2: #f0f2f5; //灰色

.el-container {
  height: 100%;

  .el-aside {
    background-color: @base;

    .el-menu {
      border-right: 0;
    }
  }
  .el-main {
    background-color: @base2;
  }
}
</style>