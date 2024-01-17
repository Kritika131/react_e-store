"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cartReducer = function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      {
        var _action$payload = action.payload,
            id = _action$payload.id,
            color = _action$payload.color,
            amount = _action$payload.amount,
            product = _action$payload.product; //tackle the existing product 
        //checking product is already available in cart or not

        var existingProduct = state.cart.find(function (curItem) {
          return curItem.id === id + color;
        });

        if (existingProduct) {
          var updateProduct = state.cart.map(function (curElm) {
            if (curElm.id === id + color) {
              var newAmount = curElm.amount + amount;

              if (newAmount >= curElm.max) {
                newAmount = curElm.max;
              }

              return _objectSpread({}, curElm, {
                amount: newAmount
              });
            } else {
              return curElm;
            }
          });
          return _objectSpread({}, state, {
            cart: updateProduct
          });
        } else {
          var cartProduct;
          cartProduct = {
            id: id + color,
            name: product.name,
            color: color,
            amount: amount,
            image: product.image[0].url,
            price: product.price,
            max: product.stock
          };
          return _objectSpread({}, state, {
            cart: [].concat(_toConsumableArray(state.cart), [cartProduct])
          });
        }
      }

    case "SET_DECREMENT":
      {
        // finding which product decrement btn clicked 
        var updatedData = state.cart.map(function (curElm) {
          if (curElm.id === action.payload) {
            // console.log(curElm);
            var decAmount = curElm.amount - 1;
            if (decAmount <= 1) decAmount = 1;
            return _objectSpread({}, curElm, {
              amount: decAmount
            });
          } else {
            return curElm;
          }
        });
        return _objectSpread({}, state, {
          cart: updatedData
        });
      }

    case "SET_INCREMENT":
      {
        // finding which product decrement btn clicked 
        var _updatedData = state.cart.map(function (curElm) {
          if (curElm.id === action.payload) {
            // console.log(curElm);
            var incAmount = curElm.amount + 1;
            if (incAmount >= curElm.max) incAmount = curElm.max;
            return _objectSpread({}, curElm, {
              amount: incAmount
            });
          } else {
            return curElm;
          }
        });

        return _objectSpread({}, state, {
          cart: _updatedData
        });
      }

    case "REMOVE_ITEM":
      {
        var updatedCart = state.cart.filter(function (curElm) {
          return curElm.id !== action.payload;
        });
        return _objectSpread({}, state, {
          cart: updatedCart
        });
      }

    case "REMOVE_ITEM":
      {
        var _updatedCart = state.cart.filter(function (curElm) {
          return curElm.id !== action.payload;
        });

        return _objectSpread({}, state, {
          cart: _updatedCart
        });
      }

    case "CLEAR_CART":
      {
        return _objectSpread({}, state, {
          cart: []
        });
      }

    case "CART_PRICE_ITEM_TOTAL":
      {
        var _state$cart$reduce = state.cart.reduce(function (initialVal, curElm) {
          var amount = curElm.amount,
              price = curElm.price;
          initialVal.total_item += amount;
          initialVal.total_price += amount * price;
          return initialVal;
        }, {
          total_item: 0,
          total_price: 0
        }),
            total_item = _state$cart$reduce.total_item,
            total_price = _state$cart$reduce.total_price;

        return _objectSpread({}, state, {
          total_item: total_item,
          total_price: total_price
        });
      }

    default:
      return state;
  } // --------------------------------------------------------
  // if(action.type==="CART_TOTAL_ITEM"){
  //     let updateItemVal= state.cart.reduce((initialVal,curElm)=>{
  //         let {amount}=curElm;
  //         initialVal=initialVal+amount;
  //         return initialVal;
  //     },0);
  //     return{
  //         ...state,
  //         total_item:updateItemVal,
  //     }
  // }
  // if(action.type==="CART_TOTAL_PRICE"){
  //     let updatedPrice=state.cart.reduce((initialVal,curElm)=>{
  //         let {price,amount} = curElm;
  //         initialVal=initialVal+(price*amount);
  //         return initialVal;
  //     },0);
  //     return {
  //         ...state,
  //         total_price:updatedPrice,
  //     }
  // }---------------------------------------------OR
  // if(action.type==="CART_PRICE_ITEM_TOTAL"){
  //     let {total_item,total_price}=state.cart.reduce((initialVal,curElm)=>{
  //         let{amount,price}=curElm;
  //         initialVal.total_item+=amount;
  //         initialVal.total_price+=(amount*price);
  //         return initialVal;
  //     },
  //     {
  //         total_item:0,
  //         total_price:0,
  //     })
  //     return {
  //         ...state,
  //         total_item:total_item,
  //         total_price:total_price,
  //     }
  // }
  //   -----------------------------------------------------------------

};

var _default = cartReducer;
exports["default"] = _default;