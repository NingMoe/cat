webpackJsonp([0,2,3,4],{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(137),
  /* template */
  __webpack_require__(144),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(142)
}
var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(138),
  /* template */
  __webpack_require__(145),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(143)
}
var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(139),
  /* template */
  __webpack_require__(146),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-e69c7a9e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
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




const upyunInstance = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
  headers: { 'Content-Type': 'multipart/form-data' }
});

/**
 *
 *  需要优化
 *
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    wh: {
      type: Object,
      default: () => {
        return { width: 750, height: 300 };
      }
    },
    maxSize: {
      type: Number,
      default: 1024 * 1024 * 1
    },
    accept: {
      type: Array,
      default: () => ['JPG', 'JPEG', 'PNG', 'GIF']
    }
  },
  data() {
    return {
      file: null,
      bucket: '', // bucket 又拍云文件上传的服务
      policy: '', // policy 文件上传的参数
      signature: '', // 签名
      imageUrl: '',
      dialogVisible: false,
      fileList: []
    };
  },
  methods: {
    /**
     *  上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传
     *  @param {Object} 文件
     */
    handelBeforeUpload(file) {
      const reg = new RegExp(this.accept.join('|') || '', 'i');
      const isPIC = reg.test(file.type);
      const isRightSize = file.size < this.maxSize;

      if (!isPIC) {
        this.$message.error('图片格式错误');
      }
      if (!isRightSize) {
        this.$message.error('图片大小超过范围');
      }
      // 图片宽高
      // this.__validateWH()

      if (isPIC && isRightSize) {
        this.file = file;
      }
      return isPIC && isRightSize;
    },
    // __validateWH() {
    //   return async validate = () => {
    //     const WIDTH = this.wh.width
    //     const HEIGHT = this.wh.height
    //     if (WIDTH || HEIGHT) {
    //       const __this = this
    //       const reader = new FileReader()
    //       reader.readAsDataURL(file)
    //       reader.onload = function() {
    //         let image = document.createElement('img')
    //         image.src = this.result
    //         image.onload = () => {
    //           if ((WIDTH && WIDTH !== image.width) ||
    //               (HEIGHT && HEIGHT !== image.height)) {
    //             // __this.$message.error(`请上传${WIDTH} X ${HEIGHT}的图片`)
    //             return false
    //           }
    //         }
    //       }
    //     }
    //   }
    // },
    /**
     *  准备上传
     */
    handleUpload() {
      this.__upyunToken();
    },
    /**
     *  获取又拍云上传参数
     */
    __upyunToken() {
      if (this.bucket && this.policy && this.signature) {
        this.__upload();
      } else {
        upyunInstance.get(this.$apis.upyun.token).then(res => {
          this.bucket = res.data.bucket;
          this.policy = res.data.policy, this.signature = res.data.signature;
          this.__upload();
        }).catch(error => {
          this.$message.error('上传图片失败1');
        });
      }
    },
    /**
     *  上传到又拍云
     */
    __upload() {
      const fd = new FormData();
      fd.append('policy', this.policy);
      fd.append('signature', this.signature);
      fd.append('file', this.file);
      upyunInstance.post(`${this.$apis.upyun.action}/${this.bucket}`, fd).then(res => {
        this.imageUrl = res.data.url;
        this.$emit('upload-success', this.imageUrl);
      }).catch(error => {
        this.$message.error('上传图片失败2');
      });
    },
    /**
     *  图片预览
     *  点击已上传的文件链接时的钩子, 可以通过 file.response 拿到服务端返回数据
     */
    handlePreview(file) {
      this.imageUrl = file.url;
      this.dialogVisible = true;
    },
    /**
     *  文件列表移除文件
     */
    handleRemove(file, fileList) {
      console.log('file=============', file);
      console.log('fileList=========', fileList);
    },
    handleError(file, fileList) {
      console.log('error.file========', file);
      console.log('error.file========', file);
    }
  }
});

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(124)(true);
// imports


// module
exports.push([module.i, ".upload-image{width:100%;height:100%;border-radius:6px}", "", {"version":3,"sources":["/Users/lixia/Desktop/cat/src/components/base/upload.vue"],"names":[],"mappings":"AACA,cACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB","file":"upload.vue","sourcesContent":["\n.upload-image {\n  width: 100%;\n  height: 100%;\n  border-radius: 6px;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(133);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(125)("02e02cb2", content, true);

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(134)
}
var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(132),
  /* template */
  __webpack_require__(136),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 136:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-upload"
  }, [_c('el-upload', {
    staticClass: "ele-upload",
    attrs: {
      "action": "https://v0.api.upyun.com",
      "list-type": "picture-card",
      "show-file-list": false,
      "on-error": _vm.handleError,
      "on-preview": _vm.handlePreview,
      "on-remove": _vm.handleRemove,
      "http-request": _vm.handleUpload,
      "before-upload": _vm.handelBeforeUpload
    }
  }, [_c('i', {
    staticClass: "el-icon-plus"
  })]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "size": "tiny"
    },
    model: {
      value: (_vm.dialogVisible),
      callback: function($$v) {
        _vm.dialogVisible = $$v
      },
      expression: "dialogVisible"
    }
  }, [_c('img', {
    attrs: {
      "width": "100%",
      "src": _vm.imageUrl
    }
  })])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_base_upload__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_base_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_base_upload__);
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
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppUpload: __WEBPACK_IMPORTED_MODULE_0__components_base_upload___default.a
  },
  created() {
    this.fetchAdsConfig();
  },
  data() {
    return {
      // 小程序首页广告
      adsConfig: {
        visitors: {
          imgSrc: '', // 小程序首页广告图片
          weidianLink: '' // 微店地址
        },
        customer: {
          imgSrc: '',
          weidianLink: ''
        },
        note: ''
      },
      dialogVisiable: false, // 图片预览弹框
      dialogImageUrl: '' // 预览图片链接
    };
  },
  methods: {
    /**
     *  获取广告设置
     */
    fetchAdsConfig() {
      this.$axios.get(this.$apis.config.ads.detail).then(res => {
        this.adsConfig = Object.assign({ visitors: {}, customer: {} }, res);
      }).catch(error => {
        this.$message.error(error.message);
      });
    },
    /**
     *  更新广告设置
     */
    handleSubmit(type) {
      let params = {
        k: type
      };
      if (typeof this.adsConfig[type] === 'object') {
        params.v = JSON.stringify(this.adsConfig[type]);
      }
      if (typeof this.adsConfig[type] === 'string') {
        params.v = this.adsConfig[type];
      }
      this.$axios.post(this.$apis.config.ads.update, params).then(res => {
        this.$message({
          type: 'success',
          message: `${type}保存成功`
        });
      }).catch(error => {
        this.$message.error(error.message);
      });
    },
    // 游客浏览图片上传成功
    __visitorsImguploadSuccess(url) {
      this.adsConfig.visitors.imgSrc = url;
    },
    // 客户浏览图片上传成功
    __customerImguploadSuccess(url) {
      this.adsConfig.customer.imgSrc = url;
    },
    // 图片预览
    handlePreview(url) {
      this.dialogImageUrl = url;
      this.dialogVisiable = true;
    },
    // 删除图片
    handleRemove(type) {
      this.adsConfig[type].imgSrc = '';
    }
  }
});

/***/ }),

/***/ 138:
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
    return {
      params: {
        calorie: {
          cat1: '',
          cat2: '',
          cat3: '',
          cat4: '',
          cat5: '',
          cat6: '',
          cat7: '',
          cat8: '',
          cat9: '',
          cat10: '',
          cat11: '',
          cat12: '',
          adultCat: '',
          fatCat: '',
          sterilizedCat: '',
          lactationCat: ''
        },
        protein: {
          cat1: '', // 1个月小猫
          cat2: '', // 2个月小猫
          cat3: '', // 3个月小猫
          cat4: '', // 4个月小猫
          cat5: '', // 5个月小猫
          cat6: '', // 6个月小猫
          cat7: '', // 7个月小猫
          cat8: '', // 8个月小猫
          cat9: '', // 9个月小猫
          cat10: '', // 10个月小猫
          cat11: '', // 11个月小猫
          cat12: '', // 12个月小猫
          adultCat: '', // 健康成猫
          fatCat: '', // 胖猫
          sterilizedCat: '', // 绝育猫
          lactationCat: '' // 哺乳期猫咪
        },
        fat: {
          cat1: '', // 1个月小猫
          cat2: '', // 2个月小猫
          cat3: '', // 3个月小猫
          cat4: '', // 4个月小猫
          cat5: '', // 5个月小猫
          cat6: '', // 6个月小猫
          cat7: '', // 7个月小猫
          cat8: '', // 8个月小猫
          cat9: '', // 9个月小猫
          cat10: '', // 10个月小猫
          cat11: '', // 11个月小猫
          cat12: '', // 12个月小猫
          adultCat: '', // 健康成猫
          fatCat: '', // 胖猫
          sterilizedCat: '', // 绝育猫
          lactationCat: '' // 哺乳期猫咪
        }
      }
    };
  },
  watch: {
    'params.calorie.cat6': {
      handler(val, oldVal) {
        this.params.calorie.cat1 = val;
        this.params.calorie.cat2 = val;
        this.params.calorie.cat3 = val;
        this.params.calorie.cat4 = val;
        this.params.calorie.cat5 = val;
      },
      deep: true
    },
    'params.protein.cat6': {
      handler(val, oldVal) {
        this.params.protein.cat1 = val;
        this.params.protein.cat2 = val;
        this.params.protein.cat3 = val;
        this.params.protein.cat4 = val;
        this.params.protein.cat5 = val;
      },
      deep: true
    },
    'params.fat.cat6': {
      handler(val, oldVal) {
        this.params.fat.cat1 = val;
        this.params.fat.cat2 = val;
        this.params.fat.cat3 = val;
        this.params.fat.cat4 = val;
        this.params.fat.cat5 = val;
      },
      deep: true
    }
  },
  methods: {
    fetchParamsConfig() {
      this.$axios.get(this.$apis.config.params.detail).then(res => {
        this.params = Object.assign({ calorie: {}, protein: {}, fat: {} }, res);
      }).catch(error => {
        this.$message.error(error.message);
      });
    },
    handleSubmit(type) {
      let params = {
        k: type,
        v: JSON.stringify(this.params[type])
      };
      this.$axios.post(this.$apis.config.params.update, params).then(res => {
        this.$message({
          type: 'success',
          message: `${type}保存成功`
        });
      }).catch(error => {
        this.$message.error(error.message);
      });
    }
  },
  created() {
    this.fetchParamsConfig();
  }
});

/***/ }),

/***/ 139:
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
  created() {
    this.__fetchProductList();
  },
  data() {
    return {
      pageDetail: {
        dataList: []
      }
    };
  },
  methods: {
    /**
     *  添加产品
     */
    handleLinkAddProduct() {
      this.$router.push({
        path: 'add'
      });
    },
    /**
     *  获取产品列表
     */
    __fetchProductList({
      pageSize = this.pageDetail.pageSize || 10,
      page = this.pageDetail.currentPage || 1 } = {}) {
      this.$axios.post(this.$apis.product.list, {
        pageSize,
        page
      }).then(res => {
        this.pageDetail = res;
      }).catch(error => {
        this.$message.error(error.message);
      });
    },
    /**
     * currentPage 改变时会触发
     * @param {Number} currentPage 当前页currentPage
     */
    handleCurrentChange(currentPage) {
      this.pageDetail.currentPage = currentPage;
      this.__fetchProductList({ currentPage });
    },
    /**
     *  pageSize 改变时会触发
     *  @param {Number} size 每页条数size
     */
    handleSizeChange(size) {
      this.pageDetail.pageSize = size;
      this.__fetchProductList();
    },
    /**
     *  删除产品
     *  param {Number} 产品id
     *  param {String} 产品名称
     */
    handleDeleteClick(id, name) {
      this.$confirm(`确定删除${name}这款产品吗`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error'
      }).then(() => {
        this.__deleteProduct(id);
      }).catch(() => {});
    },
    /**
     *  删除产品
     *  param {Number} 产品id
     */
    __deleteProduct(id) {
      this.$axios.post(this.$apis.product.delete, {
        id
      }).then(res => {
        this.$message({
          type: 'success',
          message: '删除成功'
        });
        this.__fetchProductList();
      }).catch(error => {
        this.$message.error(error.message);
      });
    },
    /**
     *  上移下移
     *  param {Number} id 产品id
     *  param {Nunber} status 状态 1 上移 -1 下移
     *  param {Number} index 当前列index
     */
    handleUpDown(id, status, index) {
      const statusText = status === 1 ? '上移' : '下移';
      this.$axios.post(this.$apis.product.sort, {
        id,
        status
      }).then(res => {
        this.$message({
          type: 'success',
          message: `${statusText}成功`,
          duration: 500,
          onClose: () => {
            const currentPage = this.pageDetail.currentPage;
            this.__fetchProductList({ currentPage });
          }
        });
      }).catch(error => {
        this.$message.error(error.message);
      });
    }
  }
});

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(124)(true);
// imports


// module
exports.push([module.i, ".setting-params{display:flex}", "", {"version":3,"sources":["/Users/lixia/Desktop/cat/src/views/config/params.vue"],"names":[],"mappings":"AACA,gBACE,YAAc,CACf","file":"params.vue","sourcesContent":["\n.setting-params {\n  display: flex;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(124)(true);
// imports


// module
exports.push([module.i, ".product-list__button[data-v-e69c7a9e]{margin-bottom:20px}.product-list__table[data-v-e69c7a9e]{margin-bottom:20px;font-size:13px}.product-list__table th .cell[data-v-e69c7a9e]{line-height:20px!important}.product-list__pagination[data-v-e69c7a9e]{display:flex;justify-content:flex-end}", "", {"version":3,"sources":["/Users/lixia/Desktop/cat/src/views/product/list.vue"],"names":[],"mappings":"AACA,uCACE,kBAAoB,CACrB,AACD,sCACE,mBAAoB,AACpB,cAAgB,CACjB,AACD,+CACE,0BAA6B,CAC9B,AACD,2CACE,aAAc,AACd,wBAA0B,CAC3B","file":"list.vue","sourcesContent":["\n.product-list__button[data-v-e69c7a9e] {\n  margin-bottom: 20px;\n}\n.product-list__table[data-v-e69c7a9e] {\n  margin-bottom: 20px;\n  font-size: 13px;\n}\n.product-list__table th .cell[data-v-e69c7a9e] {\n  line-height: 20px !important;\n}\n.product-list__pagination[data-v-e69c7a9e] {\n  display: flex;\n  justify-content: flex-end;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(140);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(125)("457b10b7", content, true);

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(141);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(125)("a270cdfa", content, true);

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ads-config"
  }, [_c('el-form', {
    attrs: {
      "mode": _vm.adsConfig.visitors
    }
  }, [_c('h3', [_vm._v("游客/客户首页广告")]), _vm._v(" "), _c('el-form-item', [(_vm.adsConfig.visitors.imgSrc) ? _c('ul', {
    staticClass: "el-upload-list el-upload-list--picture-card"
  }, [_c('li', {
    staticClass: "el-upload-list__item"
  }, [_c('img', {
    staticClass: "el-upload-list__item-thumbnail",
    attrs: {
      "src": _vm.adsConfig.visitors.imgSrc
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "el-upload-list__item-actions"
  }, [_c('span', {
    staticClass: "el-upload-list__item-preview",
    on: {
      "click": function($event) {
        _vm.handlePreview(_vm.adsConfig.visitors.imgSrc)
      }
    }
  }, [_c('i', {
    staticClass: "el-icon-view"
  })]), _vm._v(" "), _c('span', {
    staticClass: "el-upload-list__item-delete",
    on: {
      "click": function($event) {
        _vm.handleRemove('visitors')
      }
    }
  }, [_c('i', {
    staticClass: "el-icon-delete2"
  })])])])]) : _vm._e(), _vm._v(" "), _c('app-upload', {
    on: {
      "upload-success": _vm.__visitorsImguploadSuccess
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-input', {
    attrs: {
      "placeholder": "输入广告跳转地址"
    },
    model: {
      value: (_vm.adsConfig.visitors.weidianLink),
      callback: function($$v) {
        _vm.adsConfig.visitors.weidianLink = $$v
      },
      expression: "adsConfig.visitors.weidianLink"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.handleSubmit('visitors')
      }
    }
  }, [_vm._v("保存游客广告")])], 1)], 1), _vm._v(" "), _c('el-form', [_c('h3', [_vm._v("客户计算结果广告")]), _vm._v(" "), _c('el-form-item', [(_vm.adsConfig.customer.imgSrc) ? _c('ul', {
    staticClass: "el-upload-list el-upload-list--picture-card"
  }, [_c('li', {
    staticClass: "el-upload-list__item"
  }, [_c('img', {
    staticClass: "el-upload-list__item-thumbnail",
    attrs: {
      "src": _vm.adsConfig.customer.imgSrc
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "el-upload-list__item-actions"
  }, [_c('span', {
    staticClass: "el-upload-list__item-preview",
    on: {
      "click": function($event) {
        _vm.handlePreview(_vm.adsConfig.customer.imgSrc)
      }
    }
  }, [_c('i', {
    staticClass: "el-icon-view"
  })]), _vm._v(" "), _c('span', {
    staticClass: "el-upload-list__item-delete",
    on: {
      "click": function($event) {
        _vm.handleRemove('customer')
      }
    }
  }, [_c('i', {
    staticClass: "el-icon-delete2"
  })])])])]) : _vm._e(), _vm._v(" "), _c('app-upload', {
    on: {
      "upload-success": _vm.__customerImguploadSuccess
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-input', {
    attrs: {
      "placeholder": "输入广告跳转地址"
    },
    model: {
      value: (_vm.adsConfig.customer.weidianLink),
      callback: function($$v) {
        _vm.adsConfig.customer.weidianLink = $$v
      },
      expression: "adsConfig.customer.weidianLink"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.handleSubmit('customer')
      }
    }
  }, [_vm._v("保存客户广告")])], 1)], 1), _vm._v(" "), _c('el-form', [_c('h3', [_vm._v("计算结果文字内容（公用）")]), _vm._v(" "), _c('el-form-item', [_c('el-input', {
    attrs: {
      "type": "textarea",
      "placeholder": "请输入文字"
    },
    model: {
      value: (_vm.adsConfig.note),
      callback: function($$v) {
        _vm.adsConfig.note = $$v
      },
      expression: "adsConfig.note"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.handleSubmit('note')
      }
    }
  }, [_vm._v("保存客户广告")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "size": "tiny"
    },
    model: {
      value: (_vm.dialogVisiable),
      callback: function($$v) {
        _vm.dialogVisiable = $$v
      },
      expression: "dialogVisiable"
    }
  }, [_c('img', {
    attrs: {
      "width": "375",
      "height": "150",
      "src": _vm.dialogImageUrl
    }
  })])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "params-config"
  }, [_c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('h3', [_vm._v("热量摄入指数，热量摄入=体重^0.75*70*摄入指数")]), _vm._v(" "), _c('el-form', {
    attrs: {
      "model": _vm.params,
      "label-width": "100px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "1-6个月小猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.calorie.cat6),
      callback: function($$v) {
        _vm.params.calorie.cat6 = _vm._n($$v)
      },
      expression: "params.calorie.cat6"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "7个月小猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.calorie.cat7),
      callback: function($$v) {
        _vm.params.calorie.cat7 = _vm._n($$v)
      },
      expression: "params.calorie.cat7"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "8个月小猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.calorie.cat8),
      callback: function($$v) {
        _vm.params.calorie.cat8 = _vm._n($$v)
      },
      expression: "params.calorie.cat8"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "9个月小猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.calorie.cat9),
      callback: function($$v) {
        _vm.params.calorie.cat9 = _vm._n($$v)
      },
      expression: "params.calorie.cat9"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "10个月小猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.calorie.cat10),
      callback: function($$v) {
        _vm.params.calorie.cat10 = _vm._n($$v)
      },
      expression: "params.calorie.cat10"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "11个月小猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.calorie.cat11),
      callback: function($$v) {
        _vm.params.calorie.cat11 = _vm._n($$v)
      },
      expression: "params.calorie.cat11"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "12个月小猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.calorie.cat12),
      callback: function($$v) {
        _vm.params.calorie.cat12 = _vm._n($$v)
      },
      expression: "params.calorie.cat12"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "健康成猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.calorie.adultCat),
      callback: function($$v) {
        _vm.params.calorie.adultCat = _vm._n($$v)
      },
      expression: "params.calorie.adultCat"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "胖猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.calorie.fatCat),
      callback: function($$v) {
        _vm.params.calorie.fatCat = _vm._n($$v)
      },
      expression: "params.calorie.fatCat"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "绝育猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.calorie.sterilizedCat),
      callback: function($$v) {
        _vm.params.calorie.sterilizedCat = _vm._n($$v)
      },
      expression: "params.calorie.sterilizedCat"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "哺乳期猫咪"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.calorie.lactationCat),
      callback: function($$v) {
        _vm.params.calorie.lactationCat = _vm._n($$v)
      },
      expression: "params.calorie.lactationCat"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.handleSubmit('calorie')
      }
    }
  }, [_vm._v("保存热量指数")]), _vm._v(" "), _c('el-button', [_vm._v("取消")])], 1)], 1), _vm._v(" "), _c('h3', [_vm._v("蛋白质参数，蛋白质摄入=体重*蛋白质参数")]), _vm._v(" "), _c('el-form', {
    attrs: {
      "model": _vm.params,
      "label-width": "100px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "1-6个月小猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.protein.cat6),
      callback: function($$v) {
        _vm.params.protein.cat6 = _vm._n($$v)
      },
      expression: "params.protein.cat6"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "7个月小猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.protein.cat7),
      callback: function($$v) {
        _vm.params.protein.cat7 = _vm._n($$v)
      },
      expression: "params.protein.cat7"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "8个月小猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.protein.cat8),
      callback: function($$v) {
        _vm.params.protein.cat8 = _vm._n($$v)
      },
      expression: "params.protein.cat8"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "9个月小猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.protein.cat9),
      callback: function($$v) {
        _vm.params.protein.cat9 = _vm._n($$v)
      },
      expression: "params.protein.cat9"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "10个月小猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.protein.cat10),
      callback: function($$v) {
        _vm.params.protein.cat10 = _vm._n($$v)
      },
      expression: "params.protein.cat10"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "11个月小猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.protein.cat11),
      callback: function($$v) {
        _vm.params.protein.cat11 = _vm._n($$v)
      },
      expression: "params.protein.cat11"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "12个月小猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.protein.cat12),
      callback: function($$v) {
        _vm.params.protein.cat12 = _vm._n($$v)
      },
      expression: "params.protein.cat12"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "健康成猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.protein.adultCat),
      callback: function($$v) {
        _vm.params.protein.adultCat = _vm._n($$v)
      },
      expression: "params.protein.adultCat"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "胖猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.protein.fatCat),
      callback: function($$v) {
        _vm.params.protein.fatCat = _vm._n($$v)
      },
      expression: "params.protein.fatCat"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "绝育猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.protein.sterilizedCat),
      callback: function($$v) {
        _vm.params.protein.sterilizedCat = _vm._n($$v)
      },
      expression: "params.protein.sterilizedCat"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "哺乳期猫咪"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.protein.lactationCat),
      callback: function($$v) {
        _vm.params.protein.lactationCat = _vm._n($$v)
      },
      expression: "params.protein.lactationCat"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.handleSubmit('protein')
      }
    }
  }, [_vm._v("保存蛋白质指数")]), _vm._v(" "), _c('el-button', [_vm._v("取消")])], 1)], 1), _vm._v(" "), _c('h3', [_vm._v("脂肪参数，脂肪摄入=体重*脂肪参数")]), _vm._v(" "), _c('el-form', {
    attrs: {
      "model": _vm.params,
      "label-width": "100px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "1-6个月小猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.fat.cat6),
      callback: function($$v) {
        _vm.params.fat.cat6 = _vm._n($$v)
      },
      expression: "params.fat.cat6"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "7个月小猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.fat.cat7),
      callback: function($$v) {
        _vm.params.fat.cat7 = _vm._n($$v)
      },
      expression: "params.fat.cat7"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "8个月小猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.fat.cat8),
      callback: function($$v) {
        _vm.params.fat.cat8 = _vm._n($$v)
      },
      expression: "params.fat.cat8"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "9个月小猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.fat.cat9),
      callback: function($$v) {
        _vm.params.fat.cat9 = _vm._n($$v)
      },
      expression: "params.fat.cat9"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "10个月小猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.fat.cat10),
      callback: function($$v) {
        _vm.params.fat.cat10 = _vm._n($$v)
      },
      expression: "params.fat.cat10"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "11个月小猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.fat.cat11),
      callback: function($$v) {
        _vm.params.fat.cat11 = _vm._n($$v)
      },
      expression: "params.fat.cat11"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "12个月小猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.fat.cat12),
      callback: function($$v) {
        _vm.params.fat.cat12 = _vm._n($$v)
      },
      expression: "params.fat.cat12"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "健康成猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.fat.adultCat),
      callback: function($$v) {
        _vm.params.fat.adultCat = _vm._n($$v)
      },
      expression: "params.fat.adultCat"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "胖猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.fat.fatCat),
      callback: function($$v) {
        _vm.params.fat.fatCat = _vm._n($$v)
      },
      expression: "params.fat.fatCat"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "绝育猫"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.fat.sterilizedCat),
      callback: function($$v) {
        _vm.params.fat.sterilizedCat = _vm._n($$v)
      },
      expression: "params.fat.sterilizedCat"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "哺乳期猫咪"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.params.fat.lactationCat),
      callback: function($$v) {
        _vm.params.fat.lactationCat = _vm._n($$v)
      },
      expression: "params.fat.lactationCat"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.handleSubmit('fat')
      }
    }
  }, [_vm._v("保存脂肪参数")]), _vm._v(" "), _c('el-button', [_vm._v("取消")])], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "product-list"
  }, [_c('el-button', {
    staticClass: "product-list__button",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.handleLinkAddProduct
    }
  }, [_vm._v("\n    添加产品\n  ")]), _vm._v(" "), _c('el-table', {
    staticClass: "product-list__table",
    attrs: {
      "border": "",
      "row-key": "id",
      "data": _vm.pageDetail.dataList
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "id",
      "width": "60px",
      "label": "序号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "产品名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "width": "80px",
      "prop": "calorie",
      "label": "产品热量含量"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "width": "80px",
      "prop": "protein",
      "label": "产品蛋白质含量"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "width": "80px",
      "prop": "fat",
      "label": "产品脂肪质含量"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "width": "80px",
      "prop": "weight",
      "label": "产品含量(克)"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "width": "80px",
      "prop": "er_code",
      "label": "产品二维码参数"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "img_src",
      "label": "广告图片"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "visitors_ads_text",
      "label": "游客结果广告文字"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "customer_ads_text",
      "label": "客户结果广告文字"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "weidian_link",
      "label": "广告链接"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "width": "140px",
      "label": "操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleDeleteClick(scope.row.id, scope.row.name)
            }
          }
        }, [_vm._v("\n          删除\n        ")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleUpDown(scope.row.id, 1, scope.$index)
            }
          }
        }, [_vm._v("\n          上移\n        ")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleUpDown(scope.row.id, -1, scope.$index)
            }
          }
        }, [_vm._v("\n          下移\n        ")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-pagination', {
    staticClass: "product-list__pagination",
    attrs: {
      "current-page": _vm.pageDetail.currentPage || 1,
      "pageCount": _vm.pageDetail.totalPage,
      "page-size": _vm.pageDetail.pageSize || 10,
      "page-sizes": [2, 10, 20, 30, 40, 50],
      "total": _vm.pageDetail.rowCnt,
      "layout": "total, sizes, prev, pager, next, jumper"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "size-change": _vm.handleSizeChange
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_config_params__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_config_params___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_config_params__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_config_ads__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_config_ads___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_config_ads__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_product_list__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_product_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_product_list__);
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
  components: {
    ParamsConfig: __WEBPACK_IMPORTED_MODULE_0__views_config_params___default.a,
    AdsConfig: __WEBPACK_IMPORTED_MODULE_1__views_config_ads___default.a,
    ProductList: __WEBPACK_IMPORTED_MODULE_2__views_product_list___default.a
  },
  data() {
    return {
      activeName: 'params'
    };
  }
});

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(124)(true);
// imports


// module
exports.push([module.i, ".component[data-v-44514d56]{padding:20px}", "", {"version":3,"sources":["/Users/lixia/Desktop/cat/src/views/home/index.vue"],"names":[],"mappings":"AACA,4BACE,YAAc,CACf","file":"index.vue","sourcesContent":["\n.component[data-v-44514d56] {\n  padding: 20px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(149);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(125)("4ea7da30", content, true);

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home-page"
  }, [_c('el-tabs', {
    model: {
      value: (_vm.activeName),
      callback: function($$v) {
        _vm.activeName = $$v
      },
      expression: "activeName"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "label": "参数设置",
      "name": "params"
    }
  }), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "广告设置",
      "name": "ads"
    }
  }), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "产品设置",
      "name": "products"
    }
  })], 1), _vm._v(" "), (_vm.activeName === 'params') ? _c('params-config', {
    staticClass: "component"
  }) : _vm._e(), _vm._v(" "), (_vm.activeName === 'ads') ? _c('ads-config', {
    staticClass: "component"
  }) : _vm._e(), _vm._v(" "), (_vm.activeName === 'products') ? _c('product-list') : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(150)
}
var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(147),
  /* template */
  __webpack_require__(153),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-44514d56",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=0.c51d94461b3d9de89639.js.map