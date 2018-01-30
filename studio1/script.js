console.log("reading");

var userName = document.f.userName.value;
var userColor = document.f.userColor.value;
var results = document.getElementById("results");
var myMsg = document.getElementById("myMix");

document.f.onsubmit = processForm;
document.f.onreset = resetForm;


function processForm() {
  results.setAttribute('class','show');

  myMix.innerHTML =
    "Woohoo! It's 5 o'clock somewhere! Honestly, a <em>" +
    mood +
    "</em> drink is a great choice. Here is your <em>" +
    mood + alcohol +
    "</em>. I mixed in <em>" + juice + "</em> and <em>" +
    liqueur + "</em> and garnished with <em>" +
    fruit + "</em>. Sounds delish!!";

  return false;
}

function resetForm() {
  myMix.innerHTML = "";
  results.setAttribute("class", "hide");
  shaker.setAttribute("class","show");
}
