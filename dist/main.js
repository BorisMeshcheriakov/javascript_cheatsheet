/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/all_about_variables/hoisting.js":
/*!*********************************************!*\
  !*** ./src/all_about_variables/hoisting.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\ntestVarHoist = \"hoist string\";\nfunction hoist() {\n  // console.log(testVarHoist);\n  // console.log(testConstHoist); // Reference error\n  // console.log(testLetHoist); // Reference error\n}\nhoist();\nvar testVarHoist;\nvar testConstHoist = \"hoist string\";\nvar testLetHoist = \"hoist string\";\n\n//# sourceURL=webpack://my-webpack-project/./src/all_about_variables/hoisting.js?");

/***/ }),

/***/ "./src/all_about_variables/index.js":
/*!******************************************!*\
  !*** ./src/all_about_variables/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hoisting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hoisting */ \"./src/all_about_variables/hoisting.js\");\n/* harmony import */ var _variable_declarations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variable_declarations */ \"./src/all_about_variables/variable_declarations.js\");\n/* harmony import */ var _variable_scopes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variable_scopes */ \"./src/all_about_variables/variable_scopes.js\");\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/all_about_variables/index.js?");

/***/ }),

/***/ "./src/all_about_variables/variable_declarations.js":
/*!**********************************************************!*\
  !*** ./src/all_about_variables/variable_declarations.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nvar testVar = \"test var\";\nvar testConst = \"test const\";\nvar testLet = \"test let\";\n\n//# sourceURL=webpack://my-webpack-project/./src/all_about_variables/variable_declarations.js?");

/***/ }),

/***/ "./src/all_about_variables/variable_scopes.js":
/*!****************************************************!*\
  !*** ./src/all_about_variables/variable_scopes.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n{\n  var blockScopedConst = \"scoped string\";\n  var blockScopedVar = \"scoped string\";\n}\n\n// console.log(blockScopedVar);\n// console.log(blockScopedConst); // Reference error\n\nfunction funcScope() {\n  var funcScopedVar = \"scoped string\";\n\n  // console.log(funcScopedVar);\n}\n\nfuncScope();\n\n// console.log(funcScopedVar); // Reference error\n\n//# sourceURL=webpack://my-webpack-project/./src/all_about_variables/variable_scopes.js?");

/***/ }),

/***/ "./src/data_structures/index.js":
/*!**************************************!*\
  !*** ./src/data_structures/index.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _indexed_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexed_collections */ \"./src/data_structures/indexed_collections/index.js\");\n\n\n//# sourceURL=webpack://my-webpack-project/./src/data_structures/index.js?");

/***/ }),

/***/ "./src/data_structures/indexed_collections/arrays.js":
/*!***********************************************************!*\
  !*** ./src/data_structures/indexed_collections/arrays.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nvar arr = new Array(1, 2, 3, 4, 5); // [ 1, 2 ]\n\nvar species = arr[Symbol.species]; // Undefined, TODO Что такое species\n\nvar length = arr.length; // 2\n\nvar arrIter = arr[Symbol.iterator]();\nvar currentIterValue = arrIter.next().value; // 1\n\nvar at = arr.at(1); // 2\n\nvar arr2 = new Array(6, 7, 8);\nvar concat = arr.concat(arr2); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]\n\nvar copyWithin = arr.copyWithin(0, 3, 5); // [ 4, 5, 3, 4, 5 ], Модифицирует оригинальный массив\n\nvar arr3 = new Array(1, 2, 3, 4, 5);\nvar entries = arr3.entries();\nvar entriesValue = entries.next().value; // [ 0, 1 ]\n\n/**\r\n * Проверяет элементы массива на выполнение условия\r\n * TODO This arg\r\n */\n\nvar every = arr3.every(function (value) {\n  return value > 0;\n}); // true\n\nvar fill = arr3.fill(0, 2, 4); // [ 1, 2, 0, 0, 5 ], Модифицирует оригинальный массив\n\nvar arr4 = new Array(1, 2, 3, 4, 5);\nvar filter = arr4.filter(function (item) {\n  return item > 2;\n}); // [ 3, 4, 5 ]\n\n/**\r\n * Находит первый элемент массива, соответствующий условию\r\n * Элементы перебираются от начала к концу массива\r\n */\n\nvar find = arr4.find(function (item) {\n  return item >= 3;\n}); // 3\n\n/**\r\n * Находит индекс первого элемента массива, соответствующего условию\r\n * Элементы перебираются от начала к концу массива\r\n */\n\nvar findIndex = arr4.findIndex(function (item) {\n  return item >= 3;\n}); // 2\n\n/**\r\n * Находит последний элемент массива, соответствующий условию\r\n * Элементы перебираются от конца к началу массива\r\n */\n\nvar findLast = arr4.findLast(function (item) {\n  return item >= 3;\n}); // 5\n\n/**\r\n * Находит индекс последнего элемента массива, соответствующего условию\r\n * Элементы перебираются от конца к началу массива\r\n */\n\nvar findLastIndex = arr4.findLastIndex(function (item) {\n  return item >= 3;\n}); // 4\n\nvar nonFlatArray = [1, 2, [3, 4], [[5, 6], [7, 8]]];\n\n/**\r\n * Собирает все вложенные массивы в один\r\n * Параметр \"глубины сглаживания\" по умолчанию 1\r\n */\n\nvar flatAll = nonFlatArray.flat(Infinity); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]\nvar flatOneLevel = nonFlatArray.flat(); // [ 1, 2, 3, 4, [ 5, 6 ], [ 7, 8 ] ]\n\n/**\r\n * Метод, объединяющий map и flat\r\n * В примере, вложенный массив [ 3, 4 ] превратился в строку для выполнения выражения num + 1, т.е. [ 3, 4 ] + 1 => \"3,4\" + \"1\" => \"3,41\"\r\n */\n\nvar flatMap = nonFlatArray.flatMap(function (num) {\n  return num + 1;\n}); // [ 2, 3, '3,41', '5,6,7,81' ]\n\n/**\r\n * Выполняет callback для каждого элемента массива\r\n * Не изменяет оригинальный массив\r\n * Не возращет значений, даже если руками прописать условие для return\r\n * По сути просто метод для перебора и выполнения действий с отдельными элементами\r\n */\n\nvar forEach = arr4.forEach(function (el, i, arr) {\n  return el + 1;\n}); // undefined\n\nvar from = Array.from(\"foo\"); // [ 'f', 'o', 'o' ]\n\n// const fromAsync TODO для этого метода нужет развернутый пример\n\nvar includes = arr4.includes(5); // true\n\nvar indexOf = arr4.indexOf(5); // 4\n\nvar isArray = Array.isArray(arr4); // true\n\nvar join = arr4.join(\", \"); // 1, 2, 3, 4, 5\n\nvar keys = arr4.keys(); // Array iterator object, содержащий все ключи\n\nvar lastIndexOf = arr4.lastIndexOf(5); // 4\n\n/**\r\n * Создает новый массив, пропуская каждый элемент старого массива через callback\r\n */\n\nvar map = arr4.map(function (item) {\n  return item + 1;\n}); // [ 2, 3, 4, 5, 6 ]\n\nvar of = Array.of(1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ]\nvar ofEmpty = Array.of(6); // [ 6 ]\n\n/**\r\n * Удаляет последний элемент массива\r\n * Возвращает удаленный элемент\r\n * Изменяет оригинальный массив\r\n */\n\nvar pop = arr4.pop(6); // 5\n\nvar arr5 = new Array(1, 2, 3, 4, 5);\n\n/**\r\n * Добавляет элемент в конец массива\r\n * Возвращает новую длину массива\r\n * Изменяет оригинальный массив\r\n */\n\nvar push = arr5.push(6); // 6\n\n/**\r\n * Под reduce (англ, \"уменьшить\") имеется ввиду \"уменьшить количество зачений массива до одного значения\"\r\n * Принимает 2 параметра: callback и значение по умолчанию\r\n * Callback в свою очередь тоже принимает два параметра:\r\n * Accumulator - результат всех преобразований, в примере это сумма элементов массива на каждом этапе итерации\r\n * CurrentValue - значение элемента на текущей итерации\r\n * Перебор массива проиисходит слева на право\r\n */\nvar arr6 = new Array(1, 2, 3, 4, 5);\nvar reduce = arr6.reduce(function (acc, current) {\n  // console.log(\"accumulator\", acc);\n  // console.log(\"current value\", current);\n  return acc + current;\n}, 0); // 15\n\n/**\r\n * То же, что и reduce, но перебор идет справа налево\r\n */\n\nvar reduceRight = arr6.reduceRight(function (acc, cur) {\n  return acc + cur;\n}, 0); // 15\n\nvar arrReverse = new Array(1, 2, 3, 4, 5);\nvar reverse = arrReverse.reverse(); // [ 5, 4, 3, 2, 1 ], Модифицирует оригинальный массив\n\nvar arrToShift = new Array(1, 2, 3, 4, 5);\n\n/**\r\n * Убирает из массива первый элемент и возвращает его\r\n */\n\nvar shift = arrToShift.shift(); // 1, Модифицирует оригинальный массив\n\nvar arr7 = new Array(1, 2, 3, 4, 5);\nvar slice = arr7.slice(1, 3); // [ 2, 3 ]\n\n/**\r\n * Прогоняет элементы через callback с условием\r\n * Возвращает true, если хотя бы один элемент проходит условие на true\r\n */\n\nvar some = arr7.some(function (el) {\n  return el > 4;\n}); // true\n\nvar arrToSort = new Array(4, 1, 3, 5, 2);\n\n/**\r\n * Сортирует элементы массива\r\n * По умолчанию конвертирует элементы в строки и проверяет их порядок по таблице символов utf-16\r\n * Может быть модифицирован с помощью callback\r\n */\n\nvar sort = arrToSort.sort(); // [ 1, 2, 3, 4, 5 ], Модифицирует оригинальный массив\n\nvar arrToSplice = new Array(1, 2, 3, 4, 5);\n\n/**\r\n * Вырезает часть элементов массива, заменяя другими элементами\r\n * Возвращает массив с удаленными элементами\r\n */\n\nvar splice = arrToSplice.splice(1, 2, 6); // [ 2, 3 ], Модифицирует оригинальный массив\n\n/**\r\n * Применяет toLocaleString к каждому элементу массива\r\n */\n\nvar toLocaleString = arr7.toLocaleString(); // 1,2,3,4,5\n\n/**\r\n * Делает то же, что и reverse, но не изменяет оригинальный массив, а возвращает новый\r\n * Вероятно, сравнительно новый метод, недоступный в node 18\r\n */\nvar toReversed = arr7.toReversed(); // [ 5, 4, 3, 2, 1 ]\n\n/**\r\n * Делает то же, что и sort, но вместо изменения оригинального массива, возвращает новый массив с результатом\r\n * Вероятно, сравнительно новый метод, недоступный в node 18\r\n */\nvar arrToSort2 = new Array(2, 6, 8, 5);\nvar toSorted = arrToSort2.toSorted(); // [ 2, 5, 6, 8 ]\n\n/**\r\n * Так же, как и два предыдущих - аналог splice, но делает копию, вместо изменения оригинала\r\n * Так же, вероятно, новый метод\r\n */\nvar toSpliced = arr7.toSpliced(1, 2, 6); // [ 1, 6, 4, 5 ]\n\n/**\r\n * Превращает каждый элемент массива в строку, затем вызывает join\r\n * Таким образом конвертирует массив в строку\r\n */\nvar toString = arr7.toString(); // 1,2,3,4,5\n\n/**\r\n * Аналог push, но добавляет элемент с начала массива\r\n */\nvar unshift = arr7.unshift(6); // 6, Модифицирует оригинальный массив\n\nvar arr8 = new Array(1, 2, 3, 4, 5);\n\n/**\r\n * Создает итератор\r\n * TODO Разобраться, зачем вообще нужны итераторы\r\n */\nvar values = arr8.values();\n\n/**\r\n * Заменяет элемент массива\r\n * TODO разобраться, зачем нужен этот метод, в чем тличие от toSpliced\r\n * Так же, судя по всему, новый метод\r\n */\nvar withMethod = arr8[\"with\"](2, 6); // [ 1, 2, 6, 4, 5 ]\n\n//# sourceURL=webpack://my-webpack-project/./src/data_structures/indexed_collections/arrays.js?");

/***/ }),

/***/ "./src/data_structures/indexed_collections/index.js":
/*!**********************************************************!*\
  !*** ./src/data_structures/indexed_collections/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrays */ \"./src/data_structures/indexed_collections/arrays.js\");\n\n\n//# sourceURL=webpack://my-webpack-project/./src/data_structures/indexed_collections/index.js?");

/***/ }),

/***/ "./src/data_types/index.js":
/*!*********************************!*\
  !*** ./src/data_types/index.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _primitive_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primitive_types */ \"./src/data_types/primitive_types/index.js\");\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object */ \"./src/data_types/object/index.js\");\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/data_types/index.js?");

/***/ }),

/***/ "./src/data_types/object/index.js":
/*!****************************************!*\
  !*** ./src/data_types/object/index.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ \"./src/data_types/object/object.js\");\n\n\n//# sourceURL=webpack://my-webpack-project/./src/data_types/object/index.js?");

/***/ }),

/***/ "./src/data_types/object/object.js":
/*!*****************************************!*\
  !*** ./src/data_types/object/object.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar obj = new Object({\n  name: \"John\",\n  age: 20\n});\nvar target = {\n  a: 1,\n  b: 2\n};\nvar source = {\n  b: 4,\n  c: 5\n};\nvar source2 = {\n  c: 6,\n  d: 7\n};\n\n/**\r\n * @assign собрает несколько объектов в один\r\n * При совпадении ключей, значения в target перезаписываются значениями из source\r\n */\n\nvar assign = Object.assign(target, source, source2); // { a: 1, b: 4, c: 6, d: 7 }\n\n/**\r\n * @create создает новый объект на основе уже существующего\r\n * Наследует ключи и значения родительского объекта\r\n * Вторым параметром принимает апи defineProperties,\r\n * TODO Тут есть какие-то подводные камни, возвращаемый результат отличается от ожидаемого\r\n */\n\nvar create = Object.create(obj, {\n  age: {\n    value: 30,\n    writable: true\n  }\n});\n\n/**\r\n * @defineProperties добавляет либо изменяет значения в объект\r\n * TODO почему-то добавленные свойства не видны в console.log\r\n */\n\nvar defineProperties = new Object({\n  name: \"Doe\",\n  age: 30\n});\nObject.defineProperties(defineProperties, {\n  address: {\n    value: \"NY City\",\n    writable: true\n  }\n});\n\n/**\r\n * @defineProperty похожа на предыдущий метод\r\n * Так же не отображет добавленные свойства в console.log\r\n */\n\nvar defineProperty = new Object({\n  name: \"John\",\n  age: 10\n});\nObject.defineProperty(defineProperty, \"address\", {\n  value: \"NY City\",\n  writable: true\n});\n\n/**\r\n * @entries преобразовывает пары key: value в массивы, затем собирает их в один массив\r\n */\n\nvar entries = Object.entries(obj); // [ [ 'name', 'John' ], [ 'age', 20 ] ]\n\n/**\r\n * @freeze запрещает менять объект\r\n * Работает только в strict mode\r\n * Не действует на вложенные объекты\r\n * @isFrozen проверяет, является ли объект замороженным\r\n */\n\nvar freeze = new Object({\n  name: \"John\",\n  age: 10\n});\nObject.freeze(freeze);\n// freeze.age = 20; // TypeError\nvar isFrozen = Object.isFrozen(freeze); // true\n\n/**\r\n * @fromEntries - метод, обратный @entries\r\n * Собирает массив с массивами ключей и значений в объект\r\n */\n\nvar fromEntries = Object.fromEntries(entries); // { name: 'John', age: 20 }\n\n/**\r\n * @getOwnPropertyDescriptor выводит параметры одного свойства объекта\r\n * TODO что означает каждое свойство\r\n */\n\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor(obj, \"age\"); // { value: 20, writable: false, enumerable: true, configurable: false }\n\n/**\r\n * @getOwnPropertyDescriptors выводит параметры всех свойства объекта\r\n * TODO что означает каждое свойство\r\n */\n\nvar getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors(obj);\n\n/**\r\n * {\r\n  name: {\r\n    value: 'John',\r\n    writable: false,\r\n    enumerable: true,\r\n    configurable: false\r\n  },\r\n  age: { value: 20, writable: false, enumerable: true, configurable: false }\r\n}\r\n */\n\n/**\r\n * @getOwnPropertyNames возвращает свойства объекта\r\n * TODO в чем разница этого метода и Object.keys\r\n */\n\nvar getOwnPropertyNames = Object.getOwnPropertyNames(obj); // [ 'name', 'age' ]\n\n/**\r\n * @getOwnPropertySymbols возвращает массив символьных свойст\r\n * По-видимому тут речь идет о разных способах создания свойств объекта:\r\n * с помощью строк и с помощью символов\r\n * TODO разобраться с созданием свойств объекта\r\n */\n\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols(obj); // []\n\nvar symbolProperty = Symbol(\"a\");\nvar objectWithSymbolProperty = {};\nobjectWithSymbolProperty.a = \"symbol\";\nvar getOwnPropertySymbols2 = Object.getOwnPropertySymbols(objectWithSymbolProperty); // [], не работает, как ожидалось\n\n/**\r\n * @getPrototypeOf возвращает прототип объекта\r\n */\n\nvar getPrototypeOf = Object.getPrototypeOf(create); // { name: 'John', age: 20 }\n\n/**\r\n * @groupBy превращает массив объектов в объект, где элементы массива сгруппированы по одному свойству\r\n * Метод будет добавлен в 21 версии node.js\r\n */\n\n// const inventory = [\n//   { name: \"asparagus\", type: \"vegetables\", quantity: 5 },\n//   { name: \"bananas\", type: \"fruit\", quantity: 0 },\n//   { name: \"goat\", type: \"meat\", quantity: 23 },\n//   { name: \"cherries\", type: \"fruit\", quantity: 5 },\n//   { name: \"fish\", type: \"meat\", quantity: 22 },\n// ];\n\n// const result = Object.groupBy(inventory, ({ type }) => type);\n\n/* Result is:\r\n{\r\n  vegetables: [\r\n    { name: 'asparagus', type: 'vegetables', quantity: 5 },\r\n  ],\r\n  fruit: [\r\n    { name: \"bananas\", type: \"fruit\", quantity: 0 },\r\n    { name: \"cherries\", type: \"fruit\", quantity: 5 }\r\n  ],\r\n  meat: [\r\n    { name: \"goat\", type: \"meat\", quantity: 23 },\r\n    { name: \"fish\", type: \"meat\", quantity: 22 }\r\n  ]\r\n}\r\n*/\n\n/**\r\n * @hasOwn проверяет наличие свойства в объекте\r\n */\n\nvar hasOwn = Object.hasOwn(obj, \"age\"); // true\n\n/**\r\n * @hasOwnProperty проверяет наличие свойства в объекте\r\n * TODO разница с предыдущим методом\r\n */\n\nvar hasOwnProperty = Object.hasOwnProperty(obj, \"age\"); // false\n\n/**\r\n * @objectIs проверяет, являются ли два значения одинаковыми\r\n * Не является аналогом \"==\" т.к. не выполняет приведение типов\r\n * Не является аналогом \"===\" т.к. по-разному работает с +-0 значениями и NaN\r\n * Какой именно смысл данного метода - не совсем ясно TODO\r\n */\n\nvar objectIs = Object.is(1, \"1\"); // false\nvar isNaNEqual = NaN === NaN; // false\nvar isObjectNaNEqual = Object.is(NaN, NaN); // true\n\n/**\r\n * @preventExtension блокирует расширение объекта\r\n * @isExtensible проверяет возможность расширения объекта\r\n */\n\nvar toPreventExtend = new Object({\n  name: \"John\",\n  age: 10\n});\nObject.preventExtensions(toPreventExtend);\nvar isExtensible = Object.isExtensible(toPreventExtend); // false\n\n/**\r\n * @isPrototypeOf проверяет, находится ли объект в цепочке прототипов другого объекта\r\n */\nvar Foo = /*#__PURE__*/_createClass(function Foo() {\n  _classCallCheck(this, Foo);\n});\nvar Bar = /*#__PURE__*/function (_Foo) {\n  _inherits(Bar, _Foo);\n  var _super = _createSuper(Bar);\n  function Bar() {\n    _classCallCheck(this, Bar);\n    return _super.apply(this, arguments);\n  }\n  return _createClass(Bar);\n}(Foo);\nvar Baz = /*#__PURE__*/function (_Bar) {\n  _inherits(Baz, _Bar);\n  var _super2 = _createSuper(Baz);\n  function Baz() {\n    _classCallCheck(this, Baz);\n    return _super2.apply(this, arguments);\n  }\n  return _createClass(Baz);\n}(Bar);\nvar foo = new Foo();\nvar bar = new Bar();\nvar baz = new Baz();\nvar isBazPrototypeOfBaz = Baz.prototype.isPrototypeOf(baz); // true\nvar isFooPrototypeOfBaz = Foo.prototype.isPrototypeOf(baz); // true\n\n/**\r\n * @seal запрещает расширять объект и менять свойства объекта (англ \"to seal\" - запечатать)\r\n * @isSealed проверяет, является ли объект запечатанным\r\n */\n\nvar toSeal = new Object({\n  name: \"John\",\n  age: 10\n});\nObject.seal(toSeal);\nvar isSealed = Object.isSealed(toSeal); // true\n\n/**\r\n * @keys возвращает массив ключей\r\n * TODO в документации что-то про enumerable string-keyed, т.е. возвращаются не все свойства\r\n */\nvar keys = Object.keys(obj); // [ 'name', 'age' ]\n\n/**\r\n * @propertyIsEnumerable проверяет, является ли свойство объекта \"enumerable\"\r\n * TODO, а что именно это значит, еще предстоит выяснить\r\n */\nvar propertyIsEnumerable = obj.propertyIsEnumerable(\"age\"); // true\n\n/**\r\n * @setPrototypeOf меняет прототип объекта\r\n */\n\nvar obj2 = {};\nvar parent = {\n  foo: \"bar\"\n};\nObject.setPrototypeOf(obj2, parent);\n// console.log(obj.foo); // undefined, Почему-то результат отличатся от примера в документации\n\n/**\r\n * @toLocaleString выводит объект в виде строки\r\n * для обычных объектов бесполезен\r\n */\n\nvar toLocaleString = obj.toLocaleString(\"en-US\"); // [object Object]\nvar toString = obj.toString(); // [object Object]\n\n/**\r\n * @valueOf - из документации \"The this value, converted to an object.\"\r\n * Чаще всего ковертирует объект  примитив\r\n */\n\nvar valueOf = obj.valueOf(); // { name: 'John', age: 20 }\n\n/**\r\n * @values - массив значений объекта\r\n */\n\nvar values = Object.values(obj); // [ 'John', 20 ]\n\n//# sourceURL=webpack://my-webpack-project/./src/data_types/object/object.js?");

/***/ }),

/***/ "./src/data_types/primitive_types/bigint.js":
/*!**************************************************!*\
  !*** ./src/data_types/primitive_types/bigint.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nvar bigInt = BigInt(Number.MAX_SAFE_INTEGER + 1); // 9007199254740992n\n\n//# sourceURL=webpack://my-webpack-project/./src/data_types/primitive_types/bigint.js?");

/***/ }),

/***/ "./src/data_types/primitive_types/index.js":
/*!*************************************************!*\
  !*** ./src/data_types/primitive_types/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bigint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bigint */ \"./src/data_types/primitive_types/bigint.js\");\n/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number */ \"./src/data_types/primitive_types/number.js\");\n/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string */ \"./src/data_types/primitive_types/string.js\");\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/data_types/primitive_types/index.js?");

/***/ }),

/***/ "./src/data_types/primitive_types/number.js":
/*!**************************************************!*\
  !*** ./src/data_types/primitive_types/number.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nvar NUM = 255;\nvar FLOAT = 255.0;\nvar epsilon = Number.EPSILON; // 2.220446049250313e-16\n\nvar maxSafeInteger = Number.MAX_SAFE_INTEGER; // 9007199254740991\n\n/**\r\n * Максимальное безопасное зачение integer, с которым js может работать\r\n * Под безопасностью нужно понимать корректное чтение и сравнение значений\r\n * Такой размер обусловлен форматом хранения чисел с плавающей точкой\r\n * Для больших значений есть bigInt\r\n */\n\nvar minSafeInteger = Number.MIN_SAFE_INTEGER; // -9007199254740991\n\nvar maxValue = Number.MAX_VALUE; // 1.7976931348623157e+308\n\nvar minValue = Number.MIN_VALUE; // 5e-324\n\nvar nan = Number.NaN; // NaN\n\nvar negativeInfinity = Number.NEGATIVE_INFINITY; // -Infinity\n\nvar positiveInfinity = Number.POSITIVE_INFINITY; // Infinity\n\nvar isFinite = Number.isFinite(NUM); // True\n\n/**\r\n * Проверяет, является ли значение +-Infinity или NaN\r\n */\n\nvar isInteger = Number.isInteger(FLOAT); // True\n\n/**\r\n * Проверяет, является ли число integer\r\n * Флоаты, которые можно сконвертировать в integer, такие как 255.0, так же принимает за integer\r\n */\n\nvar isNaN = Number.isNaN(NUM); // False\n\nvar isSafeInteger = Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1); // False\n\nvar parseFloat = Number.parseFloat(FLOAT); // 255\n\nvar parseInt = Number.parseInt(\"255\"); // 255\n\n// TODO Что такое radix\n\nvar toExponential = NUM.toExponential(); // 2.55e+2\n\nvar toFixed = 255.255.toFixed(2); // 255.25\n\nvar toLocaleString = 255 .toLocaleString(\"ar-EG\"); // ٢٥٥\n\nvar toPrecision = 255 .toPrecision(6); // 255.000 ? почему\n\nvar toString = 255 .toString(); // 255\n\nvar valueOf = 255 .valueOf(); // 255\n\n//# sourceURL=webpack://my-webpack-project/./src/data_types/primitive_types/number.js?");

/***/ }),

/***/ "./src/data_types/primitive_types/string.js":
/*!**************************************************!*\
  !*** ./src/data_types/primitive_types/string.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nvar _templateObject;\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\nvar TEST_STRING = \"Lorem ipsum dolor sit amet\";\nvar TEST_STRING2 = \", consectetur adipiscing elit\";\nvar strObject = new String(TEST_STRING);\nvar length = TEST_STRING.length; // 26,  Количество utf-16 символов в строке\n\n// Более новый способ, работает с любыми итерируемыми объектами. Работает с отрицательными индексами\nvar at = TEST_STRING.at(2); // Новая строка \"r\" с символом index === 2.\nvar atNegative = TEST_STRING.at(-2); // Новая строка \"e\" с символом index === -2.\n\n// Старый способ, работает только со строками. Отрицательные индексы не принимает, впрочем, никакой ошибки на отрицательный идекс нет\nvar charAt = TEST_STRING.charAt(2); // Новая строка \"r\" с символом index === 2\n\nvar charCodeAt = TEST_STRING.charCodeAt(2); // 114, utf-16 код символа с индексом 2\n\nvar codePointAt = TEST_STRING.codePointAt(2); // 114, unicode код символа с индексом 2\n\n// TODO Разница charCodeAt и codePointAt\n// TODO Нюансы кодировок codePointAt\n\nvar concat = TEST_STRING.concat(TEST_STRING2, \" 123\", \" 456\"); // Lorem ipsum dolor sit amet, consectetur adipiscing elit 123 456, Объединение нескольких строк\n\nvar endsWith = TEST_STRING.endsWith(\"amet\"); // True, Заканчивается ли строка указанным фрагментом\nvar endsWithIndex = TEST_STRING.endsWith(\"Lor\", 3); // True, Можно указать конец строки вручную, с помощью индекса\n\n// TODO Протестировать отрицательный индекс\n\nvar fromCharCode = String.fromCharCode(114); // r, Создание строки из кода utf-16\n\nvar fromCodePoint = String.fromCodePoint(114); // r\n\n// TODO Разобраться в разнице charCode, codePoint\n\nvar includes = TEST_STRING.includes(\"Lorem\"); // True, Содержит ли строка заданный фрагмент\n\nvar indexOf = TEST_STRING.indexOf(\"dolor\"); // 12,\n\n/**\r\n * Принимает строку, индекс которой надо найти, и индекс, с которого начать поиск (0 по умолчанию)\r\n * Поиск осуществляется от начала к концу строки\r\n * Возвращает индекс первого найденного сопадения. -1, если ничего не найдено\r\n */\n\nvar lastIndexOf = TEST_STRING.lastIndexOf(\"e\"); // 24, Индекс последнего найденного совпадения\n\n/**\r\n * Метод является зеркальным аналогом indexOf\r\n * Поиск от конца к началу\r\n * Индес по умолчанию равен +infinity\r\n * Возвращает индекс первого найденного сопадения. -1, если ничего не найдено\r\n */\n\n// const isWellFormed = TEST_STRING.isWellFormed();\n\n// TODO Почему-то метод isWellFormed отсутствует\n\nvar localeCompare = TEST_STRING.localeCompare(TEST_STRING2); // 1\n\n// TODO Метод с вагоном параметров, разобраться\n\nvar match = TEST_STRING.match(/[A-Z]/g); // [ 'L' ], Сопоставляет строку с регулярным выражением\n\nvar matchAll = TEST_STRING.matchAll(/[A-Z]/g); // TODO Понять вообще, что делает метод\n\nvar normalize = \"Am\\xE9lie\".normalize(); // Amélie, Преобразовывает коды unicode в символы\n\nvar padEnd = TEST_STRING.padEnd(30, \".\"); // Lorem ipsum dolor sit amet.... , Продлжает строку до заданной длины, заполняя указанными символами\n\nvar padStart = TEST_STRING.padStart(30, \".\"); // ....Lorem ipsum dolor sit amet, То же что и padEnd, только с начала строки\n\nvar raw = String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral([\"Hi\\n!\"], [\"Hi\\\\u000A!\"]))); // TODO Что-то фильтрует, не ясно что именно\n\nvar repeat = \"test\".repeat(3); // testtesttest, Делает повторы строки и собирает их в одну\n\nvar replace = TEST_STRING.replace(\"Lorem\", \"123\"); // 123 ipsum dolor sit amet, Ищет часть строки и заменяет ее содержимое. Можно использовать регулярные выражения для поиска\n\nvar replaceAll = TEST_STRING.replaceAll(\"o\", \"1\"); // L1rem ipsum d1l1r sit amet, Ищет все част строки и заменяет их\n\n// TODO в чем разница replace и replaceAll\n\nvar search = TEST_STRING.search(/[A-Z]/g); // 0, Возвращает индекс первого совпадения с регуляркой\n\nvar slice = TEST_STRING.slice(0, 5); // Lorem, Извлекает фрагмент строки по индексам\n\nvar substring = TEST_STRING.substring(0, 5); // Lo, Возвращает фрагмент строки, по индксам\n\n/**\r\n * Substring, иначе работает с отрицательными индексами, любой отрицательный индекс считается началом строки\r\n * Substring отслеживает разницу в размерах индексов и принимает за indexStart большее значение\r\n * Такое впечатление, что Substring был добавлен для транспиляции устаревшего метода substr, больше идей,\r\n * почему он вообще существует у меня нет, т.к. для всех возможных задач, которые я смог придумать,\r\n * подходит Slice\r\n */\n\nvar split = TEST_STRING.split(\" \"); // [ 'Lorem', 'ipsum', 'dolor', 'sit', 'amet' ], Принимает паттерн, по которому делит строку на массив строк\n\nvar startsWith = TEST_STRING.startsWith(\"Lor\"); // True, Проверяет, начинается ли строка с заданной строки\n\nvar toLocaleLowerCase = TEST_STRING.toLocaleLowerCase(\"en-US\"); // lorem ipsum dolor sit amet, Преобразует все символы в нижний регистр с учетом локализации\n\n// TODO в чем именно заключается \"учет локализации\"\n\nvar toLocaleUpperCase = TEST_STRING.toLocaleUpperCase(\"en-US\"); // LOREM IPSUM DOLOR SIT AMET, То же, что и toLocaleLowerCase, только с преобразованием в верхний регистр\n\nvar toLowerCase = TEST_STRING.toLowerCase(); // lorem ipsum dolor sit amet, TODO тоже не понятно, в чем отличие от toLocaleLowerCase\n\nvar toString = TEST_STRING.toString(); // Lorem ipsum dolor sit amet, Метод преобразует объект строки в примитив строки\n\nvar toUpperCase = TEST_STRING.toUpperCase(); // LOREM IPSUM DOLOR SIT AMET, TODO опять же, понять, в чем отличие от toLocaleUpperCase\n\n// const toWellFormed = TEST_STRING.toWellFormed();\n\n// TODO Этот метод тоже почему-то is not a function;\n\nvar TEST_TRIM = \"   Lorem ipsum   \";\nvar trim = TEST_TRIM.trim(); // Lorem ipsum, Обрезает пробелы в начале и конце строки\n\nvar trimEnd = TEST_TRIM.trimEnd(); //    Lorem ipsum, Обрезает пробелы в конце строки\n\nvar trimStart = TEST_TRIM.trimStart(); // Lorem ipsum   , Обрезает пробелы в начале строки\n\nvar valueOf = TEST_STRING.valueOf(); // Lorem ipsum dolor sit amet, TODO как будто бы то же, что и toString, разобраться в чем разница\n\n// const test = \"\";\n// console.log(test[0]); // undefined\n\n//# sourceURL=webpack://my-webpack-project/./src/data_types/primitive_types/string.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _all_about_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all_about_variables */ \"./src/all_about_variables/index.js\");\n/* harmony import */ var _data_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data_types */ \"./src/data_types/index.js\");\n/* harmony import */ var _data_structures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data_structures */ \"./src/data_structures/index.js\");\n/* harmony import */ var _using_this_keyword_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./using_this_keyword.js */ \"./src/using_this_keyword.js\");\n\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/main.js?");

/***/ }),

/***/ "./src/using_this_keyword.js":
/*!***********************************!*\
  !*** ./src/using_this_keyword.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * this позволяет ссылаться на объект при создании методов\r\n */\n\nvar user = {\n  firstName: \"John\",\n  lastName: \"Doe\",\n  age: 22,\n  getFullName: function getFullName(test, test2) {\n    return \"\".concat(this.firstName, \" \").concat(this.lastName, \" \").concat(test, \" \").concat(test2);\n  }\n};\nuser.getFullName(); // John Doe\n\nvar user2 = {\n  firstName: \"Anna\",\n  lastName: \"Doe\",\n  age: 33\n};\nfunction getAge() {\n  return this.age;\n}\nfunction testApplyMethod() {\n  return \"\".concat(this.age, \" \").concat(arguments.length <= 0 ? undefined : arguments[0], \" \").concat(arguments.length <= 1 ? undefined : arguments[1]);\n}\n\n/**\r\n * Методы call, apply позволяют один раз изменить контекст this для функции\r\n * Разница между методами в том, как передаются аргументы\r\n * Call принимает аргументы через запятую\r\n * Apply принимает массив аргументов\r\n */\n\nuser.getFullName.call(user2, \"test\", \"test2\"); // Anna Doe test test2\n\ntestApplyMethod.apply(user2, [\"test\", \"test2\"]); // 33 test test2\n\n//# sourceURL=webpack://my-webpack-project/./src/using_this_keyword.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;