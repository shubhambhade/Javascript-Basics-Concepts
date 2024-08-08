let a = [12, 23, 45, "hello", true, false];

let b = a.toString();
console.log(b);

let c = a.join("_");
console.log(c, typeof c);

// delete the  last element of an array
let d = a.pop();
console.log(a);
console.log(d); // pop returns popped element

//modify the array
a.push(12);
console.log(a);

// remove 1st element and show deleted element
let e = a.shift();
console.log(e);

// add new element in array
let f = a.unshift(23472);
console.log(f);
console.log(a);

let a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(a1.length);
delete a1[0];
console.log(a1);
console.log(a1.length);

let a2 = [11, 12, 13, 14, 15, 16, 17, 18, 19];
let a3 = [111, 112, 113];
let newArray = a1.concat(a2, a3);
console.log(newArray);

// using function we can sort the array acending order.
let compare = (a, b) => {
  return a - b;
};

// using function we can sort the array decending order.
let compare1 = (a, b) => {
  return b - a;
};
// it sort the alpha betically
let a4 = [234, 23, 11, 7, 6, 3, 987];
console.log("Reversed Array : ", a4.reverse());
a4.sort(compare);
console.log(a4);
a4.sort(compare1);
console.log(a4);

// splice and slice
let a5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let deletedElement = a5.splice(2, 3, 34, 45, 67);
console.log(a5);

console.log(deletedElement, typeof deletedElement);

let newArray1 = a5.slice(3);
console.log(newArray1);
