<template>
  <!-- 弹出层 -->
  <el-dialog title="工单详情" :visible.sync="dialogTableVisible">
    <div class="tou">
      <div class="tou">
        <img src="../../assets/下载 (2).png" alt="" />
        <span style="margin-left: 20px">取消</span>
      </div>
      <img
        src="../../assets/pic_3.e8208e34.png"
        alt=""
        class="img-right"
      />
    </div>
    <el-row>
      <el-col :span="12"
        ><div class="grid-content bg-purple">
          <span>设备编号:</span>
          <span>010002</span>
        </div></el-col
      >
      <el-col :span="12"
        ><div class="grid-content bg-purple-light">
          <span>创建日期:</span>
          <span>2022.07.27</span>
        </div></el-col
      >
      <el-col :span="12"
        ><div class="grid-content bg-purple">
          <span>取消日期:</span>
          <span>2022.07.</span>
        </div></el-col
      >
      <el-col :span="12"
        ><div class="grid-content bg-purple-light">
          <span>运营人员：</span>
          <span>123</span>
        </div></el-col
      >
      <el-col :span="12"
        ><div class="grid-content bg-purple">
          <span>工单类型：</span>
          <span>补货工单</span>
        </div></el-col
      >
      <el-col :span="12"
        ><div class="grid-content bg-purple-light">
          <span>补货数量：</span>
          <span>补货详情</span>
        </div></el-col
      >
      <el-col :span="12"
        ><div class="grid-content bg-purple">
          <span>工单方式：</span>
          <span>自动</span>
        </div></el-col
      >
      <el-col :span="12"
        ><div class="grid-content bg-purple-light">
          <span>取消原因：</span>
          <span>工单超时</span>
        </div></el-col
      >

      <div class="grid-content ccbtn">
        <el-button type="warning">重新创建</el-button>
      </div>
    </el-row>
  </el-dialog>
  <!-- /弹出层  -->
</template>

<script>
export default {
  name:'dialog',
  data() {
    return {
      dialogTableVisible: true
    }
  },
  props: ['dialogTableVisible'],

  created() {},

  methods: {}
}
</script>

<style scoped lang="less">
.grid-content {
  margin-bottom: 10px;
}
</style>
