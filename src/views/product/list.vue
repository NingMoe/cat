<template>
  <div class="product-list">
    <el-button type="primary" class="button-product-add">添加产品</el-button>
    <el-table :data="products">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="name" label="产品名称"></el-table-column>
      <el-table-column prop="calorie" label="产品热量含量"></el-table-column>
      <el-table-column prop="protein" label="产品蛋白质含量"></el-table-column>
      <el-table-column prop="fat" label="产品脂肪质含量"></el-table-column>
      <el-table-column prop="weight" label="产品含量(克)"></el-table-column>
      <el-table-column prop="erCode" label="产品二维码参数"></el-table-column>
      <el-table-column prop="imgSrc" label="广告图片"></el-table-column>
      <el-table-column prop="visitorsAdsText" label="游客结果广告文字"></el-table-column>
      <el-table-column prop="customerAdsText" label="客户结果广告文字"></el-table-column>
      <el-table-column prop="weidianLink" label="广告链接"></el-table-column>
      <el-table-column label="广告链接">
        <template scope="scope">
          <el-button @click="handleDeleteClick" type="text" size="small">删除</el-button>
          <el-button @click="handleUpClick" type="text" size="small">上移</el-button>
          <el-button @click="handleDownClick" type="text" size="small">下移</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        products: [
          {
            "id": 1,
            "name": "萌猫定制鸡肉猫饭",
            "calorie": 200,
            "protein": 100,
            "fat": 50,
            "weight": 100,
            "erCode": "xxx",
            "imgSrc": "http://27ng.com/logo.png",
            "visitorsAdsText": "根据计算你家宝贝每天能吃掉萌猫定制鸡肉猫饭<span><span>克合计<span><span>包~",
            "customerAdsText": "根据计算你家宝贝每天能吃掉鸭肉猫饭<span><span>克合计<span><span>包~",
            "weidianLink": "https://item.weidian.com/814821"
          },
          {
            "id": 2,
            "name": "萌猫定制鸡肉猫饭",
            "calorie": 200,
            "protein": 100,
            "fat": 50,
            "weight": 100,
            "erCode": "xxx",
            "imgSrc": "http://27ng.com/logo.png",
            "visitorsAdsText": "根据计算你家宝贝每天能吃掉萌猫定制鸡肉猫饭<span><span>克合计<span><span>包~",
            "customerAdsText": "根据计算你家宝贝每天能吃掉鸭肉猫饭<span><span>克合计<span><span>包~",
            "weidianLink": "https://item.weidian.com/814821"
          }
        ]
      }
    },
    methods: {
      handleDeleteClick(e) {
        console.log(e)
      },
      handleUpClick() {
        console.log('上移')
      },
      handleDownClick() {
        console.log('下移')
      }
    }
  }
</script>

<style scoped>
  .product-list {
    padding: 20px;
  }
  .button-product-add {
    margin-bottom: 20px;
  }
</style>