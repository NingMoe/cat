<template>
  <div id="app">
    <app-header></app-header>
    <el-row class="app-main" type="flex">
      <el-col :span="4">
        <app-sidebar></app-sidebar>
      </el-col>
      <el-col :span="20">
        <router-view class="app-content"></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app .app-main {
  flex: 1;
}
</style>
