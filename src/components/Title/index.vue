<template>
  <div>
    <div>
      <!-- 头部 -->
      <el-row>
        <el-col :span="6" class="">
          工单管理：
          <el-input
            v-model="input"
            placeholder="请输入内容"
            style="width: 205px"
          ></el-input>
        </el-col>
        <el-col :span="6">
          工单状态：
          <el-autocomplete
            class="inline-input"
            v-model="state1"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect"
          ></el-autocomplete>
        </el-col>
        <el-col :span="4">
          <el-button class="btn-ss" icon="el-icon-search"
            >搜索</el-button
          >
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state1: '',
      input: ''
    }
  },

  created() {},
  mounted() {
    // 下拉菜单
    this.restaurants = this.loadAll()
  },

  methods: {
    querySearch(queryString, cb) {
      // 下拉菜单
      var restaurants = this.restaurants
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    handleSelect(item) {
      // 下拉菜单
      console.log(item)
    },
    loadAll() {
      // 下拉菜单
      return [
        {
          value: '三全鲜食（北新泾店）',
          address: '长宁区新渔路144号'
        },
        {
          value: 'Hot honey 首尔炸鸡（仙霞路）',
          address: '上海市长宁区淞虹路661号'
        },
        {
          value: '新旺角茶餐厅',
          address: '上海市普陀区真北路988号创邑金沙谷6号楼113'
        },
        { value: '泷千家(天山西路店)', address: '天山西路438号' }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.btn-ss {
  background-color: #5f73e5;
  color: #fff;
  font-size: 18px;
}
</style>
