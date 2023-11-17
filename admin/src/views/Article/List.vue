<template>
  <div>
    <h1>文章列表</h1>
    <el-table :data="articles">
      <el-table-column prop="_id" label="ID" width="220"> </el-table-column>
      <el-table-column prop="title" label="title"> </el-table-column>
      <el-table-column fixed="right" label="Operations" width="180">
        <template v-slot="scope" v-if="display">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/articles/edit/${scope.row._id}`)"
            >Edit</el-button
          >
          <el-button type="text" size="small" @click="remove(scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: [],
      display: true,
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$axios.get("rest/articles");
      this.articles = res.data;
    },
    async remove(row) {
      this.$confirm(`是否确认要删除分类 “${row.title}”`, "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      }).then(async () => {
        await this.$axios.delete(`rest/articles/${row._id}`);
        this.$message({
          type: "success",
          message: "Delete completed",
        });
        this.fetch();
      });
    },
  },
};
</script>
