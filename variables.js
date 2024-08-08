console.log("var , let and const");
var a = 12;
var b = "sham";
var c = true;
let d = 34.78; // let d =  true; let cannot be redeclared.
var e = null;
var e = 12; // var can be redeclared and updated.
var f = undefined;
{
  var a = " Harry"; // Harry
  console.log("a = ", a);
  let d = "Ram";
  console.log("d = ", d); // Ram
}
console.log("a = ", a); // Harry
console.log("d = ", d); //34.78

// const cannot be changed and redeclared.
const number = 45;
console.log("number : ", number);
