"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 9rem 0;\n  .container {\n    max-width: 120rem;\n  }\n  .grid {\n    gap: 3.2rem;\n  }\n  figure {\n    width: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    overflow: hidden;\n    transition: all 0.5s linear;\n    &::after {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 0%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.5);\n      transition: all 0.2s linear;\n      cursor: pointer;\n    }\n    &:hover::after {\n      width: 100%;\n    }\n    &:hover img {\n      transform: scale(1.2);\n    }\n    img {\n      max-width: 90%;\n      margin-top: 1.5rem;\n      height: 20rem;\n      transition: all 0.2s linear;\n    }\n  }\n  .card {\n    background-color: ", ";\n    border-radius: 1rem;\n    .card-data {\n      padding: 0 1rem;\n    }\n    .card-data-flex {\n      margin: 2rem 0;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n    .card-data--price {\n      color: ", ";\n    }\n    h3 {\n      color: ", ";\n      text-transform: capitalize;\n    }\n    .btn {\n      margin: 2rem auto;\n      background-color: rgb(0 0 0 / 0%);\n      border: 0.1rem solid rgb(98 84 243);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      &:hover {\n        background-color: rgb(98 84 243);\n      }\n      &:hover a {\n        color: #fff;\n      }\n      a {\n        color: rgb(98 84 243);\n        font-size: 1.4rem;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GridView = function GridView() {
  return Wrapper;
};

var Wrapper = _styledComponents["default"].section(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.bg;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.helper;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.text;
});

var _default = GridView;
exports["default"] = _default;