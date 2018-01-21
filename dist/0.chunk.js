webpackJsonp([0],{

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(77)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(61),
  /* template */
  __webpack_require__(91),
  /* scopeId */
  "data-v-f4f8b7c6",
  /* cssModules */
  null
)
Component.options.__file = "F:\\githubpage\\wh-web\\src\\views\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f4f8b7c6", Component.options)
  } else {
    hotAPI.reload("data-v-f4f8b7c6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 61:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            formLogin: {
                userName: null,
                password: null
            },
            ruleLogin: {
                userName: [{ required: true, message: '请填写用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请填写密码', trigger: 'blur' }]
            }
        };
    },

    methods: {
        login: function login(formLogin) {
            var _this = this;

            this.$refs[formLogin].validate(function (valid) {
                if (valid) {
                    _this.$store.dispatch('users/userLogin', { "user_name": _this.formLogin.userName, "user_password": _this.formLogin.password, "router": _this.$router });
                }
            });
        }
    }
});

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('div', {
    attrs: {
      "id": "index_pc_bj"
    }
  }, [_c('Form', {
    ref: "formLogin",
    attrs: {
      "model": _vm.formLogin,
      "rules": _vm.ruleLogin
    }
  }, [_c('div', {
    staticClass: "wrap_conter"
  }, [_c('ul', [_c('li', [_c('h2', [_vm._v("用户登录")])]), _vm._v(" "), _c('li', [_c('dl', [_c('FormItem', {
    attrs: {
      "prop": "userName"
    }
  }, [_c('Input', {
    attrs: {
      "type": "text",
      "placeholder": "登录名"
    },
    model: {
      value: (_vm.formLogin.userName),
      callback: function($$v) {
        _vm.$set(_vm.formLogin, "userName", $$v)
      },
      expression: "formLogin.userName"
    }
  }, [_c('Icon', {
    attrs: {
      "slot": "prepend",
      "type": "ios-person-outline"
    },
    slot: "prepend"
  })], 1)], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "prop": "password"
    }
  }, [_c('Input', {
    attrs: {
      "type": "password",
      "placeholder": "密码"
    },
    model: {
      value: (_vm.formLogin.password),
      callback: function($$v) {
        _vm.$set(_vm.formLogin, "password", $$v)
      },
      expression: "formLogin.password"
    }
  }, [_c('Icon', {
    attrs: {
      "slot": "prepend",
      "type": "ios-locked-outline"
    },
    slot: "prepend"
  })], 1)], 1), _vm._v(" "), _c('FormItem', [_c('Button', {
    staticStyle: {
      "width": "250px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.login('formLogin')
      }
    }
  }, [_vm._v("登录")])], 1)], 1)])])])])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-f4f8b7c6", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=0.chunk.js.map