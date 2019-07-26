webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FormContainer/index.js":
/*!*******************************************!*\
  !*** ./components/FormContainer/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormContainer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/_antd@3.19.3@antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/_antd@3.19.3@antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/_antd@3.19.3@antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/_antd@3.19.3@antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/_react@16.8.6@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _command_apiTool__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../command/apiTool */ "./command/apiTool.js");
/* harmony import */ var antd_es_form_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/es/form/style */ "./node_modules/_antd@3.19.3@antd/es/form/style/index.js");
/* harmony import */ var _FormSelect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./FormSelect */ "./components/FormContainer/FormSelect/index.js");
/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./FormInput */ "./components/FormContainer/FormInput/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rc-animate */ "./node_modules/_rc-animate@3.0.0-rc.6@rc-animate/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! moment */ "./node_modules/_moment@2.24.0@moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _FormRef__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./FormRef */ "./components/FormContainer/FormRef/index.js");
/* harmony import */ var _utils_formStore__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../utils/formStore */ "./utils/formStore.js");























var FormContainer =
/*#__PURE__*/
function () {
  function FormContainer(_ref) {
    var _this = this;

    var formData = _ref.formData,
        arg = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, ["formData"]);

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__["default"])(this, FormContainer);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "initStore", function () {
      _utils_formStore__WEBPACK_IMPORTED_MODULE_21__["default"].addStore(_this.props.modelList[0], {
        subscribe: _this.subscribe,
        dataSource: {},
        disable: [],
        typeData: []
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "subscribe", function (dataSource) {
      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(dataSource).forEach(function (e) {
        _this._ref[e].setProps({
          value: _this.getValue({
            key: e
          }),
          disable: _this.getDisable({
            key: e
          }),
          typeData: _this.getTypeData({
            key: e
          })
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "getChildrenData", function (item) {
      return item.keys;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "renderCols", function (_ref2) {
      var item = _ref2.item,
          index = _ref2.index;
      return function (Component) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default.a, {
          span: item.cols || 8
        }, _this.renderNormal({
          item: item,
          index: index
        })(Component));
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "getValue", function (item) {
      var dataSource = _utils_formStore__WEBPACK_IMPORTED_MODULE_21__["default"].getFormData(_this.props.modelList[0]);
      if (!item.key) return;
      return dataSource[item.key] ? dataSource[item.key] : item.value || '';
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "renderNormal", function (_ref3) {
      var item = _ref3.item,
          index = _ref3.index;
      return function (Component) {
        if (item.name) return _this.renderFormItem({
          item: item,
          index: index
        })(Component);
        return _this.renderComponent({
          item: item,
          index: index
        })(Component);
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "addStoreData", function (key, data) {
      _utils_formStore__WEBPACK_IMPORTED_MODULE_21__["default"].changeStoreData(_this.props.modelList[0], key, data);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "onChange", function (value, item) {
      switch (item.type) {
        case 'input':
          _this.addStoreData(item.key, value.currentTarget.value);

          _this.subscribe(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])({}, item.key, value.currentTarget.value));

          break;

        default:
          _command_apiTool__WEBPACK_IMPORTED_MODULE_13__["default"].setFormValue(_this, _this.props.modelList[0], Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])({}, item.key, value));
          break;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "onHelpAnimEnd", function () {
      console.log('动画结束');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "getTypeData", function (item) {
      var _this$props$typeData = _this.props.typeData,
          typeData = _this$props$typeData === void 0 ? {} : _this$props$typeData;
      return typeData[item.key] || item.typeData || [];
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "onDestory", function () {
      if (_this.destoryNum == 0) {
        _this.destoryNum += 1;
        setTimeout(function () {
          console.log('输出延迟');
        }, 100);
      } else {
        _this.destoryNum += 1;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "getNotDisplay", function (item) {
      var _this$props$notDispla = _this.props.notDisplay,
          notDisplay = _this$props$notDispla === void 0 ? [] : _this$props$notDispla;
      return notDisplay.indexOf(item.key) == -1;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "getRule", function (rule, value, item) {
      var data = {
        required: {
          reg: /\S/,
          msg: '请输入' + (item.name || '') + '内容'
        },
        maxLen: {
          err: value.length > (rule.value || 10),
          msg: '输入内容超过长度'
        }
      };

      if (!rule.type) {
        if (!data['required'].reg.test(value)) {
          return rule.msg || data['required'].msg;
        } else {
          return '';
        }
      } else if (data[rule.type].reg && !data[rule.type].reg.test(value)) {
        return rule.msg || data[rule.type].msg;
      } else if (data[rule.type].err) {
        return rule.msg || data[rule.type].msg;
      } else {
        return '';
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "getRules", function (item) {
      for (var i = 0; i < item.rules.length; i++) {
        var retData = _this.getRule(item.rules[i], _this.getValue(item), item);

        if (retData) {
          return retData;
        }
      }

      return null;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "addError", function (item) {
      var _this$props$error = _this.props.error,
          error = _this$props$error === void 0 ? {} : _this$props$error;

      if (error[item.key] !== _this.errorObj[item.key]) {
        _command_apiTool__WEBPACK_IMPORTED_MODULE_13__["default"].setFormError(_this, _this.props.modelList[0], _this.errorObj);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "isEqual", function () {
      return _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default()(_this.props.error) == _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default()(_this.errorObj);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "getRef", function () {
      return _this._ref;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "pushError", function (item) {
      var ret = _this.getRules(item);

      _this.errorObj[item.key] = ret;

      _this.addError(item);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "getRulesMessage", function (item) {
      if (item.rules && item.rules.length > 0) {
        _this.pushError(item);

        var _this$props$error2 = _this.props.error,
            error = _this$props$error2 === void 0 ? {} : _this$props$error2;

        if (error[item.key]) {
          return error[item.key];
        } else {
          return '';
        }
      } else {
        return '';
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "getDisable", function (item) {
      var _this$props$disable = _this.props.disable,
          disable = _this$props$disable === void 0 ? [] : _this$props$disable;
      return disable.indexOf(item.key) !== -1;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "renderComponent", function (_ref4) {
      var item = _ref4.item,
          index = _ref4.index;
      return function (Component) {
        var errorMsg = _this.getRulesMessage(item);

        var classes = classnames__WEBPACK_IMPORTED_MODULE_17___default()('ant-form-item-children', {
          'has-error': errorMsg
        });
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: classes,
          key: "help"
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
          className: 'ant-form-item-children'
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_FormRef__WEBPACK_IMPORTED_MODULE_20__["default"], {
          ref: function ref(r) {
            return _this._ref[item.key] = r;
          },
          onChange: function onChange(value) {
            return _this.onChange(value, item);
          },
          key: item.key
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Component, {
          key: index,
          style: item.style // value={this.getValue(item)}
          // typeData={this.getTypeData(item)}
          // onChange={(value) => this.onChange(value, item)}
          // disable={this.getDisable(item)}

        }))), errorMsg && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(rc_animate__WEBPACK_IMPORTED_MODULE_18__["default"], {
          transitionName: "show-help",
          component: "",
          transitionAppear: true,
          key: "help"
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "ant-form-explain",
          key: "help"
        }, errorMsg)));
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "renderFormItem", function (_ref5) {
      var item = _ref5.item,
          index = _ref5.index;
      return function (Component) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
          key: index,
          className: 'ant-form-item'
        }, _this.renderLabel(item), _this.renderWraper(item)(Component));
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "getLabelCol", function (item) {
      var colSize = _this.props.colSize;
      return item.labelCol || colSize.labelCol || 8;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "getWrapperCol", function (item) {
      var colSize = _this.props.colSize;
      return item.wrappCol || colSize.wrappCol || 8;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "getRequired", function (item) {
      if (item.rules) {
        return item.rules.some(function (e) {
          return e.required == true;
        });
      } else {
        return false;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "renderLabel", function (item) {
      var labelCol = _this.getLabelCol(item);

      var labelClass = classnames__WEBPACK_IMPORTED_MODULE_17___default()(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])({}, 'ant-form-item-required', _this.getRequired(item)));
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default.a, {
        span: labelCol,
        className: 'ant-form-item-label'
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", {
        className: labelClass,
        title: item.name
      }, item.name));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "renderWraper", function (item) {
      var wrappCol = _this.getWrapperCol(item);

      return function (Component) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default.a, {
          span: wrappCol
        }, _this.renderComponent({
          item: item
        })(Component));
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "renderChildren", function (_ref6) {
      var item = _ref6.item,
          index = _ref6.index;
      return function (Component) {
        var isNotDisplay = _this.getNotDisplay(item);

        if (!isNotDisplay) return null;
        var fun = [_this.renderNormal, _this.renderCols][Number(!!item.cols)];
        return fun({
          item: item,
          index: index
        })(Component);
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "renderGroup", function (item) {
      var groupCol = item.cols || 24;
      return function (Component) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default.a, {
          span: groupCol
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
          gutter: item.gutter || 8,
          className: 'ant-row'
        }, Component));
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "renderItemGroup", function (item) {
      var wrappCol = _this.getWrapperCol(item);

      return function (Component) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default.a, {
          span: item.cols || 8
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
          gutter: item.gutter || 5,
          className: 'ant-row ant-form-item'
        }, _this.renderLabel(item), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default.a, {
          span: wrappCol
        }, Component)));
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "getCustomChildren", function (_ref7) {
      var item = _ref7.item;

      if (_this.customChildren) {
        var retData = _this.customChildren(item);

        if (react__WEBPACK_IMPORTED_MODULE_12___default.a.isValidElement(retData)) {
          return retData;
        } else if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(retData)) {
          return _this.getChildrenMap(retData);
        } else if (retData.type) {
          return _this.getChildren({
            item: retData
          });
        } else {
          return;
        }
      } else {
        return null;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "getChildren", function (data) {
      switch (data.item.type) {
        case 'input':
          return _this.renderChildren(data)(_FormInput__WEBPACK_IMPORTED_MODULE_16__["default"]);

        case 'select':
          return _this.renderChildren(data)(_FormSelect__WEBPACK_IMPORTED_MODULE_15__["default"]);

        case 'checkBox':
          return _this.renderChildren(data)(Checkbox);

        case 'group':
          return _this.renderGroup(data.item)(_this.getChildrenMap(data.item.keys));

        case 'itemGroup':
          return _this.renderItemGroup(data.item)(_this.getChildrenMap(data.item.keys.map(function (e) {
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e, {
              name: null
            });
          })));

        default:
          return _this.getCustomChildren(data);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "getChildrenMap", function () {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.formData;
      return data.map(function (e, index) {
        return _this.getChildren({
          item: e,
          index: index
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "getRow", function (children) {
      var gutter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        gutter: gutter
      }, children);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(this, "bindData", function (data) {
      _this.props = data;
    });

    this.formData = formData;
    this.props = arg;
    this.customChildren = null;
    this.destoryNum = 0;
    this.errorObj = {};
    this.errorTime = moment__WEBPACK_IMPORTED_MODULE_19___default()().valueOf();
    this._ref = {};
    this.initStore();
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__["default"])(FormContainer, [{
    key: "setCustomChildren",
    value: function setCustomChildren(callBack) {
      this.customChildren = callBack;
    }
  }]);

  return FormContainer;
}();

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(FormContainer, "defaultProps", {
  colSize: {
    labelCol: 8,
    wrappCol: 16
  }
});



/***/ })

})
//# sourceMappingURL=index.js.f2a3e59385b171535c5d.hot-update.js.map