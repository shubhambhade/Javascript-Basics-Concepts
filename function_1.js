function Average(a, b) {
  let average = Math.round(a + b) / 2;
  console.log("Average : ", average);
}
Average(10, 22.33);

const sum = (p, q) => {
  return p + q;
};
console.log("Sum : ", sum(12, 34));

const hello = () => {
  console.log("Hello sham");
};
// invoke the function
hello();
