/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./bbq-image.jpg */ "./src/bbq-image.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&family=Permanent+Marker&family=Playpen+Sans:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  font-family: 'Roboto', sans-serif;
}

html {
  margin: 0;
  height: 100%;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
  color: rgb(244, 235, 235);
  background-color: rgb(29, 29, 29);
  width: 100%;
  height: 100%;
  /* min-height: 100%; */
  display: flex;
  flex-direction: column;
}

h2, h3 {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

a:visited {
  color: inherit;
}


/* Shared Header & Logo Styling */

header {
  flex: none;
  box-sizing: border-box;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 64px;
}

.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 20px;
}

.logo img {
  width: 60px;
  filter: invert(1);
}

.logo span {
  text-wrap: nowrap;
  font-family: 'Permanent Marker', cursive;
}

nav ul {
  display: flex;
  gap: 50px;
  font-size: 26px;
}

nav li {
  cursor: pointer;
}


/* Shared Main Content */

#content {
  flex-grow: 1;
}

.main {
  box-sizing: border-box;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
  height: 100%;
  padding: 64px;
  display: grid;
  place-items: center;
}

.home-container,
.hours-container,
.menu-container {
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.497);
  padding: 90px;
  border-radius: 48px;
}

 /* Home Page */

.home-container {
  display: flex;
  align-items: center;
  gap: 60px;
  width: 80%;
  min-width: 1040px;
  max-height: 560px;
}

.home-container .logo img {
  width: 300px;
}

.home-container .logo span {
  font-size: 48px;
}

.home-container .description {
  font-size: 36px;
  letter-spacing: 4px;
}

/* Hours Page */

.hours-container * {
  text-wrap: nowrap;
}

.hours-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 32px;
}

.hours-container h2 {
  font-family: "Permanent Marker", cursive;
  font-size: 48px;
  margin-bottom: 30px;
}

#hours-table tr {
  display: flex;
  justify-content: space-between;
  gap: 80px;
}

#hours-table tr:nth-child(n + 2) {
  margin-top: 10px;
}


/* Menu Page */

.menu-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(1fr, 4);
  justify-items: center;
  align-items: start;
  gap: 40px;
  padding: 48px;
  font-size: 20px;
  text-wrap: nowrap;
}

.menu-container > h2 {
  grid-row: 1;
  grid-column: 1 / -1;
  font-size: 44px;
  font-family: "Permanent Marker", cursive;
}

#beer {
  grid-column: 1 / -1;
}

.menu-section > h3 {
  font-size: 30px;
  font-family: "Permanent Marker", cursive;
  text-align: center;
}

.item-info {
  display: flex;
  justify-content: space-between;
  gap: 64px;
  padding-top: 6px;
}

#beer-price {
  display: flex;
  gap: 24px;
}

#beer .item-info {
  justify-content: center;
}



/* Footer */

footer {
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background-color: inherit;
  height: 40px;
}

/* Copyright with github */
footer div {
  display: flex;
  align-items: center;
}

#github-logo {
  height: auto;
  width: 20px;
  margin-left: 6px;
  filter: invert(1);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,SAAS;EACT,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,SAAS;EACT,UAAU;EACV,yBAAyB;EACzB,iCAAiC;EACjC,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,cAAc;AAChB;;;AAGA,iCAAiC;;AAEjC;EACE,UAAU;EACV,sBAAsB;EACtB,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;;AAGA,wBAAwB;;AAExB;EACE,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,yDAAwC;EACxC,sBAAsB;EACtB,2BAA2B;EAC3B,YAAY;EACZ,aAAa;EACb,aAAa;EACb,mBAAmB;AACrB;;AAEA;;;EAGE,sBAAsB;EACtB,sCAAsC;EACtC,aAAa;EACb,mBAAmB;AACrB;;CAEC,cAAc;;AAEf;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA,eAAe;;AAEf;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,wCAAwC;EACxC,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;;AAGA,cAAc;;AAEd;EACE,aAAa;EACb,8BAA8B;EAC9B,kCAAkC;EAClC,qBAAqB;EACrB,kBAAkB;EAClB,SAAS;EACT,aAAa;EACb,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,eAAe;EACf,wCAAwC;AAC1C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,wCAAwC;EACxC,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,uBAAuB;AACzB;;;;AAIA,WAAW;;AAEX;EACE,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,yBAAyB;EACzB,YAAY;AACd;;AAEA,0BAA0B;AAC1B;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,iBAAiB;AACnB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&family=Permanent+Marker&family=Playpen+Sans:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap');\n\n:root {\n  font-family: 'Roboto', sans-serif;\n}\n\nhtml {\n  margin: 0;\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  color: rgb(244, 235, 235);\n  background-color: rgb(29, 29, 29);\n  width: 100%;\n  height: 100%;\n  /* min-height: 100%; */\n  display: flex;\n  flex-direction: column;\n}\n\nh2, h3 {\n  padding: 0;\n  margin: 0;\n}\n\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\na:visited {\n  color: inherit;\n}\n\n\n/* Shared Header & Logo Styling */\n\nheader {\n  flex: none;\n  box-sizing: border-box;\n  height: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px 64px;\n}\n\n.logo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  font-size: 20px;\n}\n\n.logo img {\n  width: 60px;\n  filter: invert(1);\n}\n\n.logo span {\n  text-wrap: nowrap;\n  font-family: 'Permanent Marker', cursive;\n}\n\nnav ul {\n  display: flex;\n  gap: 50px;\n  font-size: 26px;\n}\n\nnav li {\n  cursor: pointer;\n}\n\n\n/* Shared Main Content */\n\n#content {\n  flex-grow: 1;\n}\n\n.main {\n  box-sizing: border-box;\n  background-image: url('./bbq-image.jpg');\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  padding: 64px;\n  display: grid;\n  place-items: center;\n}\n\n.home-container,\n.hours-container,\n.menu-container {\n  box-sizing: border-box;\n  background-color: rgba(0, 0, 0, 0.497);\n  padding: 90px;\n  border-radius: 48px;\n}\n\n /* Home Page */\n\n.home-container {\n  display: flex;\n  align-items: center;\n  gap: 60px;\n  width: 80%;\n  min-width: 1040px;\n  max-height: 560px;\n}\n\n.home-container .logo img {\n  width: 300px;\n}\n\n.home-container .logo span {\n  font-size: 48px;\n}\n\n.home-container .description {\n  font-size: 36px;\n  letter-spacing: 4px;\n}\n\n/* Hours Page */\n\n.hours-container * {\n  text-wrap: nowrap;\n}\n\n.hours-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n}\n\n.hours-container h2 {\n  font-family: \"Permanent Marker\", cursive;\n  font-size: 48px;\n  margin-bottom: 30px;\n}\n\n#hours-table tr {\n  display: flex;\n  justify-content: space-between;\n  gap: 80px;\n}\n\n#hours-table tr:nth-child(n + 2) {\n  margin-top: 10px;\n}\n\n\n/* Menu Page */\n\n.menu-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: repeat(1fr, 4);\n  justify-items: center;\n  align-items: start;\n  gap: 40px;\n  padding: 48px;\n  font-size: 20px;\n  text-wrap: nowrap;\n}\n\n.menu-container > h2 {\n  grid-row: 1;\n  grid-column: 1 / -1;\n  font-size: 44px;\n  font-family: \"Permanent Marker\", cursive;\n}\n\n#beer {\n  grid-column: 1 / -1;\n}\n\n.menu-section > h3 {\n  font-size: 30px;\n  font-family: \"Permanent Marker\", cursive;\n  text-align: center;\n}\n\n.item-info {\n  display: flex;\n  justify-content: space-between;\n  gap: 64px;\n  padding-top: 6px;\n}\n\n#beer-price {\n  display: flex;\n  gap: 24px;\n}\n\n#beer .item-info {\n  justify-content: center;\n}\n\n\n\n/* Footer */\n\nfooter {\n  flex: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n  background-color: inherit;\n  height: 40px;\n}\n\n/* Copyright with github */\nfooter div {\n  display: flex;\n  align-items: center;\n}\n\n#github-logo {\n  height: auto;\n  width: 20px;\n  margin-left: 6px;\n  filter: invert(1);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadFooter: () => (/* binding */ loadFooter)
/* harmony export */ });
/* harmony import */ var _github_mark_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./github-mark.png */ "./src/github-mark.png");



function loadFooter() {
    const footer = document.querySelector("footer");
    footer.innerHTML = `
        <div>
            Copyright © 2023 sourdoughbredd
            <a href="https://github.com/sourdoughbredd"><img src=${_github_mark_png__WEBPACK_IMPORTED_MODULE_0__} id="github-logo"></a>
        </div>
        <a href="https://www.flaticon.com/free-icons/bbq" title="bbq icons">BBQ icons created by Freepik - Flaticon</a>
        <a href="https://unsplash.com/@emersonvieira" title="bbq photo">BBQ photo created by Emerson Vieira on Unsplash</a>
        `;
};

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHeader: () => (/* binding */ loadHeader)
/* harmony export */ });
/* harmony import */ var _bbq_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbq-icon.png */ "./src/bbq-icon.png");



function loadHeader() {
    const header = document.querySelector("header");
    header.innerHTML = `
        <div class="logo">
            <img src=${_bbq_icon_png__WEBPACK_IMPORTED_MODULE_0__} alt="Icon of a bbq grill">
            <span>Backyard BBQ</span>
        </div>
        <nav>
            <ul>
                <li id="home-link">Home</li>
                <li id="menu-link">Menu</li>
                <li id="hours-link">Hours</li>
            </ul>
        </nav>
    `;
};


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHome: () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _bbq_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbq-icon.png */ "./src/bbq-icon.png");
// Home Page Loader



function loadHome() {
    // Main
    const content = document.querySelector("#content");
    const main = document.createElement("div");
    main.classList.add("main");
    main.innerHTML = `
        <div class="home-container">
            <div class="logo">
            <img src=${_bbq_icon_png__WEBPACK_IMPORTED_MODULE_0__} alt="Icon of a bbq grill">
            <span>Backyard BBQ</span>
            </div>
            <div class="description">
            Come to our backyard, crack open a cold one, and enjoy some of the best barbecue this
            world has to offer. It's backyard-to-fork dining, better than you've ever had it.
            </div>
        </div>
    `;

    content.appendChild(main);
}

/***/ }),

/***/ "./src/hours.js":
/*!**********************!*\
  !*** ./src/hours.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHours: () => (/* binding */ loadHours)
/* harmony export */ });
// Hours Page


function loadHours() {
    // Main
    const main = document.createElement("div");
    main.classList.add("main");
    main.innerHTML = `
        <div class="hours-container">
            <h2>Hours of Operation</h2>
            <table id="hours-table">
                <tr><th>Sunday</th><td>10am - 7pm</td></tr>
                <tr><th>Monday</th><td>11am - 6pm</td></tr>
                <tr><th>Tuesday</th><td>11am - 6pm</td></tr>
                <tr><th>Wednesday</th><td>11am - 6pm</td></tr>
                <tr><th>Thursday</th><td>11am - 6pm</td></tr>
                <tr><th>Friday</th><td>11am - 6pm</td></tr>
                <tr><th>Saturday</th><td>10am - 7pm</td></tr>
            </table>
        </div>
    `;

    content.appendChild(main);
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenu: () => (/* binding */ loadMenu)
/* harmony export */ });


// Menu item object factory
function createMenuItem(name, price) {
    return { name, price };
}


// Function that returns the menu items
function getMenuItems() {
    const Beef = [
        createMenuItem('Brisket', '$12/lb'),
        createMenuItem('Brisket Sandwich', '$16/each'),
        createMenuItem('Dino Rib', '$20/each')
    ]
    const Pork = [
        createMenuItem('Pulled Pork', '$8/lb'),
        createMenuItem('Pulled Pork Sandwich', '$12/each'),
        createMenuItem('Spare Ribs', '$12/half rack'),
    ];
    const Chicken = [
        createMenuItem('Thighs', '$7/lb'),
        createMenuItem('Pulled Chicken Sandwich', '$13/each'),
        createMenuItem('Breast', 'No'),

    ];
    const Turkey = [
        createMenuItem('Leg', '$10/each'),
        createMenuItem('Breast', 'No'),
    ];
    const Beer = [
        createMenuItem('Coors Original', ''),
        createMenuItem('Coors Light', ''),
    ];
    return { Beef, Pork, Chicken, Turkey, Beer };
}


// Function that loads the menu to the page
function loadMenu() {
    const content = document.querySelector("#content");

    // Create main container to match other pages
    const mainContainer = document.createElement("div");
    mainContainer.classList.add('main');
    
    //  Create menu container
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    // Add menu title
    const menuTitle = document.createElement("h2");
    menuTitle.innerText = "Menu";
    menuContainer.appendChild(menuTitle);

    // Add menu items
    const menuItems = getMenuItems();
    const menuSections = Object.keys(menuItems);
    menuSections.forEach(section => {
        // Setup section div
        const sectionDiv = document.createElement("div");
        sectionDiv.classList.add("menu-section");
        sectionDiv.id = section.toLowerCase();

        // Add section title
        sectionDiv.innerHTML = `<h3>${section}</h3>`;

        // Add section menu items
        if (section === "Beer") {

            //Add universal beer prices text
            sectionDiv.innerHTML += `
                <div id="beer-price">(
                    <span>Can : $4</span>
                    <span>Bottle : $4.5</span>
                    <span>Draft : $5</span>
                )</div>
            `;

            // Add beer names
            menuItems[section].forEach(item => {

                // Create div to hold name of each beer
                const itemDiv = document.createElement("div");
                itemDiv.classList.add("item-info");
                itemDiv.innerHTML += `
                    <div class="item-name">${item.name}</div>
                `;
                // Append item to the section
                sectionDiv.appendChild(itemDiv);
            });
            

        } else {
            // Section other than Beer section

            menuItems[section].forEach(item => {

                // Create div to hold name and price of each item
                const itemDiv = document.createElement("div");
                itemDiv.classList.add("item-info");

                // Add item name and price elements
                itemDiv.innerHTML = `
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">${item.price}</div>
                `;

                // Append item to the section
                sectionDiv.appendChild(itemDiv);
        
            });   
        }
        // Append section to the menu
        menuContainer.appendChild(sectionDiv);
    });
    
    // Append menu to the page
    mainContainer.appendChild(menuContainer);
    content.appendChild(mainContainer);
} 



/***/ }),

/***/ "./src/bbq-icon.png":
/*!**************************!*\
  !*** ./src/bbq-icon.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa9723b7bb5a214b3964.png";

/***/ }),

/***/ "./src/bbq-image.jpg":
/*!***************************!*\
  !*** ./src/bbq-image.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a68e81e8e416680412a1.jpg";

/***/ }),

/***/ "./src/github-mark.png":
/*!*****************************!*\
  !*** ./src/github-mark.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3524c849ab38de4be923.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _hours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hours */ "./src/hours.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu */ "./src/menu.js");







// Load home page
(0,_header__WEBPACK_IMPORTED_MODULE_1__.loadHeader)();
(0,_footer__WEBPACK_IMPORTED_MODULE_2__.loadFooter)();
(0,_home__WEBPACK_IMPORTED_MODULE_3__.loadHome)();

// Get DOM elements for page navigation
const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home-link");
const menuBtn = document.querySelector("#menu-link");
const hoursBtn = document.querySelector("#hours-link");
const contactBtn = document.querySelector("#contact-link");

// Add event listeners to nav buttons
homeBtn.addEventListener("click", () => {
    // Clear main content
    content.innerHTML = "";
    // Load home page
    (0,_home__WEBPACK_IMPORTED_MODULE_3__.loadHome)();
});

hoursBtn.addEventListener("click", () => {
    // Clear main content
    content.innerHTML = "";
    // Load hours page
    (0,_hours__WEBPACK_IMPORTED_MODULE_4__.loadHours)();
});

menuBtn.addEventListener("click", () => {
    // Clear main content
    content.innerHTML = "";
    // Load hours page
    (0,_menu__WEBPACK_IMPORTED_MODULE_5__.loadMenu)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJHQUFrQztBQUM5RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlLQUF5SywyQkFBMkIsSUFBSSxJQUFJLGtCQUFrQjtBQUM5Tix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxRQUFRLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFFBQVEsYUFBYSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZ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V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDaUI7QUFDQTtBQUNKO0FBQ0U7QUFDRjs7QUFFbEM7QUFDQSxtREFBVTtBQUNWLG1EQUFVO0FBQ1YsK0NBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtDQUFRO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVM7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBUTtBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvdXJzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2JicS1pbWFnZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdGhpbmcrWW91K0NvdWxkK0RvJmZhbWlseT1QZXJtYW5lbnQrTWFya2VyJmZhbWlseT1QbGF5cGVuK1NhbnM6d2dodEA0MDA7NzAwJmZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwge1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiByZ2IoMjQ0LCAyMzUsIDIzNSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMjksIDI5KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogbWluLWhlaWdodDogMTAwJTsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaDIsIGgzIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6dmlzaXRlZCB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5cbi8qIFNoYXJlZCBIZWFkZXIgJiBMb2dvIFN0eWxpbmcgKi9cblxuaGVhZGVyIHtcbiAgZmxleDogbm9uZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyNHB4IDY0cHg7XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubG9nbyBpbWcge1xuICB3aWR0aDogNjBweDtcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XG59XG5cbi5sb2dvIHNwYW4ge1xuICB0ZXh0LXdyYXA6IG5vd3JhcDtcbiAgZm9udC1mYW1pbHk6ICdQZXJtYW5lbnQgTWFya2VyJywgY3Vyc2l2ZTtcbn1cblxubmF2IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1MHB4O1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbm5hdiBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4vKiBTaGFyZWQgTWFpbiBDb250ZW50ICovXG5cbiNjb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4ubWFpbiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDY0cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ob21lLWNvbnRhaW5lcixcbi5ob3Vycy1jb250YWluZXIsXG4ubWVudS1jb250YWluZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDk3KTtcbiAgcGFkZGluZzogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNDhweDtcbn1cblxuIC8qIEhvbWUgUGFnZSAqL1xuXG4uaG9tZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDYwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIG1pbi13aWR0aDogMTA0MHB4O1xuICBtYXgtaGVpZ2h0OiA1NjBweDtcbn1cblxuLmhvbWUtY29udGFpbmVyIC5sb2dvIGltZyB7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmhvbWUtY29udGFpbmVyIC5sb2dvIHNwYW4ge1xuICBmb250LXNpemU6IDQ4cHg7XG59XG5cbi5ob21lLWNvbnRhaW5lciAuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG59XG5cbi8qIEhvdXJzIFBhZ2UgKi9cblxuLmhvdXJzLWNvbnRhaW5lciAqIHtcbiAgdGV4dC13cmFwOiBub3dyYXA7XG59XG5cbi5ob3Vycy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbi5ob3Vycy1jb250YWluZXIgaDIge1xuICBmb250LWZhbWlseTogXCJQZXJtYW5lbnQgTWFya2VyXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuI2hvdXJzLXRhYmxlIHRyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDgwcHg7XG59XG5cbiNob3Vycy10YWJsZSB0cjpudGgtY2hpbGQobiArIDIpIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuXG4vKiBNZW51IFBhZ2UgKi9cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxZnIsIDQpO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgZ2FwOiA0MHB4O1xuICBwYWRkaW5nOiA0OHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtd3JhcDogbm93cmFwO1xufVxuXG4ubWVudS1jb250YWluZXIgPiBoMiB7XG4gIGdyaWQtcm93OiAxO1xuICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICBmb250LXNpemU6IDQ0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBlcm1hbmVudCBNYXJrZXJcIiwgY3Vyc2l2ZTtcbn1cblxuI2JlZXIge1xuICBncmlkLWNvbHVtbjogMSAvIC0xO1xufVxuXG4ubWVudS1zZWN0aW9uID4gaDMge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBlcm1hbmVudCBNYXJrZXJcIiwgY3Vyc2l2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaXRlbS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDY0cHg7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG59XG5cbiNiZWVyLXByaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyNHB4O1xufVxuXG4jYmVlciAuaXRlbS1pbmZvIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuXG4vKiBGb290ZXIgKi9cblxuZm9vdGVyIHtcbiAgZmxleDogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4vKiBDb3B5cmlnaHQgd2l0aCBnaXRodWIgKi9cbmZvb3RlciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jZ2l0aHViLWxvZ28ge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBmaWx0ZXI6IGludmVydCgxKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7OztBQUdBLGlDQUFpQzs7QUFFakM7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7OztBQUdBLHdCQUF3Qjs7QUFFeEI7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseURBQXdDO0VBQ3hDLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0NBRUMsY0FBYzs7QUFFZjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFVBQVU7RUFDVixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUEsZUFBZTs7QUFFZjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7OztBQUdBLGNBQWM7O0FBRWQ7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix3Q0FBd0M7RUFDeEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7OztBQUlBLFdBQVc7O0FBRVg7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RoaW5nK1lvdStDb3VsZCtEbyZmYW1pbHk9UGVybWFuZW50K01hcmtlciZmYW1pbHk9UGxheXBlbitTYW5zOndnaHRANDAwOzcwMCZmYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IHJnYigyNDQsIDIzNSwgMjM1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMjksIDI5KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLyogbWluLWhlaWdodDogMTAwJTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oMiwgaDMge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmE6dmlzaXRlZCB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuXFxuLyogU2hhcmVkIEhlYWRlciAmIExvZ28gU3R5bGluZyAqL1xcblxcbmhlYWRlciB7XFxuICBmbGV4OiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDI0cHggNjRweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5sb2dvIGltZyB7XFxuICB3aWR0aDogNjBweDtcXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cXG5cXG4ubG9nbyBzcGFuIHtcXG4gIHRleHQtd3JhcDogbm93cmFwO1xcbiAgZm9udC1mYW1pbHk6ICdQZXJtYW5lbnQgTWFya2VyJywgY3Vyc2l2ZTtcXG59XFxuXFxubmF2IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDUwcHg7XFxuICBmb250LXNpemU6IDI2cHg7XFxufVxcblxcbm5hdiBsaSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi8qIFNoYXJlZCBNYWluIENvbnRlbnQgKi9cXG5cXG4jY29udGVudCB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5tYWluIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYmJxLWltYWdlLmpwZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDY0cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtY29udGFpbmVyLFxcbi5ob3Vycy1jb250YWluZXIsXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDk3KTtcXG4gIHBhZGRpbmc6IDkwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0OHB4O1xcbn1cXG5cXG4gLyogSG9tZSBQYWdlICovXFxuXFxuLmhvbWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA2MHB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1pbi13aWR0aDogMTA0MHB4O1xcbiAgbWF4LWhlaWdodDogNTYwcHg7XFxufVxcblxcbi5ob21lLWNvbnRhaW5lciAubG9nbyBpbWcge1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uaG9tZS1jb250YWluZXIgLmxvZ28gc3BhbiB7XFxuICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbi5ob21lLWNvbnRhaW5lciAuZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG59XFxuXFxuLyogSG91cnMgUGFnZSAqL1xcblxcbi5ob3Vycy1jb250YWluZXIgKiB7XFxuICB0ZXh0LXdyYXA6IG5vd3JhcDtcXG59XFxuXFxuLmhvdXJzLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuLmhvdXJzLWNvbnRhaW5lciBoMiB7XFxuICBmb250LWZhbWlseTogXFxcIlBlcm1hbmVudCBNYXJrZXJcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuI2hvdXJzLXRhYmxlIHRyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDgwcHg7XFxufVxcblxcbiNob3Vycy10YWJsZSB0cjpudGgtY2hpbGQobiArIDIpIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcblxcbi8qIE1lbnUgUGFnZSAqL1xcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMWZyLCA0KTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGdhcDogNDBweDtcXG4gIHBhZGRpbmc6IDQ4cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0ZXh0LXdyYXA6IG5vd3JhcDtcXG59XFxuXFxuLm1lbnUtY29udGFpbmVyID4gaDIge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgZm9udC1zaXplOiA0NHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQZXJtYW5lbnQgTWFya2VyXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuI2JlZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbiA+IGgzIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGVybWFuZW50IE1hcmtlclxcXCIsIGN1cnNpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pdGVtLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogNjRweDtcXG4gIHBhZGRpbmctdG9wOiA2cHg7XFxufVxcblxcbiNiZWVyLXByaWNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDI0cHg7XFxufVxcblxcbiNiZWVyIC5pdGVtLWluZm8ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcblxcbi8qIEZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICBmbGV4OiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi8qIENvcHlyaWdodCB3aXRoIGdpdGh1YiAqL1xcbmZvb3RlciBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNnaXRodWItbG9nbyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxuICBmaWx0ZXI6IGludmVydCgxKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZ2l0aHViTG9nbyBmcm9tIFwiLi9naXRodWItbWFyay5wbmdcIjtcbmV4cG9ydCB7IGxvYWRGb290ZXIgfTtcblxuZnVuY3Rpb24gbG9hZEZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpO1xuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBDb3B5cmlnaHQgwqkgMjAyMyBzb3VyZG91Z2hicmVkZFxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zb3VyZG91Z2hicmVkZFwiPjxpbWcgc3JjPSR7Z2l0aHViTG9nb30gaWQ9XCJnaXRodWItbG9nb1wiPjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9iYnFcIiB0aXRsZT1cImJicSBpY29uc1wiPkJCUSBpY29ucyBjcmVhdGVkIGJ5IEZyZWVwaWsgLSBGbGF0aWNvbjwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BlbWVyc29udmllaXJhXCIgdGl0bGU9XCJiYnEgcGhvdG9cIj5CQlEgcGhvdG8gY3JlYXRlZCBieSBFbWVyc29uIFZpZWlyYSBvbiBVbnNwbGFzaDwvYT5cbiAgICAgICAgYDtcbn07IiwiaW1wb3J0IExvZ28gZnJvbSBcIi4vYmJxLWljb24ucG5nXCI7XG5leHBvcnQgeyBsb2FkSGVhZGVyIH07XG5cbmZ1bmN0aW9uIGxvYWRIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9JHtMb2dvfSBhbHQ9XCJJY29uIG9mIGEgYmJxIGdyaWxsXCI+XG4gICAgICAgICAgICA8c3Bhbj5CYWNreWFyZCBCQlE8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmF2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaSBpZD1cImhvbWUtbGlua1wiPkhvbWU8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBpZD1cIm1lbnUtbGlua1wiPk1lbnU8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBpZD1cImhvdXJzLWxpbmtcIj5Ib3VyczwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICBgO1xufTtcbiIsIi8vIEhvbWUgUGFnZSBMb2FkZXJcbmltcG9ydCBMb2dvIGZyb20gXCIuL2JicS1pY29uLnBuZ1wiO1xuZXhwb3J0IHsgbG9hZEhvbWUgfTtcblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgLy8gTWFpblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgICBtYWluLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImhvbWUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9JHtMb2dvfSBhbHQ9XCJJY29uIG9mIGEgYmJxIGdyaWxsXCI+XG4gICAgICAgICAgICA8c3Bhbj5CYWNreWFyZCBCQlE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgQ29tZSB0byBvdXIgYmFja3lhcmQsIGNyYWNrIG9wZW4gYSBjb2xkIG9uZSwgYW5kIGVuam95IHNvbWUgb2YgdGhlIGJlc3QgYmFyYmVjdWUgdGhpc1xuICAgICAgICAgICAgd29ybGQgaGFzIHRvIG9mZmVyLiBJdCdzIGJhY2t5YXJkLXRvLWZvcmsgZGluaW5nLCBiZXR0ZXIgdGhhbiB5b3UndmUgZXZlciBoYWQgaXQuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG59IiwiLy8gSG91cnMgUGFnZVxuZXhwb3J0IHsgbG9hZEhvdXJzIH07XG5cbmZ1bmN0aW9uIGxvYWRIb3VycygpIHtcbiAgICAvLyBNYWluXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgICBtYWluLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImhvdXJzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgyPkhvdXJzIG9mIE9wZXJhdGlvbjwvaDI+XG4gICAgICAgICAgICA8dGFibGUgaWQ9XCJob3Vycy10YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0cj48dGg+U3VuZGF5PC90aD48dGQ+MTBhbSAtIDdwbTwvdGQ+PC90cj5cbiAgICAgICAgICAgICAgICA8dHI+PHRoPk1vbmRheTwvdGg+PHRkPjExYW0gLSA2cG08L3RkPjwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPjx0aD5UdWVzZGF5PC90aD48dGQ+MTFhbSAtIDZwbTwvdGQ+PC90cj5cbiAgICAgICAgICAgICAgICA8dHI+PHRoPldlZG5lc2RheTwvdGg+PHRkPjExYW0gLSA2cG08L3RkPjwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPjx0aD5UaHVyc2RheTwvdGg+PHRkPjExYW0gLSA2cG08L3RkPjwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPjx0aD5GcmlkYXk8L3RoPjx0ZD4xMWFtIC0gNnBtPC90ZD48L3RyPlxuICAgICAgICAgICAgICAgIDx0cj48dGg+U2F0dXJkYXk8L3RoPjx0ZD4xMGFtIC0gN3BtPC90ZD48L3RyPlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG59IiwiZXhwb3J0IHsgbG9hZE1lbnUgfTtcblxuLy8gTWVudSBpdGVtIG9iamVjdCBmYWN0b3J5XG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBwcmljZSkge1xuICAgIHJldHVybiB7IG5hbWUsIHByaWNlIH07XG59XG5cblxuLy8gRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBtZW51IGl0ZW1zXG5mdW5jdGlvbiBnZXRNZW51SXRlbXMoKSB7XG4gICAgY29uc3QgQmVlZiA9IFtcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oJ0JyaXNrZXQnLCAnJDEyL2xiJyksXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKCdCcmlza2V0IFNhbmR3aWNoJywgJyQxNi9lYWNoJyksXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKCdEaW5vIFJpYicsICckMjAvZWFjaCcpXG4gICAgXVxuICAgIGNvbnN0IFBvcmsgPSBbXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKCdQdWxsZWQgUG9yaycsICckOC9sYicpLFxuICAgICAgICBjcmVhdGVNZW51SXRlbSgnUHVsbGVkIFBvcmsgU2FuZHdpY2gnLCAnJDEyL2VhY2gnKSxcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oJ1NwYXJlIFJpYnMnLCAnJDEyL2hhbGYgcmFjaycpLFxuICAgIF07XG4gICAgY29uc3QgQ2hpY2tlbiA9IFtcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oJ1RoaWdocycsICckNy9sYicpLFxuICAgICAgICBjcmVhdGVNZW51SXRlbSgnUHVsbGVkIENoaWNrZW4gU2FuZHdpY2gnLCAnJDEzL2VhY2gnKSxcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oJ0JyZWFzdCcsICdObycpLFxuXG4gICAgXTtcbiAgICBjb25zdCBUdXJrZXkgPSBbXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKCdMZWcnLCAnJDEwL2VhY2gnKSxcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oJ0JyZWFzdCcsICdObycpLFxuICAgIF07XG4gICAgY29uc3QgQmVlciA9IFtcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oJ0Nvb3JzIE9yaWdpbmFsJywgJycpLFxuICAgICAgICBjcmVhdGVNZW51SXRlbSgnQ29vcnMgTGlnaHQnLCAnJyksXG4gICAgXTtcbiAgICByZXR1cm4geyBCZWVmLCBQb3JrLCBDaGlja2VuLCBUdXJrZXksIEJlZXIgfTtcbn1cblxuXG4vLyBGdW5jdGlvbiB0aGF0IGxvYWRzIHRoZSBtZW51IHRvIHRoZSBwYWdlXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgLy8gQ3JlYXRlIG1haW4gY29udGFpbmVyIHRvIG1hdGNoIG90aGVyIHBhZ2VzXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgXG4gICAgLy8gIENyZWF0ZSBtZW51IGNvbnRhaW5lclxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGFpbmVyXCIpO1xuXG4gICAgLy8gQWRkIG1lbnUgdGl0bGVcbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbWVudVRpdGxlLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcblxuICAgIC8vIEFkZCBtZW51IGl0ZW1zXG4gICAgY29uc3QgbWVudUl0ZW1zID0gZ2V0TWVudUl0ZW1zKCk7XG4gICAgY29uc3QgbWVudVNlY3Rpb25zID0gT2JqZWN0LmtleXMobWVudUl0ZW1zKTtcbiAgICBtZW51U2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICAgICAgLy8gU2V0dXAgc2VjdGlvbiBkaXZcbiAgICAgICAgY29uc3Qgc2VjdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNlY3Rpb25EaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtc2VjdGlvblwiKTtcbiAgICAgICAgc2VjdGlvbkRpdi5pZCA9IHNlY3Rpb24udG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAvLyBBZGQgc2VjdGlvbiB0aXRsZVxuICAgICAgICBzZWN0aW9uRGl2LmlubmVySFRNTCA9IGA8aDM+JHtzZWN0aW9ufTwvaDM+YDtcblxuICAgICAgICAvLyBBZGQgc2VjdGlvbiBtZW51IGl0ZW1zXG4gICAgICAgIGlmIChzZWN0aW9uID09PSBcIkJlZXJcIikge1xuXG4gICAgICAgICAgICAvL0FkZCB1bml2ZXJzYWwgYmVlciBwcmljZXMgdGV4dFxuICAgICAgICAgICAgc2VjdGlvbkRpdi5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJiZWVyLXByaWNlXCI+KFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DYW4gOiAkNDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Qm90dGxlIDogJDQuNTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+RHJhZnQgOiAkNTwvc3Bhbj5cbiAgICAgICAgICAgICAgICApPC9kaXY+XG4gICAgICAgICAgICBgO1xuXG4gICAgICAgICAgICAvLyBBZGQgYmVlciBuYW1lc1xuICAgICAgICAgICAgbWVudUl0ZW1zW3NlY3Rpb25dLmZvckVhY2goaXRlbSA9PiB7XG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgZGl2IHRvIGhvbGQgbmFtZSBvZiBlYWNoIGJlZXJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoXCJpdGVtLWluZm9cIik7XG4gICAgICAgICAgICAgICAgaXRlbURpdi5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1uYW1lXCI+JHtpdGVtLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAvLyBBcHBlbmQgaXRlbSB0byB0aGUgc2VjdGlvblxuICAgICAgICAgICAgICAgIHNlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTZWN0aW9uIG90aGVyIHRoYW4gQmVlciBzZWN0aW9uXG5cbiAgICAgICAgICAgIG1lbnVJdGVtc1tzZWN0aW9uXS5mb3JFYWNoKGl0ZW0gPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGRpdiB0byBob2xkIG5hbWUgYW5kIHByaWNlIG9mIGVhY2ggaXRlbVxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZChcIml0ZW0taW5mb1wiKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCBpdGVtIG5hbWUgYW5kIHByaWNlIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgaXRlbURpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLW5hbWVcIj4ke2l0ZW0ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tcHJpY2VcIj4ke2l0ZW0ucHJpY2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgYDtcblxuICAgICAgICAgICAgICAgIC8vIEFwcGVuZCBpdGVtIHRvIHRoZSBzZWN0aW9uXG4gICAgICAgICAgICAgICAgc2VjdGlvbkRpdi5hcHBlbmRDaGlsZChpdGVtRGl2KTtcbiAgICAgICAgXG4gICAgICAgICAgICB9KTsgICBcbiAgICAgICAgfVxuICAgICAgICAvLyBBcHBlbmQgc2VjdGlvbiB0byB0aGUgbWVudVxuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb25EaXYpO1xuICAgIH0pO1xuICAgIFxuICAgIC8vIEFwcGVuZCBtZW51IHRvIHRoZSBwYWdlXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xufSBcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgbG9hZEhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IHsgbG9hZEZvb3RlciB9IGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IHsgbG9hZEhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBsb2FkSG91cnMgfSBmcm9tIFwiLi9ob3Vyc1wiO1xuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5cbi8vIExvYWQgaG9tZSBwYWdlXG5sb2FkSGVhZGVyKCk7XG5sb2FkRm9vdGVyKCk7XG5sb2FkSG9tZSgpO1xuXG4vLyBHZXQgRE9NIGVsZW1lbnRzIGZvciBwYWdlIG5hdmlnYXRpb25cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lLWxpbmtcIik7XG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWxpbmtcIik7XG5jb25zdCBob3Vyc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG91cnMtbGlua1wiKTtcbmNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtbGlua1wiKTtcblxuLy8gQWRkIGV2ZW50IGxpc3RlbmVycyB0byBuYXYgYnV0dG9uc1xuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIENsZWFyIG1haW4gY29udGVudFxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAvLyBMb2FkIGhvbWUgcGFnZVxuICAgIGxvYWRIb21lKCk7XG59KTtcblxuaG91cnNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBDbGVhciBtYWluIGNvbnRlbnRcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgLy8gTG9hZCBob3VycyBwYWdlXG4gICAgbG9hZEhvdXJzKCk7XG59KTtcblxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIENsZWFyIG1haW4gY29udGVudFxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAvLyBMb2FkIGhvdXJzIHBhZ2VcbiAgICBsb2FkTWVudSgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=