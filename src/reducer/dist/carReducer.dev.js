"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var carReducer = function carReducer(state, action) {
  switch (action.type) {
    case "ADD_To_CART":
      {
        var _action$payload = action.payload,
            id = _action$payload.id,
            color = _action$payload.color,
            amount = _action$payload.amount,
            product = _action$payload.product;
        console.log(product);
      }
  }

  return state;
};

var _default = carReducer;
exports["default"] = _default;