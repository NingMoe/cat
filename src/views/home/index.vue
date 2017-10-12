<template>
  <div class="home-page">
    <el-tabs v-model="activeName">
      <el-tab-pane label="参数设置" name="params">
      </el-tab-pane>
      <el-tab-pane label="广告设置" name="ads">
      </el-tab-pane>
      <el-tab-pane label="产品设置" name="products">
      </el-tab-pane>
    </el-tabs>
    <params-config class="component" v-if="activeName === 'params'"></params-config>
    <ads-config class="component" v-if="activeName === 'ads'"></ads-config>
    <product-list v-if="activeName === 'products'"></product-list>
  </div>
</template>
<script>
  import ParamsConfig from '@/views/config/params'
  import AdsConfig from '@/views/config/ads'
  import ProductList from '@/views/product/list'
  export default {
    components: {
      ParamsConfig,
      AdsConfig,
      ProductList
    },
    data() {
      return {
        activeName: 'params'
      }
    },
  }
</script>

<style scoped>
  .component {
    padding: 20px;
  }
</style>