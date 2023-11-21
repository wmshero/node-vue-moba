<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}广告位</h1>
    <el-form label-width="150px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name" />
      </el-form-item>
      <el-button type="text" @click="model.items.push({})"
        ><i class="el-icon-plus"></i>添加广告</el-button
      >
      <el-form-item>
        <el-row type="flex" style="flex-wrap: wrap; width: 100%">
          <el-col
            :md="24"
            v-for="(item, index) in model.items"
            :key="index"
            style="margin: 1rem"
          >
            <el-form-item label="跳转链接（URL）">
              <el-input v-model="item.url"></el-input>
            </el-form-item>
            <el-form-item label="图片" style="margin-top: 1rem">
              <el-upload
                class="avatar-uploader"
                :action="$axios.defaults.baseURL + '/upload'"
                :show-file-list="false"
                :on-success="(res) => (item.image = res.url)"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="model.image" :src="model.image" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
              </el-upload>
            </el-form-item>

            <el-form-item>
              <el-button
                size="small"
                type="danger"
                @click="model.items.splice(index, 1)"
                >删除</el-button
              >
            </el-form-item>
          </el-col>
        </el-row>
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
      model: {
        items: [],
      },
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
        res = await this.$axios.put(`rest/ads/${this.id}`, this.model);
      } else {
        res = await this.$axios.post("rest/ads", this.model);
      }
      this.$router.push("/ads/list");
      this.$message({
        type: "success",
        message: "保存",
      });
    },
    async fetch() {
      const res = await this.$axios.get(`rest/ads/${this.id}`);
      this.model = { ...this.model, ...res.data };
    },
  },
};
</script>
