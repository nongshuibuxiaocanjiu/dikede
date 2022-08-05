<template>
  <div>
    <!-- 内容 -->
    <div class="btn-header">
      <el-button type="primary" icon="el-icon-search" class="add"
        >新建
      </el-button>
      <el-button type="primary" class="gdbtn">工单配置</el-button>
    </div>
    <div class="container">
      <!-- 内容头部 -->
      <el-row type="flex" class="header_container">
        <el-col class="col header_one"> 序号 </el-col>
        <el-col class="col"> 工单编号 </el-col>
        <el-col class="col"> 设备编号 </el-col>
        <el-col class="col"> 工单类型 </el-col>
        <el-col class="col"> 工单方式 </el-col>
        <el-col class="col"> 工单状态 </el-col>
        <el-col class="col"> 运营人员 </el-col>
        <el-col class="col"> 创建日期 </el-col>
        <el-col class="col"> 操作 </el-col>
      </el-row>
    </div>
    <div>
      <!-- 内容主体 -->
      <el-row
        type="flex"
        class="main"
        v-for="(item, index) in list"
        :key="item.taskId"
      >
        <el-col class="col"> {{ index + 1 }} </el-col>
        <el-col class="col"> {{ item.taskCode }} </el-col>
        <el-col class="col"> {{ item.innerCode }} </el-col>
        <el-col class="col"> {{ item.taskType.typeName }} </el-col>
        <el-col class="col"> 手动 </el-col>
        <el-col class="col">
          {{ item.taskStatusTypeEntity.statusName }}
        </el-col>
        <el-col class="col"> {{ item.userName }} </el-col>
        <el-col class="col"> {{ item.updateTime | formatDate}} </el-col>
        <el-col class="col"> 查看详情 </el-col>
      </el-row>
      <!-- 分页 -->
      <div class="block">
        <span class="demonstration">显示总数</span>
        <el-pagination
          layout="total, prev, pager, next"
          :total="page.totalCount"
          :current-page="page.pageIndex"
          :page-size="page.pageSize"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { getgdList } from '@/api/user'
export default {
  name: 'contet',
  data() {
    return {
      list: [],
      page:{
        pageIndex: 1,
        pageSize:10,
        totalCount:1102,
        totalPage:111
      }
    }
  },

  created() {
    this.getgdList()
  },
  mounted() {
  },

  methods: {
    async getgdList() {
      const {data} = await getgdList(this.page)
      console.log(data);
      this.page.pageIndex = data.pageIndex
      this.page.totalPage = data.totalPage
      this.list = data.currentPageRecords
    },
      handleCurrentChange(newPage) {
        console.log(newPage);
        console.log(typeof(this.page.pageIndex));
        this.page.pageIndex  =  newPage
      },
  }
}
</script>

<style scoped lang="less">
.btn-header {
  margin-bottom: 30px;
}
.add {
  width: 80px !important;
  height: 36px;
  padding: 0;
  background: linear-gradient(135deg, #ff9743, #ff5e20) !important;
  border: none;
}
.gdbtn {
  width: 80px !important;
  height: 36px;
  padding: 0;
  background-color: #fbf4f0 !important;
  border: none;
  color: #655b56 !important;
}
.col {
  flex: 1;
  // text-align: center;
}
.main {
  margin: 25px 0;
  padding-left: 20px;
}
.header_container {
  height: 50px;
  padding-left: 20px;
  line-height: 50px;
  background-color: #f4f6fb;
}
</style>
