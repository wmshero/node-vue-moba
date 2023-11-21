<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}文章</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple>
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="详情" class="article_body">
        <QuillEditor
          v-model:content="model.body"
          toolbar="full"
          contentType="html"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit"> 保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import ImageUploader from "quill-image-uploader";
import { ref } from "vue";
export default {
  props: {
    id: {},
  },
  setup() {
    // const modules = ref({
    //   name: "imageUploader",
    //   module: ImageUploader,
    //   options: {
    //     upload: (file) => {
    //       return new Promise((resolve, reject) => {
    //         const formData = new FormData();
    //         formData.append("file", file);
    //         this.$axios
    //           .post("upload", formData)
    //           .then((res) => {
    //             console.log(res);
    //             resolve(res.data.url);
    //           })
    //           .catch((err) => {
    //             reject("Upload failed");
    //             console.error("Error:", err);
    //           });
    //       });
    //     },
    //     theme: "snow",
    //     contentType: "html",
    //   },
    // });
    // return {
    //   modules,
    // };
  },
  data() {
    return {
      model: {},
      categories: [],
    };
  },
  created() {
    this.fetchCategories();
    if (this.id) {
      this.fetch();
    }
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.$axios.put(`rest/articles/${this.id}`, this.model);
      } else {
        res = await this.$axios.post("rest/articles", this.model);
      }
      this.$router.push("/articles/list");
      this.$message({
        type: "success",
        message: "保存",
      });
    },
    async fetch() {
      const res = await this.$axios.get(`rest/articles/${this.id}`);
      this.model = res.data;
    },
    async fetchCategories() {
      const res = await this.$axios.get(`rest/categories`);
      this.categories = res.data;
    },
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

<style lang="scss">
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
.article_body {
  .el-form-item__content {
    display: block;
    margin-bottom: 8rem;
  }
}
</style>
