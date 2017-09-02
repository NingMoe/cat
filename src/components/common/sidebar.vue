<template>
  <el-menu
    default-active="/"
    theme="dark"
    class="el-menu-vertical-demo"
    id="sidebar"
    :default-openeds="['/', '/setting', '/product']"
    :router="true"
    @open="handleOpen"
    @close="handleClose">
    <el-menu-item index="/"><i class="el-icon-menu"></i>首页</el-menu-item>
    <el-submenu index="/setting">
      <template slot="title"><i class="el-icon-setting"></i>设置</template>
      <el-menu-item index="/setting/params">参数设置</el-menu-item>
      <el-menu-item index="/setting/ads">广告设置</el-menu-item>
    </el-submenu>
    <el-submenu index="/product">
      <template slot="title"><i class="el-icon-picture"></i>产品管理</template>
      <el-menu-item index="/product/list">产品列表</el-menu-item>
      <el-menu-item index="/product/add">添加产品</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      handleOpen() {
        console.log('handleOpen')
      },
      handleClose() {
        console.log('handleClose')
      }
    }
  }
</script>

<style scoped>
  #sidebar {
    height: 100%;
  }
</style>