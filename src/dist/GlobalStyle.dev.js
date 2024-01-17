"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyle = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n*{\n    margin:0;\n    padding:0;\n    box-sizing:border-box;\n    font-family:\"Work Sans\", sans-serif;\n}\nhtml{\n    font-size:62.5%;\n    overflow-x:hidden;\n}\nbody{\n    overflow-x:hidden\n\n}\nh3{\n    font-size:1.8rem;\n    font-weight:400;\n}\np,button{\n    color:", ";\n    font-size:1.65rem;\n    line-height:1.5;\n    font-weight:400;\n\n}\na{\n    text-decoration:none;\n}\n\nli{\n    list-style:none;\n}\n\n", "\n\n.container{\n    max-width:120rem;\n    margin:0 auto;\n}\n.grid{\n    display:grid;\n    gap:9rem;\n}\n.grid-two-column{\n    grid-template-columns:repeat(2, 1fr);\n}\n.grid-three-column{\n    grid-template-columns:repeat(3, 1fr);\n}\n.grid-four-column{\n    grid-template-columns:1fr 1.2fr .5fr .8fr;\n}\n.grid-five-column{\n    grid-template-columns:repeat(5,1fr);\n}\n.common-heading{\n    font-size:3.8rem;\n    font-weight:600;\n    margin-bottom:6rem;\n    text-transform:capitalize;\n}\n.intro-data{\n    margin-bottom:0;\n    text-transform:uppercase;\n    color:#5138ee;\n}\n.caption{\n    position:absolute;\n    top:15%;\n    right:10%;\n    text-transform:uppercase;\n    background-color:", ";\n    color:", ";\n    padding:0.8rem 2rem;\n    font-size:1.2rem;\n    border-radius:2rem;\n}\n\ninput, textarea{\n    max-width:50rem;\n    color:", ";\n    padding:1.6rem 2.4rem;\n    border:1px solid ", ";\n    text-transform:uppercase;\n    box-shadow:", ";\n}\ninput[type=\"submit\"]{\n    max-width:16rem;\n    margin-top:2rem;\n    background-color:", ";\n    color:", ";\n    padding:1.4rem 2.2rem;\n    border-style:solid;\n    border-width:.1rem;\n    text-transform:uppercase;\n    font-size:1.8rem;\n    cursor:pointer;\n\n}\n\n@media (max-width:", "){\n    .container {\n        max-width:130rem;\n        padding:0 3.2rem;\n    }\n}\n@media (max-width:", "){\n    html {\n        font-size:50%;\n    }\n    .grid{\n        gap:3.2rem;\n    }\n\n}\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.text;
}, ''
/* reusable code section  */
, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.bg;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.helper;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.black;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.border;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.shadowSupport;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.btn;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.white;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.media.tab;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.media.mobile;
});
exports.GlobalStyle = GlobalStyle;