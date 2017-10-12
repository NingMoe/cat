<template>
  <div class="product-list">
    <el-button
      @click="handleLinkAddProduct"
      type="primary"
      class="product-list__button">
      添加产品
    </el-button>
    <el-table
      class="product-list__table"
      border
      row-key="id"
      :data="pageDetail.dataList">
      <el-table-column
        prop="id"
        width="60px"
        label="序号"></el-table-column>
      <el-table-column
        prop="name"
        label="产品名称"></el-table-column>
      <el-table-column
        width="80px"
        prop="calorie"
        label="产品热量含量"></el-table-column>
      <el-table-column
        width="80px"
        prop="protein"
        label="产品蛋白质含量"></el-table-column>
      <el-table-column
        width="80px"
        prop="fat"
        label="产品脂肪质含量"></el-table-column>
      <el-table-column
        width="80px"
        prop="weight"
        label="产品含量(克)"></el-table-column>
      <el-table-column
        width="80px"
        prop="er_code"
        label="产品二维码参数"></el-table-column>
      <el-table-column
        prop="img_src"
        label="广告图片"></el-table-column>
      <el-table-column
        prop="visitors_ads_text"
        label="游客结果广告文字"></el-table-column>
      <el-table-column
        prop="customer_ads_text"
        label="客户结果广告文字"></el-table-column>
      <el-table-column
        prop="weidian_link"
        label="广告链接"></el-table-column>
      <el-table-column
        width="140px"
        label="操作">
        <template scope="scope">
          <el-button
            @click="handleDeleteClick(scope.row.id, scope.row.name)"
            type="text"
            size="small">
            删除
          </el-button>
          <el-button
            @click="handleUpDown(scope.row.id, 1, scope.$index)"
            type="text"
            size="small">
            上移
          </el-button>
          <el-button
            @click="handleUpDown(scope.row.id, -1, scope.$index)"
            type="text"
            size="small">
            下移
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="product-list__pagination"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      :current-page="pageDetail.currentPage || 1"
      :pageCount="pageDetail.totalPage"
      :page-size="pageDetail.pageSize || 10"
      :page-sizes="[2, 10, 20, 30, 40, 50]"
      :total="pageDetail.rowCnt"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
  </div>
</template>

<script>

  export default {
    created() {
      this.__fetchProductList()
    },
    data() {
      return {
        pageDetail: {
          dataList: []
        }
      }
    },
    methods: {
      /**
       *  添加产品
       */
      handleLinkAddProduct() {
        this.$router.push({
          path: 'add'
        })
      },
      /**
       *  获取产品列表
       */
      __fetchProductList({
        pageSize = this.pageDetail.pageSize || 10,
        page = this.pageDetail.currentPage || 1} = {}) {
        this.$axios.post(this.$apis.product.list, {
          pageSize,
          page
        })
        .then(res => {
          this.pageDetail = res
        })
        .catch(error => {
          this.$message.error(error.message)
        })
      },
      /**
       * currentPage 改变时会触发
       * @param {Number} currentPage 当前页currentPage
       */
      handleCurrentChange(currentPage) {
        this.pageDetail.currentPage = currentPage
        this.__fetchProductList({currentPage})
      },
      /**
       *  pageSize 改变时会触发
       *  @param {Number} size 每页条数size
       */
      handleSizeChange(size) {
        this.pageDetail.pageSize = size
        this.__fetchProductList()
      },
      /**
       *  删除产品
       *  param {Number} 产品id
       *  param {String} 产品名称
       */
      handleDeleteClick(id, name) {
        this.$confirm(`确定删除${name}这款产品吗`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        })
        .then(() => {
          this.__deleteProduct(id)
        })
        .catch(() => {
        })
      },
      /**
       *  删除产品
       *  param {Number} 产品id
       */
      __deleteProduct(id) {
        this.$axios.post(this.$apis.product.delete, {
            id
          })
        .then(res => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.__fetchProductList()
        })
        .catch(error => {
          this.$message.error(error.message)
        })
      },
      /**
       *  上移下移
       *  param {Number} id 产品id
       *  param {Nunber} status 状态 1 上移 -1 下移
       *  param {Number} index 当前列index
       */
      handleUpDown(id, status, index) {
        const statusText = status === 1 ? '上移' : '下移'
        this.$axios.post(this.$apis.product.sort, {
          id,
          status
        })
        .then(res => {
          this.$message({
            type: 'success',
            message: `${statusText}成功`,
            duration: 500,
            onClose: () => {
              const currentPage = this.pageDetail.currentPage
              this.__fetchProductList({currentPage})
            }
          })
        })
        .catch(error => {
          this.$message.error(error.message)
        })
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .product-list
    &__button
      margin-bottom 20px

    &__table
      margin-bottom 20px
      font-size 13px

      th
        .cell
          line-height 20px !important

    &__pagination
      display flex
      justify-content flex-end
</style>