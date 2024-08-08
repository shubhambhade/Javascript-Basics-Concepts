let a = 12;
let b = 5;
//Arithmetic operator
console.log("Arithmetic operator");
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a ** b = ", a ** b); //12*12*12*12*12
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a++ = ", a++);
console.log("++b = ", ++b);
let c = 4;
let d = 3;
console.log("c-- = ", c--);
console.log("--d = ", --d);
/*
Arithmetic operator
a + b =  17
a - b =  7
a * b =  60
a ** b =  248832
a / b =  2.4
a % b =  2
a++ =  12
++b =  6
c-- =  4
--d =  2
*/

// Assignment operator
console.log("Assignment Operator");
let x = 23;
console.log("X : ", x);
let y = 1;
y += 5;
console.log("y : ", y);
y -= 3;
console.log("y : ", y);
x *= 10;
console.log("X : ", x);
let z = 12;
z /= 2;
console.log("z : ", z);
let p = 13;
p %= 4;
console.log("p : ", p);
let q = 2;
q **= 3;
console.log("q : ", q);
console.log("\n");

// comparision operator
console.log("Comparision Operator");
let comp1 = 6;
let comp2 = "6";
console.log("com1 == comp2 : ", comp1 == comp2);
console.log("com1 != comp2 : ", comp1 != comp2);
console.log("com1 < comp2 : ", comp1 < comp2);
console.log("com1 <= comp2 : ", comp1 <= comp2);
console.log("com1 > comp2 : ", comp1 > comp2);
console.log("com1 >= comp2 : ", comp1 >= comp2);

console.log("com1 === comp2 : ", comp1 === comp2);
console.log("com1 !== comp2 : ", comp1 !== comp2);
console.log("\n");

// Logical operatorcl
console.log("Logical Operator");
let w = 5;
let u = 6;

console.log(w < u && w != u); // true
console.log(w > u || w != u); //true
console.log(!false); // true
console.log(!true); // false
