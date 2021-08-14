(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/elements/common/PageLoader.jsx":
/*!***************************************************!*\
  !*** ./components/elements/common/PageLoader.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\elements\\common\\PageLoader.jsx";


const PageLoader = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "loader-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "loader-section section-left"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "loader-section section-right"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (PageLoader);

/***/ }),

/***/ "./components/layouts/MasterLayout.jsx":
/*!*********************************************!*\
  !*** ./components/layouts/MasterLayout.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_ecomerce_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/store/ecomerce/action */ "./store/ecomerce/action.js");
/* harmony import */ var _components_elements_common_PageLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/elements/common/PageLoader */ "./components/elements/common/PageLoader.jsx");
/* harmony import */ var _components_shared_navigation_NavigationList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/shared/navigation/NavigationList */ "./components/shared/navigation/NavigationList.jsx");
/* harmony import */ var _components_layouts_modules_MainHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/layouts/modules/MainHead */ "./components/layouts/modules/MainHead.jsx");


var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\layouts\\MasterLayout.jsx";









const MasterLayout = ({
  children
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies)(['cart', 'compare', 'wishlist']);

  function initEcomerceValues() {
    if (cookies) {
      if (cookies.cart) {
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_5__.setCartItems)(cookies.cart));
      }

      if (cookies.wishlist) {
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_5__.setWishlistTtems)(cookies.wishlist));
      }

      if (cookies.compare) {
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_5__.setCompareItems)(cookies.compare));
      }
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    initEcomerceValues();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_modules_MainHead__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, undefined), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_common_PageLoader__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_navigation_NavigationList__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.BackTop, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "ps-btn--backtop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "icon-arrow-up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (MasterLayout);

/***/ }),

/***/ "./components/layouts/modules/MainHead.jsx":
/*!*************************************************!*\
  !*** ./components/layouts/modules/MainHead.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\layouts\\modules\\MainHead.jsx";



const MainHead = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
    children: "Martfury - React eCommerce Template"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
    rel: "shortcut icon",
    href: "/static/img/favi.png"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
    rel: "icon",
    href: "/static/img/favi.png",
    sizes: "32x32"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
    rel: "icon",
    href: "/static/img/favi.png",
    sizes: "192x192"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
    rel: "apple-touch-icon-precomposed",
    href: "/static/img/favi.png"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    name: "format-detection",
    content: "telephone=no"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    name: "apple-mobile-web-app-capable",
    content: "yes"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    name: "author",
    content: "nouthemes"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    name: "keywords",
    content: "Martfury, React, eCommerce, Template"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    name: "description",
    content: "Martfury - React eCommerce Template"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
    href: "https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;subset=latin-ext",
    rel: "stylesheet"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (MainHead);

/***/ }),

/***/ "./components/shared/navigation/NavigationList.jsx":
/*!*********************************************************!*\
  !*** ./components/shared/navigation/NavigationList.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _panel_PanelMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../panel/PanelMenu */ "./components/shared/panel/PanelMenu.jsx");
/* harmony import */ var _panel_PanelCartMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../panel/PanelCartMobile */ "./components/shared/panel/PanelCartMobile.jsx");
/* harmony import */ var _panel_PanelSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../panel/PanelSearch */ "./components/shared/panel/PanelSearch.jsx");
/* harmony import */ var _panel_PanelCategories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../panel/PanelCategories */ "./components/shared/panel/PanelCategories.jsx");

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\shared\\navigation\\NavigationList.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class NavigationList extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleDrawerClose", () => {
      this.setState({
        menuDrawer: false,
        cartDrawer: false,
        searchDrawer: false,
        categoriesDrawer: false
      });
    });

    _defineProperty(this, "handleShowMenuDrawer", () => {
      this.setState({
        menuDrawer: !this.state.menuDrawer,
        cartDrawer: false,
        searchDrawer: false,
        categoriesDrawer: false
      });
    });

    _defineProperty(this, "handleShowCartDrawer", () => {
      this.setState({
        menuDrawer: false,
        cartDrawer: !this.state.cartDrawer,
        searchDrawer: false,
        categoriesDrawer: false
      });
    });

    _defineProperty(this, "handleShowSearchDrawer", () => {
      this.setState({
        menuDrawer: false,
        cartDrawer: false,
        searchDrawer: !this.state.searchDrawer,
        categoriesDrawer: false
      });
    });

    _defineProperty(this, "handleShowCategoriesDrawer", () => {
      this.setState({
        menuDrawer: false,
        cartDrawer: false,
        searchDrawer: false,
        categoriesDrawer: !this.state.categoriesDrawer
      });
    });

    this.state = {
      menuDrawer: false,
      cartDrawer: false,
      searchDrawer: false,
      categoriesDrawer: false
    };
  }

  render() {
    const {
      menuDrawer,
      searchDrawer,
      cartDrawer,
      categoriesDrawer
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "navigation--list",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Drawer, {
        className: "ps-panel--mobile",
        placement: "right",
        closable: false,
        onClose: this.handleDrawerClose,
        visible: this.state.menuDrawer,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "ps-panel--wrapper",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "ps-panel__header",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Menu"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "ps-panel__close",
              onClick: this.handleDrawerClose,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "icon-cross"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "ps-panel__content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_panel_PanelMenu__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Drawer, {
        className: "ps-panel--mobile",
        placement: "right",
        closable: false,
        onClose: this.handleDrawerClose,
        visible: this.state.cartDrawer,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "ps-panel--wrapper",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "ps-panel__header",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Shopping Cart"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "ps-panel__close",
              onClick: this.handleDrawerClose,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "icon-cross"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "ps-panel__content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_panel_PanelCartMobile__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Drawer, {
        className: "ps-panel--mobile",
        placement: "right",
        closable: false,
        onClose: this.handleDrawerClose,
        visible: this.state.searchDrawer,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "ps-panel--wrapper",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "ps-panel__header",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "ps-panel__close",
              onClick: this.handleDrawerClose,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "icon-cross"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "ps-panel__content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_panel_PanelSearch__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Drawer, {
        className: "ps-panel--mobile",
        placement: "right",
        closable: false,
        onClose: this.handleDrawerClose,
        visible: this.state.categoriesDrawer,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "ps-panel--wrapper",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "ps-panel__header",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Categories"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "ps-panel__close",
              onClick: this.handleDrawerClose,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "icon-cross"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "ps-panel__content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_panel_PanelCategories__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "navigation__content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: `navigation__item ${menuDrawer === true ? 'active' : ''}`,
          onClick: this.handleShowMenuDrawer,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "icon-menu"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: " Menu"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: `navigation__item ${categoriesDrawer === true ? 'active' : ''}`,
          onClick: this.handleShowCategoriesDrawer,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "icon-list4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: " Categories"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: `navigation__item ${searchDrawer === true ? 'active' : ''}`,
          onClick: this.handleShowSearchDrawer,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "icon-magnifier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: " Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: `navigation__item ${cartDrawer === true ? 'active' : ''}`,
          onClick: this.handleShowCartDrawer,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "icon-bag2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: " Cart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, this);
  }

}

const mapStateToProps = state => {
  return state.setting;
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(NavigationList));

/***/ }),

/***/ "./components/shared/panel/PanelCartMobile.jsx":
/*!*****************************************************!*\
  !*** ./components/shared/panel/PanelCartMobile.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useEcomerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/hooks/useEcomerce */ "./hooks/useEcomerce.js");
/* harmony import */ var _hooks_useProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/hooks/useProduct */ "./hooks/useProduct.js");
/* harmony import */ var _utilities_ecomerce_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/utilities/ecomerce-helpers */ "./utilities/ecomerce-helpers.js");

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\shared\\panel\\PanelCartMobile.jsx";







const PanelCartMobile = ({
  ecomerce
}) => {
  const {
    products,
    getProducts,
    removeItem
  } = (0,_hooks_useEcomerce__WEBPACK_IMPORTED_MODULE_4__.default)();
  const {
    title,
    thumbnailImage
  } = (0,_hooks_useProduct__WEBPACK_IMPORTED_MODULE_5__.default)();

  function handleRemoveCartItem(e, product) {
    e.preventDefault();
    removeItem(product, ecomerce.cartItems, 'cart');
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (ecomerce.cartItems) {
      getProducts(ecomerce.cartItems);
    }
  }, [ecomerce]); //view

  let cartItemsView, footerView;

  if (products && products.length > 0) {
    const amount = (0,_utilities_ecomerce_helpers__WEBPACK_IMPORTED_MODULE_6__.calculateAmount)(products);
    const items = products.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ps-product--cart-mobile",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ps-product__thumbnail",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/product/[pid]",
          as: `/product/${item.id}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: thumbnailImage(item)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ps-product__content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "ps-product__remove",
          onClick: e => handleRemoveCartItem(e, item),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "icon-cross"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, undefined), title(item), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/product/[pid]",
          as: `/product/${item.id}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "ps-product__title",
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: "Sold by:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, undefined), " ", item.vendor]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
          children: [item.quantity, " x $", item.price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined)]
    }, item.id, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, undefined));
    cartItemsView = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ps-cart__items",
      children: items
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }, undefined);
    footerView = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ps-cart__footer",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: ["Sub Total:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: ["$", amount]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 31
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("figure", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/account/shopping-cart",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "ps-btn",
            children: "View Cart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/account/checkout",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "ps-btn",
            children: "Checkout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, undefined);
  } else {
    cartItemsView = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Cart empty!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }, undefined);
    footerView = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ps-cart__footer",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/shop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "ps-btn ps-btn--fullwidth",
          children: "Shop now"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "ps-cart--mobile",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ps-cart__content",
      children: [cartItemsView, footerView]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(state => state)(PanelCartMobile));

/***/ }),

/***/ "./components/shared/panel/PanelCategories.jsx":
/*!*****************************************************!*\
  !*** ./components/shared/panel/PanelCategories.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_static_data_static_categories_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/static/data/static-categories.json */ "./public/static/data/static-categories.json");

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\shared\\panel\\PanelCategories.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const {
  SubMenu
} = antd__WEBPACK_IMPORTED_MODULE_2__.Menu;

class PanelCategories extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "rootSubmenuKeys", ['sub1', 'sub2', 'sub4']);

    _defineProperty(this, "state", {
      openKeys: ['sub1']
    });

    _defineProperty(this, "onOpenChange", openKeys => {
      const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);

      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.setState({
          openKeys
        });
      } else {
        this.setState({
          openKeys: latestOpenKey ? [latestOpenKey] : []
        });
      }
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {
      mode: "inline",
      openKeys: this.state.openKeys,
      onOpenChange: this.onOpenChange,
      children: _public_static_data_static_categories_json__WEBPACK_IMPORTED_MODULE_4__.map(category => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: `/shop?category=${category.slug}`,
          children: category.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 25
        }, this)
      }, category.id, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PanelCategories);

/***/ }),

/***/ "./components/shared/panel/PanelMenu.jsx":
/*!***********************************************!*\
  !*** ./components/shared/panel/PanelMenu.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_static_data_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/public/static/data/menu */ "./public/static/data/menu.json");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\shared\\panel\\PanelMenu.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const {
  SubMenu
} = antd__WEBPACK_IMPORTED_MODULE_3__.Menu;

class PanelMenu extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "rootSubmenuKeys", ['sub1', 'sub2', 'sub4']);

    _defineProperty(this, "state", {
      openKeys: []
    });

    _defineProperty(this, "onOpenChange", openKeys => {
      const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);

      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.setState({
          openKeys
        });
      } else {
        this.setState({
          openKeys: latestOpenKey ? [latestOpenKey] : []
        });
      }
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu, {
      mode: "inline",
      openKeys: this.state.openKeys,
      onOpenChange: this.onOpenChange,
      className: "menu--mobile-2",
      children: _public_static_data_menu__WEBPACK_IMPORTED_MODULE_4__.menuPrimary.menu_1.map(item => {
        if (item.subMenu) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubMenu, {
            title: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: item.url,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: item.text
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 37
            }, this),
            children: item.subMenu.map(subItem => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                href: subItem.url,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: subItem.text
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 45
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 41
              }, this)
            }, subItem.text, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 37
            }, this))
          }, item.text, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 29
          }, this);
        } else if (item.megaContent) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubMenu, {
            title: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: item.url,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: item.text
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 37
            }, this),
            children: item.megaContent.map(megaItem => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubMenu, {
              title: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: megaItem.heading
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 48
              }, this),
              children: megaItem.megaItems.map(megaSubItem => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                  href: item.url,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: megaSubItem.text
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 57
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 53
                }, this)
              }, megaSubItem.text, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 49
              }, this))
            }, megaItem.heading, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 37
            }, this))
          }, item.text, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 29
          }, this);
        } else {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {
            children: item.type === 'dynamic' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: `${item.url}/[pid]`,
              as: `${item.url}/${item.endPoint}`,
              children: ["l", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: item.text
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 42
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 37
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: item.url,
              as: item.alias,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: item.text
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 37
            }, this)
          }, item.text, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 29
          }, this);
        }
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this);
  }

}

const mapStateToProps = state => {
  return state.setting;
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(PanelMenu));

/***/ }),

/***/ "./components/shared/panel/PanelSearch.jsx":
/*!*************************************************!*\
  !*** ./components/shared/panel/PanelSearch.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\shared\\panel\\PanelSearch.jsx";



const PanelSearch = () => {
  const {
    0: keyword,
    1: setKeyword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');

  function handleSubmit(e) {
    e.preventDefault();

    if (keyword !== '') {
      next_router__WEBPACK_IMPORTED_MODULE_2___default().push(`/search?keyword=${keyword}`);
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "ps-panel__search-results",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      className: "ps-form--search-mobile",
      action: "/",
      method: "get",
      onSubmit: e => handleSubmit(e),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form-group--nest",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: "form-control",
          type: "text",
          placeholder: "Search something...",
          onChange: e => setKeyword(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "icon-magnifier"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PanelSearch);

/***/ }),

/***/ "./hooks/useEcomerce.js":
/*!******************************!*\
  !*** ./hooks/useEcomerce.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useEcomerce; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/repositories/ProductRepository */ "./repositories/ProductRepository.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_ecomerce_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/store/ecomerce/action */ "./store/ecomerce/action.js");





function useEcomerce() {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: cartItemsOnCookie
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [cookies, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_2__.useCookies)(['cart']);
  const {
    0: products,
    1: setProducts
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  return {
    loading,
    cartItemsOnCookie,
    products,
    getProducts: async (payload, group = '') => {
      setLoading(true);

      if (payload && payload.length > 0) {
        let queries = '';
        payload.forEach(item => {
          if (queries === '') {
            queries = `id_in=${item.id}`;
          } else {
            queries = queries + `&id_in=${item.id}`;
          }
        });
        const responseData = await _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_1__.default.getProductsByIds(queries);

        if (responseData && responseData.length > 0) {
          if (group === 'cart') {
            let cartItems = responseData;
            payload.forEach(item => {
              let existItem = cartItems.find(val => val.id === item.id);

              if (existItem) {
                existItem.quantity = item.quantity;
              }
            });
            setProducts(cartItems);
          } else {
            setProducts(responseData);
          }

          setTimeout(function () {
            setLoading(false);
          }.bind(this), 250);
        }
      } else {
        setLoading(false);
        setProducts([]);
      }
    },
    increaseQty: (payload, currentCart) => {
      let cart = [];

      if (currentCart) {
        cart = currentCart;
        const existItem = cart.find(item => item.id === payload.id);

        if (existItem) {
          existItem.quantity = existItem.quantity + 1;
        }

        setCookie('cart', cart, {
          path: '/'
        });
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_4__.setCartItems)(cart));
      }

      return cart;
    },
    decreaseQty: (payload, currentCart) => {
      let cart = [];

      if (currentCart) {
        cart = currentCart;
        const existItem = cart.find(item => item.id === payload.id);

        if (existItem) {
          if (existItem.quantity > 1) {
            existItem.quantity = existItem.quantity - 1;
          }
        }

        setCookie('cart', cart, {
          path: '/'
        });
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_4__.setCartItems)(cart));
      }

      return cart;
    },
    addItem: (newItem, items, group) => {
      let newItems = [];

      if (items) {
        newItems = items;
        const existItem = items.find(item => item.id === newItem.id);

        if (existItem) {
          if (group === 'cart') {
            existItem.quantity += newItem.quantity;
          }
        } else {
          newItems.push(newItem);
        }
      } else {
        newItems.push(newItem);
      }

      if (group === 'cart') {
        setCookie('cart', newItems, {
          path: '/'
        });
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_4__.setCartItems)(newItems));
      }

      if (group === 'wishlist') {
        setCookie('wishlist', newItems, {
          path: '/'
        });
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_4__.setWishlistTtems)(newItems));
      }

      if (group === 'compare') {
        setCookie('compare', newItems, {
          path: '/'
        });
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_4__.setCompareItems)(newItems));
      }

      return newItems;
    },
    removeItem: (selectedItem, items, group) => {
      let currentItems = items;

      if (currentItems.length > 0) {
        const index = currentItems.findIndex(item => item.id === selectedItem.id);
        currentItems.splice(index, 1);
      }

      if (group === 'cart') {
        setCookie('cart', currentItems, {
          path: '/'
        });
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_4__.setCartItems)(currentItems));
      }

      if (group === 'wishlist') {
        setCookie('wishlist', currentItems, {
          path: '/'
        });
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_4__.setWishlistTtems)(currentItems));
      }

      if (group === 'compare') {
        setCookie('compare', currentItems, {
          path: '/'
        });
      }
    },
    removeItems: group => {
      if (group === 'wishlist') {
        setCookie('wishlist', [], {
          path: '/'
        });
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_4__.setWishlistTtems)([]));
      }

      if (group === 'compare') {
        setCookie('compare', [], {
          path: '/'
        });
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_4__.setCompareItems)([]));
      }

      if (group === 'cart') {
        setCookie('cart', [], {
          path: '/'
        });
        dispatch((0,_store_ecomerce_action__WEBPACK_IMPORTED_MODULE_4__.setCartItems)([]));
      }
    }
  };
}

/***/ }),

/***/ "./hooks/useProduct.js":
/*!*****************************!*\
  !*** ./hooks/useProduct.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useProduct; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lazyload */ "react-lazyload");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _repositories_Repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/repositories/Repository */ "./repositories/Repository.js");
/* harmony import */ var _utilities_product_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/utilities/product-helper */ "./utilities/product-helper.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\hooks\\useProduct.js";






function getImageURL(source, size) {
  let image, imageURL;

  if (source) {
    if (size && size === 'large') {
      if (source.formats.large) {
        image = source.formats.large.url;
      } else {
        image = source.url;
      }
    } else if (size && size === 'medium') {
      if (source.formats.medium) {
        image = source.formats.medium.url;
      } else {
        image = source.url;
      }
    } else if (size && size === 'thumbnail') {
      if (source.formats.thumbnail) {
        image = source.formats.source.url;
      } else {
        image = source.url;
      }
    } else if (size && size === 'small') {
      if (source.formats.small !== undefined) {
        image = source.formats.small.url;
      } else {
        image = source.url;
      }
    } else {
      image = source.url;
    }

    imageURL = `${_repositories_Repository__WEBPACK_IMPORTED_MODULE_3__.baseUrl}${image}`;
  } else {
    imageURL = `/static/img/undefined-product-thumbnail.jpg`;
  }

  return imageURL;
}

function useProduct() {
  return {
    thumbnailImage: payload => {
      if (payload) {
        if (payload.thumbnail) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_lazyload__WEBPACK_IMPORTED_MODULE_2___default()), {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: getImageURL(payload.thumbnail),
                alt: getImageURL(payload.thumbnail)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 29
            }, this)
          }, void 0, false);
        }
      }
    },
    price: payload => {
      let view;

      if (payload.sale_price) {
        view = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "ps-product__price sale",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "$"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, this), (0,_utilities_product_helper__WEBPACK_IMPORTED_MODULE_4__.formatCurrency)(payload.sale_price), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("del", {
            className: "ml-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "$"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, this), (0,_utilities_product_helper__WEBPACK_IMPORTED_MODULE_4__.formatCurrency)(payload.price)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this);
      } else {
        view = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "ps-product__price",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "$"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, this), (0,_utilities_product_helper__WEBPACK_IMPORTED_MODULE_4__.formatCurrency)(payload.price)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, this);
      }

      return view;
    },
    badges: payload => {
      let view = null;

      if (payload.badges && payload.badges.length > 0) {
        const items = payload.badges.map(item => {
          if (item.value === 'hot') {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "ps-product__badge hot",
              children: "Hot"
            }, item.id, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 29
            }, this);
          }

          if (item.value === 'new') {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "ps-product__badge new",
              children: "New"
            }, item.id, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 29
            }, this);
          }

          if (item.value === 'sale') {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "ps-product__badge sale",
              children: "Sale"
            }, item.id, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 29
            }, this);
          }
        });
        view = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "ps-product__badges",
          children: items
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 24
        }, this);
      }

      return view;
    },
    badge: payload => {
      let view;

      if (payload.badge && payload.badge !== null) {
        view = payload.badge.map(badge => {
          if (badge.type === 'sale') {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ps-product__badge",
              children: badge.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 29
            }, this);
          } else if (badge.type === 'outStock') {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ps-product__badge out-stock",
              children: badge.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 29
            }, this);
          } else {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ps-product__badge hot",
              children: badge.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 29
            }, this);
          }
        });
      }

      if (payload.sale_price) {
        const discountPercent = ((payload.price - payload.sale_price) / payload.sale_price * 100).toFixed(0);
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "ps-product__badge",
          children: ["-", discountPercent, "%"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }, this);
      }

      return view;
    },
    brand: payload => {
      let view;

      if (payload.brands && payload.brands.length > 0) {
        view = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: "/shop",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "text-capitalize",
            children: payload.brands[0].name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 21
        }, this);
      } else {
        view = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: "/shop",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "text-capitalize",
            children: "No Brand"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }, this);
      }

      return view;
    },
    title: payload => {
      let view = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: "/product/[pid]",
        as: `/product/${payload.id}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "ps-product__title",
          children: payload.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 17
      }, this);

      return view;
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/store/store */ "./store/store.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layouts_MasterLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/layouts/MasterLayout */ "./components/layouts/MasterLayout.jsx");
/* harmony import */ var _public_static_fonts_Linearicons_Font_demo_files_demo_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/public/static/fonts/Linearicons/Font/demo-files/demo.css */ "./public/static/fonts/Linearicons/Font/demo-files/demo.css");
/* harmony import */ var _public_static_fonts_Linearicons_Font_demo_files_demo_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_static_fonts_Linearicons_Font_demo_files_demo_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_static_fonts_font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/public/static/fonts/font-awesome/css/font-awesome.min.css */ "./public/static/fonts/font-awesome/css/font-awesome.min.css");
/* harmony import */ var _public_static_fonts_font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_static_fonts_font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_static_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/public/static/css/bootstrap.min.css */ "./public/static/css/bootstrap.min.css");
/* harmony import */ var _public_static_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_static_css_slick_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/public/static/css/slick.min.css */ "./public/static/css/slick.min.css");
/* harmony import */ var _public_static_css_slick_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_slick_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _scss_home_default_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/scss/home-default.scss */ "./scss/home-default.scss");
/* harmony import */ var _scss_home_default_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_scss_home_default_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _scss_market_place_1_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/scss/market-place-1.scss */ "./scss/market-place-1.scss");
/* harmony import */ var _scss_market_place_1_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_scss_market_place_1_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _scss_market_place_2_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/scss/market-place-2.scss */ "./scss/market-place-2.scss");
/* harmony import */ var _scss_market_place_2_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_scss_market_place_2_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _scss_market_place_3_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/scss/market-place-3.scss */ "./scss/market-place-3.scss");
/* harmony import */ var _scss_market_place_3_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_scss_market_place_3_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _scss_market_place_4_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/scss/market-place-4.scss */ "./scss/market-place-4.scss");
/* harmony import */ var _scss_market_place_4_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_scss_market_place_4_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _scss_electronic_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/scss/electronic.scss */ "./scss/electronic.scss");
/* harmony import */ var _scss_electronic_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_scss_electronic_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _scss_furniture_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~/scss/furniture.scss */ "./scss/furniture.scss");
/* harmony import */ var _scss_furniture_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_scss_furniture_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _scss_organic_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~/scss/organic.scss */ "./scss/organic.scss");
/* harmony import */ var _scss_organic_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_scss_organic_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _scss_technology_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~/scss/technology.scss */ "./scss/technology.scss");
/* harmony import */ var _scss_technology_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_scss_technology_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _scss_autopart_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~/scss/autopart.scss */ "./scss/autopart.scss");
/* harmony import */ var _scss_autopart_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_scss_autopart_scss__WEBPACK_IMPORTED_MODULE_19__);

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\pages\\_app.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















function App({
  Component,
  pageProps
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setTimeout(function () {
      document.getElementById('__next').classList.add('loaded');
    }, 100);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_cookie__WEBPACK_IMPORTED_MODULE_3__.CookiesProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_MasterLayout__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (_store_store__WEBPACK_IMPORTED_MODULE_2__.wrapper.withRedux(App));

/***/ }),

/***/ "./repositories/ProductRepository.js":
/*!*******************************************!*\
  !*** ./repositories/ProductRepository.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./repositories/Repository.js");


class ProductRepository {
  async getRecords(params) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__.default.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/products?${(0,_Repository__WEBPACK_IMPORTED_MODULE_0__.serializeQuery)(params)}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProducts(params) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__.default.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/products?${(0,_Repository__WEBPACK_IMPORTED_MODULE_0__.serializeQuery)(params)}`).then(response => {
      if (response.data && response.data.length > 0) {
        return response.data;
      } else {
        return null;
      }
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

  async getBrands() {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__.default.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/brands`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductCategories() {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__.default.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/product-categories`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getTotalRecords() {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__.default.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/products/count`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsById(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__.default.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/products/${payload}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByCategory(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__.default.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/product-categories?slug=${payload}`).then(response => {
      if (response.data) {
        if (response.data.length > 0) {
          return response.data[0];
        }
      } else {
        return null;
      }
    }).catch(() => {
      return null;
    });
    return reponse;
  }

  async getProductsByBrand(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__.default.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/brands?slug=${payload}`).then(response => {
      if (response.data) {
        if (response.data.length > 0) {
          return response.data[0];
        }
      } else {
        return null;
      }
    }).catch(() => {
      return null;
    });
    return reponse;
  }

  async getProductsByBrands(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `id_in=${item}`;
      } else {
        query = query + `&id_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__.default.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/brands?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByBrands(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `id_in=${item}`;
      } else {
        query = query + `&id_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__.default.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/brands?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByPriceRange(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__.default.get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/products?${(0,_Repository__WEBPACK_IMPORTED_MODULE_0__.serializeQuery)(payload)}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByIds(payload) {
    const endPoint = `${_Repository__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/products?${payload}`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__.default.get(endPoint).then(response => {
      if (response.data && response.data.length > 0) {
        return response.data;
      } else {
        return null;
      }
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new ProductRepository());

/***/ }),

/***/ "./repositories/Repository.js":
/*!************************************!*\
  !*** ./repositories/Repository.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "basePostUrl": function() { return /* binding */ basePostUrl; },
/* harmony export */   "baseStoreURL": function() { return /* binding */ baseStoreURL; },
/* harmony export */   "customHeaders": function() { return /* binding */ customHeaders; },
/* harmony export */   "baseUrl": function() { return /* binding */ baseUrl; },
/* harmony export */   "serializeQuery": function() { return /* binding */ serializeQuery; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseDomain = 'https://beta.apinouthemes.com'; // API for products

const basePostUrl = 'https://beta.apinouthemes.com'; // API for post

const baseStoreURL = 'https://beta.apinouthemes.com'; // API for vendor(store)

const customHeaders = {
  Accept: 'application/json'
};
const baseUrl = `${baseDomain}`;
/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseUrl,
  headers: customHeaders
}));
const serializeQuery = query => {
  return Object.keys(query).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`).join('&');
};

/***/ }),

/***/ "./store/app/action.js":
/*!*****************************!*\
  !*** ./store/app/action.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionTypes": function() { return /* binding */ actionTypes; },
/* harmony export */   "switchDemoPanel": function() { return /* binding */ switchDemoPanel; },
/* harmony export */   "switchDemoPanelSuccess": function() { return /* binding */ switchDemoPanelSuccess; }
/* harmony export */ });
const actionTypes = {
  SWITCH_DEMO_PANEL: 'SWITCH_DEMO_PANEL',
  SWITCH_DEMO_PANEL_SUCCESS: 'SWITCH_DEMO_PANEL_SUCCESS'
};
function switchDemoPanel(payload) {
  return {
    type: actionTypes.SWITCH_DEMO_PANEL,
    payload
  };
}
function switchDemoPanelSuccess(payload) {
  return {
    type: actionTypes.SWITCH_DEMO_PANEL_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "./store/app/reducer.js":
/*!******************************!*\
  !*** ./store/app/reducer.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initState": function() { return /* binding */ initState; }
/* harmony export */ });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/app/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  isShowDemoPanel: false
};

function reducer(state = initState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SWITCH_DEMO_PANEL_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        isShowDemoPanel: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/app/saga.js":
/*!***************************!*\
  !*** ./store/app/saga.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rootSaga; }
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./store/app/action.js");



function* switchDemoPanel({
  payload
}) {
  try {
    console.log(payload.payload);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_1__.switchDemoPanelSuccess)(payload));
  } catch (err) {
    console.log(err);
  }
}

function* rootSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_action__WEBPACK_IMPORTED_MODULE_1__.actionTypes.SWITCH_DEMO_PANEL, switchDemoPanel)]);
}

/***/ }),

/***/ "./store/auth/action.js":
/*!******************************!*\
  !*** ./store/auth/action.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionTypes": function() { return /* binding */ actionTypes; },
/* harmony export */   "login": function() { return /* binding */ login; },
/* harmony export */   "loginSuccess": function() { return /* binding */ loginSuccess; },
/* harmony export */   "logOut": function() { return /* binding */ logOut; },
/* harmony export */   "logOutSuccess": function() { return /* binding */ logOutSuccess; }
/* harmony export */ });
const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION'
};
function login() {
  return {
    type: actionTypes.LOGIN_REQUEST
  };
}
function loginSuccess() {
  return {
    type: actionTypes.LOGIN_SUCCESS
  };
}
function logOut() {
  return {
    type: actionTypes.LOGOUT
  };
}
function logOutSuccess() {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  };
}

/***/ }),

/***/ "./store/auth/reducer.js":
/*!*******************************!*\
  !*** ./store/auth/reducer.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initState": function() { return /* binding */ initState; }
/* harmony export */ });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/auth/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  isLoggedIn: false
};

function reducer(state = initState, actions) {
  switch (actions.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__.actionTypes.LOGIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        isLoggedIn: true
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__.actionTypes.LOGOUT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        isLoggedIn: false
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/auth/saga.js":
/*!****************************!*\
  !*** ./store/auth/saga.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rootSaga; }
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./store/auth/action.js");




const modalSuccess = type => {
  antd__WEBPACK_IMPORTED_MODULE_1__.notification[type]({
    message: 'Wellcome back',
    description: 'You are login successful!'
  });
};

const modalWarning = type => {
  antd__WEBPACK_IMPORTED_MODULE_1__.notification[type]({
    message: 'Good bye!',
    description: 'Your account has been logged out!'
  });
};

function* loginSaga() {
  try {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_2__.loginSuccess)());
    modalSuccess('success');
  } catch (err) {
    console.log(err);
  }
}

function* logOutSaga() {
  try {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_2__.logOutSuccess)());
    modalWarning('warning');
  } catch (err) {
    console.log(err);
  }
}

function* rootSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_action__WEBPACK_IMPORTED_MODULE_2__.actionTypes.LOGIN_REQUEST, loginSaga)]);
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_action__WEBPACK_IMPORTED_MODULE_2__.actionTypes.LOGOUT, logOutSaga)]);
}

/***/ }),

/***/ "./store/ecomerce/action.js":
/*!**********************************!*\
  !*** ./store/ecomerce/action.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionTypes": function() { return /* binding */ actionTypes; },
/* harmony export */   "setWishlistTtems": function() { return /* binding */ setWishlistTtems; },
/* harmony export */   "setWishlistTtemsSuccess": function() { return /* binding */ setWishlistTtemsSuccess; },
/* harmony export */   "setCartItems": function() { return /* binding */ setCartItems; },
/* harmony export */   "setCartItemsSuccess": function() { return /* binding */ setCartItemsSuccess; },
/* harmony export */   "setCompareItems": function() { return /* binding */ setCompareItems; },
/* harmony export */   "setCompareItemsSuccess": function() { return /* binding */ setCompareItemsSuccess; }
/* harmony export */ });
const actionTypes = {
  // new
  SET_WISHLIST_ITEMS: 'SET_WISHLIST_ITEMS',
  SET_WISHLIST_ITEMS_SUCCESS: 'SET_WISHLIST_ITEMS_SUCCESS',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_CART_ITEMS_SUCCESS: 'SET_CART_ITEMS_SUCCESS',
  SET_COMPARE_ITEMS: 'SET_COMPARE_ITEMS',
  SET_COMPARE_ITEMS_SUCCESS: 'SET_COMPARE_ITEMS_SUCCESS'
}; // new

function setWishlistTtems(payload) {
  return {
    type: actionTypes.SET_WISHLIST_ITEMS,
    payload
  };
}
function setWishlistTtemsSuccess(payload) {
  return {
    type: actionTypes.SET_WISHLIST_ITEMS_SUCCESS,
    payload
  };
}
function setCartItems(payload) {
  return {
    type: actionTypes.SET_CART_ITEMS,
    payload
  };
}
function setCartItemsSuccess(payload) {
  return {
    type: actionTypes.SET_CART_ITEMS_SUCCESS,
    payload
  };
}
function setCompareItems(payload) {
  return {
    type: actionTypes.SET_COMPARE_ITEMS,
    payload
  };
}
function setCompareItemsSuccess(payload) {
  return {
    type: actionTypes.SET_COMPARE_ITEMS_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "./store/ecomerce/reducer.js":
/*!***********************************!*\
  !*** ./store/ecomerce/reducer.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initalState": function() { return /* binding */ initalState; }
/* harmony export */ });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/ecomerce/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initalState = {
  wishlistItems: [],
  compareItems: [],
  cartItems: []
};

function reducer(state = initalState, action) {
  switch (action.type) {
    // new
    case _action__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_WISHLIST_ITEMS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        wishlistItems: action.payload
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_CART_ITEMS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        cartItems: action.payload
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_COMPARE_ITEMS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        compareItems: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/ecomerce/saga.js":
/*!********************************!*\
  !*** ./store/ecomerce/saga.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rootSaga; }
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./store/ecomerce/action.js");


 // new

function* getWishlistItems({
  payload
}) {
  try {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_1__.setWishlistTtemsSuccess)(payload));
  } catch (err) {
    console.log(err);
  }
}

function* getCartItems({
  payload
}) {
  try {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_1__.setCartItemsSuccess)(payload));
  } catch (err) {
    console.log(err);
  }
}

function* getCompareItems({
  payload
}) {
  try {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_1__.setCompareItemsSuccess)(payload));
  } catch (err) {
    console.log(err);
  }
}

function* rootSaga() {
  // new
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_action__WEBPACK_IMPORTED_MODULE_1__.actionTypes.SET_WISHLIST_ITEMS, getWishlistItems)]);
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_action__WEBPACK_IMPORTED_MODULE_1__.actionTypes.SET_CART_ITEMS, getCartItems)]);
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_action__WEBPACK_IMPORTED_MODULE_1__.actionTypes.SET_COMPARE_ITEMS, getCompareItems)]);
}

/***/ }),

/***/ "./store/rootReducer.js":
/*!******************************!*\
  !*** ./store/rootReducer.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/reducer */ "./store/auth/reducer.js");
/* harmony import */ var _setting_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting/reducer */ "./store/setting/reducer.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/reducer */ "./store/app/reducer.js");
/* harmony import */ var _ecomerce_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ecomerce/reducer */ "./store/ecomerce/reducer.js");





/* harmony default export */ __webpack_exports__["default"] = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  auth: _auth_reducer__WEBPACK_IMPORTED_MODULE_1__.default,
  setting: _setting_reducer__WEBPACK_IMPORTED_MODULE_2__.default,
  app: _app_reducer__WEBPACK_IMPORTED_MODULE_3__.default,
  ecomerce: _ecomerce_reducer__WEBPACK_IMPORTED_MODULE_4__.default
}));

/***/ }),

/***/ "./store/rootSaga.js":
/*!***************************!*\
  !*** ./store/rootSaga.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rootSaga; }
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setting_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting/saga */ "./store/setting/saga.js");
/* harmony import */ var _auth_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/saga */ "./store/auth/saga.js");
/* harmony import */ var _app_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/saga */ "./store/app/saga.js");
/* harmony import */ var _ecomerce_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ecomerce/saga */ "./store/ecomerce/saga.js");





function* rootSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,_auth_saga__WEBPACK_IMPORTED_MODULE_2__.default)(), (0,_setting_saga__WEBPACK_IMPORTED_MODULE_1__.default)(), (0,_auth_saga__WEBPACK_IMPORTED_MODULE_2__.default)(), (0,_app_saga__WEBPACK_IMPORTED_MODULE_3__.default)(), (0,_ecomerce_saga__WEBPACK_IMPORTED_MODULE_4__.default)()]);
}

/***/ }),

/***/ "./store/setting/action.js":
/*!*********************************!*\
  !*** ./store/setting/action.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionTypes": function() { return /* binding */ actionTypes; },
/* harmony export */   "changeCurrency": function() { return /* binding */ changeCurrency; },
/* harmony export */   "changeCurrencySuccess": function() { return /* binding */ changeCurrencySuccess; }
/* harmony export */ });
const actionTypes = {
  CHANGE_CURRENCY: 'CHANGE_CURRENCY',
  CHANGE_CURRENCY_SUCCESS: 'CHANGE_CURRENCY_SUCCESS'
};
function changeCurrency(currency) {
  return {
    type: actionTypes.CHANGE_CURRENCY,
    currency
  };
}
function changeCurrencySuccess(currency) {
  return {
    type: actionTypes.CHANGE_CURRENCY_SUCCESS,
    currency
  };
}

/***/ }),

/***/ "./store/setting/reducer.js":
/*!**********************************!*\
  !*** ./store/setting/reducer.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; }
/* harmony export */ });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/setting/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  currency: {
    symbol: '$',
    text: 'USD'
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__.actionTypes.CHANGE_CURRENCY_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        currency: action.currency
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/setting/saga.js":
/*!*******************************!*\
  !*** ./store/setting/saga.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rootSaga; }
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./store/setting/action.js");



function* changeCurrencySaga({
  currency
}) {
  try {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_action__WEBPACK_IMPORTED_MODULE_1__.changeCurrencySuccess)(currency));
  } catch (err) {
    console.error(err);
  }
}

function* rootSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeEvery)(_action__WEBPACK_IMPORTED_MODULE_1__.actionTypes.CHANGE_CURRENCY, changeCurrencySaga)]);
}

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeStore": function() { return /* binding */ makeStore; },
/* harmony export */   "wrapper": function() { return /* binding */ wrapper; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/store/rootReducer */ "./store/rootReducer.js");
/* harmony import */ var _store_rootSaga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/store/rootSaga */ "./store/rootSaga.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);






const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware));
  }

  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware);
};

const makeStore = context => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_store_rootReducer__WEBPACK_IMPORTED_MODULE_2__.default, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(_store_rootSaga__WEBPACK_IMPORTED_MODULE_3__.default);
  return store;
};
const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__.createWrapper)(makeStore, {
  debug: false
});

/***/ }),

/***/ "./utilities/ecomerce-helpers.js":
/*!***************************************!*\
  !*** ./utilities/ecomerce-helpers.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCartItemsFromCookies": function() { return /* binding */ getCartItemsFromCookies; },
/* harmony export */   "updateCartToCookies": function() { return /* binding */ updateCartToCookies; },
/* harmony export */   "addItemToCartHelper": function() { return /* binding */ addItemToCartHelper; },
/* harmony export */   "increaseQtyCartItemHelper": function() { return /* binding */ increaseQtyCartItemHelper; },
/* harmony export */   "decreaseQtyCartItemHelper": function() { return /* binding */ decreaseQtyCartItemHelper; },
/* harmony export */   "removeCartItemHelper": function() { return /* binding */ removeCartItemHelper; },
/* harmony export */   "calculateAmount": function() { return /* binding */ calculateAmount; },
/* harmony export */   "calculateCartQuantity": function() { return /* binding */ calculateCartQuantity; },
/* harmony export */   "caculateArrayQuantity": function() { return /* binding */ caculateArrayQuantity; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/repositories/ProductRepository */ "./repositories/ProductRepository.js");
/*
 * React template helpers
 * Author: Nouthemes
 * Developed: diaryforlife
 * */



function getCartItemsFromCookies() {
  const cartItems = js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('cart');

  if (cartItems) {
    return JSON.parse(cartItems);
  } else {
    return null;
  }
}
function updateCartToCookies(payload) {
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default().set('cart', payload, {
    path: '/',
    expires: 24 * 7
  });
}
function addItemToCartHelper(product) {
  let cart;
  let cookieCart = getCartItemsFromCookies();

  if (cookieCart) {
    cart = cookieCart;
    const existItem = cart.items.find(item => item.id === product.id);

    if (existItem) {
      existItem.quantity += product.quantity;
    } else {
      /* if (!product.quantity) {
          product.quantity = 1;
      }*/
      cart.items.push(product);
    }
  } else {
    cart = {
      items: []
    };
    cart.items.push(product);
  }

  updateCartToCookies(cart);
  return cart;
}
function increaseQtyCartItemHelper(product) {
  let cart;
  let cookieCart = getCartItemsFromCookies();

  if (cookieCart) {
    cart = cookieCart;
    const selectedItem = cart.items.find(item => item.id === product.id);

    if (selectedItem) {
      selectedItem.quantity = selectedItem.quantity + 1;
    }

    updateCartToCookies(cart);
    return cart;
  }
}
function decreaseQtyCartItemHelper(product) {
  let cart;
  let cookieCart = getCartItemsFromCookies();

  if (cookieCart) {
    cart = cookieCart;
    const selectedItem = cart.items.find(item => item.id === product.id);

    if (selectedItem) {
      selectedItem.quantity = selectedItem.quantity - 1;
    }

    updateCartToCookies(cart);
    return cart;
  }
}
function removeCartItemHelper(product) {
  let cart;
  let cookieCart = getCartItemsFromCookies();

  if (cookieCart) {
    cart = cookieCart;
    const index = cart.items.findIndex(item => item.id === product.id);
    cart.items.splice(index, 1);
    updateCartToCookies(cart);
    return cart;
  }
} // new

function calculateAmount(obj) {
  return Object.values(obj).reduce((acc, {
    quantity,
    price
  }) => acc + quantity * price, 0).toFixed(2);
}
function calculateCartQuantity(obj) {
  return Object.values(obj).reduce((acc, {
    quantity
  }) => acc + quantity, 0);
}
function caculateArrayQuantity(obj) {
  return Object.values(obj).reduce(acc => acc + 1, 0);
}

/***/ }),

/***/ "./utilities/product-helper.js":
/*!*************************************!*\
  !*** ./utilities/product-helper.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatCurrency": function() { return /* binding */ formatCurrency; },
/* harmony export */   "getColletionBySlug": function() { return /* binding */ getColletionBySlug; },
/* harmony export */   "getItemBySlug": function() { return /* binding */ getItemBySlug; },
/* harmony export */   "convertSlugsQueryString": function() { return /* binding */ convertSlugsQueryString; },
/* harmony export */   "StrapiProductPriceExpanded": function() { return /* binding */ StrapiProductPriceExpanded; },
/* harmony export */   "StrapiProductThumbnail": function() { return /* binding */ StrapiProductThumbnail; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lazyload */ "react-lazyload");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _repositories_Repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/repositories/Repository */ "./repositories/Repository.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\utilities\\product-helper.js";




function formatCurrency(num) {
  if (num !== undefined) {
    return parseFloat(num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } else {}
}
function getColletionBySlug(collections, slug) {
  if (collections.length > 0) {
    const result = collections.find(item => item.slug === slug.toString());

    if (result !== undefined) {
      return result.products;
    } else {
      return [];
    }
  } else {
    return [];
  }
}
function getItemBySlug(banners, slug) {
  if (banners.length > 0) {
    const banner = banners.find(item => item.slug === slug.toString());

    if (banner !== undefined) {
      return banner;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function convertSlugsQueryString(payload) {
  let query = '';

  if (payload.length > 0) {
    payload.forEach(item => {
      if (query === '') {
        query = `slug_in=${item}`;
      } else {
        query = query + `&slug_in=${item}`;
      }
    });
  }

  return query;
}
function StrapiProductPriceExpanded(product) {
  let view;

  if (product.is_sale === true) {
    view = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "ps-product__price sale",
      children: ["$", formatCurrency(product.price), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("del", {
        className: "ml-2",
        children: ["$", formatCurrency(product.sale_price)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
        children: "18% off"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, this);
  } else {
    view = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "ps-product__price",
      children: ["$", formatCurrency(product.price)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, this);
  }

  return view;
}
function StrapiProductThumbnail(product) {
  let view;

  if (product.thumbnail) {
    view = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: "/product/[pid]",
      as: `/product/${product.id}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_lazyload__WEBPACK_IMPORTED_MODULE_2___default()), {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: `${_repositories_Repository__WEBPACK_IMPORTED_MODULE_3__.baseUrl}${product.thumbnail.url}`,
            alt: product.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, this);
  } else {
    view = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: "/product/[pid]",
      as: `/product/${product.id}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_lazyload__WEBPACK_IMPORTED_MODULE_2___default()), {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/static/img/not-found.jpg",
            alt: "martfury"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, this);
  }

  return view;
}

/***/ }),

/***/ "./public/static/css/bootstrap.min.css":
/*!*********************************************!*\
  !*** ./public/static/css/bootstrap.min.css ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./public/static/css/slick.min.css":
/*!*****************************************!*\
  !*** ./public/static/css/slick.min.css ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "./public/static/fonts/Linearicons/Font/demo-files/demo.css":
/*!******************************************************************!*\
  !*** ./public/static/fonts/Linearicons/Font/demo-files/demo.css ***!
  \******************************************************************/
/***/ (function() {



/***/ }),

/***/ "./public/static/fonts/font-awesome/css/font-awesome.min.css":
/*!*******************************************************************!*\
  !*** ./public/static/fonts/font-awesome/css/font-awesome.min.css ***!
  \*******************************************************************/
/***/ (function() {



/***/ }),

/***/ "./scss/autopart.scss":
/*!****************************!*\
  !*** ./scss/autopart.scss ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "./scss/electronic.scss":
/*!******************************!*\
  !*** ./scss/electronic.scss ***!
  \******************************/
/***/ (function() {



/***/ }),

/***/ "./scss/furniture.scss":
/*!*****************************!*\
  !*** ./scss/furniture.scss ***!
  \*****************************/
/***/ (function() {



/***/ }),

/***/ "./scss/home-default.scss":
/*!********************************!*\
  !*** ./scss/home-default.scss ***!
  \********************************/
/***/ (function() {



/***/ }),

/***/ "./scss/market-place-1.scss":
/*!**********************************!*\
  !*** ./scss/market-place-1.scss ***!
  \**********************************/
/***/ (function() {



/***/ }),

/***/ "./scss/market-place-2.scss":
/*!**********************************!*\
  !*** ./scss/market-place-2.scss ***!
  \**********************************/
/***/ (function() {



/***/ }),

/***/ "./scss/market-place-3.scss":
/*!**********************************!*\
  !*** ./scss/market-place-3.scss ***!
  \**********************************/
/***/ (function() {



/***/ }),

/***/ "./scss/market-place-4.scss":
/*!**********************************!*\
  !*** ./scss/market-place-4.scss ***!
  \**********************************/
/***/ (function() {



/***/ }),

/***/ "./scss/organic.scss":
/*!***************************!*\
  !*** ./scss/organic.scss ***!
  \***************************/
/***/ (function() {



/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ (function() {



/***/ }),

/***/ "./scss/technology.scss":
/*!******************************!*\
  !*** ./scss/technology.scss ***!
  \******************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./public/static/data/menu.json":
/*!**************************************!*\
  !*** ./public/static/data/menu.json ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"menuPrimary":{"menu_1":[{"text":"Home","url":"/","extraClass":"menu-item-has-children","subClass":"sub-menu","subMenu":[{"text":"Marketplace Full Width","url":"/"},{"text":"Home Auto Parts","url":"/home/auto-part"},{"text":"Home Technology","url":"/home/technology"},{"text":"Home Organic","url":"/home/organic"},{"text":"Home Marketplace V1","url":"/home/market-place"},{"text":"Home Marketplace V2","url":"/home/market-place-2"},{"text":"Home Marketplace V3","url":"/home/market-place-3"},{"text":"Home Marketplace V4","url":"/home/market-place-4"},{"text":"Home Electronic","url":"/home/electronic"},{"text":"Home Furniture","url":"/home/furniture"}]},{"text":"Shop","url":"/shop","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu","mega":"true","megaContent":[{"heading":"Catalog Pages","megaItems":[{"text":"Shop Default","url":"/shop"},{"text":"Shop Fullwidth","url":"/shop/shop-fullwidth"},{"text":"Shop Categories","url":"/shop/shop-categories"},{"text":"Shop Sidebar","url":"/shop/shop-sidebar"},{"text":"Shop Without Banner","url":"/shop/shop-sidebar-without-banner"},{"text":"Shop Carousel","url":"/shop/shop-carousel"}]},{"heading":"Product Layout","megaItems":[{"text":"Default","url":"/product/3"},{"text":"Extended","url":"/product/extended/7"},{"text":"Full Content","url":"/product/full-content/7"},{"text":"Boxed","url":"/product/boxed/7"},{"text":"Sidebar","url":"/product/sidebar/7"}]},{"heading":"Product Types","megaItems":[{"text":"Simple","url":"/product/3"},{"text":"Image swatches","url":"/product/image-swatches/11"},{"text":"Countdown","url":"/product/countdown/10"},{"text":"Affiliate","url":"/product/affiliate/7"},{"text":"On sale","url":"/product/on-sale/7"},{"text":"Grouped","url":"/product/groupped/22"},{"text":"Out Of Stock","url":"/product/out-of-stock/7"}]},{"heading":"Ecomerce Pages","megaItems":[{"text":"Shopping Cart","url":"/account/shopping-cart"},{"text":"Checkout","url":"/account/checkout"},{"text":"Whishlist","url":"/account/wishlist"},{"text":"Compare","url":"/account/compare"},{"text":"Order Tracking","url":"/account/order-tracking"},{"text":"My Account","url":"/account/login"},{"text":"Login / Register","url":"/account/login"}]}]},{"text":"Pages","url":"","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu","mega":"true","megaContent":[{"heading":"Basic Page","megaItems":[{"text":"About Us","url":"/page/about-us"},{"text":"Contact","url":"/page/contact-us"},{"text":"Faqs","url":"/page/faqs"},{"text":"404 Page","url":"/page/page-404"}]},{"heading":"Vendor Pages","megaItems":[{"text":"Become a Vendor","url":"/vendor/become-a-vendor"},{"text":"Vendor Store","url":"/vendor/vendor-store"},{"text":"Store List","url":"/stores"}]}]},{"text":"Blogs","url":"/blog","current":"shop","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu","mega":"true","megaContent":[{"heading":"Blog Layout","megaItems":[{"text":"Grid","url":"/blog"},{"text":"Small Thumb","url":"/blog/blog-small-thumbnail"},{"text":"Left Sidebar","url":"/blog/blog-left-sidebar"},{"text":"Right Sidebar","url":"/blog/blog-right-sidebar"}]},{"heading":"Single Blog","megaItems":[{"text":"Single 1","url":"/post/default"},{"text":"Single 2","url":"/post/detail-2"},{"text":"Single 3","url":"/post/detail-3"}]}]}]},"product_categories":[{"icon":"icon-star","text":"Hot Promotions","url":"/shop"},{"icon":"icon-laundry","text":"Consumer Electronic","url":"/shop","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu","mega":true,"megaContent":[{"heading":"Electronic","megaItems":[{"text":"Home Audio & Theathers","url":"/shop"},{"text":"TV & Videos","url":"/shop"},{"text":"Camera, Photos & Videos","url":"/shop"},{"text":"Cellphones & Accessories","url":"/shop"},{"text":"Headphones","url":"/shop"},{"text":"Videosgames","url":"/shop"},{"text":"Wireless Speakers","url":"/shop"},{"text":"Office Electronic","url":"/shop"}]},{"heading":"Accessories & Parts","megaItems":[{"text":"Digital Cables","url":"/shop"},{"text":"Audio & Video Cables","url":"/shop"},{"text":"Batteries","url":"/shop"}]}]},{"icon":"icon-shirt","text":"Clothing & Apparel","url":"/shop"},{"icon":"icon-lampshade","text":"Home, Garden & Kitchen","url":"/shop"},{"icon":"icon-heart-pulse","text":"Health & Beauty","url":"/shop"},{"icon":"icon-diamond2","text":"Yewelry & Watches","url":"/shop"},{"icon":"icon-desktop","text":"Computer & Technology","url":"/shop","extraClass":"menu-item-has-children has-mega-menu","subClass":"sub-menu","megaContent":[{"heading":"Computer & Technologies","megaItems":[{"text":"Computer & Tablets","url":"/shop"},{"text":"Laptop","url":"/shop"},{"text":"Monitors","url":"/shop"},{"text":"Networking","url":"/shop"},{"text":"Drive & Storages","url":"/shop"},{"text":"Computer Components","url":"/shop"},{"text":"Security & Protection","url":"/shop"},{"text":"Gaming Laptop","url":"/shop"},{"text":"Accessories","url":"/shop"}]}]},{"icon":"icon-baby-bottle","text":"Babies & Moms","url":"/shop"},{"icon":"icon-baseball","text":"Sport & Outdoor","url":"/shop"},{"icon":"icon-smartphone","text":"Phones & Accessories","url":"/shop"},{"icon":"icon-book2","text":"Books & Office","url":"/shop"},{"icon":"icon-car-siren","text":"Cars & Motocycles","url":"/shop"},{"icon":"icon-wrench","text":"Home Improments","url":"/shop"},{"icon":"icon-tag","text":"Vouchers & Services","url":"/shop"}]}');

/***/ }),

/***/ "./public/static/data/static-categories.json":
/*!***************************************************!*\
  !*** ./public/static/data/static-categories.json ***!
  \***************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"id":1,"name":"Clothing & Apparel","slug":"clothing-and-parel","description":null,"created_at":"2020-03-14T10:24:42.894Z","updated_at":"2020-04-17T08:41:15.412Z","products":[{"id":4,"title":"Herschel Leather Duffle Bag In Brown Color","is_featured":false,"is_hot":false,"price":125.3,"sale_price":null,"vendor":"Go Pro","review":4,"is_out_of_stock":false,"depot":50,"inventory":70,"is_active":true,"is_sale":false,"created_at":"2020-03-15T05:58:54.229Z","updated_at":"2020-03-15T05:58:54.229Z","variants":[],"images":[{"id":14,"name":"4a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"ff63a2eb476e45b1bfef05ee79115018","ext":".jpg","mime":"image/jpeg","size":74.96,"url":"/uploads/ff63a2eb476e45b1bfef05ee79115018.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T05:58:54.276Z","updated_at":"2020-03-15T05:58:54.276Z"},{"id":15,"name":"4b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"9b7e71c6299c456baceb165ec185687d","ext":".jpg","mime":"image/jpeg","size":76.68,"url":"/uploads/9b7e71c6299c456baceb165ec185687d.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T05:58:54.287Z","updated_at":"2020-03-15T05:58:54.287Z"},{"id":16,"name":"4c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"11591497e4ac4779981252032c8b0381","ext":".jpg","mime":"image/jpeg","size":92.28,"url":"/uploads/11591497e4ac4779981252032c8b0381.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T05:58:54.300Z","updated_at":"2020-03-15T05:58:54.300Z"},{"id":17,"name":"4d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"bbc7b7c8745140e19653bc109965f9f4","ext":".jpg","mime":"image/jpeg","size":26.43,"url":"/uploads/bbc7b7c8745140e19653bc109965f9f4.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T05:58:54.311Z","updated_at":"2020-03-15T05:58:54.311Z"}],"thumbnail":{"id":13,"name":"4a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"b5deb586612e4c808272da9913b8109b","ext":".jpg","mime":"image/jpeg","size":74.96,"url":"/uploads/b5deb586612e4c808272da9913b8109b.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T05:58:54.262Z","updated_at":"2020-03-15T05:58:54.262Z"}},{"id":9,"title":"Unero Military Classical Backpack","is_featured":false,"is_hot":false,"price":42.2,"sale_price":35.89,"vendor":"Young shop","review":3,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":true,"created_at":"2020-03-15T06:18:20.414Z","updated_at":"2020-03-15T06:18:20.414Z","variants":[],"images":[{"id":37,"name":"9a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"13fc9fc391d64652a0139f54cdac5c2b","ext":".jpg","mime":"image/jpeg","size":43.02,"url":"/uploads/13fc9fc391d64652a0139f54cdac5c2b.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:18:20.533Z","updated_at":"2020-03-15T06:18:20.533Z"},{"id":38,"name":"9b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"3d3ef24143bc473eb75a5721228e1f6d","ext":".jpg","mime":"image/jpeg","size":50.61,"url":"/uploads/3d3ef24143bc473eb75a5721228e1f6d.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:18:20.573Z","updated_at":"2020-03-15T06:18:20.573Z"},{"id":39,"name":"9c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"7420bed7be764af19c26f762296ff27d","ext":".jpg","mime":"image/jpeg","size":44.06,"url":"/uploads/7420bed7be764af19c26f762296ff27d.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:18:20.596Z","updated_at":"2020-03-15T06:18:20.596Z"},{"id":40,"name":"9d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"10c4fdf0f6124ab79e5ab46dc2c52e38","ext":".jpg","mime":"image/jpeg","size":47.73,"url":"/uploads/10c4fdf0f6124ab79e5ab46dc2c52e38.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:18:20.607Z","updated_at":"2020-03-15T06:18:20.607Z"}],"thumbnail":{"id":36,"name":"8.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"1e1f0f78e33d4ce7828d21465e84da7d","ext":".jpg","mime":"image/jpeg","size":8.13,"url":"/uploads/1e1f0f78e33d4ce7828d21465e84da7d.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:18:20.459Z","updated_at":"2020-03-15T06:18:20.459Z"}},{"id":10,"title":"Rayban Rounded Sunglass Brown Color","is_featured":false,"is_hot":false,"price":35.89,"sale_price":null,"vendor":"Young shop","review":5,"is_out_of_stock":false,"depot":50,"inventory":60,"is_active":true,"is_sale":false,"created_at":"2020-03-15T06:20:39.867Z","updated_at":"2020-03-15T06:20:39.867Z","variants":[],"images":[{"id":42,"name":"10a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"0208616a8daa44cbb20f12eaebf8de53","ext":".jpg","mime":"image/jpeg","size":21.67,"url":"/uploads/0208616a8daa44cbb20f12eaebf8de53.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:20:39.908Z","updated_at":"2020-03-15T06:20:39.908Z"},{"id":43,"name":"10b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"cba8c25fcf0d41d1aac41f05d8f7ad8e","ext":".jpg","mime":"image/jpeg","size":20.16,"url":"/uploads/cba8c25fcf0d41d1aac41f05d8f7ad8e.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:20:39.925Z","updated_at":"2020-03-15T06:20:39.925Z"},{"id":44,"name":"10c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"f8f22b0f8be04b559439dd7e7a4b9631","ext":".jpg","mime":"image/jpeg","size":14.77,"url":"/uploads/f8f22b0f8be04b559439dd7e7a4b9631.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:20:39.935Z","updated_at":"2020-03-15T06:20:39.935Z"}],"thumbnail":{"id":41,"name":"9.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"0f04c128bb2945608bed459cdff45b2d","ext":".jpg","mime":"image/jpeg","size":4.7,"url":"/uploads/0f04c128bb2945608bed459cdff45b2d.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:20:39.893Z","updated_at":"2020-03-15T06:20:39.893Z"}},{"id":11,"title":"Sleeve Linen Blend Caro Pane Shirt","is_featured":false,"is_hot":false,"price":29.39,"sale_price":null,"vendor":"Go Pro","review":4,"is_out_of_stock":false,"depot":65,"inventory":80,"is_active":true,"is_sale":false,"created_at":"2020-03-15T06:22:44.237Z","updated_at":"2020-03-15T06:22:44.237Z","variants":[],"images":[{"id":46,"name":"11a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"ab27be4989234d5abcfb3f4ecc1af045","ext":".jpg","mime":"image/jpeg","size":41.05,"url":"/uploads/ab27be4989234d5abcfb3f4ecc1af045.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:22:44.291Z","updated_at":"2020-03-15T06:22:44.291Z"},{"id":47,"name":"11b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"fd27bd22be044fc89915d96cc85184a2","ext":".jpg","mime":"image/jpeg","size":90.14,"url":"/uploads/fd27bd22be044fc89915d96cc85184a2.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:22:44.303Z","updated_at":"2020-03-15T06:22:44.303Z"},{"id":48,"name":"11c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"d9860fd4f75847b08533072d216520a7","ext":".jpg","mime":"image/jpeg","size":20.98,"url":"/uploads/d9860fd4f75847b08533072d216520a7.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:22:44.312Z","updated_at":"2020-03-15T06:22:44.312Z"},{"id":49,"name":"11d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"d25af4f6df2448579caf80399f625ec7","ext":".jpg","mime":"image/jpeg","size":15.51,"url":"/uploads/d25af4f6df2448579caf80399f625ec7.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:22:44.321Z","updated_at":"2020-03-15T06:22:44.321Z"}],"thumbnail":{"id":45,"name":"10.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"77ac135e297b416388e2e10be368a898","ext":".jpg","mime":"image/jpeg","size":13.67,"url":"/uploads/77ac135e297b416388e2e10be368a898.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:22:44.278Z","updated_at":"2020-03-15T06:22:44.278Z"}},{"id":12,"title":"Men’s Sports Runnning Swim Board Shorts","is_featured":false,"is_hot":false,"price":13.43,"sale_price":null,"vendor":"Robert\'s Store","review":5,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":false,"created_at":"2020-03-15T06:24:30.658Z","updated_at":"2020-03-18T12:53:44.500Z","variants":[],"images":[{"id":51,"name":"12a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"fefc8854e39940d49f828c8035b20f76","ext":".jpg","mime":"image/jpeg","size":108.16,"url":"/uploads/fefc8854e39940d49f828c8035b20f76.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:24:30.700Z","updated_at":"2020-03-15T06:24:30.700Z"},{"id":52,"name":"12b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"bf24fcb93d8d46e894ddb47dd26dc335","ext":".jpg","mime":"image/jpeg","size":38.91,"url":"/uploads/bf24fcb93d8d46e894ddb47dd26dc335.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:24:30.716Z","updated_at":"2020-03-15T06:24:30.716Z"},{"id":53,"name":"12c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"f578cf9bb1d24f3c8c898e09796ae503","ext":".jpg","mime":"image/jpeg","size":38.08,"url":"/uploads/f578cf9bb1d24f3c8c898e09796ae503.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:24:30.725Z","updated_at":"2020-03-15T06:24:30.725Z"}],"thumbnail":{"id":50,"name":"11.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"283e9ff36993434c9d228a5f7681e330","ext":".jpg","mime":"image/jpeg","size":19.09,"url":"/uploads/283e9ff36993434c9d228a5f7681e330.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:24:30.681Z","updated_at":"2020-03-15T06:24:30.681Z"}},{"id":13,"title":"Paul’s Smith Sneaker InWhite Color","is_featured":false,"is_hot":false,"price":75.44,"sale_price":null,"vendor":"Global Office","review":4,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":false,"created_at":"2020-03-15T06:32:31.147Z","updated_at":"2020-03-18T12:54:00.174Z","variants":[],"images":[{"id":55,"name":"13a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"58092188da0c46858b8273fe7cfb16c1","ext":".jpg","mime":"image/jpeg","size":33.4,"url":"/uploads/58092188da0c46858b8273fe7cfb16c1.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:32:31.197Z","updated_at":"2020-03-15T06:32:31.197Z"},{"id":56,"name":"13b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"db91360ae9ac420c9172c2b797540c3f","ext":".jpg","mime":"image/jpeg","size":10,"url":"/uploads/db91360ae9ac420c9172c2b797540c3f.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:32:31.215Z","updated_at":"2020-03-15T06:32:31.215Z"},{"id":57,"name":"13c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"fd95618bdbc64b9fa835f03d4c992b63","ext":".jpg","mime":"image/jpeg","size":23.2,"url":"/uploads/fd95618bdbc64b9fa835f03d4c992b63.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:32:31.223Z","updated_at":"2020-03-15T06:32:31.223Z"},{"id":58,"name":"13d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"974d2403fc62442db39bb155902fd6a0","ext":".jpg","mime":"image/jpeg","size":13.81,"url":"/uploads/974d2403fc62442db39bb155902fd6a0.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:32:31.232Z","updated_at":"2020-03-15T06:32:31.232Z"}],"thumbnail":{"id":54,"name":"12.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"d903b17699d842f4ab1327eff18f04d0","ext":".jpg","mime":"image/jpeg","size":4.9,"url":"/uploads/d903b17699d842f4ab1327eff18f04d0.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:32:31.177Z","updated_at":"2020-03-15T06:32:31.177Z"}}]},{"id":2,"name":"Garden & Kitchen","slug":"garden-and-kitchen","description":null,"created_at":"2020-03-14T10:25:21.611Z","updated_at":"2020-03-14T10:25:21.611Z","products":[{"id":8,"title":"Korea Long Sofa Fabric In Blue Navy Color","is_featured":false,"is_hot":false,"price":670.2,"sale_price":567.8,"vendor":"Youngshop","review":4,"is_out_of_stock":false,"depot":85,"inventory":79,"is_active":true,"is_sale":true,"created_at":"2020-03-15T06:15:55.939Z","updated_at":"2020-03-15T06:15:55.939Z","variants":[],"images":[{"id":32,"name":"8a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"caafb8f05561484a97923b235d2603f7","ext":".jpg","mime":"image/jpeg","size":20.75,"url":"/uploads/caafb8f05561484a97923b235d2603f7.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:15:56.021Z","updated_at":"2020-03-15T06:15:56.021Z"},{"id":33,"name":"8b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"ea26eeafaa1747b5857ee73c93430261","ext":".jpg","mime":"image/jpeg","size":26.42,"url":"/uploads/ea26eeafaa1747b5857ee73c93430261.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:15:56.038Z","updated_at":"2020-03-15T06:15:56.038Z"},{"id":34,"name":"8c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"97b54a32f4864342bc485c7929de6366","ext":".jpg","mime":"image/jpeg","size":19.04,"url":"/uploads/97b54a32f4864342bc485c7929de6366.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:15:56.047Z","updated_at":"2020-03-15T06:15:56.047Z"},{"id":35,"name":"8d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"210d685d19f84c8b9e5de231176b4cf2","ext":".jpg","mime":"image/jpeg","size":155.83,"url":"/uploads/210d685d19f84c8b9e5de231176b4cf2.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:15:56.057Z","updated_at":"2020-03-15T06:15:56.057Z"}],"thumbnail":{"id":31,"name":"7.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"04ec8d58423647c98d6dbd3544c1c355","ext":".jpg","mime":"image/jpeg","size":3.63,"url":"/uploads/04ec8d58423647c98d6dbd3544c1c355.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:15:55.999Z","updated_at":"2020-03-15T06:15:55.999Z"}},{"id":26,"title":"Simple Plastice Chair In White Color","is_featured":false,"is_hot":false,"price":60,"sale_price":42,"vendor":"Young Shop","review":2,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":true,"created_at":"2020-03-15T07:23:26.180Z","updated_at":"2020-03-15T07:23:26.180Z","variants":[],"images":[{"id":118,"name":"27a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"e8c3cd4a32bd4baa9772aa080594d756","ext":".jpg","mime":"image/jpeg","size":22.57,"url":"/uploads/e8c3cd4a32bd4baa9772aa080594d756.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:23:26.212Z","updated_at":"2020-03-15T07:23:26.212Z"},{"id":119,"name":"27b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"4f482d2091c94fe6b2f9216e1652ad11","ext":".jpg","mime":"image/jpeg","size":15.18,"url":"/uploads/4f482d2091c94fe6b2f9216e1652ad11.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:23:26.222Z","updated_at":"2020-03-15T07:23:26.222Z"},{"id":120,"name":"27c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"fe5b2973ad694105b20eee9917e1491c","ext":".jpg","mime":"image/jpeg","size":17.18,"url":"/uploads/fe5b2973ad694105b20eee9917e1491c.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:23:26.237Z","updated_at":"2020-03-15T07:23:26.237Z"},{"id":121,"name":"27d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"6b8716a6edc84d0191c9411e84335189","ext":".jpg","mime":"image/jpeg","size":46.91,"url":"/uploads/6b8716a6edc84d0191c9411e84335189.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:23:26.251Z","updated_at":"2020-03-15T07:23:26.251Z"}],"thumbnail":{"id":117,"name":"3.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"c9bc200f332d47e48d4cfa68018c415c","ext":".jpg","mime":"image/jpeg","size":4.33,"url":"/uploads/c9bc200f332d47e48d4cfa68018c415c.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:23:26.200Z","updated_at":"2020-03-15T07:23:26.200Z"}},{"id":27,"title":"Korea Fabric Chair In Brown Color","is_featured":false,"is_hot":false,"price":320,"sale_price":null,"vendor":"Global Office","review":1,"is_out_of_stock":true,"depot":65,"inventory":80,"is_active":true,"is_sale":false,"created_at":"2020-03-15T07:26:02.264Z","updated_at":"2020-03-15T07:26:02.264Z","variants":[],"images":[{"id":123,"name":"28a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"8d2cd1d8755348b6bbd46c4216599640","ext":".jpg","mime":"image/jpeg","size":145.11,"url":"/uploads/8d2cd1d8755348b6bbd46c4216599640.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:26:02.297Z","updated_at":"2020-03-15T07:26:02.297Z"},{"id":124,"name":"28b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"925471220e1d47d082cd932b253e6666","ext":".jpg","mime":"image/jpeg","size":37.46,"url":"/uploads/925471220e1d47d082cd932b253e6666.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:26:02.305Z","updated_at":"2020-03-15T07:26:02.305Z"},{"id":125,"name":"28c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"a92af1e9436d4bdea3c0bef7ab6beccb","ext":".jpg","mime":"image/jpeg","size":46.35,"url":"/uploads/a92af1e9436d4bdea3c0bef7ab6beccb.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:26:02.316Z","updated_at":"2020-03-15T07:26:02.316Z"},{"id":126,"name":"28d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"43ffb2ae9d3a4fd28097c7ba63dd5b22","ext":".jpg","mime":"image/jpeg","size":64.39,"url":"/uploads/43ffb2ae9d3a4fd28097c7ba63dd5b22.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:26:02.324Z","updated_at":"2020-03-15T07:26:02.324Z"}],"thumbnail":{"id":122,"name":"4.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"afd6ccaff3fe4895903ec49b51b181d0","ext":".jpg","mime":"image/jpeg","size":9.48,"url":"/uploads/afd6ccaff3fe4895903ec49b51b181d0.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:26:02.287Z","updated_at":"2020-03-15T07:26:02.287Z"}},{"id":28,"title":"Set 14-Piece Knife From KichiKit","is_featured":false,"is_hot":false,"price":85,"sale_price":null,"vendor":"Global Office","review":3,"is_out_of_stock":true,"depot":50,"inventory":60,"is_active":true,"is_sale":false,"created_at":"2020-03-15T07:28:12.906Z","updated_at":"2020-03-18T13:03:00.440Z","variants":[],"images":[{"id":128,"name":"29a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"8570a56296b2470caa2b397e5bc9bf6d","ext":".jpg","mime":"image/jpeg","size":42.03,"url":"/uploads/8570a56296b2470caa2b397e5bc9bf6d.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:28:12.949Z","updated_at":"2020-03-15T07:28:12.949Z"},{"id":129,"name":"29b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"b271346821b54da68da7abc985db2400","ext":".jpg","mime":"image/jpeg","size":16.61,"url":"/uploads/b271346821b54da68da7abc985db2400.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:28:12.958Z","updated_at":"2020-03-15T07:28:12.958Z"},{"id":130,"name":"29c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"c5b77535a1754dcb9ccaead467a354e6","ext":".jpg","mime":"image/jpeg","size":18.64,"url":"/uploads/c5b77535a1754dcb9ccaead467a354e6.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:28:12.965Z","updated_at":"2020-03-15T07:28:12.965Z"},{"id":131,"name":"29d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"d58dd5cc5f824bd5af8e729503867653","ext":".jpg","mime":"image/jpeg","size":17.77,"url":"/uploads/d58dd5cc5f824bd5af8e729503867653.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:28:12.977Z","updated_at":"2020-03-15T07:28:12.977Z"}],"thumbnail":{"id":127,"name":"5.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"e6965d2ab9ef4537ab17517394fe9ce4","ext":".jpg","mime":"image/jpeg","size":8.32,"url":"/uploads/e6965d2ab9ef4537ab17517394fe9ce4.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:28:12.939Z","updated_at":"2020-03-15T07:28:12.939Z"}},{"id":30,"title":"Letter Printed Cushion Cover Cotton","is_featured":false,"is_hot":false,"price":60,"sale_price":42,"vendor":"Young Shop","review":2,"is_out_of_stock":false,"depot":60,"inventory":80,"is_active":true,"is_sale":true,"created_at":"2020-03-15T09:01:33.601Z","updated_at":"2020-03-15T09:01:33.601Z","variants":[],"images":[{"id":137,"name":"7.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"cca3c5bbc1f4412aad6cf03cf87d81e8","ext":".jpg","mime":"image/jpeg","size":11.61,"url":"/uploads/cca3c5bbc1f4412aad6cf03cf87d81e8.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:01:33.634Z","updated_at":"2020-03-15T09:01:33.634Z"}],"thumbnail":{"id":136,"name":"7.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"aefd853e2fd942bb860b9eb4d8b8d7c0","ext":".jpg","mime":"image/jpeg","size":11.61,"url":"/uploads/aefd853e2fd942bb860b9eb4d8b8d7c0.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:01:33.622Z","updated_at":"2020-03-15T09:01:33.622Z"}},{"id":45,"title":"Wood Simple Tea Table","is_featured":false,"is_hot":false,"price":393.38,"sale_price":null,"vendor":"Global Office","review":3,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":false,"created_at":"2020-03-15T12:49:54.993Z","updated_at":"2020-03-15T12:49:54.993Z","variants":[],"images":[{"id":176,"name":"46a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"21b0d78f72b64f3e8b92cf194e499b7a","ext":".jpg","mime":"image/jpeg","size":36.64,"url":"/uploads/21b0d78f72b64f3e8b92cf194e499b7a.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T12:49:55.046Z","updated_at":"2020-03-15T12:49:55.046Z"},{"id":177,"name":"46b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"c9c68e1ace634ee69ced00590d3e4aa1","ext":".jpg","mime":"image/jpeg","size":13.92,"url":"/uploads/c9c68e1ace634ee69ced00590d3e4aa1.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T12:49:55.055Z","updated_at":"2020-03-15T12:49:55.055Z"},{"id":178,"name":"46c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"6ee8e30510df4e88a2807b38e38838ed","ext":".jpg","mime":"image/jpeg","size":13.48,"url":"/uploads/6ee8e30510df4e88a2807b38e38838ed.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T12:49:55.065Z","updated_at":"2020-03-15T12:49:55.065Z"},{"id":179,"name":"46d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"61f9d89dc3cf4161b157d7b969111cc9","ext":".jpg","mime":"image/jpeg","size":93.96,"url":"/uploads/61f9d89dc3cf4161b157d7b969111cc9.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T12:49:55.075Z","updated_at":"2020-03-15T12:49:55.075Z"}],"thumbnail":{"id":175,"name":"8.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"3192b332d84248d0870b62db15ea79b6","ext":".jpg","mime":"image/jpeg","size":3.97,"url":"/uploads/3192b332d84248d0870b62db15ea79b6.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T12:49:55.032Z","updated_at":"2020-03-15T12:49:55.032Z"}},{"id":46,"title":"Simple Plastic Chair In Gray Color","is_featured":false,"is_hot":false,"price":50,"sale_price":25,"vendor":"Young Shop","review":5,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":true,"created_at":"2020-03-15T12:50:58.066Z","updated_at":"2020-03-15T12:50:58.066Z","variants":[],"images":[{"id":343,"name":"47a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"c34777c27dd44d6ab517cf5e5f0d3e67","ext":".jpg","mime":"image/jpeg","size":76.72,"url":"/uploads/c34777c27dd44d6ab517cf5e5f0d3e67.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T12:49:00.500Z","updated_at":"2020-03-18T12:49:00.500Z"},{"id":344,"name":"47b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"f5ca8fbda1cd45ccaa57e0dcf1692fb3","ext":".jpg","mime":"image/jpeg","size":14.54,"url":"/uploads/f5ca8fbda1cd45ccaa57e0dcf1692fb3.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T12:49:00.510Z","updated_at":"2020-03-18T12:49:00.510Z"},{"id":345,"name":"47c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"c3add993354d431c8f96405755a8099c","ext":".jpg","mime":"image/jpeg","size":21.15,"url":"/uploads/c3add993354d431c8f96405755a8099c.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T12:49:00.524Z","updated_at":"2020-03-18T12:49:00.524Z"},{"id":346,"name":"47d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"b0cefaa6a3d24a82a5e4cb2c1c4bb134","ext":".jpg","mime":"image/jpeg","size":66.49,"url":"/uploads/b0cefaa6a3d24a82a5e4cb2c1c4bb134.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T12:49:00.535Z","updated_at":"2020-03-18T12:49:00.535Z"}],"thumbnail":{"id":342,"name":"10.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"72190536af1245b48cac7925c4318e37","ext":".jpg","mime":"image/jpeg","size":6.38,"url":"/uploads/72190536af1245b48cac7925c4318e37.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T12:49:00.488Z","updated_at":"2020-03-18T12:49:00.488Z"}},{"id":47,"title":"Korea Small Wood 4 Boxes Storage","is_featured":false,"is_hot":false,"price":64,"sale_price":null,"vendor":"Global Office","review":4,"is_out_of_stock":false,"depot":70,"inventory":90,"is_active":true,"is_sale":false,"created_at":"2020-03-15T12:54:01.621Z","updated_at":"2020-03-15T12:54:01.621Z","variants":[],"images":[{"id":181,"name":"48a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"58cb2976791443a496b80e3cd5d55a4e","ext":".jpg","mime":"image/jpeg","size":78.37,"url":"/uploads/58cb2976791443a496b80e3cd5d55a4e.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T12:54:01.663Z","updated_at":"2020-03-15T12:54:01.663Z"},{"id":182,"name":"48b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"89cc985082fa4ca7b8cb455f13e7c3eb","ext":".jpg","mime":"image/jpeg","size":23.31,"url":"/uploads/89cc985082fa4ca7b8cb455f13e7c3eb.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T12:54:01.676Z","updated_at":"2020-03-15T12:54:01.676Z"},{"id":183,"name":"48c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"b51695a23f704bb0bc62a97e154efba5","ext":".jpg","mime":"image/jpeg","size":23.12,"url":"/uploads/b51695a23f704bb0bc62a97e154efba5.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T12:54:01.686Z","updated_at":"2020-03-15T12:54:01.686Z"},{"id":184,"name":"48d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"05982ca9a3a64d6391366bc6103884e6","ext":".jpg","mime":"image/jpeg","size":22.18,"url":"/uploads/05982ca9a3a64d6391366bc6103884e6.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T12:54:01.696Z","updated_at":"2020-03-15T12:54:01.696Z"}],"thumbnail":{"id":180,"name":"9.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"664f3ea44e7f44b5bb726d0a78a6eaec","ext":".jpg","mime":"image/jpeg","size":8.13,"url":"/uploads/664f3ea44e7f44b5bb726d0a78a6eaec.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T12:54:01.652Z","updated_at":"2020-03-15T12:54:01.652Z"}},{"id":49,"title":"Claure Austin Lover Round Chair White Wooden","is_featured":false,"is_hot":false,"price":99.59,"sale_price":null,"vendor":"Global Office","review":5,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":false,"created_at":"2020-03-15T12:57:21.759Z","updated_at":"2020-03-15T12:57:21.759Z","variants":[],"images":[{"id":191,"name":"50a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"f8bb5ccd1eb5459e9fc33d2f45b74e60","ext":".jpg","mime":"image/jpeg","size":33.03,"url":"/uploads/f8bb5ccd1eb5459e9fc33d2f45b74e60.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T12:57:21.788Z","updated_at":"2020-03-15T12:57:21.788Z"},{"id":192,"name":"50b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"82c418256f2e4264a3e9aed0c9264335","ext":".jpg","mime":"image/jpeg","size":10.77,"url":"/uploads/82c418256f2e4264a3e9aed0c9264335.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T12:57:21.796Z","updated_at":"2020-03-15T12:57:21.796Z"},{"id":193,"name":"50c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"65550a2a55ce4f9ea2d4599c9cffd43a","ext":".jpg","mime":"image/jpeg","size":12.36,"url":"/uploads/65550a2a55ce4f9ea2d4599c9cffd43a.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T12:57:21.805Z","updated_at":"2020-03-15T12:57:21.805Z"},{"id":194,"name":"50d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"a18fd4de58f34496abb40f38d3dacdf9","ext":".jpg","mime":"image/jpeg","size":11.28,"url":"/uploads/a18fd4de58f34496abb40f38d3dacdf9.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T12:57:21.812Z","updated_at":"2020-03-15T12:57:21.812Z"}],"thumbnail":{"id":190,"name":"1.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"d36aa60d7915475abcbb346de7274cac","ext":".jpg","mime":"image/jpeg","size":5.79,"url":"/uploads/d36aa60d7915475abcbb346de7274cac.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T12:57:21.777Z","updated_at":"2020-03-15T12:57:21.777Z"}},{"id":50,"title":"Letter Printed Cushion Cover Cotton Throw Pillow","is_featured":false,"is_hot":false,"price":13.59,"sale_price":null,"vendor":"Global Office","review":4,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":false,"created_at":"2020-03-15T12:59:25.253Z","updated_at":"2020-03-15T12:59:25.253Z","variants":[],"images":[{"id":196,"name":"4.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"5a21858f28fe470bab05f9e839eedbdf","ext":".jpg","mime":"image/jpeg","size":11.61,"url":"/uploads/5a21858f28fe470bab05f9e839eedbdf.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T12:59:25.285Z","updated_at":"2020-03-15T12:59:25.285Z"}],"thumbnail":{"id":195,"name":"4.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"e446cc5b6ed3433f9ef5aa3c1373bf18","ext":".jpg","mime":"image/jpeg","size":11.61,"url":"/uploads/e446cc5b6ed3433f9ef5aa3c1373bf18.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T12:59:25.275Z","updated_at":"2020-03-15T12:59:25.275Z"}},{"id":51,"title":"Simple Short TV Board Combine Book Shelf","is_featured":false,"is_hot":false,"price":13.59,"sale_price":null,"vendor":"Global Office","review":5,"is_out_of_stock":false,"depot":50,"inventory":60,"is_active":true,"is_sale":false,"created_at":"2020-03-15T13:00:41.375Z","updated_at":"2020-03-15T13:00:41.375Z","variants":[],"images":[{"id":198,"name":"5.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"a1a08a0b292846089662206d92c858bf","ext":".jpg","mime":"image/jpeg","size":5.07,"url":"/uploads/a1a08a0b292846089662206d92c858bf.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:01:18.571Z","updated_at":"2020-03-15T13:01:18.571Z"}],"thumbnail":{"id":197,"name":"5.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"2af891b3cc034320b2ef6b792542cba4","ext":".jpg","mime":"image/jpeg","size":5.07,"url":"/uploads/2af891b3cc034320b2ef6b792542cba4.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:01:18.560Z","updated_at":"2020-03-15T13:01:18.560Z"}},{"id":52,"title":"Simple Tea Teable With Glass Surface","is_featured":false,"is_hot":false,"price":249.59,"sale_price":null,"vendor":"Global Office","review":5,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":false,"created_at":"2020-03-15T13:28:05.503Z","updated_at":"2020-03-15T13:28:05.503Z","variants":[],"images":[{"id":200,"name":"53a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"4ad7f87094984babac0a22a9f8447eb2","ext":".jpg","mime":"image/jpeg","size":24.93,"url":"/uploads/4ad7f87094984babac0a22a9f8447eb2.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:28:05.541Z","updated_at":"2020-03-15T13:28:05.541Z"},{"id":201,"name":"53b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"8929c017e8324986911ae5b70798728e","ext":".jpg","mime":"image/jpeg","size":16.98,"url":"/uploads/8929c017e8324986911ae5b70798728e.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:28:05.551Z","updated_at":"2020-03-15T13:28:05.551Z"},{"id":202,"name":"53c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"500e7a2bbf424d6ab4c3b7ec70af33e5","ext":".jpg","mime":"image/jpeg","size":25.08,"url":"/uploads/500e7a2bbf424d6ab4c3b7ec70af33e5.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:28:05.559Z","updated_at":"2020-03-15T13:28:05.559Z"}],"thumbnail":{"id":199,"name":"6.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"98b96e736fa744a5ab7ed83354d97536","ext":".jpg","mime":"image/jpeg","size":3.93,"url":"/uploads/98b96e736fa744a5ab7ed83354d97536.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:28:05.531Z","updated_at":"2020-03-15T13:28:05.531Z"}}]},{"id":3,"name":"Consumer Electrics","slug":"consumer-electrics","description":null,"created_at":"2020-03-14T10:25:39.408Z","updated_at":"2020-03-14T10:25:39.408Z","products":[{"id":3,"title":"Marshall Kilburn Portable Wireless Speaker","is_featured":false,"is_hot":false,"price":42.99,"sale_price":null,"vendor":"Go Pro","review":5,"is_out_of_stock":false,"depot":85,"inventory":100,"is_active":true,"is_sale":false,"created_at":"2020-03-15T05:55:19.349Z","updated_at":"2020-03-15T05:55:19.349Z","variants":[],"images":[{"id":10,"name":"1.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"3398b7a330154c9390db4495b9e3d413","ext":".jpg","mime":"image/jpeg","size":158.75,"url":"/uploads/3398b7a330154c9390db4495b9e3d413.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T05:55:19.403Z","updated_at":"2020-03-15T05:55:19.403Z"},{"id":11,"name":"2.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"73b00542e06e4d008945bc701959472b","ext":".jpg","mime":"image/jpeg","size":44.03,"url":"/uploads/73b00542e06e4d008945bc701959472b.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T05:55:19.415Z","updated_at":"2020-03-15T05:55:19.415Z"},{"id":12,"name":"3.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"f0647af5998446e1a6a1906996014a0a","ext":".jpg","mime":"image/jpeg","size":69.23,"url":"/uploads/f0647af5998446e1a6a1906996014a0a.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T05:55:19.425Z","updated_at":"2020-03-15T05:55:19.425Z"}],"thumbnail":{"id":9,"name":"2.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"feaeaa8c5d24474e943f57a7df55e921","ext":".jpg","mime":"image/jpeg","size":15.15,"url":"/uploads/feaeaa8c5d24474e943f57a7df55e921.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T05:55:19.385Z","updated_at":"2020-03-15T05:55:19.385Z"}},{"id":19,"title":"EPSION Plaster Printer","is_featured":false,"is_hot":false,"price":233.28,"sale_price":null,"vendor":"Robert\'s Store","review":4,"is_out_of_stock":false,"depot":40,"inventory":50,"is_active":true,"is_sale":false,"created_at":"2020-03-15T06:46:44.313Z","updated_at":"2020-03-15T06:46:44.313Z","variants":[],"images":[{"id":85,"name":"19a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"d9a512ac366049e79ed4430f63258646","ext":".jpg","mime":"image/jpeg","size":36.78,"url":"/uploads/d9a512ac366049e79ed4430f63258646.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:46:44.345Z","updated_at":"2020-03-15T06:46:44.345Z"},{"id":86,"name":"19b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"37e8bc461d034b42886a2f5a675c723b","ext":".jpg","mime":"image/jpeg","size":10.65,"url":"/uploads/37e8bc461d034b42886a2f5a675c723b.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:46:44.353Z","updated_at":"2020-03-15T06:46:44.353Z"},{"id":87,"name":"19c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"0db1b9f735034ad9927e5544d4c2f916","ext":".jpg","mime":"image/jpeg","size":12.91,"url":"/uploads/0db1b9f735034ad9927e5544d4c2f916.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:46:44.361Z","updated_at":"2020-03-15T06:46:44.361Z"},{"id":88,"name":"19d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"2d276d5621274050b2126bd8d2c6f3d2","ext":".jpg","mime":"image/jpeg","size":14.67,"url":"/uploads/2d276d5621274050b2126bd8d2c6f3d2.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:46:44.369Z","updated_at":"2020-03-15T06:46:44.369Z"}],"thumbnail":{"id":84,"name":"19.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"6feffd7531c2463f9289a1dbe6cf0eb2","ext":".jpg","mime":"image/jpeg","size":8.32,"url":"/uploads/6feffd7531c2463f9289a1dbe6cf0eb2.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:46:44.335Z","updated_at":"2020-03-15T06:46:44.335Z"}},{"id":20,"title":"EPSION Plaster Printer 2","is_featured":false,"is_hot":false,"price":299.28,"sale_price":null,"vendor":"Robert\'s Store","review":4,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":false,"created_at":"2020-03-15T06:51:40.586Z","updated_at":"2020-03-15T06:51:40.586Z","variants":[],"images":[{"id":90,"name":"19a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"c1445934392c4fa2a247db732b39930b","ext":".jpg","mime":"image/jpeg","size":36.78,"url":"/uploads/c1445934392c4fa2a247db732b39930b.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:51:40.623Z","updated_at":"2020-03-15T06:51:40.623Z"},{"id":91,"name":"19b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"94a5b77dccdc43d79683a092ffa12adc","ext":".jpg","mime":"image/jpeg","size":10.65,"url":"/uploads/94a5b77dccdc43d79683a092ffa12adc.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:51:40.643Z","updated_at":"2020-03-15T06:51:40.643Z"},{"id":92,"name":"19c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"aea18f347cb34f54add389580fd52e53","ext":".jpg","mime":"image/jpeg","size":12.91,"url":"/uploads/aea18f347cb34f54add389580fd52e53.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:51:40.653Z","updated_at":"2020-03-15T06:51:40.653Z"},{"id":93,"name":"19d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"c3ed6617023f458d99388ca01f6af619","ext":".jpg","mime":"image/jpeg","size":14.67,"url":"/uploads/c3ed6617023f458d99388ca01f6af619.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:51:40.670Z","updated_at":"2020-03-15T06:51:40.670Z"}],"thumbnail":{"id":89,"name":"19.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"9c3e74c3b8e04684ba6c8cd333bdc8ec","ext":".jpg","mime":"image/jpeg","size":8.32,"url":"/uploads/9c3e74c3b8e04684ba6c8cd333bdc8ec.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:51:40.609Z","updated_at":"2020-03-15T06:51:40.609Z"}},{"id":21,"title":"LG White Front Load Steam Washer","is_featured":false,"is_hot":false,"price":1422.7,"sale_price":1025.5,"vendor":"Young Shop","review":5,"is_out_of_stock":false,"depot":65,"inventory":75,"is_active":true,"is_sale":true,"created_at":"2020-03-15T06:54:51.696Z","updated_at":"2020-03-15T06:54:51.696Z","variants":[],"images":[{"id":95,"name":"21a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"a88b749bd3bb49a6be93a362099c8295","ext":".jpg","mime":"image/jpeg","size":46.36,"url":"/uploads/a88b749bd3bb49a6be93a362099c8295.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:54:51.730Z","updated_at":"2020-03-15T06:54:51.730Z"},{"id":96,"name":"22a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"8fcfcb5d0c694660b1906eda13290a82","ext":".jpg","mime":"image/jpeg","size":68.23,"url":"/uploads/8fcfcb5d0c694660b1906eda13290a82.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:54:51.739Z","updated_at":"2020-03-15T06:54:51.739Z"}],"thumbnail":{"id":94,"name":"20.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"95aa7cb09ba04ce2b529ebceabb6f02c","ext":".jpg","mime":"image/jpeg","size":8.71,"url":"/uploads/95aa7cb09ba04ce2b529ebceabb6f02c.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:54:51.718Z","updated_at":"2020-03-15T06:54:51.718Z"}},{"id":25,"title":"Aroma Rice Cooker","is_featured":false,"is_hot":false,"price":101.99,"sale_price":null,"vendor":"Global Office","review":1,"is_out_of_stock":true,"depot":50,"inventory":60,"is_active":true,"is_sale":false,"created_at":"2020-03-15T07:09:29.699Z","updated_at":"2020-03-15T07:09:29.699Z","variants":[],"images":[{"id":113,"name":"26a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"696dd71cf0fc48dca751de388cc8613f","ext":".jpg","mime":"image/jpeg","size":40.83,"url":"/uploads/696dd71cf0fc48dca751de388cc8613f.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:09:29.746Z","updated_at":"2020-03-15T07:09:29.746Z"},{"id":114,"name":"26b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"d350a3a6a0044d83bc72c68176dcb5ab","ext":".jpg","mime":"image/jpeg","size":25.9,"url":"/uploads/d350a3a6a0044d83bc72c68176dcb5ab.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:09:29.758Z","updated_at":"2020-03-15T07:09:29.758Z"},{"id":115,"name":"26c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"fa26ea0d67e846b3af930df9f02c96d1","ext":".jpg","mime":"image/jpeg","size":32.9,"url":"/uploads/fa26ea0d67e846b3af930df9f02c96d1.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:09:29.767Z","updated_at":"2020-03-15T07:09:29.767Z"},{"id":116,"name":"26d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"c5e80f9757f94639ba6c70a974cddd39","ext":".jpg","mime":"image/jpeg","size":16.87,"url":"/uploads/c5e80f9757f94639ba6c70a974cddd39.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:09:29.774Z","updated_at":"2020-03-15T07:09:29.774Z"}],"thumbnail":{"id":112,"name":"2.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"d5c5d5570e1046f080ad62c7e35fe56d","ext":".jpg","mime":"image/jpeg","size":9.06,"url":"/uploads/d5c5d5570e1046f080ad62c7e35fe56d.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:09:29.729Z","updated_at":"2020-03-15T07:09:29.729Z"}},{"id":29,"title":"Magic Bullet NutriBullet Pro 900 Series Blender","is_featured":false,"is_hot":false,"price":92,"sale_price":null,"vendor":"Global Store","review":1,"is_out_of_stock":true,"depot":80,"inventory":90,"is_active":true,"is_sale":false,"created_at":"2020-03-15T07:29:47.468Z","updated_at":"2020-03-18T12:51:46.229Z","variants":[],"images":[{"id":132,"name":"30a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"a6ac678bb7224277b0ba5b57bd274704","ext":".jpg","mime":"image/jpeg","size":46.73,"url":"/uploads/a6ac678bb7224277b0ba5b57bd274704.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:29:47.489Z","updated_at":"2020-03-15T07:29:47.489Z"},{"id":133,"name":"30b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"9de8de5d5f774d518615bda72a646796","ext":".jpg","mime":"image/jpeg","size":10.44,"url":"/uploads/9de8de5d5f774d518615bda72a646796.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:29:47.498Z","updated_at":"2020-03-15T07:29:47.498Z"},{"id":134,"name":"30c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"db40275d06b04adc828ba08708062ad8","ext":".jpg","mime":"image/jpeg","size":11.1,"url":"/uploads/db40275d06b04adc828ba08708062ad8.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:29:47.507Z","updated_at":"2020-03-15T07:29:47.507Z"},{"id":135,"name":"30d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"e4b8c056a206487a8bbf279727e2ed1e","ext":".jpg","mime":"image/jpeg","size":8.84,"url":"/uploads/e4b8c056a206487a8bbf279727e2ed1e.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:29:47.523Z","updated_at":"2020-03-15T07:29:47.523Z"}],"thumbnail":{"id":347,"name":"6.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"20c71a1cecd047928f943f23a58c05f8","ext":".jpg","mime":"image/jpeg","size":9.74,"url":"/uploads/20c71a1cecd047928f943f23a58c05f8.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T12:51:46.247Z","updated_at":"2020-03-18T12:51:46.247Z"}},{"id":38,"title":"TCL 47-inch 4K Ultra HD Smart TV","is_featured":false,"is_hot":false,"price":670,"sale_price":567.99,"vendor":"Go Pro","review":4,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":true,"created_at":"2020-03-15T09:43:05.580Z","updated_at":"2020-03-18T12:58:10.870Z","variants":[],"images":[{"id":158,"name":"12.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"5e0bff934b5d4a958af9122a1ee91d41","ext":".jpg","mime":"image/jpeg","size":8.62,"url":"/uploads/5e0bff934b5d4a958af9122a1ee91d41.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:43:05.611Z","updated_at":"2020-03-15T09:43:05.611Z"}],"thumbnail":{"id":157,"name":"12.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"4e95e8c4956941099aa132a86b0086db","ext":".jpg","mime":"image/jpeg","size":8.62,"url":"/uploads/4e95e8c4956941099aa132a86b0086db.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:43:05.600Z","updated_at":"2020-03-15T09:43:05.600Z"}},{"id":40,"title":"LG Electrolux 500L Inverte Washing Machine","is_featured":false,"is_hot":false,"price":360,"sale_price":342,"vendor":"Young Shop","review":4,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":true,"created_at":"2020-03-15T09:46:00.538Z","updated_at":"2020-03-15T09:46:00.538Z","variants":[],"images":[{"id":162,"name":"7.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"46f0cfa3ec174e42b98e26e000dda8f1","ext":".jpg","mime":"image/jpeg","size":8.71,"url":"/uploads/46f0cfa3ec174e42b98e26e000dda8f1.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:46:00.580Z","updated_at":"2020-03-15T09:46:00.580Z"}],"thumbnail":{"id":161,"name":"7.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"158cc93d2c404e53b93b06c64997d02f","ext":".jpg","mime":"image/jpeg","size":8.71,"url":"/uploads/158cc93d2c404e53b93b06c64997d02f.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:46:00.568Z","updated_at":"2020-03-15T09:46:00.568Z"}},{"id":41,"title":"Panasonic Invertr 900L Refrigerator","is_featured":false,"is_hot":false,"price":720,"sale_price":null,"vendor":"Global Office","review":4,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":false,"created_at":"2020-03-15T09:47:24.554Z","updated_at":"2020-03-15T09:47:24.554Z","variants":[],"images":[{"id":341,"name":"15.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"9778f73b10ad4a939769a79c0a877c43","ext":".jpg","mime":"image/jpeg","size":4.09,"url":"/uploads/9778f73b10ad4a939769a79c0a877c43.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T12:47:55.740Z","updated_at":"2020-03-18T12:47:55.740Z"}],"thumbnail":{"id":340,"name":"15.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"a3381403e8474758922ee65bbf2eea22","ext":".jpg","mime":"image/jpeg","size":4.09,"url":"/uploads/a3381403e8474758922ee65bbf2eea22.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T12:47:55.731Z","updated_at":"2020-03-18T12:47:55.731Z"}},{"id":53,"title":"Stadler Form Otto African Sapele Wood","is_featured":false,"is_hot":false,"price":127.59,"sale_price":null,"vendor":"Global Office","review":4,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":false,"created_at":"2020-03-15T13:29:47.964Z","updated_at":"2020-03-15T13:29:47.964Z","variants":[],"images":[{"id":204,"name":"54a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"0cc34763c9cc4957a77b5578cfd3147b","ext":".jpg","mime":"image/jpeg","size":504.06,"url":"/uploads/0cc34763c9cc4957a77b5578cfd3147b.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:29:48.003Z","updated_at":"2020-03-15T13:29:48.003Z"},{"id":205,"name":"54b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"e4b335c24d1544bfb20410b1f95d7149","ext":".jpg","mime":"image/jpeg","size":20.85,"url":"/uploads/e4b335c24d1544bfb20410b1f95d7149.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:29:48.012Z","updated_at":"2020-03-15T13:29:48.012Z"},{"id":206,"name":"54c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"01d38872ce5a4a51b40f6ab4b3f927ee","ext":".jpg","mime":"image/jpeg","size":27.41,"url":"/uploads/01d38872ce5a4a51b40f6ab4b3f927ee.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:29:48.020Z","updated_at":"2020-03-15T13:29:48.020Z"}],"thumbnail":{"id":203,"name":"7.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"acf14989504d4099ac8a56d0b4e2aca9","ext":".jpg","mime":"image/jpeg","size":11.5,"url":"/uploads/acf14989504d4099ac8a56d0b4e2aca9.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:29:47.988Z","updated_at":"2020-03-15T13:29:47.988Z"}},{"id":69,"title":"Apple TV 4k – 32 GB (4th Generation)","is_featured":false,"is_hot":false,"price":92.99,"sale_price":null,"vendor":"Young Shop","review":5,"is_out_of_stock":false,"depot":50,"inventory":60,"is_active":true,"is_sale":false,"created_at":"2020-03-18T05:42:14.186Z","updated_at":"2020-03-18T05:42:14.186Z","variants":[],"images":[{"id":274,"name":"70a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"ae983ce46fc64ec4bc65ca800de5ea56","ext":".jpg","mime":"image/jpeg","size":24.59,"url":"/uploads/ae983ce46fc64ec4bc65ca800de5ea56.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:42:14.234Z","updated_at":"2020-03-18T05:42:14.234Z"},{"id":275,"name":"70b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"0d1eaad741ce4efba4bba3dfa0bb4a52","ext":".jpg","mime":"image/jpeg","size":7.02,"url":"/uploads/0d1eaad741ce4efba4bba3dfa0bb4a52.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:42:14.248Z","updated_at":"2020-03-18T05:42:14.248Z"},{"id":276,"name":"70c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"cb1f36ff311c4297ba19ba9f27785fd2","ext":".jpg","mime":"image/jpeg","size":8.65,"url":"/uploads/cb1f36ff311c4297ba19ba9f27785fd2.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:42:14.260Z","updated_at":"2020-03-18T05:42:14.260Z"}],"thumbnail":{"id":273,"name":"15.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"93b647e5138f40d991c4f7d123794b1f","ext":".jpg","mime":"image/jpeg","size":4.49,"url":"/uploads/93b647e5138f40d991c4f7d123794b1f.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:42:14.215Z","updated_at":"2020-03-18T05:42:14.215Z"}},{"id":70,"title":"GoPro Karman 4 Channels Quadcopter Drone","is_featured":false,"is_hot":false,"price":392.99,"sale_price":null,"vendor":"Young Shop","review":4,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":false,"created_at":"2020-03-18T05:43:57.333Z","updated_at":"2020-03-18T05:43:57.333Z","variants":[],"images":[{"id":278,"name":"71a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"997bc2778e25492fbd09c582bc98ad3b","ext":".jpg","mime":"image/jpeg","size":33.13,"url":"/uploads/997bc2778e25492fbd09c582bc98ad3b.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:43:57.405Z","updated_at":"2020-03-18T05:43:57.405Z"},{"id":279,"name":"71b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"a3da535f76ac43f5bd8fd82201144603","ext":".jpg","mime":"image/jpeg","size":29.45,"url":"/uploads/a3da535f76ac43f5bd8fd82201144603.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:43:57.415Z","updated_at":"2020-03-18T05:43:57.415Z"},{"id":280,"name":"71c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"1dc6a4b3b1434677be924e53e98297b2","ext":".jpg","mime":"image/jpeg","size":19.21,"url":"/uploads/1dc6a4b3b1434677be924e53e98297b2.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:43:57.433Z","updated_at":"2020-03-18T05:43:57.433Z"},{"id":281,"name":"71d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"95d0cf75458a480ebc6c684af5dfd38c","ext":".jpg","mime":"image/jpeg","size":74.06,"url":"/uploads/95d0cf75458a480ebc6c684af5dfd38c.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:43:57.444Z","updated_at":"2020-03-18T05:43:57.444Z"}],"thumbnail":{"id":277,"name":"16.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"72b77e04493342ab803b4f6bbc346072","ext":".jpg","mime":"image/jpeg","size":5.24,"url":"/uploads/72b77e04493342ab803b4f6bbc346072.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:43:57.386Z","updated_at":"2020-03-18T05:43:57.386Z"}}]},{"id":4,"name":"Health & Beauty","slug":"health-and-beauty","description":null,"created_at":"2020-03-14T10:25:51.376Z","updated_at":"2020-03-14T10:25:51.376Z","products":[{"id":54,"title":"Aveeno Moisturizing Body Shower 450ml","is_featured":false,"is_hot":false,"price":59,"sale_price":47.99,"vendor":"Young Shop","review":5,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":true,"created_at":"2020-03-15T13:33:17.935Z","updated_at":"2020-03-15T13:33:17.935Z","variants":[],"images":[{"id":208,"name":"55a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"383ed28ccd8c43b99de6d4de3031603d","ext":".jpg","mime":"image/jpeg","size":49.14,"url":"/uploads/383ed28ccd8c43b99de6d4de3031603d.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:33:17.965Z","updated_at":"2020-03-15T13:33:17.965Z"},{"id":209,"name":"55b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"be3321593fea4864addd3d73f35a8cee","ext":".jpg","mime":"image/jpeg","size":11.5,"url":"/uploads/be3321593fea4864addd3d73f35a8cee.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:33:17.978Z","updated_at":"2020-03-15T13:33:17.978Z"},{"id":210,"name":"55c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"9d091230599045ed97bcab3d7647127b","ext":".jpg","mime":"image/jpeg","size":11.41,"url":"/uploads/9d091230599045ed97bcab3d7647127b.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:33:17.986Z","updated_at":"2020-03-15T13:33:17.986Z"},{"id":211,"name":"55d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"972459f675fd49c585e52fa5cc1d418e","ext":".jpg","mime":"image/jpeg","size":13.43,"url":"/uploads/972459f675fd49c585e52fa5cc1d418e.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:33:18.001Z","updated_at":"2020-03-15T13:33:18.001Z"}],"thumbnail":{"id":207,"name":"1.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"0a029cb7870243c7b36c71922a55701a","ext":".jpg","mime":"image/jpeg","size":5.38,"url":"/uploads/0a029cb7870243c7b36c71922a55701a.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:33:17.954Z","updated_at":"2020-03-15T13:33:17.954Z"}},{"id":55,"title":"Baxter Care Hair Kit For Bearded Mens","is_featured":false,"is_hot":false,"price":60,"sale_price":42,"vendor":"Young Shop","review":4,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":true,"created_at":"2020-03-15T13:35:28.855Z","updated_at":"2020-03-15T13:35:28.855Z","variants":[],"images":[{"id":213,"name":"56a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"1ca5fe0793e545669c16a8e7c7b68348","ext":".jpg","mime":"image/jpeg","size":58.88,"url":"/uploads/1ca5fe0793e545669c16a8e7c7b68348.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:35:28.889Z","updated_at":"2020-03-15T13:35:28.889Z"},{"id":214,"name":"56b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"2268da1843334f4c9e0757a16f0b8443","ext":".jpg","mime":"image/jpeg","size":11.12,"url":"/uploads/2268da1843334f4c9e0757a16f0b8443.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:35:28.898Z","updated_at":"2020-03-15T13:35:28.898Z"},{"id":215,"name":"56c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"d55cb74ae9d64a3a9d93ae4328b64475","ext":".jpg","mime":"image/jpeg","size":13.79,"url":"/uploads/d55cb74ae9d64a3a9d93ae4328b64475.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:35:28.905Z","updated_at":"2020-03-15T13:35:28.905Z"},{"id":216,"name":"56d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"aa96424c1a8743929d92003f1f3b92cd","ext":".jpg","mime":"image/jpeg","size":24.83,"url":"/uploads/aa96424c1a8743929d92003f1f3b92cd.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:35:28.913Z","updated_at":"2020-03-15T13:35:28.913Z"}],"thumbnail":{"id":212,"name":"3.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"ede2a4fddd3e439c87a0f471267b7838","ext":".jpg","mime":"image/jpeg","size":10.03,"url":"/uploads/ede2a4fddd3e439c87a0f471267b7838.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:35:28.879Z","updated_at":"2020-03-15T13:35:28.879Z"}},{"id":56,"title":"Anna Sui Putty Mask Perfection","is_featured":false,"is_hot":false,"price":25,"sale_price":null,"vendor":"Global Office","review":5,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":false,"created_at":"2020-03-15T13:37:05.467Z","updated_at":"2020-03-15T13:37:05.467Z","variants":[],"images":[{"id":218,"name":"57a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"56986b9145c7497dbd31243e9cb48f87","ext":".jpg","mime":"image/jpeg","size":53.69,"url":"/uploads/56986b9145c7497dbd31243e9cb48f87.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:37:05.508Z","updated_at":"2020-03-15T13:37:05.508Z"},{"id":219,"name":"57b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"6ba127ca71074b539221a949ef26e701","ext":".jpg","mime":"image/jpeg","size":21.12,"url":"/uploads/6ba127ca71074b539221a949ef26e701.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:37:05.520Z","updated_at":"2020-03-15T13:37:05.520Z"},{"id":220,"name":"57c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"c378fc8a90004701811b388ce195a957","ext":".jpg","mime":"image/jpeg","size":54.25,"url":"/uploads/c378fc8a90004701811b388ce195a957.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:37:05.528Z","updated_at":"2020-03-15T13:37:05.528Z"},{"id":221,"name":"57d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"2324c56372fc46998df8ce9f8a9cd847","ext":".jpg","mime":"image/jpeg","size":12.77,"url":"/uploads/2324c56372fc46998df8ce9f8a9cd847.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:37:05.537Z","updated_at":"2020-03-15T13:37:05.537Z"}],"thumbnail":{"id":217,"name":"4.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"9ccbc5e9220e4768921afcb101c10459","ext":".jpg","mime":"image/jpeg","size":8.02,"url":"/uploads/9ccbc5e9220e4768921afcb101c10459.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T13:37:05.487Z","updated_at":"2020-03-15T13:37:05.487Z"}},{"id":57,"title":"Set 30 Piece Korea StartSkin Natural Mask","is_featured":false,"is_hot":false,"price":85,"sale_price":null,"vendor":"Global Office","review":4,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":false,"created_at":"2020-03-15T14:26:12.340Z","updated_at":"2020-03-15T14:26:12.340Z","variants":[],"images":[{"id":223,"name":"58a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"cca7d31b5a85453ba4145a460f6c283b","ext":".jpg","mime":"image/jpeg","size":32.51,"url":"/uploads/cca7d31b5a85453ba4145a460f6c283b.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T14:26:12.368Z","updated_at":"2020-03-15T14:26:12.368Z"},{"id":224,"name":"58b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"5841d6e8f7104034935cd493547900ff","ext":".jpg","mime":"image/jpeg","size":13.31,"url":"/uploads/5841d6e8f7104034935cd493547900ff.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T14:26:12.377Z","updated_at":"2020-03-15T14:26:12.377Z"},{"id":225,"name":"58c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"537289a299f54d3b9ed8fc8763ee7b92","ext":".jpg","mime":"image/jpeg","size":33.19,"url":"/uploads/537289a299f54d3b9ed8fc8763ee7b92.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T14:26:12.394Z","updated_at":"2020-03-15T14:26:12.394Z"}],"thumbnail":{"id":222,"name":"5.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"46e9f0df98c74d03b9089b73d5cb2a57","ext":".jpg","mime":"image/jpeg","size":6.48,"url":"/uploads/46e9f0df98c74d03b9089b73d5cb2a57.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T14:26:12.359Z","updated_at":"2020-03-15T14:26:12.359Z"}},{"id":58,"title":"Ciate Palemore Lipstick Bold Red Color","is_featured":false,"is_hot":false,"price":92,"sale_price":null,"vendor":"Global Store","review":5,"is_out_of_stock":false,"depot":80,"inventory":90,"is_active":true,"is_sale":false,"created_at":"2020-03-15T14:27:51.518Z","updated_at":"2020-03-15T14:27:51.518Z","variants":[],"images":[{"id":227,"name":"59a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"918f66e8a4be4029863149bd4c163dd6","ext":".jpg","mime":"image/jpeg","size":68.14,"url":"/uploads/918f66e8a4be4029863149bd4c163dd6.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T14:27:51.550Z","updated_at":"2020-03-15T14:27:51.550Z"},{"id":228,"name":"59b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"ed4f0cbafb9149138d06bfb72b458893","ext":".jpg","mime":"image/jpeg","size":17.37,"url":"/uploads/ed4f0cbafb9149138d06bfb72b458893.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T14:27:51.564Z","updated_at":"2020-03-15T14:27:51.564Z"},{"id":229,"name":"59c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"5ba79ea8093645c480eebe7b5083e483","ext":".jpg","mime":"image/jpeg","size":48.51,"url":"/uploads/5ba79ea8093645c480eebe7b5083e483.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T14:27:51.572Z","updated_at":"2020-03-15T14:27:51.572Z"},{"id":230,"name":"59d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"9c1da7c5f0314c36ae1977c5b6caecab","ext":".jpg","mime":"image/jpeg","size":16.61,"url":"/uploads/9c1da7c5f0314c36ae1977c5b6caecab.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T14:27:51.580Z","updated_at":"2020-03-15T14:27:51.580Z"}],"thumbnail":{"id":226,"name":"6.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"240695414ed64690878e38d7494d4592","ext":".jpg","mime":"image/jpeg","size":7.04,"url":"/uploads/240695414ed64690878e38d7494d4592.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T14:27:51.539Z","updated_at":"2020-03-15T14:27:51.539Z"}}]},{"id":5,"name":"Computers & Technologies","slug":"computers-and-technologies","description":null,"created_at":"2020-03-14T10:26:11.462Z","updated_at":"2020-03-14T10:26:11.462Z","products":[{"id":5,"title":"Xbox One Wireless Controller Black Color","is_featured":false,"is_hot":true,"price":55.99,"sale_price":null,"vendor":"Global Office","review":5,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":false,"created_at":"2020-03-15T06:02:06.677Z","updated_at":"2020-03-15T06:02:06.677Z","variants":[],"images":[{"id":19,"name":"5a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"1a15c64eb31a4bc2bbeff1961535519c","ext":".jpg","mime":"image/jpeg","size":30.89,"url":"/uploads/1a15c64eb31a4bc2bbeff1961535519c.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:02:06.726Z","updated_at":"2020-03-15T06:02:06.726Z"},{"id":20,"name":"5b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"bb6866b289d949338bf655c7351f9df8","ext":".jpg","mime":"image/jpeg","size":24.88,"url":"/uploads/bb6866b289d949338bf655c7351f9df8.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:02:06.739Z","updated_at":"2020-03-15T06:02:06.739Z"},{"id":21,"name":"5c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"d3a3d44ea16e439c9ff426a90e60acd2","ext":".jpg","mime":"image/jpeg","size":21.5,"url":"/uploads/d3a3d44ea16e439c9ff426a90e60acd2.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:02:06.748Z","updated_at":"2020-03-15T06:02:06.748Z"},{"id":22,"name":"5d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"faa25ed3c1fd4ba3a904b2b6dd8bdc87","ext":".jpg","mime":"image/jpeg","size":39.19,"url":"/uploads/faa25ed3c1fd4ba3a904b2b6dd8bdc87.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:02:06.765Z","updated_at":"2020-03-15T06:02:06.765Z"}],"thumbnail":{"id":18,"name":"5a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"8e2e4eff27414c719203df4ea88e68be","ext":".jpg","mime":"image/jpeg","size":30.89,"url":"/uploads/8e2e4eff27414c719203df4ea88e68be.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:02:06.710Z","updated_at":"2020-03-15T06:02:06.710Z"}},{"id":7,"title":"Sound Intone I65 Earphone White Version","is_featured":false,"is_hot":false,"price":106.96,"sale_price":100.99,"vendor":"Youngshop","review":5,"is_out_of_stock":false,"depot":80,"inventory":90,"is_active":true,"is_sale":true,"created_at":"2020-03-15T06:12:37.749Z","updated_at":"2020-04-14T10:45:51.530Z","variants":[],"images":[{"id":27,"name":"7a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"e98492a0c2b24ae5892641009bf21056","ext":".jpg","mime":"image/jpeg","size":35.46,"url":"/uploads/e98492a0c2b24ae5892641009bf21056.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:12:37.787Z","updated_at":"2020-03-15T06:12:37.787Z"},{"id":28,"name":"7b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"55fbf669c1804ea994ace81b7aa58896","ext":".jpg","mime":"image/jpeg","size":44.24,"url":"/uploads/55fbf669c1804ea994ace81b7aa58896.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:12:37.797Z","updated_at":"2020-03-15T06:12:37.797Z"},{"id":29,"name":"7c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"b6bf4ec3c620428ca2c3876d31b28252","ext":".jpg","mime":"image/jpeg","size":35.55,"url":"/uploads/b6bf4ec3c620428ca2c3876d31b28252.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:12:37.807Z","updated_at":"2020-03-15T06:12:37.807Z"},{"id":30,"name":"7d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"dcdfd21d3ea44a6888d983d21852d961","ext":".jpg","mime":"image/jpeg","size":30.8,"url":"/uploads/dcdfd21d3ea44a6888d983d21852d961.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:12:37.816Z","updated_at":"2020-03-15T06:12:37.816Z"}],"thumbnail":{"id":26,"name":"6.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"b097fdfb8b9d40fca83de9180de5a7ab","ext":".jpg","mime":"image/jpeg","size":7.03,"url":"/uploads/b097fdfb8b9d40fca83de9180de5a7ab.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:12:37.775Z","updated_at":"2020-03-15T06:12:37.775Z"}},{"id":16,"title":"ASUS Chromebook Flip – 10.2 Inch","is_featured":false,"is_hot":false,"price":332.38,"sale_price":null,"vendor":"Young Shop","review":4,"is_out_of_stock":false,"depot":60,"inventory":80,"is_active":true,"is_sale":false,"created_at":"2020-03-15T06:40:02.790Z","updated_at":"2020-03-15T06:40:02.790Z","variants":[],"images":[{"id":70,"name":"16a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"4ef330f9bd3a4bb1ba9c2b23f70772df","ext":".jpg","mime":"image/jpeg","size":29.52,"url":"/uploads/4ef330f9bd3a4bb1ba9c2b23f70772df.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:40:02.823Z","updated_at":"2020-03-15T06:40:02.823Z"},{"id":71,"name":"16b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"1eff5ff12c48444dac8ba28ac12c0790","ext":".jpg","mime":"image/jpeg","size":14.26,"url":"/uploads/1eff5ff12c48444dac8ba28ac12c0790.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:40:02.833Z","updated_at":"2020-03-15T06:40:02.833Z"},{"id":72,"name":"16c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"a25ae077a45444528b12b13c7c7c2b1e","ext":".jpg","mime":"image/jpeg","size":13.58,"url":"/uploads/a25ae077a45444528b12b13c7c7c2b1e.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:40:02.843Z","updated_at":"2020-03-15T06:40:02.843Z"},{"id":73,"name":"16d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"f71d017b2b3d46ebbacec60d7b63f9ff","ext":".jpg","mime":"image/jpeg","size":14.61,"url":"/uploads/f71d017b2b3d46ebbacec60d7b63f9ff.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:40:02.852Z","updated_at":"2020-03-15T06:40:02.852Z"}],"thumbnail":{"id":69,"name":"15.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"6b2dca15a8f14f3f9b4f95cd6b3a6711","ext":".jpg","mime":"image/jpeg","size":6,"url":"/uploads/6b2dca15a8f14f3f9b4f95cd6b3a6711.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:40:02.813Z","updated_at":"2020-03-15T06:40:02.813Z"}},{"id":17,"title":"Apple Macbook Retina Display 12","is_featured":false,"is_hot":false,"price":1362.99,"sale_price":1200,"vendor":"Young Shop","review":4,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":true,"created_at":"2020-03-15T06:42:37.444Z","updated_at":"2020-03-18T12:54:14.665Z","variants":[],"images":[{"id":75,"name":"17a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"2c1147dfe0994cdb980fcd6f216ac3a9","ext":".jpg","mime":"image/jpeg","size":47.41,"url":"/uploads/2c1147dfe0994cdb980fcd6f216ac3a9.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:42:37.506Z","updated_at":"2020-03-15T06:42:37.506Z"},{"id":76,"name":"17b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"f403deba2d2f4137bce66171471e896b","ext":".jpg","mime":"image/jpeg","size":23.48,"url":"/uploads/f403deba2d2f4137bce66171471e896b.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:42:37.521Z","updated_at":"2020-03-15T06:42:37.521Z"},{"id":77,"name":"17c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"c80df855abc949908f9dfb9bf5b96de9","ext":".jpg","mime":"image/jpeg","size":14.98,"url":"/uploads/c80df855abc949908f9dfb9bf5b96de9.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:42:37.530Z","updated_at":"2020-03-15T06:42:37.530Z"},{"id":78,"name":"17d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"1df60e151e7940059d2949c313bccb84","ext":".jpg","mime":"image/jpeg","size":5.54,"url":"/uploads/1df60e151e7940059d2949c313bccb84.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:42:37.539Z","updated_at":"2020-03-15T06:42:37.539Z"}],"thumbnail":{"id":74,"name":"16.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"a85ac7daaa614747b209894c37a0bdbd","ext":".jpg","mime":"image/jpeg","size":7.59,"url":"/uploads/a85ac7daaa614747b209894c37a0bdbd.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:42:37.485Z","updated_at":"2020-03-15T06:42:37.485Z"}},{"id":18,"title":"Samsung UHD TV 24inch","is_featured":false,"is_hot":false,"price":599,"sale_price":null,"vendor":"Robert\'s Store","review":4,"is_out_of_stock":false,"depot":40,"inventory":60,"is_active":true,"is_sale":false,"created_at":"2020-03-15T06:44:46.172Z","updated_at":"2020-03-15T06:44:46.172Z","variants":[],"images":[{"id":80,"name":"18a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"2fa613328d4e4ef69fb36a281057da25","ext":".jpg","mime":"image/jpeg","size":72.3,"url":"/uploads/2fa613328d4e4ef69fb36a281057da25.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:44:46.202Z","updated_at":"2020-03-15T06:44:46.202Z"},{"id":81,"name":"18b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"298c7187ba2e4459a4427149fc1c77c5","ext":".jpg","mime":"image/jpeg","size":27.69,"url":"/uploads/298c7187ba2e4459a4427149fc1c77c5.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:44:46.211Z","updated_at":"2020-03-15T06:44:46.211Z"},{"id":82,"name":"18c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"ecdd5aa1e85146e5b7fe7b07b7fb84f1","ext":".jpg","mime":"image/jpeg","size":27.7,"url":"/uploads/ecdd5aa1e85146e5b7fe7b07b7fb84f1.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:44:46.219Z","updated_at":"2020-03-15T06:44:46.219Z"},{"id":83,"name":"18d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"bcd5916387a348d592994740de295881","ext":".jpg","mime":"image/jpeg","size":4.42,"url":"/uploads/bcd5916387a348d592994740de295881.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:44:46.227Z","updated_at":"2020-03-15T06:44:46.227Z"}],"thumbnail":{"id":79,"name":"18.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"a48664eaed094c769046b4128dd341e4","ext":".jpg","mime":"image/jpeg","size":11.29,"url":"/uploads/a48664eaed094c769046b4128dd341e4.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:44:46.192Z","updated_at":"2020-03-15T06:44:46.192Z"}},{"id":23,"title":"Amcrest Security Camera in White Color","is_featured":false,"is_hot":false,"price":62.99,"sale_price":45.9,"vendor":"Global Office","review":4,"is_out_of_stock":false,"depot":60,"inventory":80,"is_active":true,"is_sale":true,"created_at":"2020-03-15T07:00:52.871Z","updated_at":"2020-03-15T07:00:52.871Z","variants":[],"images":[{"id":103,"name":"24a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"4fcbfdb675614342a172da1be483724e","ext":".jpg","mime":"image/jpeg","size":38.76,"url":"/uploads/4fcbfdb675614342a172da1be483724e.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:00:52.919Z","updated_at":"2020-03-15T07:00:52.919Z"},{"id":104,"name":"24b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"ba0feb269ff041e9ba8489b63c0ad79d","ext":".jpg","mime":"image/jpeg","size":19.41,"url":"/uploads/ba0feb269ff041e9ba8489b63c0ad79d.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:00:52.927Z","updated_at":"2020-03-15T07:00:52.927Z"},{"id":105,"name":"24c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"7ed9a1fcc0814f78bf3ce9941fffcc5c","ext":".jpg","mime":"image/jpeg","size":20.22,"url":"/uploads/7ed9a1fcc0814f78bf3ce9941fffcc5c.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:00:52.935Z","updated_at":"2020-03-15T07:00:52.935Z"},{"id":106,"name":"24d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"48f249386e604cb69c56a6dfd893d364","ext":".jpg","mime":"image/jpeg","size":15.15,"url":"/uploads/48f249386e604cb69c56a6dfd893d364.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:00:52.943Z","updated_at":"2020-03-15T07:00:52.943Z"}],"thumbnail":{"id":102,"name":"22.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"bb783d18223044cca198d84a4e0e3191","ext":".jpg","mime":"image/jpeg","size":7.24,"url":"/uploads/bb783d18223044cca198d84a4e0e3191.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:00:52.903Z","updated_at":"2020-03-15T07:00:52.903Z"}},{"id":24,"title":"DJI Phantom 4 Quadcopter Camera","is_featured":false,"is_hot":false,"price":1207.15,"sale_price":945.9,"vendor":"Go Pro","review":5,"is_out_of_stock":false,"depot":65,"inventory":70,"is_active":true,"is_sale":true,"created_at":"2020-03-15T07:06:17.229Z","updated_at":"2020-03-15T07:06:17.229Z","variants":[],"images":[{"id":108,"name":"25a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"c7f00eff80d744a3b4fbc96918deabb1","ext":".jpg","mime":"image/jpeg","size":20.23,"url":"/uploads/c7f00eff80d744a3b4fbc96918deabb1.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:06:17.280Z","updated_at":"2020-03-15T07:06:17.280Z"},{"id":109,"name":"25b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"6215cedde8354803817b8d0b46446865","ext":".jpg","mime":"image/jpeg","size":7.75,"url":"/uploads/6215cedde8354803817b8d0b46446865.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:06:17.295Z","updated_at":"2020-03-15T07:06:17.295Z"},{"id":110,"name":"25c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"8b54c00b8f244b87b9179e402a7639b2","ext":".jpg","mime":"image/jpeg","size":6.46,"url":"/uploads/8b54c00b8f244b87b9179e402a7639b2.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:06:17.303Z","updated_at":"2020-03-15T07:06:17.303Z"},{"id":111,"name":"25d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"de6cc09f104f456b89c255b450655089","ext":".jpg","mime":"image/jpeg","size":16.18,"url":"/uploads/de6cc09f104f456b89c255b450655089.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:06:17.310Z","updated_at":"2020-03-15T07:06:17.310Z"}],"thumbnail":{"id":107,"name":"23.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"f5e300388365470aae6f894f4f0f5c61","ext":".jpg","mime":"image/jpeg","size":3.74,"url":"/uploads/f5e300388365470aae6f894f4f0f5c61.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T07:06:17.262Z","updated_at":"2020-03-15T07:06:17.262Z"}},{"id":31,"title":"Samsung Gear VR Virtual Reality Headset","is_featured":false,"is_hot":false,"price":320,"sale_price":null,"vendor":"Global Office","review":1,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":false,"created_at":"2020-03-15T09:05:44.603Z","updated_at":"2020-03-15T09:05:44.603Z","variants":[],"images":[{"id":139,"name":"32a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"30b225eb781448bb96b4eb0e585de1ba","ext":".jpg","mime":"image/jpeg","size":33.87,"url":"/uploads/30b225eb781448bb96b4eb0e585de1ba.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:05:44.630Z","updated_at":"2020-03-15T09:05:44.630Z"},{"id":140,"name":"32b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"d74002e783b441c4ae0bfd35b16a56fc","ext":".jpg","mime":"image/jpeg","size":12.9,"url":"/uploads/d74002e783b441c4ae0bfd35b16a56fc.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:05:44.637Z","updated_at":"2020-03-15T09:05:44.637Z"},{"id":141,"name":"32c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"f3f8a64c9ebd4035aa753650a4ed48d0","ext":".jpg","mime":"image/jpeg","size":14.25,"url":"/uploads/f3f8a64c9ebd4035aa753650a4ed48d0.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:05:44.650Z","updated_at":"2020-03-15T09:05:44.650Z"},{"id":142,"name":"32d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"99e3308b7d1a4bbf814ce67329001c39","ext":".jpg","mime":"image/jpeg","size":11.95,"url":"/uploads/99e3308b7d1a4bbf814ce67329001c39.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:05:44.658Z","updated_at":"2020-03-15T09:05:44.658Z"}],"thumbnail":{"id":138,"name":"4.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"27c756b633404bf6bc734557a90e3baa","ext":".jpg","mime":"image/jpeg","size":6.52,"url":"/uploads/27c756b633404bf6bc734557a90e3baa.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:05:44.620Z","updated_at":"2020-03-15T09:05:44.620Z"}},{"id":42,"title":"Gopro Hero 4 Sliver Wireless, 4k HD","is_featured":false,"is_hot":false,"price":510,"sale_price":500.99,"vendor":"Go Pro","review":4,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":true,"created_at":"2020-03-15T09:49:14.357Z","updated_at":"2020-03-15T09:49:14.357Z","variants":[],"images":[{"id":164,"name":"18.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"c81b5f934b8842a19f80eb94b66dbacf","ext":".jpg","mime":"image/jpeg","size":6.09,"url":"/uploads/c81b5f934b8842a19f80eb94b66dbacf.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:49:14.387Z","updated_at":"2020-03-15T09:49:14.387Z"}],"thumbnail":{"id":163,"name":"18.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"3a99112514724b59a18c48fa6a3569d3","ext":".jpg","mime":"image/jpeg","size":6.09,"url":"/uploads/3a99112514724b59a18c48fa6a3569d3.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:49:14.376Z","updated_at":"2020-03-15T09:49:14.376Z"}},{"id":61,"title":"Apple MacBook Air Retina 13.3-Inch Laptop","is_featured":false,"is_hot":false,"price":1120,"sale_price":1020.99,"vendor":"Global Office","review":4,"is_out_of_stock":false,"depot":60,"inventory":70,"is_active":true,"is_sale":true,"created_at":"2020-03-18T04:29:19.122Z","updated_at":"2020-03-18T04:29:19.122Z","variants":[],"images":[{"id":240,"name":"3.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"6323ba741e89407abde3c2b813a7b958","ext":".jpg","mime":"image/jpeg","size":7.53,"url":"/uploads/6323ba741e89407abde3c2b813a7b958.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T04:29:19.153Z","updated_at":"2020-03-18T04:29:19.153Z"}],"thumbnail":{"id":239,"name":"3.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"a4dc298d307e401c9f829d269a9a97a4","ext":".jpg","mime":"image/jpeg","size":7.53,"url":"/uploads/a4dc298d307e401c9f829d269a9a97a4.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T04:29:19.140Z","updated_at":"2020-03-18T04:29:19.140Z"}},{"id":66,"title":"Apple MacBook Air Retina 12-Inch Laptop","is_featured":false,"is_hot":false,"price":942.99,"sale_price":null,"vendor":"Global Office","review":4,"is_out_of_stock":false,"depot":50,"inventory":60,"is_active":true,"is_sale":false,"created_at":"2020-03-18T05:37:01.843Z","updated_at":"2020-03-18T05:37:01.843Z","variants":[],"images":[{"id":259,"name":"67a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"6dc62d368b0a4a77803c7abd30ecc540","ext":".jpg","mime":"image/jpeg","size":61.32,"url":"/uploads/6dc62d368b0a4a77803c7abd30ecc540.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:37:01.873Z","updated_at":"2020-03-18T05:37:01.873Z"},{"id":260,"name":"67b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"69dd0520caba4f14b8630e4db8db4e86","ext":".jpg","mime":"image/jpeg","size":4.22,"url":"/uploads/69dd0520caba4f14b8630e4db8db4e86.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:37:01.882Z","updated_at":"2020-03-18T05:37:01.882Z"},{"id":261,"name":"67c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"161c3e2cf6b6407aa96e0a7570358146","ext":".jpg","mime":"image/jpeg","size":22.04,"url":"/uploads/161c3e2cf6b6407aa96e0a7570358146.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:37:01.890Z","updated_at":"2020-03-18T05:37:01.890Z"},{"id":262,"name":"67d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"b4cfc0a8e6f64b96b3f6f5ccf6eac770","ext":".jpg","mime":"image/jpeg","size":4.66,"url":"/uploads/b4cfc0a8e6f64b96b3f6f5ccf6eac770.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:37:01.898Z","updated_at":"2020-03-18T05:37:01.898Z"}],"thumbnail":{"id":258,"name":"12.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"b8c8108591324725abc436cc899df220","ext":".jpg","mime":"image/jpeg","size":7.56,"url":"/uploads/b8c8108591324725abc436cc899df220.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:37:01.862Z","updated_at":"2020-03-18T05:37:01.862Z"}},{"id":72,"title":"HP Chromebook CB 10014 Desktop","is_featured":false,"is_hot":false,"price":820.99,"sale_price":null,"vendor":"Global Office","review":4,"is_out_of_stock":false,"depot":60,"inventory":70,"is_active":true,"is_sale":false,"created_at":"2020-03-18T05:49:55.032Z","updated_at":"2020-03-18T05:49:55.032Z","variants":[],"images":[{"id":287,"name":"73a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"a71fa14e97ef4317ae248c78247720cf","ext":".jpg","mime":"image/jpeg","size":25.14,"url":"/uploads/a71fa14e97ef4317ae248c78247720cf.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:49:55.087Z","updated_at":"2020-03-18T05:49:55.087Z"},{"id":288,"name":"73b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"280d9fae269246568406ef5aac860795","ext":".jpg","mime":"image/jpeg","size":27.11,"url":"/uploads/280d9fae269246568406ef5aac860795.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:49:55.099Z","updated_at":"2020-03-18T05:49:55.099Z"},{"id":289,"name":"73c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"33a5e8a71e7841519f62ac215b3a3a50","ext":".jpg","mime":"image/jpeg","size":7.13,"url":"/uploads/33a5e8a71e7841519f62ac215b3a3a50.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:49:55.119Z","updated_at":"2020-03-18T05:49:55.119Z"},{"id":290,"name":"73d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"ed02ef12245647ecbae125ad1d2c6049","ext":".jpg","mime":"image/jpeg","size":6.4,"url":"/uploads/ed02ef12245647ecbae125ad1d2c6049.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:49:55.131Z","updated_at":"2020-03-18T05:49:55.131Z"}],"thumbnail":{"id":286,"name":"18.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"f73d332d3a074a44af99b073c922b24f","ext":".jpg","mime":"image/jpeg","size":4.11,"url":"/uploads/f73d332d3a074a44af99b073c922b24f.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:49:55.070Z","updated_at":"2020-03-18T05:49:55.070Z"}}]},{"id":6,"name":"Jewelry & Watches","slug":"jewelry-and-watches","description":null,"created_at":"2020-03-14T10:26:39.769Z","updated_at":"2020-03-14T10:26:39.769Z","products":[{"id":14,"title":"MVMTH Classical Leather Watch In Black","is_featured":false,"is_hot":false,"price":62.99,"sale_price":57.99,"vendor":"Young Shop","review":5,"is_out_of_stock":false,"depot":60,"inventory":70,"is_active":true,"is_sale":true,"created_at":"2020-03-15T06:34:26.192Z","updated_at":"2020-03-15T06:34:26.192Z","variants":[],"images":[{"id":60,"name":"14a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"3ac851d95c86433b8fcc50600c917036","ext":".jpg","mime":"image/jpeg","size":37.78,"url":"/uploads/3ac851d95c86433b8fcc50600c917036.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:34:26.237Z","updated_at":"2020-03-15T06:34:26.237Z"},{"id":61,"name":"14b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"ebe0db165640431d9c8fd683f3258663","ext":".jpg","mime":"image/jpeg","size":22.93,"url":"/uploads/ebe0db165640431d9c8fd683f3258663.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:34:26.244Z","updated_at":"2020-03-15T06:34:26.244Z"},{"id":62,"name":"14c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"3f385d0f210e4ee88ed91de38d36470e","ext":".jpg","mime":"image/jpeg","size":16.68,"url":"/uploads/3f385d0f210e4ee88ed91de38d36470e.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:34:26.262Z","updated_at":"2020-03-15T06:34:26.262Z"}],"thumbnail":{"id":59,"name":"13.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"5a88e8516a6e44cb86ba41516dca0d56","ext":".jpg","mime":"image/jpeg","size":7.62,"url":"/uploads/5a88e8516a6e44cb86ba41516dca0d56.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:34:26.226Z","updated_at":"2020-03-15T06:34:26.226Z"}}]},{"id":7,"name":"Phones & Accessories","slug":"phones-and-accessories","description":null,"created_at":"2020-03-14T10:26:54.185Z","updated_at":"2020-03-14T10:26:54.185Z","products":[{"id":1,"title":"Apple iPhone Retina 6s Plus 32GB","is_featured":null,"is_hot":null,"price":640.5,"sale_price":null,"vendor":"ROBERT’S STORE","review":5,"is_out_of_stock":null,"depot":80,"inventory":100,"is_active":true,"is_sale":false,"created_at":"2020-03-14T10:34:56.811Z","updated_at":"2020-03-14T10:39:05.919Z","variants":[],"images":[{"id":1,"name":"1a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"114071762b454d09aca0e0a95ad3885d","ext":".jpg","mime":"image/jpeg","size":8.78,"url":"/uploads/114071762b454d09aca0e0a95ad3885d.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-14T10:39:17.429Z","updated_at":"2020-03-14T10:39:17.429Z"},{"id":2,"name":"1c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"f73c23a548694e8fb0435aa0644cc570","ext":".jpg","mime":"image/jpeg","size":10.88,"url":"/uploads/f73c23a548694e8fb0435aa0644cc570.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-14T10:39:17.444Z","updated_at":"2020-03-14T10:39:17.444Z"},{"id":3,"name":"1b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"af86c8d6136b4bb8805354995c3e6ed8","ext":".jpg","mime":"image/jpeg","size":4.5,"url":"/uploads/af86c8d6136b4bb8805354995c3e6ed8.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-14T10:39:17.458Z","updated_at":"2020-03-14T10:39:17.458Z"}],"thumbnail":{"id":4,"name":"1a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"5a1586c7d04646fda4575e5af5c16c30","ext":".jpg","mime":"image/jpeg","size":8.78,"url":"/uploads/5a1586c7d04646fda4575e5af5c16c30.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-14T10:41:20.970Z","updated_at":"2020-03-14T10:41:20.970Z"}},{"id":2,"title":"Apple iPhone Retina 6s Plus 64GB","is_featured":false,"is_hot":false,"price":1150,"sale_price":null,"vendor":"Young Shop","review":4,"is_out_of_stock":false,"depot":80,"inventory":100,"is_active":true,"is_sale":false,"created_at":"2020-03-15T05:47:28.790Z","updated_at":"2020-03-15T06:03:15.417Z","variants":[],"images":[{"id":6,"name":"1a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"0e9b9750228b421aafe324f6f9b36304","ext":".jpg","mime":"image/jpeg","size":8.78,"url":"/uploads/0e9b9750228b421aafe324f6f9b36304.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T05:47:28.833Z","updated_at":"2020-03-15T05:47:28.833Z"},{"id":7,"name":"1b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"99cdb1e5a2874365bab8f49ea1fc7070","ext":".jpg","mime":"image/jpeg","size":4.5,"url":"/uploads/99cdb1e5a2874365bab8f49ea1fc7070.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T05:47:28.857Z","updated_at":"2020-03-15T05:47:28.857Z"},{"id":8,"name":"1c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"2ed1134b99b146feb6245f8e07201ec8","ext":".jpg","mime":"image/jpeg","size":10.88,"url":"/uploads/2ed1134b99b146feb6245f8e07201ec8.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T05:47:28.869Z","updated_at":"2020-03-15T05:47:28.869Z"}],"thumbnail":{"id":5,"name":"1.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"4c07bca3f13444688823a1c099410884","ext":".jpg","mime":"image/jpeg","size":9.04,"url":"/uploads/4c07bca3f13444688823a1c099410884.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T05:47:28.819Z","updated_at":"2020-03-15T05:47:28.819Z"}},{"id":15,"title":"Beat Spill 2.0 Wireless Speaker – White","is_featured":false,"is_hot":false,"price":62.99,"sale_price":57.99,"vendor":"Global Office","review":5,"is_out_of_stock":false,"depot":50,"inventory":80,"is_active":true,"is_sale":true,"created_at":"2020-03-15T06:37:17.824Z","updated_at":"2020-03-15T06:37:17.824Z","variants":[],"images":[{"id":64,"name":"1.png","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"bbb75430607f4d43ad26e4467ebdc524","ext":".png","mime":"image/png","size":2.55,"url":"/uploads/bbb75430607f4d43ad26e4467ebdc524.png","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:37:17.869Z","updated_at":"2020-03-15T06:37:17.869Z"},{"id":65,"name":"2.png","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"8df2b7bc798c43e3a56ba6b59c5be53a","ext":".png","mime":"image/png","size":2.55,"url":"/uploads/8df2b7bc798c43e3a56ba6b59c5be53a.png","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:37:17.878Z","updated_at":"2020-03-15T06:37:17.878Z"},{"id":66,"name":"4.png","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"88eb11d6018e498aa7f97d41d4a434d2","ext":".png","mime":"image/png","size":2.55,"url":"/uploads/88eb11d6018e498aa7f97d41d4a434d2.png","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:37:17.887Z","updated_at":"2020-03-15T06:37:17.887Z"},{"id":67,"name":"5.png","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"9e94caa14f78425aaaaa699d8412a8cb","ext":".png","mime":"image/png","size":2.55,"url":"/uploads/9e94caa14f78425aaaaa699d8412a8cb.png","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:37:17.896Z","updated_at":"2020-03-15T06:37:17.896Z"},{"id":68,"name":"3.png","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"35afd31625dc46a48050b0f918897eaf","ext":".png","mime":"image/png","size":2.55,"url":"/uploads/35afd31625dc46a48050b0f918897eaf.png","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:37:17.912Z","updated_at":"2020-03-15T06:37:17.912Z"}],"thumbnail":{"id":63,"name":"14.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"3ca33b80916943f49a5af0a84ab2ef15","ext":".jpg","mime":"image/jpeg","size":6.24,"url":"/uploads/3ca33b80916943f49a5af0a84ab2ef15.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:37:17.857Z","updated_at":"2020-03-15T06:37:17.857Z"}},{"id":22,"title":"Edifier Powered Bookshelf Speakers","is_featured":false,"is_hot":false,"price":96,"sale_price":85,"vendor":"Young Shop","review":5,"is_out_of_stock":false,"depot":50,"inventory":65,"is_active":true,"is_sale":true,"created_at":"2020-03-15T06:57:47.163Z","updated_at":"2020-03-15T06:57:47.163Z","variants":[],"images":[{"id":98,"name":"22a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"8781ca71d80847979441fe7dc8b94fa9","ext":".jpg","mime":"image/jpeg","size":68.23,"url":"/uploads/8781ca71d80847979441fe7dc8b94fa9.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:57:47.213Z","updated_at":"2020-03-15T06:57:47.213Z"},{"id":99,"name":"22b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"bde411ee582c4c86812e06dd5252c188","ext":".jpg","mime":"image/jpeg","size":24.46,"url":"/uploads/bde411ee582c4c86812e06dd5252c188.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:57:47.230Z","updated_at":"2020-03-15T06:57:47.230Z"},{"id":100,"name":"22c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"f2a178431d59495791d2030dc6900304","ext":".jpg","mime":"image/jpeg","size":38.11,"url":"/uploads/f2a178431d59495791d2030dc6900304.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:57:47.237Z","updated_at":"2020-03-15T06:57:47.237Z"},{"id":101,"name":"22d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"2bb3160bbb234b93b2210ff505090e87","ext":".jpg","mime":"image/jpeg","size":18.81,"url":"/uploads/2bb3160bbb234b93b2210ff505090e87.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:57:47.245Z","updated_at":"2020-03-15T06:57:47.245Z"}],"thumbnail":{"id":97,"name":"21.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"51a0ff71f98649af8b17284ed14f955d","ext":".jpg","mime":"image/jpeg","size":10,"url":"/uploads/51a0ff71f98649af8b17284ed14f955d.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:57:47.203Z","updated_at":"2020-03-15T06:57:47.203Z"}},{"id":43,"title":"Nikon Coolpix 24 Megapixel Camera","is_featured":false,"is_hot":false,"price":393.38,"sale_price":null,"vendor":"Global Office","review":5,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":false,"created_at":"2020-03-15T09:51:05.087Z","updated_at":"2020-03-15T09:51:05.087Z","variants":[],"images":[{"id":166,"name":"44a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"c8ff3afb2eef49b99c8abc0f1bbf3563","ext":".jpg","mime":"image/jpeg","size":41.72,"url":"/uploads/c8ff3afb2eef49b99c8abc0f1bbf3563.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:51:05.119Z","updated_at":"2020-03-15T09:51:05.119Z"},{"id":167,"name":"44b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"56596cdb7d034c3e99ff9daf3c464128","ext":".jpg","mime":"image/jpeg","size":12.31,"url":"/uploads/56596cdb7d034c3e99ff9daf3c464128.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:51:05.129Z","updated_at":"2020-03-15T09:51:05.129Z"},{"id":168,"name":"44c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"92d14dc17dbe44169c3daa3c6f8bddd0","ext":".jpg","mime":"image/jpeg","size":13.54,"url":"/uploads/92d14dc17dbe44169c3daa3c6f8bddd0.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:51:05.139Z","updated_at":"2020-03-15T09:51:05.139Z"},{"id":169,"name":"44d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"d9fdd2a79c1540b68ae3ee84d9523a70","ext":".jpg","mime":"image/jpeg","size":13.63,"url":"/uploads/d9fdd2a79c1540b68ae3ee84d9523a70.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:51:05.147Z","updated_at":"2020-03-15T09:51:05.147Z"}],"thumbnail":{"id":165,"name":"19.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"d8125ce8ae8b46cb926e01daae0c0fb2","ext":".jpg","mime":"image/jpeg","size":6.5,"url":"/uploads/d8125ce8ae8b46cb926e01daae0c0fb2.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:51:05.108Z","updated_at":"2020-03-15T09:51:05.108Z"}},{"id":44,"title":"Sony HD 1080, 13.5MP, White Version","is_featured":false,"is_hot":false,"price":760,"sale_price":625,"vendor":"Young Shop","review":5,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":true,"created_at":"2020-03-15T09:55:33.399Z","updated_at":"2020-03-15T09:55:33.399Z","variants":[],"images":[{"id":171,"name":"45a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"6dab2ac788b04a5cbca7400ec03d8a38","ext":".jpg","mime":"image/jpeg","size":28.26,"url":"/uploads/6dab2ac788b04a5cbca7400ec03d8a38.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:55:33.428Z","updated_at":"2020-03-15T09:55:33.428Z"},{"id":172,"name":"45b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"1c026df89da0490bbe2a7afc5a99195a","ext":".jpg","mime":"image/jpeg","size":9.88,"url":"/uploads/1c026df89da0490bbe2a7afc5a99195a.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:55:33.438Z","updated_at":"2020-03-15T09:55:33.438Z"},{"id":173,"name":"45c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"4c1c99e28c794b26a047a0c87a679f98","ext":".jpg","mime":"image/jpeg","size":7.65,"url":"/uploads/4c1c99e28c794b26a047a0c87a679f98.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:55:33.446Z","updated_at":"2020-03-15T09:55:33.446Z"},{"id":174,"name":"45d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"0de96474e26645699609477fdd64b21e","ext":".jpg","mime":"image/jpeg","size":5.76,"url":"/uploads/0de96474e26645699609477fdd64b21e.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:55:33.455Z","updated_at":"2020-03-15T09:55:33.455Z"}],"thumbnail":{"id":170,"name":"20.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"d8789adf571d46f19ce9065da0cf64a3","ext":".jpg","mime":"image/jpeg","size":3.72,"url":"/uploads/d8789adf571d46f19ce9065da0cf64a3.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:55:33.416Z","updated_at":"2020-03-15T09:55:33.416Z"}},{"id":59,"title":"Apple iPhone X 256GB T-Mobile – Black","is_featured":false,"is_hot":false,"price":1893,"sale_price":1389.99,"vendor":"Global Store","review":5,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":true,"created_at":"2020-03-15T18:22:07.656Z","updated_at":"2020-03-15T18:22:07.656Z","variants":[],"images":[{"id":232,"name":"1a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"addf8765d842420f8ad5f31c9cc6049c","ext":".jpg","mime":"image/jpeg","size":8.78,"url":"/uploads/addf8765d842420f8ad5f31c9cc6049c.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T18:22:07.688Z","updated_at":"2020-03-15T18:22:07.688Z"},{"id":233,"name":"1b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"91f9481dda1b43059807e01c4d3d0831","ext":".jpg","mime":"image/jpeg","size":4.5,"url":"/uploads/91f9481dda1b43059807e01c4d3d0831.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T18:22:07.697Z","updated_at":"2020-03-15T18:22:07.697Z"},{"id":234,"name":"1c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"faeb5485d91a4772a0215d19f234a12e","ext":".jpg","mime":"image/jpeg","size":10.88,"url":"/uploads/faeb5485d91a4772a0215d19f234a12e.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T18:22:07.708Z","updated_at":"2020-03-15T18:22:07.708Z"}],"thumbnail":{"id":231,"name":"1.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"b9afa9cf7f8c4ba6a6564db68f2ce90f","ext":".jpg","mime":"image/jpeg","size":7.35,"url":"/uploads/b9afa9cf7f8c4ba6a6564db68f2ce90f.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T18:22:07.676Z","updated_at":"2020-03-15T18:22:07.676Z"}},{"id":60,"title":"Apple iPhone 7 Plus 128 GB – Red Color","is_featured":false,"is_hot":false,"price":893,"sale_price":820.99,"vendor":"Global Office","review":4,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":true,"created_at":"2020-03-18T04:27:45.620Z","updated_at":"2020-03-18T04:27:45.620Z","variants":[],"images":[{"id":236,"name":"1a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"8683d4e9c40f4c3bb003123ad3b3233a","ext":".jpg","mime":"image/jpeg","size":8.78,"url":"/uploads/8683d4e9c40f4c3bb003123ad3b3233a.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T04:27:45.663Z","updated_at":"2020-03-18T04:27:45.663Z"},{"id":237,"name":"1b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"ef8b92ddea1649d7a708b82b94e1547d","ext":".jpg","mime":"image/jpeg","size":4.5,"url":"/uploads/ef8b92ddea1649d7a708b82b94e1547d.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T04:27:45.676Z","updated_at":"2020-03-18T04:27:45.676Z"},{"id":238,"name":"1c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"7c4bc2eb18aa467bb5ac730b51a1ca5b","ext":".jpg","mime":"image/jpeg","size":10.88,"url":"/uploads/7c4bc2eb18aa467bb5ac730b51a1ca5b.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T04:27:45.688Z","updated_at":"2020-03-18T04:27:45.688Z"}],"thumbnail":{"id":235,"name":"2.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"490bd709c0be4545b29121b244ff4516","ext":".jpg","mime":"image/jpeg","size":6.91,"url":"/uploads/490bd709c0be4545b29121b244ff4516.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T04:27:45.648Z","updated_at":"2020-03-18T04:27:45.648Z"}},{"id":63,"title":"Samsung Gallaxy A8 8GB Ram – Sliver Version","is_featured":false,"is_hot":false,"price":592,"sale_price":542.99,"vendor":"Global Office","review":5,"is_out_of_stock":false,"depot":80,"inventory":90,"is_active":true,"is_sale":true,"created_at":"2020-03-18T04:32:53.963Z","updated_at":"2020-03-18T04:32:53.963Z","variants":[],"images":[{"id":244,"name":"64a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"708ee0dd258046cb97c11527cf61e848","ext":".jpg","mime":"image/jpeg","size":59.99,"url":"/uploads/708ee0dd258046cb97c11527cf61e848.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T04:32:53.999Z","updated_at":"2020-03-18T04:32:53.999Z"},{"id":245,"name":"64b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"f617556918cf46498ed7c6318c48da72","ext":".jpg","mime":"image/jpeg","size":17.47,"url":"/uploads/f617556918cf46498ed7c6318c48da72.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T04:32:54.008Z","updated_at":"2020-03-18T04:32:54.008Z"},{"id":246,"name":"64c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"f95b63b1115f427db664f2f8095d14c7","ext":".jpg","mime":"image/jpeg","size":13.59,"url":"/uploads/f95b63b1115f427db664f2f8095d14c7.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T04:32:54.019Z","updated_at":"2020-03-18T04:32:54.019Z"},{"id":247,"name":"64d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"e3a28a9122ad46c0af352e4457aa4534","ext":".jpg","mime":"image/jpeg","size":27.08,"url":"/uploads/e3a28a9122ad46c0af352e4457aa4534.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T04:32:54.027Z","updated_at":"2020-03-18T04:32:54.027Z"}],"thumbnail":{"id":243,"name":"6.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"44f81c8d298740b5b900799971809fea","ext":".jpg","mime":"image/jpeg","size":8.74,"url":"/uploads/44f81c8d298740b5b900799971809fea.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T04:32:53.989Z","updated_at":"2020-03-18T04:32:53.989Z"}},{"id":64,"title":"Samsung Gallaxy A8 10GB Ram – Sliver Version","is_featured":false,"is_hot":false,"price":592,"sale_price":642.99,"vendor":"Global Office","review":4,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":true,"created_at":"2020-03-18T05:33:26.161Z","updated_at":"2020-03-18T05:33:26.161Z","variants":[],"images":[{"id":249,"name":"65a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"0a3c28219fc74e499f3256ad77d94a55","ext":".jpg","mime":"image/jpeg","size":59.99,"url":"/uploads/0a3c28219fc74e499f3256ad77d94a55.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:33:26.190Z","updated_at":"2020-03-18T05:33:26.190Z"},{"id":250,"name":"65b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"30bd54763a8a4867bd1d5c3d786e26b5","ext":".jpg","mime":"image/jpeg","size":17.47,"url":"/uploads/30bd54763a8a4867bd1d5c3d786e26b5.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:33:26.198Z","updated_at":"2020-03-18T05:33:26.198Z"},{"id":251,"name":"65c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"4a17b2711b3b422694466bc5492ab828","ext":".jpg","mime":"image/jpeg","size":13.59,"url":"/uploads/4a17b2711b3b422694466bc5492ab828.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:33:26.210Z","updated_at":"2020-03-18T05:33:26.210Z"},{"id":252,"name":"65d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"48971dad13ae4a4aa765ba6ae56951fa","ext":".jpg","mime":"image/jpeg","size":27.08,"url":"/uploads/48971dad13ae4a4aa765ba6ae56951fa.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:33:26.217Z","updated_at":"2020-03-18T05:33:26.217Z"}],"thumbnail":{"id":248,"name":"7.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"86c8fe9d6d6648e99a6015727d421e27","ext":".jpg","mime":"image/jpeg","size":11.72,"url":"/uploads/86c8fe9d6d6648e99a6015727d421e27.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:33:26.180Z","updated_at":"2020-03-18T05:33:26.180Z"}},{"id":65,"title":"Yuntab K107 10.1 Inch Quad Core CPU MT6580","is_featured":false,"is_hot":false,"price":99.99,"sale_price":null,"vendor":"Global Office","review":4,"is_out_of_stock":false,"depot":50,"inventory":60,"is_active":true,"is_sale":false,"created_at":"2020-03-18T05:35:13.796Z","updated_at":"2020-03-18T05:35:13.796Z","variants":[],"images":[{"id":254,"name":"66a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"bc0584820ba146688921e5df66ef0aa1","ext":".jpg","mime":"image/jpeg","size":79.12,"url":"/uploads/bc0584820ba146688921e5df66ef0aa1.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:35:13.827Z","updated_at":"2020-03-18T05:35:13.827Z"},{"id":255,"name":"66b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"1838261f7afd46149a41e7b322955b7f","ext":".jpg","mime":"image/jpeg","size":19.05,"url":"/uploads/1838261f7afd46149a41e7b322955b7f.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:35:13.835Z","updated_at":"2020-03-18T05:35:13.835Z"},{"id":256,"name":"66c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"62ed690a4d744c6fa2a0d62c02159252","ext":".jpg","mime":"image/jpeg","size":15.88,"url":"/uploads/62ed690a4d744c6fa2a0d62c02159252.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:35:13.843Z","updated_at":"2020-03-18T05:35:13.843Z"},{"id":257,"name":"66d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"ce7ad3a37f3f4acaadf8e5c9cf996792","ext":".jpg","mime":"image/jpeg","size":6.33,"url":"/uploads/ce7ad3a37f3f4acaadf8e5c9cf996792.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:35:13.851Z","updated_at":"2020-03-18T05:35:13.851Z"}],"thumbnail":{"id":253,"name":"7.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"7df00b4c32074b9c85b464f3dbbbab2e","ext":".jpg","mime":"image/jpeg","size":11.72,"url":"/uploads/7df00b4c32074b9c85b464f3dbbbab2e.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:35:13.815Z","updated_at":"2020-03-18T05:35:13.815Z"}},{"id":67,"title":"Bose Ear-Phone Bluetooth & Wireless","is_featured":false,"is_hot":false,"price":392.99,"sale_price":null,"vendor":"Young Shop","review":4,"is_out_of_stock":false,"depot":60,"inventory":70,"is_active":true,"is_sale":false,"created_at":"2020-03-18T05:38:55.759Z","updated_at":"2020-03-18T05:38:55.759Z","variants":[],"images":[{"id":264,"name":"68a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"20898b1b75ff4fcd9967794e6def5d28","ext":".jpg","mime":"image/jpeg","size":47.86,"url":"/uploads/20898b1b75ff4fcd9967794e6def5d28.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:38:55.790Z","updated_at":"2020-03-18T05:38:55.790Z"},{"id":265,"name":"68b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"7a5d1d5dfc4e4c7f98dd19899c4da4da","ext":".jpg","mime":"image/jpeg","size":8.04,"url":"/uploads/7a5d1d5dfc4e4c7f98dd19899c4da4da.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:38:55.800Z","updated_at":"2020-03-18T05:38:55.800Z"},{"id":266,"name":"68c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"05a1dc53fdf6423884f70e1693bb7451","ext":".jpg","mime":"image/jpeg","size":14.82,"url":"/uploads/05a1dc53fdf6423884f70e1693bb7451.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:38:55.813Z","updated_at":"2020-03-18T05:38:55.813Z"},{"id":267,"name":"68d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"e343e6de894e4428adc482f129f96d8f","ext":".jpg","mime":"image/jpeg","size":22.57,"url":"/uploads/e343e6de894e4428adc482f129f96d8f.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:38:55.837Z","updated_at":"2020-03-18T05:38:55.837Z"}],"thumbnail":{"id":348,"name":"68a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"9807d7efbaba430b9c90fc2aaa9ec175","ext":".jpg","mime":"image/jpeg","size":47.86,"url":"/uploads/9807d7efbaba430b9c90fc2aaa9ec175.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-28T12:09:41.868Z","updated_at":"2020-03-28T12:09:41.868Z"}},{"id":68,"title":"iQOS 2.4 Plus Kit, Holder & Chargers – White","is_featured":false,"is_hot":false,"price":42.99,"sale_price":null,"vendor":"Global Office","review":5,"is_out_of_stock":false,"depot":60,"inventory":70,"is_active":true,"is_sale":false,"created_at":"2020-03-18T05:40:48.214Z","updated_at":"2020-03-18T05:40:48.214Z","variants":[],"images":[{"id":269,"name":"69a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"2a2002069143470c8af739e13e8b8676","ext":".jpg","mime":"image/jpeg","size":23.33,"url":"/uploads/2a2002069143470c8af739e13e8b8676.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:40:48.243Z","updated_at":"2020-03-18T05:40:48.243Z"},{"id":270,"name":"69b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"5945f90deeef4fbbad27d6a3da5b50bc","ext":".jpg","mime":"image/jpeg","size":11.04,"url":"/uploads/5945f90deeef4fbbad27d6a3da5b50bc.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:40:48.251Z","updated_at":"2020-03-18T05:40:48.251Z"},{"id":271,"name":"69c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"ae6c8e5e004a4bec904dc500c0690581","ext":".jpg","mime":"image/jpeg","size":8.04,"url":"/uploads/ae6c8e5e004a4bec904dc500c0690581.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:40:48.259Z","updated_at":"2020-03-18T05:40:48.259Z"},{"id":272,"name":"69d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"e8a4f345960d47eb871a8e95f511b39f","ext":".jpg","mime":"image/jpeg","size":6.98,"url":"/uploads/e8a4f345960d47eb871a8e95f511b39f.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:40:48.267Z","updated_at":"2020-03-18T05:40:48.267Z"}],"thumbnail":{"id":268,"name":"13.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"59a5c64f4d9b4d1c804bd72a1c132d02","ext":".jpg","mime":"image/jpeg","size":4.17,"url":"/uploads/59a5c64f4d9b4d1c804bd72a1c132d02.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:40:48.232Z","updated_at":"2020-03-18T05:40:48.232Z"}},{"id":73,"title":"Acrylic Cover Case for iPhone X- (Clear)","is_featured":false,"is_hot":false,"price":49.99,"sale_price":null,"vendor":"Global Office","review":4,"is_out_of_stock":false,"depot":60,"inventory":70,"is_active":true,"is_sale":false,"created_at":"2020-03-18T05:51:16.881Z","updated_at":"2020-03-18T05:51:16.881Z","variants":[],"images":[{"id":292,"name":"74a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"9060cce18215425cb932cd04807858ea","ext":".jpg","mime":"image/jpeg","size":63,"url":"/uploads/9060cce18215425cb932cd04807858ea.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:51:16.944Z","updated_at":"2020-03-18T05:51:16.944Z"},{"id":293,"name":"74b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"164c1cb463f040caa92d0206c3dac9e6","ext":".jpg","mime":"image/jpeg","size":14.11,"url":"/uploads/164c1cb463f040caa92d0206c3dac9e6.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:51:16.957Z","updated_at":"2020-03-18T05:51:16.957Z"},{"id":294,"name":"74c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"9939d662151d49cf8703359034d3e39c","ext":".jpg","mime":"image/jpeg","size":21.53,"url":"/uploads/9939d662151d49cf8703359034d3e39c.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:51:16.967Z","updated_at":"2020-03-18T05:51:16.967Z"},{"id":295,"name":"74d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"0a20ecfcafde4344b5c84a593f6ee6ed","ext":".jpg","mime":"image/jpeg","size":17.9,"url":"/uploads/0a20ecfcafde4344b5c84a593f6ee6ed.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:51:16.977Z","updated_at":"2020-03-18T05:51:16.977Z"}],"thumbnail":{"id":291,"name":"19.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"2b1781baa5a045cd83c9d1ff5f4882e4","ext":".jpg","mime":"image/jpeg","size":8.87,"url":"/uploads/2b1781baa5a045cd83c9d1ff5f4882e4.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T05:51:16.924Z","updated_at":"2020-03-18T05:51:16.924Z"}},{"id":74,"title":"B&O Play Mini Bluetooth Speaker","is_featured":false,"is_hot":false,"price":49.99,"sale_price":null,"vendor":"Global Office","review":4,"is_out_of_stock":false,"depot":60,"inventory":70,"is_active":true,"is_sale":false,"created_at":"2020-03-18T06:40:57.514Z","updated_at":"2020-03-18T06:40:57.514Z","variants":[],"images":[{"id":297,"name":"75a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"69ba5505a5c847c5b7f31faaf08ffdea","ext":".jpg","mime":"image/jpeg","size":48.55,"url":"/uploads/69ba5505a5c847c5b7f31faaf08ffdea.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:40:57.561Z","updated_at":"2020-03-18T06:40:57.561Z"},{"id":298,"name":"75b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"a67765518e384aa484234ef0cc3cdbff","ext":".jpg","mime":"image/jpeg","size":32.75,"url":"/uploads/a67765518e384aa484234ef0cc3cdbff.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:40:57.570Z","updated_at":"2020-03-18T06:40:57.570Z"},{"id":299,"name":"75c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"2c4a27028a2d4d42914d81d28e1dbad3","ext":".jpg","mime":"image/jpeg","size":9.32,"url":"/uploads/2c4a27028a2d4d42914d81d28e1dbad3.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:40:57.580Z","updated_at":"2020-03-18T06:40:57.580Z"}],"thumbnail":{"id":296,"name":"20.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"3c3189b62d2041418a0ef3c7a12c0c9a","ext":".jpg","mime":"image/jpeg","size":5.4,"url":"/uploads/3c3189b62d2041418a0ef3c7a12c0c9a.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:40:57.537Z","updated_at":"2020-03-18T06:40:57.537Z"}},{"id":75,"title":"Beats Mini On Ear Bluetooth, Wireless Headphone","is_featured":false,"is_hot":false,"price":64.99,"sale_price":null,"vendor":"Global Office","review":5,"is_out_of_stock":false,"depot":60,"inventory":70,"is_active":true,"is_sale":false,"created_at":"2020-03-18T06:42:47.008Z","updated_at":"2020-03-18T06:42:47.008Z","variants":[],"images":[{"id":301,"name":"76a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"fac9d42ab10e40679fa480bab1f25248","ext":".jpg","mime":"image/jpeg","size":20.34,"url":"/uploads/fac9d42ab10e40679fa480bab1f25248.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:42:47.047Z","updated_at":"2020-03-18T06:42:47.047Z"},{"id":302,"name":"76b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"29c988a8fbf2411eb0acdd827c59a86a","ext":".jpg","mime":"image/jpeg","size":10.41,"url":"/uploads/29c988a8fbf2411eb0acdd827c59a86a.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:42:47.061Z","updated_at":"2020-03-18T06:42:47.061Z"},{"id":303,"name":"76c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"3a50a259ac0f42cda5affdad8a6ac8b4","ext":".jpg","mime":"image/jpeg","size":10.62,"url":"/uploads/3a50a259ac0f42cda5affdad8a6ac8b4.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:42:47.072Z","updated_at":"2020-03-18T06:42:47.072Z"},{"id":304,"name":"76d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"0375b08ca4be44f784ed68d9948fe9c2","ext":".jpg","mime":"image/jpeg","size":3.65,"url":"/uploads/0375b08ca4be44f784ed68d9948fe9c2.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:42:47.081Z","updated_at":"2020-03-18T06:42:47.081Z"}],"thumbnail":{"id":300,"name":"21.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"1ed1fb833fc942209c3f289c7cf3bb82","ext":".jpg","mime":"image/jpeg","size":2.83,"url":"/uploads/1ed1fb833fc942209c3f289c7cf3bb82.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:42:47.032Z","updated_at":"2020-03-18T06:42:47.032Z"}},{"id":76,"title":"Package 2 iClever Bootscube Mini Chargers","is_featured":false,"is_hot":false,"price":12.99,"sale_price":null,"vendor":"Global Office","review":5,"is_out_of_stock":false,"depot":60,"inventory":70,"is_active":true,"is_sale":false,"created_at":"2020-03-18T06:44:45.187Z","updated_at":"2020-03-18T06:44:45.187Z","variants":[],"images":[{"id":306,"name":"77a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"5e451ad3b3ed45949e657e7e78fd5372","ext":".jpg","mime":"image/jpeg","size":29.83,"url":"/uploads/5e451ad3b3ed45949e657e7e78fd5372.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:44:45.233Z","updated_at":"2020-03-18T06:44:45.233Z"},{"id":307,"name":"77b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"e5927c71f40d46a8a28eeb5533513bd0","ext":".jpg","mime":"image/jpeg","size":18.88,"url":"/uploads/e5927c71f40d46a8a28eeb5533513bd0.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:44:45.244Z","updated_at":"2020-03-18T06:44:45.244Z"},{"id":308,"name":"77c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"500cb33c1b3c412493a8586bb39d007d","ext":".jpg","mime":"image/jpeg","size":18.13,"url":"/uploads/500cb33c1b3c412493a8586bb39d007d.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:44:45.255Z","updated_at":"2020-03-18T06:44:45.255Z"},{"id":309,"name":"77d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"ee0cf9f8f9404293942532ef7a6b7488","ext":".jpg","mime":"image/jpeg","size":57.23,"url":"/uploads/ee0cf9f8f9404293942532ef7a6b7488.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:44:45.268Z","updated_at":"2020-03-18T06:44:45.268Z"}],"thumbnail":{"id":349,"name":"77a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"51721dacef7c4809af85dde08203a286","ext":".jpg","mime":"image/jpeg","size":29.83,"url":"/uploads/51721dacef7c4809af85dde08203a286.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-28T12:15:03.365Z","updated_at":"2020-03-28T12:15:03.365Z"}}]},{"id":8,"name":"Sport & Outdoor","slug":"sport-and-outdoor","description":null,"created_at":"2020-03-14T10:27:15.507Z","updated_at":"2020-03-14T10:27:15.507Z","products":[{"id":32,"title":"Anderson Composites – Custom Hood","is_featured":false,"is_hot":false,"price":1050.5,"sale_price":990.99,"vendor":"ROBERT’S STORE","review":2,"is_out_of_stock":false,"depot":60,"inventory":70,"is_active":true,"is_sale":true,"created_at":"2020-03-15T09:17:42.168Z","updated_at":"2020-03-18T12:47:03.124Z","variants":[],"images":[{"id":339,"name":"1.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"0272916ed6ed43d0807c545280ee2f32","ext":".jpg","mime":"image/jpeg","size":13.97,"url":"/uploads/0272916ed6ed43d0807c545280ee2f32.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T12:47:03.173Z","updated_at":"2020-03-18T12:47:03.173Z"}],"thumbnail":{"id":338,"name":"1.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"020a68b5cdfe455e88cdd01f7500ed92","ext":".jpg","mime":"image/jpeg","size":13.97,"url":"/uploads/020a68b5cdfe455e88cdd01f7500ed92.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T12:47:03.163Z","updated_at":"2020-03-18T12:47:03.163Z"}}]},{"id":9,"name":"Babies & Moms","slug":"babies-and-moms","description":null,"created_at":"2020-03-14T10:27:29.618Z","updated_at":"2020-03-14T10:27:29.618Z","products":[]},{"id":10,"name":"Books & Office","slug":"books-and-office","description":null,"created_at":"2020-03-14T10:27:46.112Z","updated_at":"2020-03-14T10:27:46.112Z","products":[{"id":6,"title":"Grand Slam Indoor Of Show Jumping Novel","is_featured":false,"is_hot":false,"price":41.99,"sale_price":32.99,"vendor":"Robert\'s Store","review":4,"is_out_of_stock":false,"depot":68,"inventory":90,"is_active":true,"is_sale":true,"created_at":"2020-03-15T06:04:35.781Z","updated_at":"2020-04-14T10:46:09.145Z","variants":[],"images":[{"id":24,"name":"6a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"5c7442b5104545afa78bfe819616d298","ext":".jpg","mime":"image/jpeg","size":52.29,"url":"/uploads/5c7442b5104545afa78bfe819616d298.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:07:56.574Z","updated_at":"2020-03-15T06:07:56.574Z"},{"id":25,"name":"6a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"0a9100b8791b44ff9629377856bab05a","ext":".jpg","mime":"image/jpeg","size":52.29,"url":"/uploads/0a9100b8791b44ff9629377856bab05a.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:07:56.593Z","updated_at":"2020-03-15T06:07:56.593Z"}],"thumbnail":{"id":23,"name":"5.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"e2132e11d3c34da89511593297697922","ext":".jpg","mime":"image/jpeg","size":10.17,"url":"/uploads/e2132e11d3c34da89511593297697922.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:07:56.562Z","updated_at":"2020-03-15T06:07:56.562Z"}}]},{"id":11,"name":"Cars & Motocycles","slug":"cars-and -motocycles","description":null,"created_at":"2020-03-14T10:28:06.841Z","updated_at":"2020-03-14T10:28:06.841Z","products":[{"id":33,"title":"Evolution Sport Drilled and Slotted Brake Kit","is_featured":false,"is_hot":false,"price":50.5,"sale_price":45.99,"vendor":"ROBERT’S STORE","review":4,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":true,"created_at":"2020-03-15T09:21:27.133Z","updated_at":"2020-03-15T09:21:27.133Z","variants":[],"images":[{"id":144,"name":"2.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"7719665337f64edc831081e186aefef4","ext":".jpg","mime":"image/jpeg","size":12.38,"url":"/uploads/7719665337f64edc831081e186aefef4.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:21:27.184Z","updated_at":"2020-03-15T09:21:27.184Z"}],"thumbnail":{"id":143,"name":"2.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"4d89105ae491400eba47e0c4ab805f4b","ext":".jpg","mime":"image/jpeg","size":12.38,"url":"/uploads/4d89105ae491400eba47e0c4ab805f4b.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:21:27.159Z","updated_at":"2020-03-15T09:21:27.159Z"}},{"id":34,"title":"Depo Black Housing Tail Lights Frs Brz 86","is_featured":false,"is_hot":false,"price":120.5,"sale_price":100.99,"vendor":"Young Shop","review":4,"is_out_of_stock":false,"depot":60,"inventory":70,"is_active":true,"is_sale":true,"created_at":"2020-03-15T09:34:41.156Z","updated_at":"2020-03-18T12:57:42.304Z","variants":[],"images":[{"id":146,"name":"3.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"74575909382f435ab65cd3ea2ab6e390","ext":".jpg","mime":"image/jpeg","size":9.03,"url":"/uploads/74575909382f435ab65cd3ea2ab6e390.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:34:41.193Z","updated_at":"2020-03-15T09:34:41.193Z"}],"thumbnail":{"id":145,"name":"3.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"1dd340948bc0400289c6c03bc644e99e","ext":".jpg","mime":"image/jpeg","size":9.03,"url":"/uploads/1dd340948bc0400289c6c03bc644e99e.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:34:41.182Z","updated_at":"2020-03-15T09:34:41.182Z"}},{"id":35,"title":"Anderson Composites – Custom Hood","is_featured":false,"is_hot":false,"price":442.99,"sale_price":null,"vendor":"Go Pro","review":3,"is_out_of_stock":false,"depot":40,"inventory":50,"is_active":true,"is_sale":false,"created_at":"2020-03-15T09:37:17.903Z","updated_at":"2020-03-15T09:37:17.903Z","variants":[],"images":[{"id":148,"name":"36a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"12cfa605c95c48d080be5bfe66d6f091","ext":".jpg","mime":"image/jpeg","size":51.22,"url":"/uploads/12cfa605c95c48d080be5bfe66d6f091.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:37:17.942Z","updated_at":"2020-03-15T09:37:17.942Z"},{"id":149,"name":"36b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"a999ffaca996462cbd4345b07c6b5571","ext":".jpg","mime":"image/jpeg","size":52.83,"url":"/uploads/a999ffaca996462cbd4345b07c6b5571.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:37:17.952Z","updated_at":"2020-03-15T09:37:17.952Z"},{"id":150,"name":"36c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"abee37e1ac8b4b05ba620ee1329a5ef0","ext":".jpg","mime":"image/jpeg","size":44.91,"url":"/uploads/abee37e1ac8b4b05ba620ee1329a5ef0.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:37:17.961Z","updated_at":"2020-03-15T09:37:17.961Z"}],"thumbnail":{"id":147,"name":"4.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"70a4149f0f15483b93737b522a0a9a44","ext":".jpg","mime":"image/jpeg","size":8.13,"url":"/uploads/70a4149f0f15483b93737b522a0a9a44.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:37:17.924Z","updated_at":"2020-03-15T09:37:17.924Z"}},{"id":36,"title":"Simpson Polymer White Racing Helmet","is_featured":false,"is_hot":false,"price":770.5,"sale_price":625.99,"vendor":"Go Pro","review":4,"is_out_of_stock":false,"depot":60,"inventory":70,"is_active":true,"is_sale":true,"created_at":"2020-03-15T09:39:12.533Z","updated_at":"2020-03-15T09:39:12.533Z","variants":[],"images":[{"id":152,"name":"5.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"54405f9aabac40328f3b54205697d2ba","ext":".jpg","mime":"image/jpeg","size":7.4,"url":"/uploads/54405f9aabac40328f3b54205697d2ba.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:39:12.574Z","updated_at":"2020-03-15T09:39:12.574Z"}],"thumbnail":{"id":151,"name":"5.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"d3d6a340ec114211b670de5fb72955e8","ext":".jpg","mime":"image/jpeg","size":7.4,"url":"/uploads/d3d6a340ec114211b670de5fb72955e8.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:39:12.563Z","updated_at":"2020-03-15T09:39:12.563Z"}},{"id":37,"title":"Gibson – Double Skull Exhaust System","is_featured":false,"is_hot":true,"price":1055.99,"sale_price":null,"vendor":"Global Office","review":4,"is_out_of_stock":false,"depot":50,"inventory":60,"is_active":true,"is_sale":false,"created_at":"2020-03-15T09:40:52.204Z","updated_at":"2020-03-15T09:40:52.204Z","variants":[],"images":[{"id":154,"name":"38a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"6e511bd80804431aadd15aeb29172d2d","ext":".jpg","mime":"image/jpeg","size":30.42,"url":"/uploads/6e511bd80804431aadd15aeb29172d2d.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:40:52.241Z","updated_at":"2020-03-15T09:40:52.241Z"},{"id":155,"name":"38b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"366848b6e7a343b5bc6dcc2f11672c8b","ext":".jpg","mime":"image/jpeg","size":5.49,"url":"/uploads/366848b6e7a343b5bc6dcc2f11672c8b.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:40:52.252Z","updated_at":"2020-03-15T09:40:52.252Z"},{"id":156,"name":"38c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"452ecfaa1e3c40d8ad417efe80a297e8","ext":".jpg","mime":"image/jpeg","size":19.58,"url":"/uploads/452ecfaa1e3c40d8ad417efe80a297e8.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:40:52.263Z","updated_at":"2020-03-15T09:40:52.263Z"}],"thumbnail":{"id":153,"name":"6.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"1ebf2224f4724391a3a75a5f4dce4599","ext":".jpg","mime":"image/jpeg","size":4.45,"url":"/uploads/1ebf2224f4724391a3a75a5f4dce4599.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T09:40:52.229Z","updated_at":"2020-03-15T09:40:52.229Z"}}]},{"id":12,"name":"Fruits","slug":"fruits","description":null,"created_at":"2020-03-18T06:46:56.197Z","updated_at":"2020-04-17T07:04:19.973Z","products":[{"id":77,"title":"Locally Grown Strawberries, 1 Pint","is_featured":false,"is_hot":false,"price":26.95,"sale_price":null,"vendor":"Global Office","review":3,"is_out_of_stock":false,"depot":50,"inventory":60,"is_active":true,"is_sale":false,"created_at":"2020-03-18T06:46:38.548Z","updated_at":"2020-03-18T06:46:38.548Z","variants":[],"images":[{"id":311,"name":"78a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"48efb67ec1c743a39e370b43bbbd7c4f","ext":".jpg","mime":"image/jpeg","size":583.8,"url":"/uploads/48efb67ec1c743a39e370b43bbbd7c4f.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:46:38.593Z","updated_at":"2020-03-18T06:46:38.593Z"},{"id":312,"name":"78b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"39a87fcc433e4e8f95ef6a4f22926482","ext":".jpg","mime":"image/jpeg","size":34.87,"url":"/uploads/39a87fcc433e4e8f95ef6a4f22926482.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:46:38.602Z","updated_at":"2020-03-18T06:46:38.602Z"}],"thumbnail":{"id":310,"name":"78a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"83d058602dee4b2d99ccef21300f8f35","ext":".jpg","mime":"image/jpeg","size":583.8,"url":"/uploads/83d058602dee4b2d99ccef21300f8f35.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:46:38.580Z","updated_at":"2020-03-18T06:46:38.580Z"}},{"id":78,"title":"Organic Oranges Valencia 1kg","is_featured":false,"is_hot":false,"price":25.99,"sale_price":null,"vendor":"Global Office","review":5,"is_out_of_stock":false,"depot":50,"inventory":60,"is_active":true,"is_sale":false,"created_at":"2020-03-18T06:49:57.368Z","updated_at":"2020-03-18T06:49:57.368Z","variants":[],"images":[{"id":314,"name":"79a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"8dc27d339178495793f41446e7e2f5be","ext":".jpg","mime":"image/jpeg","size":305.41,"url":"/uploads/8dc27d339178495793f41446e7e2f5be.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:49:57.403Z","updated_at":"2020-03-18T06:49:57.403Z"}],"thumbnail":{"id":313,"name":"79a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"bbd8f6aa2a2849f3ba80d5c6f9337b51","ext":".jpg","mime":"image/jpeg","size":305.41,"url":"/uploads/bbd8f6aa2a2849f3ba80d5c6f9337b51.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:49:57.391Z","updated_at":"2020-03-18T06:49:57.391Z"}},{"id":79,"title":"Pineapple (Tropical Gold)","is_featured":false,"is_hot":false,"price":2.89,"sale_price":null,"vendor":"Global Office","review":4,"is_out_of_stock":false,"depot":70,"inventory":80,"is_active":true,"is_sale":false,"created_at":"2020-03-18T06:51:19.973Z","updated_at":"2020-03-18T06:51:19.973Z","variants":[],"images":[{"id":316,"name":"80a.jpeg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"baef1533117e4781890e15d0271a417a","ext":".jpeg","mime":"image/jpeg","size":237.83,"url":"/uploads/baef1533117e4781890e15d0271a417a.jpeg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:51:20.007Z","updated_at":"2020-03-18T06:51:20.007Z"},{"id":317,"name":"80b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"4acf953a04e04faf8a487c723d202eef","ext":".jpg","mime":"image/jpeg","size":28.27,"url":"/uploads/4acf953a04e04faf8a487c723d202eef.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:51:20.023Z","updated_at":"2020-03-18T06:51:20.023Z"},{"id":318,"name":"80c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"b62251ec55be493d987a32806f709d2d","ext":".jpg","mime":"image/jpeg","size":41.26,"url":"/uploads/b62251ec55be493d987a32806f709d2d.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:51:20.033Z","updated_at":"2020-03-18T06:51:20.033Z"},{"id":319,"name":"80d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"e14ba895134e4f008f9cd5ed0df5a471","ext":".jpg","mime":"image/jpeg","size":27.29,"url":"/uploads/e14ba895134e4f008f9cd5ed0df5a471.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:51:20.042Z","updated_at":"2020-03-18T06:51:20.042Z"}],"thumbnail":{"id":315,"name":"80a.jpeg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"72a1764a51f0415e8d7e8be260848e95","ext":".jpeg","mime":"image/jpeg","size":237.83,"url":"/uploads/72a1764a51f0415e8d7e8be260848e95.jpeg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:51:19.995Z","updated_at":"2020-03-18T06:51:19.995Z"}},{"id":81,"title":"MariGold 100% Juice Milk 350ml","is_featured":false,"is_hot":false,"price":3.95,"sale_price":null,"vendor":"Global Office","review":4,"is_out_of_stock":false,"depot":60,"inventory":70,"is_active":true,"is_sale":false,"created_at":"2020-03-18T06:56:10.273Z","updated_at":"2020-03-18T06:56:10.273Z","variants":[],"images":[{"id":323,"name":"82a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"9e488f0e25cf4501a4fe04838e708be9","ext":".jpg","mime":"image/jpeg","size":98.07,"url":"/uploads/9e488f0e25cf4501a4fe04838e708be9.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:56:10.314Z","updated_at":"2020-03-18T06:56:10.314Z"}],"thumbnail":{"id":322,"name":"82a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"e10a8eeffbaa4bfab8898cb9342bb270","ext":".jpg","mime":"image/jpeg","size":98.07,"url":"/uploads/e10a8eeffbaa4bfab8898cb9342bb270.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:56:10.292Z","updated_at":"2020-03-18T06:56:10.292Z"}},{"id":82,"title":"HomeSoy Soya Milk Originall","is_featured":false,"is_hot":false,"price":9.85,"sale_price":null,"vendor":"Global Office","review":4,"is_out_of_stock":false,"depot":60,"inventory":70,"is_active":true,"is_sale":false,"created_at":"2020-03-18T06:57:16.979Z","updated_at":"2020-03-18T06:57:16.979Z","variants":[],"images":[{"id":325,"name":"83a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"f4fbe84e5b264982af03f806e044a621","ext":".jpg","mime":"image/jpeg","size":107.59,"url":"/uploads/f4fbe84e5b264982af03f806e044a621.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:57:17.011Z","updated_at":"2020-03-18T06:57:17.011Z"}],"thumbnail":{"id":324,"name":"83a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"019276ce1e444623833b0c1808da707c","ext":".jpg","mime":"image/jpeg","size":107.59,"url":"/uploads/019276ce1e444623833b0c1808da707c.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:57:17.002Z","updated_at":"2020-03-18T06:57:17.002Z"}},{"id":83,"title":"Australia Banana 16 Pack 2.5 kg","is_featured":false,"is_hot":false,"price":12.85,"sale_price":null,"vendor":"Global Office","review":3,"is_out_of_stock":false,"depot":60,"inventory":70,"is_active":true,"is_sale":false,"created_at":"2020-03-18T06:58:34.168Z","updated_at":"2020-03-18T06:58:34.168Z","variants":[],"images":[{"id":327,"name":"84a.jpeg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"ffd65dab221a4146b8ddeb0bbf908573","ext":".jpeg","mime":"image/jpeg","size":117.79,"url":"/uploads/ffd65dab221a4146b8ddeb0bbf908573.jpeg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:58:34.301Z","updated_at":"2020-03-18T06:58:34.301Z"}],"thumbnail":{"id":326,"name":"84a.jpeg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"3ea5019caa45409f8a9a770a02181fe2","ext":".jpeg","mime":"image/jpeg","size":117.79,"url":"/uploads/3ea5019caa45409f8a9a770a02181fe2.jpeg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:58:34.289Z","updated_at":"2020-03-18T06:58:34.289Z"}},{"id":84,"title":"Augason Farms Freeze Dried Beef Chunks","is_featured":false,"is_hot":false,"price":67.85,"sale_price":null,"vendor":"Global Office","review":5,"is_out_of_stock":false,"depot":60,"inventory":70,"is_active":true,"is_sale":false,"created_at":"2020-03-18T06:59:49.553Z","updated_at":"2020-03-18T06:59:49.553Z","variants":[],"images":[{"id":329,"name":"85a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"0e603357f01e40b3a3cd871a70ebe142","ext":".jpg","mime":"image/jpeg","size":527.02,"url":"/uploads/0e603357f01e40b3a3cd871a70ebe142.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:59:49.615Z","updated_at":"2020-03-18T06:59:49.615Z"},{"id":330,"name":"85b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"3c5cf1a734e4463a8332a0a0d908a0fe","ext":".jpg","mime":"image/jpeg","size":43.85,"url":"/uploads/3c5cf1a734e4463a8332a0a0d908a0fe.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:59:49.628Z","updated_at":"2020-03-18T06:59:49.628Z"},{"id":331,"name":"85c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"130a06e89e18489f997f89adb45df47c","ext":".jpg","mime":"image/jpeg","size":61.59,"url":"/uploads/130a06e89e18489f997f89adb45df47c.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:59:49.638Z","updated_at":"2020-03-18T06:59:49.638Z"},{"id":332,"name":"85d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"956b710c05964593a93ea91052b7f7fe","ext":".jpg","mime":"image/jpeg","size":63.88,"url":"/uploads/956b710c05964593a93ea91052b7f7fe.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:59:49.657Z","updated_at":"2020-03-18T06:59:49.657Z"}],"thumbnail":{"id":328,"name":"85a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"c57b47015b9a4c37a67b614f16202829","ext":".jpg","mime":"image/jpeg","size":527.02,"url":"/uploads/c57b47015b9a4c37a67b614f16202829.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:59:49.590Z","updated_at":"2020-03-18T06:59:49.590Z"}},{"id":85,"title":"Vita Coco Coconut Water (Pack of 12)","is_featured":false,"is_hot":false,"price":25.89,"sale_price":20.08,"vendor":"Global Office","review":5,"is_out_of_stock":false,"depot":60,"inventory":70,"is_active":true,"is_sale":true,"created_at":"2020-03-18T07:01:10.046Z","updated_at":"2020-03-18T07:01:10.046Z","variants":[],"images":[{"id":334,"name":"86a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"3ca8ef0cc54d46ff87594b803cef3c43","ext":".jpg","mime":"image/jpeg","size":227.87,"url":"/uploads/3ca8ef0cc54d46ff87594b803cef3c43.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T07:01:10.085Z","updated_at":"2020-03-18T07:01:10.085Z"},{"id":335,"name":"86b.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"6ed164482d6a4693a4e88c2c4ba3aead","ext":".jpg","mime":"image/jpeg","size":23.17,"url":"/uploads/6ed164482d6a4693a4e88c2c4ba3aead.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T07:01:10.100Z","updated_at":"2020-03-18T07:01:10.100Z"},{"id":336,"name":"86c.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"9ca1dd76fe0f43d0aecf9fb2ca719c57","ext":".jpg","mime":"image/jpeg","size":51.46,"url":"/uploads/9ca1dd76fe0f43d0aecf9fb2ca719c57.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T07:01:10.109Z","updated_at":"2020-03-18T07:01:10.109Z"},{"id":337,"name":"86d.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"c56f54eb5103427680789de497ac94cb","ext":".jpg","mime":"image/jpeg","size":12.31,"url":"/uploads/c56f54eb5103427680789de497ac94cb.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T07:01:10.117Z","updated_at":"2020-03-18T07:01:10.117Z"}],"thumbnail":{"id":333,"name":"86a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"39694a8b81124468a5de5e399483bf9e","ext":".jpg","mime":"image/jpeg","size":227.87,"url":"/uploads/39694a8b81124468a5de5e399483bf9e.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T07:01:10.073Z","updated_at":"2020-03-18T07:01:10.073Z"}},{"id":86,"title":"Vita Coco Coconut Water (Pack of 24)","is_featured":false,"is_hot":false,"price":19.22,"sale_price":21.99,"vendor":"Young Shop","review":2,"is_out_of_stock":false,"depot":100,"inventory":200,"is_active":true,"is_sale":true,"created_at":"2020-04-18T08:42:13.577Z","updated_at":"2020-04-18T08:42:13.577Z","variants":[],"images":[{"id":350,"name":"86b","alternativeText":null,"caption":null,"width":600,"height":600,"formats":{"thumbnail":{"hash":"thumbnail_86b_81b868f333","ext":".jpeg","mime":"image/jpeg","width":156,"height":156,"size":2.53,"url":"/uploads/thumbnail_86b_81b868f333.jpeg"},"small":{"hash":"small_86b_81b868f333","ext":".jpeg","mime":"image/jpeg","width":500,"height":500,"size":15.08,"url":"/uploads/small_86b_81b868f333.jpeg"}},"hash":"86b_81b868f333","ext":".jpeg","mime":"image/jpeg","size":20.45,"url":"/uploads/86b_81b868f333.jpeg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-04-18T08:42:13.694Z","updated_at":"2020-04-18T08:42:13.694Z"},{"id":351,"name":"86a","alternativeText":null,"caption":null,"width":800,"height":800,"formats":{"thumbnail":{"hash":"thumbnail_86a_b29949194b","ext":".jpeg","mime":"image/jpeg","width":156,"height":156,"size":3.61,"url":"/uploads/thumbnail_86a_b29949194b.jpeg"},"medium":{"hash":"medium_86a_b29949194b","ext":".jpeg","mime":"image/jpeg","width":750,"height":750,"size":45.53,"url":"/uploads/medium_86a_b29949194b.jpeg"},"small":{"hash":"small_86a_b29949194b","ext":".jpeg","mime":"image/jpeg","width":500,"height":500,"size":24.04,"url":"/uploads/small_86a_b29949194b.jpeg"}},"hash":"86a_b29949194b","ext":".jpeg","mime":"image/jpeg","size":52.58,"url":"/uploads/86a_b29949194b.jpeg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-04-18T08:42:13.713Z","updated_at":"2020-04-18T08:42:13.713Z"},{"id":352,"name":"86c","alternativeText":null,"caption":null,"width":600,"height":600,"formats":{"thumbnail":{"hash":"thumbnail_86c_fc3738188f","ext":".jpeg","mime":"image/jpeg","width":156,"height":156,"size":4.3,"url":"/uploads/thumbnail_86c_fc3738188f.jpeg"},"small":{"hash":"small_86c_fc3738188f","ext":".jpeg","mime":"image/jpeg","width":500,"height":500,"size":34.07,"url":"/uploads/small_86c_fc3738188f.jpeg"}},"hash":"86c_fc3738188f","ext":".jpeg","mime":"image/jpeg","size":46.83,"url":"/uploads/86c_fc3738188f.jpeg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-04-18T08:42:13.725Z","updated_at":"2020-04-18T08:42:13.725Z"}],"thumbnail":{"id":353,"name":"86a","alternativeText":null,"caption":null,"width":800,"height":800,"formats":{"thumbnail":{"hash":"thumbnail_86a_8cb6df1843","ext":".jpeg","mime":"image/jpeg","width":156,"height":156,"size":3.61,"url":"/uploads/thumbnail_86a_8cb6df1843.jpeg"},"medium":{"hash":"medium_86a_8cb6df1843","ext":".jpeg","mime":"image/jpeg","width":750,"height":750,"size":45.53,"url":"/uploads/medium_86a_8cb6df1843.jpeg"},"small":{"hash":"small_86a_8cb6df1843","ext":".jpeg","mime":"image/jpeg","width":500,"height":500,"size":24.04,"url":"/uploads/small_86a_8cb6df1843.jpeg"}},"hash":"86a_8cb6df1843","ext":".jpeg","mime":"image/jpeg","size":52.58,"url":"/uploads/86a_8cb6df1843.jpeg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-04-18T08:42:13.735Z","updated_at":"2020-04-18T08:42:13.735Z"}}]},{"id":13,"name":"Meat","slug":"meat","description":null,"created_at":"2020-03-18T06:54:20.047Z","updated_at":"2020-04-12T06:44:14.588Z","products":[{"id":80,"title":"Tesco Eat Fresh Frozen Lamb Bone in Cube","is_featured":false,"is_hot":false,"price":21.89,"sale_price":null,"vendor":"Global Office","review":4,"is_out_of_stock":false,"depot":60,"inventory":70,"is_active":true,"is_sale":false,"created_at":"2020-03-18T06:54:02.670Z","updated_at":"2020-03-18T06:54:02.670Z","variants":[],"images":[{"id":321,"name":"81a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"d8e508fc912641f58f58138b16e792ce","ext":".jpg","mime":"image/jpeg","size":109.76,"url":"/uploads/d8e508fc912641f58f58138b16e792ce.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:54:02.708Z","updated_at":"2020-03-18T06:54:02.708Z"}],"thumbnail":{"id":320,"name":"81a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"9f48e963891b43329a100e704a4ae84c","ext":".jpg","mime":"image/jpeg","size":109.76,"url":"/uploads/9f48e963891b43329a100e704a4ae84c.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-18T06:54:02.693Z","updated_at":"2020-03-18T06:54:02.693Z"}}]},{"id":14,"name":"Book","slug":"book","description":null,"created_at":"2020-03-28T10:59:05.002Z","updated_at":"2020-03-28T10:59:05.002Z","products":[{"id":6,"title":"Grand Slam Indoor Of Show Jumping Novel","is_featured":false,"is_hot":false,"price":41.99,"sale_price":32.99,"vendor":"Robert\'s Store","review":4,"is_out_of_stock":false,"depot":68,"inventory":90,"is_active":true,"is_sale":true,"created_at":"2020-03-15T06:04:35.781Z","updated_at":"2020-04-14T10:46:09.145Z","variants":[],"images":[{"id":24,"name":"6a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"5c7442b5104545afa78bfe819616d298","ext":".jpg","mime":"image/jpeg","size":52.29,"url":"/uploads/5c7442b5104545afa78bfe819616d298.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:07:56.574Z","updated_at":"2020-03-15T06:07:56.574Z"},{"id":25,"name":"6a.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"0a9100b8791b44ff9629377856bab05a","ext":".jpg","mime":"image/jpeg","size":52.29,"url":"/uploads/0a9100b8791b44ff9629377856bab05a.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:07:56.593Z","updated_at":"2020-03-15T06:07:56.593Z"}],"thumbnail":{"id":23,"name":"5.jpg","alternativeText":null,"caption":null,"width":null,"height":null,"formats":null,"hash":"e2132e11d3c34da89511593297697922","ext":".jpg","mime":"image/jpeg","size":10.17,"url":"/uploads/e2132e11d3c34da89511593297697922.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-03-15T06:07:56.562Z","updated_at":"2020-03-15T06:07:56.562Z"}}]}]');

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("antd");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-cookie");;

/***/ }),

/***/ "react-lazyload":
/*!*********************************!*\
  !*** external "react-lazyload" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-lazyload");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga");;

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga/effects");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL2NvbXBvbmVudHMvZWxlbWVudHMvY29tbW9uL1BhZ2VMb2FkZXIuanN4Iiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vY29tcG9uZW50cy9sYXlvdXRzL01hc3RlckxheW91dC5qc3giLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9jb21wb25lbnRzL2xheW91dHMvbW9kdWxlcy9NYWluSGVhZC5qc3giLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9jb21wb25lbnRzL3NoYXJlZC9uYXZpZ2F0aW9uL05hdmlnYXRpb25MaXN0LmpzeCIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL2NvbXBvbmVudHMvc2hhcmVkL3BhbmVsL1BhbmVsQ2FydE1vYmlsZS5qc3giLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9jb21wb25lbnRzL3NoYXJlZC9wYW5lbC9QYW5lbENhdGVnb3JpZXMuanN4Iiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vY29tcG9uZW50cy9zaGFyZWQvcGFuZWwvUGFuZWxNZW51LmpzeCIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL2NvbXBvbmVudHMvc2hhcmVkL3BhbmVsL1BhbmVsU2VhcmNoLmpzeCIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL2hvb2tzL3VzZUVjb21lcmNlLmpzIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vaG9va3MvdXNlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwuanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vcGFnZXMvX2FwcC5qc3giLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9yZXBvc2l0b3JpZXMvUHJvZHVjdFJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9yZXBvc2l0b3JpZXMvUmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL3N0b3JlL2FwcC9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9zdG9yZS9hcHAvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL3N0b3JlL2FwcC9zYWdhLmpzIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vc3RvcmUvYXV0aC9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9zdG9yZS9hdXRoL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9zdG9yZS9hdXRoL3NhZ2EuanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9zdG9yZS9lY29tZXJjZS9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9zdG9yZS9lY29tZXJjZS9yZWR1Y2VyLmpzIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vc3RvcmUvZWNvbWVyY2Uvc2FnYS5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL3N0b3JlL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vc3RvcmUvcm9vdFNhZ2EuanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9zdG9yZS9zZXR0aW5nL2FjdGlvbi5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL3N0b3JlL3NldHRpbmcvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL3N0b3JlL3NldHRpbmcvc2FnYS5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL3N0b3JlL3N0b3JlLmpzIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vdXRpbGl0aWVzL2Vjb21lcmNlLWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi91dGlsaXRpZXMvcHJvZHVjdC1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0L2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVcIiIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC9leHRlcm5hbCBcInJlYWN0LWxhenlsb2FkXCIiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0L2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC9pZ25vcmVkfEM6XFxVc2Vyc1xcYXItc2VcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxtYXJ0ZnVyeVxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIlBhZ2VMb2FkZXIiLCJNYXN0ZXJMYXlvdXQiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjb29raWVzIiwidXNlQ29va2llcyIsImluaXRFY29tZXJjZVZhbHVlcyIsImNhcnQiLCJzZXRDYXJ0SXRlbXMiLCJ3aXNobGlzdCIsInNldFdpc2hsaXN0VHRlbXMiLCJjb21wYXJlIiwic2V0Q29tcGFyZUl0ZW1zIiwidXNlRWZmZWN0IiwiTWFpbkhlYWQiLCJOYXZpZ2F0aW9uTGlzdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzZXRTdGF0ZSIsIm1lbnVEcmF3ZXIiLCJjYXJ0RHJhd2VyIiwic2VhcmNoRHJhd2VyIiwiY2F0ZWdvcmllc0RyYXdlciIsInN0YXRlIiwicmVuZGVyIiwiaGFuZGxlRHJhd2VyQ2xvc2UiLCJoYW5kbGVTaG93TWVudURyYXdlciIsImhhbmRsZVNob3dDYXRlZ29yaWVzRHJhd2VyIiwiaGFuZGxlU2hvd1NlYXJjaERyYXdlciIsImhhbmRsZVNob3dDYXJ0RHJhd2VyIiwibWFwU3RhdGVUb1Byb3BzIiwic2V0dGluZyIsImNvbm5lY3QiLCJQYW5lbENhcnRNb2JpbGUiLCJlY29tZXJjZSIsInByb2R1Y3RzIiwiZ2V0UHJvZHVjdHMiLCJyZW1vdmVJdGVtIiwidXNlRWNvbWVyY2UiLCJ0aXRsZSIsInRodW1ibmFpbEltYWdlIiwidXNlUHJvZHVjdCIsImhhbmRsZVJlbW92ZUNhcnRJdGVtIiwiZSIsInByb2R1Y3QiLCJwcmV2ZW50RGVmYXVsdCIsImNhcnRJdGVtcyIsImNhcnRJdGVtc1ZpZXciLCJmb290ZXJWaWV3IiwibGVuZ3RoIiwiYW1vdW50IiwiY2FsY3VsYXRlQW1vdW50IiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaWQiLCJ2ZW5kb3IiLCJxdWFudGl0eSIsInByaWNlIiwiU3ViTWVudSIsIk1lbnUiLCJQYW5lbENhdGVnb3JpZXMiLCJvcGVuS2V5cyIsImxhdGVzdE9wZW5LZXkiLCJmaW5kIiwia2V5IiwiaW5kZXhPZiIsInJvb3RTdWJtZW51S2V5cyIsIm9uT3BlbkNoYW5nZSIsImNhdGVnb3JpZXMiLCJjYXRlZ29yeSIsInNsdWciLCJuYW1lIiwiUGFuZWxNZW51IiwibWVudV9kYXRhIiwic3ViTWVudSIsInVybCIsInRleHQiLCJzdWJJdGVtIiwibWVnYUNvbnRlbnQiLCJtZWdhSXRlbSIsImhlYWRpbmciLCJtZWdhSXRlbXMiLCJtZWdhU3ViSXRlbSIsInR5cGUiLCJlbmRQb2ludCIsImFsaWFzIiwiUGFuZWxTZWFyY2giLCJrZXl3b3JkIiwic2V0S2V5d29yZCIsInVzZVN0YXRlIiwiaGFuZGxlU3VibWl0IiwiUm91dGVyIiwidGFyZ2V0IiwidmFsdWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNhcnRJdGVtc09uQ29va2llIiwic2V0Q29va2llIiwic2V0UHJvZHVjdHMiLCJwYXlsb2FkIiwiZ3JvdXAiLCJxdWVyaWVzIiwiZm9yRWFjaCIsInJlc3BvbnNlRGF0YSIsIlByb2R1Y3RSZXBvc2l0b3J5IiwiZXhpc3RJdGVtIiwidmFsIiwic2V0VGltZW91dCIsImJpbmQiLCJpbmNyZWFzZVF0eSIsImN1cnJlbnRDYXJ0IiwicGF0aCIsImRlY3JlYXNlUXR5IiwiYWRkSXRlbSIsIm5ld0l0ZW0iLCJuZXdJdGVtcyIsInB1c2giLCJzZWxlY3RlZEl0ZW0iLCJjdXJyZW50SXRlbXMiLCJpbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsInJlbW92ZUl0ZW1zIiwiZ2V0SW1hZ2VVUkwiLCJzb3VyY2UiLCJzaXplIiwiaW1hZ2UiLCJpbWFnZVVSTCIsImZvcm1hdHMiLCJsYXJnZSIsIm1lZGl1bSIsInRodW1ibmFpbCIsInNtYWxsIiwidW5kZWZpbmVkIiwiYmFzZVVybCIsInZpZXciLCJzYWxlX3ByaWNlIiwiZm9ybWF0Q3VycmVuY3kiLCJiYWRnZXMiLCJiYWRnZSIsImRpc2NvdW50UGVyY2VudCIsInRvRml4ZWQiLCJicmFuZCIsImJyYW5kcyIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsImV4cG9ydHMiLCJfcmVhY3QiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJfdXNlSW50ZXJzZWN0aW9uIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwiaHJlZiIsImFzIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjYXRjaCIsImVyciIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwiTGluayIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsImRlZmF1bHQiLCJ1c2VSZWYiLCJjdXJyZW50IiwiY29uc29sZSIsIndhcm4iLCJwIiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwicmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJlbmRzV2l0aCIsInNsaWNlIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImdldCIsImZ1dHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwidGhlbiIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50Iiwid2luZG93IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJyZWwiLCJjcm9zc09yaWdpbiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiZGVmaW5lUHJvcGVydHkiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsInYiLCJjcmVhdGVSb3V0ZUxvYWRlciIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJ0ZXN0IiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJwYXRobmFtZSIsImRldGVjdGVkTG9jYWxlIiwicGF0aG5hbWVQYXJ0cyIsInNwbGl0Iiwic29tZSIsInRvTG93ZXJDYXNlIiwiam9pbiIsIm1pdHQiLCJjcmVhdGUiLCJoYW5kbGVyIiwib2ZmIiwiZW1pdCIsImV2dHMiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJfcGF0aG5hbWUiLCJfcXVlcnkiLCJfYXMiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiaXNSZWFkeSIsIl9pZHgiLCJvblBvcFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYXJzZVJlbGF0aXZlVXJsIiwiY2hhbmdlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsImdzc3AiLCJnaXAiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwMiIsIl9vcHRpb25zJHNjcm9sbCIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwieCIsInkiLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJmb3JtYXRVcmwiLCJxdWVyeXN0cmluZyIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIldlYWtNYXAiLCJjYWNoZSIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzbGFzaGVkUHJvdG9jb2xzIiwidXJsT2JqIiwiYXV0aCIsImhvc3RuYW1lIiwicHJvdG9jb2wiLCJob3N0IiwicG9ydCIsIlN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsIl9mb3JtYXRVcmwiLCJ1c2VkIiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9BcHAkcHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsIlNQIiwibWVhc3VyZSIsImNsYXNzTGlzdCIsImFkZCIsIndyYXBwZXIiLCJnZXRSZWNvcmRzIiwicmVwb25zZSIsIlJlcG9zaXRvcnkiLCJzZXJpYWxpemVRdWVyeSIsInJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvZyIsImdldEJyYW5kcyIsImdldFByb2R1Y3RDYXRlZ29yaWVzIiwiZ2V0VG90YWxSZWNvcmRzIiwiZ2V0UHJvZHVjdHNCeUlkIiwiZ2V0UHJvZHVjdHNCeUNhdGVnb3J5IiwiZ2V0UHJvZHVjdHNCeUJyYW5kIiwiZ2V0UHJvZHVjdHNCeUJyYW5kcyIsImdldFByb2R1Y3RzQnlQcmljZVJhbmdlIiwiZ2V0UHJvZHVjdHNCeUlkcyIsImJhc2VEb21haW4iLCJiYXNlUG9zdFVybCIsImJhc2VTdG9yZVVSTCIsImN1c3RvbUhlYWRlcnMiLCJBY2NlcHQiLCJheGlvcyIsImhlYWRlcnMiLCJhY3Rpb25UeXBlcyIsIlNXSVRDSF9ERU1PX1BBTkVMIiwiU1dJVENIX0RFTU9fUEFORUxfU1VDQ0VTUyIsInN3aXRjaERlbW9QYW5lbCIsInN3aXRjaERlbW9QYW5lbFN1Y2Nlc3MiLCJpbml0U3RhdGUiLCJpc1Nob3dEZW1vUGFuZWwiLCJyZWR1Y2VyIiwiYWN0aW9uIiwicHV0Iiwicm9vdFNhZ2EiLCJ0YWtlRXZlcnkiLCJMT0dJTl9SRVFVRVNUIiwiTE9HSU5fU1VDQ0VTUyIsIkxPR09VVCIsIkxPR09VVF9TVUNDRVNTIiwiQ0hFQ0tfQVVUSE9SSVpBVElPTiIsImxvZ2luIiwibG9naW5TdWNjZXNzIiwibG9nT3V0IiwibG9nT3V0U3VjY2VzcyIsImlzTG9nZ2VkSW4iLCJhY3Rpb25zIiwibW9kYWxTdWNjZXNzIiwibm90aWZpY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJtb2RhbFdhcm5pbmciLCJsb2dpblNhZ2EiLCJsb2dPdXRTYWdhIiwiU0VUX1dJU0hMSVNUX0lURU1TIiwiU0VUX1dJU0hMSVNUX0lURU1TX1NVQ0NFU1MiLCJTRVRfQ0FSVF9JVEVNUyIsIlNFVF9DQVJUX0lURU1TX1NVQ0NFU1MiLCJTRVRfQ09NUEFSRV9JVEVNUyIsIlNFVF9DT01QQVJFX0lURU1TX1NVQ0NFU1MiLCJzZXRXaXNobGlzdFR0ZW1zU3VjY2VzcyIsInNldENhcnRJdGVtc1N1Y2Nlc3MiLCJzZXRDb21wYXJlSXRlbXNTdWNjZXNzIiwiaW5pdGFsU3RhdGUiLCJ3aXNobGlzdEl0ZW1zIiwiY29tcGFyZUl0ZW1zIiwiZ2V0V2lzaGxpc3RJdGVtcyIsImdldENhcnRJdGVtcyIsImdldENvbXBhcmVJdGVtcyIsImNvbWJpbmVSZWR1Y2VycyIsImFwcCIsIkF1dGhTYWdhIiwiU2V0dGluZ1NhZ2EiLCJFY29tZXJjZSIsIkNIQU5HRV9DVVJSRU5DWSIsIkNIQU5HRV9DVVJSRU5DWV9TVUNDRVNTIiwiY2hhbmdlQ3VycmVuY3kiLCJjdXJyZW5jeSIsImNoYW5nZUN1cnJlbmN5U3VjY2VzcyIsImluaXRpYWxTdGF0ZSIsInN5bWJvbCIsImNoYW5nZUN1cnJlbmN5U2FnYSIsImJpbmRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJtYWtlU3RvcmUiLCJjb250ZXh0Iiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwiZ2V0Q2FydEl0ZW1zRnJvbUNvb2tpZXMiLCJwYXJzZSIsInVwZGF0ZUNhcnRUb0Nvb2tpZXMiLCJleHBpcmVzIiwiYWRkSXRlbVRvQ2FydEhlbHBlciIsImNvb2tpZUNhcnQiLCJpbmNyZWFzZVF0eUNhcnRJdGVtSGVscGVyIiwiZGVjcmVhc2VRdHlDYXJ0SXRlbUhlbHBlciIsInJlbW92ZUNhcnRJdGVtSGVscGVyIiwidmFsdWVzIiwicmVkdWNlIiwiYWNjIiwiY2FsY3VsYXRlQ2FydFF1YW50aXR5IiwiY2FjdWxhdGVBcnJheVF1YW50aXR5IiwibnVtIiwicGFyc2VGbG9hdCIsInRvU3RyaW5nIiwiZ2V0Q29sbGV0aW9uQnlTbHVnIiwiY29sbGVjdGlvbnMiLCJnZXRJdGVtQnlTbHVnIiwiYmFubmVycyIsImJhbm5lciIsImNvbnZlcnRTbHVnc1F1ZXJ5U3RyaW5nIiwiU3RyYXBpUHJvZHVjdFByaWNlRXhwYW5kZWQiLCJpc19zYWxlIiwiU3RyYXBpUHJvZHVjdFRodW1ibmFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLE1BQU07QUFDckIsc0JBQ0k7QUFBQSwyQkFDSTtBQUFLLFFBQUUsRUFBQyxnQkFBUjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBUUgsQ0FURDs7QUFXQSwrREFBZUEsVUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQ25DLFFBQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7QUFDQSxRQUFNLENBQUNDLE9BQUQsSUFBWUMsd0RBQVUsQ0FBQyxDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFVBQXBC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QTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2QixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osWUFBWTtBQUNaLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIsd0JBQXdCO0FBQ3hCLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekIsaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsY0FBYztBQUNkLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCLGNBQWM7QUFDZCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2pPYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxFQUFFLGtKQUF5RDtBQUMzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUGFnZUxvYWRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBpZD1cImxvYWRlci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItc2VjdGlvbiBzZWN0aW9uLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1zZWN0aW9uIHNlY3Rpb24tcmlnaHRcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUxvYWRlcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCYWNrVG9wIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IHtcbiAgICBzZXRDYXJ0SXRlbXMsXG4gICAgc2V0Q29tcGFyZUl0ZW1zLFxuICAgIHNldFdpc2hsaXN0VHRlbXMsXG59IGZyb20gJ34vc3RvcmUvZWNvbWVyY2UvYWN0aW9uJztcbmltcG9ydCBQYWdlTG9hZGVyIGZyb20gJ34vY29tcG9uZW50cy9lbGVtZW50cy9jb21tb24vUGFnZUxvYWRlcic7XG5pbXBvcnQgTmF2aWdhdGlvbkxpc3QgZnJvbSAnfi9jb21wb25lbnRzL3NoYXJlZC9uYXZpZ2F0aW9uL05hdmlnYXRpb25MaXN0JztcbmltcG9ydCBNYWluSGVhZCBmcm9tICd+L2NvbXBvbmVudHMvbGF5b3V0cy9tb2R1bGVzL01haW5IZWFkJztcblxuY29uc3QgTWFzdGVyTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBbY29va2llc10gPSB1c2VDb29raWVzKFsnY2FydCcsICdjb21wYXJlJywgJ3dpc2hsaXN0J10pO1xuXG4gICAgZnVuY3Rpb24gaW5pdEVjb21lcmNlVmFsdWVzKCkge1xuICAgICAgICBpZiAoY29va2llcykge1xuICAgICAgICAgICAgaWYgKGNvb2tpZXMuY2FydCkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldENhcnRJdGVtcyhjb29raWVzLmNhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb29raWVzLndpc2hsaXN0KSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0V2lzaGxpc3RUdGVtcyhjb29raWVzLndpc2hsaXN0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29va2llcy5jb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0Q29tcGFyZUl0ZW1zKGNvb2tpZXMuY29tcGFyZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaW5pdEVjb21lcmNlVmFsdWVzKCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxNYWluSGVhZCAvPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPFBhZ2VMb2FkZXIgLz5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uTGlzdCAvPlxuICAgICAgICAgICAgPEJhY2tUb3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcy1idG4tLWJhY2t0b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1hcnJvdy11cFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvQmFja1RvcD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hc3RlckxheW91dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBNYWluSGVhZCA9ICgpID0+IChcbiAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1hcnRmdXJ5IC0gUmVhY3QgZUNvbW1lcmNlIFRlbXBsYXRlPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvc3RhdGljL2ltZy9mYXZpLnBuZ1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3N0YXRpYy9pbWcvZmF2aS5wbmdcIiBzaXplcz1cIjMyeDMyXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvc3RhdGljL2ltZy9mYXZpLnBuZ1wiIHNpemVzPVwiMTkyeDE5MlwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb24tcHJlY29tcG9zZWRcIiBocmVmPVwiL3N0YXRpYy9pbWcvZmF2aS5wbmdcIiAvPlxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImZvcm1hdC1kZXRlY3Rpb25cIiBjb250ZW50PVwidGVsZXBob25lPW5vXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJub3V0aGVtZXNcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiTWFydGZ1cnksIFJlYWN0LCBlQ29tbWVyY2UsIFRlbXBsYXRlXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBjb250ZW50PVwiTWFydGZ1cnkgLSBSZWFjdCBlQ29tbWVyY2UgVGVtcGxhdGVcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Xb3JrK1NhbnM6MzAwLDQwMCw1MDAsNjAwLDcwMCZhbXA7YW1wO3N1YnNldD1sYXRpbi1leHRcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgPC9IZWFkPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbkhlYWQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IERyYXdlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFBhbmVsTWVudSBmcm9tICcuLi9wYW5lbC9QYW5lbE1lbnUnO1xuaW1wb3J0IFBhbmVsQ2FydE1vYmlsZSBmcm9tICcuLi9wYW5lbC9QYW5lbENhcnRNb2JpbGUnO1xuaW1wb3J0IFBhbmVsU2VhcmNoIGZyb20gJy4uL3BhbmVsL1BhbmVsU2VhcmNoJztcbmltcG9ydCBQYW5lbENhdGVnb3JpZXMgZnJvbSAnLi4vcGFuZWwvUGFuZWxDYXRlZ29yaWVzJztcblxuY2xhc3MgTmF2aWdhdGlvbkxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1lbnVEcmF3ZXI6IGZhbHNlLFxuICAgICAgICAgICAgY2FydERyYXdlcjogZmFsc2UsXG4gICAgICAgICAgICBzZWFyY2hEcmF3ZXI6IGZhbHNlLFxuICAgICAgICAgICAgY2F0ZWdvcmllc0RyYXdlcjogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaGFuZGxlRHJhd2VyQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbWVudURyYXdlcjogZmFsc2UsXG4gICAgICAgICAgICBjYXJ0RHJhd2VyOiBmYWxzZSxcbiAgICAgICAgICAgIHNlYXJjaERyYXdlcjogZmFsc2UsXG4gICAgICAgICAgICBjYXRlZ29yaWVzRHJhd2VyOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVNob3dNZW51RHJhd2VyID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1lbnVEcmF3ZXI6ICF0aGlzLnN0YXRlLm1lbnVEcmF3ZXIsXG4gICAgICAgICAgICBjYXJ0RHJhd2VyOiBmYWxzZSxcbiAgICAgICAgICAgIHNlYXJjaERyYXdlcjogZmFsc2UsXG4gICAgICAgICAgICBjYXRlZ29yaWVzRHJhd2VyOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVNob3dDYXJ0RHJhd2VyID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1lbnVEcmF3ZXI6IGZhbHNlLFxuICAgICAgICAgICAgY2FydERyYXdlcjogIXRoaXMuc3RhdGUuY2FydERyYXdlcixcbiAgICAgICAgICAgIHNlYXJjaERyYXdlcjogZmFsc2UsXG4gICAgICAgICAgICBjYXRlZ29yaWVzRHJhd2VyOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBoYW5kbGVTaG93U2VhcmNoRHJhd2VyID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1lbnVEcmF3ZXI6IGZhbHNlLFxuICAgICAgICAgICAgY2FydERyYXdlcjogZmFsc2UsXG4gICAgICAgICAgICBzZWFyY2hEcmF3ZXI6ICF0aGlzLnN0YXRlLnNlYXJjaERyYXdlcixcbiAgICAgICAgICAgIGNhdGVnb3JpZXNEcmF3ZXI6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGhhbmRsZVNob3dDYXRlZ29yaWVzRHJhd2VyID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1lbnVEcmF3ZXI6IGZhbHNlLFxuICAgICAgICAgICAgY2FydERyYXdlcjogZmFsc2UsXG4gICAgICAgICAgICBzZWFyY2hEcmF3ZXI6IGZhbHNlLFxuICAgICAgICAgICAgY2F0ZWdvcmllc0RyYXdlcjogIXRoaXMuc3RhdGUuY2F0ZWdvcmllc0RyYXdlcixcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgbWVudURyYXdlcixcbiAgICAgICAgICAgIHNlYXJjaERyYXdlcixcbiAgICAgICAgICAgIGNhcnREcmF3ZXIsXG4gICAgICAgICAgICBjYXRlZ29yaWVzRHJhd2VyLFxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLS1saXN0XCI+XG4gICAgICAgICAgICAgICAgPERyYXdlclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1wYW5lbC0tbW9iaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlRHJhd2VyQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUubWVudURyYXdlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcGFuZWwtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcGFuZWxfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5NZW51PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1wYW5lbF9fY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZURyYXdlckNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1jcm9zc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcGFuZWxfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWxNZW51IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9EcmF3ZXI+XG4gICAgICAgICAgICAgICAgPERyYXdlclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1wYW5lbC0tbW9iaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlRHJhd2VyQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuY2FydERyYXdlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcGFuZWwtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcGFuZWxfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TaG9wcGluZyBDYXJ0PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1wYW5lbF9fY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZURyYXdlckNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1jcm9zc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcGFuZWxfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWxDYXJ0TW9iaWxlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9EcmF3ZXI+XG4gICAgICAgICAgICAgICAgPERyYXdlclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1wYW5lbC0tbW9iaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlRHJhd2VyQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuc2VhcmNoRHJhd2VyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wYW5lbC0td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wYW5lbF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNlYXJjaDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHMtcGFuZWxfX2Nsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVEcmF3ZXJDbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY3Jvc3NcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXBhbmVsX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhbmVsU2VhcmNoIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9EcmF3ZXI+XG4gICAgICAgICAgICAgICAgPERyYXdlclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1wYW5lbC0tbW9iaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlRHJhd2VyQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuY2F0ZWdvcmllc0RyYXdlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcGFuZWwtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcGFuZWxfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5DYXRlZ29yaWVzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1wYW5lbF9fY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZURyYXdlckNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1jcm9zc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcGFuZWxfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWxDYXRlZ29yaWVzIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9EcmF3ZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXZpZ2F0aW9uX19pdGVtICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudURyYXdlciA9PT0gdHJ1ZSA/ICdhY3RpdmUnIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTaG93TWVudURyYXdlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLW1lbnVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gTWVudTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2aWdhdGlvbl9faXRlbSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXNEcmF3ZXIgPT09IHRydWUgPyAnYWN0aXZlJyA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hvd0NhdGVnb3JpZXNEcmF3ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1saXN0NFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBDYXRlZ29yaWVzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXZpZ2F0aW9uX19pdGVtICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoRHJhd2VyID09PSB0cnVlID8gJ2FjdGl2ZScgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3dTZWFyY2hEcmF3ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1tYWduaWZpZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gU2VhcmNoPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXZpZ2F0aW9uX19pdGVtICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydERyYXdlciA9PT0gdHJ1ZSA/ICdhY3RpdmUnIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTaG93Q2FydERyYXdlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWJhZzJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gQ2FydDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4gc3RhdGUuc2V0dGluZztcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTmF2aWdhdGlvbkxpc3QpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHVzZUVjb21lcmNlIGZyb20gJ34vaG9va3MvdXNlRWNvbWVyY2UnO1xuaW1wb3J0IHVzZVByb2R1Y3QgZnJvbSAnfi9ob29rcy91c2VQcm9kdWN0JztcbmltcG9ydCB7IGNhbGN1bGF0ZUFtb3VudCB9IGZyb20gJ34vdXRpbGl0aWVzL2Vjb21lcmNlLWhlbHBlcnMnO1xuXG5jb25zdCBQYW5lbENhcnRNb2JpbGUgPSAoeyBlY29tZXJjZSB9KSA9PiB7XG4gICAgY29uc3QgeyBwcm9kdWN0cywgZ2V0UHJvZHVjdHMsIHJlbW92ZUl0ZW0gfSA9IHVzZUVjb21lcmNlKCk7XG4gICAgY29uc3QgeyB0aXRsZSwgdGh1bWJuYWlsSW1hZ2UgfSA9IHVzZVByb2R1Y3QoKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZUNhcnRJdGVtKGUsIHByb2R1Y3QpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZW1vdmVJdGVtKHByb2R1Y3QsIGVjb21lcmNlLmNhcnRJdGVtcywgJ2NhcnQnKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZWNvbWVyY2UuY2FydEl0ZW1zKSB7XG4gICAgICAgICAgICBnZXRQcm9kdWN0cyhlY29tZXJjZS5jYXJ0SXRlbXMpO1xuICAgICAgICB9XG4gICAgfSwgW2Vjb21lcmNlXSk7XG4gICAgLy92aWV3XG4gICAgbGV0IGNhcnRJdGVtc1ZpZXcsIGZvb3RlclZpZXc7XG5cbiAgICBpZiAocHJvZHVjdHMgJiYgcHJvZHVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBhbW91bnQgPSBjYWxjdWxhdGVBbW91bnQocHJvZHVjdHMpO1xuICAgICAgICBjb25zdCBpdGVtcyA9IHByb2R1Y3RzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wcm9kdWN0LS1jYXJ0LW1vYmlsZVwiIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X190aHVtYm5haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0L1twaWRdXCIgYXM9e2AvcHJvZHVjdC8ke2l0ZW0uaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT57dGh1bWJuYWlsSW1hZ2UoaXRlbSl9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19yZW1vdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZVJlbW92ZUNhcnRJdGVtKGUsIGl0ZW0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY3Jvc3NcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAge3RpdGxlKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3QvW3BpZF1cIiBhcz17YC9wcm9kdWN0LyR7aXRlbS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX3RpdGxlXCI+e2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Tb2xkIGJ5Ojwvc3Ryb25nPiB7aXRlbS52ZW5kb3J9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucXVhbnRpdHl9IHggJHtpdGVtLnByaWNlfVxuICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpO1xuICAgICAgICBjYXJ0SXRlbXNWaWV3ID0gPGRpdiBjbGFzc05hbWU9XCJwcy1jYXJ0X19pdGVtc1wiPntpdGVtc308L2Rpdj47XG4gICAgICAgIGZvb3RlclZpZXcgPSAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWNhcnRfX2Zvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgU3ViIFRvdGFsOjxzdHJvbmc+JHthbW91bnR9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FjY291bnQvc2hvcHBpbmctY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHMtYnRuXCI+VmlldyBDYXJ0PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjb3VudC9jaGVja291dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHMtYnRuXCI+Q2hlY2tvdXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcnRJdGVtc1ZpZXcgPSA8cD5DYXJ0IGVtcHR5ITwvcD47XG4gICAgICAgIGZvb3RlclZpZXcgPSAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWNhcnRfX2Zvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcy1idG4gcHMtYnRuLS1mdWxsd2lkdGhcIj5TaG9wIG5vdzwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1jYXJ0LS1tb2JpbGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtY2FydF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgIHtjYXJ0SXRlbXNWaWV3fVxuICAgICAgICAgICAgICAgIHtmb290ZXJWaWV3fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlKShQYW5lbENhcnRNb2JpbGUpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdhbnRkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgY2F0ZWdvcmllcyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvc3RhdGljL2RhdGEvc3RhdGljLWNhdGVnb3JpZXMuanNvbic7XG5cbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcblxuY2xhc3MgUGFuZWxDYXRlZ29yaWVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcm9vdFN1Ym1lbnVLZXlzID0gWydzdWIxJywgJ3N1YjInLCAnc3ViNCddO1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG9wZW5LZXlzOiBbJ3N1YjEnXSxcbiAgICB9O1xuICAgIG9uT3BlbkNoYW5nZSA9IG9wZW5LZXlzID0+IHtcbiAgICAgICAgY29uc3QgbGF0ZXN0T3BlbktleSA9IG9wZW5LZXlzLmZpbmQoXG4gICAgICAgICAgICBrZXkgPT4gdGhpcy5zdGF0ZS5vcGVuS2V5cy5pbmRleE9mKGtleSkgPT09IC0xXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0aGlzLnJvb3RTdWJtZW51S2V5cy5pbmRleE9mKGxhdGVzdE9wZW5LZXkpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5LZXlzIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgb3BlbktleXM6IGxhdGVzdE9wZW5LZXkgPyBbbGF0ZXN0T3BlbktleV0gOiBbXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICAgICAgICAgICAgb3BlbktleXM9e3RoaXMuc3RhdGUub3BlbktleXN9XG4gICAgICAgICAgICAgICAgb25PcGVuQ2hhbmdlPXt0aGlzLm9uT3BlbkNoYW5nZX0+XG4gICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IChcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2Avc2hvcD9jYXRlZ29yeT0ke2NhdGVnb3J5LnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFuZWxDYXRlZ29yaWVzO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IE1lbnUgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IG1lbnVQcmltYXJ5IH0gZnJvbSAnfi9wdWJsaWMvc3RhdGljL2RhdGEvbWVudSc7XG5pbXBvcnQgbWVudV9kYXRhIGZyb20gJ34vcHVibGljL3N0YXRpYy9kYXRhL21lbnUnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xuXG5jbGFzcyBQYW5lbE1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICByb290U3VibWVudUtleXMgPSBbJ3N1YjEnLCAnc3ViMicsICdzdWI0J107XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgb3BlbktleXM6IFtdLFxuICAgIH07XG5cbiAgICBvbk9wZW5DaGFuZ2UgPSAob3BlbktleXMpID0+IHtcbiAgICAgICAgY29uc3QgbGF0ZXN0T3BlbktleSA9IG9wZW5LZXlzLmZpbmQoXG4gICAgICAgICAgICAoa2V5KSA9PiB0aGlzLnN0YXRlLm9wZW5LZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTFcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRoaXMucm9vdFN1Ym1lbnVLZXlzLmluZGV4T2YobGF0ZXN0T3BlbktleSkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbktleXMgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBvcGVuS2V5czogbGF0ZXN0T3BlbktleSA/IFtsYXRlc3RPcGVuS2V5XSA6IFtdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgICBtb2RlPVwiaW5saW5lXCJcbiAgICAgICAgICAgICAgICBvcGVuS2V5cz17dGhpcy5zdGF0ZS5vcGVuS2V5c31cbiAgICAgICAgICAgICAgICBvbk9wZW5DaGFuZ2U9e3RoaXMub25PcGVuQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtLW1vYmlsZS0yXCI+XG4gICAgICAgICAgICAgICAge21lbnVfZGF0YS5tZW51UHJpbWFyeS5tZW51XzEubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnN1Yk1lbnUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN1Yk1lbnVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0udXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57aXRlbS50ZXh0fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uc3ViTWVudS5tYXAoKHN1Ykl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtzdWJJdGVtLnRleHR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3N1Ykl0ZW0udXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3N1Ykl0ZW0udGV4dH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3ViTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5tZWdhQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3ViTWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS51cmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnRleHR9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5tZWdhQ29udGVudC5tYXAoKG1lZ2FJdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3ViTWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bWVnYUl0ZW0uaGVhZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PHNwYW4+e21lZ2FJdGVtLmhlYWRpbmd9PC9zcGFuPn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lZ2FJdGVtLm1lZ2FJdGVtcy5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtZWdhU3ViSXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bWVnYVN1Ykl0ZW0udGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS51cmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZWdhU3ViSXRlbS50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdWJNZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS50ZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udHlwZSA9PT0gJ2R5bmFtaWMnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgJHtpdGVtLnVybH0vW3BpZF1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgJHtpdGVtLnVybH0vJHtpdGVtLmVuZFBvaW50fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGw8YT57aXRlbS50ZXh0fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0udXJsfSBhcz17aXRlbS5hbGlhc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2l0ZW0udGV4dH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4gc3RhdGUuc2V0dGluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQYW5lbE1lbnUpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IFBhbmVsU2VhcmNoID0gKCkgPT4ge1xuICAgIGNvbnN0IFtrZXl3b3JkLCBzZXRLZXl3b3JkXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGtleXdvcmQgIT09ICcnKSB7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaChgL3NlYXJjaD9rZXl3b3JkPSR7a2V5d29yZH1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcGFuZWxfX3NlYXJjaC1yZXN1bHRzXCI+XG4gICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBzLWZvcm0tLXNlYXJjaC1tb2JpbGVcIlxuICAgICAgICAgICAgICAgIGFjdGlvbj1cIi9cIlxuICAgICAgICAgICAgICAgIG1ldGhvZD1cImdldFwiXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVTdWJtaXQoZSl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cC0tbmVzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBzb21ldGhpbmcuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRLZXl3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbWFnbmlmaWVyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhbmVsU2VhcmNoO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb2R1Y3RSZXBvc2l0b3J5IGZyb20gJ34vcmVwb3NpdG9yaWVzL1Byb2R1Y3RSZXBvc2l0b3J5JztcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge1xuICAgIHNldENvbXBhcmVJdGVtcyxcbiAgICBzZXRXaXNobGlzdFR0ZW1zLFxuICAgIHNldENhcnRJdGVtcyxcbn0gZnJvbSAnfi9zdG9yZS9lY29tZXJjZS9hY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VFY29tZXJjZSgpIHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtjYXJ0SXRlbXNPbkNvb2tpZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbY29va2llcywgc2V0Q29va2llXSA9IHVzZUNvb2tpZXMoWydjYXJ0J10pO1xuICAgIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZGluZyxcbiAgICAgICAgY2FydEl0ZW1zT25Db29raWUsXG4gICAgICAgIHByb2R1Y3RzLFxuICAgICAgICBnZXRQcm9kdWN0czogYXN5bmMgKHBheWxvYWQsIGdyb3VwID0gJycpID0+IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICBpZiAocGF5bG9hZCAmJiBwYXlsb2FkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcXVlcmllcyA9ICcnO1xuICAgICAgICAgICAgICAgIHBheWxvYWQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocXVlcmllcyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJpZXMgPSBgaWRfaW49JHtpdGVtLmlkfWA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyaWVzID0gcXVlcmllcyArIGAmaWRfaW49JHtpdGVtLmlkfWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCBQcm9kdWN0UmVwb3NpdG9yeS5nZXRQcm9kdWN0c0J5SWRzKFxuICAgICAgICAgICAgICAgICAgICBxdWVyaWVzXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VEYXRhICYmIHJlc3BvbnNlRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChncm91cCA9PT0gJ2NhcnQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FydEl0ZW1zID0gcmVzcG9uc2VEYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV4aXN0SXRlbSA9IGNhcnRJdGVtcy5maW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmFsKSA9PiB2YWwuaWQgPT09IGl0ZW0uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGlzdEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RJdGVtLnF1YW50aXR5ID0gaXRlbS5xdWFudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJvZHVjdHMoY2FydEl0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDI1MFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgc2V0UHJvZHVjdHMoW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGluY3JlYXNlUXR5OiAocGF5bG9hZCwgY3VycmVudENhcnQpID0+IHtcbiAgICAgICAgICAgIGxldCBjYXJ0ID0gW107XG4gICAgICAgICAgICBpZiAoY3VycmVudENhcnQpIHtcbiAgICAgICAgICAgICAgICBjYXJ0ID0gY3VycmVudENhcnQ7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RJdGVtID0gY2FydC5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwYXlsb2FkLmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0SXRlbS5xdWFudGl0eSA9IGV4aXN0SXRlbS5xdWFudGl0eSArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldENvb2tpZSgnY2FydCcsIGNhcnQsIHsgcGF0aDogJy8nIH0pO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldENhcnRJdGVtcyhjYXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2FydDtcbiAgICAgICAgfSxcblxuICAgICAgICBkZWNyZWFzZVF0eTogKHBheWxvYWQsIGN1cnJlbnRDYXJ0KSA9PiB7XG4gICAgICAgICAgICBsZXQgY2FydCA9IFtdO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRDYXJ0KSB7XG4gICAgICAgICAgICAgICAgY2FydCA9IGN1cnJlbnRDYXJ0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0SXRlbSA9IGNhcnQuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcGF5bG9hZC5pZCk7XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RJdGVtLnF1YW50aXR5ID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RJdGVtLnF1YW50aXR5ID0gZXhpc3RJdGVtLnF1YW50aXR5IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRDb29raWUoJ2NhcnQnLCBjYXJ0LCB7IHBhdGg6ICcvJyB9KTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRDYXJ0SXRlbXMoY2FydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNhcnQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkSXRlbTogKG5ld0l0ZW0sIGl0ZW1zLCBncm91cCkgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld0l0ZW1zID0gW107XG4gICAgICAgICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgICAgICAgICBuZXdJdGVtcyA9IGl0ZW1zO1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0SXRlbSA9IGl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IG5ld0l0ZW0uaWQpO1xuICAgICAgICAgICAgICAgIGlmIChleGlzdEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwID09PSAnY2FydCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0SXRlbS5xdWFudGl0eSArPSBuZXdJdGVtLnF1YW50aXR5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3SXRlbXMucHVzaChuZXdJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0l0ZW1zLnB1c2gobmV3SXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ3JvdXAgPT09ICdjYXJ0Jykge1xuICAgICAgICAgICAgICAgIHNldENvb2tpZSgnY2FydCcsIG5ld0l0ZW1zLCB7IHBhdGg6ICcvJyB9KTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRDYXJ0SXRlbXMobmV3SXRlbXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChncm91cCA9PT0gJ3dpc2hsaXN0Jykge1xuICAgICAgICAgICAgICAgIHNldENvb2tpZSgnd2lzaGxpc3QnLCBuZXdJdGVtcywgeyBwYXRoOiAnLycgfSk7XG5cbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRXaXNobGlzdFR0ZW1zKG5ld0l0ZW1zKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChncm91cCA9PT0gJ2NvbXBhcmUnKSB7XG4gICAgICAgICAgICAgICAgc2V0Q29va2llKCdjb21wYXJlJywgbmV3SXRlbXMsIHsgcGF0aDogJy8nIH0pO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldENvbXBhcmVJdGVtcyhuZXdJdGVtcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld0l0ZW1zO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZUl0ZW06IChzZWxlY3RlZEl0ZW0sIGl0ZW1zLCBncm91cCkgPT4ge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRJdGVtcyA9IGl0ZW1zO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjdXJyZW50SXRlbXMuZmluZEluZGV4KFxuICAgICAgICAgICAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gc2VsZWN0ZWRJdGVtLmlkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50SXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChncm91cCA9PT0gJ2NhcnQnKSB7XG4gICAgICAgICAgICAgICAgc2V0Q29va2llKCdjYXJ0JywgY3VycmVudEl0ZW1zLCB7IHBhdGg6ICcvJyB9KTtcblxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldENhcnRJdGVtcyhjdXJyZW50SXRlbXMpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGdyb3VwID09PSAnd2lzaGxpc3QnKSB7XG4gICAgICAgICAgICAgICAgc2V0Q29va2llKCd3aXNobGlzdCcsIGN1cnJlbnRJdGVtcywgeyBwYXRoOiAnLycgfSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0V2lzaGxpc3RUdGVtcyhjdXJyZW50SXRlbXMpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGdyb3VwID09PSAnY29tcGFyZScpIHtcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoJ2NvbXBhcmUnLCBjdXJyZW50SXRlbXMsIHsgcGF0aDogJy8nIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZUl0ZW1zOiAoZ3JvdXApID0+IHtcbiAgICAgICAgICAgIGlmIChncm91cCA9PT0gJ3dpc2hsaXN0Jykge1xuICAgICAgICAgICAgICAgIHNldENvb2tpZSgnd2lzaGxpc3QnLCBbXSwgeyBwYXRoOiAnLycgfSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0V2lzaGxpc3RUdGVtcyhbXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdyb3VwID09PSAnY29tcGFyZScpIHtcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoJ2NvbXBhcmUnLCBbXSwgeyBwYXRoOiAnLycgfSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0Q29tcGFyZUl0ZW1zKFtdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ3JvdXAgPT09ICdjYXJ0Jykge1xuICAgICAgICAgICAgICAgIHNldENvb2tpZSgnY2FydCcsIFtdLCB7IHBhdGg6ICcvJyB9KTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRDYXJ0SXRlbXMoW10pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXp5TG9hZCBmcm9tICdyZWFjdC1sYXp5bG9hZCc7XG5pbXBvcnQgeyBiYXNlVXJsIH0gZnJvbSAnfi9yZXBvc2l0b3JpZXMvUmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gJ34vdXRpbGl0aWVzL3Byb2R1Y3QtaGVscGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmZ1bmN0aW9uIGdldEltYWdlVVJMKHNvdXJjZSwgc2l6ZSkge1xuICAgIGxldCBpbWFnZSwgaW1hZ2VVUkw7XG5cbiAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGlmIChzaXplICYmIHNpemUgPT09ICdsYXJnZScpIHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UuZm9ybWF0cy5sYXJnZSkge1xuICAgICAgICAgICAgICAgIGltYWdlID0gc291cmNlLmZvcm1hdHMubGFyZ2UudXJsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbWFnZSA9IHNvdXJjZS51cmw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2l6ZSAmJiBzaXplID09PSAnbWVkaXVtJykge1xuICAgICAgICAgICAgaWYgKHNvdXJjZS5mb3JtYXRzLm1lZGl1bSkge1xuICAgICAgICAgICAgICAgIGltYWdlID0gc291cmNlLmZvcm1hdHMubWVkaXVtLnVybDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW1hZ2UgPSBzb3VyY2UudXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNpemUgJiYgc2l6ZSA9PT0gJ3RodW1ibmFpbCcpIHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UuZm9ybWF0cy50aHVtYm5haWwpIHtcbiAgICAgICAgICAgICAgICBpbWFnZSA9IHNvdXJjZS5mb3JtYXRzLnNvdXJjZS51cmw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGltYWdlID0gc291cmNlLnVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzaXplICYmIHNpemUgPT09ICdzbWFsbCcpIHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UuZm9ybWF0cy5zbWFsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2UgPSBzb3VyY2UuZm9ybWF0cy5zbWFsbC51cmw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGltYWdlID0gc291cmNlLnVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGltYWdlID0gc291cmNlLnVybDtcbiAgICAgICAgfVxuICAgICAgICBpbWFnZVVSTCA9IGAke2Jhc2VVcmx9JHtpbWFnZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGltYWdlVVJMID0gYC9zdGF0aWMvaW1nL3VuZGVmaW5lZC1wcm9kdWN0LXRodW1ibmFpbC5qcGdgO1xuICAgIH1cbiAgICByZXR1cm4gaW1hZ2VVUkw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVByb2R1Y3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGh1bWJuYWlsSW1hZ2U6IChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICBpZiAocGF5bG9hZCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLnRodW1ibmFpbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Z2V0SW1hZ2VVUkwocGF5bG9hZC50aHVtYm5haWwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtnZXRJbWFnZVVSTChwYXlsb2FkLnRodW1ibmFpbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXp5TG9hZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJpY2U6IChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmlldztcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLnNhbGVfcHJpY2UpIHtcbiAgICAgICAgICAgICAgICB2aWV3ID0gKFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19wcmljZSBzYWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdEN1cnJlbmN5KHBheWxvYWQuc2FsZV9wcmljZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGVsIGNsYXNzTmFtZT1cIm1sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShwYXlsb2FkLnByaWNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGVsPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlldyA9IChcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0Q3VycmVuY3kocGF5bG9hZC5wcmljZSl9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZpZXc7XG4gICAgICAgIH0sXG4gICAgICAgIGJhZGdlczogKHBheWxvYWQpID0+IHtcbiAgICAgICAgICAgIGxldCB2aWV3ID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmJhZGdlcyAmJiBwYXlsb2FkLmJhZGdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBwYXlsb2FkLmJhZGdlcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT09ICdob3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX2JhZGdlIGhvdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT09ICduZXcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX2JhZGdlIG5ld1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT09ICdzYWxlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19iYWRnZSBzYWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2FsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2aWV3ID0gPGRpdiBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19iYWRnZXNcIj57aXRlbXN9PC9kaXY+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZpZXc7XG4gICAgICAgIH0sXG4gICAgICAgIGJhZGdlOiAocGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZpZXc7XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5iYWRnZSAmJiBwYXlsb2FkLmJhZGdlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmlldyA9IHBheWxvYWQuYmFkZ2UubWFwKChiYWRnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmFkZ2UudHlwZSA9PT0gJ3NhbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fYmFkZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JhZGdlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiYWRnZS50eXBlID09PSAnb3V0U3RvY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fYmFkZ2Ugb3V0LXN0b2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiYWRnZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fYmFkZ2UgaG90XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiYWRnZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXlsb2FkLnNhbGVfcHJpY2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXNjb3VudFBlcmNlbnQgPSAoXG4gICAgICAgICAgICAgICAgICAgICgocGF5bG9hZC5wcmljZSAtIHBheWxvYWQuc2FsZV9wcmljZSkgL1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZC5zYWxlX3ByaWNlKSAqXG4gICAgICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgICAgICkudG9GaXhlZCgwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX2JhZGdlXCI+LXtkaXNjb3VudFBlcmNlbnR9JTwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmlldztcbiAgICAgICAgfSxcbiAgICAgICAgYnJhbmQ6IChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmlldztcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmJyYW5kcyAmJiBwYXlsb2FkLmJyYW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmlldyA9IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWNhcGl0YWxpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGF5bG9hZC5icmFuZHNbMF0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZXcgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1jYXBpdGFsaXplXCI+Tm8gQnJhbmQ8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZpZXc7XG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiAocGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZpZXcgPSAoXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0L1twaWRdXCIgYXM9e2AvcHJvZHVjdC8ke3BheWxvYWQuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX3RpdGxlXCI+e3BheWxvYWQudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gdmlldztcbiAgICAgICAgfSxcbiAgICB9O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtjb25zdCBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIHByZWZldGNoKHJvdXRlcixocmVmLGFzLG9wdGlvbnMpe2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ3x8IXJvdXRlcilyZXR1cm47aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbi8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5yb3V0ZXIucHJlZmV0Y2goaHJlZixhcyxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtjb25zdCBjdXJMb2NhbGU9b3B0aW9ucyYmdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG5wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldPXRydWU7fWZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCl7Y29uc3R7dGFyZ2V0fT1ldmVudC5jdXJyZW50VGFyZ2V0O3JldHVybiB0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGV2ZW50Lm1ldGFLZXl8fGV2ZW50LmN0cmxLZXl8fGV2ZW50LnNoaWZ0S2V5fHxldmVudC5hbHRLZXl8fC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG5ldmVudC5uYXRpdmVFdmVudCYmZXZlbnQubmF0aXZlRXZlbnQud2hpY2g9PT0yO31mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKXtjb25zdHtub2RlTmFtZX09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYoaXNNb2RpZmllZEV2ZW50KGUpfHwhKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSkpey8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxucmV0dXJuO31lLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG5pZihzY3JvbGw9PW51bGwmJmFzLmluZGV4T2YoJyMnKT49MCl7c2Nyb2xsPWZhbHNlO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbnJvdXRlcltyZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3csbG9jYWxlLHNjcm9sbH0pO31mdW5jdGlvbiBMaW5rKHByb3BzKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7ZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3Mpe3JldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZD17aHJlZjp0cnVlfTtjb25zdCByZXF1aXJlZFByb3BzPU9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7cmVxdWlyZWRQcm9wcy5mb3JFYWNoKGtleT0+e2lmKGtleT09PSdocmVmJyl7aWYocHJvcHNba2V5XT09bnVsbHx8dHlwZW9mIHByb3BzW2tleV0hPT0nc3RyaW5nJyYmdHlwZW9mIHByb3BzW2tleV0hPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6cHJvcHNba2V5XT09PW51bGw/J251bGwnOnR5cGVvZiBwcm9wc1trZXldfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZD17YXM6dHJ1ZSxyZXBsYWNlOnRydWUsc2Nyb2xsOnRydWUsc2hhbGxvdzp0cnVlLHBhc3NIcmVmOnRydWUscHJlZmV0Y2g6dHJ1ZSxsb2NhbGU6dHJ1ZX07Y29uc3Qgb3B0aW9uYWxQcm9wcz1PYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO29wdGlvbmFsUHJvcHMuZm9yRWFjaChrZXk9Pntjb25zdCB2YWxUeXBlPXR5cGVvZiBwcm9wc1trZXldO2lmKGtleT09PSdhcycpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyYmdmFsVHlwZSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdsb2NhbGUnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J3JlcGxhY2UnfHxrZXk9PT0nc2Nyb2xsJ3x8a2V5PT09J3NoYWxsb3cnfHxrZXk9PT0ncGFzc0hyZWYnfHxrZXk9PT0ncHJlZmV0Y2gnKXtpZihwcm9wc1trZXldIT1udWxsJiZ2YWxUeXBlIT09J2Jvb2xlYW4nKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYGJvb2xlYW5gJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbmNvbnN0IGhhc1dhcm5lZD1fcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO2lmKHByb3BzLnByZWZldGNoJiYhaGFzV2FybmVkLmN1cnJlbnQpe2hhc1dhcm5lZC5jdXJyZW50PXRydWU7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319Y29uc3QgcD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO2NvbnN0IHJvdXRlcj0oMCxfcm91dGVyMi51c2VSb3V0ZXIpKCk7Y29uc3R7aHJlZixhc309X3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e2NvbnN0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT0oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuaHJlZix0cnVlKTtyZXR1cm57aHJlZjpyZXNvbHZlZEhyZWYsYXM6cHJvcHMuYXM/KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmFzKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWZ9O30sW3JvdXRlcixwcm9wcy5ocmVmLHByb3BzLmFzXSk7bGV0e2NoaWxkcmVuLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlfT1wcm9wczsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG5sZXQgY2hpbGQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt0cnl7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jYXRjaChlcnIpe3Rocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9fWVsc2V7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jb25zdCBjaGlsZFJlZj1jaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZjtjb25zdFtzZXRJbnRlcnNlY3Rpb25SZWYsaXNWaXNpYmxlXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4J30pO2NvbnN0IHNldFJlZj1fcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjayhlbD0+e3NldEludGVyc2VjdGlvblJlZihlbCk7aWYoY2hpbGRSZWYpe2lmKHR5cGVvZiBjaGlsZFJlZj09PSdmdW5jdGlvbicpY2hpbGRSZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkUmVmPT09J29iamVjdCcpe2NoaWxkUmVmLmN1cnJlbnQ9ZWw7fX19LFtjaGlsZFJlZixzZXRJbnRlcnNlY3Rpb25SZWZdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2NvbnN0IHNob3VsZFByZWZldGNoPWlzVmlzaWJsZSYmcCYmKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKTtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Y29uc3QgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV07aWYoc2hvdWxkUHJlZmV0Y2gmJiFpc1ByZWZldGNoZWQpe3ByZWZldGNoKHJvdXRlcixocmVmLGFzLHtsb2NhbGU6Y3VyTG9jYWxlfSk7fX0sW2FzLGhyZWYsaXNWaXNpYmxlLGxvY2FsZSxwLHJvdXRlcl0pO2NvbnN0IGNoaWxkUHJvcHM9e3JlZjpzZXRSZWYsb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7bGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSk7fX19O2NoaWxkUHJvcHMub25Nb3VzZUVudGVyPWU9PntpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXByZWZldGNoKHJvdXRlcixocmVmLGFzLHtwcmlvcml0eTp0cnVlfSk7fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYocHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbi8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG5jb25zdCBsb2NhbGVEb21haW49cm91dGVyJiZyb3V0ZXIuaXNMb2NhbGVEb21haW4mJigwLF9yb3V0ZXIuZ2V0RG9tYWluTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIubG9jYWxlcyxyb3V0ZXImJnJvdXRlci5kb21haW5Mb2NhbGVzKTtjaGlsZFByb3BzLmhyZWY9bG9jYWxlRG9tYWlufHwoMCxfcm91dGVyLmFkZEJhc2VQYXRoKSgoMCxfcm91dGVyLmFkZExvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmRlZmF1bHRMb2NhbGUpKTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxjaGlsZFByb3BzKTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJywnZG9tYWluTG9jYWxlcyddO2NvbnN0IHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTtjb25zdCBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09KC4uLmFyZ3MpPT57Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwoLi4uYXJncyk9Pntjb25zdCBldmVudEZpZWxkPWBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO2NvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7Y29uc3QgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmNvbnN0IGNyZWF0ZVJvdXRlcj0oLi4uYXJncyk9PntzaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSk/W106e30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPSguLi5hcmdzKT0+e3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9YHdpdGhSb3V0ZXIoJHtuYW1lfSlgO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVMb2NhbGVQYXRoPW5vcm1hbGl6ZUxvY2FsZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZSxsb2NhbGVzKXtsZXQgZGV0ZWN0ZWRMb2NhbGU7Ly8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG5jb25zdCBwYXRobmFtZVBhcnRzPXBhdGhuYW1lLnNwbGl0KCcvJyk7KGxvY2FsZXN8fFtdKS5zb21lKGxvY2FsZT0+e2lmKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKT09PWxvY2FsZS50b0xvd2VyQ2FzZSgpKXtkZXRlY3RlZExvY2FsZT1sb2NhbGU7cGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwxKTtwYXRobmFtZT1wYXRobmFtZVBhcnRzLmpvaW4oJy8nKXx8Jy8nO3JldHVybiB0cnVlO31yZXR1cm4gZmFsc2U7fSk7cmV0dXJue3BhdGhuYW1lLGRldGVjdGVkTG9jYWxlfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtbG9jYWxlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PW1pdHQ7Lypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovIC8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5mdW5jdGlvbiBtaXR0KCl7Y29uc3QgYWxsPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue29uKHR5cGUsaGFuZGxlcil7OyhhbGxbdHlwZV18fChhbGxbdHlwZV09W10pKS5wdXNoKGhhbmRsZXIpO30sb2ZmKHR5cGUsaGFuZGxlcil7aWYoYWxsW3R5cGVdKXthbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpPj4+MCwxKTt9fSxlbWl0KHR5cGUsLi4uZXZ0cyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuOyhhbGxbdHlwZV18fFtdKS5zbGljZSgpLm1hcChoYW5kbGVyPT57aGFuZGxlciguLi5ldnRzKTt9KTt9fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0RG9tYWluTG9jYWxlPWdldERvbWFpbkxvY2FsZTtleHBvcnRzLmFkZExvY2FsZT1hZGRMb2NhbGU7ZXhwb3J0cy5kZWxMb2NhbGU9ZGVsTG9jYWxlO2V4cG9ydHMuaGFzQmFzZVBhdGg9aGFzQmFzZVBhdGg7ZXhwb3J0cy5hZGRCYXNlUGF0aD1hZGRCYXNlUGF0aDtleHBvcnRzLmRlbEJhc2VQYXRoPWRlbEJhc2VQYXRoO2V4cG9ydHMuaXNMb2NhbFVSTD1pc0xvY2FsVVJMO2V4cG9ydHMuaW50ZXJwb2xhdGVBcz1pbnRlcnBvbGF0ZUFzO2V4cG9ydHMucmVzb2x2ZUhyZWY9cmVzb2x2ZUhyZWY7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9yb3V0ZUxvYWRlcj1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTt2YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGg9cmVxdWlyZShcIi4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX21pdHQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vdXRpbHNcIik7dmFyIF9pc0R5bmFtaWM9cmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7dmFyIF9yZXNvbHZlUmV3cml0ZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTt2YXIgX3JvdXRlTWF0Y2hlcj1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO3ZhciBfcm91dGVSZWdleD1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fS8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7ZGV0ZWN0RG9tYWluTG9jYWxlPXJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7fWNvbnN0IGJhc2VQYXRoPXByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEh8fCcnO2Z1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLHtjYW5jZWxsZWQ6dHJ1ZX0pO31mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgscHJlZml4KXtyZXR1cm4gcHJlZml4JiZwYXRoLnN0YXJ0c1dpdGgoJy8nKT9wYXRoPT09Jy8nPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShwcmVmaXgpOmAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKT09PScvJz9wYXRoLnN1YnN0cmluZygxKTpwYXRofWA6cGF0aDt9ZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsbG9jYWxlLGxvY2FsZXMsZG9tYWluTG9jYWxlcyl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7bG9jYWxlPWxvY2FsZXx8KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aCxsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtjb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsbG9jYWxlKTtpZihkZXRlY3RlZERvbWFpbil7cmV0dXJuYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGh8fCcnfSR7bG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7bG9jYWxlfWB9JHtwYXRofWA7fXJldHVybiBmYWxzZTt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCxsb2NhbGUsZGVmYXVsdExvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmbG9jYWxlIT09ZGVmYXVsdExvY2FsZSYmIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpJiZwYXRoTG93ZXIhPT0nLycrbG9jYWxlTG93ZXI/YWRkUGF0aFByZWZpeChwYXRoLCcvJytsb2NhbGUpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCxsb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJihwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKXx8cGF0aExvd2VyPT09Jy8nK2xvY2FsZUxvd2VyKT8ocGF0aG5hbWUubGVuZ3RoPT09bG9jYWxlLmxlbmd0aCsxPycvJzonJykrcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCsxKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpe2NvbnN0IHF1ZXJ5SW5kZXg9cGF0aC5pbmRleE9mKCc/Jyk7Y29uc3QgaGFzaEluZGV4PXBhdGguaW5kZXhPZignIycpO2lmKHF1ZXJ5SW5kZXg+LTF8fGhhc2hJbmRleD4tMSl7cGF0aD1wYXRoLnN1YnN0cmluZygwLHF1ZXJ5SW5kZXg+LTE/cXVlcnlJbmRleDpoYXNoSW5kZXgpO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoTm9RdWVyeUhhc2gocGF0aCk7cmV0dXJuIHBhdGg9PT1iYXNlUGF0aHx8cGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoKycvJyk7fWZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpey8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG5yZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLGJhc2VQYXRoKTt9ZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7aWYoIXBhdGguc3RhcnRzV2l0aCgnLycpKXBhdGg9YC8ke3BhdGh9YDtyZXR1cm4gcGF0aDt9LyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpey8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbmlmKHVybC5zdGFydHNXaXRoKCcvJyl8fHVybC5zdGFydHNXaXRoKCcjJyl8fHVybC5zdGFydHNXaXRoKCc/JykpcmV0dXJuIHRydWU7dHJ5ey8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuY29uc3QgbG9jYXRpb25PcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IHJlc29sdmVkPW5ldyBVUkwodXJsLGxvY2F0aW9uT3JpZ2luKTtyZXR1cm4gcmVzb2x2ZWQub3JpZ2luPT09bG9jYXRpb25PcmlnaW4mJmhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTt9Y2F0Y2goXyl7cmV0dXJuIGZhbHNlO319ZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KXtsZXQgaW50ZXJwb2xhdGVkUm91dGU9Jyc7Y29uc3QgZHluYW1pY1JlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCBkeW5hbWljR3JvdXBzPWR5bmFtaWNSZWdleC5ncm91cHM7Y29uc3QgZHluYW1pY01hdGNoZXM9Ly8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuKGFzUGF0aG5hbWUhPT1yb3V0ZT8oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKTonJyl8fC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxucXVlcnk7aW50ZXJwb2xhdGVkUm91dGU9cm91dGU7Y29uc3QgcGFyYW1zPU9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO2lmKCFwYXJhbXMuZXZlcnkocGFyYW09PntsZXQgdmFsdWU9ZHluYW1pY01hdGNoZXNbcGFyYW1dfHwnJztjb25zdHtyZXBlYXQsb3B0aW9uYWx9PWR5bmFtaWNHcm91cHNbcGFyYW1dOy8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxubGV0IHJlcGxhY2VkPWBbJHtyZXBlYXQ/Jy4uLic6Jyd9JHtwYXJhbX1dYDtpZihvcHRpb25hbCl7cmVwbGFjZWQ9YCR7IXZhbHVlPycvJzonJ31bJHtyZXBsYWNlZH1dYDt9aWYocmVwZWF0JiYhQXJyYXkuaXNBcnJheSh2YWx1ZSkpdmFsdWU9W3ZhbHVlXTtyZXR1cm4ob3B0aW9uYWx8fHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSYmKC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuaW50ZXJwb2xhdGVkUm91dGU9aW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCxyZXBlYXQ/dmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3Rcbi8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbi8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4vLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbnNlZ21lbnQ9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KSkuam9pbignLycpOmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpfHwnLycpO30pKXtpbnRlcnBvbGF0ZWRSb3V0ZT0nJzsvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbi8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG59cmV0dXJue3BhcmFtcyxyZXN1bHQ6aW50ZXJwb2xhdGVkUm91dGV9O31mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKXtjb25zdCBmaWx0ZXJlZFF1ZXJ5PXt9O09iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKGtleT0+e2lmKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSl7ZmlsdGVyZWRRdWVyeVtrZXldPXF1ZXJ5W2tleV07fX0pO3JldHVybiBmaWx0ZXJlZFF1ZXJ5O30vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLGhyZWYscmVzb2x2ZUFzKXsvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xubGV0IGJhc2U7Y29uc3QgdXJsQXNTdHJpbmc9dHlwZW9mIGhyZWY9PT0nc3RyaW5nJz9ocmVmOigwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoaHJlZik7dHJ5e2Jhc2U9bmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJyk/cm91dGVyLmFzUGF0aDpyb3V0ZXIucGF0aG5hbWUsJ2h0dHA6Ly9uJyk7fWNhdGNoKF8pey8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG5iYXNlPW5ldyBVUkwoJy8nLCdodHRwOi8vbicpO30vLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuaWYoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fXRyeXtjb25zdCBmaW5hbFVybD1uZXcgVVJMKHVybEFzU3RyaW5nLGJhc2UpO2ZpbmFsVXJsLnBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShmaW5hbFVybC5wYXRobmFtZSk7bGV0IGludGVycG9sYXRlZEFzPScnO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKGZpbmFsVXJsLnBhdGhuYW1lKSYmZmluYWxVcmwuc2VhcmNoUGFyYW1zJiZyZXNvbHZlQXMpe2NvbnN0IHF1ZXJ5PSgwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO2NvbnN0e3Jlc3VsdCxwYXJhbXN9PWludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsZmluYWxVcmwucGF0aG5hbWUscXVlcnkpO2lmKHJlc3VsdCl7aW50ZXJwb2xhdGVkQXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6cmVzdWx0LGhhc2g6ZmluYWxVcmwuaGFzaCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKX0pO319Ly8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbmNvbnN0IHJlc29sdmVkSHJlZj1maW5hbFVybC5vcmlnaW49PT1iYXNlLm9yaWdpbj9maW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpOmZpbmFsVXJsLmhyZWY7cmV0dXJuIHJlc29sdmVBcz9bcmVzb2x2ZWRIcmVmLGludGVycG9sYXRlZEFzfHxyZXNvbHZlZEhyZWZdOnJlc29sdmVkSHJlZjt9Y2F0Y2goXyl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO319ZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKXtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO3JldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pP3VybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk6dXJsO31mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLHVybCxhcyl7Ly8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4vLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxubGV0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT1yZXNvbHZlSHJlZihyb3V0ZXIsdXJsLHRydWUpO2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgaHJlZkhhZE9yaWdpbj1yZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO2NvbnN0IGFzSGFkT3JpZ2luPXJlc29sdmVkQXMmJnJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO3Jlc29sdmVkSHJlZj1zdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO3Jlc29sdmVkQXM9cmVzb2x2ZWRBcz9zdHJpcE9yaWdpbihyZXNvbHZlZEFzKTpyZXNvbHZlZEFzO2NvbnN0IHByZXBhcmVkVXJsPWhyZWZIYWRPcmlnaW4/cmVzb2x2ZWRIcmVmOmFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7Y29uc3QgcHJlcGFyZWRBcz1hcz9zdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsYXMpKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWY7cmV0dXJue3VybDpwcmVwYXJlZFVybCxhczphc0hhZE9yaWdpbj9wcmVwYXJlZEFzOmFkZEJhc2VQYXRoKHByZXBhcmVkQXMpfTt9ZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyl7Y29uc3QgY2xlYW5QYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX2Rlbm9ybWFsaXplUGFnZVBhdGguZGVub3JtYWxpemVQYWdlUGF0aCkocGF0aG5hbWUpKTtpZihjbGVhblBhdGhuYW1lPT09Jy80MDQnfHxjbGVhblBhdGhuYW1lPT09Jy9fZXJyb3InKXtyZXR1cm4gcGF0aG5hbWU7fS8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbmlmKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxucGFnZXMuc29tZShwYWdlPT57aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocGFnZSkmJigwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpe3BhdGhuYW1lPXBhZ2U7cmV0dXJuIHRydWU7fX0pO31yZXR1cm4oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO31jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbj1wcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OJiZ0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJidzY3JvbGxSZXN0b3JhdGlvbidpbiB3aW5kb3cuaGlzdG9yeSYmISFmdW5jdGlvbigpe3RyeXtsZXQgdj0nX19uZXh0JzsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5yZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LHYpLHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksdHJ1ZTt9Y2F0Y2gobil7fX0oKTtjb25zdCBTU0dfREFUQV9OT1RfRk9VTkQ9U3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtmdW5jdGlvbiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cyl7cmV0dXJuIGZldGNoKHVybCx7Ly8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4vLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbi8vXG4vLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4vLyA+IG9wdGlvbi5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbi8vXG4vLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG5jcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihyZXM9PntpZighcmVzLm9rKXtpZihhdHRlbXB0cz4xJiZyZXMuc3RhdHVzPj01MDApe3JldHVybiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cy0xKTt9aWYocmVzLnN0YXR1cz09PTQwNCl7cmV0dXJuIHJlcy5qc29uKCkudGhlbihkYXRhPT57aWYoZGF0YS5ub3RGb3VuZCl7cmV0dXJue25vdEZvdW5kOlNTR19EQVRBX05PVF9GT1VORH07fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fSk7fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fXJldHVybiByZXMuanNvbigpO30pO31mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyKXtyZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZixpc1NlcnZlclJlbmRlcj8zOjEpLmNhdGNoKGVycj0+ey8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbi8vIGxvb3AuXG5pZighaXNTZXJ2ZXJSZW5kZXIpeygwLF9yb3V0ZUxvYWRlci5tYXJrQXNzZXRFcnJvcikoZXJyKTt9dGhyb3cgZXJyO30pO31jbGFzcyBSb3V0ZXJ7LyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4vLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuY29uc3RydWN0b3IoX3BhdGhuYW1lLF9xdWVyeSxfYXMse2luaXRpYWxQcm9wcyxwYWdlTG9hZGVyLEFwcCx3cmFwQXBwLENvbXBvbmVudCxlcnIsc3Vic2NyaXB0aW9uLGlzRmFsbGJhY2ssbG9jYWxlLGxvY2FsZXMsZGVmYXVsdExvY2FsZSxkb21haW5Mb2NhbGVzLGlzUHJldmlld30pe3RoaXMucm91dGU9dm9pZCAwO3RoaXMucGF0aG5hbWU9dm9pZCAwO3RoaXMucXVlcnk9dm9pZCAwO3RoaXMuYXNQYXRoPXZvaWQgMDt0aGlzLmJhc2VQYXRoPXZvaWQgMDt0aGlzLmNvbXBvbmVudHM9dm9pZCAwO3RoaXMuc2RjPXt9O3RoaXMuc2RyPXt9O3RoaXMuc3ViPXZvaWQgMDt0aGlzLmNsYz12b2lkIDA7dGhpcy5wYWdlTG9hZGVyPXZvaWQgMDt0aGlzLl9icHM9dm9pZCAwO3RoaXMuZXZlbnRzPXZvaWQgMDt0aGlzLl93cmFwQXBwPXZvaWQgMDt0aGlzLmlzU3NyPXZvaWQgMDt0aGlzLmlzRmFsbGJhY2s9dm9pZCAwO3RoaXMuX2luRmxpZ2h0Um91dGU9dm9pZCAwO3RoaXMuX3NoYWxsb3c9dm9pZCAwO3RoaXMubG9jYWxlPXZvaWQgMDt0aGlzLmxvY2FsZXM9dm9pZCAwO3RoaXMuZGVmYXVsdExvY2FsZT12b2lkIDA7dGhpcy5kb21haW5Mb2NhbGVzPXZvaWQgMDt0aGlzLmlzUmVhZHk9dm9pZCAwO3RoaXMuaXNQcmV2aWV3PXZvaWQgMDt0aGlzLmlzTG9jYWxlRG9tYWluPXZvaWQgMDt0aGlzLl9pZHg9MDt0aGlzLm9uUG9wU3RhdGU9ZT0+e2NvbnN0IHN0YXRlPWUuc3RhdGU7aWYoIXN0YXRlKXsvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbi8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuLy9cbi8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4vLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4vLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbi8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbi8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuY29uc3R7cGF0aG5hbWUscXVlcnl9PXRoaXM7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChwYXRobmFtZSkscXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpKTtyZXR1cm47fWlmKCFzdGF0ZS5fX04pe3JldHVybjt9bGV0IGZvcmNlZFNjcm9sbDtjb25zdHt1cmwsYXMsb3B0aW9ucyxpZHh9PXN0YXRlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXtpZih0aGlzLl9pZHghPT1pZHgpey8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e3Nlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQpe30vLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG50cnl7Y29uc3Qgdj1zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycraWR4KTtmb3JjZWRTY3JvbGw9SlNPTi5wYXJzZSh2KTt9Y2F0Y2goX3VudXNlZDIpe2ZvcmNlZFNjcm9sbD17eDowLHk6MH07fX19fXRoaXMuX2lkeD1pZHg7Y29uc3R7cGF0aG5hbWV9PSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7Ly8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4vLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbmlmKHRoaXMuaXNTc3ImJmFzPT09dGhpcy5hc1BhdGgmJnBhdGhuYW1lPT09dGhpcy5wYXRobmFtZSl7cmV0dXJuO30vLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4vLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuaWYodGhpcy5fYnBzJiYhdGhpcy5fYnBzKHN0YXRlKSl7cmV0dXJuO310aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsT2JqZWN0LmFzc2lnbih7fSxvcHRpb25zLHtzaGFsbG93Om9wdGlvbnMuc2hhbGxvdyYmdGhpcy5fc2hhbGxvdyxsb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZX0pLGZvcmNlZFNjcm9sbCk7fTsvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbnRoaXMucm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKF9wYXRobmFtZSk7Ly8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG50aGlzLmNvbXBvbmVudHM9e307Ly8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbi8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbmlmKF9wYXRobmFtZSE9PScvX2Vycm9yJyl7dGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdPXtDb21wb25lbnQsaW5pdGlhbDp0cnVlLHByb3BzOmluaXRpYWxQcm9wcyxlcnIsX19OX1NTRzppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NHLF9fTl9TU1A6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTUH07fXRoaXMuY29tcG9uZW50c1snL19hcHAnXT17Q29tcG9uZW50OkFwcCxzdHlsZVNoZWV0czpbLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL119Oy8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4vLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxudGhpcy5ldmVudHM9Um91dGVyLmV2ZW50czt0aGlzLnBhZ2VMb2FkZXI9cGFnZUxvYWRlcjt0aGlzLnBhdGhuYW1lPV9wYXRobmFtZTt0aGlzLnF1ZXJ5PV9xdWVyeTsvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbmNvbnN0IGF1dG9FeHBvcnREeW5hbWljPSgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKF9wYXRobmFtZSkmJnNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O3RoaXMuYXNQYXRoPWF1dG9FeHBvcnREeW5hbWljP19wYXRobmFtZTpfYXM7dGhpcy5iYXNlUGF0aD1iYXNlUGF0aDt0aGlzLnN1Yj1zdWJzY3JpcHRpb247dGhpcy5jbGM9bnVsbDt0aGlzLl93cmFwQXBwPXdyYXBBcHA7Ly8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbnRoaXMuaXNTc3I9dHJ1ZTt0aGlzLmlzRmFsbGJhY2s9aXNGYWxsYmFjazt0aGlzLmlzUmVhZHk9ISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3B8fHNlbGYuX19ORVhUX0RBVEFfXy5naXB8fCFhdXRvRXhwb3J0RHluYW1pYyYmIXNlbGYubG9jYXRpb24uc2VhcmNoJiYhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7dGhpcy5pc1ByZXZpZXc9ISFpc1ByZXZpZXc7dGhpcy5pc0xvY2FsZURvbWFpbj1mYWxzZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1sb2NhbGU7dGhpcy5sb2NhbGVzPWxvY2FsZXM7dGhpcy5kZWZhdWx0TG9jYWxlPWRlZmF1bHRMb2NhbGU7dGhpcy5kb21haW5Mb2NhbGVzPWRvbWFpbkxvY2FsZXM7dGhpcy5pc0xvY2FsZURvbWFpbj0hIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO31pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpey8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4vLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuaWYoX2FzLnN1YnN0cigwLDIpIT09Jy8vJyl7Ly8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbi8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuY29uc3Qgb3B0aW9ucz17bG9jYWxlfTtvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj1fYXMhPT1fcGF0aG5hbWU7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChfcGF0aG5hbWUpLHF1ZXJ5Ol9xdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCksb3B0aW9ucyk7fXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsdGhpcy5vblBvcFN0YXRlKTsvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG5pZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7d2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb249J21hbnVhbCc7fX19fXJlbG9hZCgpe3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTt9LyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9iYWNrKCl7d2luZG93Lmhpc3RvcnkuYmFjaygpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcHVzaCh1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7Ly8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4vLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuaWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3RyeXsvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQzKXt9fX07KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9yZXBsYWNlKHVybCxhcyxvcHRpb25zPXt9KXs7KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fWFzeW5jIGNoYW5nZShtZXRob2QsdXJsLGFzLG9wdGlvbnMsZm9yY2VkU2Nyb2xsKXtpZighaXNMb2NhbFVSTCh1cmwpKXt3aW5kb3cubG9jYXRpb24uaHJlZj11cmw7cmV0dXJuIGZhbHNlO31jb25zdCBzaG91bGRSZXNvbHZlSHJlZj11cmw9PT1hc3x8b3B0aW9ucy5faHx8b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7Ly8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4vLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbmlmKG9wdGlvbnMuX2gpe3RoaXMuaXNSZWFkeT10cnVlO31sZXQgbG9jYWxlQ2hhbmdlPW9wdGlvbnMubG9jYWxlIT09dGhpcy5sb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9b3B0aW9ucy5sb2NhbGU9PT1mYWxzZT90aGlzLmRlZmF1bHRMb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMubG9jYWxlO2lmKHR5cGVvZiBvcHRpb25zLmxvY2FsZT09PSd1bmRlZmluZWQnKXtvcHRpb25zLmxvY2FsZT10aGlzLmxvY2FsZTt9Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO2lmKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpe3RoaXMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7cGFyc2VkQXMucGF0aG5hbWU9YWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO3VybD1hZGRCYXNlUGF0aCgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShoYXNCYXNlUGF0aCh1cmwpP2RlbEJhc2VQYXRoKHVybCk6dXJsLHRoaXMubG9jYWxlcykucGF0aG5hbWUpO31sZXQgZGlkTmF2aWdhdGU9ZmFsc2U7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3ZhciBfdGhpcyRsb2NhbGVzOy8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbmlmKCEoKF90aGlzJGxvY2FsZXM9dGhpcy5sb2NhbGVzKSE9bnVsbCYmX3RoaXMkbG9jYWxlcy5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKXtwYXJzZWRBcy5wYXRobmFtZT1hZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGUpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWNvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLHRoaXMubG9jYWxlKTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Ly8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbi8vIGNvcnJlY3QgZG9tYWluXG5pZighZGlkTmF2aWdhdGUmJmRldGVjdGVkRG9tYWluJiZ0aGlzLmlzTG9jYWxlRG9tYWluJiZzZWxmLmxvY2F0aW9uLmhvc3RuYW1lIT09ZGV0ZWN0ZWREb21haW4uZG9tYWluKXtjb25zdCBhc05vQmFzZVBhdGg9ZGVsQmFzZVBhdGgoYXMpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPWBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aD09PScvJz8nJzphc05vQmFzZVBhdGh9YHx8Jy8nKX1gOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWlmKGRpZE5hdmlnYXRlKXtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9fWlmKCFvcHRpb25zLl9oKXt0aGlzLmlzU3NyPWZhbHNlO30vLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG5pZihfdXRpbHMuU1Qpe3BlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7fWNvbnN0e3NoYWxsb3c9ZmFsc2V9PW9wdGlvbnM7Y29uc3Qgcm91dGVQcm9wcz17c2hhbGxvd307aWYodGhpcy5faW5GbGlnaHRSb3V0ZSl7dGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSxyb3V0ZVByb3BzKTt9YXM9YWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsb3B0aW9ucy5sb2NhbGUsdGhpcy5kZWZhdWx0TG9jYWxlKSk7Y29uc3QgY2xlYW5lZEFzPWRlbExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLHRoaXMubG9jYWxlKTt0aGlzLl9pbkZsaWdodFJvdXRlPWFzOy8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4vLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4vLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4vLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4vLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbmlmKCFvcHRpb25zLl9oJiZ0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKXt0aGlzLmFzUGF0aD1jbGVhbmVkQXM7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpOy8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG50aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7dGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTt0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sbnVsbCk7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31sZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lLHF1ZXJ5fT1wYXJzZWQ7Ly8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4vLyB3aGVuIHJld3JpdHRlbiB0b1xubGV0IHBhZ2VzLHJld3JpdGVzO3RyeXtwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO31jYXRjaChlcnIpey8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO30vLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4vLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4vLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuaWYoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSYmIWxvY2FsZUNoYW5nZSl7bWV0aG9kPSdyZXBsYWNlU3RhdGUnO30vLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxubGV0IHJlc29sdmVkQXM9YXM7Ly8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbnBhdGhuYW1lPXBhdGhuYW1lPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShkZWxCYXNlUGF0aChwYXRobmFtZSkpOnBhdGhuYW1lO2lmKHNob3VsZFJlc29sdmVIcmVmJiZwYXRobmFtZSE9PScvX2Vycm9yJyl7O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPXRydWU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXMuc3RhcnRzV2l0aCgnLycpKXtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxxdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1yZXdyaXRlc1Jlc3VsdC5hc1BhdGg7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO2lmKCFpc0xvY2FsVVJMKGFzKSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2ArYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksdGhpcy5sb2NhbGUpO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHJvdXRlKSl7Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkocmVzb2x2ZWRBcyk7Y29uc3QgYXNQYXRobmFtZT1wYXJzZWRBcy5wYXRobmFtZTtjb25zdCByb3V0ZVJlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCByb3V0ZU1hdGNoPSgwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtjb25zdCBzaG91bGRJbnRlcnBvbGF0ZT1yb3V0ZT09PWFzUGF0aG5hbWU7Y29uc3QgaW50ZXJwb2xhdGVkQXM9c2hvdWxkSW50ZXJwb2xhdGU/aW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KTp7fTtpZighcm91dGVNYXRjaHx8c2hvdWxkSW50ZXJwb2xhdGUmJiFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpe2NvbnN0IG1pc3NpbmdQYXJhbXM9T2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbT0+IXF1ZXJ5W3BhcmFtXSk7aWYobWlzc2luZ1BhcmFtcy5sZW5ndGg+MCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZT9gSW50ZXJwb2xhdGluZyBocmVmYDpgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgK2B0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO310aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlP2BUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGA6YFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkrYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZT8naHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCc6J2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTt9fWVsc2UgaWYoc2hvdWxkSW50ZXJwb2xhdGUpe2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoT2JqZWN0LmFzc2lnbih7fSxwYXJzZWRBcyx7cGF0aG5hbWU6aW50ZXJwb2xhdGVkQXMucmVzdWx0LHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpfSkpO31lbHNley8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG5PYmplY3QuYXNzaWduKHF1ZXJ5LHJvdXRlTWF0Y2gpO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTt0cnl7dmFyIF9zZWxmJF9fTkVYVF9EQVRBX18kcCxfc2VsZiRfX05FWFRfREFUQV9fJHAyLF9vcHRpb25zJHNjcm9sbDtsZXQgcm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyk7bGV0e2Vycm9yLHByb3BzLF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvOy8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuaWYoKF9fTl9TU0d8fF9fTl9TU1ApJiZwcm9wcyl7aWYocHJvcHMucGFnZVByb3BzJiZwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKXtjb25zdCBkZXN0aW5hdGlvbj1wcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUOy8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4vLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4vLyBpdCdzIG5vdFxuaWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtjb25zdCBwYXJzZWRIcmVmPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTtwYXJzZWRIcmVmLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSxwYWdlcyk7Y29uc3R7dXJsOm5ld1VybCxhczpuZXdBc309cHJlcGFyZVVybEFzKHRoaXMsZGVzdGluYXRpb24sZGVzdGluYXRpb24pO3JldHVybiB0aGlzLmNoYW5nZShtZXRob2QsbmV3VXJsLG5ld0FzLG9wdGlvbnMpO313aW5kb3cubG9jYXRpb24uaHJlZj1kZXN0aW5hdGlvbjtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9dGhpcy5pc1ByZXZpZXc9ISFwcm9wcy5fX05fUFJFVklFVzsvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG5pZihwcm9wcy5ub3RGb3VuZD09PVNTR19EQVRBX05PVF9GT1VORCl7bGV0IG5vdEZvdW5kUm91dGU7dHJ5e2F3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtub3RGb3VuZFJvdXRlPScvNDA0Jzt9Y2F0Y2goXyl7bm90Rm91bmRSb3V0ZT0nL19lcnJvcic7fXJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLG5vdEZvdW5kUm91dGUscXVlcnksYXMscmVzb2x2ZWRBcyx7c2hhbGxvdzpmYWxzZX0pO319Um91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxhcyxyb3V0ZVByb3BzKTt0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IGFwcENvbXA9dGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDt3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkPWFwcENvbXAuZ2V0SW5pdGlhbFByb3BzPT09YXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzJiYhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7fWlmKG9wdGlvbnMuX2gmJnBhdGhuYW1lPT09Jy9fZXJyb3InJiYoKF9zZWxmJF9fTkVYVF9EQVRBX18kcD1zZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpPT1udWxsP3ZvaWQgMDooX3NlbGYkX19ORVhUX0RBVEFfXyRwMj1fc2VsZiRfX05FWFRfREFUQV9fJHAucGFnZVByb3BzKT09bnVsbD92b2lkIDA6X3NlbGYkX19ORVhUX0RBVEFfXyRwMi5zdGF0dXNDb2RlKT09PTUwMCYmcHJvcHMhPW51bGwmJnByb3BzLnBhZ2VQcm9wcyl7Ly8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4vLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG5wcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZT01MDA7fS8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbmNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGU9b3B0aW9ucy5zaGFsbG93JiZ0aGlzLnJvdXRlPT09cm91dGU7Y29uc3Qgc2hvdWxkU2Nyb2xsPShfb3B0aW9ucyRzY3JvbGw9b3B0aW9ucy5zY3JvbGwpIT1udWxsP19vcHRpb25zJHNjcm9sbDohaXNWYWxpZFNoYWxsb3dSb3V0ZTtjb25zdCByZXNldFNjcm9sbD1zaG91bGRTY3JvbGw/e3g6MCx5OjB9Om51bGw7YXdhaXQgdGhpcy5zZXQocm91dGUscGF0aG5hbWUscXVlcnksY2xlYW5lZEFzLHJvdXRlSW5mbyxmb3JjZWRTY3JvbGwhPW51bGw/Zm9yY2VkU2Nyb2xsOnJlc2V0U2Nyb2xsKS5jYXRjaChlPT57aWYoZS5jYW5jZWxsZWQpZXJyb3I9ZXJyb3J8fGU7ZWxzZSB0aHJvdyBlO30pO2lmKGVycm9yKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycm9yLGNsZWFuZWRBcyxyb3V0ZVByb3BzKTt0aHJvdyBlcnJvcjt9aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYodGhpcy5sb2NhbGUpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nPXRoaXMubG9jYWxlO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9Y2F0Y2goZXJyKXtpZihlcnIuY2FuY2VsbGVkKXtyZXR1cm4gZmFsc2U7fXRocm93IGVycjt9fWNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO3JldHVybjt9aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF09PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtyZXR1cm47fX1pZihtZXRob2QhPT0ncHVzaFN0YXRlJ3x8KDAsX3V0aWxzLmdldFVSTCkoKSE9PWFzKXt0aGlzLl9zaGFsbG93PW9wdGlvbnMuc2hhbGxvdzt3aW5kb3cuaGlzdG9yeVttZXRob2RdKHt1cmwsYXMsb3B0aW9ucyxfX046dHJ1ZSxpZHg6dGhpcy5faWR4PW1ldGhvZCE9PSdwdXNoU3RhdGUnP3RoaXMuX2lkeDp0aGlzLl9pZHgrMX0sLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4vLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbicnLGFzKTt9fWFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLGxvYWRFcnJvckZhaWwpe2lmKGVyci5jYW5jZWxsZWQpey8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG50aHJvdyBlcnI7fWlmKCgwLF9yb3V0ZUxvYWRlci5pc0Fzc2V0RXJyb3IpKGVycil8fGxvYWRFcnJvckZhaWwpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyLGFzLHJvdXRlUHJvcHMpOy8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4vLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4vLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG53aW5kb3cubG9jYXRpb24uaHJlZj1hczsvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbi8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG50aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7fXRyeXtsZXQgQ29tcG9uZW50O2xldCBzdHlsZVNoZWV0cztsZXQgcHJvcHM7aWYodHlwZW9mIENvbXBvbmVudD09PSd1bmRlZmluZWQnfHx0eXBlb2Ygc3R5bGVTaGVldHM9PT0ndW5kZWZpbmVkJyl7Oyh7cGFnZTpDb21wb25lbnQsc3R5bGVTaGVldHN9PWF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7fWNvbnN0IHJvdXRlSW5mbz17cHJvcHMsQ29tcG9uZW50LHN0eWxlU2hlZXRzLGVycixlcnJvcjplcnJ9O2lmKCFyb3V0ZUluZm8ucHJvcHMpe3RyeXtyb3V0ZUluZm8ucHJvcHM9YXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LHtlcnIscGF0aG5hbWUscXVlcnl9KTt9Y2F0Y2goZ2lwRXJyKXtjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLGdpcEVycik7cm91dGVJbmZvLnByb3BzPXt9O319cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2gocm91dGVJbmZvRXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyx0cnVlKTt9fWFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpe3RyeXtjb25zdCBleGlzdGluZ1JvdXRlSW5mbz10aGlzLmNvbXBvbmVudHNbcm91dGVdO2lmKHJvdXRlUHJvcHMuc2hhbGxvdyYmZXhpc3RpbmdSb3V0ZUluZm8mJnRoaXMucm91dGU9PT1yb3V0ZSl7cmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO31jb25zdCBjYWNoZWRSb3V0ZUluZm89ZXhpc3RpbmdSb3V0ZUluZm8mJidpbml0aWFsJ2luIGV4aXN0aW5nUm91dGVJbmZvP3VuZGVmaW5lZDpleGlzdGluZ1JvdXRlSW5mbztjb25zdCByb3V0ZUluZm89Y2FjaGVkUm91dGVJbmZvP2NhY2hlZFJvdXRlSW5mbzphd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcz0+KHtDb21wb25lbnQ6cmVzLnBhZ2Usc3R5bGVTaGVldHM6cmVzLnN0eWxlU2hlZXRzLF9fTl9TU0c6cmVzLm1vZC5fX05fU1NHLF9fTl9TU1A6cmVzLm1vZC5fX05fU1NQfSkpO2NvbnN0e0NvbXBvbmVudCxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3R7aXNWYWxpZEVsZW1lbnRUeXBlfT1yZXF1aXJlKCdyZWFjdC1pcycpO2lmKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSl7dGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO319bGV0IGRhdGFIcmVmO2lmKF9fTl9TU0d8fF9fTl9TU1Ape2RhdGFIcmVmPXRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZSxxdWVyeX0pLHJlc29sdmVkQXMsX19OX1NTRyx0aGlzLmxvY2FsZSk7fWNvbnN0IHByb3BzPWF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0c/dGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZik6X19OX1NTUD90aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKTp0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbntwYXRobmFtZSxxdWVyeSxhc1BhdGg6YXMsbG9jYWxlOnRoaXMubG9jYWxlLGxvY2FsZXM6dGhpcy5sb2NhbGVzLGRlZmF1bHRMb2NhbGU6dGhpcy5kZWZhdWx0TG9jYWxlfSkpO3JvdXRlSW5mby5wcm9wcz1wcm9wczt0aGlzLmNvbXBvbmVudHNbcm91dGVdPXJvdXRlSW5mbztyZXR1cm4gcm91dGVJbmZvO31jYXRjaChlcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzKTt9fXNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxkYXRhLHJlc2V0U2Nyb2xsKXt0aGlzLmlzRmFsbGJhY2s9ZmFsc2U7dGhpcy5yb3V0ZT1yb3V0ZTt0aGlzLnBhdGhuYW1lPXBhdGhuYW1lO3RoaXMucXVlcnk9cXVlcnk7dGhpcy5hc1BhdGg9YXM7cmV0dXJuIHRoaXMubm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpO30vKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovYmVmb3JlUG9wU3RhdGUoY2Ipe3RoaXMuX2Jwcz1jYjt9b25seUFIYXNoQ2hhbmdlKGFzKXtpZighdGhpcy5hc1BhdGgpcmV0dXJuIGZhbHNlO2NvbnN0W29sZFVybE5vSGFzaCxvbGRIYXNoXT10aGlzLmFzUGF0aC5zcGxpdCgnIycpO2NvbnN0W25ld1VybE5vSGFzaCxuZXdIYXNoXT1hcy5zcGxpdCgnIycpOy8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbmlmKG5ld0hhc2gmJm9sZFVybE5vSGFzaD09PW5ld1VybE5vSGFzaCYmb2xkSGFzaD09PW5ld0hhc2gpe3JldHVybiB0cnVlO30vLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG5pZihvbGRVcmxOb0hhc2ghPT1uZXdVcmxOb0hhc2gpe3JldHVybiBmYWxzZTt9Ly8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4vLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4vLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbnJldHVybiBvbGRIYXNoIT09bmV3SGFzaDt9c2Nyb2xsVG9IYXNoKGFzKXtjb25zdFssaGFzaF09YXMuc3BsaXQoJyMnKTsvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmlmKGhhc2g9PT0nJ3x8aGFzaD09PSd0b3AnKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtyZXR1cm47fS8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG5jb25zdCBpZEVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO2lmKGlkRWwpe2lkRWwuc2Nyb2xsSW50b1ZpZXcoKTtyZXR1cm47fS8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5jb25zdCBuYW1lRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07aWYobmFtZUVsKXtuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTt9fXVybElzTmV3KGFzUGF0aCl7cmV0dXJuIHRoaXMuYXNQYXRoIT09YXNQYXRoO30vKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL2FzeW5jIHByZWZldGNoKHVybCxhc1BhdGg9dXJsLG9wdGlvbnM9e30pe2xldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWV9PXBhcnNlZDtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZihvcHRpb25zLmxvY2FsZT09PWZhbHNlKXtwYXRobmFtZT0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRobmFtZSx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO2xldCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShhc1BhdGgpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtwYXJzZWRBcy5wYXRobmFtZT1sb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO29wdGlvbnMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZTthc1BhdGg9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7fX1jb25zdCBwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtsZXQgcmVzb2x2ZWRBcz1hc1BhdGg7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSl7bGV0IHJld3JpdGVzOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscGFyc2VkLnF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLHRoaXMubG9jYWxlKTtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpOy8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtyZXR1cm47fWF3YWl0IFByb21pc2UuYWxsKFt0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKGlzU3NnPT57cmV0dXJuIGlzU3NnP3RoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCxyZXNvbHZlZEFzLHRydWUsdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6dGhpcy5sb2NhbGUpKTpmYWxzZTt9KSx0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eT8nbG9hZFBhZ2UnOidwcmVmZXRjaCddKHJvdXRlKV0pO31hc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSl7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9dGhpcy5jbGM9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O2NvbnN0IGNvbXBvbmVudFJlc3VsdD1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO2lmKGNhbmNlbGxlZCl7Y29uc3QgZXJyb3I9bmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtlcnJvci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnJvcjt9aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fXJldHVybiBjb21wb25lbnRSZXN1bHQ7fV9nZXREYXRhKGZuKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD0oKT0+e2NhbmNlbGxlZD10cnVlO307dGhpcy5jbGM9Y2FuY2VsO3JldHVybiBmbigpLnRoZW4oZGF0YT0+e2lmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31pZihjYW5jZWxsZWQpe2NvbnN0IGVycj1uZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtlcnIuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyO31yZXR1cm4gZGF0YTt9KTt9X2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6Y2FjaGVLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nJiYhdGhpcy5pc1ByZXZpZXcmJnRoaXMuc2RjW2NhY2hlS2V5XSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO31yZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9Pnt0aGlzLnNkY1tjYWNoZUtleV09ZGF0YTtyZXR1cm4gZGF0YTt9KTt9X2dldFNlcnZlckRhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6cmVzb3VyY2VLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHRoaXMuc2RyW3Jlc291cmNlS2V5XSl7cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt9cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XT1mZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07cmV0dXJuIGRhdGE7fSkuY2F0Y2goZXJyPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt0aHJvdyBlcnI7fSk7fWdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsY3R4KXtjb25zdHtDb21wb25lbnQ6QXBwfT10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107Y29uc3QgQXBwVHJlZT10aGlzLl93cmFwQXBwKEFwcCk7Y3R4LkFwcFRyZWU9QXBwVHJlZTtyZXR1cm4oMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQXBwLHtBcHBUcmVlLENvbXBvbmVudCxyb3V0ZXI6dGhpcyxjdHh9KTt9YWJvcnRDb21wb25lbnRMb2FkKGFzLHJvdXRlUHJvcHMpe2lmKHRoaXMuY2xjKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxhcyxyb3V0ZVByb3BzKTt0aGlzLmNsYygpO3RoaXMuY2xjPW51bGw7fX1ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCl7cmV0dXJuIHRoaXMuc3ViKGRhdGEsdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCxyZXNldFNjcm9sbCk7fX1leHBvcnRzLmRlZmF1bHQ9Um91dGVyO1JvdXRlci5ldmVudHM9KDAsX21pdHQuZGVmYXVsdCkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmZvcm1hdFVybD1mb3JtYXRVcmw7dmFyIHF1ZXJ5c3RyaW5nPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fS8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqKXtsZXR7YXV0aCxob3N0bmFtZX09dXJsT2JqO2xldCBwcm90b2NvbD11cmxPYmoucHJvdG9jb2x8fCcnO2xldCBwYXRobmFtZT11cmxPYmoucGF0aG5hbWV8fCcnO2xldCBoYXNoPXVybE9iai5oYXNofHwnJztsZXQgcXVlcnk9dXJsT2JqLnF1ZXJ5fHwnJztsZXQgaG9zdD1mYWxzZTthdXRoPWF1dGg/ZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCc6JykrJ0AnOicnO2lmKHVybE9iai5ob3N0KXtob3N0PWF1dGgrdXJsT2JqLmhvc3Q7fWVsc2UgaWYoaG9zdG5hbWUpe2hvc3Q9YXV0aCsofmhvc3RuYW1lLmluZGV4T2YoJzonKT9gWyR7aG9zdG5hbWV9XWA6aG9zdG5hbWUpO2lmKHVybE9iai5wb3J0KXtob3N0Kz0nOicrdXJsT2JqLnBvcnQ7fX1pZihxdWVyeSYmdHlwZW9mIHF1ZXJ5PT09J29iamVjdCcpe3F1ZXJ5PVN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5KSk7fWxldCBzZWFyY2g9dXJsT2JqLnNlYXJjaHx8cXVlcnkmJmA/JHtxdWVyeX1gfHwnJztpZihwcm90b2NvbCYmcHJvdG9jb2wuc3Vic3RyKC0xKSE9PSc6Jylwcm90b2NvbCs9JzonO2lmKHVybE9iai5zbGFzaGVzfHwoIXByb3RvY29sfHxzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSYmaG9zdCE9PWZhbHNlKXtob3N0PScvLycrKGhvc3R8fCcnKTtpZihwYXRobmFtZSYmcGF0aG5hbWVbMF0hPT0nLycpcGF0aG5hbWU9Jy8nK3BhdGhuYW1lO31lbHNlIGlmKCFob3N0KXtob3N0PScnO31pZihoYXNoJiZoYXNoWzBdIT09JyMnKWhhc2g9JyMnK2hhc2g7aWYoc2VhcmNoJiZzZWFyY2hbMF0hPT0nPycpc2VhcmNoPSc/JytzZWFyY2g7cGF0aG5hbWU9cGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLGVuY29kZVVSSUNvbXBvbmVudCk7c2VhcmNoPXNlYXJjaC5yZXBsYWNlKCcjJywnJTIzJyk7cmV0dXJuYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmlzRHluYW1pY1JvdXRlPWlzRHluYW1pY1JvdXRlOy8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEU9L1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87ZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpe3JldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5wYXJzZVJlbGF0aXZlVXJsPXBhcnNlUmVsYXRpdmVVcmw7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTsvKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9mdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybCxiYXNlKXtjb25zdCBnbG9iYWxCYXNlPW5ldyBVUkwodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnPydodHRwOi8vbic6KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpKTtjb25zdCByZXNvbHZlZEJhc2U9YmFzZT9uZXcgVVJMKGJhc2UsZ2xvYmFsQmFzZSk6Z2xvYmFsQmFzZTtjb25zdHtwYXRobmFtZSxzZWFyY2hQYXJhbXMsc2VhcmNoLGhhc2gsaHJlZixvcmlnaW59PW5ldyBVUkwodXJsLHJlc29sdmVkQmFzZSk7aWYob3JpZ2luIT09Z2xvYmFsQmFzZS5vcmlnaW4pe3Rocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApO31yZXR1cm57cGF0aG5hbWUscXVlcnk6KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKHNlYXJjaFBhcmFtcyksc2VhcmNoLGhhc2gsaHJlZjpocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCl9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbGF0aXZlLXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnk9c2VhcmNoUGFyYW1zVG9VcmxRdWVyeTtleHBvcnRzLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM9dXJsUXVlcnlUb1NlYXJjaFBhcmFtcztleHBvcnRzLmFzc2lnbj1hc3NpZ247ZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpe2NvbnN0IHF1ZXJ5PXt9O3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT57aWYodHlwZW9mIHF1ZXJ5W2tleV09PT0ndW5kZWZpbmVkJyl7cXVlcnlba2V5XT12YWx1ZTt9ZWxzZSBpZihBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKXs7cXVlcnlba2V5XS5wdXNoKHZhbHVlKTt9ZWxzZXtxdWVyeVtrZXldPVtxdWVyeVtrZXldLHZhbHVlXTt9fSk7cmV0dXJuIHF1ZXJ5O31mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtKXtpZih0eXBlb2YgcGFyYW09PT0nc3RyaW5nJ3x8dHlwZW9mIHBhcmFtPT09J251bWJlcicmJiFpc05hTihwYXJhbSl8fHR5cGVvZiBwYXJhbT09PSdib29sZWFuJyl7cmV0dXJuIFN0cmluZyhwYXJhbSk7fWVsc2V7cmV0dXJuJyc7fX1mdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHVybFF1ZXJ5KXtjb25zdCByZXN1bHQ9bmV3IFVSTFNlYXJjaFBhcmFtcygpO09iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LHZhbHVlXSk9PntpZihBcnJheS5pc0FycmF5KHZhbHVlKSl7dmFsdWUuZm9yRWFjaChpdGVtPT5yZXN1bHQuYXBwZW5kKGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSk7fWVsc2V7cmVzdWx0LnNldChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpO319KTtyZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LC4uLnNlYXJjaFBhcmFtc0xpc3Qpe3NlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaChzZWFyY2hQYXJhbXM9PntBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goa2V5PT50YXJnZXQuZGVsZXRlKGtleSkpO3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT50YXJnZXQuYXBwZW5kKGtleSx2YWx1ZSkpO30pO3JldHVybiB0YXJnZXQ7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnlzdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXI9Z2V0Um91dGVNYXRjaGVyO2Z1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KXtjb25zdHtyZSxncm91cHN9PXJvdXRlUmVnZXg7cmV0dXJuIHBhdGhuYW1lPT57Y29uc3Qgcm91dGVNYXRjaD1yZS5leGVjKHBhdGhuYW1lKTtpZighcm91dGVNYXRjaCl7cmV0dXJuIGZhbHNlO31jb25zdCBkZWNvZGU9cGFyYW09Pnt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7fWNhdGNoKF8pe2NvbnN0IGVycj1uZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtlcnIuY29kZT0nREVDT0RFX0ZBSUxFRCc7dGhyb3cgZXJyO319O2NvbnN0IHBhcmFtcz17fTtPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goc2x1Z05hbWU9Pntjb25zdCBnPWdyb3Vwc1tzbHVnTmFtZV07Y29uc3QgbT1yb3V0ZU1hdGNoW2cucG9zXTtpZihtIT09dW5kZWZpbmVkKXtwYXJhbXNbc2x1Z05hbWVdPX5tLmluZGV4T2YoJy8nKT9tLnNwbGl0KCcvJykubWFwKGVudHJ5PT5kZWNvZGUoZW50cnkpKTpnLnJlcGVhdD9bZGVjb2RlKG0pXTpkZWNvZGUobSk7fX0pO3JldHVybiBwYXJhbXM7fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1tYXRjaGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVSZWdleD1nZXRSb3V0ZVJlZ2V4Oy8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpe3JldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCdcXFxcJCYnKTt9ZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW0pe2NvbnN0IG9wdGlvbmFsPXBhcmFtLnN0YXJ0c1dpdGgoJ1snKSYmcGFyYW0uZW5kc1dpdGgoJ10nKTtpZihvcHRpb25hbCl7cGFyYW09cGFyYW0uc2xpY2UoMSwtMSk7fWNvbnN0IHJlcGVhdD1wYXJhbS5zdGFydHNXaXRoKCcuLi4nKTtpZihyZXBlYXQpe3BhcmFtPXBhcmFtLnNsaWNlKDMpO31yZXR1cm57a2V5OnBhcmFtLHJlcGVhdCxvcHRpb25hbH07fWZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKXtjb25zdCBzZWdtZW50cz0obm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCcnKXx8Jy8nKS5zbGljZSgxKS5zcGxpdCgnLycpO2NvbnN0IGdyb3Vwcz17fTtsZXQgZ3JvdXBJbmRleD0xO2NvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpO2dyb3Vwc1trZXldPXtwb3M6Z3JvdXBJbmRleCsrLHJlcGVhdCxvcHRpb25hbH07cmV0dXJuIHJlcGVhdD9vcHRpb25hbD8nKD86LyguKz8pKT8nOicvKC4rPyknOicvKFteL10rPyknO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTsvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbi8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG5pZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe2xldCByb3V0ZUtleUNoYXJDb2RlPTk3O2xldCByb3V0ZUtleUNoYXJMZW5ndGg9MTsvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG5jb25zdCBnZXRTYWZlUm91dGVLZXk9KCk9PntsZXQgcm91dGVLZXk9Jyc7Zm9yKGxldCBpPTA7aTxyb3V0ZUtleUNoYXJMZW5ndGg7aSsrKXtyb3V0ZUtleSs9U3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKTtyb3V0ZUtleUNoYXJDb2RlKys7aWYocm91dGVLZXlDaGFyQ29kZT4xMjIpe3JvdXRlS2V5Q2hhckxlbmd0aCsrO3JvdXRlS2V5Q2hhckNvZGU9OTc7fX1yZXR1cm4gcm91dGVLZXk7fTtjb25zdCByb3V0ZUtleXM9e307bGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Ly8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuLy8gdGhlIG5hbWVkIHJlZ2V4XG5sZXQgY2xlYW5lZEtleT1rZXkucmVwbGFjZSgvXFxXL2csJycpO2xldCBpbnZhbGlkS2V5PWZhbHNlOy8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuLy8gc2FmZSBrZXlcbmlmKGNsZWFuZWRLZXkubGVuZ3RoPT09MHx8Y2xlYW5lZEtleS5sZW5ndGg+MzApe2ludmFsaWRLZXk9dHJ1ZTt9aWYoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsMSkpKSl7aW52YWxpZEtleT10cnVlO31pZihpbnZhbGlkS2V5KXtjbGVhbmVkS2V5PWdldFNhZmVSb3V0ZUtleSgpO31yb3V0ZUtleXNbY2xlYW5lZEtleV09a2V5O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/YCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2A6YC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgOmAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYDt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzLHJvdXRlS2V5cyxuYW1lZFJlZ2V4OmBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYH07fXJldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwc307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtcmVnZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5leGVjT25jZT1leGVjT25jZTtleHBvcnRzLmdldExvY2F0aW9uT3JpZ2luPWdldExvY2F0aW9uT3JpZ2luO2V4cG9ydHMuZ2V0VVJMPWdldFVSTDtleHBvcnRzLmdldERpc3BsYXlOYW1lPWdldERpc3BsYXlOYW1lO2V4cG9ydHMuaXNSZXNTZW50PWlzUmVzU2VudDtleHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHM9bG9hZEdldEluaXRpYWxQcm9wcztleHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uPWZvcm1hdFdpdGhWYWxpZGF0aW9uO2V4cG9ydHMuU1Q9ZXhwb3J0cy5TUD1leHBvcnRzLnVybE9iamVjdEtleXM9dm9pZCAwO3ZhciBfZm9ybWF0VXJsPXJlcXVpcmUoXCIuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsXCIpOy8qKlxuICogVXRpbHNcbiAqL2Z1bmN0aW9uIGV4ZWNPbmNlKGZuKXtsZXQgdXNlZD1mYWxzZTtsZXQgcmVzdWx0O3JldHVybiguLi5hcmdzKT0+e2lmKCF1c2VkKXt1c2VkPXRydWU7cmVzdWx0PWZuKC4uLmFyZ3MpO31yZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCl7Y29uc3R7cHJvdG9jb2wsaG9zdG5hbWUscG9ydH09d2luZG93LmxvY2F0aW9uO3JldHVybmAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQ/JzonK3BvcnQ6Jyd9YDt9ZnVuY3Rpb24gZ2V0VVJMKCl7Y29uc3R7aHJlZn09d2luZG93LmxvY2F0aW9uO2NvbnN0IG9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbigpO3JldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTt9ZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KXtyZXR1cm4gdHlwZW9mIENvbXBvbmVudD09PSdzdHJpbmcnP0NvbXBvbmVudDpDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7fWZ1bmN0aW9uIGlzUmVzU2VudChyZXMpe3JldHVybiByZXMuZmluaXNoZWR8fHJlcy5oZWFkZXJzU2VudDt9YXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsY3R4KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIF9BcHAkcHJvdG90eXBlO2lmKChfQXBwJHByb3RvdHlwZT1BcHAucHJvdG90eXBlKSE9bnVsbCYmX0FwcCRwcm90b3R5cGUuZ2V0SW5pdGlhbFByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9fS8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbmNvbnN0IHJlcz1jdHgucmVzfHxjdHguY3R4JiZjdHguY3R4LnJlcztpZighQXBwLmdldEluaXRpYWxQcm9wcyl7aWYoY3R4LmN0eCYmY3R4LkNvbXBvbmVudCl7Ly8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxucmV0dXJue3BhZ2VQcm9wczphd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsY3R4LmN0eCl9O31yZXR1cm57fTt9Y29uc3QgcHJvcHM9YXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO2lmKHJlcyYmaXNSZXNTZW50KHJlcykpe3JldHVybiBwcm9wczt9aWYoIXByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGg9PT0wJiYhY3R4LmN0eCl7Y29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7fX1yZXR1cm4gcHJvcHM7fWNvbnN0IHVybE9iamVjdEtleXM9WydhdXRoJywnaGFzaCcsJ2hvc3QnLCdob3N0bmFtZScsJ2hyZWYnLCdwYXRoJywncGF0aG5hbWUnLCdwb3J0JywncHJvdG9jb2wnLCdxdWVyeScsJ3NlYXJjaCcsJ3NsYXNoZXMnXTtleHBvcnRzLnVybE9iamVjdEtleXM9dXJsT2JqZWN0S2V5cztmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7aWYodXJsIT09bnVsbCYmdHlwZW9mIHVybD09PSdvYmplY3QnKXtPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5PT57aWYodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSk9PT0tMSl7Y29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO319KTt9fXJldHVybigwLF9mb3JtYXRVcmwuZm9ybWF0VXJsKSh1cmwpO31jb25zdCBTUD10eXBlb2YgcGVyZm9ybWFuY2UhPT0ndW5kZWZpbmVkJztleHBvcnRzLlNQPVNQO2NvbnN0IFNUPVNQJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWFyaz09PSdmdW5jdGlvbicmJnR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlPT09J2Z1bmN0aW9uJztleHBvcnRzLlNUPVNUO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICd+L3N0b3JlL3N0b3JlJztcbmltcG9ydCB7IENvb2tpZXNQcm92aWRlciB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5pbXBvcnQgTWFzdGVyTGF5b3V0IGZyb20gJ34vY29tcG9uZW50cy9sYXlvdXRzL01hc3RlckxheW91dCc7XG5pbXBvcnQgJ34vcHVibGljL3N0YXRpYy9mb250cy9MaW5lYXJpY29ucy9Gb250L2RlbW8tZmlsZXMvZGVtby5jc3MnO1xuaW1wb3J0ICd+L3B1YmxpYy9zdGF0aWMvZm9udHMvZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyc7XG5pbXBvcnQgJ34vcHVibGljL3N0YXRpYy9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICd+L3B1YmxpYy9zdGF0aWMvY3NzL3NsaWNrLm1pbi5jc3MnO1xuaW1wb3J0ICd+L3Njc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJ34vc2Nzcy9ob21lLWRlZmF1bHQuc2Nzcyc7XG5pbXBvcnQgJ34vc2Nzcy9tYXJrZXQtcGxhY2UtMS5zY3NzJztcbmltcG9ydCAnfi9zY3NzL21hcmtldC1wbGFjZS0yLnNjc3MnO1xuaW1wb3J0ICd+L3Njc3MvbWFya2V0LXBsYWNlLTMuc2Nzcyc7XG5pbXBvcnQgJ34vc2Nzcy9tYXJrZXQtcGxhY2UtNC5zY3NzJztcbmltcG9ydCAnfi9zY3NzL2VsZWN0cm9uaWMuc2Nzcyc7XG5pbXBvcnQgJ34vc2Nzcy9mdXJuaXR1cmUuc2Nzcyc7XG5pbXBvcnQgJ34vc2Nzcy9vcmdhbmljLnNjc3MnO1xuaW1wb3J0ICd+L3Njc3MvdGVjaG5vbG9neS5zY3NzJztcbmltcG9ydCAnfi9zY3NzL2F1dG9wYXJ0LnNjc3MnO1xuaW1wb3J0ICd+L3Njc3MvZWxlY3Ryb25pYy5zY3NzJztcblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fbmV4dCcpLmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgICAgICB9LCAxMDApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvb2tpZXNQcm92aWRlcj5cbiAgICAgICAgICAgIDxNYXN0ZXJMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9NYXN0ZXJMYXlvdXQ+XG4gICAgICAgIDwvQ29va2llc1Byb3ZpZGVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XG4iLCJpbXBvcnQgUmVwb3NpdG9yeSwgeyBiYXNlVXJsLCBzZXJpYWxpemVRdWVyeSB9IGZyb20gJy4vUmVwb3NpdG9yeSc7XG5cbmNsYXNzIFByb2R1Y3RSZXBvc2l0b3J5IHtcbiAgICBhc3luYyBnZXRSZWNvcmRzKHBhcmFtcykge1xuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoXG4gICAgICAgICAgICBgJHtiYXNlVXJsfS9wcm9kdWN0cz8ke3NlcmlhbGl6ZVF1ZXJ5KHBhcmFtcyl9YFxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiAoeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpIH0pKTtcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHJvZHVjdHMocGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldChcbiAgICAgICAgICAgIGAke2Jhc2VVcmx9L3Byb2R1Y3RzPyR7c2VyaWFsaXplUXVlcnkocGFyYW1zKX1gXG4gICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVwb25zZTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRCcmFuZHMoKSB7XG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldChgJHtiYXNlVXJsfS9icmFuZHNgKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XG4gICAgICAgIHJldHVybiByZXBvbnNlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFByb2R1Y3RDYXRlZ29yaWVzKCkge1xuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoYCR7YmFzZVVybH0vcHJvZHVjdC1jYXRlZ29yaWVzYClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xuICAgICAgICByZXR1cm4gcmVwb25zZTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRUb3RhbFJlY29yZHMoKSB7XG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldChgJHtiYXNlVXJsfS9wcm9kdWN0cy9jb3VudGApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiAoeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpIH0pKTtcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHJvZHVjdHNCeUlkKHBheWxvYWQpIHtcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KGAke2Jhc2VVcmx9L3Byb2R1Y3RzLyR7cGF5bG9hZH1gKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XG4gICAgICAgIHJldHVybiByZXBvbnNlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFByb2R1Y3RzQnlDYXRlZ29yeShwYXlsb2FkKSB7XG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldChcbiAgICAgICAgICAgIGAke2Jhc2VVcmx9L3Byb2R1Y3QtY2F0ZWdvcmllcz9zbHVnPSR7cGF5bG9hZH1gXG4gICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhWzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHJvZHVjdHNCeUJyYW5kKHBheWxvYWQpIHtcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KFxuICAgICAgICAgICAgYCR7YmFzZVVybH0vYnJhbmRzP3NsdWc9JHtwYXlsb2FkfWBcbiAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVwb25zZTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQcm9kdWN0c0J5QnJhbmRzKHBheWxvYWQpIHtcbiAgICAgICAgbGV0IHF1ZXJ5ID0gJyc7XG4gICAgICAgIHBheWxvYWQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5ID09PSAnJykge1xuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gYGlkX2luPSR7aXRlbX1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5ICsgYCZpZF9pbj0ke2l0ZW19YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldChgJHtiYXNlVXJsfS9icmFuZHM/JHtxdWVyeX1gKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XG4gICAgICAgIHJldHVybiByZXBvbnNlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFByb2R1Y3RzQnlCcmFuZHMocGF5bG9hZCkge1xuICAgICAgICBsZXQgcXVlcnkgPSAnJztcbiAgICAgICAgcGF5bG9hZC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAocXVlcnkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcXVlcnkgPSBgaWRfaW49JHtpdGVtfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkgKyBgJmlkX2luPSR7aXRlbX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KGAke2Jhc2VVcmx9L2JyYW5kcz8ke3F1ZXJ5fWApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiAoeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpIH0pKTtcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHJvZHVjdHNCeVByaWNlUmFuZ2UocGF5bG9hZCkge1xuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoXG4gICAgICAgICAgICBgJHtiYXNlVXJsfS9wcm9kdWN0cz8ke3NlcmlhbGl6ZVF1ZXJ5KHBheWxvYWQpfWBcbiAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XG4gICAgICAgIHJldHVybiByZXBvbnNlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFByb2R1Y3RzQnlJZHMocGF5bG9hZCkge1xuICAgICAgICBjb25zdCBlbmRQb2ludCA9IGAke2Jhc2VVcmx9L3Byb2R1Y3RzPyR7cGF5bG9hZH1gO1xuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoZW5kUG9pbnQpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXBvbnNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFByb2R1Y3RSZXBvc2l0b3J5KCk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuY29uc3QgYmFzZURvbWFpbiA9ICdodHRwczovL2JldGEuYXBpbm91dGhlbWVzLmNvbSc7IC8vIEFQSSBmb3IgcHJvZHVjdHNcbmV4cG9ydCBjb25zdCBiYXNlUG9zdFVybCA9ICdodHRwczovL2JldGEuYXBpbm91dGhlbWVzLmNvbSc7IC8vIEFQSSBmb3IgcG9zdFxuZXhwb3J0IGNvbnN0IGJhc2VTdG9yZVVSTCA9ICdodHRwczovL2JldGEuYXBpbm91dGhlbWVzLmNvbSc7IC8vIEFQSSBmb3IgdmVuZG9yKHN0b3JlKVxuXG5leHBvcnQgY29uc3QgY3VzdG9tSGVhZGVycyA9IHtcbiAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbn07XG5cbmV4cG9ydCBjb25zdCBiYXNlVXJsID0gYCR7YmFzZURvbWFpbn1gO1xuXG5leHBvcnQgZGVmYXVsdCBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVcmwsXG4gICAgaGVhZGVyczogY3VzdG9tSGVhZGVycyxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2VyaWFsaXplUXVlcnkgPSAocXVlcnkpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocXVlcnkpXG4gICAgICAgIC5tYXAoXG4gICAgICAgICAgICAoa2V5KSA9PlxuICAgICAgICAgICAgICAgIGAke2VuY29kZVVSSUNvbXBvbmVudChrZXkpfT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeVtrZXldKX1gXG4gICAgICAgIClcbiAgICAgICAgLmpvaW4oJyYnKTtcbn07XG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XG4gICAgU1dJVENIX0RFTU9fUEFORUw6ICdTV0lUQ0hfREVNT19QQU5FTCcsXG4gICAgU1dJVENIX0RFTU9fUEFORUxfU1VDQ0VTUzogJ1NXSVRDSF9ERU1PX1BBTkVMX1NVQ0NFU1MnLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaERlbW9QYW5lbChwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuU1dJVENIX0RFTU9fUEFORUwsIHBheWxvYWQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaERlbW9QYW5lbFN1Y2Nlc3MocGF5bG9hZCkge1xuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlNXSVRDSF9ERU1PX1BBTkVMX1NVQ0NFU1MsIHBheWxvYWQgfTtcbn1cbiIsImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaW5pdFN0YXRlID0ge1xuICAgIGlzU2hvd0RlbW9QYW5lbDogZmFsc2UsXG59O1xuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuU1dJVENIX0RFTU9fUEFORUxfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4ueyBpc1Nob3dEZW1vUGFuZWw6IGFjdGlvbi5wYXlsb2FkIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImltcG9ydCB7IGFsbCwgcHV0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBhY3Rpb25UeXBlcywgc3dpdGNoRGVtb1BhbmVsU3VjY2VzcyB9IGZyb20gJy4vYWN0aW9uJztcblxuZnVuY3Rpb24qIHN3aXRjaERlbW9QYW5lbCh7IHBheWxvYWQgfSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBheWxvYWQucGF5bG9hZCk7XG4gICAgICAgIHlpZWxkIHB1dChzd2l0Y2hEZW1vUGFuZWxTdWNjZXNzKHBheWxvYWQpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5TV0lUQ0hfREVNT19QQU5FTCwgc3dpdGNoRGVtb1BhbmVsKV0pO1xufVxuIiwiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xuICAgIExPR0lOX1JFUVVFU1Q6ICdMT0dJTl9SRVFVRVNUJyxcbiAgICBMT0dJTl9TVUNDRVNTOiAnTE9HSU5fU1VDQ0VTUycsXG4gICAgTE9HT1VUOiAnTE9HT1VUJyxcbiAgICBMT0dPVVRfU1VDQ0VTUzogJ0xPR09VVF9TVUNDRVNTJyxcbiAgICBDSEVDS19BVVRIT1JJWkFUSU9OOiAnQ0hFQ0tfQVVUSE9SSVpBVElPTicsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbG9naW4oKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuTE9HSU5fUkVRVUVTVCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naW5TdWNjZXNzKCkge1xuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkxPR0lOX1NVQ0NFU1MgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ091dCgpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5MT0dPVVQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ091dFN1Y2Nlc3MoKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuTE9HT1VUX1NVQ0NFU1MgfTtcbn1cbiIsImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaW5pdFN0YXRlID0ge1xuICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxufTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9ucykge1xuICAgIHN3aXRjaCAoYWN0aW9ucy50eXBlKSB7XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9HSU5fU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4ueyBpc0xvZ2dlZEluOiB0cnVlIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkxPR09VVF9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi57IGlzTG9nZ2VkSW46IGZhbHNlIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImltcG9ydCB7IGFsbCwgcHV0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHtub3RpZmljYXRpb24gfSBmcm9tICdhbnRkJztcblxuaW1wb3J0IHsgYWN0aW9uVHlwZXMsIGxvZ2luU3VjY2VzcywgbG9nT3V0U3VjY2VzcyB9IGZyb20gJy4vYWN0aW9uJztcblxuY29uc3QgbW9kYWxTdWNjZXNzID0gdHlwZSA9PiB7XG4gICAgbm90aWZpY2F0aW9uW3R5cGVdKHtcbiAgICAgICAgbWVzc2FnZTogJ1dlbGxjb21lIGJhY2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1lvdSBhcmUgbG9naW4gc3VjY2Vzc2Z1bCEnLFxuICAgIH0pO1xufTtcblxuY29uc3QgbW9kYWxXYXJuaW5nID0gdHlwZSA9PiB7XG4gICAgbm90aWZpY2F0aW9uW3R5cGVdKHtcbiAgICAgICAgbWVzc2FnZTogJ0dvb2QgYnllIScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnWW91ciBhY2NvdW50IGhhcyBiZWVuIGxvZ2dlZCBvdXQhJyxcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uKiBsb2dpblNhZ2EoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgeWllbGQgcHV0KGxvZ2luU3VjY2VzcygpKTtcbiAgICAgICAgbW9kYWxTdWNjZXNzKCdzdWNjZXNzJyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogbG9nT3V0U2FnYSgpIHtcbiAgICB0cnkge1xuICAgICAgICB5aWVsZCBwdXQobG9nT3V0U3VjY2VzcygpKTtcbiAgICAgICAgbW9kYWxXYXJuaW5nKCd3YXJuaW5nJyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuTE9HSU5fUkVRVUVTVCwgbG9naW5TYWdhKV0pO1xuICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkxPR09VVCwgbG9nT3V0U2FnYSldKTtcbn1cbiIsImV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcbiAgICAvLyBuZXdcblxuICAgIFNFVF9XSVNITElTVF9JVEVNUzogJ1NFVF9XSVNITElTVF9JVEVNUycsXG4gICAgU0VUX1dJU0hMSVNUX0lURU1TX1NVQ0NFU1M6ICdTRVRfV0lTSExJU1RfSVRFTVNfU1VDQ0VTUycsXG5cbiAgICBTRVRfQ0FSVF9JVEVNUzogJ1NFVF9DQVJUX0lURU1TJyxcbiAgICBTRVRfQ0FSVF9JVEVNU19TVUNDRVNTOiAnU0VUX0NBUlRfSVRFTVNfU1VDQ0VTUycsXG5cbiAgICBTRVRfQ09NUEFSRV9JVEVNUzogJ1NFVF9DT01QQVJFX0lURU1TJyxcbiAgICBTRVRfQ09NUEFSRV9JVEVNU19TVUNDRVNTOiAnU0VUX0NPTVBBUkVfSVRFTVNfU1VDQ0VTUycsXG59O1xuXG4vLyBuZXdcbmV4cG9ydCBmdW5jdGlvbiBzZXRXaXNobGlzdFR0ZW1zKHBheWxvYWQpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfV0lTSExJU1RfSVRFTVMsIHBheWxvYWQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFdpc2hsaXN0VHRlbXNTdWNjZXNzKHBheWxvYWQpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfV0lTSExJU1RfSVRFTVNfU1VDQ0VTUywgcGF5bG9hZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2FydEl0ZW1zKHBheWxvYWQpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfQ0FSVF9JVEVNUywgcGF5bG9hZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2FydEl0ZW1zU3VjY2VzcyhwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0NBUlRfSVRFTVNfU1VDQ0VTUywgcGF5bG9hZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29tcGFyZUl0ZW1zKHBheWxvYWQpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfQ09NUEFSRV9JVEVNUywgcGF5bG9hZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29tcGFyZUl0ZW1zU3VjY2VzcyhwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0NPTVBBUkVfSVRFTVNfU1VDQ0VTUywgcGF5bG9hZCB9O1xufVxuIiwiaW1wb3J0IHsgYWN0aW9uVHlwZXMgfSBmcm9tICcuL2FjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBpbml0YWxTdGF0ZSA9IHtcbiAgICB3aXNobGlzdEl0ZW1zOiBbXSxcbiAgICBjb21wYXJlSXRlbXM6IFtdLFxuICAgIGNhcnRJdGVtczogW10sXG59O1xuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGFsU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgLy8gbmV3XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX1dJU0hMSVNUX0lURU1TX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHdpc2hsaXN0SXRlbXM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQ0FSVF9JVEVNU19TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjYXJ0SXRlbXM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQ09NUEFSRV9JVEVNU19TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjb21wYXJlSXRlbXM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJpbXBvcnQgeyBhbGwsIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb24nO1xuXG5pbXBvcnQge1xuICAgIHVwZGF0ZUNhcnRTdWNjZXNzLFxuICAgIHVwZGF0ZUNhcnRFcnJvcixcbiAgICBzZXRDYXJ0SXRlbXNTdWNjZXNzLFxuICAgIHNldFdpc2hsaXN0VHRlbXNTdWNjZXNzLFxuICAgIHNldENvbXBhcmVJdGVtc1N1Y2Nlc3MsXG59IGZyb20gJy4vYWN0aW9uJztcblxuLy8gbmV3XG5mdW5jdGlvbiogZ2V0V2lzaGxpc3RJdGVtcyh7IHBheWxvYWQgfSkge1xuICAgIHRyeSB7XG4gICAgICAgIHlpZWxkIHB1dChzZXRXaXNobGlzdFR0ZW1zU3VjY2VzcyhwYXlsb2FkKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogZ2V0Q2FydEl0ZW1zKHsgcGF5bG9hZCB9KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgeWllbGQgcHV0KHNldENhcnRJdGVtc1N1Y2Nlc3MocGF5bG9hZCkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24qIGdldENvbXBhcmVJdGVtcyh7IHBheWxvYWQgfSkge1xuICAgIHRyeSB7XG4gICAgICAgIHlpZWxkIHB1dChzZXRDb21wYXJlSXRlbXNTdWNjZXNzKHBheWxvYWQpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgICAvLyBuZXdcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5TRVRfV0lTSExJU1RfSVRFTVMsIGdldFdpc2hsaXN0SXRlbXMpXSk7XG4gICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuU0VUX0NBUlRfSVRFTVMsIGdldENhcnRJdGVtcyldKTtcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5TRVRfQ09NUEFSRV9JVEVNUywgZ2V0Q29tcGFyZUl0ZW1zKV0pO1xufVxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoL3JlZHVjZXInO1xuaW1wb3J0IHNldHRpbmcgZnJvbSAnLi9zZXR0aW5nL3JlZHVjZXInO1xuaW1wb3J0IGFwcCBmcm9tICcuL2FwcC9yZWR1Y2VyJztcbmltcG9ydCBlY29tZXJjZSBmcm9tICcuL2Vjb21lcmNlL3JlZHVjZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGF1dGgsXG4gICAgc2V0dGluZyxcbiAgICBhcHAsXG4gICAgZWNvbWVyY2UsXG59KTtcbiIsImltcG9ydCB7IGFsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgU2V0dGluZ1NhZ2EgZnJvbSAnLi9zZXR0aW5nL3NhZ2EnO1xuaW1wb3J0IEF1dGhTYWdhIGZyb20gJy4vYXV0aC9zYWdhJztcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAvc2FnYSc7XG5pbXBvcnQgRWNvbWVyY2UgZnJvbSAnLi9lY29tZXJjZS9zYWdhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICAgIHlpZWxkIGFsbChbQXV0aFNhZ2EoKSwgU2V0dGluZ1NhZ2EoKSwgQXV0aFNhZ2EoKSwgQXBwKCksIEVjb21lcmNlKCldKTtcbn1cbiIsImV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcbiAgICBDSEFOR0VfQ1VSUkVOQ1k6ICdDSEFOR0VfQ1VSUkVOQ1knLFxuICAgIENIQU5HRV9DVVJSRU5DWV9TVUNDRVNTOiAnQ0hBTkdFX0NVUlJFTkNZX1NVQ0NFU1MnLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUN1cnJlbmN5KGN1cnJlbmN5KSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuQ0hBTkdFX0NVUlJFTkNZLCBjdXJyZW5jeSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ3VycmVuY3lTdWNjZXNzKGN1cnJlbmN5KSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuQ0hBTkdFX0NVUlJFTkNZX1NVQ0NFU1MsIGN1cnJlbmN5IH07XG59XG4iLCJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBjdXJyZW5jeToge1xuICAgICAgICBzeW1ib2w6ICckJyxcbiAgICAgICAgdGV4dDogJ1VTRCcsXG4gICAgfSxcbn07XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5DSEFOR0VfQ1VSUkVOQ1lfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4ueyBjdXJyZW5jeTogYWN0aW9uLmN1cnJlbmN5IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImltcG9ydCB7IGFsbCwgcHV0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBhY3Rpb25UeXBlcywgY2hhbmdlQ3VycmVuY3lTdWNjZXNzIH0gZnJvbSAnLi9hY3Rpb24nO1xuXG5mdW5jdGlvbiogY2hhbmdlQ3VycmVuY3lTYWdhKHsgY3VycmVuY3kgfSkge1xuICAgIHRyeSB7XG4gICAgICAgIHlpZWxkIHB1dChjaGFuZ2VDdXJyZW5jeVN1Y2Nlc3MoY3VycmVuY3kpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkNIQU5HRV9DVVJSRU5DWSwgY2hhbmdlQ3VycmVuY3lTYWdhKV0pO1xufVxuIiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcbmltcG9ydCByb290UmVkdWNlciBmcm9tICd+L3N0b3JlL3Jvb3RSZWR1Y2VyJztcbmltcG9ydCByb290U2FnYSBmcm9tICd+L3N0b3JlL3Jvb3RTYWdhJztcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuXG5jb25zdCBiaW5kTWlkZGxld2FyZSA9IChtaWRkbGV3YXJlKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gPSByZXF1aXJlKCdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYWtlU3RvcmUgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBiaW5kTWlkZGxld2FyZShbc2FnYU1pZGRsZXdhcmVdKSk7XG5cbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XG4gICAgcmV0dXJuIHN0b3JlO1xufTtcblxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwgeyBkZWJ1ZzogZmFsc2UgfSk7XG4iLCIvKlxuICogUmVhY3QgdGVtcGxhdGUgaGVscGVyc1xuICogQXV0aG9yOiBOb3V0aGVtZXNcbiAqIERldmVsb3BlZDogZGlhcnlmb3JsaWZlXG4gKiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmltcG9ydCB7IGdldFByb2R1Y3RzQnlJZHMgfSBmcm9tICd+L3JlcG9zaXRvcmllcy9Qcm9kdWN0UmVwb3NpdG9yeSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJ0SXRlbXNGcm9tQ29va2llcygpIHtcbiAgICBjb25zdCBjYXJ0SXRlbXMgPSBjb29raWVzLmdldCgnY2FydCcpO1xuICAgIGlmIChjYXJ0SXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoY2FydEl0ZW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDYXJ0VG9Db29raWVzKHBheWxvYWQpIHtcbiAgICBjb29raWVzLnNldCgnY2FydCcsIHBheWxvYWQsIHsgcGF0aDogJy8nLCBleHBpcmVzOiAyNCAqIDcgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRJdGVtVG9DYXJ0SGVscGVyKHByb2R1Y3QpIHtcbiAgICBsZXQgY2FydDtcbiAgICBsZXQgY29va2llQ2FydCA9IGdldENhcnRJdGVtc0Zyb21Db29raWVzKCk7XG4gICAgaWYgKGNvb2tpZUNhcnQpIHtcbiAgICAgICAgY2FydCA9IGNvb2tpZUNhcnQ7XG4gICAgICAgIGNvbnN0IGV4aXN0SXRlbSA9IGNhcnQuaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCk7XG4gICAgICAgIGlmIChleGlzdEl0ZW0pIHtcbiAgICAgICAgICAgIGV4aXN0SXRlbS5xdWFudGl0eSArPSBwcm9kdWN0LnF1YW50aXR5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLyogaWYgKCFwcm9kdWN0LnF1YW50aXR5KSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdC5xdWFudGl0eSA9IDE7XG4gICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgIGNhcnQuaXRlbXMucHVzaChwcm9kdWN0KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcnQgPSB7XG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgIH07XG4gICAgICAgIGNhcnQuaXRlbXMucHVzaChwcm9kdWN0KTtcbiAgICB9XG4gICAgdXBkYXRlQ2FydFRvQ29va2llcyhjYXJ0KTtcbiAgICByZXR1cm4gY2FydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluY3JlYXNlUXR5Q2FydEl0ZW1IZWxwZXIocHJvZHVjdCkge1xuICAgIGxldCBjYXJ0O1xuICAgIGxldCBjb29raWVDYXJ0ID0gZ2V0Q2FydEl0ZW1zRnJvbUNvb2tpZXMoKTtcbiAgICBpZiAoY29va2llQ2FydCkge1xuICAgICAgICBjYXJ0ID0gY29va2llQ2FydDtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gY2FydC5pdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkKTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0ucXVhbnRpdHkgPSBzZWxlY3RlZEl0ZW0ucXVhbnRpdHkgKyAxO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZUNhcnRUb0Nvb2tpZXMoY2FydCk7XG4gICAgICAgIHJldHVybiBjYXJ0O1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY3JlYXNlUXR5Q2FydEl0ZW1IZWxwZXIocHJvZHVjdCkge1xuICAgIGxldCBjYXJ0O1xuICAgIGxldCBjb29raWVDYXJ0ID0gZ2V0Q2FydEl0ZW1zRnJvbUNvb2tpZXMoKTtcbiAgICBpZiAoY29va2llQ2FydCkge1xuICAgICAgICBjYXJ0ID0gY29va2llQ2FydDtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gY2FydC5pdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkKTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0ucXVhbnRpdHkgPSBzZWxlY3RlZEl0ZW0ucXVhbnRpdHkgLSAxO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZUNhcnRUb0Nvb2tpZXMoY2FydCk7XG4gICAgICAgIHJldHVybiBjYXJ0O1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNhcnRJdGVtSGVscGVyKHByb2R1Y3QpIHtcbiAgICBsZXQgY2FydDtcbiAgICBsZXQgY29va2llQ2FydCA9IGdldENhcnRJdGVtc0Zyb21Db29raWVzKCk7XG4gICAgaWYgKGNvb2tpZUNhcnQpIHtcbiAgICAgICAgY2FydCA9IGNvb2tpZUNhcnQ7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gY2FydC5pdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQpO1xuICAgICAgICBjYXJ0Lml0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHVwZGF0ZUNhcnRUb0Nvb2tpZXMoY2FydCk7XG4gICAgICAgIHJldHVybiBjYXJ0O1xuICAgIH1cbn1cblxuLy8gbmV3XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBbW91bnQob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMob2JqKVxuICAgICAgICAucmVkdWNlKChhY2MsIHsgcXVhbnRpdHksIHByaWNlIH0pID0+IGFjYyArIHF1YW50aXR5ICogcHJpY2UsIDApXG4gICAgICAgIC50b0ZpeGVkKDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQ2FydFF1YW50aXR5KG9iaikge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKG9iaikucmVkdWNlKChhY2MsIHsgcXVhbnRpdHkgfSkgPT4gYWNjICsgcXVhbnRpdHksIDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FjdWxhdGVBcnJheVF1YW50aXR5KG9iaikge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKG9iaikucmVkdWNlKChhY2MpID0+IGFjYyArIDEsIDApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXp5TG9hZCBmcm9tICdyZWFjdC1sYXp5bG9hZCc7XG5pbXBvcnQgeyBiYXNlVXJsIH0gZnJvbSAnfi9yZXBvc2l0b3JpZXMvUmVwb3NpdG9yeSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3kobnVtKSB7XG4gICAgaWYgKG51bSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KG51bSlcbiAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnJDEsJyk7XG4gICAgfSBlbHNlIHtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb2xsZXRpb25CeVNsdWcoY29sbGVjdGlvbnMsIHNsdWcpIHtcbiAgICBpZiAoY29sbGVjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjb2xsZWN0aW9ucy5maW5kKFxuICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uc2x1ZyA9PT0gc2x1Zy50b1N0cmluZygpXG4gICAgICAgICk7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5wcm9kdWN0cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtQnlTbHVnKGJhbm5lcnMsIHNsdWcpIHtcbiAgICBpZiAoYmFubmVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGJhbm5lciA9IGJhbm5lcnMuZmluZCgoaXRlbSkgPT4gaXRlbS5zbHVnID09PSBzbHVnLnRvU3RyaW5nKCkpO1xuICAgICAgICBpZiAoYmFubmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBiYW5uZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRTbHVnc1F1ZXJ5U3RyaW5nKHBheWxvYWQpIHtcbiAgICBsZXQgcXVlcnkgPSAnJztcbiAgICBpZiAocGF5bG9hZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHBheWxvYWQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5ID09PSAnJykge1xuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gYHNsdWdfaW49JHtpdGVtfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkgKyBgJnNsdWdfaW49JHtpdGVtfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTdHJhcGlQcm9kdWN0UHJpY2VFeHBhbmRlZChwcm9kdWN0KSB7XG4gICAgbGV0IHZpZXc7XG4gICAgaWYgKHByb2R1Y3QuaXNfc2FsZSA9PT0gdHJ1ZSkge1xuICAgICAgICB2aWV3ID0gKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fcHJpY2Ugc2FsZVwiPlxuICAgICAgICAgICAgICAgICR7Zm9ybWF0Q3VycmVuY3kocHJvZHVjdC5wcmljZSl9XG4gICAgICAgICAgICAgICAgPGRlbCBjbGFzc05hbWU9XCJtbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICR7Zm9ybWF0Q3VycmVuY3kocHJvZHVjdC5zYWxlX3ByaWNlKX1cbiAgICAgICAgICAgICAgICA8L2RlbD5cbiAgICAgICAgICAgICAgICA8c21hbGw+MTglIG9mZjwvc21hbGw+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmlldyA9IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX3ByaWNlXCI+XG4gICAgICAgICAgICAgICAgJHtmb3JtYXRDdXJyZW5jeShwcm9kdWN0LnByaWNlKX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHZpZXc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTdHJhcGlQcm9kdWN0VGh1bWJuYWlsKHByb2R1Y3QpIHtcbiAgICBsZXQgdmlldztcblxuICAgIGlmIChwcm9kdWN0LnRodW1ibmFpbCkge1xuICAgICAgICB2aWV3ID0gKFxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0L1twaWRdXCIgYXM9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake2Jhc2VVcmx9JHtwcm9kdWN0LnRodW1ibmFpbC51cmx9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0xhenlMb2FkPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2aWV3ID0gKFxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0L1twaWRdXCIgYXM9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvbm90LWZvdW5kLmpwZ1wiIGFsdD1cIm1hcnRmdXJ5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MYXp5TG9hZD5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpZXc7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxhenlsb2FkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=