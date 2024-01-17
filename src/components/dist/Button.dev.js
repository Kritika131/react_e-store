"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-decoration:none;\n  max-width:auto;\n  background-color:rgb(98 84 243);\n  color:rgb(255 255 255);\n  padding:1rem 1.8rem;\n  border:none;\n  text-transform:uppercase;\n  text-align:center;\n  font-weight:600;\n  cursor:pointer;\n  transition:all 0.3s ease;\n  -webkit-transition:all 0.3s ease 0s;\n  -o-transition:all 0.3s ease 0s;\n\n  &:hover,\n  &:active {\n    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);\n    box-shadow:", ";\n    transform:scale(0.96);\n  }\n  a{\n    text-decoration:none;\n    color:rgb(255 255 255);\n    font-size:1.8rem;\n    \n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents["default"].button(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.shadowSupport;
});

exports.Button = Button;