import Vue from 'vue'
import Router from 'vue-router'
import Page from './page'

Vue.use(Router)

export default new Router({
  routes: [
    ...Page
  ]
})
