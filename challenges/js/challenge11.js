let mix = "A13B2ZX";
let mulNumbers = mix
  .split("")
  .filter(function (el) {
    return !isNaN(parseInt(el));
  })
  .map(function (el) {
    return el * el;
  })
  .join("");

console.log(mulNumbers);
