<template>
  <div class="container">
    <!-- components title -->

    <el-card class="box-card">
      <Title></Title>
    </el-card>
    <el-card class="box-card content">
      <Content ></Content>
    </el-card>
  </div>
</template>

<script>
import Content from '@/components/content'
import Title from '@/components/Title'

export default {
  data() {
    return {}
  },
  components: {
    Title,
    Content
  },

  created() {

  },

  methods: {

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
