console.log("challenge 1");
/*Function Arrow Challeges
 */
// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]
// let names = function (...names) {
//   // Parmeter
//   return `String [${names.join("],[")}]=> Done !`;
// };
// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
let names = (...names) => `String [${names.join("],[")}]=> Done !`;
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

console.log("----------------");

console.log("challenge 2");

// String [Osama], [Mohamed] , [Ali] , [Ibrahim] => Done !
// [1] Replace ??? In Rrturn Statement To Get The Output
// [2] Create The Same Funtion With Regular Syntax
let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => one + two + nums[nums.length - nums.length];
// console.log(
//   calc(
//     10,
//     myNumbers[myNumbers.length / myNumbers.length],
//     myNumbers[myNumbers.length - myNumbers.length]
//   )
// ); //80
let calc = function (one, two, ...nums) {
  return one + two + nums[nums.length - nums.length];
};
console.log(
  calc(
    10,
    myNumbers[myNumbers.length / myNumbers.length],
    myNumbers[myNumbers.length - myNumbers.length]
  )
); //80
console.log("----------------");
