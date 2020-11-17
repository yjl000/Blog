/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// console.log('loader-webpack')
// -! 不会让文件再去通过pre + normal loader来处理了
// !没有normal
// !!什么都不要，只要行内loader
// let str = require('!!inline-loader!./a.js')
// loader 默认是由两部分组成 pitch normal
var Person = /*#__PURE__*/function () {
  function Person() {
    _classCallCheck(this, Person);

    this.name = 'kenyang';
  }

  _createClass(Person, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }]);

  return Person;
}();

var ken = new Person();
console.log(ken.getName());
/******/ })()
;
//# sourceMappingURL=build.js.map