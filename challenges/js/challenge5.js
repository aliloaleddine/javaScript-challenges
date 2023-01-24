/* 
if challenge
*/
console.log("challenge 1");
let a = 10;
if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("a > 40");
} else {
  console.log("unknown");
}
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log(">40")
  : console.log("unknown");
console.log("------------");

console.log("challenge 2");
//write with ternary if syntax
let st = "Elzero Web School";
if ((2 * st.length).toString() === "34") {
  console.log("Good");
}
console.log("------------");

console.log("challenge 3");
// w position May Change
if (st[st.indexOf("W")] === "W") {
  console.log("God");
}
console.log("------------");

console.log("challenge 4");
if (st !== "string") {
  console.log("Good");
}
console.log("------------");

console.log("challenge 5");

if (typeof st.length === "number") {
  console.log("Good");
}
console.log("------------");

console.log("challenge 6");

if (st.substr(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
