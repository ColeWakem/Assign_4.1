function bookEnd(){
  var firstName = String(document.getElementById("firstName").value);
  console.log(firstName);
  var lastName = String(document.getElementById("lastName").value);
  console.log(lastName);
  var eMail = String(document.getElementById("eMail").value);
  console.log(eMail);

  var amoGuest = Number(document.getElementById("amoGuest").value);
  console.log(amoGuest);

  var startDay = Number(document.getElementById("startDay").value);
  console.log(startDay);
  var startMonth= Number(document.getElementById("startMonth").value);
  console.log(startMonth);
  var startYear = Number(document.getElementById("startYear").value);
  console.log(startYear);

  var endDay = Number(document.getElementById("endDay").value);
  console.log(endDay);
  var endMonth = Number(document.getElementById("endMonth").value);
  console.log(endMonth);
  var endYear = Number(document.getElementById("endYear").value);
  console.log(endYear);

  var room = document.getElementsByName("room");  //www.youtube.com/watch?v=uzwUBDQfpkU Dec 3 2021
  if(room[0].checked)
  {
    document.getElementById("output").innerHTML= "Thank you for booking with us " + firstName + " " + lastName + "! " + " You are now scheduled to be staying with us from "
    + startDay + "/" + startMonth + "/" + startYear + " to " + endDay + "/" + endMonth + "/" + endYear + "." + " You have asked for a single format room for " + amoGuest +
    " guests." + " For the single room format, it will cost $90 a night." +" We will send an email to " + eMail + " to confirm with you that everything is correct.";
  }
  if(room[1].checked)
  {
    document.getElementById("output").innerHTML= "Thank you for booking with us " + firstName + " " + lastName + "! " + " You are now scheduled to be staying with us from "
    + startDay + "/" + startMonth + "/" + startYear + " to " + endDay + "/" + endMonth + "/" + endYear + "." + " You have asked for a single format room for " + amoGuest +
    " guests." + " For the Double room format, it will cost $120 a night." +" We will send an email to " + eMail + " to confirm with you that everything is correct.";
  }


}
