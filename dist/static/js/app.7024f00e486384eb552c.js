webpackJsonp([8],{

/***/ 105:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(7)(
  /* script */
  null,
  /* template */
  __webpack_require__(117),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(106)
}
var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(79),
  /* template */
  __webpack_require__(116),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0d2adb4e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(80),
  /* template */
  __webpack_require__(118),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 116:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    attrs: {
      "id": "header"
    }
  }, [_c('router-link', {
    staticClass: "home-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("猫工具后台")]), _vm._v(" "), _c('el-dropdown', {
    on: {
      "command": _vm.handleCommand
    }
  }, [_c('span', {
    staticClass: "el-dropdown-link"
  }, [_vm._v("\n      " + _vm._s(_vm.$store.state.user.userNm) + "\n      "), _c('i', {
    staticClass: "el-icon-caret-bottom el-icon--right"
  })]), _vm._v(" "), _c('el-dropdown-menu', {
    slot: "dropdown"
  }, [_c('el-dropdown-item', [_vm._v("退出")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    attrs: {
      "id": "footer"
    }
  }, [_vm._v("footer")])
},staticRenderFns: []}

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-menu', {
    staticClass: "el-menu-vertical-demo",
    attrs: {
      "default-active": "/",
      "theme": "dark",
      "id": "sidebar",
      "default-openeds": ['/', '/config', '/product'],
      "router": true
    },
    on: {
      "open": _vm.handleOpen,
      "close": _vm.handleClose
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "/"
    }
  }, [_c('i', {
    staticClass: "el-icon-menu"
  }), _vm._v("首页")]), _vm._v(" "), _c('el-submenu', {
    attrs: {
      "index": "/config"
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('i', {
    staticClass: "el-icon-setting"
  }), _vm._v("设置")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "/config/params"
    }
  }, [_vm._v("参数设置")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "/config/ads"
    }
  }, [_vm._v("广告设置")])], 2), _vm._v(" "), _c('el-submenu', {
    attrs: {
      "index": "/product"
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('i', {
    staticClass: "el-icon-picture"
  }), _vm._v("产品管理")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "/product/list"
    }
  }, [_vm._v("产品列表")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "/product/add"
    }
  }, [_vm._v("添加产品")])], 2)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('app-header'), _vm._v(" "), _c('div', {
    staticClass: "app-main"
  }, [_c('div', {
    staticClass: "app-sidebar__wrap"
  }, [_c('app-sidebar')], 1), _vm._v(" "), _c('div', {
    staticClass: "app-content__wrap"
  }, [_c('router-view', {
    staticClass: "app-content__wrap__main"
  })], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__axios__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apis__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_default_index_css__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_default_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_default_index_css__);






__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_element_ui___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2__axios__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3__apis__["a" /* default */]);

// import 'normalize.css'

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page__ = __webpack_require__(84);




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [...__WEBPACK_IMPORTED_MODULE_2__page__["a" /* default */]]
}));

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_user__ = __webpack_require__(85);




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

const store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  modules: {
    user: __WEBPACK_IMPORTED_MODULE_2__modules_user__["a" /* default */]
  }
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(107)
}
var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(78),
  /* template */
  __webpack_require__(119),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_common_header__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_common_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_common_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_common_sidebar__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_common_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_common_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_common_footer__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_common_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_common_footer__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//







__WEBPACK_IMPORTED_MODULE_0_vue__["default"].component('app-header', __WEBPACK_IMPORTED_MODULE_1__views_common_header___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].component('app-sidebar', __WEBPACK_IMPORTED_MODULE_2__views_common_sidebar___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].component('app-footer', __WEBPACK_IMPORTED_MODULE_3__views_common_footer___default.a);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  methods: {
    handleCommand() {
      this.$axios.post(this.$apis.user.logout).then(res => {
        this.$message({
          type: 'success',
          message: '退出成功',
          duration: 500,
          onClose: () => {
            window.location.href = 'http://www.mengchongdingzhi.com/console/login.html';
          }
        });
      }).catch(error => {
        this.$message.error(error.message);
      });
    }
  }
});

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  methods: {
    handleOpen() {
      console.log('handleOpen');
    },
    handleClose() {
      console.log('handleClose');
    }
  }
});

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plugins__ = __webpack_require__(33);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const apis = {
    // 设置
    config: {
        // 参数
        params: {
            // 详情
            detail: '/admin/config/config.htm',
            // 更新
            update: '/admin/config/set-config.htm'
        },
        // 广告
        ads: {
            // 详情
            detail: '/admin/config/ads.htm',
            // 更新
            update: '/admin/config/set-ad.htm'
        }
    },
    // 产品
    product: {
        // 分页列表
        list: '/admin/product/page.htm',
        // 编辑&&添加
        edit: '/admin/product/edit.htm',
        // 删除
        delete: '/admin/product/delete.htm',
        // 排序
        sort: '/admin/product/update-score.htm'
    },
    user: {
        logout: '/admin/j_spring_security_logout'
    },
    upyun: {
        token: '/common/form-upload-params.htm',
        action: 'https://v0.api.upyun.com'
    }
};

apis.install = Vue => {
    Vue.prototype.$apis = apis;
};

/* harmony default export */ __webpack_exports__["a"] = (apis);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_qs__);



const ENV = "production";
const IS_PRODUCTION = ENV === 'production';
const IS_DEVELOPMENT = ENV === 'development';

__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.baseURL = 'https://www.mengchongdingzhi.com';
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

__WEBPACK_IMPORTED_MODULE_0_axios___default.a.interceptors.request.use(config => {
  // console.log('config======================', config)
  if (config.method === 'post' || config.method === 'POST') {
    config.data = __WEBPACK_IMPORTED_MODULE_1_qs___default.a.stringify(config.data);
  }
  return config;
}, error => {
  return Promise.reject(error);
});

__WEBPACK_IMPORTED_MODULE_0_axios___default.a.interceptors.response.use(response => {
  // console.log('response====================', response)
  // 开发环境
  if (IS_DEVELOPMENT) {
    console.log('data========================', response.data);
  }
  const data = response.data;
  switch (data.status) {
    case 1:
    case '1':
      return data.data;

    // 未登录
    case -1:
    case '-1':
      // 正式环境
      if (IS_PRODUCTION) {
        window.location.href = 'https://www.mengchongdingzhi.com/console/login.html';
      } else {
        return data.data;
        console.log(`ENV=====================${ENV}`);
      }

    default:
  }

  const error = new Error(data.message);
  error.data = data;
  error.response = response;

  throw error;
}, error => {
  // console.log('error=========================', error)
  console.log('error.response================', error.response);
  if (error && error.response) {
    switch (error.response.status) {
      case 404:
        error.message = `请求地址出错: ${error.response.config.url}`;
        break;

      case 500:
        error.message = '服务器内部错误';
    }
  }
  return Promise.reject(error);
});

__WEBPACK_IMPORTED_MODULE_0_axios___default.a.install = Vue => {
  Vue.prototype.$axios = __WEBPACK_IMPORTED_MODULE_0_axios___default.a;
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_axios___default.a);

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  path: '/',
  component: resolve => __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(38)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
  children: [{
    path: 'home',
    component: resolve => __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(38)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
  }]
}, {
  path: '/config',
  component: resolve => __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(129)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
  children: [{
    path: 'ads',
    component: resolve => __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(126)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
  }, {
    path: 'params',
    component: resolve => __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(127)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
  }]
}, {
  path: '/product',
  component: resolve => __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(131)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
  children: [{
    path: 'list',
    component: resolve => __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(128)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
  }, {
    path: 'add',
    component: resolve => __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(130)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
  }]
}]);

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const state = {
  userId: '',
  userNm: '开发者账号',
  userNick: '',
  groupId: '',
  loginCount: 0
};

/* harmony default export */ __webpack_exports__["a"] = ({
  state
});

/***/ })

},[81]);
//# sourceMappingURL=app.7024f00e486384eb552c.js.map