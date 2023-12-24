const obj = new Object({ name: "John", age: 20 });

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const source2 = { c: 6, d: 7 };

/**
 * @assign собрает несколько объектов в один
 * При совпадении ключей, значения в target перезаписываются значениями из source
 */

const assign = Object.assign(target, source, source2); // { a: 1, b: 4, c: 6, d: 7 }

/**
 * @create создает новый объект на основе уже существующего
 * Наследует ключи и значения родительского объекта
 * Вторым параметром принимает апи defineProperties,
 * TODO Тут есть какие-то подводные камни, возвращаемый результат отличается от ожидаемого
 */

const create = Object.create(obj, { age: { value: 30, writable: true } });

/**
 * @defineProperties добавляет либо изменяет значения в объект
 * TODO почему-то добавленные свойства не видны в console.log
 */

const defineProperties = new Object({ name: "Doe", age: 30 });
Object.defineProperties(defineProperties, {
  address: { value: "NY City", writable: true },
});

/**
 * @defineProperty похожа на предыдущий метод
 * Так же не отображет добавленные свойства в console.log
 */

const defineProperty = new Object({ name: "John", age: 10 });
Object.defineProperty(defineProperty, "address", {
  value: "NY City",
  writable: true,
});

/**
 * @entries преобразовывает пары key: value в массивы, затем собирает их в один массив
 */

const entries = Object.entries(obj); // [ [ 'name', 'John' ], [ 'age', 20 ] ]

/**
 * @freeze запрещает менять объект
 * Работает только в strict mode
 * Не действует на вложенные объекты
 * @isFrozen проверяет, является ли объект замороженным
 */

const freeze = new Object({ name: "John", age: 10 });
Object.freeze(freeze);
// freeze.age = 20; // TypeError
const isFrozen = Object.isFrozen(freeze); // true

/**
 * @fromEntries - метод, обратный @entries
 * Собирает массив с массивами ключей и значений в объект
 */

const fromEntries = Object.fromEntries(entries); // { name: 'John', age: 20 }

/**
 * @getOwnPropertyDescriptor выводит параметры одного свойства объекта
 * TODO что означает каждое свойство
 */

const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor(obj, "age"); // { value: 20, writable: false, enumerable: true, configurable: false }

/**
 * @getOwnPropertyDescriptors выводит параметры всех свойства объекта
 * TODO что означает каждое свойство
 */

const getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors(obj);

/**
 * {
  name: {
    value: 'John',
    writable: false,
    enumerable: true,
    configurable: false
  },
  age: { value: 20, writable: false, enumerable: true, configurable: false }
}
 */

/**
 * @getOwnPropertyNames возвращает свойства объекта
 * TODO в чем разница этого метода и Object.keys
 */

const getOwnPropertyNames = Object.getOwnPropertyNames(obj); // [ 'name', 'age' ]

/**
 * @getOwnPropertySymbols возвращает массив символьных свойст
 * По-видимому тут речь идет о разных способах создания свойств объекта:
 * с помощью строк и с помощью символов
 * TODO разобраться с созданием свойств объекта
 */

const getOwnPropertySymbols = Object.getOwnPropertySymbols(obj); // []

const symbolProperty = Symbol("a");
const objectWithSymbolProperty = {};
objectWithSymbolProperty.a = "symbol";

const getOwnPropertySymbols2 = Object.getOwnPropertySymbols(
  objectWithSymbolProperty
); // [], не работает, как ожидалось

/**
 * @getPrototypeOf возвращает прототип объекта
 */

const getPrototypeOf = Object.getPrototypeOf(create); // { name: 'John', age: 20 }

/**
 * @groupBy превращает массив объектов в объект, где элементы массива сгруппированы по одному свойству
 * Метод будет добавлен в 21 версии node.js
 */

// const inventory = [
//   { name: "asparagus", type: "vegetables", quantity: 5 },
//   { name: "bananas", type: "fruit", quantity: 0 },
//   { name: "goat", type: "meat", quantity: 23 },
//   { name: "cherries", type: "fruit", quantity: 5 },
//   { name: "fish", type: "meat", quantity: 22 },
// ];

// const result = Object.groupBy(inventory, ({ type }) => type);

/* Result is:
{
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/

/**
 * @hasOwn проверяет наличие свойства в объекте
 */

const hasOwn = Object.hasOwn(obj, "age"); // true

/**
 * @hasOwnProperty проверяет наличие свойства в объекте
 * TODO разница с предыдущим методом
 */

const hasOwnProperty = Object.hasOwnProperty(obj, "age"); // false

/**
 * @objectIs проверяет, являются ли два значения одинаковыми
 * Не является аналогом "==" т.к. не выполняет приведение типов
 * Не является аналогом "===" т.к. по-разному работает с +-0 значениями и NaN
 * Какой именно смысл данного метода - не совсем ясно TODO
 */

const objectIs = Object.is(1, "1"); // false
const isNaNEqual = NaN === NaN; // false
const isObjectNaNEqual = Object.is(NaN, NaN); // true

/**
 * @preventExtension блокирует расширение объекта
 * @isExtensible проверяет возможность расширения объекта
 */

const toPreventExtend = new Object({ name: "John", age: 10 });
Object.preventExtensions(toPreventExtend);
const isExtensible = Object.isExtensible(toPreventExtend); // false

/**
 * @isPrototypeOf проверяет, находится ли объект в цепочке прототипов другого объекта
 */

class Foo {}
class Bar extends Foo {}
class Baz extends Bar {}

const foo = new Foo();
const bar = new Bar();
const baz = new Baz();

const isBazPrototypeOfBaz = Baz.prototype.isPrototypeOf(baz); // true
const isFooPrototypeOfBaz = Foo.prototype.isPrototypeOf(baz); // true

/**
 * @seal запрещает расширять объект и менять свойства объекта (англ "to seal" - запечатать)
 * @isSealed проверяет, является ли объект запечатанным
 */

const toSeal = new Object({ name: "John", age: 10 });
Object.seal(toSeal);
const isSealed = Object.isSealed(toSeal); // true

/**
 * @keys возвращает массив ключей
 * TODO в документации что-то про enumerable string-keyed, т.е. возвращаются не все свойства
 */
const keys = Object.keys(obj); // [ 'name', 'age' ]

/**
 * @propertyIsEnumerable проверяет, является ли свойство объекта "enumerable"
 * TODO, а что именно это значит, еще предстоит выяснить
 */
const propertyIsEnumerable = obj.propertyIsEnumerable("age"); // true

/**
 * @setPrototypeOf меняет прототип объекта
 */

const obj2 = {};
const parent = { foo: "bar" };

Object.setPrototypeOf(obj2, parent);
// console.log(obj.foo); // undefined, Почему-то результат отличатся от примера в документации

/**
 * @toLocaleString выводит объект в виде строки
 * для обычных объектов бесполезен
 */

const toLocaleString = obj.toLocaleString("en-US"); // [object Object]
const toString = obj.toString(); // [object Object]

/**
 * @valueOf - из документации "The this value, converted to an object."
 * Чаще всего ковертирует объект  примитив
 */

const valueOf = obj.valueOf(); // { name: 'John', age: 20 }

/**
 * @values - массив значений объекта
 */

const values = Object.values(obj); // [ 'John', 20 ]
