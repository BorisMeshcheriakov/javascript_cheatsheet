/**
 * @module all_about_variables/hoisting
 *
 * @description Hoisting - механизм, при котором объявления переменных и функций переносятся
 * в начало области видимости перед выполнением кода
 */

testVarHoist = "hoist string";

// Сперва объявим функцию, в которой попытаемся обратиться к переменным
function hoist() {
  // console.log(testVarHoist); // "hoist string"
  // console.log(testConstHoist); // Reference error
  // console.log(testLetHoist); // Reference error
}

// Вызовем функцию перед объявлением переменных
hoist();

// Объявим переменные, к которым обращается ранее объявленная функция
var testVarHoist;
const testConstHoist = "hoist string";
let testLetHoist = "hoist string";
