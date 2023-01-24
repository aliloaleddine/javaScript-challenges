// challenge 1
console.log("challenge 1");
let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

//find Smallest number in all variables and return integer
console.log(Math.trunc(Math.min(a, b, c, d)));
console.log("-----------------");

//use variable a + d one time to get the needed output
console.log(Math.pow(a, Math.trunc(d))); //10000
console.log("-----------------");

//get integer "2" from d variable with 4 methods
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(parseInt(d));
console.log("-----------------");

//use variables b + d to get this values
console.log((parseInt(b) / Math.ceil(d)).toFixed(2)); //66.67 =ّ> string
console.log(parseInt((parseInt(b) / Math.ceil(d)).toFixed(2))); //66 => number

console.log("-----------------");
