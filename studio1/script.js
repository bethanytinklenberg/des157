//Bethany Tinklenberg Mad Libs JavaScript

'use strict';

console.log("reading");

var mood = document.f.mood.value;
var alcohol = document.f.alcohol.value;
var juice = document.f.juice.value;
var fruit = document.f.fruit.value;
var l = document.f.l.value;
var results = document.getElementById("results");
var myMix = document.getElementById("myMix");

results.setAttribute("class", "hide");

document.f.onsubmit = processForm;
document.f.onreset = resetForm;


function processForm() {
  results.setAttribute('class', 'show');
  shaker.setAttribute("class", "hideshaker");

  var mood = document.f.mood.value;
  var alcohol = document.f.alcohol.value;
  var juice = document.f.juice.value;
  var fruit = document.f.fruit.value;
  var l = document.f.l.value;

  myMix.innerHTML =

    "Woohoo! It's 5 o'clock somewhere! Honestly, a <em>" +
    mood +
    "</em> drink is a great choice. We started with a <em>" +
    mood + "</em> <em>" + alcohol +
    "</em>, mixed in <em>" + juice + "</em> and <em>" +
    l + "</em> and garnished with <em>" +
    fruit + "</em>. Sounds delicious!!";

  return false;
}

function resetForm() {
  myMix.innerHTML = "";
  results.setAttribute("class", "hide");
  shaker.setAttribute("class", "show");
}
