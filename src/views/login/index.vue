<template>
  <div class="container">
    <div class="form-group">
      <img src="../../assets/微信图片_20220730195956.png" alt="" class="img">
      <div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item>
            <el-input v-model="form.name" placeholder="请输入账号">
              <i slot="prefix" class="el-input__icon el-icon-phone" />
            </el-input>
          </el-form-item>
        </el-form>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item>
            <el-input v-model="form.password" placeholder="请输入密码" show-password>
              <i slot="prefix" class="el-input__icon el-icon-lock" />
            </el-input>
          </el-form-item>
        </el-form>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item>
            <el-input v-model="form.yzm" placeholder="请输入验证码">
              <i slot="prefix" class="el-input__icon el-icon-turn-off" />
              <i slot="suffix" >
                <img src="../../assets/aFtQqqWbbPyQOJUJaMPxbZksmdJ3RA8x.jpg" alt="">
              </i>

            </el-input>
          </el-form-item>
        </el-form>
        <!-- 按钮 -->
        <el-button type="primary" style="width:100%;margin-bottom:30px;height:52px;background-color:#5b69ed">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: 'admin',
        password: '123456',
        yzm: ''

      }
    }
  },

  created() {

  },

  methods: {

  }
}
</script>

<style scoped lang='less'>
.container{
  background: url('../../assets/微信图片_20220730195948.png');
  height: 100%;
  width: 100%;
  background-size: cover;
  .form-group{
    position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    padding: 76px 35px 0;
    background: #fff;
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
    .img{
      position: absolute;
    width: 96px;
    height: 96px;
    top: -46px;
    left: 50%;
    margin-left: -48px;
    }
  }
  /deep/.el-form-item__content{
    margin-left: 0px !important;
    height: 52px;
  .el-input__inner{
    height: 52px !important
  }
  .el-input .el-input__clear{
    font-size: 25px;
    margin-right: 5px;
    margin-top: 3px;
  }
  }
}
</style>
