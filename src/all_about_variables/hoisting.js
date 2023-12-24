testVarHoist = "hoist string";

function hoist() {
  // console.log(testVarHoist);
  // console.log(testConstHoist); // Reference error
  // console.log(testLetHoist); // Reference error
}

hoist();

var testVarHoist;
const testConstHoist = "hoist string";
let testLetHoist = "hoist string";
