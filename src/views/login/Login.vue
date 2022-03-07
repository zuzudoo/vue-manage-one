<template>
  <div class="login_back">
    <el-form
      :model="form"
      status-icon
      :rules="rules"
      ref="form"
      label-width="100px"
      class="login-container"
    >
      <h3 class="login_title">系统登录</h3>
      <!-- 账号 -->
      <el-form-item
        label="用户名"
        label-width="80px"
        prop="username"
        class="username"
      >
        <el-input
          type="input"
          v-model="form.username"
          autocomplete="off"
          placeholder="请输入账号"
        ></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item
        label="密码"
        label-width="80px"
        prop="password"
        class="password"
      >
        <el-input
          type="input"
          v-model="form.password"
          autocomplete="off"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item class="login_submit">
        <el-button type="primary" @click="login" class="login_submit"
          >登录</el-button
        >
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
    <vue-particles
      color="#409EFF"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#409EFF"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
// import Mock from 'mockjs'
import { getMenu } from "@/network/data";

export default {
  name: "Login",
  data() {
    return {
      form: {
        userName: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", tirgger: "blur" },
          { min: 3, message: "用户名长度不能小于3位", tirgger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", tirgger: "blur" }],
      },
    };
  },
  methods: {
    login() {
      getMenu(this.form).then(({ data: res }) => {
        console.log(res, "res");
        if (res.code === 20000) {
          console.log(res);
          this.$store.commit("clearMenu");
          this.$store.commit("setMenu", res.data.menu);
          this.$store.commit("setToken", res.data.token);
          this.$store.commit("addMenu", this.$router);
          this.$router.push({ name: "home" });
        } else {
          this.$message.warning(res.data.message);
        }
      });
      // const token = Mock.random.guid()
      // this.$store.commit('setToken', token)
      // this.$router.push({name: 'home'})
    },
    resetForm() {
      this.$refs.form.resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.login_back {
  background-image: linear-gradient(-180deg, #1a1454 0%, #0e81a5 100%);
  /*background-image: url("../images/bg_login.png");*/
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 100%;
  // 去除滚动条部分
  overflow-y: hidden;
  padding: 0;
  margin: 0;
  .login-container {
    position: absolute;
    border-radius: 15px;
    background-clip: padding-box;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    padding: 35px 35px 15px 35px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .login_title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .login_submit {
      margin: 10px auto 0px auto;
      button {
        margin-right: 10px;
      }
    }
  }
}
</style>