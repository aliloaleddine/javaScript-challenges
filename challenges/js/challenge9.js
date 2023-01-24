function showDetails(a = "Unknown", b = "Unknown", c = false) {
  let Name;
  let Age;
  let Status;
  let info = [a, b, c];

  for (i = 0; i < 3; i++) {
    typeof info[i] == "string"
      ? (Name = info[i])
      : typeof info[i] == "number"
      ? (Age = info[i])
      : info[i] == true
      ? (Status = "Your Are Available For Hire")
      : (Status = "Your Are Not Available For Hire");
  }

  document.write(`Hello ${Name}, Your Age Is ${Age},${Status}`);
}
showDetails();
