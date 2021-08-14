(function() {
var exports = {};
exports.id = "pages/404";
exports.ids = ["pages/404"];
exports.modules = {

/***/ "./components/elements/Rating.jsx":
/*!****************************************!*\
  !*** ./components/elements/Rating.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\elements\\Rating.jsx";


const Rating = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
  className: "ps-rating",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
    className: "fa fa-star"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
    className: "fa fa-star"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
    className: "fa fa-star"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
    className: "fa fa-star"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
    className: "fa fa-star-o"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Rating);

/***/ }),

/***/ "./components/elements/common/Logo.js":
/*!********************************************!*\
  !*** ./components/elements/common/Logo.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\elements\\common\\Logo.js";



const Logo = ({
  type
}) => {
  let data;

  if (type === 'autopart') {
    data = {
      url: '/home/autopart',
      img: 'img/logo-autopart.png'
    };
  } else if (type === 'technology') {
    data = {
      url: '/home/technology',
      img: 'static/img/logo-technology.png'
    };
  } else if (type === 'technology') {
    data = {
      url: '/home/technology',
      img: 'static/img/logo-technology.png'
    };
  } else if (type === 'electronic') {
    data = {
      url: '/home/electronic',
      img: 'static/img/logo-electronic.png'
    };
  } else if (type === 'furniture') {
    data = {
      url: '/home/furniture',
      img: 'static/img/logo-furniture.png'
    };
  } else if (type === 'organic') {
    data = {
      url: '/home/organic',
      img: 'static/img/logo-organic.png'
    };
  } else {
    data = {
      url: '/',
      img: '/static/img/logo_light.png'
    };
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: data.url,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      className: "ps-logo",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: data.img,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/elements/menu/MegaMenu.jsx":
/*!***********************************************!*\
  !*** ./components/elements/menu/MegaMenu.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\elements\\menu\\MegaMenu.jsx";



const MegaMenu = ({
  source
}) => {
  let megaContentView;

  if (source) {
    megaContentView = source.megaContent.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mega-menu__column",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: item.heading
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "mega-menu__list",
        children: item.megaItems.map(subItem => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: subItem.url,
            as: subItem.url,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: subItem.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 29
          }, undefined)
        }, subItem.text, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined)]
    }, item.heading, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    className: "menu-item-has-children has-mega-menu",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: source.url !== '' ? source.url : '/',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: [source.icon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: source.icon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 37
        }, undefined), source.text]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mega-menu",
      children: megaContentView
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MegaMenu);

/***/ }),

/***/ "./components/elements/menu/Menu.jsx":
/*!*******************************************!*\
  !*** ./components/elements/menu/Menu.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_elements_menu_MenuDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/elements/menu/MenuDropdown */ "./components/elements/menu/MenuDropdown.jsx");
/* harmony import */ var _components_elements_menu_MegaMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/elements/menu/MegaMenu */ "./components/elements/menu/MegaMenu.jsx");

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\elements\\menu\\Menu.jsx";





const Menu = ({
  source,
  className
}) => {
  // Views
  let menuView;

  if (source) {
    menuView = source.map(item => {
      if (item.subMenu) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_menu_MenuDropdown__WEBPACK_IMPORTED_MODULE_3__.default, {
          source: item
        }, item.text, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 24
        }, undefined);
      } else if (item.megaContent) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_menu_MegaMenu__WEBPACK_IMPORTED_MODULE_4__.default, {
          source: item
        }, item.text, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 24
        }, undefined);
      } else {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: item.url,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: [item.icon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: item.icon
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 47
              }, undefined), item.text]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, undefined)
        }, item.text, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, undefined);
      }
    });
  } else {
    menuView = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        onClick: e => e.preventDefault(),
        children: "No menu item."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    className: className,
    children: menuView
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/elements/menu/MenuDropdown.jsx":
/*!***************************************************!*\
  !*** ./components/elements/menu/MenuDropdown.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\elements\\menu\\MenuDropdown.jsx";



const MenuDropdown = ({
  source
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    className: "menu-item-has-children dropdown",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: source.url,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: source.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }, undefined), source.subMenu && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: source.subClass,
      children: source.subMenu.map((subMenuItem, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuDropdown, {
        source: subMenuItem
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MenuDropdown);

/***/ }),

/***/ "./components/elements/products/ProductOnCart.jsx":
/*!********************************************************!*\
  !*** ./components/elements/products/ProductOnCart.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/hooks/useProduct */ "./hooks/useProduct.js");

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\elements\\products\\ProductOnCart.jsx";




const ProductOnCart = ({
  product,
  children
}) => {
  const {
    thumbnailImage,
    title
  } = (0,_hooks_useProduct__WEBPACK_IMPORTED_MODULE_3__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "ps-product--cart-mobile",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ps-product__thumbnail",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/product/[pid]",
        as: `/product/${product.id}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: thumbnailImage(product)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ps-product__content",
      children: [title(product), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
          children: ["$", product.price, " x ", product.quantity]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined), ' ', children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductOnCart);

/***/ }),

/***/ "./components/elements/products/ProductSearchResult.jsx":
/*!**************************************************************!*\
  !*** ./components/elements/products/ProductSearchResult.jsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_elements_Rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/elements/Rating */ "./components/elements/Rating.jsx");
/* harmony import */ var _hooks_useProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/hooks/useProduct */ "./hooks/useProduct.js");

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\elements\\products\\ProductSearchResult.jsx";





const ProductSearchResult = ({
  product
}) => {
  const {
    thumbnailImage,
    price,
    title
  } = (0,_hooks_useProduct__WEBPACK_IMPORTED_MODULE_4__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "ps-product ps-product--wide ps-product--search-result",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ps-product__thumbnail",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/product/[pid]",
        as: `/product/${product.id}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: thumbnailImage(product)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ps-product__content",
      children: [title(product), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ps-product__rating",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_Rating__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: product.ratingCount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined), price(product)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductSearchResult);

/***/ }),

/***/ "./components/shared/footers/FooterDefault.jsx":
/*!*****************************************************!*\
  !*** ./components/shared/footers/FooterDefault.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_FooterWidgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/FooterWidgets */ "./components/shared/footers/modules/FooterWidgets.jsx");
/* harmony import */ var _modules_FooterLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/FooterLinks */ "./components/shared/footers/modules/FooterLinks.jsx");
/* harmony import */ var _modules_FooterCopyright__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/FooterCopyright */ "./components/shared/footers/modules/FooterCopyright.jsx");

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\shared\\footers\\FooterDefault.jsx";





const FooterDefault = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
  className: "ps-footer",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_FooterWidgets__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_FooterLinks__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_FooterCopyright__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (FooterDefault);

/***/ }),

/***/ "./components/shared/footers/modules/FooterCopyright.jsx":
/*!***************************************************************!*\
  !*** ./components/shared/footers/modules/FooterCopyright.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\shared\\footers\\modules\\FooterCopyright.jsx";


const FooterCopyright = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  className: "ps-footer__copyright",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "\xA9  2021 Martfury. All Rights Reserved"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "We Using Safe Payment For:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "#",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/static/img/payment-method/1.jpg",
        alt: "Martfury"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "#",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/static/img/payment-method/2.jpg",
        alt: "Martfury"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "#",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/static/img/payment-method/3.jpg",
        alt: "Martfury"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "#",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/static/img/payment-method/4.jpg",
        alt: "Martfury"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "#",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/static/img/payment-method/5.jpg",
        alt: "Martfury"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (FooterCopyright);

/***/ }),

/***/ "./components/shared/footers/modules/FooterLinks.jsx":
/*!***********************************************************!*\
  !*** ./components/shared/footers/modules/FooterLinks.jsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\shared\\footers\\modules\\FooterLinks.jsx";


const Links = {
  consumerElectric: [{
    text: 'Air Conditioners',
    url: '/shop'
  }, {
    text: 'Audios & Theaters',
    url: '/shop'
  }, {
    text: 'Car Electronics',
    url: '/shop'
  }, {
    text: 'Office Electronics',
    url: '/shop'
  }, {
    text: 'TV Televisions',
    url: '/shop'
  }, {
    text: 'Washing Machines',
    url: '/shop'
  }],
  clothingAndApparel: [{
    text: 'Printers',
    url: '/shop'
  }, {
    text: 'Projectors',
    url: '/shop'
  }, {
    text: 'Scanners',
    url: '/shop'
  }, {
    text: 'Store & Business',
    url: '/shop'
  }, {
    text: '4K Ultra HD TVs',
    url: '/shop'
  }, {
    text: 'LED TVs',
    url: '/shop'
  }, {
    text: 'OLED TVs',
    url: '/shop'
  }],
  gardenAndKitchen: [{
    text: 'Cookware',
    url: '/shop'
  }, {
    text: 'Decoration',
    url: '/shop'
  }, {
    text: 'Furniture',
    url: '/shop'
  }, {
    text: 'Garden Tools',
    url: '/shop'
  }, {
    text: 'Garden Equipments',
    url: '/shop'
  }, {
    text: 'Powers And Hand Tools',
    url: '/shop'
  }, {
    text: 'Utensil & Gadget',
    url: '/shop'
  }],
  healthAndBeauty: [{
    text: 'Hair Care',
    url: '/shop'
  }, {
    text: 'Decoration',
    url: '/shop'
  }, {
    text: 'Makeup',
    url: '/shop'
  }, {
    text: 'Body Shower',
    url: '/shop'
  }, {
    text: 'Skin Care',
    url: '/shop'
  }, {
    text: 'Cologine',
    url: '/shop'
  }, {
    text: 'Perfume',
    url: '/shop'
  }],
  jewelryAndWatch: [{
    text: 'Necklace',
    url: '/shop'
  }, {
    text: 'Pendant',
    url: '/shop'
  }, {
    text: 'Diamond Ring',
    url: '/shop'
  }, {
    text: 'Sliver Earing',
    url: '/shop'
  }, {
    text: 'Leather Watcher',
    url: '/shop'
  }, {
    text: 'Gucci',
    url: '/shop'
  }],
  computerAndTechnology: [{
    text: 'Desktop PC',
    url: '/shop'
  }, {
    text: 'Laptop',
    url: '/shop'
  }, {
    text: 'Smartphones',
    url: '/shop'
  }, {
    text: 'Tablet',
    url: '/shop'
  }, {
    text: 'Game Controller',
    url: '/shop'
  }, {
    text: 'Audio & Video',
    url: '/shop'
  }, {
    text: 'Wireless Speaker',
    url: '/shop'
  }]
};

const FooterLinks = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  className: "ps-footer__links",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
      children: "Consumer Electric:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }, undefined), Links.consumerElectric.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: item.url,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: item.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 21
      }, undefined)
    }, item.text, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 180,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
      children: "Clothing & Apparel:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }, undefined), Links.clothingAndApparel.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: item.url,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: item.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 21
      }, undefined)
    }, item.text, false, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 17
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 188,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
      children: "Home, Garden & Kitchen:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }, undefined), Links.gardenAndKitchen.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: item.url,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: item.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 21
      }, undefined)
    }, item.text, false, {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 17
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 196,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
      children: "Health & Beauty:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 13
    }, undefined), Links.healthAndBeauty.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: item.url,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: item.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 21
      }, undefined)
    }, item.text, false, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 17
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 204,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
      children: "Jewelry & Watches:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }, undefined), Links.jewelryAndWatch.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: item.url,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: item.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 21
      }, undefined)
    }, item.text, false, {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 17
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 212,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
      children: "Computer & Technologies:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 13
    }, undefined), Links.computerAndTechnology.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: item.url,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: item.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 21
      }, undefined)
    }, item.text, false, {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 17
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 220,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 179,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (FooterLinks);

/***/ }),

/***/ "./components/shared/footers/modules/FooterWidgets.jsx":
/*!*************************************************************!*\
  !*** ./components/shared/footers/modules/FooterWidgets.jsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\shared\\footers\\modules\\FooterWidgets.jsx";



const FooterWidgets = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  className: "ps-footer__widgets",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("aside", {
    className: "widget widget_footer widget_contact-us",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      className: "widget-title",
      children: "Contact us"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "widget_content",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Call us 24/7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "1800 97 97 69"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["502 New Design Str, Melbourne, Australia ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 62
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "mailto:contact@martfury.co",
          children: "contact@martfury.co"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "ps-list--social",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "facebook",
            href: "#",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "fa fa-facebook"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "twitter",
            href: "#",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "fa fa-twitter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "google-plus",
            href: "#",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "fa fa-google-plus"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "instagram",
            href: "#",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "fa fa-instagram"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("aside", {
    className: "widget widget_footer",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      className: "widget-title",
      children: "Quick links"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "ps-list--link",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/page/blank",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Policy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/page/blank",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Term & Condition"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/page/blank",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Shipping"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/page/blank",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Return"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/page/faqs",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "FAQs"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("aside", {
    className: "widget widget_footer",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      className: "widget-title",
      children: "Company"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "ps-list--link",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/page/about-us",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "About Us"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/page/blank",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Affilate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/page/blank",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Career"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/page/contact-us",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("aside", {
    className: "widget widget_footer",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      className: "widget-title",
      children: "Bussiness"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "ps-list--link",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/page/about-us",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Our Press"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/account/checkout",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Checkout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/account/user-information",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "My account"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/shop",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Shop"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (FooterWidgets);

/***/ }),

/***/ "./components/shared/headers/HeaderDefault.jsx":
/*!*****************************************************!*\
  !*** ./components/shared/headers/HeaderDefault.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_elements_common_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/elements/common/Logo */ "./components/elements/common/Logo.js");
/* harmony import */ var _components_shared_headers_modules_SearchHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/shared/headers/modules/SearchHeader */ "./components/shared/headers/modules/SearchHeader.jsx");
/* harmony import */ var _components_shared_navigation_NavigationDefault__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/navigation/NavigationDefault */ "./components/shared/navigation/NavigationDefault.jsx");
/* harmony import */ var _components_shared_headers_modules_HeaderActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/shared/headers/modules/HeaderActions */ "./components/shared/headers/modules/HeaderActions.jsx");
/* harmony import */ var _utilities_common_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/utilities/common-helpers */ "./utilities/common-helpers.js");
/* harmony import */ var _components_shared_menus_MenuCategoriesDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/shared/menus/MenuCategoriesDropdown */ "./components/shared/menus/MenuCategoriesDropdown.js");

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\shared\\headers\\HeaderDefault.jsx";








const HeaderDefault = () => {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (false) {}
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    className: "header header--1",
    "data-sticky": "true",
    id: "headerSticky",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header__top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ps-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "header__left",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_common_Logo__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_menus_MenuCategoriesDropdown__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "header__center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_headers_modules_SearchHeader__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "header__right",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_headers_modules_HeaderActions__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_navigation_NavigationDefault__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderDefault);

/***/ }),

/***/ "./components/shared/headers/modules/AccountQuickLinks.jsx":
/*!*****************************************************************!*\
  !*** ./components/shared/headers/modules/AccountQuickLinks.jsx ***!
  \*****************************************************************/
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
/* harmony import */ var _store_auth_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/store/auth/action */ "./store/auth/action.js");

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\shared\\headers\\modules\\AccountQuickLinks.jsx";





const AccountQuickLinks = props => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  const handleLogout = e => {
    e.preventDefault();
    dispatch((0,_store_auth_action__WEBPACK_IMPORTED_MODULE_4__.logOut)());
  };

  const accountLinks = [{
    text: 'Account Information',
    url: '/account/user-information'
  }, {
    text: 'Notifications',
    url: '/account/notifications'
  }, {
    text: 'Invoices',
    url: '/account/invoices'
  }, {
    text: 'Address',
    url: '/account/addresses'
  }, {
    text: 'Recent Viewed Product',
    url: '/account/recent-viewed-product'
  }, {
    text: 'Wishlist',
    url: '/account/wishlist'
  }];
  const {
    isLoggedIn
  } = props; // View

  const linksView = accountLinks.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: item.url,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: item.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, undefined)
  }, item.text, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, undefined));

  if (isLoggedIn === true) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ps-block--user-account",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: "icon-user"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ps-block__content",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "ps-list--arrow",
          children: [linksView, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "ps-block__footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              onClick: e => handleLogout(e),
              children: "Logout"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, undefined);
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ps-block--user-header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ps-block__left",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "icon-user"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ps-block__right",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/account/login",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/account/register",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Register"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, undefined);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(state => state)(AccountQuickLinks));

/***/ }),

/***/ "./components/shared/headers/modules/CurrencyDropdown.jsx":
/*!****************************************************************!*\
  !*** ./components/shared/headers/modules/CurrencyDropdown.jsx ***!
  \****************************************************************/
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
/* harmony import */ var _store_setting_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../store/setting/action */ "./store/setting/action.js");

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\shared\\headers\\modules\\CurrencyDropdown.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class CurrencyDropdown extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChangeCurrency", (e, currency) => {
      e.preventDefault();
      this.props.dispatch((0,_store_setting_action__WEBPACK_IMPORTED_MODULE_4__.changeCurrency)(currency));
    });
  }

  handleFeatureWillUpdate(e) {
    e.preventDefault();
    antd__WEBPACK_IMPORTED_MODULE_2__.notification.open({
      message: 'Opp! Something went wrong.',
      description: 'This feature has been updated later!',
      duration: 500
    });
  }

  render() {
    const {
      currency
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ps-dropdown",
      children: [currency ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "/",
        onClick: e => e.preventDefault(),
        children: currency.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, this) : '', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "ps-dropdown-menu",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/",
            onClick: e => this.handleChangeCurrency(e, {
              symbol: '$',
              text: 'USD'
            }),
            children: "USD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/",
            onClick: e => this.handleChangeCurrency(e, {
              symbol: '€',
              text: 'EURO'
            }),
            children: "EURO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/",
            onClick: e => this.handleChangeCurrency(e, {
              symbol: '£',
              text: 'GBP'
            }),
            children: "GBP"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this);
  }

}

const mapStateToProps = state => {
  return state.setting;
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps)(CurrencyDropdown));

/***/ }),

/***/ "./components/shared/headers/modules/HeaderActions.jsx":
/*!*************************************************************!*\
  !*** ./components/shared/headers/modules/HeaderActions.jsx ***!
  \*************************************************************/
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
/* harmony import */ var _components_shared_headers_modules_MiniCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/headers/modules/MiniCart */ "./components/shared/headers/modules/MiniCart.jsx");
/* harmony import */ var _components_shared_headers_modules_AccountQuickLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/shared/headers/modules/AccountQuickLinks */ "./components/shared/headers/modules/AccountQuickLinks.jsx");

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\shared\\headers\\modules\\HeaderActions.jsx";






const HeaderActions = ({
  ecomerce,
  auth
}) => {
  const {
    compareItems,
    wishlistItems
  } = ecomerce; // views

  let headerAuthView;

  if (auth.isLoggedIn && Boolean(auth.isLoggedIn) === true) {
    headerAuthView = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_headers_modules_AccountQuickLinks__WEBPACK_IMPORTED_MODULE_5__.default, {
      isLoggedIn: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 26
    }, undefined);
  } else {
    headerAuthView = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_headers_modules_AccountQuickLinks__WEBPACK_IMPORTED_MODULE_5__.default, {
      isLoggedIn: false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 26
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "header__actions",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: "/account/compare",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "header__extra",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "icon-chart-bars"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            children: compareItems ? compareItems.length : 0
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: "/account/wishlist",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "header__extra",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "icon-heart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            children: wishlistItems ? wishlistItems.length : 0
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_headers_modules_MiniCart__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined), headerAuthView]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(state => state)(HeaderActions));

/***/ }),

/***/ "./components/shared/headers/modules/LanguageSwicher.jsx":
/*!***************************************************************!*\
  !*** ./components/shared/headers/modules/LanguageSwicher.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\shared\\headers\\modules\\LanguageSwicher.jsx";



class LanguageSwicher extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
  }

  handleFeatureWillUpdate(e) {
    e.preventDefault();
    antd__WEBPACK_IMPORTED_MODULE_2__.notification.open({
      message: 'Opp! Something went wrong.',
      description: 'This feature has been updated later!',
      duration: 500
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ps-dropdown language",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        onClick: this.handleFeatureWillUpdate.bind(this),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/static/img/flag/en.png",
          alt: "martfury"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this), "English"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "ps-dropdown-menu",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            onClick: this.handleFeatureWillUpdate.bind(this),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/static/img/flag/germany.png",
              alt: "martfury"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 29
            }, this), "Germany"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            onClick: this.handleFeatureWillUpdate.bind(this),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/static/img/flag/fr.png",
              alt: "martfury"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, this), "France"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LanguageSwicher);

/***/ }),

/***/ "./components/shared/headers/modules/MiniCart.jsx":
/*!********************************************************!*\
  !*** ./components/shared/headers/modules/MiniCart.jsx ***!
  \********************************************************/
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
/* harmony import */ var _components_elements_products_ProductOnCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/elements/products/ProductOnCart */ "./components/elements/products/ProductOnCart.jsx");
/* harmony import */ var _hooks_useEcomerce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/hooks/useEcomerce */ "./hooks/useEcomerce.js");
/* harmony import */ var _utilities_ecomerce_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/utilities/ecomerce-helpers */ "./utilities/ecomerce-helpers.js");

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\shared\\headers\\modules\\MiniCart.jsx";







const MiniCart = ({
  ecomerce
}) => {
  const {
    products,
    removeItem,
    removeItems,
    getProducts
  } = (0,_hooks_useEcomerce__WEBPACK_IMPORTED_MODULE_5__.default)();

  function handleRemoveItem(e, productId) {
    e.preventDefault();
    removeItem({
      id: productId
    }, ecomerce.cartItems, 'cart');
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getProducts(ecomerce.cartItems, 'cart');
  }, [ecomerce]);
  let cartItemsView;

  if (products && products.length > 0) {
    const amount = (0,_utilities_ecomerce_helpers__WEBPACK_IMPORTED_MODULE_6__.calculateAmount)(products);
    const productItems = products.map(item => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_products_ProductOnCart__WEBPACK_IMPORTED_MODULE_4__.default, {
        product: item,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "ps-product__remove",
          onClick: e => handleRemoveItem(e),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "icon-cross"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, undefined)
      }, item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, undefined);
    });
    cartItemsView = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ps-cart__content",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ps-cart__items",
        children: productItems
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ps-cart__footer",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: ["Sub Total:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: ["$", amount ? amount : 0]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("figure", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/account/shopping-cart",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "ps-btn",
              children: "View Cart"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/account/checkout",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "ps-btn",
              children: "Checkout"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined);
  } else {
    cartItemsView = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ps-cart__content",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ps-cart__items",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "No products in cart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "ps-cart--mini",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      className: "header__extra",
      href: "#",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: "icon-bag2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          children: products ? products.length : 0
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, undefined), cartItemsView]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(state => state)(MiniCart));

/***/ }),

/***/ "./components/shared/headers/modules/SearchHeader.jsx":
/*!************************************************************!*\
  !*** ./components/shared/headers/modules/SearchHeader.jsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/repositories/ProductRepository */ "./repositories/ProductRepository.js");
/* harmony import */ var _components_elements_products_ProductSearchResult__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/elements/products/ProductSearchResult */ "./components/elements/products/ProductSearchResult.jsx");

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\shared\\headers\\modules\\SearchHeader.jsx";






const exampleCategories = ['All', 'Babies & Moms', 'Books & Office', 'Cars & Motocycles', 'Clothing & Apparel', ' Accessories', 'Bags', 'Kid’s Fashion', 'Mens', 'Shoes', 'Sunglasses', 'Womens', 'Computers & Technologies', 'Desktop PC', 'Laptop', 'Smartphones', 'Consumer Electrics', 'Air Conditioners', 'Accessories', 'Type Hanging Cell', 'Audios & Theaters', 'Headphone', 'Home Theater System', 'Speakers', 'Car Electronics', 'Audio & Video', 'Car Security', 'Radar Detector', 'Vehicle GPS', 'Office Electronics', 'Printers', 'Projectors', 'Scanners', 'Store & Business', 'Refrigerators', 'TV Televisions', '4K Ultra HD TVs', 'LED TVs', 'OLED TVs', 'Washing Machines', 'Type Drying Clothes', 'Type Horizontal', 'Type Vertical', 'Garden & Kitchen', 'Cookware', 'Decoration', 'Furniture', 'Garden Tools', 'Home Improvement', 'Powers And Hand Tools', 'Utensil & Gadget', 'Health & Beauty', 'Equipments', 'Hair Care', 'Perfumer', 'Wine Cabinets'];

function useDebounce(value, delay) {
  const {
    0: debouncedValue,
    1: setDebouncedValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

const SearchHeader = () => {
  const inputEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    0: isSearch,
    1: setIsSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: keyword,
    1: setKeyword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: resultItems,
    1: setResultItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const debouncedSearchTerm = useDebounce(keyword, 300);

  function handleClearKeyword() {
    setKeyword('');
    setIsSearch(false);
    setLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    next_router__WEBPACK_IMPORTED_MODULE_3___default().push(`/search?keyword=${keyword}`);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (debouncedSearchTerm) {
      setLoading(true);

      if (keyword) {
        const queries = {
          _limit: 5,
          title_contains: keyword
        };
        const products = _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_5__.default.getRecords(queries);
        products.then(result => {
          setLoading(false);
          setResultItems(result);
          setIsSearch(true);
        });
      } else {
        setIsSearch(false);
        setKeyword('');
      }

      if (loading) {
        setIsSearch(false);
      }
    } else {
      setLoading(false);
      setIsSearch(false);
    }
  }, [debouncedSearchTerm]); // Views

  let productItemsView, clearTextView, selectOptionView, loadingView, loadMoreView;

  if (!loading) {
    if (resultItems && resultItems.length > 0) {
      if (resultItems.length > 5) {
        loadMoreView = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "ps-panel__footer text-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/search",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "See all results"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 21
        }, undefined);
      }

      productItemsView = resultItems.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_products_ProductSearchResult__WEBPACK_IMPORTED_MODULE_6__.default, {
        product: product
      }, product.id, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }, undefined));
    } else {
      productItemsView = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "No product found."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 32
      }, undefined);
    }

    if (keyword !== '') {
      clearTextView = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "ps-form__action",
        onClick: handleClearKeyword,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "icon icon-cross2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }, undefined);
    }
  } else {
    loadingView = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: "ps-form__action",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Spin, {
        size: "small"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }, undefined);
  }

  selectOptionView = exampleCategories.map(option => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
    value: option,
    children: option
  }, option, false, {
    fileName: _jsxFileName,
    lineNumber: 168,
    columnNumber: 9
  }, undefined));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    className: "ps-form--quick-search",
    method: "get",
    action: "/",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ps-form__categories",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
        className: "form-control",
        children: selectOptionView
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ps-form__input",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        ref: inputEl,
        className: "form-control",
        type: "text",
        value: keyword,
        placeholder: "I'm shopping for...",
        onChange: e => setKeyword(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 17
      }, undefined), clearTextView, loadingView]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: handleSubmit,
      children: "Search"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `ps-panel--search-result${isSearch ? ' active ' : ''}`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ps-panel__content",
        children: productItemsView
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 17
      }, undefined), loadMoreView]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 174,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SearchHeader);

/***/ }),

/***/ "./components/shared/menus/MenuCategoriesDropdown.js":
/*!***********************************************************!*\
  !*** ./components/shared/menus/MenuCategoriesDropdown.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_data_menu_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/public/static/data/menu.json */ "./public/static/data/menu.json");
/* harmony import */ var _components_elements_menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/elements/menu/Menu */ "./components/elements/menu/Menu.jsx");

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\shared\\menus\\MenuCategoriesDropdown.js";




const MenuCategoriesDropdown = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "menu--product-categories",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "menu__toggle",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: "icon-menu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Shop by Department"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "menu__content",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_menu_Menu__WEBPACK_IMPORTED_MODULE_3__.default, {
        source: _public_static_data_menu_json__WEBPACK_IMPORTED_MODULE_2__.product_categories,
        className: "menu--dropdown"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MenuCategoriesDropdown);

/***/ }),

/***/ "./components/shared/navigation/NavigationDefault.jsx":
/*!************************************************************!*\
  !*** ./components/shared/navigation/NavigationDefault.jsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elements_menu_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/menu/Menu */ "./components/elements/menu/Menu.jsx");
/* harmony import */ var _public_static_data_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/static/data/menu */ "./public/static/data/menu.json");
/* harmony import */ var _headers_modules_CurrencyDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../headers/modules/CurrencyDropdown */ "./components/shared/headers/modules/CurrencyDropdown.jsx");
/* harmony import */ var _headers_modules_LanguageSwicher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../headers/modules/LanguageSwicher */ "./components/shared/headers/modules/LanguageSwicher.jsx");
/* harmony import */ var _components_shared_menus_MenuCategoriesDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/shared/menus/MenuCategoriesDropdown */ "./components/shared/menus/MenuCategoriesDropdown.js");

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\components\\shared\\navigation\\NavigationDefault.jsx";









class NavigationDefault extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
  }

  handleFeatureWillUpdate(e) {
    e.preventDefault();
    antd__WEBPACK_IMPORTED_MODULE_3__.notification.open({
      message: 'Opp! Something went wrong.',
      description: 'This feature has been updated later!',
      duration: 500
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "navigation",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ps-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "navigation__left",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_menus_MenuCategoriesDropdown__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "navigation__right",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_menu_Menu__WEBPACK_IMPORTED_MODULE_4__.default, {
            source: _public_static_data_menu__WEBPACK_IMPORTED_MODULE_5__.menuPrimary.menu_1,
            className: "menu"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "navigation__extra",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/vendor/become-a-vendor",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: "Sell on Martfury"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/account/order-tracking",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: "Tract your order"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headers_modules_CurrencyDropdown__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headers_modules_LanguageSwicher__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavigationDefault);

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

/***/ "./pages/404.jsx":
/*!***********************!*\
  !*** ./pages/404.jsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_shared_footers_FooterDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shared/footers/FooterDefault */ "./components/shared/footers/FooterDefault.jsx");
/* harmony import */ var _components_shared_headers_HeaderDefault__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shared/headers/HeaderDefault */ "./components/shared/headers/HeaderDefault.jsx");

var _jsxFileName = "C:\\Users\\ar-se\\OneDrive\\Escritorio\\martfury\\pages\\404.jsx";





function Error({
  statusCode
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "site-content",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_headers_HeaderDefault__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ps-page--404",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "ps-section__content",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("figure", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/static/img/404.jpg",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Ohh! Page not found"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: ["It seems we can't find what you're looking for.", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 33
              }, this), "Go back to", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: " Homepage"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_footers_FooterDefault__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Error);

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

/***/ "./utilities/common-helpers.js":
/*!*************************************!*\
  !*** ./utilities/common-helpers.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stickyHeader": function() { return /* binding */ stickyHeader; },
/* harmony export */   "generateTempArray": function() { return /* binding */ generateTempArray; }
/* harmony export */ });
const stickyHeader = () => {
  let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const header = document.getElementById('headerSticky');

  if (header !== null) {
    if (number >= 300) {
      header.classList.add('header--sticky');
    } else {
      header.classList.remove('header--sticky');
    }
  }
};
const generateTempArray = maxItems => {
  let result = [];

  for (let i = 0; i < maxItems; i++) {
    result.push(i);
  }

  return result;
};

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
var __webpack_exports__ = (__webpack_exec__("./pages/404.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL2NvbXBvbmVudHMvZWxlbWVudHMvUmF0aW5nLmpzeCIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL2NvbXBvbmVudHMvZWxlbWVudHMvY29tbW9uL0xvZ28uanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9jb21wb25lbnRzL2VsZW1lbnRzL21lbnUvTWVnYU1lbnUuanN4Iiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vY29tcG9uZW50cy9lbGVtZW50cy9tZW51L01lbnUuanN4Iiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vY29tcG9uZW50cy9lbGVtZW50cy9tZW51L01lbnVEcm9wZG93bi5qc3giLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9jb21wb25lbnRzL2VsZW1lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RPbkNhcnQuanN4Iiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vY29tcG9uZW50cy9lbGVtZW50cy9wcm9kdWN0cy9Qcm9kdWN0U2VhcmNoUmVzdWx0LmpzeCIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3RlcnMvRm9vdGVyRGVmYXVsdC5qc3giLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9jb21wb25lbnRzL3NoYXJlZC9mb290ZXJzL21vZHVsZXMvRm9vdGVyQ29weXJpZ2h0LmpzeCIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3RlcnMvbW9kdWxlcy9Gb290ZXJMaW5rcy5qc3giLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9jb21wb25lbnRzL3NoYXJlZC9mb290ZXJzL21vZHVsZXMvRm9vdGVyV2lkZ2V0cy5qc3giLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXJzL0hlYWRlckRlZmF1bHQuanN4Iiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vY29tcG9uZW50cy9zaGFyZWQvaGVhZGVycy9tb2R1bGVzL0FjY291bnRRdWlja0xpbmtzLmpzeCIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlcnMvbW9kdWxlcy9DdXJyZW5jeURyb3Bkb3duLmpzeCIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlcnMvbW9kdWxlcy9IZWFkZXJBY3Rpb25zLmpzeCIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlcnMvbW9kdWxlcy9MYW5ndWFnZVN3aWNoZXIuanN4Iiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vY29tcG9uZW50cy9zaGFyZWQvaGVhZGVycy9tb2R1bGVzL01pbmlDYXJ0LmpzeCIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlcnMvbW9kdWxlcy9TZWFyY2hIZWFkZXIuanN4Iiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vY29tcG9uZW50cy9zaGFyZWQvbWVudXMvTWVudUNhdGVnb3JpZXNEcm9wZG93bi5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL2NvbXBvbmVudHMvc2hhcmVkL25hdmlnYXRpb24vTmF2aWdhdGlvbkRlZmF1bHQuanN4Iiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vaG9va3MvdXNlRWNvbWVyY2UuanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9ob29rcy91c2VQcm9kdWN0LmpzIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9wYWdlcy80MDQuanN4Iiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vcmVwb3NpdG9yaWVzL1Byb2R1Y3RSZXBvc2l0b3J5LmpzIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vcmVwb3NpdG9yaWVzL1JlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9zdG9yZS9hdXRoL2FjdGlvbi5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL3N0b3JlL2Vjb21lcmNlL2FjdGlvbi5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL3N0b3JlL3NldHRpbmcvYWN0aW9uLmpzIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vdXRpbGl0aWVzL2NvbW1vbi1oZWxwZXJzLmpzIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vdXRpbGl0aWVzL2Vjb21lcmNlLWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi91dGlsaXRpZXMvcHJvZHVjdC1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0L2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC9leHRlcm5hbCBcInJlYWN0LWNvb2tpZVwiIiwid2VicGFjazovL21hcnRmdXJ5X3JlYWN0L2V4dGVybmFsIFwicmVhY3QtbGF6eWxvYWRcIiIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vbWFydGZ1cnlfcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9tYXJ0ZnVyeV9yZWFjdC9pZ25vcmVkfEM6XFxVc2Vyc1xcYXItc2VcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxtYXJ0ZnVyeVxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIlJhdGluZyIsIkxvZ28iLCJ0eXBlIiwiZGF0YSIsInVybCIsImltZyIsIk1lZ2FNZW51Iiwic291cmNlIiwibWVnYUNvbnRlbnRWaWV3IiwibWVnYUNvbnRlbnQiLCJtYXAiLCJpdGVtIiwiaGVhZGluZyIsIm1lZ2FJdGVtcyIsInN1Ykl0ZW0iLCJ0ZXh0IiwiaWNvbiIsIk1lbnUiLCJjbGFzc05hbWUiLCJtZW51VmlldyIsInN1Yk1lbnUiLCJlIiwicHJldmVudERlZmF1bHQiLCJNZW51RHJvcGRvd24iLCJzdWJDbGFzcyIsInN1Yk1lbnVJdGVtIiwiaW5kZXgiLCJQcm9kdWN0T25DYXJ0IiwicHJvZHVjdCIsImNoaWxkcmVuIiwidGh1bWJuYWlsSW1hZ2UiLCJ0aXRsZSIsInVzZVByb2R1Y3QiLCJpZCIsInByaWNlIiwicXVhbnRpdHkiLCJQcm9kdWN0U2VhcmNoUmVzdWx0IiwicmF0aW5nQ291bnQiLCJGb290ZXJEZWZhdWx0IiwiRm9vdGVyQ29weXJpZ2h0IiwiTGlua3MiLCJjb25zdW1lckVsZWN0cmljIiwiY2xvdGhpbmdBbmRBcHBhcmVsIiwiZ2FyZGVuQW5kS2l0Y2hlbiIsImhlYWx0aEFuZEJlYXV0eSIsImpld2VscnlBbmRXYXRjaCIsImNvbXB1dGVyQW5kVGVjaG5vbG9neSIsIkZvb3RlckxpbmtzIiwiRm9vdGVyV2lkZ2V0cyIsIkhlYWRlckRlZmF1bHQiLCJ1c2VFZmZlY3QiLCJBY2NvdW50UXVpY2tMaW5rcyIsInByb3BzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImhhbmRsZUxvZ291dCIsImxvZ091dCIsImFjY291bnRMaW5rcyIsImlzTG9nZ2VkSW4iLCJsaW5rc1ZpZXciLCJjb25uZWN0Iiwic3RhdGUiLCJDdXJyZW5jeURyb3Bkb3duIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJjdXJyZW5jeSIsImNoYW5nZUN1cnJlbmN5IiwiaGFuZGxlRmVhdHVyZVdpbGxVcGRhdGUiLCJub3RpZmljYXRpb24iLCJtZXNzYWdlIiwiZGVzY3JpcHRpb24iLCJkdXJhdGlvbiIsInJlbmRlciIsImhhbmRsZUNoYW5nZUN1cnJlbmN5Iiwic3ltYm9sIiwibWFwU3RhdGVUb1Byb3BzIiwic2V0dGluZyIsIkhlYWRlckFjdGlvbnMiLCJlY29tZXJjZSIsImF1dGgiLCJjb21wYXJlSXRlbXMiLCJ3aXNobGlzdEl0ZW1zIiwiaGVhZGVyQXV0aFZpZXciLCJCb29sZWFuIiwibGVuZ3RoIiwiTGFuZ3VhZ2VTd2ljaGVyIiwiYmluZCIsIk1pbmlDYXJ0IiwicHJvZHVjdHMiLCJyZW1vdmVJdGVtIiwicmVtb3ZlSXRlbXMiLCJnZXRQcm9kdWN0cyIsInVzZUVjb21lcmNlIiwiaGFuZGxlUmVtb3ZlSXRlbSIsInByb2R1Y3RJZCIsImNhcnRJdGVtcyIsImNhcnRJdGVtc1ZpZXciLCJhbW91bnQiLCJjYWxjdWxhdGVBbW91bnQiLCJwcm9kdWN0SXRlbXMiLCJleGFtcGxlQ2F0ZWdvcmllcyIsInVzZURlYm91bmNlIiwidmFsdWUiLCJkZWxheSIsImRlYm91bmNlZFZhbHVlIiwic2V0RGVib3VuY2VkVmFsdWUiLCJ1c2VTdGF0ZSIsImhhbmRsZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiU2VhcmNoSGVhZGVyIiwiaW5wdXRFbCIsInVzZVJlZiIsImlzU2VhcmNoIiwic2V0SXNTZWFyY2giLCJrZXl3b3JkIiwic2V0S2V5d29yZCIsInJlc3VsdEl0ZW1zIiwic2V0UmVzdWx0SXRlbXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRlYm91bmNlZFNlYXJjaFRlcm0iLCJoYW5kbGVDbGVhcktleXdvcmQiLCJoYW5kbGVTdWJtaXQiLCJSb3V0ZXIiLCJxdWVyaWVzIiwiX2xpbWl0IiwidGl0bGVfY29udGFpbnMiLCJQcm9kdWN0UmVwb3NpdG9yeSIsInRoZW4iLCJyZXN1bHQiLCJwcm9kdWN0SXRlbXNWaWV3IiwiY2xlYXJUZXh0VmlldyIsInNlbGVjdE9wdGlvblZpZXciLCJsb2FkaW5nVmlldyIsImxvYWRNb3JlVmlldyIsIm9wdGlvbiIsInRhcmdldCIsIk1lbnVDYXRlZ29yaWVzRHJvcGRvd24iLCJtZW51RGF0YSIsIk5hdmlnYXRpb25EZWZhdWx0IiwiY2FydEl0ZW1zT25Db29raWUiLCJjb29raWVzIiwic2V0Q29va2llIiwidXNlQ29va2llcyIsInNldFByb2R1Y3RzIiwicGF5bG9hZCIsImdyb3VwIiwiZm9yRWFjaCIsInJlc3BvbnNlRGF0YSIsImV4aXN0SXRlbSIsImZpbmQiLCJ2YWwiLCJpbmNyZWFzZVF0eSIsImN1cnJlbnRDYXJ0IiwiY2FydCIsInBhdGgiLCJzZXRDYXJ0SXRlbXMiLCJkZWNyZWFzZVF0eSIsImFkZEl0ZW0iLCJuZXdJdGVtIiwiaXRlbXMiLCJuZXdJdGVtcyIsInB1c2giLCJzZXRXaXNobGlzdFR0ZW1zIiwic2V0Q29tcGFyZUl0ZW1zIiwic2VsZWN0ZWRJdGVtIiwiY3VycmVudEl0ZW1zIiwiZmluZEluZGV4Iiwic3BsaWNlIiwiZ2V0SW1hZ2VVUkwiLCJzaXplIiwiaW1hZ2UiLCJpbWFnZVVSTCIsImZvcm1hdHMiLCJsYXJnZSIsIm1lZGl1bSIsInRodW1ibmFpbCIsInNtYWxsIiwidW5kZWZpbmVkIiwiYmFzZVVybCIsInZpZXciLCJzYWxlX3ByaWNlIiwiZm9ybWF0Q3VycmVuY3kiLCJiYWRnZXMiLCJiYWRnZSIsImRpc2NvdW50UGVyY2VudCIsInRvRml4ZWQiLCJicmFuZCIsImJyYW5kcyIsIm5hbWUiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX3JlYWN0IiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiX3VzZUludGVyc2VjdGlvbiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsImhyZWYiLCJhcyIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY2F0Y2giLCJlcnIiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsImluZGV4T2YiLCJMaW5rIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0Iiwia2V5cyIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiZGVmYXVsdCIsImN1cnJlbnQiLCJjb25zb2xlIiwid2FybiIsInAiLCJ1c2VSb3V0ZXIiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsImVuZHNXaXRoIiwic2xpY2UiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsIndpbmRvdyIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiX3VudXNlZCIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJvbmxvYWQiLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImRlZmluZVByb3BlcnR5IiwiYXBwZW5kU2NyaXB0Iiwic3JjIiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJmaWx0ZXIiLCJ2IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwidGVzdCIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJwYXRobmFtZSIsImRldGVjdGVkTG9jYWxlIiwicGF0aG5hbWVQYXJ0cyIsInNwbGl0Iiwic29tZSIsInRvTG93ZXJDYXNlIiwiam9pbiIsIm1pdHQiLCJjcmVhdGUiLCJvZmYiLCJlbWl0IiwiZXZ0cyIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4Iiwib2JqIiwiX19lc01vZHVsZSIsImRldGVjdERvbWFpbkxvY2FsZSIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiX3BhdGhuYW1lIiwiX3F1ZXJ5IiwiX2FzIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3IiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFyc2VSZWxhdGl2ZVVybCIsImNoYW5nZSIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcCIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcDIiLCJfb3B0aW9ucyRzY3JvbGwiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsIngiLCJ5IiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsImhvc3RuYW1lIiwicHJvdG9jb2wiLCJob3N0IiwicG9ydCIsIlN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsIl9mb3JtYXRVcmwiLCJ1c2VkIiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9BcHAkcHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsIlNQIiwibWVhc3VyZSIsImdldFJlY29yZHMiLCJyZXBvbnNlIiwiUmVwb3NpdG9yeSIsInNlcmlhbGl6ZVF1ZXJ5IiwicmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5IiwibG9nIiwiZ2V0QnJhbmRzIiwiZ2V0UHJvZHVjdENhdGVnb3JpZXMiLCJnZXRUb3RhbFJlY29yZHMiLCJnZXRQcm9kdWN0c0J5SWQiLCJnZXRQcm9kdWN0c0J5Q2F0ZWdvcnkiLCJnZXRQcm9kdWN0c0J5QnJhbmQiLCJnZXRQcm9kdWN0c0J5QnJhbmRzIiwiZ2V0UHJvZHVjdHNCeVByaWNlUmFuZ2UiLCJnZXRQcm9kdWN0c0J5SWRzIiwiZW5kUG9pbnQiLCJiYXNlRG9tYWluIiwiYmFzZVBvc3RVcmwiLCJiYXNlU3RvcmVVUkwiLCJjdXN0b21IZWFkZXJzIiwiQWNjZXB0IiwiYXhpb3MiLCJoZWFkZXJzIiwiYWN0aW9uVHlwZXMiLCJMT0dJTl9SRVFVRVNUIiwiTE9HSU5fU1VDQ0VTUyIsIkxPR09VVCIsIkxPR09VVF9TVUNDRVNTIiwiQ0hFQ0tfQVVUSE9SSVpBVElPTiIsImxvZ2luIiwibG9naW5TdWNjZXNzIiwibG9nT3V0U3VjY2VzcyIsIlNFVF9XSVNITElTVF9JVEVNUyIsIlNFVF9XSVNITElTVF9JVEVNU19TVUNDRVNTIiwiU0VUX0NBUlRfSVRFTVMiLCJTRVRfQ0FSVF9JVEVNU19TVUNDRVNTIiwiU0VUX0NPTVBBUkVfSVRFTVMiLCJTRVRfQ09NUEFSRV9JVEVNU19TVUNDRVNTIiwic2V0V2lzaGxpc3RUdGVtc1N1Y2Nlc3MiLCJzZXRDYXJ0SXRlbXNTdWNjZXNzIiwic2V0Q29tcGFyZUl0ZW1zU3VjY2VzcyIsIkNIQU5HRV9DVVJSRU5DWSIsIkNIQU5HRV9DVVJSRU5DWV9TVUNDRVNTIiwiY2hhbmdlQ3VycmVuY3lTdWNjZXNzIiwic3RpY2t5SGVhZGVyIiwibnVtYmVyIiwicGFnZVhPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJoZWFkZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJnZW5lcmF0ZVRlbXBBcnJheSIsIm1heEl0ZW1zIiwiZ2V0Q2FydEl0ZW1zRnJvbUNvb2tpZXMiLCJwYXJzZSIsInVwZGF0ZUNhcnRUb0Nvb2tpZXMiLCJleHBpcmVzIiwiYWRkSXRlbVRvQ2FydEhlbHBlciIsImNvb2tpZUNhcnQiLCJpbmNyZWFzZVF0eUNhcnRJdGVtSGVscGVyIiwiZGVjcmVhc2VRdHlDYXJ0SXRlbUhlbHBlciIsInJlbW92ZUNhcnRJdGVtSGVscGVyIiwidmFsdWVzIiwicmVkdWNlIiwiYWNjIiwiY2FsY3VsYXRlQ2FydFF1YW50aXR5IiwiY2FjdWxhdGVBcnJheVF1YW50aXR5IiwibnVtIiwicGFyc2VGbG9hdCIsInRvU3RyaW5nIiwiZ2V0Q29sbGV0aW9uQnlTbHVnIiwiY29sbGVjdGlvbnMiLCJzbHVnIiwiZ2V0SXRlbUJ5U2x1ZyIsImJhbm5lcnMiLCJiYW5uZXIiLCJjb252ZXJ0U2x1Z3NRdWVyeVN0cmluZyIsIlN0cmFwaVByb2R1Y3RQcmljZUV4cGFuZGVkIiwiaXNfc2FsZSIsIlN0cmFwaVByb2R1Y3RUaHVtYm5haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLG1CQUNYO0FBQU0sV0FBUyxFQUFDLFdBQWhCO0FBQUEsMEJBQ0k7QUFBRyxhQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFHLGFBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQUcsYUFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKLGVBSUk7QUFBRyxhQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFLSTtBQUFHLGFBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjs7QUFVQSwrREFBZUEsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7O0FBRUEsTUFBTUMsSUFBSSxH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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixZQUFZO0FBQ1osY0FBYztBQUNkLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQix3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QixpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixjQUFjO0FBQ2QsY0FBYztBQUNkLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUIsY0FBYztBQUNkLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDak9hOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELEVBQUUsa0pBQXlEO0FBQzNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy80MDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBSYXRpbmcgPSAoKSA9PiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwicHMtcmF0aW5nXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIj48L2k+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIj48L2k+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIj48L2k+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXJcIj48L2k+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXN0YXItb1wiPjwvaT5cbiAgICA8L3NwYW4+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSYXRpbmc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IExvZ28gPSAoeyB0eXBlIH0pID0+IHtcbiAgICBsZXQgZGF0YTtcbiAgICBpZiAodHlwZSA9PT0gJ2F1dG9wYXJ0Jykge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgdXJsOiAnL2hvbWUvYXV0b3BhcnQnLFxuICAgICAgICAgICAgaW1nOiAnaW1nL2xvZ28tYXV0b3BhcnQucG5nJyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3RlY2hub2xvZ3knKSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICB1cmw6ICcvaG9tZS90ZWNobm9sb2d5JyxcbiAgICAgICAgICAgIGltZzogJ3N0YXRpYy9pbWcvbG9nby10ZWNobm9sb2d5LnBuZycsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd0ZWNobm9sb2d5Jykge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgdXJsOiAnL2hvbWUvdGVjaG5vbG9neScsXG4gICAgICAgICAgICBpbWc6ICdzdGF0aWMvaW1nL2xvZ28tdGVjaG5vbG9neS5wbmcnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnZWxlY3Ryb25pYycpIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHVybDogJy9ob21lL2VsZWN0cm9uaWMnLFxuICAgICAgICAgICAgaW1nOiAnc3RhdGljL2ltZy9sb2dvLWVsZWN0cm9uaWMucG5nJyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2Z1cm5pdHVyZScpIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHVybDogJy9ob21lL2Z1cm5pdHVyZScsXG4gICAgICAgICAgICBpbWc6ICdzdGF0aWMvaW1nL2xvZ28tZnVybml0dXJlLnBuZycsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdvcmdhbmljJykge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgdXJsOiAnL2hvbWUvb3JnYW5pYycsXG4gICAgICAgICAgICBpbWc6ICdzdGF0aWMvaW1nL2xvZ28tb3JnYW5pYy5wbmcnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgICAgaW1nOiAnL3N0YXRpYy9pbWcvbG9nb19saWdodC5wbmcnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPXtkYXRhLnVybH0+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcy1sb2dvXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuaW1nfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ287XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgTWVnYU1lbnUgPSAoeyBzb3VyY2UgfSkgPT4ge1xuICAgIGxldCBtZWdhQ29udGVudFZpZXc7XG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBtZWdhQ29udGVudFZpZXcgPSBzb3VyY2UubWVnYUNvbnRlbnQubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZ2EtbWVudV9fY29sdW1uXCIga2V5PXtpdGVtLmhlYWRpbmd9PlxuICAgICAgICAgICAgICAgIDxoND57aXRlbS5oZWFkaW5nfTwvaDQ+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2EtbWVudV9fbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5tZWdhSXRlbXMubWFwKChzdWJJdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtzdWJJdGVtLnRleHR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3N1Ykl0ZW0udXJsfSBhcz17c3ViSXRlbS51cmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57c3ViSXRlbS50ZXh0fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudS1pdGVtLWhhcy1jaGlsZHJlbiBoYXMtbWVnYS1tZW51XCI+XG4gICAgICAgICAgICA8TGluayBocmVmPXtzb3VyY2UudXJsICE9PSAnJyA/IHNvdXJjZS51cmwgOiAnLyd9PlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICB7c291cmNlLmljb24gJiYgPGkgY2xhc3NOYW1lPXtzb3VyY2UuaWNvbn0+PC9pPn1cbiAgICAgICAgICAgICAgICAgICAge3NvdXJjZS50ZXh0fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVnYS1tZW51XCI+e21lZ2FDb250ZW50Vmlld308L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVnYU1lbnU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBNZW51RHJvcGRvd24gZnJvbSAnfi9jb21wb25lbnRzL2VsZW1lbnRzL21lbnUvTWVudURyb3Bkb3duJztcbmltcG9ydCBNZWdhTWVudSBmcm9tICd+L2NvbXBvbmVudHMvZWxlbWVudHMvbWVudS9NZWdhTWVudSc7XG5cbmNvbnN0IE1lbnUgPSAoeyBzb3VyY2UsIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgLy8gVmlld3NcbiAgICBsZXQgbWVudVZpZXc7XG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBtZW51VmlldyA9IHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnN1Yk1lbnUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPE1lbnVEcm9wZG93biBzb3VyY2U9e2l0ZW19IGtleT17aXRlbS50ZXh0fSAvPjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5tZWdhQ29udGVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8TWVnYU1lbnUgc291cmNlPXtpdGVtfSBrZXk9e2l0ZW0udGV4dH0gLz47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0udGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLnVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmljb24gJiYgPGkgY2xhc3NOYW1lPXtpdGVtLmljb259PjwvaT59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbnVWaWV3ID0gKFxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XG4gICAgICAgICAgICAgICAgICAgIE5vIG1lbnUgaXRlbS5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gPHVsIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57bWVudVZpZXd9PC91bD47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IE1lbnVEcm9wZG93biA9ICh7IHNvdXJjZSB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gZHJvcGRvd25cIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtzb3VyY2UudXJsfT5cbiAgICAgICAgICAgICAgICAgICAgPGE+e3NvdXJjZS50ZXh0fTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7c291cmNlLnN1Yk1lbnUgJiYgKFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3NvdXJjZS5zdWJDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIHtzb3VyY2Uuc3ViTWVudS5tYXAoKHN1Yk1lbnVJdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVEcm9wZG93biBzb3VyY2U9e3N1Yk1lbnVJdGVtfSBrZXk9e2luZGV4fSAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9saT5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudURyb3Bkb3duO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgdXNlUHJvZHVjdCBmcm9tICd+L2hvb2tzL3VzZVByb2R1Y3QnO1xuXG5jb25zdCBQcm9kdWN0T25DYXJ0ID0gKHsgcHJvZHVjdCwgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IHsgdGh1bWJuYWlsSW1hZ2UsIHRpdGxlIH0gPSB1c2VQcm9kdWN0KCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXByb2R1Y3QtLWNhcnQtbW9iaWxlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX3RodW1ibmFpbFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdC9bcGlkXVwiIGFzPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YT57dGh1bWJuYWlsSW1hZ2UocHJvZHVjdCl9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAge3RpdGxlKHByb2R1Y3QpfVxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3Byb2R1Y3QucHJpY2V9IHgge3Byb2R1Y3QucXVhbnRpdHl9XG4gICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPC9wPnsnICd9XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0T25DYXJ0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmF0aW5nIGZyb20gJ34vY29tcG9uZW50cy9lbGVtZW50cy9SYXRpbmcnO1xuaW1wb3J0IHVzZVByb2R1Y3QgZnJvbSAnfi9ob29rcy91c2VQcm9kdWN0JztcblxuY29uc3QgUHJvZHVjdFNlYXJjaFJlc3VsdCA9ICh7IHByb2R1Y3QgfSkgPT4ge1xuICAgIGNvbnN0IHsgdGh1bWJuYWlsSW1hZ2UsIHByaWNlLCB0aXRsZSB9ID0gdXNlUHJvZHVjdCgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wcm9kdWN0IHBzLXByb2R1Y3QtLXdpZGUgcHMtcHJvZHVjdC0tc2VhcmNoLXJlc3VsdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X190aHVtYm5haWxcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3QvW3BpZF1cIiBhcz17YC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGE+e3RodW1ibmFpbEltYWdlKHByb2R1Y3QpfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgIHt0aXRsZShwcm9kdWN0KX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX3JhdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8UmF0aW5nIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9kdWN0LnJhdGluZ0NvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7cHJpY2UocHJvZHVjdCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0U2VhcmNoUmVzdWx0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb290ZXJXaWRnZXRzIGZyb20gJy4vbW9kdWxlcy9Gb290ZXJXaWRnZXRzJztcbmltcG9ydCBGb290ZXJMaW5rcyBmcm9tICcuL21vZHVsZXMvRm9vdGVyTGlua3MnO1xuaW1wb3J0IEZvb3RlckNvcHlyaWdodCBmcm9tICcuL21vZHVsZXMvRm9vdGVyQ29weXJpZ2h0JztcblxuY29uc3QgRm9vdGVyRGVmYXVsdCA9ICgpID0+IChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInBzLWZvb3RlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPEZvb3RlcldpZGdldHMgLz5cbiAgICAgICAgICAgIDxGb290ZXJMaW5rcyAvPlxuICAgICAgICAgICAgPEZvb3RlckNvcHlyaWdodCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlckRlZmF1bHQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBGb290ZXJDb3B5cmlnaHQgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcy1mb290ZXJfX2NvcHlyaWdodFwiPlxuICAgICAgICA8cD4mY29weTsgIDIwMjEgTWFydGZ1cnkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQ8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPHNwYW4+V2UgVXNpbmcgU2FmZSBQYXltZW50IEZvcjo8L3NwYW4+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvcGF5bWVudC1tZXRob2QvMS5qcGdcIiBhbHQ9XCJNYXJ0ZnVyeVwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvcGF5bWVudC1tZXRob2QvMi5qcGdcIiBhbHQ9XCJNYXJ0ZnVyeVwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvcGF5bWVudC1tZXRob2QvMy5qcGdcIiBhbHQ9XCJNYXJ0ZnVyeVwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvcGF5bWVudC1tZXRob2QvNC5qcGdcIiBhbHQ9XCJNYXJ0ZnVyeVwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvcGF5bWVudC1tZXRob2QvNS5qcGdcIiBhbHQ9XCJNYXJ0ZnVyeVwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlckNvcHlyaWdodDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuY29uc3QgTGlua3MgPSB7XG4gICAgY29uc3VtZXJFbGVjdHJpYzogW1xuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnQWlyIENvbmRpdGlvbmVycycsXG4gICAgICAgICAgICB1cmw6ICcvc2hvcCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdBdWRpb3MgJiBUaGVhdGVycycsXG4gICAgICAgICAgICB1cmw6ICcvc2hvcCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdDYXIgRWxlY3Ryb25pY3MnLFxuICAgICAgICAgICAgdXJsOiAnL3Nob3AnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnT2ZmaWNlIEVsZWN0cm9uaWNzJyxcbiAgICAgICAgICAgIHVybDogJy9zaG9wJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1RWIFRlbGV2aXNpb25zJyxcbiAgICAgICAgICAgIHVybDogJy9zaG9wJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1dhc2hpbmcgTWFjaGluZXMnLFxuICAgICAgICAgICAgdXJsOiAnL3Nob3AnLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgY2xvdGhpbmdBbmRBcHBhcmVsOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdQcmludGVycycsXG4gICAgICAgICAgICB1cmw6ICcvc2hvcCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdQcm9qZWN0b3JzJyxcbiAgICAgICAgICAgIHVybDogJy9zaG9wJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1NjYW5uZXJzJyxcbiAgICAgICAgICAgIHVybDogJy9zaG9wJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1N0b3JlICYgQnVzaW5lc3MnLFxuICAgICAgICAgICAgdXJsOiAnL3Nob3AnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnNEsgVWx0cmEgSEQgVFZzJyxcbiAgICAgICAgICAgIHVybDogJy9zaG9wJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0xFRCBUVnMnLFxuICAgICAgICAgICAgdXJsOiAnL3Nob3AnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnT0xFRCBUVnMnLFxuICAgICAgICAgICAgdXJsOiAnL3Nob3AnLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgZ2FyZGVuQW5kS2l0Y2hlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnQ29va3dhcmUnLFxuICAgICAgICAgICAgdXJsOiAnL3Nob3AnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnRGVjb3JhdGlvbicsXG4gICAgICAgICAgICB1cmw6ICcvc2hvcCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdGdXJuaXR1cmUnLFxuICAgICAgICAgICAgdXJsOiAnL3Nob3AnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnR2FyZGVuIFRvb2xzJyxcbiAgICAgICAgICAgIHVybDogJy9zaG9wJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0dhcmRlbiBFcXVpcG1lbnRzJyxcbiAgICAgICAgICAgIHVybDogJy9zaG9wJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1Bvd2VycyBBbmQgSGFuZCBUb29scycsXG4gICAgICAgICAgICB1cmw6ICcvc2hvcCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdVdGVuc2lsICYgR2FkZ2V0JyxcbiAgICAgICAgICAgIHVybDogJy9zaG9wJyxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIGhlYWx0aEFuZEJlYXV0eTogW1xuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnSGFpciBDYXJlJyxcbiAgICAgICAgICAgIHVybDogJy9zaG9wJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0RlY29yYXRpb24nLFxuICAgICAgICAgICAgdXJsOiAnL3Nob3AnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnTWFrZXVwJyxcbiAgICAgICAgICAgIHVybDogJy9zaG9wJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0JvZHkgU2hvd2VyJyxcbiAgICAgICAgICAgIHVybDogJy9zaG9wJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1NraW4gQ2FyZScsXG4gICAgICAgICAgICB1cmw6ICcvc2hvcCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdDb2xvZ2luZScsXG4gICAgICAgICAgICB1cmw6ICcvc2hvcCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdQZXJmdW1lJyxcbiAgICAgICAgICAgIHVybDogJy9zaG9wJyxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIGpld2VscnlBbmRXYXRjaDogW1xuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnTmVja2xhY2UnLFxuICAgICAgICAgICAgdXJsOiAnL3Nob3AnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnUGVuZGFudCcsXG4gICAgICAgICAgICB1cmw6ICcvc2hvcCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdEaWFtb25kIFJpbmcnLFxuICAgICAgICAgICAgdXJsOiAnL3Nob3AnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnU2xpdmVyIEVhcmluZycsXG4gICAgICAgICAgICB1cmw6ICcvc2hvcCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdMZWF0aGVyIFdhdGNoZXInLFxuICAgICAgICAgICAgdXJsOiAnL3Nob3AnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnR3VjY2knLFxuICAgICAgICAgICAgdXJsOiAnL3Nob3AnLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgY29tcHV0ZXJBbmRUZWNobm9sb2d5OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdEZXNrdG9wIFBDJyxcbiAgICAgICAgICAgIHVybDogJy9zaG9wJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0xhcHRvcCcsXG4gICAgICAgICAgICB1cmw6ICcvc2hvcCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdTbWFydHBob25lcycsXG4gICAgICAgICAgICB1cmw6ICcvc2hvcCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdUYWJsZXQnLFxuICAgICAgICAgICAgdXJsOiAnL3Nob3AnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnR2FtZSBDb250cm9sbGVyJyxcbiAgICAgICAgICAgIHVybDogJy9zaG9wJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0F1ZGlvICYgVmlkZW8nLFxuICAgICAgICAgICAgdXJsOiAnL3Nob3AnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnV2lyZWxlc3MgU3BlYWtlcicsXG4gICAgICAgICAgICB1cmw6ICcvc2hvcCcsXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5cbmNvbnN0IEZvb3RlckxpbmtzID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtZm9vdGVyX19saW5rc1wiPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzdHJvbmc+Q29uc3VtZXIgRWxlY3RyaWM6PC9zdHJvbmc+XG4gICAgICAgICAgICB7TGlua3MuY29uc3VtZXJFbGVjdHJpYy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLnVybH0ga2V5PXtpdGVtLnRleHR9PlxuICAgICAgICAgICAgICAgICAgICA8YT57aXRlbS50ZXh0fTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzdHJvbmc+Q2xvdGhpbmcgJmFtcDsgQXBwYXJlbDo8L3N0cm9uZz5cbiAgICAgICAgICAgIHtMaW5rcy5jbG90aGluZ0FuZEFwcGFyZWwubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS51cmx9IGtleT17aXRlbS50ZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgPGE+e2l0ZW0udGV4dH08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Ryb25nPkhvbWUsIEdhcmRlbiAmYW1wOyBLaXRjaGVuOjwvc3Ryb25nPlxuICAgICAgICAgICAge0xpbmtzLmdhcmRlbkFuZEtpdGNoZW4ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS51cmx9IGtleT17aXRlbS50ZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgPGE+e2l0ZW0udGV4dH08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Ryb25nPkhlYWx0aCAmYW1wOyBCZWF1dHk6PC9zdHJvbmc+XG4gICAgICAgICAgICB7TGlua3MuaGVhbHRoQW5kQmVhdXR5Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0udXJsfSBrZXk9e2l0ZW0udGV4dH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnRleHR9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPHN0cm9uZz5KZXdlbHJ5ICZhbXA7IFdhdGNoZXM6PC9zdHJvbmc+XG4gICAgICAgICAgICB7TGlua3MuamV3ZWxyeUFuZFdhdGNoLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0udXJsfSBrZXk9e2l0ZW0udGV4dH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnRleHR9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPHN0cm9uZz5Db21wdXRlciAmYW1wOyBUZWNobm9sb2dpZXM6PC9zdHJvbmc+XG4gICAgICAgICAgICB7TGlua3MuY29tcHV0ZXJBbmRUZWNobm9sb2d5Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0udXJsfSBrZXk9e2l0ZW0udGV4dH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnRleHR9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3A+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJMaW5rcztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBGb290ZXJXaWRnZXRzID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtZm9vdGVyX193aWRnZXRzXCI+XG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJ3aWRnZXQgd2lkZ2V0X2Zvb3RlciB3aWRnZXRfY29udGFjdC11c1wiPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIndpZGdldC10aXRsZVwiPkNvbnRhY3QgdXM8L2g0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRfY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxwPkNhbGwgdXMgMjQvNzwvcD5cbiAgICAgICAgICAgICAgICA8aDM+MTgwMCA5NyA5NyA2OTwvaDM+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDUwMiBOZXcgRGVzaWduIFN0ciwgTWVsYm91cm5lLCBBdXN0cmFsaWEgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86Y29udGFjdEBtYXJ0ZnVyeS5jb1wiPmNvbnRhY3RAbWFydGZ1cnkuY288L2E+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcy1saXN0LS1zb2NpYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmFjZWJvb2tcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZhY2Vib29rXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0d2l0dGVyXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10d2l0dGVyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJnb29nbGUtcGx1c1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZ29vZ2xlLXBsdXNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImluc3RhZ3JhbVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtaW5zdGFncmFtXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cIndpZGdldCB3aWRnZXRfZm9vdGVyXCI+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlXCI+UXVpY2sgbGlua3M8L2g0PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBzLWxpc3QtLWxpbmtcIj5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGFnZS9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+UG9saWN5PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdlL2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5UZXJtICYgQ29uZGl0aW9uPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGFnZS9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+U2hpcHBpbmc8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdlL2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5SZXR1cm48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdlL2ZhcXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkZBUXM8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cIndpZGdldCB3aWRnZXRfZm9vdGVyXCI+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlXCI+Q29tcGFueTwvaDQ+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHMtbGlzdC0tbGlua1wiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdlL2Fib3V0LXVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5BYm91dCBVczwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3BhZ2UvYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkFmZmlsYXRlPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGFnZS9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q2FyZWVyPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGFnZS9jb250YWN0LXVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5Db250YWN0PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJ3aWRnZXQgd2lkZ2V0X2Zvb3RlclwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIndpZGdldC10aXRsZVwiPkJ1c3NpbmVzczwvaDQ+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHMtbGlzdC0tbGlua1wiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdlL2Fib3V0LXVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5PdXIgUHJlc3M8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2NvdW50L2NoZWNrb3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5DaGVja291dDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FjY291bnQvdXNlci1pbmZvcm1hdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+TXkgYWNjb3VudDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3BcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlNob3A8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9hc2lkZT5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcldpZGdldHM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvZ28gZnJvbSAnfi9jb21wb25lbnRzL2VsZW1lbnRzL2NvbW1vbi9Mb2dvJztcbmltcG9ydCBTZWFyY2hIZWFkZXIgZnJvbSAnfi9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXJzL21vZHVsZXMvU2VhcmNoSGVhZGVyJztcbmltcG9ydCBOYXZpZ2F0aW9uRGVmYXVsdCBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL25hdmlnYXRpb24vTmF2aWdhdGlvbkRlZmF1bHQnO1xuaW1wb3J0IEhlYWRlckFjdGlvbnMgZnJvbSAnfi9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXJzL21vZHVsZXMvSGVhZGVyQWN0aW9ucyc7XG5pbXBvcnQgeyBzdGlja3lIZWFkZXIgfSBmcm9tICd+L3V0aWxpdGllcy9jb21tb24taGVscGVycyc7XG5pbXBvcnQgTWVudUNhdGVnb3JpZXNEcm9wZG93biBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL21lbnVzL01lbnVDYXRlZ29yaWVzRHJvcGRvd24nO1xuXG5jb25zdCBIZWFkZXJEZWZhdWx0ID0gKCkgPT4ge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzdGlja3lIZWFkZXIpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyIGhlYWRlci0tMVwiXG4gICAgICAgICAgICBkYXRhLXN0aWNreT1cInRydWVcIlxuICAgICAgICAgICAgaWQ9XCJoZWFkZXJTdGlja3lcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX190b3BcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Q2F0ZWdvcmllc0Ryb3Bkb3duIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJBY3Rpb25zIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbkRlZmF1bHQgLz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckRlZmF1bHQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgbG9nT3V0IH0gZnJvbSAnfi9zdG9yZS9hdXRoL2FjdGlvbic7XG5cbmNvbnN0IEFjY291bnRRdWlja0xpbmtzID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xuICAgIH07XG4gICAgY29uc3QgYWNjb3VudExpbmtzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnQWNjb3VudCBJbmZvcm1hdGlvbicsXG4gICAgICAgICAgICB1cmw6ICcvYWNjb3VudC91c2VyLWluZm9ybWF0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ05vdGlmaWNhdGlvbnMnLFxuICAgICAgICAgICAgdXJsOiAnL2FjY291bnQvbm90aWZpY2F0aW9ucycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdJbnZvaWNlcycsXG4gICAgICAgICAgICB1cmw6ICcvYWNjb3VudC9pbnZvaWNlcycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdBZGRyZXNzJyxcbiAgICAgICAgICAgIHVybDogJy9hY2NvdW50L2FkZHJlc3NlcycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdSZWNlbnQgVmlld2VkIFByb2R1Y3QnLFxuICAgICAgICAgICAgdXJsOiAnL2FjY291bnQvcmVjZW50LXZpZXdlZC1wcm9kdWN0JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1dpc2hsaXN0JyxcbiAgICAgICAgICAgIHVybDogJy9hY2NvdW50L3dpc2hsaXN0JyxcbiAgICAgICAgfSxcbiAgICBdO1xuICAgIGNvbnN0IHsgaXNMb2dnZWRJbiB9ID0gcHJvcHM7XG5cbiAgICAvLyBWaWV3XG4gICAgY29uc3QgbGlua3NWaWV3ID0gYWNjb3VudExpbmtzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8bGkga2V5PXtpdGVtLnRleHR9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS51cmx9PlxuICAgICAgICAgICAgICAgIDxhPntpdGVtLnRleHR9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICkpO1xuXG4gICAgaWYgKGlzTG9nZ2VkSW4gPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtYmxvY2stLXVzZXItYWNjb3VudFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tdXNlclwiPjwvaT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWJsb2NrX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcy1saXN0LS1hcnJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xpbmtzVmlld31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcy1ibG9ja19fZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlTG9nb3V0KGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWJsb2NrLS11c2VyLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtYmxvY2tfX2xlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi11c2VyXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtYmxvY2tfX3JpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjb3VudC9sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+TG9naW48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2NvdW50L3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5SZWdpc3RlcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUpID0+IHN0YXRlKShBY2NvdW50UXVpY2tMaW5rcyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBjaGFuZ2VDdXJyZW5jeSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3NldHRpbmcvYWN0aW9uJztcblxuY2xhc3MgQ3VycmVuY3lEcm9wZG93biBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGhhbmRsZUZlYXR1cmVXaWxsVXBkYXRlKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBub3RpZmljYXRpb24ub3Blbih7XG4gICAgICAgICAgICBtZXNzYWdlOiAnT3BwISBTb21ldGhpbmcgd2VudCB3cm9uZy4nLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGZlYXR1cmUgaGFzIGJlZW4gdXBkYXRlZCBsYXRlciEnLFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlQ3VycmVuY3kgPSAoZSwgY3VycmVuY3kpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGNoYW5nZUN1cnJlbmN5KGN1cnJlbmN5KSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjdXJyZW5jeSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICB7Y3VycmVuY3kgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgb25DbGljaz17ZSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbmN5LnRleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHMtZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlQ3VycmVuY3koZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiAnJCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnVVNEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVTRFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlQ3VycmVuY3koZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiAn4oKsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdFVVJPJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVVUk9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZUN1cnJlbmN5KGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogJ8KjJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdHQlAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR0JQXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgICByZXR1cm4gc3RhdGUuc2V0dGluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDdXJyZW5jeURyb3Bkb3duKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBNaW5pQ2FydCBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlcnMvbW9kdWxlcy9NaW5pQ2FydCc7XG5pbXBvcnQgQWNjb3VudFF1aWNrTGlua3MgZnJvbSAnfi9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXJzL21vZHVsZXMvQWNjb3VudFF1aWNrTGlua3MnO1xuXG5jb25zdCBIZWFkZXJBY3Rpb25zID0gKHsgZWNvbWVyY2UsIGF1dGggfSkgPT4ge1xuICAgIGNvbnN0IHsgY29tcGFyZUl0ZW1zLCB3aXNobGlzdEl0ZW1zIH0gPSBlY29tZXJjZTtcbiAgICAvLyB2aWV3c1xuICAgIGxldCBoZWFkZXJBdXRoVmlldztcbiAgICBpZiAoYXV0aC5pc0xvZ2dlZEluICYmIEJvb2xlYW4oYXV0aC5pc0xvZ2dlZEluKSA9PT0gdHJ1ZSkge1xuICAgICAgICBoZWFkZXJBdXRoVmlldyA9IDxBY2NvdW50UXVpY2tMaW5rcyBpc0xvZ2dlZEluPXt0cnVlfSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkZXJBdXRoVmlldyA9IDxBY2NvdW50UXVpY2tMaW5rcyBpc0xvZ2dlZEluPXtmYWxzZX0gLz47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19hY3Rpb25zXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FjY291bnQvY29tcGFyZVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRlcl9fZXh0cmFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1jaGFydC1iYXJzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpPntjb21wYXJlSXRlbXMgPyBjb21wYXJlSXRlbXMubGVuZ3RoIDogMH08L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FjY291bnQvd2lzaGxpc3RcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkZXJfX2V4dHJhXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24taGVhcnRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGk+e3dpc2hsaXN0SXRlbXMgPyB3aXNobGlzdEl0ZW1zLmxlbmd0aCA6IDB9PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPE1pbmlDYXJ0IC8+XG4gICAgICAgICAgICB7aGVhZGVyQXV0aFZpZXd9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KChzdGF0ZSkgPT4gc3RhdGUpKEhlYWRlckFjdGlvbnMpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xuY2xhc3MgTGFuZ3VhZ2VTd2ljaGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlRmVhdHVyZVdpbGxVcGRhdGUoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG5vdGlmaWNhdGlvbi5vcGVuKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdPcHAhIFNvbWV0aGluZyB3ZW50IHdyb25nLicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgZmVhdHVyZSBoYXMgYmVlbiB1cGRhdGVkIGxhdGVyIScsXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWRyb3Bkb3duIGxhbmd1YWdlXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUZlYXR1cmVXaWxsVXBkYXRlLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2ZsYWcvZW4ucG5nXCIgYWx0PVwibWFydGZ1cnlcIiAvPlxuICAgICAgICAgICAgICAgICAgICBFbmdsaXNoXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcy1kcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRmVhdHVyZVdpbGxVcGRhdGUuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltZy9mbGFnL2dlcm1hbnkucG5nXCIgYWx0PVwibWFydGZ1cnlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlcm1hbnlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVGZWF0dXJlV2lsbFVwZGF0ZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2ZsYWcvZnIucG5nXCIgYWx0PVwibWFydGZ1cnlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZyYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhbmd1YWdlU3dpY2hlcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBQcm9kdWN0T25DYXJ0IGZyb20gJ34vY29tcG9uZW50cy9lbGVtZW50cy9wcm9kdWN0cy9Qcm9kdWN0T25DYXJ0JztcbmltcG9ydCB1c2VFY29tZXJjZSBmcm9tICd+L2hvb2tzL3VzZUVjb21lcmNlJztcbmltcG9ydCB7IGNhbGN1bGF0ZUFtb3VudCB9IGZyb20gJ34vdXRpbGl0aWVzL2Vjb21lcmNlLWhlbHBlcnMnO1xuXG5jb25zdCBNaW5pQ2FydCA9ICh7IGVjb21lcmNlIH0pID0+IHtcbiAgICBjb25zdCB7IHByb2R1Y3RzLCByZW1vdmVJdGVtLCByZW1vdmVJdGVtcywgZ2V0UHJvZHVjdHMgfSA9IHVzZUVjb21lcmNlKCk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdmVJdGVtKGUsIHByb2R1Y3RJZCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJlbW92ZUl0ZW0oeyBpZDogcHJvZHVjdElkIH0sIGVjb21lcmNlLmNhcnRJdGVtcywgJ2NhcnQnKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRQcm9kdWN0cyhlY29tZXJjZS5jYXJ0SXRlbXMsICdjYXJ0Jyk7XG4gICAgfSwgW2Vjb21lcmNlXSk7XG5cbiAgICBsZXQgY2FydEl0ZW1zVmlldztcbiAgICBpZiAocHJvZHVjdHMgJiYgcHJvZHVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBhbW91bnQgPSBjYWxjdWxhdGVBbW91bnQocHJvZHVjdHMpO1xuICAgICAgICBjb25zdCBwcm9kdWN0SXRlbXMgPSBwcm9kdWN0cy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RPbkNhcnQgcHJvZHVjdD17aXRlbX0ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX3JlbW92ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlUmVtb3ZlSXRlbShlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWNyb3NzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9Qcm9kdWN0T25DYXJ0PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNhcnRJdGVtc1ZpZXcgPSAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWNhcnRfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWNhcnRfX2l0ZW1zXCI+e3Byb2R1Y3RJdGVtc308L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWNhcnRfX2Zvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICBTdWIgVG90YWw6XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPiR7YW1vdW50ID8gYW1vdW50IDogMH08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjb3VudC9zaG9wcGluZy1jYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHMtYnRuXCI+VmlldyBDYXJ0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2NvdW50L2NoZWNrb3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHMtYnRuXCI+Q2hlY2tvdXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2FydEl0ZW1zVmlldyA9IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtY2FydF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtY2FydF9faXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Tm8gcHJvZHVjdHMgaW4gY2FydDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtY2FydC0tbWluaVwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGVyX19leHRyYVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1iYWcyXCI+PC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aT57cHJvZHVjdHMgPyBwcm9kdWN0cy5sZW5ndGggOiAwfTwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICB7Y2FydEl0ZW1zVmlld31cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlKSA9PiBzdGF0ZSkoTWluaUNhcnQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFNwaW4gfSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9kdWN0UmVwb3NpdG9yeSBmcm9tICd+L3JlcG9zaXRvcmllcy9Qcm9kdWN0UmVwb3NpdG9yeSc7XG5pbXBvcnQgUHJvZHVjdFNlYXJjaFJlc3VsdCBmcm9tICd+L2NvbXBvbmVudHMvZWxlbWVudHMvcHJvZHVjdHMvUHJvZHVjdFNlYXJjaFJlc3VsdCc7XG5cbmNvbnN0IGV4YW1wbGVDYXRlZ29yaWVzID0gW1xuICAgICdBbGwnLFxuICAgICdCYWJpZXMgJiBNb21zJyxcbiAgICAnQm9va3MgJiBPZmZpY2UnLFxuICAgICdDYXJzICYgTW90b2N5Y2xlcycsXG4gICAgJ0Nsb3RoaW5nICYgQXBwYXJlbCcsXG4gICAgJ8KgQWNjZXNzb3JpZXMnLFxuICAgICdCYWdzJyxcbiAgICAnS2lk4oCZcyBGYXNoaW9uJyxcbiAgICAnTWVucycsXG4gICAgJ1Nob2VzJyxcbiAgICAnU3VuZ2xhc3NlcycsXG4gICAgJ1dvbWVucycsXG4gICAgJ0NvbXB1dGVycyAmIFRlY2hub2xvZ2llcycsXG4gICAgJ0Rlc2t0b3AgUEMnLFxuICAgICdMYXB0b3AnLFxuICAgICdTbWFydHBob25lcycsXG4gICAgJ0NvbnN1bWVyIEVsZWN0cmljcycsXG4gICAgJ0FpciBDb25kaXRpb25lcnMnLFxuICAgICdBY2Nlc3NvcmllcycsXG4gICAgJ1R5cGUgSGFuZ2luZyBDZWxsJyxcbiAgICAnQXVkaW9zICYgVGhlYXRlcnMnLFxuICAgICdIZWFkcGhvbmUnLFxuICAgICdIb21lIFRoZWF0ZXIgU3lzdGVtJyxcbiAgICAnU3BlYWtlcnMnLFxuICAgICdDYXIgRWxlY3Ryb25pY3MnLFxuICAgICdBdWRpbyAmIFZpZGVvJyxcbiAgICAnQ2FyIFNlY3VyaXR5JyxcbiAgICAnUmFkYXIgRGV0ZWN0b3InLFxuICAgICdWZWhpY2xlIEdQUycsXG4gICAgJ09mZmljZSBFbGVjdHJvbmljcycsXG4gICAgJ1ByaW50ZXJzJyxcbiAgICAnUHJvamVjdG9ycycsXG4gICAgJ1NjYW5uZXJzJyxcbiAgICAnU3RvcmUgJiBCdXNpbmVzcycsXG4gICAgJ1JlZnJpZ2VyYXRvcnMnLFxuICAgICdUViBUZWxldmlzaW9ucycsXG4gICAgJzRLIFVsdHJhIEhEIFRWcycsXG4gICAgJ0xFRCBUVnMnLFxuICAgICdPTEVEIFRWcycsXG4gICAgJ1dhc2hpbmcgTWFjaGluZXMnLFxuICAgICdUeXBlIERyeWluZyBDbG90aGVzJyxcbiAgICAnVHlwZSBIb3Jpem9udGFsJyxcbiAgICAnVHlwZSBWZXJ0aWNhbCcsXG4gICAgJ0dhcmRlbiAmIEtpdGNoZW4nLFxuICAgICdDb29rd2FyZScsXG4gICAgJ0RlY29yYXRpb24nLFxuICAgICdGdXJuaXR1cmUnLFxuICAgICdHYXJkZW4gVG9vbHMnLFxuICAgICdIb21lIEltcHJvdmVtZW50JyxcbiAgICAnUG93ZXJzIEFuZCBIYW5kIFRvb2xzJyxcbiAgICAnVXRlbnNpbCAmIEdhZGdldCcsXG4gICAgJ0hlYWx0aCAmIEJlYXV0eScsXG4gICAgJ0VxdWlwbWVudHMnLFxuICAgICdIYWlyIENhcmUnLFxuICAgICdQZXJmdW1lcicsXG4gICAgJ1dpbmUgQ2FiaW5ldHMnLFxuXTtcblxuZnVuY3Rpb24gdXNlRGVib3VuY2UodmFsdWUsIGRlbGF5KSB7XG4gICAgY29uc3QgW2RlYm91bmNlZFZhbHVlLCBzZXREZWJvdW5jZWRWYWx1ZV0gPSB1c2VTdGF0ZSh2YWx1ZSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gVXBkYXRlIGRlYm91bmNlZCB2YWx1ZSBhZnRlciBkZWxheVxuICAgICAgICBjb25zdCBoYW5kbGVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXREZWJvdW5jZWRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH0sIGRlbGF5KTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZXIpO1xuICAgICAgICB9O1xuICAgIH0sIFt2YWx1ZSwgZGVsYXldKTtcblxuICAgIHJldHVybiBkZWJvdW5jZWRWYWx1ZTtcbn1cblxuY29uc3QgU2VhcmNoSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0RWwgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgW2lzU2VhcmNoLCBzZXRJc1NlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2tleXdvcmQsIHNldEtleXdvcmRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtyZXN1bHRJdGVtcywgc2V0UmVzdWx0SXRlbXNdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGRlYm91bmNlZFNlYXJjaFRlcm0gPSB1c2VEZWJvdW5jZShrZXl3b3JkLCAzMDApO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xlYXJLZXl3b3JkKCkge1xuICAgICAgICBzZXRLZXl3b3JkKCcnKTtcbiAgICAgICAgc2V0SXNTZWFyY2goZmFsc2UpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFJvdXRlci5wdXNoKGAvc2VhcmNoP2tleXdvcmQ9JHtrZXl3b3JkfWApO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChkZWJvdW5jZWRTZWFyY2hUZXJtKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgaWYgKGtleXdvcmQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyaWVzID0ge1xuICAgICAgICAgICAgICAgICAgICBfbGltaXQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlX2NvbnRhaW5zOiBrZXl3b3JkLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBQcm9kdWN0UmVwb3NpdG9yeS5nZXRSZWNvcmRzKHF1ZXJpZXMpO1xuICAgICAgICAgICAgICAgIHByb2R1Y3RzLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0SXRlbXMocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNTZWFyY2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldElzU2VhcmNoKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZXRLZXl3b3JkKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgc2V0SXNTZWFyY2goZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRJc1NlYXJjaChmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9LCBbZGVib3VuY2VkU2VhcmNoVGVybV0pO1xuXG4gICAgLy8gVmlld3NcbiAgICBsZXQgcHJvZHVjdEl0ZW1zVmlldyxcbiAgICAgICAgY2xlYXJUZXh0VmlldyxcbiAgICAgICAgc2VsZWN0T3B0aW9uVmlldyxcbiAgICAgICAgbG9hZGluZ1ZpZXcsXG4gICAgICAgIGxvYWRNb3JlVmlldztcbiAgICBpZiAoIWxvYWRpbmcpIHtcbiAgICAgICAgaWYgKHJlc3VsdEl0ZW1zICYmIHJlc3VsdEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHRJdGVtcy5sZW5ndGggPiA1KSB7XG4gICAgICAgICAgICAgICAgbG9hZE1vcmVWaWV3ID0gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXBhbmVsX19mb290ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+U2VlIGFsbCByZXN1bHRzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvZHVjdEl0ZW1zVmlldyA9IHJlc3VsdEl0ZW1zLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgICAgIDxQcm9kdWN0U2VhcmNoUmVzdWx0IHByb2R1Y3Q9e3Byb2R1Y3R9IGtleT17cHJvZHVjdC5pZH0gLz5cbiAgICAgICAgICAgICkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvZHVjdEl0ZW1zVmlldyA9IDxwPk5vIHByb2R1Y3QgZm91bmQuPC9wPjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5d29yZCAhPT0gJycpIHtcbiAgICAgICAgICAgIGNsZWFyVGV4dFZpZXcgPSAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHMtZm9ybV9fYWN0aW9uXCIgb25DbGljaz17aGFuZGxlQ2xlYXJLZXl3b3JkfT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNyb3NzMlwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbG9hZGluZ1ZpZXcgPSAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcy1mb3JtX19hY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8U3BpbiBzaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHNlbGVjdE9wdGlvblZpZXcgPSBleGFtcGxlQ2F0ZWdvcmllcy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICA8b3B0aW9uIHZhbHVlPXtvcHRpb259IGtleT17b3B0aW9ufT5cbiAgICAgICAgICAgIHtvcHRpb259XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBzLWZvcm0tLXF1aWNrLXNlYXJjaFwiXG4gICAgICAgICAgICBtZXRob2Q9XCJnZXRcIlxuICAgICAgICAgICAgYWN0aW9uPVwiL1wiXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtZm9ybV9fY2F0ZWdvcmllc1wiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+e3NlbGVjdE9wdGlvblZpZXd9PC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtZm9ybV9faW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtpbnB1dEVsfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl3b3JkfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkknbSBzaG9wcGluZyBmb3IuLi5cIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEtleXdvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2NsZWFyVGV4dFZpZXd9XG4gICAgICAgICAgICAgICAge2xvYWRpbmdWaWV3fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+U2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHMtcGFuZWwtLXNlYXJjaC1yZXN1bHQke1xuICAgICAgICAgICAgICAgICAgICBpc1NlYXJjaCA/ICcgYWN0aXZlICcgOiAnJ1xuICAgICAgICAgICAgICAgIH1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXBhbmVsX19jb250ZW50XCI+e3Byb2R1Y3RJdGVtc1ZpZXd9PC9kaXY+XG4gICAgICAgICAgICAgICAge2xvYWRNb3JlVmlld31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWVudURhdGEgZnJvbSAnfi9wdWJsaWMvc3RhdGljL2RhdGEvbWVudS5qc29uJztcbmltcG9ydCBNZW51IGZyb20gJ34vY29tcG9uZW50cy9lbGVtZW50cy9tZW51L01lbnUnO1xuXG5jb25zdCBNZW51Q2F0ZWdvcmllc0Ryb3Bkb3duID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS0tcHJvZHVjdC1jYXRlZ29yaWVzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfX3RvZ2dsZVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbWVudVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8c3Bhbj5TaG9wIGJ5IERlcGFydG1lbnQ8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZT17bWVudURhdGEucHJvZHVjdF9jYXRlZ29yaWVzfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LS1kcm9wZG93blwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudUNhdGVnb3JpZXNEcm9wZG93bjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgTWVudSBmcm9tICcuLi8uLi9lbGVtZW50cy9tZW51L01lbnUnO1xuXG5pbXBvcnQgbWVudURhdGEgZnJvbSAnLi4vLi4vLi4vcHVibGljL3N0YXRpYy9kYXRhL21lbnUnO1xuaW1wb3J0IEN1cnJlbmN5RHJvcGRvd24gZnJvbSAnLi4vaGVhZGVycy9tb2R1bGVzL0N1cnJlbmN5RHJvcGRvd24nO1xuaW1wb3J0IExhbmd1YWdlU3dpY2hlciBmcm9tICcuLi9oZWFkZXJzL21vZHVsZXMvTGFuZ3VhZ2VTd2ljaGVyJztcbmltcG9ydCBNZW51Q2F0ZWdvcmllc0Ryb3Bkb3duIGZyb20gJ34vY29tcG9uZW50cy9zaGFyZWQvbWVudXMvTWVudUNhdGVnb3JpZXNEcm9wZG93bic7XG5cbmNsYXNzIE5hdmlnYXRpb25EZWZhdWx0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlRmVhdHVyZVdpbGxVcGRhdGUoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG5vdGlmaWNhdGlvbi5vcGVuKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdPcHAhIFNvbWV0aGluZyB3ZW50IHdyb25nLicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgZmVhdHVyZSBoYXMgYmVlbiB1cGRhdGVkIGxhdGVyIScsXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fX2xlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Q2F0ZWdvcmllc0Ryb3Bkb3duIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fX3JpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17bWVudURhdGEubWVudVByaW1hcnkubWVudV8xfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX19leHRyYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92ZW5kb3IvYmVjb21lLWEtdmVuZG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TZWxsIG9uIE1hcnRmdXJ5PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjb3VudC9vcmRlci10cmFja2luZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+VHJhY3QgeW91ciBvcmRlcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VycmVuY3lEcm9wZG93biAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFuZ3VhZ2VTd2ljaGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uRGVmYXVsdDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9kdWN0UmVwb3NpdG9yeSBmcm9tICd+L3JlcG9zaXRvcmllcy9Qcm9kdWN0UmVwb3NpdG9yeSc7XG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcbiAgICBzZXRDb21wYXJlSXRlbXMsXG4gICAgc2V0V2lzaGxpc3RUdGVtcyxcbiAgICBzZXRDYXJ0SXRlbXMsXG59IGZyb20gJ34vc3RvcmUvZWNvbWVyY2UvYWN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRWNvbWVyY2UoKSB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbY2FydEl0ZW1zT25Db29raWVdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2Nvb2tpZXMsIHNldENvb2tpZV0gPSB1c2VDb29raWVzKFsnY2FydCddKTtcbiAgICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRpbmcsXG4gICAgICAgIGNhcnRJdGVtc09uQ29va2llLFxuICAgICAgICBwcm9kdWN0cyxcbiAgICAgICAgZ2V0UHJvZHVjdHM6IGFzeW5jIChwYXlsb2FkLCBncm91cCA9ICcnKSA9PiB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgaWYgKHBheWxvYWQgJiYgcGF5bG9hZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHF1ZXJpZXMgPSAnJztcbiAgICAgICAgICAgICAgICBwYXlsb2FkLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJpZXMgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyaWVzID0gYGlkX2luPSR7aXRlbS5pZH1gO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcmllcyA9IHF1ZXJpZXMgKyBgJmlkX2luPSR7aXRlbS5pZH1gO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgUHJvZHVjdFJlcG9zaXRvcnkuZ2V0UHJvZHVjdHNCeUlkcyhcbiAgICAgICAgICAgICAgICAgICAgcXVlcmllc1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlRGF0YSAmJiByZXNwb25zZURhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXAgPT09ICdjYXJ0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcnRJdGVtcyA9IHJlc3BvbnNlRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBleGlzdEl0ZW0gPSBjYXJ0SXRlbXMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZhbCkgPT4gdmFsLmlkID09PSBpdGVtLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0SXRlbS5xdWFudGl0eSA9IGl0ZW0ucXVhbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3RzKGNhcnRJdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0cyhyZXNwb25zZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAyNTBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldFByb2R1Y3RzKFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBpbmNyZWFzZVF0eTogKHBheWxvYWQsIGN1cnJlbnRDYXJ0KSA9PiB7XG4gICAgICAgICAgICBsZXQgY2FydCA9IFtdO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRDYXJ0KSB7XG4gICAgICAgICAgICAgICAgY2FydCA9IGN1cnJlbnRDYXJ0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0SXRlbSA9IGNhcnQuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcGF5bG9hZC5pZCk7XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBleGlzdEl0ZW0ucXVhbnRpdHkgPSBleGlzdEl0ZW0ucXVhbnRpdHkgKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRDb29raWUoJ2NhcnQnLCBjYXJ0LCB7IHBhdGg6ICcvJyB9KTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRDYXJ0SXRlbXMoY2FydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNhcnQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVjcmVhc2VRdHk6IChwYXlsb2FkLCBjdXJyZW50Q2FydCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNhcnQgPSBbXTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q2FydCkge1xuICAgICAgICAgICAgICAgIGNhcnQgPSBjdXJyZW50Q2FydDtcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdEl0ZW0gPSBjYXJ0LmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBheWxvYWQuaWQpO1xuICAgICAgICAgICAgICAgIGlmIChleGlzdEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0SXRlbS5xdWFudGl0eSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0SXRlbS5xdWFudGl0eSA9IGV4aXN0SXRlbS5xdWFudGl0eSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0Q29va2llKCdjYXJ0JywgY2FydCwgeyBwYXRoOiAnLycgfSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0Q2FydEl0ZW1zKGNhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjYXJ0O1xuICAgICAgICB9LFxuXG4gICAgICAgIGFkZEl0ZW06IChuZXdJdGVtLCBpdGVtcywgZ3JvdXApID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdJdGVtcyA9IFtdO1xuICAgICAgICAgICAgaWYgKGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgbmV3SXRlbXMgPSBpdGVtcztcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdEl0ZW0gPSBpdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBuZXdJdGVtLmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChncm91cCA9PT0gJ2NhcnQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdEl0ZW0ucXVhbnRpdHkgKz0gbmV3SXRlbS5xdWFudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0l0ZW1zLnB1c2gobmV3SXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdJdGVtcy5wdXNoKG5ld0l0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdyb3VwID09PSAnY2FydCcpIHtcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoJ2NhcnQnLCBuZXdJdGVtcywgeyBwYXRoOiAnLycgfSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0Q2FydEl0ZW1zKG5ld0l0ZW1zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ3JvdXAgPT09ICd3aXNobGlzdCcpIHtcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoJ3dpc2hsaXN0JywgbmV3SXRlbXMsIHsgcGF0aDogJy8nIH0pO1xuXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0V2lzaGxpc3RUdGVtcyhuZXdJdGVtcykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZ3JvdXAgPT09ICdjb21wYXJlJykge1xuICAgICAgICAgICAgICAgIHNldENvb2tpZSgnY29tcGFyZScsIG5ld0l0ZW1zLCB7IHBhdGg6ICcvJyB9KTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRDb21wYXJlSXRlbXMobmV3SXRlbXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdJdGVtcztcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmVJdGVtOiAoc2VsZWN0ZWRJdGVtLCBpdGVtcywgZ3JvdXApID0+IHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SXRlbXMgPSBpdGVtcztcbiAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY3VycmVudEl0ZW1zLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHNlbGVjdGVkSXRlbS5pZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ3JvdXAgPT09ICdjYXJ0Jykge1xuICAgICAgICAgICAgICAgIHNldENvb2tpZSgnY2FydCcsIGN1cnJlbnRJdGVtcywgeyBwYXRoOiAnLycgfSk7XG5cbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRDYXJ0SXRlbXMoY3VycmVudEl0ZW1zKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChncm91cCA9PT0gJ3dpc2hsaXN0Jykge1xuICAgICAgICAgICAgICAgIHNldENvb2tpZSgnd2lzaGxpc3QnLCBjdXJyZW50SXRlbXMsIHsgcGF0aDogJy8nIH0pO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldFdpc2hsaXN0VHRlbXMoY3VycmVudEl0ZW1zKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChncm91cCA9PT0gJ2NvbXBhcmUnKSB7XG4gICAgICAgICAgICAgICAgc2V0Q29va2llKCdjb21wYXJlJywgY3VycmVudEl0ZW1zLCB7IHBhdGg6ICcvJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmVJdGVtczogKGdyb3VwKSA9PiB7XG4gICAgICAgICAgICBpZiAoZ3JvdXAgPT09ICd3aXNobGlzdCcpIHtcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoJ3dpc2hsaXN0JywgW10sIHsgcGF0aDogJy8nIH0pO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldFdpc2hsaXN0VHRlbXMoW10pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChncm91cCA9PT0gJ2NvbXBhcmUnKSB7XG4gICAgICAgICAgICAgICAgc2V0Q29va2llKCdjb21wYXJlJywgW10sIHsgcGF0aDogJy8nIH0pO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldENvbXBhcmVJdGVtcyhbXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdyb3VwID09PSAnY2FydCcpIHtcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoJ2NhcnQnLCBbXSwgeyBwYXRoOiAnLycgfSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0Q2FydEl0ZW1zKFtdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF6eUxvYWQgZnJvbSAncmVhY3QtbGF6eWxvYWQnO1xuaW1wb3J0IHsgYmFzZVVybCB9IGZyb20gJ34vcmVwb3NpdG9yaWVzL1JlcG9zaXRvcnknO1xuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3kgfSBmcm9tICd+L3V0aWxpdGllcy9wcm9kdWN0LWhlbHBlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5mdW5jdGlvbiBnZXRJbWFnZVVSTChzb3VyY2UsIHNpemUpIHtcbiAgICBsZXQgaW1hZ2UsIGltYWdlVVJMO1xuXG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBpZiAoc2l6ZSAmJiBzaXplID09PSAnbGFyZ2UnKSB7XG4gICAgICAgICAgICBpZiAoc291cmNlLmZvcm1hdHMubGFyZ2UpIHtcbiAgICAgICAgICAgICAgICBpbWFnZSA9IHNvdXJjZS5mb3JtYXRzLmxhcmdlLnVybDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW1hZ2UgPSBzb3VyY2UudXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNpemUgJiYgc2l6ZSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UuZm9ybWF0cy5tZWRpdW0pIHtcbiAgICAgICAgICAgICAgICBpbWFnZSA9IHNvdXJjZS5mb3JtYXRzLm1lZGl1bS51cmw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGltYWdlID0gc291cmNlLnVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzaXplICYmIHNpemUgPT09ICd0aHVtYm5haWwnKSB7XG4gICAgICAgICAgICBpZiAoc291cmNlLmZvcm1hdHMudGh1bWJuYWlsKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2UgPSBzb3VyY2UuZm9ybWF0cy5zb3VyY2UudXJsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbWFnZSA9IHNvdXJjZS51cmw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2l6ZSAmJiBzaXplID09PSAnc21hbGwnKSB7XG4gICAgICAgICAgICBpZiAoc291cmNlLmZvcm1hdHMuc21hbGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGltYWdlID0gc291cmNlLmZvcm1hdHMuc21hbGwudXJsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbWFnZSA9IHNvdXJjZS51cmw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbWFnZSA9IHNvdXJjZS51cmw7XG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2VVUkwgPSBgJHtiYXNlVXJsfSR7aW1hZ2V9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWFnZVVSTCA9IGAvc3RhdGljL2ltZy91bmRlZmluZWQtcHJvZHVjdC10aHVtYm5haWwuanBnYDtcbiAgICB9XG4gICAgcmV0dXJuIGltYWdlVVJMO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VQcm9kdWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRodW1ibmFpbEltYWdlOiAocGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC50aHVtYm5haWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2dldEltYWdlVVJMKHBheWxvYWQudGh1bWJuYWlsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17Z2V0SW1hZ2VVUkwocGF5bG9hZC50aHVtYm5haWwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF6eUxvYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByaWNlOiAocGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZpZXc7XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5zYWxlX3ByaWNlKSB7XG4gICAgICAgICAgICAgICAgdmlldyA9IChcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fcHJpY2Ugc2FsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShwYXlsb2FkLnNhbGVfcHJpY2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRlbCBjbGFzc05hbWU9XCJtbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0Q3VycmVuY3kocGF5bG9hZC5wcmljZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZXcgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX3ByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdEN1cnJlbmN5KHBheWxvYWQucHJpY2UpfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2aWV3O1xuICAgICAgICB9LFxuICAgICAgICBiYWRnZXM6IChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmlldyA9IG51bGw7XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5iYWRnZXMgJiYgcGF5bG9hZC5iYWRnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gcGF5bG9hZC5iYWRnZXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnZhbHVlID09PSAnaG90Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19iYWRnZSBob3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnZhbHVlID09PSAnbmV3Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19iYWRnZSBuZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnZhbHVlID09PSAnc2FsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fYmFkZ2Ugc2FsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmlldyA9IDxkaXYgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fYmFkZ2VzXCI+e2l0ZW1zfTwvZGl2PjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2aWV3O1xuICAgICAgICB9LFxuICAgICAgICBiYWRnZTogKHBheWxvYWQpID0+IHtcbiAgICAgICAgICAgIGxldCB2aWV3O1xuICAgICAgICAgICAgaWYgKHBheWxvYWQuYmFkZ2UgJiYgcGF5bG9hZC5iYWRnZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZpZXcgPSBwYXlsb2FkLmJhZGdlLm1hcCgoYmFkZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhZGdlLnR5cGUgPT09ICdzYWxlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX2JhZGdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiYWRnZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFkZ2UudHlwZSA9PT0gJ291dFN0b2NrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX2JhZGdlIG91dC1zdG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmFkZ2UudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX2JhZGdlIGhvdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmFkZ2UudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5zYWxlX3ByaWNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzY291bnRQZXJjZW50ID0gKFxuICAgICAgICAgICAgICAgICAgICAoKHBheWxvYWQucHJpY2UgLSBwYXlsb2FkLnNhbGVfcHJpY2UpIC9cbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQuc2FsZV9wcmljZSkgKlxuICAgICAgICAgICAgICAgICAgICAxMDBcbiAgICAgICAgICAgICAgICApLnRvRml4ZWQoMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19iYWRnZVwiPi17ZGlzY291bnRQZXJjZW50fSU8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZpZXc7XG4gICAgICAgIH0sXG4gICAgICAgIGJyYW5kOiAocGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZpZXc7XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5icmFuZHMgJiYgcGF5bG9hZC5icmFuZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZpZXcgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1jYXBpdGFsaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BheWxvYWQuYnJhbmRzWzBdLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2aWV3ID0gKFxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3BcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtY2FwaXRhbGl6ZVwiPk5vIEJyYW5kPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2aWV3O1xuICAgICAgICB9LFxuICAgICAgICB0aXRsZTogKHBheWxvYWQpID0+IHtcbiAgICAgICAgICAgIGxldCB2aWV3ID0gKFxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdC9bcGlkXVwiIGFzPXtgL3Byb2R1Y3QvJHtwYXlsb2FkLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X190aXRsZVwiPntwYXlsb2FkLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHZpZXc7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4vcm91dGVyXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7Y29uc3QgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyxvcHRpb25zKXtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCd8fCFyb3V0ZXIpcmV0dXJuO2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4vLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxucm91dGVyLnByZWZldGNoKGhyZWYsYXMsb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7Y29uc3QgY3VyTG9jYWxlPW9wdGlvbnMmJnR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxucHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXT10cnVlO31mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpe2NvbnN0e3RhcmdldH09ZXZlbnQuY3VycmVudFRhcmdldDtyZXR1cm4gdGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxldmVudC5tZXRhS2V5fHxldmVudC5jdHJsS2V5fHxldmVudC5zaGlmdEtleXx8ZXZlbnQuYWx0S2V5fHwvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuZXZlbnQubmF0aXZlRXZlbnQmJmV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoPT09Mjt9ZnVuY3Rpb24gbGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSl7Y29uc3R7bm9kZU5hbWV9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKGlzTW9kaWZpZWRFdmVudChlKXx8ISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbnJldHVybjt9ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuaWYoc2Nyb2xsPT1udWxsJiZhcy5pbmRleE9mKCcjJyk+PTApe3Njcm9sbD1mYWxzZTt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5yb3V0ZXJbcmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93LGxvY2FsZSxzY3JvbGx9KTt9ZnVuY3Rpb24gTGluayhwcm9wcyl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2Z1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKXtyZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gKyh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/XCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiOicnKSk7fS8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG5jb25zdCByZXF1aXJlZFByb3BzR3VhcmQ9e2hyZWY6dHJ1ZX07Y29uc3QgcmVxdWlyZWRQcm9wcz1PYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO3JlcXVpcmVkUHJvcHMuZm9yRWFjaChrZXk9PntpZihrZXk9PT0naHJlZicpe2lmKHByb3BzW2tleV09PW51bGx8fHR5cGVvZiBwcm9wc1trZXldIT09J3N0cmluZycmJnR5cGVvZiBwcm9wc1trZXldIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnByb3BzW2tleV09PT1udWxsPydudWxsJzp0eXBlb2YgcHJvcHNba2V5XX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG5jb25zdCBvcHRpb25hbFByb3BzR3VhcmQ9e2FzOnRydWUscmVwbGFjZTp0cnVlLHNjcm9sbDp0cnVlLHNoYWxsb3c6dHJ1ZSxwYXNzSHJlZjp0cnVlLHByZWZldGNoOnRydWUsbG9jYWxlOnRydWV9O2NvbnN0IG9wdGlvbmFsUHJvcHM9T2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtvcHRpb25hbFByb3BzLmZvckVhY2goa2V5PT57Y29uc3QgdmFsVHlwZT10eXBlb2YgcHJvcHNba2V5XTtpZihrZXk9PT0nYXMnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycmJnZhbFR5cGUhPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0nbG9jYWxlJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2AnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdyZXBsYWNlJ3x8a2V5PT09J3Njcm9sbCd8fGtleT09PSdzaGFsbG93J3x8a2V5PT09J3Bhc3NIcmVmJ3x8a2V5PT09J3ByZWZldGNoJyl7aWYocHJvcHNba2V5XSE9bnVsbCYmdmFsVHlwZSE9PSdib29sZWFuJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2Bib29sZWFuYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5jb25zdCBoYXNXYXJuZWQ9X3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtpZihwcm9wcy5wcmVmZXRjaCYmIWhhc1dhcm5lZC5jdXJyZW50KXtoYXNXYXJuZWQuY3VycmVudD10cnVlO2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fWNvbnN0IHA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTtjb25zdCByb3V0ZXI9KDAsX3JvdXRlcjIudXNlUm91dGVyKSgpO2NvbnN0e2hyZWYsYXN9PV9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9Pntjb25zdFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmhyZWYsdHJ1ZSk7cmV0dXJue2hyZWY6cmVzb2x2ZWRIcmVmLGFzOnByb3BzLmFzPygwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5hcyk6cmVzb2x2ZWRBc3x8cmVzb2x2ZWRIcmVmfTt9LFtyb3V0ZXIscHJvcHMuaHJlZixwcm9wcy5hc10pO2xldHtjaGlsZHJlbixyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZX09cHJvcHM7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxubGV0IGNoaWxkO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dHJ5e2NoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt9Y2F0Y2goZXJyKXt0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gKyh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/XCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiOicnKSk7fX1lbHNle2NoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt9Y29uc3QgY2hpbGRSZWY9Y2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWY7Y29uc3Rbc2V0SW50ZXJzZWN0aW9uUmVmLGlzVmlzaWJsZV09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCd9KTtjb25zdCBzZXRSZWY9X3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soZWw9PntzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO2lmKGNoaWxkUmVmKXtpZih0eXBlb2YgY2hpbGRSZWY9PT0nZnVuY3Rpb24nKWNoaWxkUmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZFJlZj09PSdvYmplY3QnKXtjaGlsZFJlZi5jdXJyZW50PWVsO319fSxbY2hpbGRSZWYsc2V0SW50ZXJzZWN0aW9uUmVmXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9Pntjb25zdCBzaG91bGRQcmVmZXRjaD1pc1Zpc2libGUmJnAmJigwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZik7Y29uc3QgY3VyTG9jYWxlPXR5cGVvZiBsb2NhbGUhPT0ndW5kZWZpbmVkJz9sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlO2NvbnN0IGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldO2lmKHNob3VsZFByZWZldGNoJiYhaXNQcmVmZXRjaGVkKXtwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyx7bG9jYWxlOmN1ckxvY2FsZX0pO319LFthcyxocmVmLGlzVmlzaWJsZSxsb2NhbGUscCxyb3V0ZXJdKTtjb25zdCBjaGlsZFByb3BzPXtyZWY6c2V0UmVmLG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe2xpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpO319fTtjaGlsZFByb3BzLm9uTW91c2VFbnRlcj1lPT57aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuO2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO31wcmVmZXRjaChyb3V0ZXIsaHJlZixhcyx7cHJpb3JpdHk6dHJ1ZX0pO307Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7Y29uc3QgY3VyTG9jYWxlPXR5cGVvZiBsb2NhbGUhPT0ndW5kZWZpbmVkJz9sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4vLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuY29uc3QgbG9jYWxlRG9tYWluPXJvdXRlciYmcm91dGVyLmlzTG9jYWxlRG9tYWluJiYoMCxfcm91dGVyLmdldERvbWFpbkxvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmxvY2FsZXMscm91dGVyJiZyb3V0ZXIuZG9tYWluTG9jYWxlcyk7Y2hpbGRQcm9wcy5ocmVmPWxvY2FsZURvbWFpbnx8KDAsX3JvdXRlci5hZGRCYXNlUGF0aCkoKDAsX3JvdXRlci5hZGRMb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5kZWZhdWx0TG9jYWxlKSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsY2hpbGRQcm9wcyk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaD1yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXZvaWQgMDsvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL2Z1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpe3JldHVybiBwYXRoLmVuZHNXaXRoKCcvJykmJnBhdGghPT0nLyc/cGF0aC5zbGljZSgwLC0xKTpwYXRoO30vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1wcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0g/cGF0aD0+e2lmKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKXtyZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7fWVsc2UgaWYocGF0aC5lbmRzV2l0aCgnLycpKXtyZXR1cm4gcGF0aDt9ZWxzZXtyZXR1cm4gcGF0aCsnLyc7fX06cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9dm9pZCAwO2NvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrfHxmdW5jdGlvbihjYil7bGV0IHN0YXJ0PURhdGUubm93KCk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYih7ZGlkVGltZW91dDpmYWxzZSx0aW1lUmVtYWluaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KDAsNTAtKERhdGUubm93KCktc3RhcnQpKTt9fSk7fSwxKTt9O2V4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1ZXN0SWRsZUNhbGxiYWNrO2NvbnN0IGNhbmNlbElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLmNhbmNlbElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oaWQpe3JldHVybiBjbGVhclRpbWVvdXQoaWQpO307ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9Y2FuY2VsSWRsZUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm1hcmtBc3NldEVycm9yPW1hcmtBc3NldEVycm9yO2V4cG9ydHMuaXNBc3NldEVycm9yPWlzQXNzZXRFcnJvcjtleHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3Q9Z2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTsvLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVk9MzgwMDtmdW5jdGlvbiB3aXRoRnV0dXJlKGtleSxtYXAsZ2VuZXJhdG9yKXtsZXQgZW50cnk9bWFwLmdldChrZXkpO2lmKGVudHJ5KXtpZignZnV0dXJlJ2luIGVudHJ5KXtyZXR1cm4gZW50cnkuZnV0dXJlO31yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTt9bGV0IHJlc29sdmVyO2NvbnN0IHByb209bmV3IFByb21pc2UocmVzb2x2ZT0+e3Jlc29sdmVyPXJlc29sdmU7fSk7bWFwLnNldChrZXksZW50cnk9e3Jlc29sdmU6cmVzb2x2ZXIsZnV0dXJlOnByb219KTtyZXR1cm4gZ2VuZXJhdG9yPy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbmdlbmVyYXRvcigpLnRoZW4odmFsdWU9PihyZXNvbHZlcih2YWx1ZSksdmFsdWUpKTpwcm9tO31mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKXt0cnl7bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7cmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0JiYhIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8bGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTt9Y2F0Y2goX3VudXNlZCl7cmV0dXJuIGZhbHNlO319Y29uc3QgY2FuUHJlZmV0Y2g9aGFzUHJlZmV0Y2goKTtmdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLGFzLGxpbmspe3JldHVybiBuZXcgUHJvbWlzZSgocmVzLHJlaik9PntpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKXtyZXR1cm4gcmVzKCk7fWxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG5pZihhcylsaW5rLmFzPWFzO2xpbmsucmVsPWBwcmVmZXRjaGA7bGluay5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO2xpbmsub25sb2FkPXJlcztsaW5rLm9uZXJyb3I9cmVqOy8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG5saW5rLmhyZWY9aHJlZjtkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO30pO31jb25zdCBBU1NFVF9MT0FEX0VSUk9SPVN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpOy8vIFRPRE86IHVuZXhwb3J0XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpe3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLEFTU0VUX0xPQURfRVJST1Ise30pO31mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gZXJyJiZBU1NFVF9MT0FEX0VSUk9SIGluIGVycjt9ZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYyxzY3JpcHQpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57c2NyaXB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4vLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4vLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbnNjcmlwdC5vbmxvYWQ9cmVzb2x2ZTtzY3JpcHQub25lcnJvcj0oKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpOy8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG5zY3JpcHQuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjsvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG5zY3JpcHQuc3JjPXNyYztkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7fSk7fS8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsbXMsZXJyKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e2xldCBjYW5jZWxsZWQ9ZmFsc2U7cC50aGVuKHI9PnsvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG5jYW5jZWxsZWQ9dHJ1ZTtyZXNvbHZlKHIpO30pLmNhdGNoKHJlamVjdCk7KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFRpbWVvdXQoKCk9PntpZighY2FuY2VsbGVkKXtyZWplY3QoZXJyKTt9fSxtcykpO30pO30vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpe2lmKHNlbGYuX19CVUlMRF9NQU5JRkVTVCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO31jb25zdCBvbkJ1aWxkTWFuaWZlc3Q9bmV3IFByb21pc2UocmVzb2x2ZT0+ey8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbmNvbnN0IGNiPXNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I9KCk9PntyZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7Y2ImJmNiKCk7fTt9KTtyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO31mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3JldHVybiBQcm9taXNlLnJlc29sdmUoe3NjcmlwdHM6W2Fzc2V0UHJlZml4KycvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycrZW5jb2RlVVJJKCgwLF9nZXRBc3NldFBhdGhGcm9tUm91dGUuZGVmYXVsdCkocm91dGUsJy5qcycpKV0sLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuY3NzOltdfSk7fXJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbihtYW5pZmVzdD0+e2lmKCEocm91dGUgaW4gbWFuaWZlc3QpKXt0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO31jb25zdCBhbGxGaWxlcz1tYW5pZmVzdFtyb3V0ZV0ubWFwKGVudHJ5PT5hc3NldFByZWZpeCsnL19uZXh0LycrZW5jb2RlVVJJKGVudHJ5KSk7cmV0dXJue3NjcmlwdHM6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5qcycpKSxjc3M6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5jc3MnKSl9O30pO31mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCl7Y29uc3QgZW50cnlwb2ludHM9bmV3IE1hcCgpO2NvbnN0IGxvYWRlZFNjcmlwdHM9bmV3IE1hcCgpO2NvbnN0IHN0eWxlU2hlZXRzPW5ldyBNYXAoKTtjb25zdCByb3V0ZXM9bmV3IE1hcCgpO2Z1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpe2xldCBwcm9tPWxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7aWYocHJvbSl7cmV0dXJuIHByb207fS8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKTt9bG9hZGVkU2NyaXB0cy5zZXQoc3JjLHByb209YXBwZW5kU2NyaXB0KHNyYykpO3JldHVybiBwcm9tO31mdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZil7bGV0IHByb209c3R5bGVTaGVldHMuZ2V0KGhyZWYpO2lmKHByb20pe3JldHVybiBwcm9tO31zdHlsZVNoZWV0cy5zZXQoaHJlZixwcm9tPWZldGNoKGhyZWYpLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7fXJldHVybiByZXMudGV4dCgpLnRoZW4odGV4dD0+KHtocmVmOmhyZWYsY29udGVudDp0ZXh0fSkpO30pLmNhdGNoKGVycj0+e3Rocm93IG1hcmtBc3NldEVycm9yKGVycik7fSkpO3JldHVybiBwcm9tO31yZXR1cm57d2hlbkVudHJ5cG9pbnQocm91dGUpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLGVudHJ5cG9pbnRzKTt9LG9uRW50cnlwb2ludChyb3V0ZSxleGVjdXRlKXtQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbihmbj0+Zm4oKSkudGhlbihleHBvcnRzPT4oe2NvbXBvbmVudDpleHBvcnRzJiZleHBvcnRzLmRlZmF1bHR8fGV4cG9ydHMsZXhwb3J0czpleHBvcnRzfSksZXJyPT4oe2Vycm9yOmVycn0pKS50aGVuKGlucHV0PT57Y29uc3Qgb2xkPWVudHJ5cG9pbnRzLmdldChyb3V0ZSk7ZW50cnlwb2ludHMuc2V0KHJvdXRlLGlucHV0KTtpZihvbGQmJidyZXNvbHZlJ2luIG9sZClvbGQucmVzb2x2ZShpbnB1dCk7fSk7fSxsb2FkUm91dGUocm91dGUscHJlZmV0Y2gpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLHJvdXRlcywoKT0+e3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4oKHtzY3JpcHRzLGNzc30pPT57cmV0dXJuIFByb21pc2UuYWxsKFtlbnRyeXBvaW50cy5oYXMocm91dGUpP1tdOlByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSldKTt9KS50aGVuKHJlcz0+e3JldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKGVudHJ5cG9pbnQ9Pih7ZW50cnlwb2ludCxzdHlsZXM6cmVzWzFdfSkpO30pLE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoe2VudHJ5cG9pbnQsc3R5bGVzfSk9Pntjb25zdCByZXM9T2JqZWN0LmFzc2lnbih7c3R5bGVzOnN0eWxlc30sZW50cnlwb2ludCk7cmV0dXJuJ2Vycm9yJ2luIGVudHJ5cG9pbnQ/ZW50cnlwb2ludDpyZXM7fSkuY2F0Y2goZXJyPT57aWYocHJlZmV0Y2gpey8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxudGhyb3cgZXJyO31yZXR1cm57ZXJyb3I6ZXJyfTt9KTt9KTt9LHByZWZldGNoKHJvdXRlKXsvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4vLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG5sZXQgY247aWYoY249bmF2aWdhdG9yLmNvbm5lY3Rpb24pey8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuaWYoY24uc2F2ZURhdGF8fC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSlyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fXJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKG91dHB1dD0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2g/b3V0cHV0LnNjcmlwdHMubWFwKHNjcmlwdD0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCdzY3JpcHQnKSk6W10pKS50aGVuKCgpPT57KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLHRydWUpLmNhdGNoKCgpPT57fSkpO30pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4oKT0+e30pO319O312YXIgX2RlZmF1bHQ9Y3JlYXRlUm91dGVMb2FkZXI7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi9jb25zdCBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnLCdsb2NhbGUnLCdsb2NhbGVzJywnZGVmYXVsdExvY2FsZScsJ2lzUmVhZHknLCdpc1ByZXZpZXcnLCdpc0xvY2FsZURvbWFpbicsJ2RvbWFpbkxvY2FsZXMnXTtjb25zdCByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107Y29uc3QgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe2NvbnN0IHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPSguLi5hcmdzKT0+e2NvbnN0IHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsKC4uLmFyZ3MpPT57Y29uc3QgZXZlbnRGaWVsZD1gb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7Y29uc3QgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe2NvbnN0IG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIGJlIHVzZWQgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5jb25zdCBjcmVhdGVSb3V0ZXI9KC4uLmFyZ3MpPT57c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe2NvbnN0IF9yb3V0ZXI9cm91dGVyO2NvbnN0IGluc3RhbmNlPXt9O2Zvcihjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pP1tdOnt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT0oLi4uYXJncyk9PntyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlSW50ZXJzZWN0aW9uPXVzZUludGVyc2VjdGlvbjt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO2NvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciE9PSd1bmRlZmluZWQnO2Z1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7cm9vdE1hcmdpbixkaXNhYmxlZH0pe2NvbnN0IGlzRGlzYWJsZWQ9ZGlzYWJsZWR8fCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtjb25zdCB1bm9ic2VydmU9KDAsX3JlYWN0LnVzZVJlZikoKTtjb25zdFt2aXNpYmxlLHNldFZpc2libGVdPSgwLF9yZWFjdC51c2VTdGF0ZSkoZmFsc2UpO2NvbnN0IHNldFJlZj0oMCxfcmVhY3QudXNlQ2FsbGJhY2spKGVsPT57aWYodW5vYnNlcnZlLmN1cnJlbnQpe3Vub2JzZXJ2ZS5jdXJyZW50KCk7dW5vYnNlcnZlLmN1cnJlbnQ9dW5kZWZpbmVkO31pZihpc0Rpc2FibGVkfHx2aXNpYmxlKXJldHVybjtpZihlbCYmZWwudGFnTmFtZSl7dW5vYnNlcnZlLmN1cnJlbnQ9b2JzZXJ2ZShlbCxpc1Zpc2libGU9PmlzVmlzaWJsZSYmc2V0VmlzaWJsZShpc1Zpc2libGUpLHtyb290TWFyZ2lufSk7fX0sW2lzRGlzYWJsZWQscm9vdE1hcmdpbix2aXNpYmxlXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9PntpZighaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe2lmKCF2aXNpYmxlKXtjb25zdCBpZGxlQ2FsbGJhY2s9KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFZpc2libGUodHJ1ZSkpO3JldHVybigpPT4oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5jYW5jZWxJZGxlQ2FsbGJhY2spKGlkbGVDYWxsYmFjayk7fX19LFt2aXNpYmxlXSk7cmV0dXJuW3NldFJlZix2aXNpYmxlXTt9ZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LGNhbGxiYWNrLG9wdGlvbnMpe2NvbnN0e2lkLG9ic2VydmVyLGVsZW1lbnRzfT1jcmVhdGVPYnNlcnZlcihvcHRpb25zKTtlbGVtZW50cy5zZXQoZWxlbWVudCxjYWxsYmFjayk7b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtyZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCl7ZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO29ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTsvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG5pZihlbGVtZW50cy5zaXplPT09MCl7b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO29ic2VydmVycy5kZWxldGUoaWQpO319O31jb25zdCBvYnNlcnZlcnM9bmV3IE1hcCgpO2Z1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpe2NvbnN0IGlkPW9wdGlvbnMucm9vdE1hcmdpbnx8Jyc7bGV0IGluc3RhbmNlPW9ic2VydmVycy5nZXQoaWQpO2lmKGluc3RhbmNlKXtyZXR1cm4gaW5zdGFuY2U7fWNvbnN0IGVsZW1lbnRzPW5ldyBNYXAoKTtjb25zdCBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2NvbnN0IGNhbGxiYWNrPWVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO2NvbnN0IGlzVmlzaWJsZT1lbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MDtpZihjYWxsYmFjayYmaXNWaXNpYmxlKXtjYWxsYmFjayhpc1Zpc2libGUpO319KTt9LG9wdGlvbnMpO29ic2VydmVycy5zZXQoaWQsaW5zdGFuY2U9e2lkLG9ic2VydmVyLGVsZW1lbnRzfSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPWB3aXRoUm91dGVyKCR7bmFtZX0pYDt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplTG9jYWxlUGF0aD1ub3JtYWxpemVMb2NhbGVQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUsbG9jYWxlcyl7bGV0IGRldGVjdGVkTG9jYWxlOy8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuY29uc3QgcGF0aG5hbWVQYXJ0cz1wYXRobmFtZS5zcGxpdCgnLycpOyhsb2NhbGVzfHxbXSkuc29tZShsb2NhbGU9PntpZihwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCk9PT1sb2NhbGUudG9Mb3dlckNhc2UoKSl7ZGV0ZWN0ZWRMb2NhbGU9bG9jYWxlO3BhdGhuYW1lUGFydHMuc3BsaWNlKDEsMSk7cGF0aG5hbWU9cGF0aG5hbWVQYXJ0cy5qb2luKCcvJyl8fCcvJztyZXR1cm4gdHJ1ZTt9cmV0dXJuIGZhbHNlO30pO3JldHVybntwYXRobmFtZSxkZXRlY3RlZExvY2FsZX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1taXR0Oy8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qLyAvLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuZnVuY3Rpb24gbWl0dCgpe2NvbnN0IGFsbD1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybntvbih0eXBlLGhhbmRsZXIpezsoYWxsW3R5cGVdfHwoYWxsW3R5cGVdPVtdKSkucHVzaChoYW5kbGVyKTt9LG9mZih0eXBlLGhhbmRsZXIpe2lmKGFsbFt0eXBlXSl7YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKT4+PjAsMSk7fX0sZW1pdCh0eXBlLC4uLmV2dHMpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbjsoYWxsW3R5cGVdfHxbXSkuc2xpY2UoKS5tYXAoaGFuZGxlcj0+e2hhbmRsZXIoLi4uZXZ0cyk7fSk7fX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWl0dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldERvbWFpbkxvY2FsZT1nZXREb21haW5Mb2NhbGU7ZXhwb3J0cy5hZGRMb2NhbGU9YWRkTG9jYWxlO2V4cG9ydHMuZGVsTG9jYWxlPWRlbExvY2FsZTtleHBvcnRzLmhhc0Jhc2VQYXRoPWhhc0Jhc2VQYXRoO2V4cG9ydHMuYWRkQmFzZVBhdGg9YWRkQmFzZVBhdGg7ZXhwb3J0cy5kZWxCYXNlUGF0aD1kZWxCYXNlUGF0aDtleHBvcnRzLmlzTG9jYWxVUkw9aXNMb2NhbFVSTDtleHBvcnRzLmludGVycG9sYXRlQXM9aW50ZXJwb2xhdGVBcztleHBvcnRzLnJlc29sdmVIcmVmPXJlc29sdmVIcmVmO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO3ZhciBfcm91dGVMb2FkZXI9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7dmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoPXJlcXVpcmUoXCIuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO3ZhciBfbm9ybWFsaXplTG9jYWxlUGF0aD1yZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7dmFyIF9taXR0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL3V0aWxzXCIpO3ZhciBfaXNEeW5hbWljPXJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7dmFyIF9wYXJzZVJlbGF0aXZlVXJsPXJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO3ZhciBfcmVzb2x2ZVJld3JpdGVzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7dmFyIF9yb3V0ZU1hdGNoZXI9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTt2YXIgX3JvdXRlUmVnZXg9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O30vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2RldGVjdERvbWFpbkxvY2FsZT1yZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO31jb25zdCBiYXNlUGF0aD1wcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIfHwnJztmdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCl7cmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSx7Y2FuY2VsbGVkOnRydWV9KTt9ZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLHByZWZpeCl7cmV0dXJuIHByZWZpeCYmcGF0aC5zdGFydHNXaXRoKCcvJyk/cGF0aD09PScvJz8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkocHJlZml4KTpgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCk9PT0nLyc/cGF0aC5zdWJzdHJpbmcoMSk6cGF0aH1gOnBhdGg7fWZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLGxvY2FsZSxsb2NhbGVzLGRvbWFpbkxvY2FsZXMpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2xvY2FsZT1sb2NhbGV8fCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGgsbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLGxvY2FsZSk7aWYoZGV0ZWN0ZWREb21haW4pe3JldHVybmBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRofHwnJ30ke2xvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke2xvY2FsZX1gfSR7cGF0aH1gO31yZXR1cm4gZmFsc2U7fXJldHVybiBmYWxzZTt9ZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsbG9jYWxlLGRlZmF1bHRMb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJmxvY2FsZSE9PWRlZmF1bHRMb2NhbGUmJiFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKSYmcGF0aExvd2VyIT09Jy8nK2xvY2FsZUxvd2VyP2FkZFBhdGhQcmVmaXgocGF0aCwnLycrbG9jYWxlKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsbG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiYocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJyl8fHBhdGhMb3dlcj09PScvJytsb2NhbGVMb3dlcik/KHBhdGhuYW1lLmxlbmd0aD09PWxvY2FsZS5sZW5ndGgrMT8nLyc6JycpK3BhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGgrMSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKXtjb25zdCBxdWVyeUluZGV4PXBhdGguaW5kZXhPZignPycpO2NvbnN0IGhhc2hJbmRleD1wYXRoLmluZGV4T2YoJyMnKTtpZihxdWVyeUluZGV4Pi0xfHxoYXNoSW5kZXg+LTEpe3BhdGg9cGF0aC5zdWJzdHJpbmcoMCxxdWVyeUluZGV4Pi0xP3F1ZXJ5SW5kZXg6aGFzaEluZGV4KTt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO3JldHVybiBwYXRoPT09YmFzZVBhdGh8fHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCsnLycpO31mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKXsvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xucmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCxiYXNlUGF0aCk7fWZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO2lmKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSlwYXRoPWAvJHtwYXRofWA7cmV0dXJuIHBhdGg7fS8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL2Z1bmN0aW9uIGlzTG9jYWxVUkwodXJsKXsvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG5pZih1cmwuc3RhcnRzV2l0aCgnLycpfHx1cmwuc3RhcnRzV2l0aCgnIycpfHx1cmwuc3RhcnRzV2l0aCgnPycpKXJldHVybiB0cnVlO3RyeXsvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbmNvbnN0IGxvY2F0aW9uT3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCByZXNvbHZlZD1uZXcgVVJMKHVybCxsb2NhdGlvbk9yaWdpbik7cmV0dXJuIHJlc29sdmVkLm9yaWdpbj09PWxvY2F0aW9uT3JpZ2luJiZoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7fWNhdGNoKF8pe3JldHVybiBmYWxzZTt9fWZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSl7bGV0IGludGVycG9sYXRlZFJvdXRlPScnO2NvbnN0IGR5bmFtaWNSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3QgZHluYW1pY0dyb3Vwcz1keW5hbWljUmVnZXguZ3JvdXBzO2NvbnN0IGR5bmFtaWNNYXRjaGVzPS8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbihhc1BhdGhuYW1lIT09cm91dGU/KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSk6JycpfHwvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbi8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbnF1ZXJ5O2ludGVycG9sYXRlZFJvdXRlPXJvdXRlO2NvbnN0IHBhcmFtcz1PYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtpZighcGFyYW1zLmV2ZXJ5KHBhcmFtPT57bGV0IHZhbHVlPWR5bmFtaWNNYXRjaGVzW3BhcmFtXXx8Jyc7Y29uc3R7cmVwZWF0LG9wdGlvbmFsfT1keW5hbWljR3JvdXBzW3BhcmFtXTsvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbi8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbmxldCByZXBsYWNlZD1gWyR7cmVwZWF0PycuLi4nOicnfSR7cGFyYW19XWA7aWYob3B0aW9uYWwpe3JlcGxhY2VkPWAkeyF2YWx1ZT8nLyc6Jyd9WyR7cmVwbGFjZWR9XWA7fWlmKHJlcGVhdCYmIUFycmF5LmlzQXJyYXkodmFsdWUpKXZhbHVlPVt2YWx1ZV07cmV0dXJuKG9wdGlvbmFsfHxwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykmJigvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbmludGVycG9sYXRlZFJvdXRlPWludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQscmVwZWF0P3ZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4vLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4vLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG5zZWdtZW50PT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudCkpLmpvaW4oJy8nKTplbmNvZGVVUklDb21wb25lbnQodmFsdWUpKXx8Jy8nKTt9KSl7aW50ZXJwb2xhdGVkUm91dGU9Jyc7Ly8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbi8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4vLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxufXJldHVybntwYXJhbXMscmVzdWx0OmludGVycG9sYXRlZFJvdXRlfTt9ZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl7Y29uc3QgZmlsdGVyZWRRdWVyeT17fTtPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaChrZXk9PntpZighcGFyYW1zLmluY2x1ZGVzKGtleSkpe2ZpbHRlcmVkUXVlcnlba2V5XT1xdWVyeVtrZXldO319KTtyZXR1cm4gZmlsdGVyZWRRdWVyeTt9LyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL2Z1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlcixocmVmLHJlc29sdmVBcyl7Ly8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbmxldCBiYXNlO2NvbnN0IHVybEFzU3RyaW5nPXR5cGVvZiBocmVmPT09J3N0cmluZyc/aHJlZjooMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKGhyZWYpO3RyeXtiYXNlPW5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpP3JvdXRlci5hc1BhdGg6cm91dGVyLnBhdGhuYW1lLCdodHRwOi8vbicpO31jYXRjaChfKXsvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuYmFzZT1uZXcgVVJMKCcvJywnaHR0cDovL24nKTt9Ly8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbmlmKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO310cnl7Y29uc3QgZmluYWxVcmw9bmV3IFVSTCh1cmxBc1N0cmluZyxiYXNlKTtmaW5hbFVybC5wYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkoZmluYWxVcmwucGF0aG5hbWUpO2xldCBpbnRlcnBvbGF0ZWRBcz0nJztpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShmaW5hbFVybC5wYXRobmFtZSkmJmZpbmFsVXJsLnNlYXJjaFBhcmFtcyYmcmVzb2x2ZUFzKXtjb25zdCBxdWVyeT0oMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtjb25zdHtyZXN1bHQscGFyYW1zfT1pbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLGZpbmFsVXJsLnBhdGhuYW1lLHF1ZXJ5KTtpZihyZXN1bHQpe2ludGVycG9sYXRlZEFzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOnJlc3VsdCxoYXNoOmZpbmFsVXJsLmhhc2gscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl9KTt9fS8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG5jb25zdCByZXNvbHZlZEhyZWY9ZmluYWxVcmwub3JpZ2luPT09YmFzZS5vcmlnaW4/ZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKTpmaW5hbFVybC5ocmVmO3JldHVybiByZXNvbHZlQXM/W3Jlc29sdmVkSHJlZixpbnRlcnBvbGF0ZWRBc3x8cmVzb2x2ZWRIcmVmXTpyZXNvbHZlZEhyZWY7fWNhdGNoKF8pe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9fWZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCl7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtyZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKT91cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpOnVybDt9ZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcix1cmwsYXMpey8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbmxldFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109cmVzb2x2ZUhyZWYocm91dGVyLHVybCx0cnVlKTtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IGhyZWZIYWRPcmlnaW49cmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtjb25zdCBhc0hhZE9yaWdpbj1yZXNvbHZlZEFzJiZyZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtyZXNvbHZlZEhyZWY9c3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtyZXNvbHZlZEFzPXJlc29sdmVkQXM/c3RyaXBPcmlnaW4ocmVzb2x2ZWRBcyk6cmVzb2x2ZWRBcztjb25zdCBwcmVwYXJlZFVybD1ocmVmSGFkT3JpZ2luP3Jlc29sdmVkSHJlZjphZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO2NvbnN0IHByZXBhcmVkQXM9YXM/c3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLGFzKSk6cmVzb2x2ZWRBc3x8cmVzb2x2ZWRIcmVmO3JldHVybnt1cmw6cHJlcGFyZWRVcmwsYXM6YXNIYWRPcmlnaW4/cHJlcGFyZWRBczphZGRCYXNlUGF0aChwcmVwYXJlZEFzKX07fWZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpe2NvbnN0IGNsZWFuUGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKCgwLF9kZW5vcm1hbGl6ZVBhZ2VQYXRoLmRlbm9ybWFsaXplUGFnZVBhdGgpKHBhdGhuYW1lKSk7aWYoY2xlYW5QYXRobmFtZT09PScvNDA0J3x8Y2xlYW5QYXRobmFtZT09PScvX2Vycm9yJyl7cmV0dXJuIHBhdGhuYW1lO30vLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG5pZighcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbnBhZ2VzLnNvbWUocGFnZT0+e2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHBhZ2UpJiYoMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKXtwYXRobmFtZT1wYWdlO3JldHVybiB0cnVlO319KTt9cmV0dXJuKDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTt9Y29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb249cHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiYmdHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnJiYnc2Nyb2xsUmVzdG9yYXRpb24naW4gd2luZG93Lmhpc3RvcnkmJiEhZnVuY3Rpb24oKXt0cnl7bGV0IHY9J19fbmV4dCc7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xucmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odix2KSxzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLHRydWU7fWNhdGNoKG4pe319KCk7Y29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EPVN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7ZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsYXR0ZW1wdHMpe3JldHVybiBmZXRjaCh1cmwsey8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4vL1xuLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuLy8gPiBvcHRpb24uXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4vL1xuLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbi8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2Bcbi8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuY3JlZGVudGlhbHM6J3NhbWUtb3JpZ2luJ30pLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7aWYoYXR0ZW1wdHM+MSYmcmVzLnN0YXR1cz49NTAwKXtyZXR1cm4gZmV0Y2hSZXRyeSh1cmwsYXR0ZW1wdHMtMSk7fWlmKHJlcy5zdGF0dXM9PT00MDQpe3JldHVybiByZXMuanNvbigpLnRoZW4oZGF0YT0+e2lmKGRhdGEubm90Rm91bmQpe3JldHVybntub3RGb3VuZDpTU0dfREFUQV9OT1RfRk9VTkR9O310aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO30pO310aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO31yZXR1cm4gcmVzLmpzb24oKTt9KTt9ZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZixpc1NlcnZlclJlbmRlcil7cmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXI/MzoxKS5jYXRjaChlcnI9PnsvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbi8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4vLyBsb29wLlxuaWYoIWlzU2VydmVyUmVuZGVyKXsoMCxfcm91dGVMb2FkZXIubWFya0Fzc2V0RXJyb3IpKGVycik7fXRocm93IGVycjt9KTt9Y2xhc3MgUm91dGVyey8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqLyAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbmNvbnN0cnVjdG9yKF9wYXRobmFtZSxfcXVlcnksX2FzLHtpbml0aWFsUHJvcHMscGFnZUxvYWRlcixBcHAsd3JhcEFwcCxDb21wb25lbnQsZXJyLHN1YnNjcmlwdGlvbixpc0ZhbGxiYWNrLGxvY2FsZSxsb2NhbGVzLGRlZmF1bHRMb2NhbGUsZG9tYWluTG9jYWxlcyxpc1ByZXZpZXd9KXt0aGlzLnJvdXRlPXZvaWQgMDt0aGlzLnBhdGhuYW1lPXZvaWQgMDt0aGlzLnF1ZXJ5PXZvaWQgMDt0aGlzLmFzUGF0aD12b2lkIDA7dGhpcy5iYXNlUGF0aD12b2lkIDA7dGhpcy5jb21wb25lbnRzPXZvaWQgMDt0aGlzLnNkYz17fTt0aGlzLnNkcj17fTt0aGlzLnN1Yj12b2lkIDA7dGhpcy5jbGM9dm9pZCAwO3RoaXMucGFnZUxvYWRlcj12b2lkIDA7dGhpcy5fYnBzPXZvaWQgMDt0aGlzLmV2ZW50cz12b2lkIDA7dGhpcy5fd3JhcEFwcD12b2lkIDA7dGhpcy5pc1Nzcj12b2lkIDA7dGhpcy5pc0ZhbGxiYWNrPXZvaWQgMDt0aGlzLl9pbkZsaWdodFJvdXRlPXZvaWQgMDt0aGlzLl9zaGFsbG93PXZvaWQgMDt0aGlzLmxvY2FsZT12b2lkIDA7dGhpcy5sb2NhbGVzPXZvaWQgMDt0aGlzLmRlZmF1bHRMb2NhbGU9dm9pZCAwO3RoaXMuZG9tYWluTG9jYWxlcz12b2lkIDA7dGhpcy5pc1JlYWR5PXZvaWQgMDt0aGlzLmlzUHJldmlldz12b2lkIDA7dGhpcy5pc0xvY2FsZURvbWFpbj12b2lkIDA7dGhpcy5faWR4PTA7dGhpcy5vblBvcFN0YXRlPWU9Pntjb25zdCBzdGF0ZT1lLnN0YXRlO2lmKCFzdGF0ZSl7Ly8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4vLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbi8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbi8vXG4vLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4vLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4vLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbmNvbnN0e3BhdGhuYW1lLHF1ZXJ5fT10aGlzO3RoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgocGF0aG5hbWUpLHF1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSk7cmV0dXJuO31pZighc3RhdGUuX19OKXtyZXR1cm47fWxldCBmb3JjZWRTY3JvbGw7Y29uc3R7dXJsLGFzLG9wdGlvbnMsaWR4fT1zdGF0ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7aWYodGhpcy5faWR4IT09aWR4KXsvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycrdGhpcy5faWR4LEpTT04uc3RyaW5naWZ5KHt4OnNlbGYucGFnZVhPZmZzZXQseTpzZWxmLnBhZ2VZT2Zmc2V0fSkpO31jYXRjaChfdW51c2VkKXt9Ly8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e2NvbnN0IHY9c2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK2lkeCk7Zm9yY2VkU2Nyb2xsPUpTT04ucGFyc2Uodik7fWNhdGNoKF91bnVzZWQyKXtmb3JjZWRTY3JvbGw9e3g6MCx5OjB9O319fX10aGlzLl9pZHg9aWR4O2NvbnN0e3BhdGhuYW1lfT0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpOy8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG5pZih0aGlzLmlzU3NyJiZhcz09PXRoaXMuYXNQYXRoJiZwYXRobmFtZT09PXRoaXMucGF0aG5hbWUpe3JldHVybjt9Ly8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbmlmKHRoaXMuX2JwcyYmIXRoaXMuX2JwcyhzdGF0ZSkpe3JldHVybjt9dGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsdXJsLGFzLE9iamVjdC5hc3NpZ24oe30sb3B0aW9ucyx7c2hhbGxvdzpvcHRpb25zLnNoYWxsb3cmJnRoaXMuX3NoYWxsb3csbG9jYWxlOm9wdGlvbnMubG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGV9KSxmb3JjZWRTY3JvbGwpO307Ly8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG50aGlzLnJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShfcGF0aG5hbWUpOy8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxudGhpcy5jb21wb25lbnRzPXt9Oy8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3Jcbi8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4vLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG5pZihfcGF0aG5hbWUhPT0nL19lcnJvcicpe3RoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXT17Q29tcG9uZW50LGluaXRpYWw6dHJ1ZSxwcm9wczppbml0aWFsUHJvcHMsZXJyLF9fTl9TU0c6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTRyxfX05fU1NQOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU1B9O310aGlzLmNvbXBvbmVudHNbJy9fYXBwJ109e0NvbXBvbmVudDpBcHAsc3R5bGVTaGVldHM6Wy8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9dfTsvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbnRoaXMuZXZlbnRzPVJvdXRlci5ldmVudHM7dGhpcy5wYWdlTG9hZGVyPXBhZ2VMb2FkZXI7dGhpcy5wYXRobmFtZT1fcGF0aG5hbWU7dGhpcy5xdWVyeT1fcXVlcnk7Ly8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbi8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG5jb25zdCBhdXRvRXhwb3J0RHluYW1pYz0oMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShfcGF0aG5hbWUpJiZzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDt0aGlzLmFzUGF0aD1hdXRvRXhwb3J0RHluYW1pYz9fcGF0aG5hbWU6X2FzO3RoaXMuYmFzZVBhdGg9YmFzZVBhdGg7dGhpcy5zdWI9c3Vic2NyaXB0aW9uO3RoaXMuY2xjPW51bGw7dGhpcy5fd3JhcEFwcD13cmFwQXBwOy8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbi8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG50aGlzLmlzU3NyPXRydWU7dGhpcy5pc0ZhbGxiYWNrPWlzRmFsbGJhY2s7dGhpcy5pc1JlYWR5PSEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwfHxzZWxmLl9fTkVYVF9EQVRBX18uZ2lwfHwhYXV0b0V4cG9ydER5bmFtaWMmJiFzZWxmLmxvY2F0aW9uLnNlYXJjaCYmIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO3RoaXMuaXNQcmV2aWV3PSEhaXNQcmV2aWV3O3RoaXMuaXNMb2NhbGVEb21haW49ZmFsc2U7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9bG9jYWxlO3RoaXMubG9jYWxlcz1sb2NhbGVzO3RoaXMuZGVmYXVsdExvY2FsZT1kZWZhdWx0TG9jYWxlO3RoaXMuZG9tYWluTG9jYWxlcz1kb21haW5Mb2NhbGVzO3RoaXMuaXNMb2NhbGVEb21haW49ISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyxzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTt9aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXsvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbmlmKF9hcy5zdWJzdHIoMCwyKSE9PScvLycpey8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4vLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbmNvbnN0IG9wdGlvbnM9e2xvY2FsZX07b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9X2FzIT09X3BhdGhuYW1lO3RoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgoX3BhdGhuYW1lKSxxdWVyeTpfcXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpLG9wdGlvbnMpO313aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLHRoaXMub25Qb3BTdGF0ZSk7Ly8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbi8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuaWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3dpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uPSdtYW51YWwnO319fX1yZWxvYWQoKXt3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7fS8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovYmFjaygpe3dpbmRvdy5oaXN0b3J5LmJhY2soKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3B1c2godXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pey8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbmlmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt0cnl7Ly8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycrdGhpcy5faWR4LEpTT04uc3RyaW5naWZ5KHt4OnNlbGYucGFnZVhPZmZzZXQseTpzZWxmLnBhZ2VZT2Zmc2V0fSkpO31jYXRjaChfdW51c2VkMyl7fX19Oyh7dXJsLGFzfT1wcmVwYXJlVXJsQXModGhpcyx1cmwsYXMpKTtyZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsdXJsLGFzLG9wdGlvbnMpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcmVwbGFjZSh1cmwsYXMsb3B0aW9ucz17fSl7Oyh7dXJsLGFzfT1wcmVwYXJlVXJsQXModGhpcyx1cmwsYXMpKTtyZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsdXJsLGFzLG9wdGlvbnMpO31hc3luYyBjaGFuZ2UobWV0aG9kLHVybCxhcyxvcHRpb25zLGZvcmNlZFNjcm9sbCl7aWYoIWlzTG9jYWxVUkwodXJsKSl7d2luZG93LmxvY2F0aW9uLmhyZWY9dXJsO3JldHVybiBmYWxzZTt9Y29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWY9dXJsPT09YXN8fG9wdGlvbnMuX2h8fG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmOy8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG5pZihvcHRpb25zLl9oKXt0aGlzLmlzUmVhZHk9dHJ1ZTt9bGV0IGxvY2FsZUNoYW5nZT1vcHRpb25zLmxvY2FsZSE9PXRoaXMubG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPW9wdGlvbnMubG9jYWxlPT09ZmFsc2U/dGhpcy5kZWZhdWx0TG9jYWxlOm9wdGlvbnMubG9jYWxlfHx0aGlzLmxvY2FsZTtpZih0eXBlb2Ygb3B0aW9ucy5sb2NhbGU9PT0ndW5kZWZpbmVkJyl7b3B0aW9ucy5sb2NhbGU9dGhpcy5sb2NhbGU7fWNvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtpZihsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKXt0aGlzLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO3BhcnNlZEFzLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt1cmw9YWRkQmFzZVBhdGgoKDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkoaGFzQmFzZVBhdGgodXJsKT9kZWxCYXNlUGF0aCh1cmwpOnVybCx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTt9bGV0IGRpZE5hdmlnYXRlPWZhbHNlOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt2YXIgX3RoaXMkbG9jYWxlczsvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG5pZighKChfdGhpcyRsb2NhbGVzPXRoaXMubG9jYWxlcykhPW51bGwmJl90aGlzJGxvY2FsZXMuaW5jbHVkZXModGhpcy5sb2NhbGUpKSl7cGFyc2VkQXMucGF0aG5hbWU9YWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlKTt3aW5kb3cubG9jYXRpb24uaHJlZj0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTsvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbmRpZE5hdmlnYXRlPXRydWU7fX1jb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLHVuZGVmaW5lZCx0aGlzLmxvY2FsZSk7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpey8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4vLyBjb3JyZWN0IGRvbWFpblxuaWYoIWRpZE5hdmlnYXRlJiZkZXRlY3RlZERvbWFpbiYmdGhpcy5pc0xvY2FsZURvbWFpbiYmc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSE9PWRldGVjdGVkRG9tYWluLmRvbWFpbil7Y29uc3QgYXNOb0Jhc2VQYXRoPWRlbEJhc2VQYXRoKGFzKTt3aW5kb3cubG9jYXRpb24uaHJlZj1gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGg9PT0nLyc/Jyc6YXNOb0Jhc2VQYXRofWB8fCcvJyl9YDsvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbmRpZE5hdmlnYXRlPXRydWU7fX1pZihkaWROYXZpZ2F0ZSl7cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fX1pZighb3B0aW9ucy5faCl7dGhpcy5pc1Nzcj1mYWxzZTt9Ly8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuaWYoX3V0aWxzLlNUKXtwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO31jb25zdHtzaGFsbG93PWZhbHNlfT1vcHRpb25zO2NvbnN0IHJvdXRlUHJvcHM9e3NoYWxsb3d9O2lmKHRoaXMuX2luRmxpZ2h0Um91dGUpe3RoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUscm91dGVQcm9wcyk7fWFzPWFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLG9wdGlvbnMubG9jYWxlLHRoaXMuZGVmYXVsdExvY2FsZSkpO2NvbnN0IGNsZWFuZWRBcz1kZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyx0aGlzLmxvY2FsZSk7dGhpcy5faW5GbGlnaHRSb3V0ZT1hczsvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG5pZighb3B0aW9ucy5faCYmdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSl7dGhpcy5hc1BhdGg9Y2xlYW5lZEFzO1JvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTsvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xudGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO3RoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7dGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLG51bGwpO1JvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZSxxdWVyeX09cGFyc2VkOy8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbi8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuLy8gd2hlbiByZXdyaXR0ZW4gdG9cbmxldCBwYWdlcyxyZXdyaXRlczt0cnl7cGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTt9Y2F0Y2goZXJyKXsvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3Rcbi8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9Ly8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2Vcbi8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbi8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbmlmKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykmJiFsb2NhbGVDaGFuZ2Upe21ldGhvZD0ncmVwbGFjZVN0YXRlJzt9Ly8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbi8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbmxldCByZXNvbHZlZEFzPWFzOy8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbi8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbi8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG5wYXRobmFtZT1wYXRobmFtZT8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoZGVsQmFzZVBhdGgocGF0aG5hbWUpKTpwYXRobmFtZTtpZihzaG91bGRSZXNvbHZlSHJlZiYmcGF0aG5hbWUhPT0nL19lcnJvcicpeztvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj10cnVlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9cmV3cml0ZXNSZXN1bHQuYXNQYXRoO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX19Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTtpZighaXNMb2NhbFVSTChhcykpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgK2BcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO313aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fXJlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLHRoaXMubG9jYWxlKTtpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShyb3V0ZSkpe2NvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHJlc29sdmVkQXMpO2NvbnN0IGFzUGF0aG5hbWU9cGFyc2VkQXMucGF0aG5hbWU7Y29uc3Qgcm91dGVSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3Qgcm91dGVNYXRjaD0oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikocm91dGVSZWdleCkoYXNQYXRobmFtZSk7Y29uc3Qgc2hvdWxkSW50ZXJwb2xhdGU9cm91dGU9PT1hc1BhdGhuYW1lO2NvbnN0IGludGVycG9sYXRlZEFzPXNob3VsZEludGVycG9sYXRlP2ludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSk6e307aWYoIXJvdXRlTWF0Y2h8fHNob3VsZEludGVycG9sYXRlJiYhaW50ZXJwb2xhdGVkQXMucmVzdWx0KXtjb25zdCBtaXNzaW5nUGFyYW1zPU9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW09PiFxdWVyeVtwYXJhbV0pO2lmKG1pc3NpbmdQYXJhbXMubGVuZ3RoPjApe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGU/YEludGVycG9sYXRpbmcgaHJlZmA6YE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCtgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTt9dGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZT9gVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgOmBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApK2BSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGU/J2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnOidpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7fX1lbHNlIGlmKHNob3VsZEludGVycG9sYXRlKXthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKE9iamVjdC5hc3NpZ24oe30scGFyc2VkQXMse3BhdGhuYW1lOmludGVycG9sYXRlZEFzLnJlc3VsdCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksaW50ZXJwb2xhdGVkQXMucGFyYW1zKX0pKTt9ZWxzZXsvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuT2JqZWN0LmFzc2lnbihxdWVyeSxyb3V0ZU1hdGNoKTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7dHJ5e3ZhciBfc2VsZiRfX05FWFRfREFUQV9fJHAsX3NlbGYkX19ORVhUX0RBVEFfXyRwMixfb3B0aW9ucyRzY3JvbGw7bGV0IHJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpO2xldHtlcnJvcixwcm9wcyxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbzsvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbmlmKChfX05fU1NHfHxfX05fU1NQKSYmcHJvcHMpe2lmKHByb3BzLnBhZ2VQcm9wcyYmcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCl7Y29uc3QgZGVzdGluYXRpb249cHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDsvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuLy8gaXQncyBub3RcbmlmKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcGFyc2VkSHJlZj0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShkZXN0aW5hdGlvbik7cGFyc2VkSHJlZi5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUscGFnZXMpO2NvbnN0e3VybDpuZXdVcmwsYXM6bmV3QXN9PXByZXBhcmVVcmxBcyh0aGlzLGRlc3RpbmF0aW9uLGRlc3RpbmF0aW9uKTtyZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLG5ld1VybCxuZXdBcyxvcHRpb25zKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9ZGVzdGluYXRpb247cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fXRoaXMuaXNQcmV2aWV3PSEhcHJvcHMuX19OX1BSRVZJRVc7Ly8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuaWYocHJvcHMubm90Rm91bmQ9PT1TU0dfREFUQV9OT1RfRk9VTkQpe2xldCBub3RGb3VuZFJvdXRlO3RyeXthd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7bm90Rm91bmRSb3V0ZT0nLzQwNCc7fWNhdGNoKF8pe25vdEZvdW5kUm91dGU9Jy9fZXJyb3InO31yb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSxub3RGb3VuZFJvdXRlLHF1ZXJ5LGFzLHJlc29sdmVkQXMse3NoYWxsb3c6ZmFsc2V9KTt9fVJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsYXMscm91dGVQcm9wcyk7dGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBhcHBDb21wPXRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7d2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZD1hcHBDb21wLmdldEluaXRpYWxQcm9wcz09PWFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyYmIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO31pZihvcHRpb25zLl9oJiZwYXRobmFtZT09PScvX2Vycm9yJyYmKChfc2VsZiRfX05FWFRfREFUQV9fJHA9c2VsZi5fX05FWFRfREFUQV9fLnByb3BzKT09bnVsbD92b2lkIDA6KF9zZWxmJF9fTkVYVF9EQVRBX18kcDI9X3NlbGYkX19ORVhUX0RBVEFfXyRwLnBhZ2VQcm9wcyk9PW51bGw/dm9pZCAwOl9zZWxmJF9fTkVYVF9EQVRBX18kcDIuc3RhdHVzQ29kZSk9PT01MDAmJnByb3BzIT1udWxsJiZwcm9wcy5wYWdlUHJvcHMpey8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxucHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGU9NTAwO30vLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG5jb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlPW9wdGlvbnMuc2hhbGxvdyYmdGhpcy5yb3V0ZT09PXJvdXRlO2NvbnN0IHNob3VsZFNjcm9sbD0oX29wdGlvbnMkc2Nyb2xsPW9wdGlvbnMuc2Nyb2xsKSE9bnVsbD9fb3B0aW9ucyRzY3JvbGw6IWlzVmFsaWRTaGFsbG93Um91dGU7Y29uc3QgcmVzZXRTY3JvbGw9c2hvdWxkU2Nyb2xsP3t4OjAseTowfTpudWxsO2F3YWl0IHRoaXMuc2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGNsZWFuZWRBcyxyb3V0ZUluZm8sZm9yY2VkU2Nyb2xsIT1udWxsP2ZvcmNlZFNjcm9sbDpyZXNldFNjcm9sbCkuY2F0Y2goZT0+e2lmKGUuY2FuY2VsbGVkKWVycm9yPWVycm9yfHxlO2Vsc2UgdGhyb3cgZTt9KTtpZihlcnJvcil7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnJvcixjbGVhbmVkQXMscm91dGVQcm9wcyk7dGhyb3cgZXJyb3I7fWlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKHRoaXMubG9jYWxlKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZz10aGlzLmxvY2FsZTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWNhdGNoKGVycil7aWYoZXJyLmNhbmNlbGxlZCl7cmV0dXJuIGZhbHNlO310aHJvdyBlcnI7fX1jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZih0eXBlb2Ygd2luZG93Lmhpc3Rvcnk9PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtyZXR1cm47fWlmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdPT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7cmV0dXJuO319aWYobWV0aG9kIT09J3B1c2hTdGF0ZSd8fCgwLF91dGlscy5nZXRVUkwpKCkhPT1hcyl7dGhpcy5fc2hhbGxvdz1vcHRpb25zLnNoYWxsb3c7d2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7dXJsLGFzLG9wdGlvbnMsX19OOnRydWUsaWR4OnRoaXMuX2lkeD1tZXRob2QhPT0ncHVzaFN0YXRlJz90aGlzLl9pZHg6dGhpcy5faWR4KzF9LC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4nJyxhcyk7fX1hc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyxsb2FkRXJyb3JGYWlsKXtpZihlcnIuY2FuY2VsbGVkKXsvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xudGhyb3cgZXJyO31pZigoMCxfcm91dGVMb2FkZXIuaXNBc3NldEVycm9yKShlcnIpfHxsb2FkRXJyb3JGYWlsKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycixhcyxyb3V0ZVByb3BzKTsvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbi8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2Vcbi8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7Ly8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4vLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxudGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO310cnl7bGV0IENvbXBvbmVudDtsZXQgc3R5bGVTaGVldHM7bGV0IHByb3BzO2lmKHR5cGVvZiBDb21wb25lbnQ9PT0ndW5kZWZpbmVkJ3x8dHlwZW9mIHN0eWxlU2hlZXRzPT09J3VuZGVmaW5lZCcpezsoe3BhZ2U6Q29tcG9uZW50LHN0eWxlU2hlZXRzfT1hd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO31jb25zdCByb3V0ZUluZm89e3Byb3BzLENvbXBvbmVudCxzdHlsZVNoZWV0cyxlcnIsZXJyb3I6ZXJyfTtpZighcm91dGVJbmZvLnByb3BzKXt0cnl7cm91dGVJbmZvLnByb3BzPWF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCx7ZXJyLHBhdGhuYW1lLHF1ZXJ5fSk7fWNhdGNoKGdpcEVycil7Y29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxnaXBFcnIpO3JvdXRlSW5mby5wcm9wcz17fTt9fXJldHVybiByb3V0ZUluZm87fWNhdGNoKHJvdXRlSW5mb0Vycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsdHJ1ZSk7fX1hc3luYyBnZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKXt0cnl7Y29uc3QgZXhpc3RpbmdSb3V0ZUluZm89dGhpcy5jb21wb25lbnRzW3JvdXRlXTtpZihyb3V0ZVByb3BzLnNoYWxsb3cmJmV4aXN0aW5nUm91dGVJbmZvJiZ0aGlzLnJvdXRlPT09cm91dGUpe3JldHVybiBleGlzdGluZ1JvdXRlSW5mbzt9Y29uc3QgY2FjaGVkUm91dGVJbmZvPWV4aXN0aW5nUm91dGVJbmZvJiYnaW5pdGlhbCdpbiBleGlzdGluZ1JvdXRlSW5mbz91bmRlZmluZWQ6ZXhpc3RpbmdSb3V0ZUluZm87Y29uc3Qgcm91dGVJbmZvPWNhY2hlZFJvdXRlSW5mbz9jYWNoZWRSb3V0ZUluZm86YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXM9Pih7Q29tcG9uZW50OnJlcy5wYWdlLHN0eWxlU2hlZXRzOnJlcy5zdHlsZVNoZWV0cyxfX05fU1NHOnJlcy5tb2QuX19OX1NTRyxfX05fU1NQOnJlcy5tb2QuX19OX1NTUH0pKTtjb25zdHtDb21wb25lbnQsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0e2lzVmFsaWRFbGVtZW50VHlwZX09cmVxdWlyZSgncmVhY3QtaXMnKTtpZighaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpe3Rocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTt9fWxldCBkYXRhSHJlZjtpZihfX05fU1NHfHxfX05fU1NQKXtkYXRhSHJlZj10aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWUscXVlcnl9KSxyZXNvbHZlZEFzLF9fTl9TU0csdGhpcy5sb2NhbGUpO31jb25zdCBwcm9wcz1hd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHP3RoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpOl9fTl9TU1A/dGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZik6dGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG57cGF0aG5hbWUscXVlcnksYXNQYXRoOmFzLGxvY2FsZTp0aGlzLmxvY2FsZSxsb2NhbGVzOnRoaXMubG9jYWxlcyxkZWZhdWx0TG9jYWxlOnRoaXMuZGVmYXVsdExvY2FsZX0pKTtyb3V0ZUluZm8ucHJvcHM9cHJvcHM7dGhpcy5jb21wb25lbnRzW3JvdXRlXT1yb3V0ZUluZm87cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2goZXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyk7fX1zZXQocm91dGUscGF0aG5hbWUscXVlcnksYXMsZGF0YSxyZXNldFNjcm9sbCl7dGhpcy5pc0ZhbGxiYWNrPWZhbHNlO3RoaXMucm91dGU9cm91dGU7dGhpcy5wYXRobmFtZT1wYXRobmFtZTt0aGlzLnF1ZXJ5PXF1ZXJ5O3RoaXMuYXNQYXRoPWFzO3JldHVybiB0aGlzLm5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKTt9LyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL2JlZm9yZVBvcFN0YXRlKGNiKXt0aGlzLl9icHM9Y2I7fW9ubHlBSGFzaENoYW5nZShhcyl7aWYoIXRoaXMuYXNQYXRoKXJldHVybiBmYWxzZTtjb25zdFtvbGRVcmxOb0hhc2gsb2xkSGFzaF09dGhpcy5hc1BhdGguc3BsaXQoJyMnKTtjb25zdFtuZXdVcmxOb0hhc2gsbmV3SGFzaF09YXMuc3BsaXQoJyMnKTsvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG5pZihuZXdIYXNoJiZvbGRVcmxOb0hhc2g9PT1uZXdVcmxOb0hhc2gmJm9sZEhhc2g9PT1uZXdIYXNoKXtyZXR1cm4gdHJ1ZTt9Ly8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuaWYob2xkVXJsTm9IYXNoIT09bmV3VXJsTm9IYXNoKXtyZXR1cm4gZmFsc2U7fS8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbi8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG5yZXR1cm4gb2xkSGFzaCE9PW5ld0hhc2g7fXNjcm9sbFRvSGFzaChhcyl7Y29uc3RbLGhhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5pZihoYXNoPT09Jyd8fGhhc2g9PT0ndG9wJyl7d2luZG93LnNjcm9sbFRvKDAsMCk7cmV0dXJuO30vLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuY29uc3QgaWRFbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtpZihpZEVsKXtpZEVsLnNjcm9sbEludG9WaWV3KCk7cmV0dXJuO30vLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuY29uc3QgbmFtZUVsPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO2lmKG5hbWVFbCl7bmFtZUVsLnNjcm9sbEludG9WaWV3KCk7fX11cmxJc05ldyhhc1BhdGgpe3JldHVybiB0aGlzLmFzUGF0aCE9PWFzUGF0aDt9LyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9hc3luYyBwcmVmZXRjaCh1cmwsYXNQYXRoPXVybCxvcHRpb25zPXt9KXtsZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lfT1wYXJzZWQ7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYob3B0aW9ucy5sb2NhbGU9PT1mYWxzZSl7cGF0aG5hbWU9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aG5hbWUsdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTtsZXQgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoYXNQYXRoKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7cGFyc2VkQXMucGF0aG5hbWU9bG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtvcHRpb25zLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGU7YXNQYXRoPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO319Y29uc3QgcGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7bGV0IHJlc29sdmVkQXM9YXNQYXRoO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzUGF0aC5zdGFydHNXaXRoKCcvJykpe2xldCByZXdyaXRlczsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHBhcnNlZC5xdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSx0aGlzLmxvY2FsZSk7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTsvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7cmV0dXJuO31hd2FpdCBQcm9taXNlLmFsbChbdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbihpc1NzZz0+e3JldHVybiBpc1NzZz90aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwscmVzb2x2ZWRBcyx0cnVlLHR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnRoaXMubG9jYWxlKSk6ZmFsc2U7fSksdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHk/J2xvYWRQYWdlJzoncHJlZmV0Y2gnXShyb3V0ZSldKTt9YXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPXRoaXMuY2xjPSgpPT57Y2FuY2VsbGVkPXRydWU7fTtjb25zdCBjb21wb25lbnRSZXN1bHQ9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtpZihjYW5jZWxsZWQpe2NvbnN0IGVycm9yPW5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7ZXJyb3IuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyb3I7fWlmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31yZXR1cm4gY29tcG9uZW50UmVzdWx0O31fZ2V0RGF0YShmbil7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O3RoaXMuY2xjPWNhbmNlbDtyZXR1cm4gZm4oKS50aGVuKGRhdGE9PntpZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9aWYoY2FuY2VsbGVkKXtjb25zdCBlcnI9bmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7ZXJyLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycjt9cmV0dXJuIGRhdGE7fSk7fV9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOmNhY2hlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJyYmIXRoaXMuaXNQcmV2aWV3JiZ0aGlzLnNkY1tjYWNoZUtleV0pe3JldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTt9cmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57dGhpcy5zZGNbY2FjaGVLZXldPWRhdGE7cmV0dXJuIGRhdGE7fSk7fV9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOnJlc291cmNlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZih0aGlzLnNkcltyZXNvdXJjZUtleV0pe3JldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07fXJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV09ZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3JldHVybiBkYXRhO30pLmNhdGNoKGVycj0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07dGhyb3cgZXJyO30pO31nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LGN0eCl7Y29uc3R7Q29tcG9uZW50OkFwcH09dGhpcy5jb21wb25lbnRzWycvX2FwcCddO2NvbnN0IEFwcFRyZWU9dGhpcy5fd3JhcEFwcChBcHApO2N0eC5BcHBUcmVlPUFwcFRyZWU7cmV0dXJuKDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKEFwcCx7QXBwVHJlZSxDb21wb25lbnQscm91dGVyOnRoaXMsY3R4fSk7fWFib3J0Q29tcG9uZW50TG9hZChhcyxyb3V0ZVByb3BzKXtpZih0aGlzLmNsYyl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxidWlsZENhbmNlbGxhdGlvbkVycm9yKCksYXMscm91dGVQcm9wcyk7dGhpcy5jbGMoKTt0aGlzLmNsYz1udWxsO319bm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpe3JldHVybiB0aGlzLnN1YihkYXRhLHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQscmVzZXRTY3JvbGwpO319ZXhwb3J0cy5kZWZhdWx0PVJvdXRlcjtSb3V0ZXIuZXZlbnRzPSgwLF9taXR0LmRlZmF1bHQpKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5mb3JtYXRVcmw9Zm9ybWF0VXJsO3ZhciBxdWVyeXN0cmluZz1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO30vLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuY29uc3Qgc2xhc2hlZFByb3RvY29scz0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iail7bGV0e2F1dGgsaG9zdG5hbWV9PXVybE9iajtsZXQgcHJvdG9jb2w9dXJsT2JqLnByb3RvY29sfHwnJztsZXQgcGF0aG5hbWU9dXJsT2JqLnBhdGhuYW1lfHwnJztsZXQgaGFzaD11cmxPYmouaGFzaHx8Jyc7bGV0IHF1ZXJ5PXVybE9iai5xdWVyeXx8Jyc7bGV0IGhvc3Q9ZmFsc2U7YXV0aD1hdXRoP2VuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwnOicpKydAJzonJztpZih1cmxPYmouaG9zdCl7aG9zdD1hdXRoK3VybE9iai5ob3N0O31lbHNlIGlmKGhvc3RuYW1lKXtob3N0PWF1dGgrKH5ob3N0bmFtZS5pbmRleE9mKCc6Jyk/YFske2hvc3RuYW1lfV1gOmhvc3RuYW1lKTtpZih1cmxPYmoucG9ydCl7aG9zdCs9JzonK3VybE9iai5wb3J0O319aWYocXVlcnkmJnR5cGVvZiBxdWVyeT09PSdvYmplY3QnKXtxdWVyeT1TdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSkpO31sZXQgc2VhcmNoPXVybE9iai5zZWFyY2h8fHF1ZXJ5JiZgPyR7cXVlcnl9YHx8Jyc7aWYocHJvdG9jb2wmJnByb3RvY29sLnN1YnN0cigtMSkhPT0nOicpcHJvdG9jb2wrPSc6JztpZih1cmxPYmouc2xhc2hlc3x8KCFwcm90b2NvbHx8c2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkmJmhvc3QhPT1mYWxzZSl7aG9zdD0nLy8nKyhob3N0fHwnJyk7aWYocGF0aG5hbWUmJnBhdGhuYW1lWzBdIT09Jy8nKXBhdGhuYW1lPScvJytwYXRobmFtZTt9ZWxzZSBpZighaG9zdCl7aG9zdD0nJzt9aWYoaGFzaCYmaGFzaFswXSE9PScjJyloYXNoPScjJytoYXNoO2lmKHNlYXJjaCYmc2VhcmNoWzBdIT09Jz8nKXNlYXJjaD0nPycrc2VhcmNoO3BhdGhuYW1lPXBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZyxlbmNvZGVVUklDb21wb25lbnQpO3NlYXJjaD1zZWFyY2gucmVwbGFjZSgnIycsJyUyMycpO3JldHVybmAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcm1hdC11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZT1pc0R5bmFtaWNSb3V0ZTsvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFPS9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO2Z1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKXtyZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucGFyc2VSZWxhdGl2ZVVybD1wYXJzZVJlbGF0aXZlVXJsO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIik7LyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmwsYmFzZSl7Y29uc3QgZ2xvYmFsQmFzZT1uZXcgVVJMKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJz8naHR0cDovL24nOigwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSk7Y29uc3QgcmVzb2x2ZWRCYXNlPWJhc2U/bmV3IFVSTChiYXNlLGdsb2JhbEJhc2UpOmdsb2JhbEJhc2U7Y29uc3R7cGF0aG5hbWUsc2VhcmNoUGFyYW1zLHNlYXJjaCxoYXNoLGhyZWYsb3JpZ2lufT1uZXcgVVJMKHVybCxyZXNvbHZlZEJhc2UpO2lmKG9yaWdpbiE9PWdsb2JhbEJhc2Uub3JpZ2luKXt0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKTt9cmV0dXJue3BhdGhuYW1lLHF1ZXJ5OigwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShzZWFyY2hQYXJhbXMpLHNlYXJjaCxoYXNoLGhyZWY6aHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1yZWxhdGl2ZS11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5PXNlYXJjaFBhcmFtc1RvVXJsUXVlcnk7ZXhwb3J0cy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zPXVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM7ZXhwb3J0cy5hc3NpZ249YXNzaWduO2Z1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKXtjb25zdCBxdWVyeT17fTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+e2lmKHR5cGVvZiBxdWVyeVtrZXldPT09J3VuZGVmaW5lZCcpe3F1ZXJ5W2tleV09dmFsdWU7fWVsc2UgaWYoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSl7O3F1ZXJ5W2tleV0ucHVzaCh2YWx1ZSk7fWVsc2V7cXVlcnlba2V5XT1bcXVlcnlba2V5XSx2YWx1ZV07fX0pO3JldHVybiBxdWVyeTt9ZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbSl7aWYodHlwZW9mIHBhcmFtPT09J3N0cmluZyd8fHR5cGVvZiBwYXJhbT09PSdudW1iZXInJiYhaXNOYU4ocGFyYW0pfHx0eXBlb2YgcGFyYW09PT0nYm9vbGVhbicpe3JldHVybiBTdHJpbmcocGFyYW0pO31lbHNle3JldHVybicnO319ZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyh1cmxRdWVyeSl7Y29uc3QgcmVzdWx0PW5ldyBVUkxTZWFyY2hQYXJhbXMoKTtPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSx2YWx1ZV0pPT57aWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpe3ZhbHVlLmZvckVhY2goaXRlbT0+cmVzdWx0LmFwcGVuZChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpO31lbHNle3Jlc3VsdC5zZXQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKTt9fSk7cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gYXNzaWduKHRhcmdldCwuLi5zZWFyY2hQYXJhbXNMaXN0KXtzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goc2VhcmNoUGFyYW1zPT57QXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKGtleT0+dGFyZ2V0LmRlbGV0ZShrZXkpKTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+dGFyZ2V0LmFwcGVuZChrZXksdmFsdWUpKTt9KTtyZXR1cm4gdGFyZ2V0O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5c3RyaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVNYXRjaGVyPWdldFJvdXRlTWF0Y2hlcjtmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCl7Y29uc3R7cmUsZ3JvdXBzfT1yb3V0ZVJlZ2V4O3JldHVybiBwYXRobmFtZT0+e2NvbnN0IHJvdXRlTWF0Y2g9cmUuZXhlYyhwYXRobmFtZSk7aWYoIXJvdXRlTWF0Y2gpe3JldHVybiBmYWxzZTt9Y29uc3QgZGVjb2RlPXBhcmFtPT57dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO31jYXRjaChfKXtjb25zdCBlcnI9bmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7ZXJyLmNvZGU9J0RFQ09ERV9GQUlMRUQnO3Rocm93IGVycjt9fTtjb25zdCBwYXJhbXM9e307T2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKHNsdWdOYW1lPT57Y29uc3QgZz1ncm91cHNbc2x1Z05hbWVdO2NvbnN0IG09cm91dGVNYXRjaFtnLnBvc107aWYobSE9PXVuZGVmaW5lZCl7cGFyYW1zW3NsdWdOYW1lXT1+bS5pbmRleE9mKCcvJyk/bS5zcGxpdCgnLycpLm1hcChlbnRyeT0+ZGVjb2RlKGVudHJ5KSk6Zy5yZXBlYXQ/W2RlY29kZShtKV06ZGVjb2RlKG0pO319KTtyZXR1cm4gcGFyYW1zO307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbWF0Y2hlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlUmVnZXg9Z2V0Um91dGVSZWdleDsvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywnXFxcXCQmJyk7fWZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtKXtjb25zdCBvcHRpb25hbD1wYXJhbS5zdGFydHNXaXRoKCdbJykmJnBhcmFtLmVuZHNXaXRoKCddJyk7aWYob3B0aW9uYWwpe3BhcmFtPXBhcmFtLnNsaWNlKDEsLTEpO31jb25zdCByZXBlYXQ9cGFyYW0uc3RhcnRzV2l0aCgnLi4uJyk7aWYocmVwZWF0KXtwYXJhbT1wYXJhbS5zbGljZSgzKTt9cmV0dXJue2tleTpwYXJhbSxyZXBlYXQsb3B0aW9uYWx9O31mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSl7Y29uc3Qgc2VnbWVudHM9KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywnJyl8fCcvJykuc2xpY2UoMSkuc3BsaXQoJy8nKTtjb25zdCBncm91cHM9e307bGV0IGdyb3VwSW5kZXg9MTtjb25zdCBwYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTtncm91cHNba2V5XT17cG9zOmdyb3VwSW5kZXgrKyxyZXBlYXQsb3B0aW9uYWx9O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/Jyg/Oi8oLis/KSk/JzonLyguKz8pJzonLyhbXi9dKz8pJzt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7Ly8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4vLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuaWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXtsZXQgcm91dGVLZXlDaGFyQ29kZT05NztsZXQgcm91dGVLZXlDaGFyTGVuZ3RoPTE7Ly8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuY29uc3QgZ2V0U2FmZVJvdXRlS2V5PSgpPT57bGV0IHJvdXRlS2V5PScnO2ZvcihsZXQgaT0wO2k8cm91dGVLZXlDaGFyTGVuZ3RoO2krKyl7cm91dGVLZXkrPVN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSk7cm91dGVLZXlDaGFyQ29kZSsrO2lmKHJvdXRlS2V5Q2hhckNvZGU+MTIyKXtyb3V0ZUtleUNoYXJMZW5ndGgrKztyb3V0ZUtleUNoYXJDb2RlPTk3O319cmV0dXJuIHJvdXRlS2V5O307Y29uc3Qgcm91dGVLZXlzPXt9O2xldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpOy8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbi8vIHRoZSBuYW1lZCByZWdleFxubGV0IGNsZWFuZWRLZXk9a2V5LnJlcGxhY2UoL1xcVy9nLCcnKTtsZXQgaW52YWxpZEtleT1mYWxzZTsvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbi8vIHNhZmUga2V5XG5pZihjbGVhbmVkS2V5Lmxlbmd0aD09PTB8fGNsZWFuZWRLZXkubGVuZ3RoPjMwKXtpbnZhbGlkS2V5PXRydWU7fWlmKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLDEpKSkpe2ludmFsaWRLZXk9dHJ1ZTt9aWYoaW52YWxpZEtleSl7Y2xlYW5lZEtleT1nZXRTYWZlUm91dGVLZXkoKTt9cm91dGVLZXlzW2NsZWFuZWRLZXldPWtleTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsP2AoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gOmAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYDpgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWA7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpO3JldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwcyxyb3V0ZUtleXMsbmFtZWRSZWdleDpgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGB9O31yZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHN9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLXJlZ2V4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZXhlY09uY2U9ZXhlY09uY2U7ZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbjtleHBvcnRzLmdldFVSTD1nZXRVUkw7ZXhwb3J0cy5nZXREaXNwbGF5TmFtZT1nZXREaXNwbGF5TmFtZTtleHBvcnRzLmlzUmVzU2VudD1pc1Jlc1NlbnQ7ZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzPWxvYWRHZXRJbml0aWFsUHJvcHM7ZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbj1mb3JtYXRXaXRoVmFsaWRhdGlvbjtleHBvcnRzLlNUPWV4cG9ydHMuU1A9ZXhwb3J0cy51cmxPYmplY3RLZXlzPXZvaWQgMDt2YXIgX2Zvcm1hdFVybD1yZXF1aXJlKFwiLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybFwiKTsvKipcbiAqIFV0aWxzXG4gKi9mdW5jdGlvbiBleGVjT25jZShmbil7bGV0IHVzZWQ9ZmFsc2U7bGV0IHJlc3VsdDtyZXR1cm4oLi4uYXJncyk9PntpZighdXNlZCl7dXNlZD10cnVlO3Jlc3VsdD1mbiguLi5hcmdzKTt9cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpe2NvbnN0e3Byb3RvY29sLGhvc3RuYW1lLHBvcnR9PXdpbmRvdy5sb2NhdGlvbjtyZXR1cm5gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0Pyc6Jytwb3J0OicnfWA7fWZ1bmN0aW9uIGdldFVSTCgpe2NvbnN0e2hyZWZ9PXdpbmRvdy5sb2NhdGlvbjtjb25zdCBvcmlnaW49Z2V0TG9jYXRpb25PcmlnaW4oKTtyZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7fWZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCl7cmV0dXJuIHR5cGVvZiBDb21wb25lbnQ9PT0nc3RyaW5nJz9Db21wb25lbnQ6Q29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb25lbnQubmFtZXx8J1Vua25vd24nO31mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKXtyZXR1cm4gcmVzLmZpbmlzaGVkfHxyZXMuaGVhZGVyc1NlbnQ7fWFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLGN0eCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBfQXBwJHByb3RvdHlwZTtpZigoX0FwcCRwcm90b3R5cGU9QXBwLnByb3RvdHlwZSkhPW51bGwmJl9BcHAkcHJvdG90eXBlLmdldEluaXRpYWxQcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fX0vLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG5jb25zdCByZXM9Y3R4LnJlc3x8Y3R4LmN0eCYmY3R4LmN0eC5yZXM7aWYoIUFwcC5nZXRJbml0aWFsUHJvcHMpe2lmKGN0eC5jdHgmJmN0eC5Db21wb25lbnQpey8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbnJldHVybntwYWdlUHJvcHM6YXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LGN0eC5jdHgpfTt9cmV0dXJue307fWNvbnN0IHByb3BzPWF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtpZihyZXMmJmlzUmVzU2VudChyZXMpKXtyZXR1cm4gcHJvcHM7fWlmKCFwcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoPT09MCYmIWN0eC5jdHgpe2NvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO319cmV0dXJuIHByb3BzO31jb25zdCB1cmxPYmplY3RLZXlzPVsnYXV0aCcsJ2hhc2gnLCdob3N0JywnaG9zdG5hbWUnLCdocmVmJywncGF0aCcsJ3BhdGhuYW1lJywncG9ydCcsJ3Byb3RvY29sJywncXVlcnknLCdzZWFyY2gnLCdzbGFzaGVzJ107ZXhwb3J0cy51cmxPYmplY3RLZXlzPXVybE9iamVjdEtleXM7ZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe2lmKHVybCE9PW51bGwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jyl7T2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleT0+e2lmKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpPT09LTEpe2NvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTt9fSk7fX1yZXR1cm4oMCxfZm9ybWF0VXJsLmZvcm1hdFVybCkodXJsKTt9Y29uc3QgU1A9dHlwZW9mIHBlcmZvcm1hbmNlIT09J3VuZGVmaW5lZCc7ZXhwb3J0cy5TUD1TUDtjb25zdCBTVD1TUCYmdHlwZW9mIHBlcmZvcm1hbmNlLm1hcms9PT0nZnVuY3Rpb24nJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZT09PSdmdW5jdGlvbic7ZXhwb3J0cy5TVD1TVDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgRm9vdGVyRGVmYXVsdCBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9mb290ZXJzL0Zvb3RlckRlZmF1bHQnO1xuaW1wb3J0IEhlYWRlckRlZmF1bHQgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvaGVhZGVycy9IZWFkZXJEZWZhdWx0JztcblxuZnVuY3Rpb24gRXJyb3IoeyBzdGF0dXNDb2RlIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpdGUtY29udGVudFwiPlxuICAgICAgICAgICAgPEhlYWRlckRlZmF1bHQgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcGFnZS0tNDA0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1zZWN0aW9uX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvNDA0LmpwZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk9oaCEgUGFnZSBub3QgZm91bmQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdCBzZWVtcyB3ZSBjYW4ndCBmaW5kIHdoYXQgeW91J3JlIGxvb2tpbmcgZm9yLnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHbyBiYWNrIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT4gSG9tZXBhZ2U8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxGb290ZXJEZWZhdWx0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yO1xuIiwiaW1wb3J0IFJlcG9zaXRvcnksIHsgYmFzZVVybCwgc2VyaWFsaXplUXVlcnkgfSBmcm9tICcuL1JlcG9zaXRvcnknO1xuXG5jbGFzcyBQcm9kdWN0UmVwb3NpdG9yeSB7XG4gICAgYXN5bmMgZ2V0UmVjb3JkcyhwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KFxuICAgICAgICAgICAgYCR7YmFzZVVybH0vcHJvZHVjdHM/JHtzZXJpYWxpemVRdWVyeShwYXJhbXMpfWBcbiAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XG4gICAgICAgIHJldHVybiByZXBvbnNlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFByb2R1Y3RzKHBhcmFtcykge1xuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoXG4gICAgICAgICAgICBgJHtiYXNlVXJsfS9wcm9kdWN0cz8ke3NlcmlhbGl6ZVF1ZXJ5KHBhcmFtcyl9YFxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QnJhbmRzKCkge1xuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoYCR7YmFzZVVybH0vYnJhbmRzYClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xuICAgICAgICByZXR1cm4gcmVwb25zZTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQcm9kdWN0Q2F0ZWdvcmllcygpIHtcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KGAke2Jhc2VVcmx9L3Byb2R1Y3QtY2F0ZWdvcmllc2ApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiAoeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpIH0pKTtcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VG90YWxSZWNvcmRzKCkge1xuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoYCR7YmFzZVVybH0vcHJvZHVjdHMvY291bnRgKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XG4gICAgICAgIHJldHVybiByZXBvbnNlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFByb2R1Y3RzQnlJZChwYXlsb2FkKSB7XG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldChgJHtiYXNlVXJsfS9wcm9kdWN0cy8ke3BheWxvYWR9YClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xuICAgICAgICByZXR1cm4gcmVwb25zZTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQcm9kdWN0c0J5Q2F0ZWdvcnkocGF5bG9hZCkge1xuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoXG4gICAgICAgICAgICBgJHtiYXNlVXJsfS9wcm9kdWN0LWNhdGVnb3JpZXM/c2x1Zz0ke3BheWxvYWR9YFxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVswXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXBvbnNlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFByb2R1Y3RzQnlCcmFuZChwYXlsb2FkKSB7XG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldChcbiAgICAgICAgICAgIGAke2Jhc2VVcmx9L2JyYW5kcz9zbHVnPSR7cGF5bG9hZH1gXG4gICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhWzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHJvZHVjdHNCeUJyYW5kcyhwYXlsb2FkKSB7XG4gICAgICAgIGxldCBxdWVyeSA9ICcnO1xuICAgICAgICBwYXlsb2FkLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChxdWVyeSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBxdWVyeSA9IGBpZF9pbj0ke2l0ZW19YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVlcnkgPSBxdWVyeSArIGAmaWRfaW49JHtpdGVtfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoYCR7YmFzZVVybH0vYnJhbmRzPyR7cXVlcnl9YClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xuICAgICAgICByZXR1cm4gcmVwb25zZTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQcm9kdWN0c0J5QnJhbmRzKHBheWxvYWQpIHtcbiAgICAgICAgbGV0IHF1ZXJ5ID0gJyc7XG4gICAgICAgIHBheWxvYWQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5ID09PSAnJykge1xuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gYGlkX2luPSR7aXRlbX1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5ICsgYCZpZF9pbj0ke2l0ZW19YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldChgJHtiYXNlVXJsfS9icmFuZHM/JHtxdWVyeX1gKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XG4gICAgICAgIHJldHVybiByZXBvbnNlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFByb2R1Y3RzQnlQcmljZVJhbmdlKHBheWxvYWQpIHtcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KFxuICAgICAgICAgICAgYCR7YmFzZVVybH0vcHJvZHVjdHM/JHtzZXJpYWxpemVRdWVyeShwYXlsb2FkKX1gXG4gICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xuICAgICAgICByZXR1cm4gcmVwb25zZTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQcm9kdWN0c0J5SWRzKHBheWxvYWQpIHtcbiAgICAgICAgY29uc3QgZW5kUG9pbnQgPSBgJHtiYXNlVXJsfS9wcm9kdWN0cz8ke3BheWxvYWR9YDtcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KGVuZFBvaW50KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVwb25zZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQcm9kdWN0UmVwb3NpdG9yeSgpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmNvbnN0IGJhc2VEb21haW4gPSAnaHR0cHM6Ly9iZXRhLmFwaW5vdXRoZW1lcy5jb20nOyAvLyBBUEkgZm9yIHByb2R1Y3RzXG5leHBvcnQgY29uc3QgYmFzZVBvc3RVcmwgPSAnaHR0cHM6Ly9iZXRhLmFwaW5vdXRoZW1lcy5jb20nOyAvLyBBUEkgZm9yIHBvc3RcbmV4cG9ydCBjb25zdCBiYXNlU3RvcmVVUkwgPSAnaHR0cHM6Ly9iZXRhLmFwaW5vdXRoZW1lcy5jb20nOyAvLyBBUEkgZm9yIHZlbmRvcihzdG9yZSlcblxuZXhwb3J0IGNvbnN0IGN1c3RvbUhlYWRlcnMgPSB7XG4gICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG59O1xuXG5leHBvcnQgY29uc3QgYmFzZVVybCA9IGAke2Jhc2VEb21haW59YDtcblxuZXhwb3J0IGRlZmF1bHQgYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVXJsLFxuICAgIGhlYWRlcnM6IGN1c3RvbUhlYWRlcnMsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNlcmlhbGl6ZVF1ZXJ5ID0gKHF1ZXJ5KSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHF1ZXJ5KVxuICAgICAgICAubWFwKFxuICAgICAgICAgICAgKGtleSkgPT5cbiAgICAgICAgICAgICAgICBgJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX09JHtlbmNvZGVVUklDb21wb25lbnQocXVlcnlba2V5XSl9YFxuICAgICAgICApXG4gICAgICAgIC5qb2luKCcmJyk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xuICAgIExPR0lOX1JFUVVFU1Q6ICdMT0dJTl9SRVFVRVNUJyxcbiAgICBMT0dJTl9TVUNDRVNTOiAnTE9HSU5fU1VDQ0VTUycsXG4gICAgTE9HT1VUOiAnTE9HT1VUJyxcbiAgICBMT0dPVVRfU1VDQ0VTUzogJ0xPR09VVF9TVUNDRVNTJyxcbiAgICBDSEVDS19BVVRIT1JJWkFUSU9OOiAnQ0hFQ0tfQVVUSE9SSVpBVElPTicsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbG9naW4oKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuTE9HSU5fUkVRVUVTVCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naW5TdWNjZXNzKCkge1xuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkxPR0lOX1NVQ0NFU1MgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ091dCgpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5MT0dPVVQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ091dFN1Y2Nlc3MoKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuTE9HT1VUX1NVQ0NFU1MgfTtcbn1cbiIsImV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcbiAgICAvLyBuZXdcblxuICAgIFNFVF9XSVNITElTVF9JVEVNUzogJ1NFVF9XSVNITElTVF9JVEVNUycsXG4gICAgU0VUX1dJU0hMSVNUX0lURU1TX1NVQ0NFU1M6ICdTRVRfV0lTSExJU1RfSVRFTVNfU1VDQ0VTUycsXG5cbiAgICBTRVRfQ0FSVF9JVEVNUzogJ1NFVF9DQVJUX0lURU1TJyxcbiAgICBTRVRfQ0FSVF9JVEVNU19TVUNDRVNTOiAnU0VUX0NBUlRfSVRFTVNfU1VDQ0VTUycsXG5cbiAgICBTRVRfQ09NUEFSRV9JVEVNUzogJ1NFVF9DT01QQVJFX0lURU1TJyxcbiAgICBTRVRfQ09NUEFSRV9JVEVNU19TVUNDRVNTOiAnU0VUX0NPTVBBUkVfSVRFTVNfU1VDQ0VTUycsXG59O1xuXG4vLyBuZXdcbmV4cG9ydCBmdW5jdGlvbiBzZXRXaXNobGlzdFR0ZW1zKHBheWxvYWQpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfV0lTSExJU1RfSVRFTVMsIHBheWxvYWQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFdpc2hsaXN0VHRlbXNTdWNjZXNzKHBheWxvYWQpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfV0lTSExJU1RfSVRFTVNfU1VDQ0VTUywgcGF5bG9hZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2FydEl0ZW1zKHBheWxvYWQpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfQ0FSVF9JVEVNUywgcGF5bG9hZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2FydEl0ZW1zU3VjY2VzcyhwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0NBUlRfSVRFTVNfU1VDQ0VTUywgcGF5bG9hZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29tcGFyZUl0ZW1zKHBheWxvYWQpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfQ09NUEFSRV9JVEVNUywgcGF5bG9hZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29tcGFyZUl0ZW1zU3VjY2VzcyhwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0NPTVBBUkVfSVRFTVNfU1VDQ0VTUywgcGF5bG9hZCB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xuICAgIENIQU5HRV9DVVJSRU5DWTogJ0NIQU5HRV9DVVJSRU5DWScsXG4gICAgQ0hBTkdFX0NVUlJFTkNZX1NVQ0NFU1M6ICdDSEFOR0VfQ1VSUkVOQ1lfU1VDQ0VTUycsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ3VycmVuY3koY3VycmVuY3kpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5DSEFOR0VfQ1VSUkVOQ1ksIGN1cnJlbmN5IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDdXJyZW5jeVN1Y2Nlc3MoY3VycmVuY3kpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5DSEFOR0VfQ1VSUkVOQ1lfU1VDQ0VTUywgY3VycmVuY3kgfTtcbn1cbiIsImV4cG9ydCBjb25zdCBzdGlja3lIZWFkZXIgPSAoKSA9PiB7XG4gICAgbGV0IG51bWJlciA9XG4gICAgICAgIHdpbmRvdy5wYWdlWE9mZnNldCB8fFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8XG4gICAgICAgIDA7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlclN0aWNreScpO1xuICAgIGlmIChoZWFkZXIgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKG51bWJlciA+PSAzMDApIHtcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItLXN0aWNreScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci0tc3RpY2t5Jyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVUZW1wQXJyYXkgPSAobWF4SXRlbXMpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heEl0ZW1zOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLypcbiAqIFJlYWN0IHRlbXBsYXRlIGhlbHBlcnNcbiAqIEF1dGhvcjogTm91dGhlbWVzXG4gKiBEZXZlbG9wZWQ6IGRpYXJ5Zm9ybGlmZVxuICogKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgeyBnZXRQcm9kdWN0c0J5SWRzIH0gZnJvbSAnfi9yZXBvc2l0b3JpZXMvUHJvZHVjdFJlcG9zaXRvcnknO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FydEl0ZW1zRnJvbUNvb2tpZXMoKSB7XG4gICAgY29uc3QgY2FydEl0ZW1zID0gY29va2llcy5nZXQoJ2NhcnQnKTtcbiAgICBpZiAoY2FydEl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGNhcnRJdGVtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2FydFRvQ29va2llcyhwYXlsb2FkKSB7XG4gICAgY29va2llcy5zZXQoJ2NhcnQnLCBwYXlsb2FkLCB7IHBhdGg6ICcvJywgZXhwaXJlczogMjQgKiA3IH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSXRlbVRvQ2FydEhlbHBlcihwcm9kdWN0KSB7XG4gICAgbGV0IGNhcnQ7XG4gICAgbGV0IGNvb2tpZUNhcnQgPSBnZXRDYXJ0SXRlbXNGcm9tQ29va2llcygpO1xuICAgIGlmIChjb29raWVDYXJ0KSB7XG4gICAgICAgIGNhcnQgPSBjb29raWVDYXJ0O1xuICAgICAgICBjb25zdCBleGlzdEl0ZW0gPSBjYXJ0Lml0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQpO1xuICAgICAgICBpZiAoZXhpc3RJdGVtKSB7XG4gICAgICAgICAgICBleGlzdEl0ZW0ucXVhbnRpdHkgKz0gcHJvZHVjdC5xdWFudGl0eTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8qIGlmICghcHJvZHVjdC5xdWFudGl0eSkge1xuICAgICAgICAgICAgICAgIHByb2R1Y3QucXVhbnRpdHkgPSAxO1xuICAgICAgICAgICAgfSovXG4gICAgICAgICAgICBjYXJ0Lml0ZW1zLnB1c2gocHJvZHVjdCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjYXJ0ID0ge1xuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICB9O1xuICAgICAgICBjYXJ0Lml0ZW1zLnB1c2gocHJvZHVjdCk7XG4gICAgfVxuICAgIHVwZGF0ZUNhcnRUb0Nvb2tpZXMoY2FydCk7XG4gICAgcmV0dXJuIGNhcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNyZWFzZVF0eUNhcnRJdGVtSGVscGVyKHByb2R1Y3QpIHtcbiAgICBsZXQgY2FydDtcbiAgICBsZXQgY29va2llQ2FydCA9IGdldENhcnRJdGVtc0Zyb21Db29raWVzKCk7XG4gICAgaWYgKGNvb2tpZUNhcnQpIHtcbiAgICAgICAgY2FydCA9IGNvb2tpZUNhcnQ7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IGNhcnQuaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLnF1YW50aXR5ID0gc2VsZWN0ZWRJdGVtLnF1YW50aXR5ICsgMTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVDYXJ0VG9Db29raWVzKGNhcnQpO1xuICAgICAgICByZXR1cm4gY2FydDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNyZWFzZVF0eUNhcnRJdGVtSGVscGVyKHByb2R1Y3QpIHtcbiAgICBsZXQgY2FydDtcbiAgICBsZXQgY29va2llQ2FydCA9IGdldENhcnRJdGVtc0Zyb21Db29raWVzKCk7XG4gICAgaWYgKGNvb2tpZUNhcnQpIHtcbiAgICAgICAgY2FydCA9IGNvb2tpZUNhcnQ7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IGNhcnQuaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLnF1YW50aXR5ID0gc2VsZWN0ZWRJdGVtLnF1YW50aXR5IC0gMTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVDYXJ0VG9Db29raWVzKGNhcnQpO1xuICAgICAgICByZXR1cm4gY2FydDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDYXJ0SXRlbUhlbHBlcihwcm9kdWN0KSB7XG4gICAgbGV0IGNhcnQ7XG4gICAgbGV0IGNvb2tpZUNhcnQgPSBnZXRDYXJ0SXRlbXNGcm9tQ29va2llcygpO1xuICAgIGlmIChjb29raWVDYXJ0KSB7XG4gICAgICAgIGNhcnQgPSBjb29raWVDYXJ0O1xuICAgICAgICBjb25zdCBpbmRleCA9IGNhcnQuaXRlbXMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkKTtcbiAgICAgICAgY2FydC5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB1cGRhdGVDYXJ0VG9Db29raWVzKGNhcnQpO1xuICAgICAgICByZXR1cm4gY2FydDtcbiAgICB9XG59XG5cbi8vIG5ld1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQW1vdW50KG9iaikge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKG9iailcbiAgICAgICAgLnJlZHVjZSgoYWNjLCB7IHF1YW50aXR5LCBwcmljZSB9KSA9PiBhY2MgKyBxdWFudGl0eSAqIHByaWNlLCAwKVxuICAgICAgICAudG9GaXhlZCgyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUNhcnRRdWFudGl0eShvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhvYmopLnJlZHVjZSgoYWNjLCB7IHF1YW50aXR5IH0pID0+IGFjYyArIHF1YW50aXR5LCAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhY3VsYXRlQXJyYXlRdWFudGl0eShvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhvYmopLnJlZHVjZSgoYWNjKSA9PiBhY2MgKyAxLCAwKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF6eUxvYWQgZnJvbSAncmVhY3QtbGF6eWxvYWQnO1xuaW1wb3J0IHsgYmFzZVVybCB9IGZyb20gJ34vcmVwb3NpdG9yaWVzL1JlcG9zaXRvcnknO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEN1cnJlbmN5KG51bSkge1xuICAgIGlmIChudW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChudW0pXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyhcXGQpKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJyQxLCcpO1xuICAgIH0gZWxzZSB7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sbGV0aW9uQnlTbHVnKGNvbGxlY3Rpb25zLCBzbHVnKSB7XG4gICAgaWYgKGNvbGxlY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29sbGVjdGlvbnMuZmluZChcbiAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLnNsdWcgPT09IHNsdWcudG9TdHJpbmcoKVxuICAgICAgICApO1xuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQucHJvZHVjdHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbUJ5U2x1ZyhiYW5uZXJzLCBzbHVnKSB7XG4gICAgaWYgKGJhbm5lcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBiYW5uZXIgPSBiYW5uZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uc2x1ZyA9PT0gc2x1Zy50b1N0cmluZygpKTtcbiAgICAgICAgaWYgKGJhbm5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gYmFubmVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0U2x1Z3NRdWVyeVN0cmluZyhwYXlsb2FkKSB7XG4gICAgbGV0IHF1ZXJ5ID0gJyc7XG4gICAgaWYgKHBheWxvYWQubGVuZ3RoID4gMCkge1xuICAgICAgICBwYXlsb2FkLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChxdWVyeSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBxdWVyeSA9IGBzbHVnX2luPSR7aXRlbX1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5ICsgYCZzbHVnX2luPSR7aXRlbX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3RyYXBpUHJvZHVjdFByaWNlRXhwYW5kZWQocHJvZHVjdCkge1xuICAgIGxldCB2aWV3O1xuICAgIGlmIChwcm9kdWN0LmlzX3NhbGUgPT09IHRydWUpIHtcbiAgICAgICAgdmlldyA9IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX3ByaWNlIHNhbGVcIj5cbiAgICAgICAgICAgICAgICAke2Zvcm1hdEN1cnJlbmN5KHByb2R1Y3QucHJpY2UpfVxuICAgICAgICAgICAgICAgIDxkZWwgY2xhc3NOYW1lPVwibWwtMlwiPlxuICAgICAgICAgICAgICAgICAgICAke2Zvcm1hdEN1cnJlbmN5KHByb2R1Y3Quc2FsZV9wcmljZSl9XG4gICAgICAgICAgICAgICAgPC9kZWw+XG4gICAgICAgICAgICAgICAgPHNtYWxsPjE4JSBvZmY8L3NtYWxsPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZpZXcgPSAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19wcmljZVwiPlxuICAgICAgICAgICAgICAgICR7Zm9ybWF0Q3VycmVuY3kocHJvZHVjdC5wcmljZSl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB2aWV3O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3RyYXBpUHJvZHVjdFRodW1ibmFpbChwcm9kdWN0KSB7XG4gICAgbGV0IHZpZXc7XG5cbiAgICBpZiAocHJvZHVjdC50aHVtYm5haWwpIHtcbiAgICAgICAgdmlldyA9IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdC9bcGlkXVwiIGFzPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9PlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtiYXNlVXJsfSR7cHJvZHVjdC50aHVtYm5haWwudXJsfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MYXp5TG9hZD5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmlldyA9IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdC9bcGlkXVwiIGFzPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9PlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL25vdC1mb3VuZC5qcGdcIiBhbHQ9XCJtYXJ0ZnVyeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGF6eUxvYWQ+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB2aWV3O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxhenlsb2FkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9