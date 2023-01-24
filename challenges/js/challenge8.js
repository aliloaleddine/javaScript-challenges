let maAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samaera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Samah",
  "Ameer",
  "Omar",
  "Othean",
  "Otham",
  "Amany",
  "Samia",
  "Anwar",
];
document.write(`<div>We Have X Admins</div>`);
document.write(`<div>We Have ${maAdmins.indexOf("Stop")} Admins</div>`);
for (let i = 0; i < maAdmins.indexOf("Stop"); i++) {
  let n = 0;
  document.write("<hr><div>");
  document.write(`The Admin For Team ${i + 1} Is ${maAdmins[i]}`);
  document.write(`<h1>Team Members:</h1>`);
  for (let j = 0; j < myEmployees.length; j++) {
    if (maAdmins[i][0] == myEmployees[j][0]) {
      n++;
      document.write(`<p>${n}-${myEmployees[j]}</p>`);
    }
  }
  document.write("</div>");
}
