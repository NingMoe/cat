webpackJsonp([2],{

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

/***/ })

});
//# sourceMappingURL=2.5735230e9dc39a972350.js.map