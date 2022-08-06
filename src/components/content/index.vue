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
      <el-table border :data="list">
        <el-table-column type="index" label="序号" />
        <el-table-column label="工单编号" prop="taskCode" />
        <el-table-column label="设备编号" prop="innerCode" />
        <el-table-column label="工单类型" prop="taskType.typeName" />
        <el-table-column
          label="工单方式"
          prop="createType"
          :formatter="formatterEvent"
        />
        <el-table-column
          label="工单状态"
          prop="taskStatus"
          :formatter="pask"
        />
        <el-table-column label="运营人员" prop="userName" />
        <el-table-column label="创建日期" prop="createTime">
          <template v-slot="{ row }">
            {{ row.createTime | formatDate }}
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right">
          <template>
            <el-button type="text" size="small" @click="detail"
              >查看</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 弹出层 -->
      <dialog :dialogTableVisible="dialogTableVisible"/>
      <!-- /弹出层  -->
    </div>
  </div>
</template>

<script>
import dialog from './dialog.vue'
export default {
  name: 'contet',
  data() {
    return {
      dialogTableVisible: true
    }
  },
  components: {
    dialog
  },
  props: {
    list: {
      type: Array
    }
  },

  created() {},
  mounted() {},

  methods: {
    formatterEvent(row, column, cellValue, index) {
      if (cellValue == 0) {
        return '自动'
      } else if (cellValue == 1) {
        return '手动 '
      }
    },
    pask(row, column, cellValue) {
      if (cellValue == 3) {
        return '取消'
      } else if (cellValue == 4) {
        return '完成'
      }
    },
    detail() {
      // console.log(11);
      // this.$emit('detail')
    }
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
.tou {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;
}
</style>
