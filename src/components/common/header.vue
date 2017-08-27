<template>
  <header id="header">
    <router-link to="/" class="home-link">猫工具后台</router-link>
    <el-dropdown>
      <span class="el-dropdown-link">
        李夏<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </header>
</template>

<script>

</script>

<style scoped>
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 30px;
  background-color: #324157;
}
.home-link {
  display: block;
  line-height: 60px;
  color: #bfcbd9;
}
.el-dropdown {
  color: #bfcbd9;
}
</style>