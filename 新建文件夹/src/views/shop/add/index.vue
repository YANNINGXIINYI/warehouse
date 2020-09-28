<template>
  <div class="addShop">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="商品名称" width="200px" prop="title">
        <!-- 必选；字符长度最大为15 -->
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="一级分类" width="200px" prop="type_one">
        <!-- 必选；字符长度最大为15 -->
        <el-input v-model="form.type_one"></el-input>
      </el-form-item>
      <el-form-item label="二级分类" width="200px" prop="type_two">
        <!-- 必选；字符长度最大为15 -->
        <el-input v-model="form.type_two"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" width="200px" prop="price">
        <!-- 必填；最大差长度为10 只能输入数组字符串 -->
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="商品数量" width="200px" prop="nice">
        <!-- 必填 只能输入整数的数字字符串 -->
        <el-input v-model="form.nice"></el-input>
      </el-form-item>

      <el-form-item label="商品描述" width="200px" prop="supplier">
        <!-- 必填 字符长度最小为10 最大为20 -->
        <el-input v-model.number="form.supplier"></el-input>
      </el-form-item>
      <el-form-item label="选择图片" width="200px">
        <!-- 
          注意：如何需求变为 阿里云 七牛云的服务；那么改变action 
          action 存放图片的服务地址
          on-preview 点击图片列表触发；做【图片预览】等
          before-upload 图片上传前触发；【用来验证 格式  大小 提示信息】
        -->
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-success="handleSuccess"
          :file-list="fileList"
          list-type="picture"
          show-file-list
          :before-upload="beforeAvatarUpload"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click.prevent="handleSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {addShop} from '../../../api/shop'

export default {
  name: "AddShop",
  data() {
    return {
      form: {
        title: "",
        price: 0,
        nice: 0,
        supplier: "",
        img_list_url: "",
        img_url: "",
        imgs: [],
        type_one: "",
        type_two: "",
      },
      rules: {
        title: [
          { required: true, message: "请输入商品名称" },
          { max: 15, message: "字符长度不能超过15" },
        ],
        price: [
          { required: true },
          { pattern: /^\d*$/, message: "只能输入数字" },
        ],
        nice: [
          { required: true, message: "请输入商品名称" },
          { pattern: /^\d*$/, message: "只能输入数字" },
        ],
        supplier: [
          { required: true, message: "请输入商品名称" },
          { min: 5, message: "字符最小字符为5" },
          { max: 15, message: "字符最大长度15" },
        ],
        type_one: [{ required: true, message: "请输入商品名称" }],
        type_two: [{ required: true, message: "请输入商品名称" }],
      },
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
    };
  },
  methods: {
    // 点击列表中图片触发；可以做预览
    handlePreview(data) {
      console.log(data, "点击文件列表中已上传的文件时的钩子");
      // 实现预览效果
    },
    // 在列表中删除图片展示触发
    handleRemove(data) {
      console.log(data, "删除");
    },
    // 图片上传成功触发
    // file 文件对象；file.url 返回图片的粗放的地址
    handleSuccess(data, file, fileList) {
      console.log(data, "上传成功");
      console.log(file);
      let { name, url } = file;
      this.fileList.push({
        name,
        url,
      });
    },
    // 上传图片前触发
    // file 文件对象；包含图片所有信息；大小 字节  格式 .....
    beforeAvatarUpload(file) {
      console.log(file);
      const isJPGPng =
        file.type === "image/jpg" ||
        file.tyoe == "image/png" ||
        file.type == "image/jpeg";

      const isLt2M = (2 * file.size) / 2048 / 2048 < 1;
      console.log(isLt2M);

      if (!isJPGPng) {
        this.$message.error("上传头像图片只能是 jpeg/ng/jpg格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 500!");
      }
      return isJPGPng && isLt2M;
    },
    handleSubmit() {
      addShop({title:'aaa'})
      // this.$refs["form"].validate((voild) => {
      //   if (voild) {
      //     let data = this.form;
      //     data.img_list_url = this.fileList[0].url;
      //     data.img_url = this.fileList[0].url;
      //     let imgs = [];
      //     for (let i = 0; i < this.fileList.length; i++) {
      //       imgs.push(this.fileList[i].url);
      //     }
      //     data.imgs = String(JSON.stringify(imgs));
      //     data.price = String(data.price);
      //     data.nice = String(data.nice)
      //     console.log(data); // 表单验证通过后的data
      //     // 发送 新增商品列表的请求
      //     addShop(data).then((res)=>{
      //       let {data} = res;
      //       data = JSON.parse(JSON.stringify(data))
      //       console.log(data)
      //     }).catch((err)=>{
      //       console.log(err)
      //     })
      //   }else{
      //     console.log('验证不通过')
      //     return false
      //   }
      // });
    },
  },
};
</script>

<style>
.addShop {
  width: 50%;
  /* margin: 10px auto; */
  margin-top: 20px;
  margin-left: 50px;
}
</style>