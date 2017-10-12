<template>
  <div id="app">
    <app-header></app-header>
    <div class="app-main">
      <div class="app-sidebar__wrap">
        <app-sidebar></app-sidebar>
      </div>
      <div class="app-content__wrap">
        <router-view class="app-content__wrap__main"></router-view>
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import Header from './views/common/header'
import Sidebar from './views/common/sidebar'
import Footer from './views/common/footer'

Vue.component('app-header', Header)
Vue.component('app-sidebar', Sidebar)
Vue.component('app-footer', Footer)

export default {
  name: 'app'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  display flex
  flex-direction column
  min-height 100vh
  min-width 1024px
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

  .app-main
    display flex
    flex 1

  .app-sidebar

    &__wrap
      width 200px
      background-color #324157

  .app-content

    &__wrap
      display flex
      flex-direction column
      flex 1
      padding 20px

/**
 *  覆盖样式
 */
.el-form-item
  &__content
    display flex

.el-upload-list
  &--picture-card
    .el-upload-list
      &__item
        width 375px
        height 150px
</style>
