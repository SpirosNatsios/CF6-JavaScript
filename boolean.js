let b1 = true;
let b2 = new Boolean(true);
let b3 = Boolean("1");

// Falsy values
// 0, 0.0, 0n
// "", '', ``
// null, undefined, NaN

// Truthy values all the others

console.log("1 is: ", Boolean(1)); //true
console.log("0 is ", Boolean(0)); // false
console.log("Empty String: ", Boolean("")); //false
console.log("Null is: ", Boolean(null)); //false
console.log("Undefined is: ", Boolean(undefined)); //false
console.log("Object is ", Boolean({})); //true
console.log("Array is ", Boolean([])); //true
console.log("Boolean object: ", Boolean(new Boolean(false))); //true

while (1) {
    break;
}

do {
    console.log("Hello CF!");
} while (0);

for (; 1; ) {
    console.log("Hello Again");
    break;
}
