/**
 * @module all_about_variables/variable_scopes
 *
 * @description scope (Область видимости) определяет доступ (видимост) к переменным.
 *
 * Различают три типа области видимости - блочный, функциональный, глобальный.
 */

{
  const blockScopedConst = "scoped string";
  var blockScopedVar = "scoped string";
}

// console.log(blockScopedVar);
// console.log(blockScopedConst); // Reference error

function funcScope() {
  var funcScopedVar = "scoped string";

  // console.log(funcScopedVar);
}

funcScope();

// console.log(funcScopedVar); // Reference error
