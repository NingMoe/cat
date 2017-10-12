webpackJsonp([3],{

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

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(124)(true);
// imports


// module
exports.push([module.i, ".product-list__button[data-v-e69c7a9e]{margin-bottom:20px}.product-list__table[data-v-e69c7a9e]{margin-bottom:20px;font-size:13px}.product-list__table th .cell[data-v-e69c7a9e]{line-height:20px!important}.product-list__pagination[data-v-e69c7a9e]{display:flex;justify-content:flex-end}", "", {"version":3,"sources":["/Users/lixia/Desktop/cat/src/views/product/list.vue"],"names":[],"mappings":"AACA,uCACE,kBAAoB,CACrB,AACD,sCACE,mBAAoB,AACpB,cAAgB,CACjB,AACD,+CACE,0BAA6B,CAC9B,AACD,2CACE,aAAc,AACd,wBAA0B,CAC3B","file":"list.vue","sourcesContent":["\n.product-list__button[data-v-e69c7a9e] {\n  margin-bottom: 20px;\n}\n.product-list__table[data-v-e69c7a9e] {\n  margin-bottom: 20px;\n  font-size: 13px;\n}\n.product-list__table th .cell[data-v-e69c7a9e] {\n  line-height: 20px !important;\n}\n.product-list__pagination[data-v-e69c7a9e] {\n  display: flex;\n  justify-content: flex-end;\n}"],"sourceRoot":""}]);

// exports


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

/***/ })

});
//# sourceMappingURL=3.726e749f9007c0e28b75.js.map