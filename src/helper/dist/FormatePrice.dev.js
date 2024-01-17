"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var FormatePrice = function FormatePrice(_ref) {
  var price = _ref.price;
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2
  }).format(price / 100);
};

var _default = FormatePrice;
exports["default"] = _default;