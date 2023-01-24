let TheTitle = "Elzero",
  TheDescription = "Elzero Web School",
  TheDate = "25/10";
let Card = `<div calss='card'> 
<h1>Hello ${TheTitle}</h1>
<p>${TheDescription}</p>
<span>${TheDate}</span>
</div>
`;
document.write(`${Card.repeat(4)}`);
