// for loop
let num = [3, 45, 23, 11, 32, 234];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

//forEach loop --> it is perfrom operations on existing elements.
console.log("forEach loop");
num.forEach((element) => {
  console.log(element * element);
});

// Array.from
console.log("Array.from method");
let name = "sham";
let x = Array.from(name);
console.log(x);

//for-of loop
console.log("for-of loop");
for (let i of num) {
  console.log(i);
}

// for-in loop
console.log("for-in loop");
for (let i in num) {
  console.log(num[i]);
}
