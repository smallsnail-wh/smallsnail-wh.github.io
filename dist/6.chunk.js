webpackJsonp([6],{

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(72)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(66),
  /* template */
  __webpack_require__(86),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "F:\\githubpage\\src\\views\\test.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] test.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f32c43d", Component.options)
  } else {
    hotAPI.reload("data-v-4f32c43d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 66:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            value: null
        };
    },

    methods: {
        click: function click() {
            this.$store.dispatch('userLogin', { "user_name": "test1", "user_password": "123", "router": this.$router });
            this.$router.push({ path: 'base' });
        },
        click2: function click2() {
            this.axios({
                /*headers: {'Authorization': 'bearer '+this.$store.state.users.currentUser.UserToken},*/
                method: 'post',
                url: '/test',
                data: {
                    "test": "123456"
                }
            }).then(function (response) {
                /*console.log(response);*/
                this.value = response.data;
            }.bind(this)).catch(function (error) {
                console.log(error);
            });
        }
    }
});

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "test"
  }, [_c('Button', {
    attrs: {
      "type": "warning"
    },
    on: {
      "click": function($event) {
        _vm.click()
      }
    }
  }, [_vm._v("test")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "warning"
    },
    on: {
      "click": function($event) {
        _vm.click2()
      }
    }
  }, [_vm._v("测试")]), _vm._v(" "), _c('Input', {
    attrs: {
      "type": "textarea",
      "rows": 4,
      "placeholder": "Enter something..."
    },
    model: {
      value: (_vm.value),
      callback: function($$v) {
        _vm.value = $$v
      },
      expression: "value"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4f32c43d", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=6.chunk.js.map