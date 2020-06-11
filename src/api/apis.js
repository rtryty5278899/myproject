import axios from 'axios'
// 设置服务器IP地址
axios.defaults.baseURL = 'http://localhost:5000'


//1.登录
//  account: 用户名
//  password: 密码
export const API_LOGIN = (account, password) => axios.post("/users/checkLogin", {account,password})

//2.添加账号
//  account: 用户名
//  password: 密码
//  userGroup: 用户组  超级管理员|普通管理员
export const API_ADD_ACCOUNT = (account,password,userGroup) => axios.post("/users/add", {account,password,userGroup})


//首页报表接口
// export const API_ADD_ACCOUNT = (account,password,userGroup) => axios.post("/users/add", {account,password,userGroup})
export const API_GET_ORDER_TOTAL = () => axios.post("/order/totaldata")
// export 变量（暴露N个）
// -->
// import { 名字 } from 'xxx'

// export default 变量（1个东西）
// -->
// import 形参 from 'xxx'