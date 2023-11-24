<template>
  <div class="login-container">
    <el-card header="请先登陆" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async login() {
      const { data } = await this.$axios.post("login", this.model);
      if (data) {
        localStorage.token = data.token;
        this.$router.push("/");
        this.$message({
          type: "success",
          message: "login successful",
        });
      }
    },
  },
};
</script>

<style scoped>
.login-container {
}
.login-card {
  width: 25rem;
  margin: 5rem auto;
}
</style>
