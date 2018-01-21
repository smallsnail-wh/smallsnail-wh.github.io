webpackJsonp([9],{

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(63),
  /* template */
  __webpack_require__(84),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "F:\\githubpage\\wh-web\\src\\views\\sys\\role.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] role.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48038306", Component.options)
  } else {
    hotAPI.reload("data-v-48038306", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 63:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        var _this = this;

        return {
            /*选择的数量*/
            count: null,
            /*选中的组数据*/
            groupId: null,
            /*新建modal的显示参数*/
            newModal: false,
            /*修改modal的显示参数*/
            modifyModal: false,
            /*权限modal的显示参数*/
            settingModal: false,
            /*分页total属性绑定值*/
            total: 0,
            /*loading*/
            loading: true,
            /*pageInfo实体*/
            pageInfo: {
                page: 0,
                pageSize: 10
            },
            /*role实体*/
            role: {
                id: null,
                name: null,
                modules: null,
                describe: null
            },
            /*用于添加的role实体*/
            roleNew: {
                id: null,
                name: null,
                modules: null,
                describe: null
            },
            /*用于修改的role实体*/
            roleModify: {
                id: null,
                name: null,
                modules: null,
                describe: null
            },
            /*新建验证*/
            ruleNew: {
                name: [{ type: 'string', required: true, message: '输入角色名', trigger: 'blur' }]
            },
            /*修改验证*/
            ruleModify: {
                name: [{ type: 'string', required: true, message: '输入角色名', trigger: 'blur' }]
            },
            /*表显示字段*/
            columns1: [{
                type: 'selection',
                width: 60,
                align: 'center'
            }, {
                title: '角色名',
                key: 'name'
            }, {
                title: '描述',
                key: 'describe'
            }, { title: '操作',
                key: 'action',
                width: 180,
                align: 'center',
                render: function render(h, params) {
                    return h('div', [h('Button', {
                        props: { icon: 'gear-b' },
                        style: { border: 'none', background: 'none' },
                        on: {
                            click: function click() {
                                _this.setting(params.row);
                            }
                        }
                    })]);
                }
            }],
            /*表数据*/
            data1: [],
            /*表显示字段*/
            columns2: [{
                title: '权限',
                key: 'name'
            }, {
                title: '操作',
                align: 'center',
                render: function render(h, params) {
                    return h('div', [h('i-switch', {
                        attrs: {
                            'value': params.row.value
                        },
                        on: {
                            'on-change': function onChange(val) {
                                var i = _this.moduleArr.indexOf(params.row.id + '');
                                if (val) {
                                    if (i == -1) {
                                        _this.moduleArr.push(params.row.id + '');
                                    }
                                } else {
                                    if (i != -1) {
                                        _this.moduleArr.splice(i, 1);
                                    }
                                }
                            }
                        }
                    })]);
                }
            }],
            /*表数据*/
            data2: [],
            /*临时存储权限的数组*/
            moduleArr: [],
            /*二级菜单列表*/
            submenusList: []
        };
    },
    mounted: function mounted() {
        /*页面初始化调用方法*/
        this.getTable({
            "pageInfo": this.pageInfo
        });
        this.axios({
            method: 'get',
            url: '/menus/submenus'
        }).then(function (response) {
            this.submenusList = response.data;
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

        /*role实体初始化*/
        initRole: function initRole() {
            this.role.id = null;
            this.role.name = null;
            this.role.modules = null;
            this.role.describe = null;
        },

        /*roleNew实体初始化*/
        initRoleNew: function initRoleNew() {
            this.roleNew.id = null;
            this.roleNew.name = null;
            this.roleNew.modules = null;
            this.roleNew.describe = null;
        },

        /*roleModify实体初始化*/
        initRoleModify: function initRoleModify() {
            this.roleModify.id = null;
            this.roleModify.name = null;
            this.roleModify.modules = null;
            this.roleModify.describe = null;
        },

        /*roleNew设置*/
        roleSet: function roleSet(e) {
            this.role.id = e.id;
            this.role.name = e.name;
            this.role.modules = e.modules;
            this.role.describe = e.describe;
        },

        /*roleNew设置*/
        roleNewSet: function roleNewSet(e) {
            this.roleNew.id = e.id;
            this.roleNew.name = e.name;
            this.roleNew.modules = e.modules;
            this.roleNew.describe = e.describe;
        },

        /*roleModify设置*/
        roleModifySet: function roleModifySet(e) {
            this.roleModify.id = e.id;
            this.roleModify.name = e.name;
            this.roleModify.modules = e.modules;
            this.roleModify.describe = e.describe;
        },

        /*得到表数据*/
        getTable: function getTable(e) {
            this.axios({
                method: 'get',
                url: '/roles',
                params: {
                    'page': e.pageInfo.page,
                    'pageSize': e.pageInfo.pageSize
                }
            }).then(function (response) {
                this.data1 = response.data.data;
                this.total = response.data.totalCount;
            }.bind(this)).catch(function (error) {
                alert(error);
            });
        },

        /*分页点击事件*/
        pageSearch: function pageSearch(e) {
            this.pageInfo.page = e - 1;
            this.getTable({
                "pageInfo": this.pageInfo
            });
        },

        /*新建点击触发事件*/
        openNewModal: function openNewModal() {
            this.newModal = true;
            this.initRoleNew();
            this.data1.sort();
            this.count = 0;
            this.groupId = null;
        },

        /*新建modal的newOk点击事件*/
        newOk: function newOk(roleNew) {
            var _this2 = this;

            this.$refs[roleNew].validate(function (valid) {
                if (valid) {
                    _this2.initRole();
                    _this2.roleSet(_this2.roleNew);
                    _this2.axios({
                        method: 'post',
                        url: '/roles/role',
                        data: _this2.role
                    }).then(function (response) {
                        this.initRoleNew();
                        this.getTable({
                            "pageInfo": this.pageInfo
                        });
                        this.$Message.info('新建成功');
                    }.bind(_this2)).catch(function (error) {
                        alert(error);
                    });
                    _this2.newModal = false;
                } else {
                    setTimeout(function () {
                        _this2.loading = false;
                        _this2.$nextTick(function () {
                            _this2.loading = true;
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
        modifyOk: function modifyOk(roleModify) {
            var _this3 = this;

            this.$refs[roleModify].validate(function (valid) {
                if (valid) {
                    _this3.initRole();
                    _this3.roleSet(_this3.roleModify);
                    _this3.axios({
                        method: 'put',
                        url: '/roles/' + _this3.role.id,
                        data: _this3.role
                    }).then(function (response) {
                        this.initRoleModify();
                        this.getTable({
                            "pageInfo": this.pageInfo
                        });
                        this.$Message.info('修改成功');
                    }.bind(_this3)).catch(function (error) {
                        alert(error);
                    });
                    _this3.modifyModal = false;
                } else {
                    _this3.$Message.error('表单验证失败!');
                    setTimeout(function () {
                        _this3.loading = false;
                        _this3.$nextTick(function () {
                            _this3.loading = true;
                        });
                    }, 1000);
                }
            });
        },

        /*表格中按钮点击事件*/
        setting: function setting(e) {
            this.data1.sort();
            this.settingModal = true;
            this.roleModifySet(e);
            if (e.modules == null || e.modules == '') {
                this.moduleArr = [];
            } else {
                this.moduleArr = e.modules.split(";");
            }
            var data2Temp = [];
            for (var i = 0; i < this.submenusList.length; i++) {
                if (this.moduleArr.indexOf(this.submenusList[i].id + '') == -1) {
                    data2Temp.push({
                        'id': this.submenusList[i].id,
                        'name': this.submenusList[i].name,
                        'value': false
                    });
                } else {
                    data2Temp.push({
                        'id': this.submenusList[i].id,
                        'name': this.submenusList[i].name,
                        'value': true
                    });
                }
            }
            this.data2 = data2Temp;
        },

        /*配置权限的settingOk点击事件*/
        settingOk: function settingOk() {
            var temp = "";
            for (var i in this.moduleArr) {
                if (this.moduleArr[i] != '' && this.moduleArr != null) {
                    temp = temp + this.moduleArr[i] + ";";
                }
            }
            this.roleModify.modules = temp;
            this.initRole();
            this.roleSet(this.roleModify);
            this.axios({
                method: 'put',
                url: '/roles/' + this.role.id,
                data: this.role
            }).then(function (response) {
                this.initRoleModify();
                this.getTable({
                    "pageInfo": this.pageInfo
                });
                this.$Message.info('配置成功');
            }.bind(this)).catch(function (error) {
                alert(error);
            });
        },

        /*modal的cancel点击事件*/
        cancel: function cancel() {
            this.$Message.info('点击了取消');
        },

        /*table选择后触发事件*/
        change: function change(e) {
            if (e.length == 1) {
                this.roleModifySet(e['0']);
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
                    url: '/roles',
                    data: this.groupId
                }).then(function (response) {
                    this.getTable({
                        "pageInfo": this.pageInfo
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
            this.roleModifySet(e);
            this.modifyModal = true;
            this.data1.sort();
        }
    }
});

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "margin": "20px"
    }
  }, [_c('div', [_c('ul', [_c('li', [_c('Button', {
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
        _vm.newOk('roleNew')
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
    ref: "roleNew",
    attrs: {
      "model": _vm.roleNew,
      "rules": _vm.ruleNew,
      "label-width": 80
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "角色名:",
      "prop": "name"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "204px"
    },
    model: {
      value: (_vm.roleNew.name),
      callback: function($$v) {
        _vm.$set(_vm.roleNew, "name", $$v)
      },
      expression: "roleNew.name"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "描述:",
      "prop": "describe"
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
      value: (_vm.roleNew.describe),
      callback: function($$v) {
        _vm.$set(_vm.roleNew, "describe", $$v)
      },
      expression: "roleNew.describe"
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
        _vm.modifyOk('roleModify')
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
    ref: "roleModify",
    attrs: {
      "model": _vm.roleModify,
      "rules": _vm.ruleModify,
      "label-width": 80
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "角色名:",
      "prop": "name"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "204px"
    },
    model: {
      value: (_vm.roleModify.name),
      callback: function($$v) {
        _vm.$set(_vm.roleModify, "name", $$v)
      },
      expression: "roleModify.name"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "描述:",
      "prop": "describe"
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
      value: (_vm.roleModify.describe),
      callback: function($$v) {
        _vm.$set(_vm.roleModify, "describe", $$v)
      },
      expression: "roleModify.describe"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "width": "400",
      "title": "配置权限",
      "mask-closable": false
    },
    on: {
      "on-ok": function($event) {
        _vm.settingOk()
      },
      "on-cancel": function($event) {
        _vm.cancel()
      }
    },
    model: {
      value: (_vm.settingModal),
      callback: function($$v) {
        _vm.settingModal = $$v
      },
      expression: "settingModal"
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "24"
    }
  }, [_c('Table', {
    attrs: {
      "border": "",
      "columns": _vm.columns2,
      "data": _vm.data2
    }
  })], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-48038306", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=9.chunk.js.map