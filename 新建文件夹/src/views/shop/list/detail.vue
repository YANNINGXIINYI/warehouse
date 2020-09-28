<template>
  <div>
    <!-- <el-dialog title="商品详情" :visible.sync="dialogFormVisible">

    </el-dialog>-->
    <el-dialog :before-close="handleClose" title="商品详情" :visible.sync="dialogFormVisible">
      <div>
        <div>
          <span>商品名称：</span>
          <span>{{shopItem.title}}</span>
        </div>
        <div>
          <span>商品价格：</span>
          <span>{{shopItem.price}}</span>
        </div>
        <div>
          <span>商品数量：</span>
          <span>{{shopItem.nice}}</span>
        </div>
        <div>
          <span>一级分类：</span>
          <span>{{shopItem.type_one}}</span>
        </div>
        <div>
          <span>二级分类：</span>
          <span>{{shopItem.type_two}}</span>
        </div>
        <div>
          <span>商品图片</span>
          <span>{{shopItem.img_list_url}}</span>
          <img :src="shopItem.img_list_url" alt />
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleConcel">取 消</el-button>
        <el-button type="primary" @click="handleConcel">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["dialogFormVisible", "shopItem"],
  data() {
    return {};
  },
  methods: {
    handleConcel() {
      this.$emit("onHidden", false);
    },
    handleConcel() {
      this.$emit("onHidden", false);
    },
    handleClose() {
      this.$confirm("确认关闭？")
        .then(() => {
          this.$emit("onHidden", false);
          done();
        })
        .catch(() => {});
    },
  },
};
</script>

<style>
</style>