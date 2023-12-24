/**
 * this позволяет ссылаться на объект при создании методов
 */

const user = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  getFullName: function (test, test2) {
    return `${this.firstName} ${this.lastName} ${test} ${test2}`;
  },
};

user.getFullName(); // John Doe

const user2 = {
  firstName: "Anna",
  lastName: "Doe",
  age: 33,
};

function getAge() {
  return this.age;
}

function testApplyMethod(...args) {
  return `${this.age} ${args[0]} ${args[1]}`;
}

/**
 * Методы call, apply позволяют один раз изменить контекст this для функции
 * Разница между методами в том, как передаются аргументы
 * Call принимает аргументы через запятую
 * Apply принимает массив аргументов
 */

user.getFullName.call(user2, "test", "test2"); // Anna Doe test test2

testApplyMethod.apply(user2, ["test", "test2"]); // 33 test test2
