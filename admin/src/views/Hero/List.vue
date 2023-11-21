<template>
  <div>
    <h1>英雄列表</h1>
    <el-table :data="heroes">
      <el-table-column prop="_id" label="ID" width="220"> </el-table-column>
      <el-table-column prop="name" label="name"> </el-table-column>
      <el-table-column prop="title" label="称号"> </el-table-column>
      <el-table-column prop="avatar" label="avatar">
        <template v-slot="scope">
          <img :src="scope.row.avatar" style="height: 3rem" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="Operations" width="180">
        <template v-slot="scope" v-if="display">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/heroes/edit/${scope.row._id}`)"
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
      heroes: [],
      display: true,
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$axios.get("rest/heroes");
      this.heroes = res.data;
    },
    async remove(row) {
      this.$confirm(`是否确认要删除分类 “${row.name}”`, "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(async () => {
          await this.$axios.delete(`rest/heroes/${row._id}`);
          this.$message({
            type: "success",
            message: "Delete completed",
          });
          this.fetch();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
