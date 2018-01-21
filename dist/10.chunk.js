webpackJsonp([10],{

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(62),
  /* template */
  __webpack_require__(86),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "F:\\githubpage\\wh-web\\src\\views\\sys\\menu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] menu.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70359234", Component.options)
  } else {
    hotAPI.reload("data-v-70359234", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 62:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            /*用于查找的菜单id*/
            menuId: null,
            /*选择的数量*/
            count: null,
            /*选中的组数据*/
            groupId: null,
            /*新建modal的显示参数*/
            newModal: false,
            /*修改modal的显示参数*/
            modifyModal: false,
            /*分页total属性绑定值*/
            total: 0,
            /*loading*/
            loading: true,
            /*pageInfo实体*/
            pageInfo: {
                page: 0,
                pageSize: 10
            },
            /*menu实体*/
            menu: {
                id: null,
                name: null,
                url: null,
                parentId: null,
                sort: null,
                remark: null,
                icon: null
            },
            /*用于添加的menu实体*/
            menuNew: {
                id: null,
                name: null,
                url: null,
                parentId: null,
                sort: null,
                remark: null,
                icon: null
            },
            /*用于修改的menu实体*/
            menuModify: {
                id: null,
                name: null,
                url: null,
                parentId: null,
                sort: null,
                remark: null,
                icon: null
            },
            /*新建验证*/
            ruleNew: {
                name: [{ type: 'string', required: true, message: '输入菜单名', trigger: 'blur' }],
                url: [{ type: 'string', required: true, message: '输入路径', trigger: 'blur' }],
                parentId: [{ required: true, message: '输入父类ID', trigger: 'blur' }, {
                    validator: function validator(rule, value, callback) {
                        if (!Number.isInteger(+value)) {
                            callback(new Error('请输入数字'));
                        } else {
                            callback();
                        }
                    },
                    trigger: 'blur' }],
                sort: [{ required: true, message: '输入排序', trigger: 'blur' }, {
                    validator: function validator(rule, value, callback) {
                        if (!Number.isInteger(+value)) {
                            callback(new Error('请输入数字'));
                        } else {
                            callback();
                        }
                    },
                    trigger: 'blur' }],
                icon: [{ type: 'string', required: true, message: '输入图标', trigger: 'blur' }]
            },
            /*修改验证*/
            ruleModify: {
                name: [{ type: 'string', required: true, message: '输入菜单名', trigger: 'blur' }],
                url: [{ type: 'string', required: true, message: '输入路径', trigger: 'blur' }],
                parentId: [{ required: true, message: '输入父类ID', trigger: 'blur' }, {
                    validator: function validator(rule, value, callback) {
                        if (!Number.isInteger(+value)) {
                            callback(new Error('请输入数字'));
                        } else {
                            callback();
                        }
                    },
                    trigger: 'blur' }],
                sort: [{ required: true, message: '输入排序', trigger: 'blur' }, {
                    validator: function validator(rule, value, callback) {
                        if (!Number.isInteger(+value)) {
                            callback(new Error('请输入数字'));
                        } else {
                            callback();
                        }
                    },
                    trigger: 'blur' }],
                icon: [{ type: 'string', required: true, message: '输入图标', trigger: 'blur' }]
            },
            /*菜单列表*/
            menuList: [],
            /*生产类型表显示字段*/
            columns1: [{
                type: 'selection',
                width: 60,
                align: 'center'
            }, {
                title: '菜单ID',
                key: 'id'
            }, {
                title: '菜单名称',
                key: 'name'
            }, {
                title: '地址',
                key: 'url'
            }, {
                title: '上级菜单id',
                key: 'parentId'
            }, {
                title: '排序',
                key: 'sort'
            }, {
                title: '图标',
                key: 'icon'
            }],
            /*生产类型表数据*/
            data1: []
        };
    },
    mounted: function mounted() {
        /*页面初始化调用方法*/
        this.getTable({
            "pageInfo": this.pageInfo,
            'menuId': this.menuId
        });
        this.axios({
            method: 'get',
            url: '/menus/parentId',
            params: {
                'parentId': 0
            }
        }).then(function (response) {
            var listTemp = response.data;
            for (var i = 0; i < listTemp.length; i++) {
                this.menuList.push({
                    "value": listTemp[i].id,
                    "label": listTemp[i].name
                });
            }
        }.bind(this)).catch(function (error) {
            alert(error);
        });
    },

    methods: {
        /*pageInfo实体初始化*/
        initPageInfo: function initPageInfo() {
            this.pageInfo.page = 0;
            this.pageInfo.pageSize = 10;
        },

        /*menu实体初始化*/
        initMenu: function initMenu() {
            this.menu.id = null;
            this.menu.name = null;
            this.menu.url = null;
            this.menu.parentId = null;
            this.menu.sort = null;
            this.menu.remark = null;
            this.menu.icon = null;
        },

        /*menuNew实体初始化*/
        initMenuNew: function initMenuNew() {
            this.menuNew.id = null;
            this.menuNew.name = null;
            this.menuNew.url = null;
            this.menuNew.parentId = null;
            this.menuNew.sort = null;
            this.menuNew.remark = null;
            this.menuNew.icon = null;
        },

        /*menuModify实体初始化*/
        initMenuModify: function initMenuModify() {
            this.menuModify.id = null;
            this.menuModify.name = null;
            this.menuModify.url = null;
            this.menuModify.parentId = null;
            this.menuModify.sort = null;
            this.menuModify.remark = null;
            this.menuModify.icon = null;
        },

        /*menuNew设置*/
        menuSet: function menuSet(e) {
            this.menu.id = e.id;
            this.menu.name = e.name;
            this.menu.url = e.url;
            this.menu.parentId = e.parentId;
            this.menu.sort = e.sort;
            this.menu.remark = e.remark;
            this.menu.icon = e.icon;
        },

        /*menuNew设置*/
        menuNewSet: function menuNewSet(e) {
            this.menuNew.id = e.id;
            this.menuNew.name = e.name;
            this.menuNew.url = e.url;
            this.menuNew.parentId = e.parentId;
            this.menuNew.sort = e.sort;
            this.menuNew.remark = e.remark;
            this.menuNew.icon = e.icon;
        },

        /*menuModify设置*/
        menuModifySet: function menuModifySet(e) {
            this.menuModify.id = e.id;
            this.menuModify.name = e.name;
            this.menuModify.url = e.url;
            this.menuModify.parentId = e.parentId + '';
            this.menuModify.sort = e.sort + '';
            this.menuModify.remark = e.remark;
            this.menuModify.icon = e.icon;
        },

        /*得到表数据*/
        getTable: function getTable(e) {
            this.axios({
                method: 'get',
                url: '/menus',
                params: {
                    'page': e.pageInfo.page,
                    'pageSize': e.pageInfo.pageSize,
                    'menuId': e.menuId
                }
            }).then(function (response) {
                this.data1 = response.data.data;
                this.total = response.data.totalCount;
            }.bind(this)).catch(function (error) {
                alert(error);
            });
        },

        /*搜索按钮点击事件*/
        search: function search() {
            this.initPageInfo();
            this.getTable({
                "pageInfo": this.pageInfo,
                'menuId': this.menuId
            });
        },

        /*分页点击事件*/
        pageSearch: function pageSearch(e) {
            this.pageInfo.page = e - 1;
            this.getTable({
                "pageInfo": this.pageInfo,
                'menuId': this.menuId
            });
        },

        /*新建点击触发事件*/
        openNewModal: function openNewModal() {
            this.newModal = true;
            this.initMenuNew();
            this.data1.sort();
            this.count = 0;
            this.groupId = null;
        },

        /*新建modal的newOk点击事件*/
        newOk: function newOk(menuNew) {
            var _this = this;

            this.$refs[menuNew].validate(function (valid) {
                if (valid) {
                    _this.initMenu();
                    _this.menuSet(_this.menuNew);
                    _this.axios({
                        method: 'post',
                        url: '/menus/menu',
                        data: _this.menu
                    }).then(function (response) {
                        this.initMenuNew();
                        this.getTable({
                            "pageInfo": this.pageInfo,
                            'menuId': this.menuId
                        });
                        this.$Message.info('新建成功');
                    }.bind(_this)).catch(function (error) {
                        alert(error);
                    });
                    _this.newModal = false;
                } else {
                    setTimeout(function () {
                        _this.loading = false;
                        _this.$nextTick(function () {
                            _this.loading = true;
                        });
                    }, 1000);
                }
            });
        },

        /*点击修改时判断是否只选择一个*/
        openModifyModal: function openModifyModal() {
            if (this.count > 1 || this.count < 1) {
                this.modifyModal = false;
                this.$Message.warning('请至少选择一项(且只能选择一项)');
            } else {
                this.modifyModal = true;
            }
        },

        /*修改modal的modifyOk点击事件*/
        modifyOk: function modifyOk(menuModify) {
            var _this2 = this;

            this.$refs[menuModify].validate(function (valid) {
                if (valid) {
                    _this2.initMenu();
                    _this2.menuSet(_this2.menuModify);
                    _this2.axios({
                        method: 'put',
                        url: '/menus/' + _this2.menu.id,
                        data: _this2.menu
                    }).then(function (response) {
                        this.initMenuNew();
                        this.getTable({
                            "pageInfo": this.pageInfo,
                            'menuId': this.menuId
                        });
                        this.$Message.info('修改成功');
                    }.bind(_this2)).catch(function (error) {
                        alert(error);
                    });
                    _this2.modifyModal = false;
                } else {
                    _this2.$Message.error('表单验证失败!');
                    setTimeout(function () {
                        _this2.loading = false;
                        _this2.$nextTick(function () {
                            _this2.loading = true;
                        });
                    }, 1000);
                }
            });
        },

        /*modal的cancel点击事件*/
        cancel: function cancel() {
            this.$Message.info('点击了取消');
        },

        /*table选择后触发事件*/
        change: function change(e) {
            if (e.length == 1) {
                this.menuModifySet(e['0']);
            }
            this.setGroupId(e);
        },

        /*通过选中的行设置groupId的值*/
        setGroupId: function setGroupId(e) {
            this.groupId = [];
            this.count = e.length;
            for (var i = 0; i <= e.length - 1; i++) {
                this.groupId.push(e[i].id);
            }
        },

        /*删除table中选中的数据*/
        del: function del() {
            if (this.groupId != null && this.groupId != "") {
                this.axios({
                    method: 'delete',
                    url: '/menus',
                    data: this.groupId
                }).then(function (response) {
                    this.getTable({
                        "pageInfo": this.pageInfo,
                        'menuId': this.menuId
                    });
                    this.groupId = null;
                    this.count = 0;
                    this.$Message.info('删除成功');
                }.bind(this)).catch(function (error) {
                    alert(error);
                });
            }
        },

        /*表格中双击事件*/
        dblclick: function dblclick(e) {
            this.menuModifySet(e);
            this.modifyModal = true;
            this.data1.sort();
        }
    }
});

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "margin": "20px"
    }
  }, [_c('div', [_c('Row', {
    staticStyle: {
      "margin-bottom": "25px"
    }
  }, [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_vm._v("菜单名称：\n                    "), _c('Select', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "filterable": "",
      "clearable": ""
    },
    model: {
      value: (_vm.menuId),
      callback: function($$v) {
        _vm.menuId = $$v
      },
      expression: "menuId"
    }
  }, _vm._l((_vm.menuList), function(item) {
    return _c('Option', {
      key: item.value,
      attrs: {
        "value": item.value
      }
    }, [_vm._v(_vm._s(item.label))])
  }))], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Button', {
    attrs: {
      "type": "primary",
      "shape": "circle",
      "icon": "ios-search"
    },
    on: {
      "click": function($event) {
        _vm.search()
      }
    }
  }, [_vm._v("搜索")])], 1)], 1)], 1), _vm._v(" "), _c('div', [_c('ul', [_c('li', [_c('Button', {
    attrs: {
      "type": "primary",
      "icon": "plus-round"
    },
    on: {
      "click": function($event) {
        _vm.openNewModal()
      }
    }
  }, [_vm._v("新建")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "success",
      "icon": "wrench"
    },
    on: {
      "click": function($event) {
        _vm.openModifyModal()
      }
    }
  }, [_vm._v("修改")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "error",
      "icon": "trash-a"
    },
    on: {
      "click": function($event) {
        _vm.del()
      }
    }
  }, [_vm._v("删除")])], 1), _vm._v(" "), _c('li', [_c('div', {
    staticStyle: {
      "padding": "10px 0"
    }
  }, [_c('Table', {
    attrs: {
      "border": "",
      "columns": _vm.columns1,
      "data": _vm.data1,
      "height": 400
    },
    on: {
      "on-selection-change": function (s) {
        _vm.change(s)
      },
      "on-row-dblclick": function (s) {
        _vm.dblclick(s)
      }
    }
  })], 1)]), _vm._v(" "), _c('li', [_c('div', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_c('Page', {
    attrs: {
      "total": _vm.total,
      "page-size": _vm.pageInfo.pageSize,
      "show-elevator": "",
      "show-total": ""
    },
    on: {
      "on-change": function (e) {
        _vm.pageSearch(e)
      }
    }
  })], 1)])])]), _vm._v(" "), _c('Modal', {
    attrs: {
      "mask-closable": false,
      "visible": _vm.newModal,
      "loading": _vm.loading,
      "width": "600",
      "title": "新建"
    },
    on: {
      "update:visible": function($event) {
        _vm.newModal = $event
      },
      "on-ok": function($event) {
        _vm.newOk('menuNew')
      },
      "on-cancel": function($event) {
        _vm.cancel()
      }
    },
    model: {
      value: (_vm.newModal),
      callback: function($$v) {
        _vm.newModal = $$v
      },
      expression: "newModal"
    }
  }, [_c('Form', {
    ref: "menuNew",
    attrs: {
      "model": _vm.menuNew,
      "rules": _vm.ruleNew,
      "label-width": 80
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "菜单名称:",
      "prop": "name"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "204px"
    },
    model: {
      value: (_vm.menuNew.name),
      callback: function($$v) {
        _vm.$set(_vm.menuNew, "name", $$v)
      },
      expression: "menuNew.name"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "路径:",
      "prop": "url"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "204px"
    },
    model: {
      value: (_vm.menuNew.url),
      callback: function($$v) {
        _vm.$set(_vm.menuNew, "url", $$v)
      },
      expression: "menuNew.url"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "父类ID:",
      "prop": "parentId"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "204px"
    },
    model: {
      value: (_vm.menuNew.parentId),
      callback: function($$v) {
        _vm.$set(_vm.menuNew, "parentId", $$v)
      },
      expression: "menuNew.parentId"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "排序号:",
      "prop": "sort"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "204px"
    },
    model: {
      value: (_vm.menuNew.sort),
      callback: function($$v) {
        _vm.$set(_vm.menuNew, "sort", $$v)
      },
      expression: "menuNew.sort"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "图标:",
      "prop": "icon"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "204px"
    },
    model: {
      value: (_vm.menuNew.icon),
      callback: function($$v) {
        _vm.$set(_vm.menuNew, "icon", $$v)
      },
      expression: "menuNew.icon"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "描述:",
      "prop": "remark"
    }
  }, [_c('Input', {
    attrs: {
      "type": "textarea",
      "autosize": {
        minRows: 2,
        maxRows: 5
      }
    },
    model: {
      value: (_vm.menuNew.remark),
      callback: function($$v) {
        _vm.$set(_vm.menuNew, "remark", $$v)
      },
      expression: "menuNew.remark"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "mask-closable": false,
      "visible": _vm.modifyModal,
      "loading": _vm.loading,
      "width": "600",
      "title": "修改"
    },
    on: {
      "update:visible": function($event) {
        _vm.modifyModal = $event
      },
      "on-ok": function($event) {
        _vm.modifyOk('menuModify')
      },
      "on-cancel": function($event) {
        _vm.cancel()
      }
    },
    model: {
      value: (_vm.modifyModal),
      callback: function($$v) {
        _vm.modifyModal = $$v
      },
      expression: "modifyModal"
    }
  }, [_c('Form', {
    ref: "menuModify",
    attrs: {
      "model": _vm.menuModify,
      "rules": _vm.ruleModify,
      "label-width": 80
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "菜单名称:",
      "prop": "name"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "204px"
    },
    model: {
      value: (_vm.menuModify.name),
      callback: function($$v) {
        _vm.$set(_vm.menuModify, "name", $$v)
      },
      expression: "menuModify.name"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "路径:",
      "prop": "url"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "204px"
    },
    model: {
      value: (_vm.menuModify.url),
      callback: function($$v) {
        _vm.$set(_vm.menuModify, "url", $$v)
      },
      expression: "menuModify.url"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "父类ID:",
      "prop": "parentId"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "204px"
    },
    model: {
      value: (_vm.menuModify.parentId),
      callback: function($$v) {
        _vm.$set(_vm.menuModify, "parentId", $$v)
      },
      expression: "menuModify.parentId"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "排序号:",
      "prop": "sort"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "204px"
    },
    model: {
      value: (_vm.menuModify.sort),
      callback: function($$v) {
        _vm.$set(_vm.menuModify, "sort", $$v)
      },
      expression: "menuModify.sort"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "图标:",
      "prop": "icon"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "204px"
    },
    model: {
      value: (_vm.menuModify.icon),
      callback: function($$v) {
        _vm.$set(_vm.menuModify, "icon", $$v)
      },
      expression: "menuModify.icon"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "描述:",
      "prop": "remark"
    }
  }, [_c('Input', {
    attrs: {
      "type": "textarea",
      "autosize": {
        minRows: 2,
        maxRows: 5
      }
    },
    model: {
      value: (_vm.menuModify.remark),
      callback: function($$v) {
        _vm.$set(_vm.menuModify, "remark", $$v)
      },
      expression: "menuModify.remark"
    }
  })], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-70359234", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=10.chunk.js.map