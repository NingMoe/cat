<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="参数设置" name="first">
      <setting-param></setting-param>
    </el-tab-pane>
    <el-tab-pane label="广告设置" name="second">
      <setting-ads></setting-ads>
    </el-tab-pane>
    <el-tab-pane label="产品设置" name="third">
      <product-list></product-list>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  import SettingParam from '@/views/setting/params'
  import SettingAds from '@/views/setting/ads'
  import ProductList from '@/views/product/list'
  export default {
    components: {
      SettingParam,
      SettingAds,
      ProductList
    },
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>