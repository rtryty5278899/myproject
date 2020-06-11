<template>
  <div>
    <!-- 订单管理 -->
    <el-card>
      <!-- 查询 -->
      <el-form :inline="true"
               :model="formInline"
               class="demo-form-inline"
               style="width: 100% , background-color:white">
        <el-form-item label="订单号">
          <el-input v-model="formInline.ordernumber"
                    placeholder="订单号"></el-input>
        </el-form-item>
        <el-form-item label="收货人">
          <el-input v-model="formInline.consignee"
                    placeholder="收货人"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="formInline.phonenumber"
                    placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item label="订单状态">
          <el-select v-model="formInline.orderstate"
                     placeholder="订单状态">
            <el-option label="已受理"
                       value="ok"></el-option>
            <el-option label="未受理"
                       value="no"></el-option>
          </el-select>
        </el-form-item>
        <div class="block">
          <span class="demonstration">选择时间 </span>
          <el-date-picker v-model="value1"
                          type="datetimerange"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <el-form-item>
          <el-button type="primary"
                     @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <!-- 表单 -->
      <el-table :data="tableData"
                border
                style="width: 100%">
        <el-table-column fixed
                         prop="ordernumber"
                         label="订单号"
                         width="150">
        </el-table-column>
        <el-table-column prop="time"
                         label="下单时间"
                         width="120">
        </el-table-column>
        <el-table-column prop="phonenumber"
                         label="手机号"
                         width="120">
        </el-table-column>
        <el-table-column prop="name"
                         label="收货人"
                         width="120">
        </el-table-column>
        <el-table-column prop="address"
                         label="配送地址"
                         width="300">
        </el-table-column>
        <el-table-column prop="arrivetime"
                         label="送达时间"
                         width="120">
        </el-table-column>
        <el-table-column prop="usernote"
                         label="用户备注"
                         width="120">
        </el-table-column>
        <el-table-column prop="orderamount"
                         label="订单金额"
                         width="120">
        </el-table-column>
        <el-table-column prop="orderstate"
                         label="订单状态"
                         width="120">
        </el-table-column>
        <el-table-column fixed="right"
                         label="操作"
                         width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)"
                       type="text"
                       size="small">查看</el-button>
            <el-button type="text"
                       size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="block">
        <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="currentPage4"
                       :page-sizes="[10, 20, 30, 40]"
                       :page-size="10"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="40">
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //查询的数据
      formInline: {
        ordernumber: '',
        consignee: '',
        phonenumber: '',
        orderstate: ''
      },
      tableData: [
        {
          ordernumber: '14214314',
          time: '2020-6-1',
          phonenumber: '13050352253',
          name: '小貂蝉',
          address: '上海市普陀区金沙江路 1518 弄',
          arrivetime: '2020-6-2',
          usernote: '微辣',
          orderamount: '108',
          orderstate: '已受理'
        }
      ],
      //分页
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    handleClick(row) {
      console.log(row)
    },
    //分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="less" scoped>
.el-table {
  margin-bottom: 15px;
}
</style>