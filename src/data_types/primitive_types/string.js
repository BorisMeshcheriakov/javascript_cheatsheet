/**
 * Методы типа данных string
 * @module data_types/primitive_types/string
 */

const TEST_STRING = "Lorem ipsum dolor sit amet";
const TEST_STRING2 = ", consectetur adipiscing elit";

const strObject = new String(TEST_STRING);

const length = TEST_STRING.length; // 26,  Количество utf-16 символов в строке

// Более новый способ, работает с любыми итерируемыми объектами. Работает с отрицательными индексами
const at = TEST_STRING.at(2); // Новая строка "r" с символом index === 2.
const atNegative = TEST_STRING.at(-2); // Новая строка "e" с символом index === -2.

// Старый способ, работает только со строками. Отрицательные индексы не принимает, впрочем, никакой ошибки на отрицательный идекс нет
const charAt = TEST_STRING.charAt(2); // Новая строка "r" с символом index === 2

const charCodeAt = TEST_STRING.charCodeAt(2); // 114, utf-16 код символа с индексом 2

const codePointAt = TEST_STRING.codePointAt(2); // 114, unicode код символа с индексом 2

// TODO Разница charCodeAt и codePointAt
// TODO Нюансы кодировок codePointAt

const concat = TEST_STRING.concat(TEST_STRING2, " 123", " 456"); // Lorem ipsum dolor sit amet, consectetur adipiscing elit 123 456, Объединение нескольких строк

const endsWith = TEST_STRING.endsWith("amet"); // True, Заканчивается ли строка указанным фрагментом
const endsWithIndex = TEST_STRING.endsWith("Lor", 3); // True, Можно указать конец строки вручную, с помощью индекса

// TODO Протестировать отрицательный индекс

const fromCharCode = String.fromCharCode(114); // r, Создание строки из кода utf-16

const fromCodePoint = String.fromCodePoint(114); // r

// TODO Разобраться в разнице charCode, codePoint

const includes = TEST_STRING.includes("Lorem"); // True, Содержит ли строка заданный фрагмент

const indexOf = TEST_STRING.indexOf("dolor"); // 12,

/**
 * Принимает строку, индекс которой надо найти, и индекс, с которого начать поиск (0 по умолчанию)
 * Поиск осуществляется от начала к концу строки
 * Возвращает индекс первого найденного сопадения. -1, если ничего не найдено
 */

const lastIndexOf = TEST_STRING.lastIndexOf("e"); // 24, Индекс последнего найденного совпадения

/**
 * Метод является зеркальным аналогом indexOf
 * Поиск от конца к началу
 * Индес по умолчанию равен +infinity
 * Возвращает индекс первого найденного сопадения. -1, если ничего не найдено
 */

// const isWellFormed = TEST_STRING.isWellFormed();

// TODO Почему-то метод isWellFormed отсутствует

const localeCompare = TEST_STRING.localeCompare(TEST_STRING2); // 1

// TODO Метод с вагоном параметров, разобраться

const match = TEST_STRING.match(/[A-Z]/g); // [ 'L' ], Сопоставляет строку с регулярным выражением

const matchAll = TEST_STRING.matchAll(/[A-Z]/g); // TODO Понять вообще, что делает метод

const normalize = "\u0041\u006d\u00e9\u006c\u0069\u0065".normalize(); // Amélie, Преобразовывает коды unicode в символы

const padEnd = TEST_STRING.padEnd(30, "."); // Lorem ipsum dolor sit amet.... , Продлжает строку до заданной длины, заполняя указанными символами

const padStart = TEST_STRING.padStart(30, "."); // ....Lorem ipsum dolor sit amet, То же что и padEnd, только с начала строки

const raw = String.raw`Hi\u000A!`; // TODO Что-то фильтрует, не ясно что именно

const repeat = "test".repeat(3); // testtesttest, Делает повторы строки и собирает их в одну

const replace = TEST_STRING.replace("Lorem", "123"); // 123 ipsum dolor sit amet, Ищет часть строки и заменяет ее содержимое. Можно использовать регулярные выражения для поиска

const replaceAll = TEST_STRING.replaceAll("o", "1"); // L1rem ipsum d1l1r sit amet, Ищет все част строки и заменяет их

// TODO в чем разница replace и replaceAll

const search = TEST_STRING.search(/[A-Z]/g); // 0, Возвращает индекс первого совпадения с регуляркой

const slice = TEST_STRING.slice(0, 5); // Lorem, Извлекает фрагмент строки по индексам

const substring = TEST_STRING.substring(0, 5); // Lo, Возвращает фрагмент строки, по индксам

/**
 * Substring, иначе работает с отрицательными индексами, любой отрицательный индекс считается началом строки
 * Substring отслеживает разницу в размерах индексов и принимает за indexStart большее значение
 * Такое впечатление, что Substring был добавлен для транспиляции устаревшего метода substr, больше идей,
 * почему он вообще существует у меня нет, т.к. для всех возможных задач, которые я смог придумать,
 * подходит Slice
 */

const split = TEST_STRING.split(" "); // [ 'Lorem', 'ipsum', 'dolor', 'sit', 'amet' ], Принимает паттерн, по которому делит строку на массив строк

const startsWith = TEST_STRING.startsWith("Lor"); // True, Проверяет, начинается ли строка с заданной строки

const toLocaleLowerCase = TEST_STRING.toLocaleLowerCase("en-US"); // lorem ipsum dolor sit amet, Преобразует все символы в нижний регистр с учетом локализации

// TODO в чем именно заключается "учет локализации"

const toLocaleUpperCase = TEST_STRING.toLocaleUpperCase("en-US"); // LOREM IPSUM DOLOR SIT AMET, То же, что и toLocaleLowerCase, только с преобразованием в верхний регистр

const toLowerCase = TEST_STRING.toLowerCase(); // lorem ipsum dolor sit amet, TODO тоже не понятно, в чем отличие от toLocaleLowerCase

const toString = TEST_STRING.toString(); // Lorem ipsum dolor sit amet, Метод преобразует объект строки в примитив строки

const toUpperCase = TEST_STRING.toUpperCase(); // LOREM IPSUM DOLOR SIT AMET, TODO опять же, понять, в чем отличие от toLocaleUpperCase

// const toWellFormed = TEST_STRING.toWellFormed();

// TODO Этот метод тоже почему-то is not a function;

const TEST_TRIM = "   Lorem ipsum   ";

const trim = TEST_TRIM.trim(); // Lorem ipsum, Обрезает пробелы в начале и конце строки

const trimEnd = TEST_TRIM.trimEnd(); //    Lorem ipsum, Обрезает пробелы в конце строки

const trimStart = TEST_TRIM.trimStart(); // Lorem ipsum   , Обрезает пробелы в начале строки

const valueOf = TEST_STRING.valueOf(); // Lorem ipsum dolor sit amet, TODO как будто бы то же, что и toString, разобраться в чем разница

// const test = "";
// console.log(test[0]); // undefined
