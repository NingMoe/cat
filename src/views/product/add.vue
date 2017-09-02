<template>
  <el-row class="product-add">
    <el-col :span="12">
      <el-form :model="form" label-width="150px">
        <h3>添加产品</h3>
        <el-form-item label="产品名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="产品热量">
          <el-input v-model="form.calorie"></el-input>
        </el-form-item>
        <el-form-item label="产品蛋白质">
          <el-input v-model="form.protein"></el-input>
        </el-form-item>
        <el-form-item label="产品脂肪">
          <el-input v-model="form.fat"></el-input>
        </el-form-item>
        <el-form-item label="产品每包克数">
          <el-input v-model="form.weight"></el-input>
        </el-form-item>
        <el-form-item label="产品二维码参数">
          <el-input v-model="form.erCode"></el-input>
        </el-form-item>
        <el-form-item label="广告图片">
          <el-input v-model="form.imgSrc"></el-input>
        </el-form-item>
        <el-form-item label="广告链接">
          <el-input v-model="form.weidianLink"></el-input>
        </el-form-item>
        <el-form-item label="游客结果广告文字">
          <el-input v-model="form.visitorsAdsText"></el-input>
        </el-form-item>
        <el-form-item label="客户结果广告文字">
          <el-input v-model="form.customerAdsText"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">添加产品</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          "name": "",
          "calorie": '',
          "protein": '',
          "fat": '',
          "weight": '',
          "erCode": "",
          "imgSrc": "",
          "weidianLink": "",
          "visitorsAdsText": "",
          "customerAdsText": ""
        }
      }
    }
  }
</script>

<style scoped>
  .product-add {
    padding: 20px;
  }
</style>