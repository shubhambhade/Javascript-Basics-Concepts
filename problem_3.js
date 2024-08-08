/*
filter for numbers divisible by to from a given array.
*/

let arr = [12, 34, 20, 300, 40000, 66, 50, 100];
let a = arr.filter((value) => {
  let div = value % 10 == 0;
  return div;
});
console.log(a);
