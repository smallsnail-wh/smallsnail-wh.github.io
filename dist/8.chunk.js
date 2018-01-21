webpackJsonp([8],{

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(83),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "F:\\githubpage\\wh-web\\src\\views\\sys\\user.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] user.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4800115c", Component.options)
  } else {
    hotAPI.reload("data-v-4800115c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 64:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        var _this = this;

        return {
            /*用于查找的登录名*/
            loginName: null,
            /*选择的数量*/
            count: null,
            /*选中的组数据*/
            groupId: null,
            /*新建modal的显示参数*/
            newModal: false,
            /*修改modal的显示参数*/
            modifyModal: false,
            /*角色配置modal的显示参数*/
            roleModal: false,
            /*分页total属性绑定值*/
            total: 0,
            /*loading*/
            loading: true,
            /*pageInfo实体*/
            pageInfo: {
                page: 0,
                pageSize: 10
            },
            /*user实体*/
            user: {
                id: null,
                name: null,
                loginName: null,
                password: null,
                passwordAgain: null,
                email: null
            },
            /*用于添加的user实体*/
            userNew: {
                id: null,
                name: null,
                loginName: null,
                password: null,
                passwordAgain: null,
                email: null
            },
            /*用于修改的user实体*/
            userModify: {
                id: null,
                name: null,
                loginName: null,
                password: null,
                email: null
            },
            /*新建验证*/
            ruleNew: {
                name: [{ type: 'string', required: true, message: '输入用户名', trigger: 'blur' }],
                loginName: [{ type: 'string', required: true, message: '输入登录名', trigger: 'blur' }],
                password: [{ type: 'string', required: true, message: '输入密码', trigger: 'blur' }],
                passwordAgain: [{ type: 'string', required: true, message: '输入再次密码', trigger: 'blur' }],
                email: [{ required: true, message: '输入邮箱', trigger: 'blur' }, { type: 'email', message: '输入正确的邮箱格式', trigger: 'blur' }]
            },
            /*修改验证*/
            ruleModify: {
                name: [{ type: 'string', required: true, message: '输入用户名', trigger: 'blur' }],
                loginName: [{ type: 'string', required: true, message: '输入登录名', trigger: 'blur' }],
                password: [{ type: 'string', required: true, message: '输入密码', trigger: 'blur' }],
                email: [{ required: true, message: '输入邮箱', trigger: 'blur' }, { type: 'email', message: '输入正确的邮箱格式', trigger: 'blur' }]
            },
            /*表显示字段*/
            columns1: [{
                type: 'selection',
                width: 60,
                align: 'center'
            }, {
                title: '登录名',
                key: 'loginName'
            }, {
                title: '用户名',
                key: 'name'
            }, {
                title: '邮箱',
                key: 'email'
            }, {
                title: '操作',
                align: 'center',
                key: 'action',
                render: function render(h, params) {
                    return h('div', [h('Button', {
                        props: {
                            type: 'info'
                        },
                        on: {
                            click: function click() {
                                _this.relationSet(params.row);
                            }
                        }
                    }, '配置角色')]);
                }
            }],
            /*表数据*/
            data1: [],
            /*表显示字段*/
            columns2: [{
                type: 'selection',
                width: 60,
                align: 'center'
            }, {
                title: '角色名称',
                width: 120,
                key: 'name'
            }, {
                title: '描述',
                key: 'describe'
            }],
            /*表数据*/
            data2: [],
            /*data2的临时存储*/
            data2Temp: [],
            /*用户与角色关系列表*/
            relationList: null
        };
    },
    mounted: function mounted() {
        /*页面初始化调用方法*/
        this.getTable({
            "pageInfo": this.pageInfo,
            "loginName": this.loginName
        });
        this.axios({
            method: 'get',
            url: '/roles/all'
        }).then(function (response) {
            this.data2Temp = response.data;
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

        /*user实体初始化*/
        initUser: function initUser() {
            this.user.id = null;
            this.user.name = null;
            this.user.loginName = null;
            this.user.password = null;
            this.user.email = null;
        },

        /*userNew实体初始化*/
        initUserNew: function initUserNew() {
            this.userNew.id = null;
            this.userNew.name = null;
            this.userNew.loginName = null;
            this.userNew.password = null;
            this.userNew.passwordAgain = null;
            this.userNew.email = null;
        },

        /*userModify实体初始化*/
        initUserModify: function initUserModify() {
            this.userModify.id = null;
            this.userModify.name = null;
            this.userModify.loginName = null;
            this.userModify.password = null;
            this.userModify.email = null;
        },

        /*userNew设置*/
        userSet: function userSet(e) {
            this.user.id = e.id;
            this.user.name = e.name;
            this.user.loginName = e.loginName;
            this.user.password = e.password;
            this.user.email = e.email;
        },

        /*userNew设置*/
        userNewSet: function userNewSet(e) {
            this.userNew.id = e.id;
            this.userNew.name = e.name;
            this.userNew.loginName = e.loginName;
            this.userNew.password = e.password;
            this.userNew.passwordAgain = e.password;
            this.userNew.email = e.email;
        },

        /*userModify设置*/
        userModifySet: function userModifySet(e) {
            this.userModify.id = e.id;
            this.userModify.name = e.name;
            this.userModify.loginName = e.loginName;
            this.userModify.password = e.password;
            this.userModify.email = e.email;
        },

        /*得到表数据*/
        getTable: function getTable(e) {
            this.axios({
                method: 'get',
                url: '/users',
                params: {
                    'page': e.pageInfo.page,
                    'pageSize': e.pageInfo.pageSize,
                    'loginName': e.loginName
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
                "loginName": this.loginName
            });
        },

        /*分页点击事件*/
        pageSearch: function pageSearch(e) {
            this.pageInfo.page = e - 1;
            this.getTable({
                "pageInfo": this.pageInfo,
                "loginName": this.loginName
            });
        },

        /*新建点击触发事件*/
        openNewModal: function openNewModal() {
            this.newModal = true;
            this.initUserNew();
            this.data1.sort();
            this.count = 0;
            this.groupId = null;
        },

        /*新建modal的newOk点击事件*/
        newOk: function newOk(userNew) {
            var _this2 = this;

            this.$refs[userNew].validate(function (valid) {
                if (valid) {
                    if (_this2.userNew.password == _this2.userNew.passwordAgain) {
                        _this2.initUser();
                        _this2.userSet(_this2.userNew);
                        _this2.axios({
                            method: 'post',
                            url: '/users/user',
                            data: _this2.user
                        }).then(function (response) {
                            this.initUserNew();
                            this.getTable({
                                "pageInfo": this.pageInfo,
                                "loginName": this.loginName
                            });
                            this.$Message.info('新建成功');
                        }.bind(_this2)).catch(function (error) {
                            alert(error);
                        });
                        _this2.newModal = false;
                    } else {
                        _this2.$Message.error('两次输入的密码不相同！');
                        _this2.loading = false;
                        _this2.$nextTick(function () {
                            _this2.loading = true;
                        });
                    }
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
        modifyOk: function modifyOk(userModify) {
            var _this3 = this;

            this.$refs[userModify].validate(function (valid) {
                if (valid) {
                    _this3.initUser();
                    _this3.userSet(_this3.userModify);
                    _this3.axios({
                        method: 'put',
                        url: '/users/' + _this3.user.id,
                        data: _this3.user
                    }).then(function (response) {
                        this.initUserNew();
                        this.getTable({
                            "pageInfo": this.pageInfo,
                            "loginName": this.loginName
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

        /*modal的cancel点击事件*/
        cancel: function cancel() {
            this.$Message.info('点击了取消');
        },

        /*table选择后触发事件*/
        change: function change(e) {
            if (e.length == 1) {
                this.userModifySet(e['0']);
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
                    url: '/users',
                    data: this.groupId
                }).then(function (response) {
                    this.getTable({
                        "pageInfo": this.pageInfo,
                        "loginName": this.loginName
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
            this.userModifySet(e);
            this.modifyModal = true;
            this.data1.sort();
        },

        /*流程配置*/
        relationSet: function relationSet(e) {
            this.roleModal = true;
            this.data2 = [];
            this.axios({
                method: 'get',
                url: '/relations/' + e.id
            }).then(function (response) {
                var roleList = [];
                for (var i in response.data) {
                    roleList.push(response.data[i].roleId);
                }
                for (var i in this.data2Temp) {
                    if (roleList.indexOf(this.data2Temp[i].id) == -1) {
                        this.data2.push({
                            "id": this.data2Temp[i].id,
                            "name": this.data2Temp[i].name,
                            "describe": this.data2Temp[i].describe,
                            "userId": e.id,
                            "_checked": false
                        });
                    } else {
                        this.data2.push({
                            "id": this.data2Temp[i].id,
                            "name": this.data2Temp[i].name,
                            "describe": this.data2Temp[i].describe,
                            "userId": e.id,
                            "_checked": true
                        });
                    }
                }
            }.bind(this)).catch(function (error) {
                alert(error);
            });
        },

        /*配置角色modal确认按钮点击事件*/
        roleOk: function roleOk() {
            if (this.relationList != null) {
                this.axios({
                    method: 'post',
                    url: '/relations',
                    data: this.relationList
                }).then(function (response) {
                    this.$Message.info('配置成功');
                }.bind(this)).catch(function (error) {
                    alert(error);
                });
                this.relationList = null;
            }
        },

        /*配置角色modal中表选择改变事件*/
        change2: function change2(e) {
            this.relationList = [];
            if (e.length == 0) {
                this.relationList.push({
                    "userId": this.data2[0].userId
                });
            }
            for (var i in e) {
                this.relationList.push({
                    "userId": e[i].userId,
                    "roleId": e[i].id
                });
            }
        }
    }
});

/***/ }),

/***/ 83:
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
  }, [_vm._v("登录名：\n                \t"), _c('Input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "placeholder": "请输入..."
    },
    model: {
      value: (_vm.loginName),
      callback: function($$v) {
        _vm.loginName = $$v
      },
      expression: "loginName"
    }
  })], 1), _vm._v(" "), _c('Col', {
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
        _vm.newOk('userNew')
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
    ref: "userNew",
    attrs: {
      "model": _vm.userNew,
      "rules": _vm.ruleNew,
      "label-width": 80
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "登录名:",
      "prop": "loginName"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "204px"
    },
    model: {
      value: (_vm.userNew.loginName),
      callback: function($$v) {
        _vm.$set(_vm.userNew, "loginName", $$v)
      },
      expression: "userNew.loginName"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "用户名:",
      "prop": "name"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "204px"
    },
    model: {
      value: (_vm.userNew.name),
      callback: function($$v) {
        _vm.$set(_vm.userNew, "name", $$v)
      },
      expression: "userNew.name"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "密码:",
      "prop": "password"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "204px"
    },
    attrs: {
      "type": "password"
    },
    model: {
      value: (_vm.userNew.password),
      callback: function($$v) {
        _vm.$set(_vm.userNew, "password", $$v)
      },
      expression: "userNew.password"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "确认密码:",
      "prop": "passwordAgain"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "204px"
    },
    attrs: {
      "type": "password"
    },
    model: {
      value: (_vm.userNew.passwordAgain),
      callback: function($$v) {
        _vm.$set(_vm.userNew, "passwordAgain", $$v)
      },
      expression: "userNew.passwordAgain"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "邮箱:",
      "prop": "email"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "204px"
    },
    model: {
      value: (_vm.userNew.email),
      callback: function($$v) {
        _vm.$set(_vm.userNew, "email", $$v)
      },
      expression: "userNew.email"
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('Modal', {
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
        _vm.modifyOk('userModify')
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
    ref: "userModify",
    attrs: {
      "model": _vm.userModify,
      "rules": _vm.ruleModify,
      "label-width": 80
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "登录名:",
      "prop": "loginName"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "204px"
    },
    model: {
      value: (_vm.userModify.loginName),
      callback: function($$v) {
        _vm.$set(_vm.userModify, "loginName", $$v)
      },
      expression: "userModify.loginName"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "用户名:",
      "prop": "name"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "204px"
    },
    model: {
      value: (_vm.userModify.name),
      callback: function($$v) {
        _vm.$set(_vm.userModify, "name", $$v)
      },
      expression: "userModify.name"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "密码:",
      "prop": "password"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "204px"
    },
    attrs: {
      "type": "password"
    },
    model: {
      value: (_vm.userModify.password),
      callback: function($$v) {
        _vm.$set(_vm.userModify, "password", $$v)
      },
      expression: "userModify.password"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12"
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "邮箱:",
      "prop": "email"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "204px"
    },
    model: {
      value: (_vm.userModify.email),
      callback: function($$v) {
        _vm.$set(_vm.userModify, "email", $$v)
      },
      expression: "userModify.email"
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "width": "500",
      "title": "角色配置"
    },
    on: {
      "on-ok": function($event) {
        _vm.roleOk()
      },
      "on-cancel": function($event) {
        _vm.cancel()
      }
    },
    model: {
      value: (_vm.roleModal),
      callback: function($$v) {
        _vm.roleModal = $$v
      },
      expression: "roleModal"
    }
  }, [_c('div', [_c('Table', {
    attrs: {
      "border": "",
      "columns": _vm.columns2,
      "data": _vm.data2,
      "height": 260
    },
    on: {
      "on-selection-change": function (s) {
        _vm.change2(s)
      }
    }
  })], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4800115c", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=8.chunk.js.map