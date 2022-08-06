<template>
  <div class="container">
    <!-- components title -->

    <el-card class="box-card">
      <Title></Title>
    </el-card>
    <el-card class="box-card content">
      <Content :list="list"></Content>

      
      <!-- 分页组件 -->
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
    </el-card>
  </div>
</template>

<script>
import Content from '@/components/content'
import Title from '@/components/Title'
import { getgdList } from '@/api/user'
export default {
  data() {
    return {
      list: [],
      page: {
        pageIndex: 1,
        pageSize: 10,
        totalCount: 1102,
        totalPage: 111
      }
    }
  },
  components: {
    Title,
    Content
  },

  created() {
    this.getgdList()
  },

  methods: {
    async getgdList() {
      const { data } = await getgdList(this.page)
      console.log(data)
      this.list = data.currentPageRecords
      this.page.totalCount = parseInt(data.totalCount)
      
    },
      handleCurrentChange(newPage) {
        
      this.page.pageIndex  =  parseInt(newPage)
      this.getgdList()
    },
  }
}
</script>

<style scoped lang="less">
.container {
  padding: 20px;
  .box-card {
    padding: 20px;
  }
  .content {
    margin-top: 20px;
  }
}
</style>
