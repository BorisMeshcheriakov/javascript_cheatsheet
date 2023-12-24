const arr = new Array(1, 2, 3, 4, 5); // [ 1, 2 ]

const species = arr[Symbol.species]; // Undefined, TODO Что такое species

const length = arr.length; // 2

const arrIter = arr[Symbol.iterator]();

const currentIterValue = arrIter.next().value; // 1

const at = arr.at(1); // 2

const arr2 = new Array(6, 7, 8);

const concat = arr.concat(arr2); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

const copyWithin = arr.copyWithin(0, 3, 5); // [ 4, 5, 3, 4, 5 ], Модифицирует оригинальный массив

const arr3 = new Array(1, 2, 3, 4, 5);

const entries = arr3.entries();

const entriesValue = entries.next().value; // [ 0, 1 ]

/**
 * Проверяет элементы массива на выполнение условия
 * TODO This arg
 */

const every = arr3.every((value) => value > 0); // true

const fill = arr3.fill(0, 2, 4); // [ 1, 2, 0, 0, 5 ], Модифицирует оригинальный массив

const arr4 = new Array(1, 2, 3, 4, 5);

const filter = arr4.filter((item) => item > 2); // [ 3, 4, 5 ]

/**
 * Находит первый элемент массива, соответствующий условию
 * Элементы перебираются от начала к концу массива
 */

const find = arr4.find((item) => item >= 3); // 3

/**
 * Находит индекс первого элемента массива, соответствующего условию
 * Элементы перебираются от начала к концу массива
 */

const findIndex = arr4.findIndex((item) => item >= 3); // 2

/**
 * Находит последний элемент массива, соответствующий условию
 * Элементы перебираются от конца к началу массива
 */

const findLast = arr4.findLast((item) => item >= 3); // 5

/**
 * Находит индекс последнего элемента массива, соответствующего условию
 * Элементы перебираются от конца к началу массива
 */

const findLastIndex = arr4.findLastIndex((item) => item >= 3); // 4

const nonFlatArray = [
  1,
  2,
  [3, 4],
  [
    [5, 6],
    [7, 8],
  ],
];

/**
 * Собирает все вложенные массивы в один
 * Параметр "глубины сглаживания" по умолчанию 1
 */

const flatAll = nonFlatArray.flat(Infinity); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
const flatOneLevel = nonFlatArray.flat(); // [ 1, 2, 3, 4, [ 5, 6 ], [ 7, 8 ] ]

/**
 * Метод, объединяющий map и flat
 * В примере, вложенный массив [ 3, 4 ] превратился в строку для выполнения выражения num + 1, т.е. [ 3, 4 ] + 1 => "3,4" + "1" => "3,41"
 */

const flatMap = nonFlatArray.flatMap((num) => num + 1); // [ 2, 3, '3,41', '5,6,7,81' ]

/**
 * Выполняет callback для каждого элемента массива
 * Не изменяет оригинальный массив
 * Не возращет значений, даже если руками прописать условие для return
 * По сути просто метод для перебора и выполнения действий с отдельными элементами
 */

const forEach = arr4.forEach((el, i, arr) => el + 1); // undefined

const from = Array.from("foo"); // [ 'f', 'o', 'o' ]

// const fromAsync TODO для этого метода нужет развернутый пример

const includes = arr4.includes(5); // true

const indexOf = arr4.indexOf(5); // 4

const isArray = Array.isArray(arr4); // true

const join = arr4.join(", "); // 1, 2, 3, 4, 5

const keys = arr4.keys(); // Array iterator object, содержащий все ключи

const lastIndexOf = arr4.lastIndexOf(5); // 4

/**
 * Создает новый массив, пропуская каждый элемент старого массива через callback
 */

const map = arr4.map((item) => item + 1); // [ 2, 3, 4, 5, 6 ]

const of = Array.of(1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ]
const ofEmpty = Array.of(6); // [ 6 ]

/**
 * Удаляет последний элемент массива
 * Возвращает удаленный элемент
 * Изменяет оригинальный массив
 */

const pop = arr4.pop(6); // 5

const arr5 = new Array(1, 2, 3, 4, 5);

/**
 * Добавляет элемент в конец массива
 * Возвращает новую длину массива
 * Изменяет оригинальный массив
 */

const push = arr5.push(6); // 6

/**
 * Под reduce (англ, "уменьшить") имеется ввиду "уменьшить количество зачений массива до одного значения"
 * Принимает 2 параметра: callback и значение по умолчанию
 * Callback в свою очередь тоже принимает два параметра:
 * Accumulator - результат всех преобразований, в примере это сумма элементов массива на каждом этапе итерации
 * CurrentValue - значение элемента на текущей итерации
 * Перебор массива проиисходит слева на право
 */
const arr6 = new Array(1, 2, 3, 4, 5);
const reduce = arr6.reduce((acc, current) => {
  // console.log("accumulator", acc);
  // console.log("current value", current);
  return acc + current;
}, 0); // 15

/**
 * То же, что и reduce, но перебор идет справа налево
 */

const reduceRight = arr6.reduceRight((acc, cur) => {
  return acc + cur;
}, 0); // 15

const arrReverse = new Array(1, 2, 3, 4, 5);

const reverse = arrReverse.reverse(); // [ 5, 4, 3, 2, 1 ], Модифицирует оригинальный массив

const arrToShift = new Array(1, 2, 3, 4, 5);

/**
 * Убирает из массива первый элемент и возвращает его
 */

const shift = arrToShift.shift(); // 1, Модифицирует оригинальный массив

const arr7 = new Array(1, 2, 3, 4, 5);

const slice = arr7.slice(1, 3); // [ 2, 3 ]

/**
 * Прогоняет элементы через callback с условием
 * Возвращает true, если хотя бы один элемент проходит условие на true
 */

const some = arr7.some((el) => el > 4); // true

const arrToSort = new Array(4, 1, 3, 5, 2);

/**
 * Сортирует элементы массива
 * По умолчанию конвертирует элементы в строки и проверяет их порядок по таблице символов utf-16
 * Может быть модифицирован с помощью callback
 */

const sort = arrToSort.sort(); // [ 1, 2, 3, 4, 5 ], Модифицирует оригинальный массив

const arrToSplice = new Array(1, 2, 3, 4, 5);

/**
 * Вырезает часть элементов массива, заменяя другими элементами
 * Возвращает массив с удаленными элементами
 */

const splice = arrToSplice.splice(1, 2, 6); // [ 2, 3 ], Модифицирует оригинальный массив

/**
 * Применяет toLocaleString к каждому элементу массива
 */

const toLocaleString = arr7.toLocaleString(); // 1,2,3,4,5

/**
 * Делает то же, что и reverse, но не изменяет оригинальный массив, а возвращает новый
 * Вероятно, сравнительно новый метод, недоступный в node 18
 */
const toReversed = arr7.toReversed(); // [ 5, 4, 3, 2, 1 ]

/**
 * Делает то же, что и sort, но вместо изменения оригинального массива, возвращает новый массив с результатом
 * Вероятно, сравнительно новый метод, недоступный в node 18
 */
const arrToSort2 = new Array(2, 6, 8, 5);
const toSorted = arrToSort2.toSorted(); // [ 2, 5, 6, 8 ]

/**
 * Так же, как и два предыдущих - аналог splice, но делает копию, вместо изменения оригинала
 * Так же, вероятно, новый метод
 */
const toSpliced = arr7.toSpliced(1, 2, 6); // [ 1, 6, 4, 5 ]

/**
 * Превращает каждый элемент массива в строку, затем вызывает join
 * Таким образом конвертирует массив в строку
 */
const toString = arr7.toString(); // 1,2,3,4,5

/**
 * Аналог push, но добавляет элемент с начала массива
 */
const unshift = arr7.unshift(6); // 6, Модифицирует оригинальный массив

const arr8 = new Array(1, 2, 3, 4, 5);

/**
 * Создает итератор
 * TODO Разобраться, зачем вообще нужны итераторы
 */
const values = arr8.values();

/**
 * Заменяет элемент массива
 * TODO разобраться, зачем нужен этот метод, в чем тличие от toSpliced
 * Так же, судя по всему, новый метод
 */
const withMethod = arr8.with(2, 6); // [ 1, 2, 6, 4, 5 ]
