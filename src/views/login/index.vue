<template>
  <div class="container">
    <div class="form-group">
      <!-- 居中图片 -->
      <img
        src="../../assets/微信图片_20220730195956.png"
        alt=""
        class="img"
      />
      <div>
        <el-form
          :ref="loginForm"
          :model="loginForm"
          :rules="loginFormRules"
          label-width="80px"
        >
          <!-- 账号 -->
          <el-form-item prop="loginName">
            <el-input
              v-model="loginForm.loginName"
              placeholder="请输入账号"
            >
              <i slot="prefix" class="el-input__icon el-icon-phone" />
            </el-input>
          </el-form-item>

          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              placeholder="请输入密码"
              show-password
            >
              <i slot="prefix" class="el-input__icon el-icon-lock" />
            </el-input>
          </el-form-item>
          <!-- 验证码 -->
          <el-form-item>
            <el-input
              v-model="loginForm.code"
              placeholder="请输入验证码"
              autofocus = true
            >
              <i
                slot="prefix"
                class="el-input__icon el-icon-turn-off"
              />
              <i slot="suffix">
                <img
                  :src="`https://likede2-java.itheima.net/api/user-service/user/imageCode/${loginForm.clientToken}`"
                  alt=""
                  @click="getphoto"
                />
              </i>
            </el-input>
          </el-form-item>
        </el-form>

        <!-- 按钮 -->
        <el-button
          type="primary"
          style="
            width: 100%;
            margin-bottom: 30px;
            height: 52px;
            background-color: #5b69ed;
          "
          @click="loginClickFn()"
          v-loading="loading"
          >登录</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { photo, loginFromFn } from '@/api/user'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('user')
export default {
  data() {
    return {
      loginForm: {
        loginName: 'admin',
        password: 'admin',
        code: '',
        clientToken: '',
        loginType: 0
      },
      loginFormRules: {
        loginName: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          {
            pattern:
              /^[a-zA-Z0-9]{2,6}$/,
            message: '账号格式不正确,需要2-6位 ',
          },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            pattern:
              /^[a-zA-Z0-9]{2,6}$/,
            message: '密码格式不正确,需要2-6位 ',
          },
        ]
      },
      loading: false
    }
  },

  created() {
    this.getNum()
    // this.loginClick()
  },

  methods: {
    getNum() {
      var chars = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
      ]
      var nums = ''
      for (var i = 0; i < 32; i++) {
        var id = parseInt(Math.random() * 61)
        nums += chars[id]
      }
      this.loginForm.clientToken = nums
    },
    async getphoto() {
      // console.log(random);
      await photo(this.loginForm.clientToken)
      this.getNum()
    },
    async loginClickFn() {
      // console.log(11);
      this.loading = true
      // await this.$refs.loginForm.validate()
      const res = await loginFromFn(this.loginForm)

      const token = res.data.token
      const code = res.data.userId
      this.getToken(token)
      this.getCode(code)
      
      this.loading = false
      if (this.$store.state.user.token) {
        this.$router.push('/')
      } else {
        return this.$message.error({
          message: '验证码不正确'
        })
      }
    },
    ...mapActions(['getToken','getCode'])
  }
}
</script>

<style scoped lang="less">
.container {
  background: url('../../assets/微信图片_20220730195948.png');
  height: 100%;
  width: 100%;
  background-size: cover;
  .form-group {
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
    .img {
      position: absolute;
      width: 96px;
      height: 96px;
      top: -46px;
      left: 50%;
      margin-left: -48px;
    }
  }
  /deep/.el-form-item__content {
    margin-left: 0px !important;
    height: 52px;
    .el-input__inner {
      height: 52px !important;
    }
    .el-input .el-input__clear {
      font-size: 25px;
      margin-right: 5px;
      margin-top: 3px;
    }
  }
}
</style>
