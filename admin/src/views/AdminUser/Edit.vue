<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}管理员</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="username">
        <el-input v-model="model.username" />
      </el-form-item>
      <el-form-item label="password">
        <el-input v-model="model.password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {},
  },
  setup() {},
  data() {
    return {
      model: {},
    };
  },
  created() {
    if (this.id) {
      this.fetch();
    }
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.$axios.put(`rest/admin_users/${this.id}`, this.model);
      } else {
        res = await this.$axios.post("rest/admin_users", this.model);
      }
      this.$router.push("/admin_users/list");
      this.$message({
        type: "success",
        message: "保存",
      });
    },
    async fetch() {
      const res = await this.$axios.get(`rest/admin_users/${this.id}`);
      this.model = res.data;
    },
  },
};
</script>
