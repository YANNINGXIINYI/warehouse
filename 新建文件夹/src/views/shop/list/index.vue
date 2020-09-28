<template>
  <div>
    <!-- 表体 data 绑定表单渲染的数据 boder 设置表款 -->
    <div class="container">
      <el-table :data="shoplist" style="width:100%" border stripe height="480">
        <!-- 表格的行组件 -->
        <el-table-column label="商品名称" width="170px" prop="title"></el-table-column>
        <el-table-column label="商品价格" width="100px" prop="price"></el-table-column>
        <el-table-column label="商品数量" width="100px" prop="nice"></el-table-column>
        <el-table-column label="一级分类" width="120px" prop="type_one"></el-table-column>
        <el-table-column label="二级分类" width="120px" prop="type_two"></el-table-column>
        <el-table-column label="操作">
          <!-- scope.$index 第几行索引 scope.row 一行的数据 -->
          <template slot-scope="scope">
            <el-button size="mini" @click="handleUpdate(scope.$index,scope.row)">更新</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
            <el-button size="mini" @click="handleDetail(scope.$inde,scope.row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 分页 -->
    <div class="fixed">
      <el-pagination small background layout="prev, pager, next" :page-size="30" :page-count="30"></el-pagination>
    </div>
    <!-- 详情 -->
    <el-detail :shopItem="shopItem" :dialogFormVisible="dialogFormVisible" @onHidden="handleHidden"></el-detail>
  </div>
</template>

<script>
import { getShopList, deleltShop } from "../../../api/shop";

import ElDetail from "./detail";
export default {
  components: {
    ElDetail,
  },
  data() {
    return {
      shoplist: [],
      dialogFormVisible: false,
      shopItem: {},
      page: 1,
    };
  },
  created() {
    console.log("初始化");
    this.getShopList();
  },
  methods: {
    handleUpdate(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("确认删除码？")
        .then(() => {
          deleltShop({
            id: row.Id,
          }).then((res) => {
            let { data } = res;
            data = JSON.parse(JSON.stringify(data));
            this.$message({
              message:data.messsage
            })
            if (data.code == 1) {
              // 刷新页面
              location.reload()
            }
          });
        })
        .catch(() => {});
    },
    handleDetail(index, row) {
      this.dialogFormVisible = true;
      this.shopItem = row;
    },
    handleHidden(flag) {
      this.dialogFormVisible = flag;
    },
    getShopList() {
      getShopList({
        page: this.page,
      })
        .then((res) => {
          console.log(res);
          let { data } = res;
          data = JSON.parse(JSON.stringify(data.data));
          this.shoplist = data;
        })
        .catch((err) => {
          console.log(err, "err");
          this.$message({
            message: "获取分页商品列表失败了",
          });
        });
    },
  },
};
</script>
<style lang="css">
.fixed {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0%);
}
</style>
