webpackJsonp([1],{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(148),
  /* template */
  __webpack_require__(152),
  /* styles */
  null,
  /* scopeId */
  null,
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

/***/ 148:
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



/* harmony default export */ __webpack_exports__["default"] = ({
  created() {
    const id = this.$route.query.id;
    this.product.id = id;
  },
  components: {
    AppUpload: __WEBPACK_IMPORTED_MODULE_0__components_base_upload___default.a
  },
  data() {
    return {
      product: {
        "id": '',
        "name": "",
        "calorie": '',
        "protein": '',
        "fat": '',
        "weight": '',
        "erCode": "",
        "imgSrc": "",
        "weidianLink": "",
        "visitorsAdsText": "",
        "customerAdsText": ""
      },
      onLoading: false,
      dialogVisiable: false
    };
  },
  methods: {
    /**
     *  图片上传成功钩子
     *  @param {String} url
     */
    __uploadSuccess(url) {
      this.product.imgSrc = url;
    },
    /**
     *  图片预览
     */
    handlePreview() {
      this.dialogVisiable = true;
    },
    handleRemove() {
      this.product.imgSrc = '';
    },
    /**
     *  保存
     */
    handleSubmit() {
      // 加载中...
      this.onLoading = true;
      this.$axios.post(this.$apis.product.edit, this.product).then(res => {
        this.$message({
          type: 'success',
          message: '添加成功',
          duration: 500,
          onClose: () => {
            this.$router.push({
              path: 'list'
            });
          }
        });
      }).catch(error => {
        this.$message.error(error.message);
        // 取消加载...
        this.onLoading = false;
      });
    }
  }
});

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "product-add"
  }, [_c('el-col', {
    attrs: {
      "span": 14
    }
  }, [_c('el-form', {
    attrs: {
      "model": _vm.product,
      "label-width": "150px"
    }
  }, [_c('h3', [_vm._v("添加产品")]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "产品名称"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.product.name),
      callback: function($$v) {
        _vm.product.name = $$v
      },
      expression: "product.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "产品热量"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.product.calorie),
      callback: function($$v) {
        _vm.product.calorie = _vm._n($$v)
      },
      expression: "product.calorie"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "产品蛋白质"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.product.protein),
      callback: function($$v) {
        _vm.product.protein = _vm._n($$v)
      },
      expression: "product.protein"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "产品脂肪"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.product.fat),
      callback: function($$v) {
        _vm.product.fat = _vm._n($$v)
      },
      expression: "product.fat"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "产品每包克数"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.product.weight),
      callback: function($$v) {
        _vm.product.weight = _vm._n($$v)
      },
      expression: "product.weight"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "产品二维码参数"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.product.erCode),
      callback: function($$v) {
        _vm.product.erCode = $$v
      },
      expression: "product.erCode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "广告图片"
    }
  }, [(_vm.product.imgSrc) ? _c('ul', {
    staticClass: "el-upload-list el-upload-list--picture-card"
  }, [_c('li', {
    staticClass: "el-upload-list__item"
  }, [_c('img', {
    staticClass: "el-upload-list__item-thumbnail",
    attrs: {
      "src": _vm.product.imgSrc
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "el-icon-close"
  }), _vm._v(" "), _c('span', {
    staticClass: "el-upload-list__item-actions"
  }, [_c('span', {
    staticClass: "el-upload-list__item-preview",
    on: {
      "click": _vm.handlePreview
    }
  }, [_c('i', {
    staticClass: "el-icon-view"
  })]), _vm._v(" "), _c('span', {
    staticClass: "el-upload-list__item-delete",
    on: {
      "click": _vm.handleRemove
    }
  }, [_c('i', {
    staticClass: "el-icon-delete2"
  })])])])]) : _vm._e(), _vm._v(" "), _c('app-upload', {
    on: {
      "upload-success": _vm.__uploadSuccess
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "广告链接"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.product.weidianLink),
      callback: function($$v) {
        _vm.product.weidianLink = $$v
      },
      expression: "product.weidianLink"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "游客结果广告文字"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea"
    },
    model: {
      value: (_vm.product.visitorsAdsText),
      callback: function($$v) {
        _vm.product.visitorsAdsText = $$v
      },
      expression: "product.visitorsAdsText"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "客户结果广告文字"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea"
    },
    model: {
      value: (_vm.product.customerAdsText),
      callback: function($$v) {
        _vm.product.customerAdsText = $$v
      },
      expression: "product.customerAdsText"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "loading": _vm.onLoading,
      "type": "primary"
    },
    on: {
      "click": _vm.handleSubmit
    }
  }, [_vm._v("\n          添加产品\n        ")])], 1)], 1)], 1), _vm._v(" "), _c('el-dialog', {
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
      "src": _vm.product.imgSrc
    }
  })])], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=1.bf3a60fcd5b420c510eb.js.map