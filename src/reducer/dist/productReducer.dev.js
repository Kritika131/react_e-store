"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProductReducer = function ProductReducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return _objectSpread({}, state, {
        isLoading: true
      });

    case "API_DATA":
      var featureData = action.payload.filter(function (curElm) {
        return curElm.featured === true;
      });
      return _objectSpread({}, state, {
        isLoading: false,
        products: action.payload,
        featureProducts: featureData
      });

    case "API_ERROR":
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true
      });

    case "SET_SINGLE_LOADING":
      return _objectSpread({}, state, {
        isSingleLoading: true
      });

    case "SET_SINGLE_PRODUCT":
      return _objectSpread({}, state, {
        isSingleLoading: false,
        singleProduct: action.payload
      });

    case "SET_SINGLE_ERROR":
      return _objectSpread({}, state, {
        isSingleLoading: false,
        isSingleError: true
      });

    default:
      return state;
  }
};

var _default = ProductReducer;
exports["default"] = _default;