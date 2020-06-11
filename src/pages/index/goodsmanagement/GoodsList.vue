<template>
  <div>
    <el-card>
      <h1>商品列表</h1>
      <!-- 商品列表 -->
      <el-table :data="tableData"
                style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left"
                     inline
                     class="demo-table-expand">
              <el-form-item label="商品 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="商品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="所属分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="商品价格">
                <span>{{ props.row.goodsprice }}</span>
              </el-form-item>
              <el-form-item label="商品图片">
                <span>{{ props.row.goodsimage }}</span>
              </el-form-item>
              <el-form-item label="创建时间">
                <span>{{ props.row.creationtime }}</span>
              </el-form-item>
              <el-form-item label="商品评价">
                <span>{{ props.row.evaluation }}</span>
              </el-form-item>
              <el-form-item label="商品销量">
                <span>{{ props.row.sales }}</span>
              </el-form-item>
              <el-form-item label="商品描述">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="商品名称"
                         prop="name">
        </el-table-column>
        <el-table-column label="所属分类"
                         prop="category">
        </el-table-column>
        <el-table-column label="商品价格"
                         prop="goodsprice">
        </el-table-column>
        <el-table-column label="商品图片"
                         prop="goodsimage">
        </el-table-column>
        <el-table-column label="商品描述"
                         prop="desc">
        </el-table-column>
        <!-- 操作 -->
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini"
                       @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini"
                       type="danger"
                       @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="block">
        <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="currentPage4"
                       :page-sizes="[5, 10, 15, 20]"
                       :page-size="5"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="48">
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    //商品数据
    return {
      tableData: [
        {
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          goodsprice: '18',
          goodsimage: '',
          creationtime: '2020-5-30',
          evaluation: '100',
          sales: '288',
          desc: '荷兰优质淡奶，奶香浓而不腻'
        }
      ],
      //分页
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  //操作
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style lang="less" scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-table {
  margin-bottom: 20px;
}
</style>