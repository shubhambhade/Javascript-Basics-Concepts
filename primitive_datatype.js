// nn bb ss u
let a = null;
let b = 345;
let c = true;
let d = BigInt(2315);
let e = "Sham";
let f = Symbol("i am symbol");
let g = undefined;
console.log(a, b, c, d, e, f, g);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log("\n");
/*
object
number
boolean
bigint
string
symbol
undefined
*/

// objects non-primitive datatype.
console.log("Non Primitive datatype--> object");
const item = {
  name: "sham",
  roll_no: 12,
  mobile_no: 1234567892,
};
console.log(item);
console.log(typeof item); // object
console.log(item["mobile_no"]);
console.log(item["name"]);
