<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}分类</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name" />
      </el-form-item>
      <el-form-item label="图标">
        <el-upload
          class="avatar-uploader"
          :action="$axios.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :header="getAuthHeaders()"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit"> 保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import getAuthHeaders from "@/plugins/getAuthHeaders";
import { ElMessage } from "element-plus";
export default {
  props: {
    id: {},
  },
  setup() {
    return { getAuthHeaders };
  },
  data() {
    return {
      model: {},
      imageUrl: "",
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
        res = await this.$axios.put(`rest/items/${this.id}`, this.model);
      } else {
        res = await this.$axios.post("rest/items", this.model);
      }
      this.$router.push("/items/list");
      this.$message({
        type: "success",
        message: "保存",
      });
    },
    async fetch() {
      const res = await this.$axios.get(`rest/items/${this.id}`);
      this.model = res.data;
    },
    handleAvatarSuccess(res, file) {
      this.model.icon = res.url;
    },
    // beforeAvatarUpload(file) {
    //   const isJPG = file.type === "image/jpeg";
    //   const isLt2M = file.size / 1024 / 1024 < 2;

    //   if (!isJPG) {
    //     ElMessage.error("Avatar picture must be JPG format!");
    //   }
    //   if (!isLt2M) {
    //     ElMessage.error("Avatar picture size can not exceed 2MB!");
    //   }
    //   return isJPG && isLt2M;
    // },
  },
};
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
