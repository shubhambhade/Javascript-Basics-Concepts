let js = "javascript is programing language.";

// property
console.log(js.length);
console.log(typeof js);

// methods
console.log(js.startsWith("j"));
console.log(js.endsWith("."));
console.log(js.toUpperCase());
console.log(js.toLowerCase());

// index slicing concept
console.log(js.slice(2, 8));
console.log(js.slice(4));

console.log(js.replace("javascript", "python"));

let sentence = "   hello program";
console.log(sentence.trim());

console.log(js.concat(sentence));

let a = js.slice("javascript is programing".length);
console.log(a);
