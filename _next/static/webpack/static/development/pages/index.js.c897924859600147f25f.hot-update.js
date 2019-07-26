webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/formStore.js":
/*!****************************!*\
  !*** ./utils/formStore.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/createClass.js");



var FormStore =
/*#__PURE__*/
function () {
  function FormStore() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FormStore);

    this.store = {};
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FormStore, [{
    key: "addStore",
    value: function addStore(name, data) {
      this.store[name] = data;
    }
  }, {
    key: "releaseStore",
    value: function releaseStore(name) {
      this.store[name] = {};
    } // 修改单条数据源数据

  }, {
    key: "changeStoreData",
    value: function changeStoreData(name, key, value) {
      this.store[name]['dataSource'][key] = value;
    } // 获取监听

  }, {
    key: "getSubscribe",
    value: function getSubscribe(name) {
      console.log('输出', this.store[name]);
      return this.store[name].subscribe;
    } // 修改表单数据源

  }, {
    key: "changeDataSource",
    value: function changeDataSource(name, value) {
      this.store[name]['dataSource'] = value;
      this.getSubscribe(name)(value);
    }
  }, {
    key: "getFormData",
    value: function getFormData(name) {
      return this.store[name]['dataSource'];
    }
  }, {
    key: "getFormStore",
    value: function getFormStore(name) {
      return this.store[name];
    }
  }, {
    key: "changeError",
    value: function changeError(name, error) {
      this.store[name]['error'] = error;
    }
  }, {
    key: "getFormItem",
    value: function getFormItem(name, key) {
      return this.store[name]['formData'][key];
    }
  }]);

  return FormStore;
}();

/* harmony default export */ __webpack_exports__["default"] = (new FormStore());

/***/ })

})
//# sourceMappingURL=index.js.c897924859600147f25f.hot-update.js.map