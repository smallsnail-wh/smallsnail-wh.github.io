webpackJsonp([1],{

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(73)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(87),
  /* scopeId */
  "data-v-7beecc34",
  /* cssModules */
  null
)
Component.options.__file = "F:\\githubpage\\src\\views\\base\\base.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] base.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7beecc34", Component.options)
  } else {
    hotAPI.reload("data-v-7beecc34", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 59:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            /*用户名*/
            userName: null,
            /*一级菜单*/
            menuList: [],
            /*二级菜单*/
            menuSub: [],
            /*面包屑data*/
            breadcrumbData: []
        };
    },
    mounted: function mounted() {
        /*this.$router.push();*/
        /*this.userName = window.localStorage.getItem("currentUser_name");*/
        /*this.axios({
            method: 'get',
            url: '/user/'+window.localStorage.getItem("currentUser_name")
        }).then(function(response){
            this.userName = response.data.name;
        }.bind(this)).catch(function(error){
            alert(error);
        });*/
        this.userName = "管理员";
        this.menuList = [{ "id": 1, "name": "系统管理", "url": null, "parentId": 0, "sort": 1, "remark": null, "icon": "ios-flower", "children": [{ "id": 4, "name": "用户管理", "url": "/base/user", "parentId": 1, "sort": 1, "remark": null, "icon": "ios-person", "children": null }, { "id": 5, "name": "菜单管理", "url": "/base/menu", "parentId": 1, "sort": 2, "remark": null, "icon": "android-list", "children": null }, { "id": 6, "name": "角色管理", "url": "/base/role", "parentId": 1, "sort": 3, "remark": null, "icon": "ios-people", "children": null }] }, { "id": 2, "name": "菜单2", "url": null, "parentId": 0, "sort": 2, "remark": null, "icon": "ios-flower-outline", "children": [{ "id": 7, "name": "子菜单22", "url": "/base/test4", "parentId": 2, "sort": 2, "remark": null, "icon": "ios-reverse-camera-outline", "children": null }] }, { "id": 3, "name": "菜单3", "url": null, "parentId": 0, "sort": 3, "remark": null, "icon": "ios-rose", "children": [{ "id": 8, "name": "子菜单31", "url": "/base/test5", "parentId": 3, "sort": 1, "remark": null, "icon": "ios-eye", "children": null }, { "id": 9, "name": "子菜单32", "url": "/base/test6", "parentId": 3, "sort": 2, "remark": null, "icon": "ios-eye-outline", "children": null }] }];
        for (var i in this.menuList) {
            for (var j in this.menuList[i].children) {
                this.menuSub.push(this.menuList[i].children[j]);
            }
        }
    },

    methods: {
        /*菜单选择事件*/
        select: function select(e) {
            var filterMenus = this.menuSub.filter(function (menu) {
                return menu.url != null && menu.url != '' && menu.id == e;
            });
            this.$router.push(filterMenus[0].url);
            this.breadcrumbData.splice(0, 1, filterMenus[0]);
        },

        /*下拉菜单选择事件*/
        dropdownSelect: function dropdownSelect(e) {
            this.$store.dispatch('users/loginOUt', { "router": this.$router });
        }
    }
});

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aef5b502e8e3c8956e0495c725cd6f9a.jpg";

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "31394b8ca50dd2067fdbc40ec4aa5836.jpg";

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "layout"
  }, [_c('Row', {
    staticStyle: {
      "position": "absolute",
      "left": "0",
      "top": "0",
      "width": "100%"
    },
    attrs: {
      "type": "flex"
    }
  }, [_c('Col', {
    staticClass: "layout-menu-left",
    attrs: {
      "span": "4"
    }
  }, [_c('div', {
    staticClass: "layout-logo-left"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(78)
    }
  }), _vm._v(" "), _c('strong', [_vm._v("smallsnail-Wh")])]), _vm._v(" "), _c('Menu', {
    attrs: {
      "active-name": "1-2",
      "theme": "dark",
      "width": "auto",
      "open-names": ['1']
    },
    on: {
      "on-select": function (m) {
        _vm.select(m)
      }
    }
  }, _vm._l((_vm.menuList), function(pmenu) {
    return _c('Submenu', {
      key: pmenu.id,
      attrs: {
        "name": pmenu.id
      }
    }, [_c('template', {
      slot: "title"
    }, [_c('Icon', {
      attrs: {
        "type": pmenu.icon
      }
    }), _vm._v("\n                        " + _vm._s(pmenu.name) + "\n                    ")], 1), _vm._v(" "), _vm._l((pmenu.children), function(cmenu) {
      return _c('MenuItem', {
        key: cmenu.id,
        attrs: {
          "name": cmenu.id
        }
      }, [_c('Icon', {
        attrs: {
          "type": cmenu.icon
        }
      }), _vm._v("\n                        " + _vm._s(cmenu.name) + "\n                    ")], 1)
    })], 2)
  }))], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "20"
    }
  }, [_c('div', {
    staticClass: "layout-header"
  }, [_c('strong', [_vm._v(_vm._s(_vm.userName))]), _vm._v(" "), _c('Dropdown', {
    staticStyle: {
      "margin-right": "50px"
    },
    attrs: {
      "trigger": "click"
    },
    on: {
      "on-click": function (m) {
        _vm.dropdownSelect(m)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(79)
    }
  }), _vm._v(" "), _c('DropdownMenu', {
    staticClass: "dropdown-menu",
    attrs: {
      "slot": "list"
    },
    slot: "list"
  }, [_c('DropdownItem', [_vm._v("退出")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "layout-breadcrumb"
  }, [_c('Breadcrumb', [_c('BreadcrumbItem', {
    attrs: {
      "to": "/base/welcome"
    }
  }, [_vm._v("Home")]), _vm._v(" "), _vm._l((_vm.breadcrumbData), function(item) {
    return _c('BreadcrumbItem', {
      key: item.id,
      attrs: {
        "to": item.url
      }
    }, [_vm._v(_vm._s(item.name))])
  })], 2)], 1), _vm._v(" "), _c('div', {
    staticClass: "layout-content"
  }, [_c('router-view')], 1), _vm._v(" "), _c('div', {
    staticClass: "layout-copy"
  }, [_vm._v("\n                2017-2018 © smallsnail-wh\n            ")])])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7beecc34", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=1.chunk.js.map