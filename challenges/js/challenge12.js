let myString = "1,2,3,EE,l,z,e,r,o,_,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
//split String ,
myString = myString.split(",", myString.length);

let solution = myString
  //remove z
  .slice(myString.length - myString.length, myString.length - true)
  .filter(function (elm) {
    //remove numbers
    return isNaN(parseInt(elm));
  })
  .map(function (elm) {
    //remove E
    return elm.length > elm.length / elm.length
      ? (elm = elm[elm.length - elm.length])
      : elm;
  })
  .join("")
  //split String _
  .split("_")
  .filter(function (elm) {
    //remove o
    return elm[elm.length / elm.length];
  })
  .join(" ");
console.log(solution); //Elzero Web School
