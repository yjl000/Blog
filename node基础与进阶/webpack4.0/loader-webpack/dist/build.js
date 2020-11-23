/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/**ken杨敬利123**/// console.log('loader-webpack')
// -! 不会让文件再去通过pre + normal loader来处理了
// !没有normal
// !!什么都不要，只要行内loader
// let str = require('!!inline-loader!./a.js')

// loader 默认是由两部分组成 pitch normal

class Person {
    constructor () {
        this.name = 'kenyang'
    }
    getName () {
        return this.name
    }
}

const ken = new Person();
console.log(ken.getName())
/******/ })()
;
//# sourceMappingURL=build.js.map