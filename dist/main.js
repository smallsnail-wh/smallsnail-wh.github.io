webpackJsonp([11],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_iview__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_iview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libs_util__ = __webpack_require__(41);





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

var routers = [{
				path: '*',
				component: function component(resolve) {
								return __webpack_require__.e/* require */(7).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(50)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
				}
}, {
				path: '/',
				meta: {
								title: 'smallsnail-wh'
				},
				component: function component(resolve) {
								return __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(21)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
				}
}, {
				path: '/index',
				meta: {
								title: 'smallsnail-wh'
				},
				component: function component(resolve) {
								return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(21)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
				}
}, {
				path: '/test',
				meta: {
								title: 'test'
				},
				component: function component(resolve) {
								return __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(55)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
				}
}, {
				path: '/base',
				meta: {
								title: 'base',
								requiresAuth: true
				},
				component: function component(resolve) {
								return __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(49)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
				},
				children: [{
								path: 'welcome',
								name: 'welcome',
								component: function component(resolve) {
												return __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(54)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
								},
								meta: {
												title: "welcome"
								}
				}, {
								path: 'user',
								name: 'user',
								component: function component(resolve) {
												return __webpack_require__.e/* require */(8).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(53)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
								},
								meta: {
												title: "user"
								}
				}, {
								path: 'menu',
								name: 'menu',
								component: function component(resolve) {
												return __webpack_require__.e/* require */(10).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(51)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
								},
								meta: {
												title: "menu"
								}
				}, {
								path: 'role',
								name: 'role',
								component: function component(resolve) {
												return __webpack_require__.e/* require */(9).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(52)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
								},
								meta: {
												title: "role"
								}
				}, {
								path: 'test4',
								name: 'test4',
								component: function component(resolve) {
												return __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(56)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
								},
								meta: {
												title: "test4"
								}
				}, {
								path: 'test5',
								name: 'test5',
								component: function component(resolve) {
												return __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(57)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
								},
								meta: {
												title: "test5"
								}
				}, {
								path: 'test6',
								name: 'test6',
								component: function component(resolve) {
												return __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(58)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
								},
								meta: {
												title: "test6"
								}
				}]
}];

// 路由配置
var RouterConfig = {
				mode: 'hash',
				routes: routers
};
var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */](RouterConfig);

router.beforeEach(function (to, from, next) {
				/*console.log(to);
    console.log(from);*/
				var token = window.localStorage.getItem('currentUser_token');
				if (to.matched.some(function (record) {
								return record.meta.requiresAuth;
				}) && (!token || token === null)) {
								next({
												path: '/',
												query: { redirect: to.fullPath }
								});
				} /* else {
         next()
         console.log("next");
      }*/
				__WEBPACK_IMPORTED_MODULE_2_iview___default.a.LoadingBar.start();
				__WEBPACK_IMPORTED_MODULE_3__libs_util__["a" /* default */].title(to.meta.title);
				next();
});

router.afterEach(function () {
				__WEBPACK_IMPORTED_MODULE_2_iview___default.a.LoadingBar.finish();
				window.scrollTo(0, 0);
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_UsersModule__ = __webpack_require__(43);




__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* default */].Store({
    modules: {
        users: __WEBPACK_IMPORTED_MODULE_2__modules_UsersModule__["a" /* default */]
    },
    state: {
        todos: [{ id: 1, text: '...', done: true }, { id: 2, text: '...', done: false }],
        count: 0
    },
    getters: {
        doneTodos: function doneTodos(state) {
            return state;
        },
        doneTodosCount: function doneTodosCount(state, getters) {
            return getters;
        },
        getTodoById: function getTodoById(state) {
            return function (id) {
                return state.todos.find(function (todo) {
                    return todo.id === id;
                });
            };
        }
    },
    mutations: {
        add: function add(state) {
            state.count++;
        },
        increment: function increment(state, number) {
            state.count += number;
        }
    },
    actions: {
        increment: function increment(context) {
            context.commit('add');
        }
    }
}));

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_store__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(7);




// axios 配置
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.timeout = 5000;
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.headers.post['Content-Type'] = 'application/json';
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem("currentUser_token");
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.baseURL = '/wh';

// http request 拦截器
/*axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.Authorization = `token ${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });*/

// http response 拦截器
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response) {
        switch (error.response.status) {
            case 401:
                // 401 清除token信息并跳转到登录页面
                __WEBPACK_IMPORTED_MODULE_1__store_store__["a" /* default */].commit('users/clearUser');
                __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].replace({
                    path: '/',
                    query: { redirect: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].currentRoute.fullPath }
                });
                break;
            case 403:
                // 403 无权限，跳转到首页
                __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].replace({
                    path: '/base/welcome',
                    query: { redirect: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].currentRoute.fullPath }
                });
                break;
        }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    /*return Promise.reject(error.response.data)*/
    return Promise.reject('');
});

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_axios___default.a);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};!function(){function o(e,t){if(!o.installed){if(o.installed=!0,!t)return void console.error("You have to install axios");e.axios=t,Object.defineProperties(e.prototype,{axios:{get:function(){return t}},$http:{get:function(){return t}}})}}"object"==( false?"undefined":_typeof(exports))?module.exports=o: true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return o}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):window.Vue&&window.axios&&Vue.use(o,window.axios)}();

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(48),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "F:\\githubpage\\src\\app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c3aa1e32", Component.options)
  } else {
    hotAPI.reload("data-v-c3aa1e32", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },
    mounted: function mounted() {},
    beforeDestroy: function beforeDestroy() {},

    methods: {}
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("development");

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_env__ = __webpack_require__(40);



var util = {};
util.title = function (title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

var ajaxUrl = __WEBPACK_IMPORTED_MODULE_1__config_env__["a" /* default */] === 'development' ? 'http://127.0.0.1:8888' : __WEBPACK_IMPORTED_MODULE_1__config_env__["a" /* default */] === 'production' ? 'https://www.url.com' : 'https://debug.url.com';

util.ajax = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

/* harmony default export */ __webpack_exports__["a"] = (util);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iview__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_iview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__app_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_iview_dist_styles_iview_css__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_iview_dist_styles_iview_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_iview_dist_styles_iview_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__axios__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_axios__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_store__ = __webpack_require__(8);










__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_7_vue_axios___default.a, __WEBPACK_IMPORTED_MODULE_6__axios__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_iview___default.a);

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
    el: '#app',
    router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
    store: __WEBPACK_IMPORTED_MODULE_8__store_store__["a" /* default */],
    render: function render(h) {
        return h(__WEBPACK_IMPORTED_MODULE_4__app_vue___default.a);
    }
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iview__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_iview__);


/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: {
        currentUser: {
            get UserName() {
                return localStorage.getItem("currentUser_name");
            },
            get UserToken() {
                return localStorage.getItem("currentUser_token");
            },
            get RefreshToken() {
                return localStorage.getItem("currentUser_refresh_token");
            }
        }
    },
    mutations: {
        setUser: function setUser(state, _ref) {
            var user_name = _ref.user_name,
                user_token = _ref.user_token,
                refresh_token = _ref.refresh_token;

            // 在这里把用户名和token保存起来
            localStorage.setItem("currentUser_name", user_name);
            localStorage.setItem("currentUser_token", user_token);
            localStorage.setItem("currentUser_refresh_token", refresh_token);
        },
        clearUser: function clearUser(state) {
            localStorage.clear();
        }
    },
    actions: {
        userLogin: function userLogin(context, _ref2) {
            var user_name = _ref2.user_name,
                user_password = _ref2.user_password,
                router = _ref2.router;


            if (user_name == "admin" && user_password == "admin") {
                context.commit('setUser', { "user_name": user_name, "user_token": "a79f04af-fd04-4312-88dd-678544acea80", "refresh_token": "4d18ed22-0007-4020-8792-1bc18041d771" });
                /*router.push({path:"base"});*/
                __WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem("currentUser_token");
                router.push({ path: 'base/welcome' });
            }
        },
        loginOUt: function loginOUt(context, _ref3) {
            var router = _ref3.router;

            router.push({ path: '/' });
            context.commit('clearUser');
        }
    }
});

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c3aa1e32", module.exports)
  }
}

/***/ })
],[42]);
//# sourceMappingURL=main.js.map