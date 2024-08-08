// map, filter , reduce high order array methods

let arr = [45, 23, 21];
console.log("Array : ");
console.log(arr);
console.log("Map method : ");
// it creates new array
let a = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value + 1;
});
console.log(a);

// Array filter method
console.log("filter method : ");
let arr2 = [45, 23, 21, 0, 3, 5];
let a1 = arr2.filter((value) => {
  return value < 10;
});
console.log(a1);

// reduce method
console.log("reduce method : ");
let arr3 = [1, 2, 3, 4, 3, 5, 4, 8];

const reduce_func = (a, b) => {
  return a + b;
};
let a3 = arr3.reduce(reduce_func);
console.log(a3);

// another way
let a4 = arr3.reduce((a, b) => {
  return a + b;
});
console.log(a4);
