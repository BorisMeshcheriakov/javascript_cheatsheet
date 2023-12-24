const NUM = 255;
const FLOAT = 255.0;

const epsilon = Number.EPSILON; // 2.220446049250313e-16

const maxSafeInteger = Number.MAX_SAFE_INTEGER; // 9007199254740991

/**
 * Максимальное безопасное зачение integer, с которым js может работать
 * Под безопасностью нужно понимать корректное чтение и сравнение значений
 * Такой размер обусловлен форматом хранения чисел с плавающей точкой
 * Для больших значений есть bigInt
 */

const minSafeInteger = Number.MIN_SAFE_INTEGER; // -9007199254740991

const maxValue = Number.MAX_VALUE; // 1.7976931348623157e+308

const minValue = Number.MIN_VALUE; // 5e-324

const nan = Number.NaN; // NaN

const negativeInfinity = Number.NEGATIVE_INFINITY; // -Infinity

const positiveInfinity = Number.POSITIVE_INFINITY; // Infinity

const isFinite = Number.isFinite(NUM); // True

/**
 * Проверяет, является ли значение +-Infinity или NaN
 */

const isInteger = Number.isInteger(FLOAT); // True

/**
 * Проверяет, является ли число integer
 * Флоаты, которые можно сконвертировать в integer, такие как 255.0, так же принимает за integer
 */

const isNaN = Number.isNaN(NUM); // False

const isSafeInteger = Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1); // False

const parseFloat = Number.parseFloat(FLOAT); // 255

const parseInt = Number.parseInt("255"); // 255

// TODO Что такое radix

const toExponential = NUM.toExponential(); // 2.55e+2

const toFixed = (255.255).toFixed(2); // 255.25

const toLocaleString = (255).toLocaleString("ar-EG"); // ٢٥٥

const toPrecision = (255).toPrecision(6); // 255.000 ? почему

const toString = (255).toString(); // 255

const valueOf = (255).valueOf(); // 255
