/*
string challenge
All Solutions must be in one chain
you can use concatenate
*/
let a = "Elzero web school";
console.log("challenge 1");
//include this methods in your solution [slice,charAt]
console.log(`${a.charAt(2).toUpperCase()}${a.slice(3, 6)}`); //zero
console.log("------------");

console.log("challenge 2");
// 8 H
console.log(`${a[13].toUpperCase().repeat(8)}`); //HHHHHHHH
console.log("------------");

console.log("challenge 3");
//return array
console.log(a.split(" ", 1)); //[Elezro]
console.log("------------");

console.log("challenge 4");
//uses only "substr" method +template literals in your solution
console.log(`${a.substr(0, 6)} ${a.substr(11, 6)}`); //Elzero school
console.log("------------");

console.log("challenge 5");
//soution must be dynamic and string may change
console.log(
  `${a[0].toLocaleLowerCase()}${a.substr(1, a.length).toUpperCase()}`
); //eLEZRO WEB SCHOOL
console.log("------------");
