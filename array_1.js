// array example
let array = [12, 34, 23, 321, 457];
console.log(array);

// in js array hold different types of elements

let array1 = [12, 23.56, true, "array"];
console.log(array1[0]);
console.log(array1[2]);
console.log(array1[5]); // it is undefined because index 6 does not exit
console.log(array1.slice(2, 4));
console.log(array1.length);

// add element in array
array1[4] = 897;
console.log(array1);

// change value of an array
array1[0] = 123.56;
console.log(array1);
