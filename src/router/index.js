import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/index',
            name: 'index',//登录
            component: () => import('../pages/Index'),
            children: [{
                path: '/index/home',//首页
                name: 'home',
                component: () => import('../pages/index/Home'),
            }, {
                path: '/index/order',//订单管理
                name: 'order',
                component: () => import('../pages/index/Order'),
            },
            //商品管理
            {
                path: '/index/goodsadd',//商品添加
                name: 'goodsadd',
                component: () => import('../pages/index/goodsmanagement/GoodsAdd'),
            },{
                path: '/index/goodslist',//商品列表
                name: 'goodslist',
                component: () => import('../pages/index/goodsmanagement/GoodsList'),
            },{
                path: '/index/goodsclassify',//商品分类
                name: 'goodsclassify',
                component: () => import('../pages/index/goodsmanagement/GoodsClassify'),
            },
            {
                path: '/index/shops',
                name: 'shops',//店铺管理
                component: () => import('../pages/index/ShopsManagement'),
            },
            //账号管理
            {
                path: '/index/addaccount',  //添加账号
                name: 'addaccount',
                component: () => import('../pages/index/account/AddAccount'),
            },
            {
                path: '/index/changepwd',  //修改密码
                name: 'changepwd',
                component: () => import('../pages/index/account/ChangePwd'),
            },
            {
                path: '/index/accountlist',  //账号列表
                name: 'accountlist',
                component: () => import('../pages/index/account/AccountList'),
            },
            //销售统计
            {
                path: '/index/goodsstatistical',  //商品统计
                name: 'goodsstatistical',
                component: () => import('../pages/index/SalesStatistics/GoodsStatistical'),
            },
            {
                path: '/index/orderstatistical',  //订单统计
                name: 'orderstatistical',
                component: () => import('../pages/index/SalesStatistics/OrderStatistical'),
            },
            //个人中心
            {
                path: '/index/personal',  
                name: 'personal',
                component: () => import('../pages/index/account/Personal'),
            }]
        }
    ]
})
