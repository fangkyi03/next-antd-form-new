webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/_antd@3.19.3@antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/_antd@3.19.3@antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/_react@16.8.6@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _command_apiTool__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../command/apiTool */ "./command/apiTool.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.less */ "./pages/index/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/_next@8.1.0@next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _command_createDva__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../command/createDva */ "./command/createDva.js");
/* harmony import */ var _components_FormModal_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/FormModal/index */ "./components/FormModal/index.js");
/* harmony import */ var _components_FormView__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/FormView */ "./components/FormView/index.js");










var _dec, _class;








var Index = (_dec = Object(_command_createDva__WEBPACK_IMPORTED_MODULE_13__["default"])([]), _dec(_class =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getFormHeaderGroup", function () {
      return {
        type: 'group',
        cols: 24,
        labelCol: 6,
        wrappCol: 5,
        keys: Array(400).fill({}).map(function (e, i) {
          return {
            type: 'input',
            name: '测试' + i,
            key: 'a' + i,
            cols: 12,
            rules: [{
              required: true
            }]
          };
        })
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getFormHeaderGroup1", function () {
      return {
        type: 'group',
        cols: 24,
        labelCol: 6,
        wrappCol: 5,
        keys: Array(10).fill({}).map(function (e, i) {
          return {
            type: 'select',
            name: '下拉' + i,
            key: 'a' + i,
            cols: 12,
            typeData: [{
              name: '测试下拉',
              value: 1
            }],
            rules: [{
              required: true
            }]
          };
        })
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onButtonDown", function () {
      _command_apiTool__WEBPACK_IMPORTED_MODULE_10__["default"].setFormValue(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), 'FormView', {
        a1: '',
        a2: Math.random() * 1001,
        a3: Math.random() * 1001,
        a4: 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onToggleDisplay", function () {
      _this.toggleDisplay = !_this.toggleDisplay;
      _command_apiTool__WEBPACK_IMPORTED_MODULE_10__["default"].toggleFormNotDisplay(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), 'FormView', ['a1', 'a2'], _this.toggleDisplay);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onShowModal", function () {
      _command_apiTool__WEBPACK_IMPORTED_MODULE_10__["default"].toggleModal(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), 'FormModal');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSetDisableDown", function () {
      _command_apiTool__WEBPACK_IMPORTED_MODULE_10__["default"].setFormDisable(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), 'FormView', ['a1', 'a4']);
      _command_apiTool__WEBPACK_IMPORTED_MODULE_10__["default"].setFormDisable(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), 'FormModal', ['a1', 'a2', 'a4']);
    });

    _this.toggleDisplay = true;
    _this.formView = Object(_command_createDva__WEBPACK_IMPORTED_MODULE_13__["default"])(['FormView'])(_components_FormView__WEBPACK_IMPORTED_MODULE_15__["default"]);
    _this.formView1 = Object(_command_createDva__WEBPACK_IMPORTED_MODULE_13__["default"])(['FormView1'])(_components_FormView__WEBPACK_IMPORTED_MODULE_15__["default"]);
    _this.formModal = Object(_command_createDva__WEBPACK_IMPORTED_MODULE_13__["default"])(['FormModal'])(_components_FormModal_index__WEBPACK_IMPORTED_MODULE_14__["default"]);
    _this.formData = [// 测试组1
    _this.getFormHeaderGroup()];
    _this.formData1 = [// 测试组1
    _this.getFormHeaderGroup1()];
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "render",
    value: function render() {
      var NewFormView = this.formView;
      var NewFormModal = this.formModal;
      var NewFormView1 = this.formView1;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          paddingTop: _command_apiTool__WEBPACK_IMPORTED_MODULE_10__["default"].getSize(30)
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(NewFormView, {
        data: this.formData
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(NewFormView1, {
        data: this.formData1
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(NewFormModal, {
        data: this.formData
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onClick: this.onButtonDown
      }, "\u70B9\u51FB\u5237\u65B0\u6570\u636E"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onClick: this.onToggleDisplay
      }, "\u5207\u6362\u663E\u793A"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onClick: this.onShowModal
      }, "\u663E\u793A\u5F39\u7A97modal"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onClick: this.onSetDisableDown
      }, "\u8BBE\u7F6E\u8868\u5355\u7981\u7528")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"])) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Object(_command_createDva__WEBPACK_IMPORTED_MODULE_13__["default"])([])(Index));

/***/ })

})
//# sourceMappingURL=index.js.c5406054bc639af74360.hot-update.js.map