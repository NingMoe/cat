<template>
  <header id="header">
    <router-link to="/" class="home-link">猫工具后台</router-link>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        {{$store.state.user.userNm}}
        <i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </header>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      handleCommand() {
        this.$axios.post(this.$apis.user.logout)
        .then(res => {
          this.$message({
            type: 'success',
            message: '退出成功',
            duration: 500,
            onClose: () => {
              window.location.href = 'http://www.mengchongdingzhi.com/console/login.html'
            }
          })
        })
        .catch(error => {
          this.$message.error(error.message)
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#header
  display flex
  justify-content space-between
  align-items center
  height 60px
  padding 0 30px
  background-color #324157

  .home-link
    display block
    line-height 60px
    color #bfcbd9

  .el-dropdown
    color #bfcbd9
</style>
