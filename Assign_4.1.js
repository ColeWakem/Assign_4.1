function bookEnd(){
  var firstName = String(document.getElementById("firstName").value);
  console.log(firstName);
  var lastName = String(document.getElementById("lastName").value);
  console.log(lastName);

  document.getElementById("output").innerHTML= firstName + " " + lastName;
}
