<template>
  <div>
    <!-- 账号列表 -->
    <el-table ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange">
      <el-table-column type="selection"
                       width="65">
      </el-table-column>
      <el-table-column label="账号"
                       width="120">
        <template slot-scope="scope">{{ scope.row.acc }}</template>
      </el-table-column>
      <el-table-column label="账号"
                       width="120">
        <template slot-scope="scope">{{ scope.row.acc }}</template>
      </el-table-column>
      <el-table-column prop="name"
                       label="用户组"
                       width="120">
      </el-table-column>
      <el-table-column prop="time"
                       label="创建时间"
                       show-overflow-tooltip>
      </el-table-column>
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
    <div style="margin-top: 20px">
      <!-- <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button> -->
      <el-button type="danger"
                 @click="toggleSelection()">批量删除</el-button>
      <el-button type="primary"
                 @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          acc: '',
          name: '',
          time: ''
        }
      ],
      multipleSelection: []
    }
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
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
</style>