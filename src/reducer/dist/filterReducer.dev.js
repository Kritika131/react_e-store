"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var filterReducer = function filterReducer(state, action) {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      {
        var priceArr = action.payload.map(function (curElm) {
          return curElm.price;
        }); // 1st way to get max price from an array 
        // console.log(Math.max.apply(null,priceArr));
        // 2nd way 
        // let maxprice=priceArr.reduce((initialVal,curElm)=>Math.max(initialVal,curElm),0);
        // console.log(maxprice);
        // 3rd way 

        var maxprice = Math.max.apply(Math, _toConsumableArray(priceArr)); // console.log(...priceArr); max take it as agrument 

        return _objectSpread({}, state, {
          filter_products: _toConsumableArray(action.payload),
          all_products: _toConsumableArray(action.payload),
          filters: _objectSpread({}, state.filters, {
            maxPrice: maxprice,
            price: maxprice
          })
        });
      }

    case "SET_GRID_VIEW":
      {
        return _objectSpread({}, state, {
          grid_view: true
        });
      }

    case "SET_LIST_VIEW":
      {
        return _objectSpread({}, state, {
          grid_view: false
        });
      }

    case "GET_SORT_VAlUE":
      {
        // let userSortValue=document.getElementById("sort");
        // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
        return _objectSpread({}, state, {
          sorting_value: action.payload
        });
      }

    case "SORTING_PRODUCTS":
      {
        var newSortData;
        var filter_products = state.filter_products,
            sorting_value = state.sorting_value;

        var tempPayloadData = _toConsumableArray(filter_products);

        var sortingProducts = function sortingProducts(a, b) {
          // if(sorting_value==="lowest"){
          //     return a.price-b.price;
          // }
          // if(sorting_value==="highest"){
          //     return b.price-a.price;
          // }
          // if(sorting_value==="a-z"){
          //     return  a.name.localeCompare(b.name);
          // }
          // if(sorting_value==="z-a"){
          //     return  b.name.localeCompare(a.name);
          // }
          switch (sorting_value) {
            case "lowest":
              {
                return a.price - b.price;
              }

            case "highest":
              {
                return b.price - a.price;
              }

            case "a-z":
              {
                return a.name.localeCompare(b.name);
              }

            case "z-a":
              {
                return b.name.localeCompare(a.name);
              }

            default:
              {
                return a === b;
              }
          }
        }; // if(state.sorting_value==="a-z"){
        //     newSortData= tempPayloadData.sort((a,b)=>{
        //        return  a.name.localeCompare(b.name);
        //     })
        // }
        // if(state.sorting_value==="lowest"){
        //     const sortingProduct=(a,b)=>{
        //         return a.price-b.price;
        //     }
        // newSortData= tempPayloadData.sort(sortingProduct)
        // }
        // if(state.sorting_value==="highest"){
        //     const sortingProduct=(a,b)=>{
        //         return b.price-a.price;
        //     }
        // newSortData= tempPayloadData.sort(sortingProduct)
        // }
        // if(state.sorting_value==="z-a"){
        //     newSortData= tempPayloadData.sort((a,b)=>{
        //        return  b.name.localeCompare(a.name);
        //     })
        // }


        newSortData = tempPayloadData.sort(sortingProducts);
        return _objectSpread({}, state, {
          filter_products: newSortData
        });
      }

    case "UPDATE_FILTER_VALUE":
      {
        var _action$payload = action.payload,
            name = _action$payload.name,
            value = _action$payload.value;
        return _objectSpread({}, state, {
          filters: _objectSpread({}, state.filters, _defineProperty({}, name, value))
        });
      }

    case "FILTER_PRODUCT":
      {
        var all_products = state.all_products;

        var tempFilterProduct = _toConsumableArray(all_products);

        var _state$filters = state.filters,
            text = _state$filters.text,
            category = _state$filters.category,
            company = _state$filters.company,
            color = _state$filters.color,
            price = _state$filters.price;

        if (text) {
          tempFilterProduct = tempFilterProduct.filter(function (curElm) {
            // return curElm.name.toLowerCase().startsWith(text);
            return curElm.name.toLowerCase().includes(text);
          });
        }

        if (category != 'all') {
          tempFilterProduct = tempFilterProduct.filter(function (curElm) {
            return curElm.category == category;
          });
        }

        if (company != "all") {
          tempFilterProduct = tempFilterProduct.filter(function (curElm) {
            return curElm.company.toLowerCase() == company.toLowerCase();
          });
        }

        if (color != "all") {
          tempFilterProduct = tempFilterProduct.filter(function (curElm) {
            return curElm.colors.includes(color);
          });
        }

        if (price === 0) {
          tempFilterProduct = tempFilterProduct.filter(function (curElm) {
            return curElm.price == price;
          });
        } else {
          tempFilterProduct = tempFilterProduct.filter(function (curElm) {
            return curElm.price <= price;
          });
        }

        return _objectSpread({}, state, {
          filter_products: tempFilterProduct
        });
      }

    case "CLEAR_FILTERS":
      {
        return _objectSpread({}, state, {
          filters: _objectSpread({}, state.filters, {
            text: "",
            category: "all",
            company: "all",
            color: "all",
            maxPrice: state.filters.maxPrice,
            minPrice: 0,
            price: state.filters.price
          })
        });
      }

    default:
      return state;
  }
};

var _default = filterReducer;
exports["default"] = _default;