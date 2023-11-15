<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}分类</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item>
        <el-select v-model="model.parent">
          <el-option
            v-for="item in parents"
            :label="item.name"
            :key="item._id"
            :value="item._id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name" />
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
      parents: [],
    };
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.$axios.put(`rest/categories/${this.id}`, this.model);
      } else {
        res = await this.$axios.post("rest/categories", this.model);
      }
      this.$router.push("/categories/list");
      this.$message({
        type: "success",
        message: "保存",
      });
    },
    async fetch() {
      const res = await this.$axios.get(`rest/categories/${this.id}`);
      this.model = res.data;
    },

    async fetchParents() {
      const res = await this.$axios.get(`rest/categories`);
      this.parents = res.data;
    },
  },
  created() {
    if (this.id) {
      this.fetch();
    }
    this.fetchParents();
  },
};
</script>
