webpackJsonp([4],{

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

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(124)(true);
// imports


// module
exports.push([module.i, ".setting-params{display:flex}", "", {"version":3,"sources":["/Users/lixia/Desktop/cat/src/views/config/params.vue"],"names":[],"mappings":"AACA,gBACE,YAAc,CACf","file":"params.vue","sourcesContent":["\n.setting-params {\n  display: flex;\n}"],"sourceRoot":""}]);

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

/***/ })

});
//# sourceMappingURL=4.e666314703deb9974af4.js.map