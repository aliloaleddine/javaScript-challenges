console.log("challenge 1");
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// write code Here
console.log(my.slice(zero, counter).concat("Osama").reverse()); //["Osama","Elham","Mazero","Ahmed"]
console.log(my.slice(-my.indexOf(zero), counter).reverse()); // ["Elham","Mazero"]
console.log(
  my
    .slice(-my.indexOf(zero), counter)
    .reverse()
    [zero].slice(zero, -counter)
    .concat(my.slice(-my.indexOf(zero), counter)[zero].slice(counter))
); //Elzero
console.log(
  my
    .slice(-my.indexOf(zero), counter)
    [zero].slice(counter - my.indexOf(zero), my.indexOf(zero))
    .concat(
      my
        .slice(-my.indexOf(zero), counter)
        [zero][
          my.slice(-my.indexOf(zero), counter)[zero].length + my.indexOf(zero)
        ].toLocaleUpperCase()
    )
); //"rO"
// console.log("----------------");
