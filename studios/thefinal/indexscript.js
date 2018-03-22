//bethany tinklenberg audience test js

"use strict;"

//global variables
var showresults = document.getElementById('results');

var rSlider;
var gSlider;
var bSlider;
var mycanvas;

var petalone;
var petaltwo;
var petalthee;

//setting up the canvas
function setup() {

  // create canvas
  mycanvas = createCanvas(355, 500);
  // mycanvas.position(40,50);
  mycanvas.parent('results');
  textSize(10);
  noStroke();

  // create sliders
  rSlider = createSlider(0, 255, 100);
  rSlider.position(25, 420);
  rSlider.style('background-color', '#d31919');
  rSlider.style('padding', 15 + 'px');
  // rSlider.style('display','none');
  gSlider = createSlider(0, 255, 0);
  gSlider.position(25, 450);
  gSlider.style('background-color', '#33a012');
  gSlider.style('padding', 15 + 'px');
  bSlider = createSlider(0, 255, 255);
  bSlider.position(25, 480);
  bSlider.style('background-color', '#1458c1');
  bSlider.style('padding', 15 + 'px');

  petalone = document.getElementById('petal1');
  petaltwo = document.getElementById('petal2');
  petalthree = document.getElementById('petal3');

  petalone.addEventListener('click', function() {
  // showresults.style.display = 'block';
  // petalone.mouseClicked(function() {
    console.log("This is the petal style you have selected");
    flowerone();
    // What I want is for this to display the first flower type. How do I call
    //that function to be run in the draw loop?
  });

  petaltwo.addEventListener('click', function() {
    flowertwo();
  // petaltwo.mouseClicked(function() {
    console.log("Awesome, this button works! Unfortunately, its under construction right now.");
  });

  petalthree.addEventListener('click', function() {
    flowerthree();
  // petalthree.mouseClicked(function() {
    console.log("Awesome, this button works! Unfortunately, its under construction right now.");
  });



}

//this is the first petal option
function flowerone(){
  background('white');
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  fill(r, g, b);
  //this is the position of the flower in the canvas
  translate(170, 125);
  //this is the flower; its an ellipse that is copied and pasted on an axis
  for (var i = 0; i < 10; i++) {
    beginShape();
    vertex(0, 0);
    vertex(84, 34);
    vertex(84, 84);
    vertex(34, 84);
    endShape(CLOSE);
    //this is the axis that it is roated on
    rotate(PI / 3);
  }
}

function flowertwo() {
  //this is the color of the flower
  //want to be the innerHTML of a color form?
  background('white');
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  fill(r, g, b);
  //this is the position of the flower in the canvas
  translate(176, 125);
  noStroke();
  //this is the flower; its an ellipse that is copied and pasted on an axis
  for (var i = 0; i < 10; i++) {
    ellipse(0, 0, 230, 70);
    //this is the axis that it is roated on
    rotate(PI / 3);
  }
}

function flowerthree(){
  background('white');
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  fill(r, g, b);
  //this is the position of the flower in the canvas
  translate(170, 125);
  //this is the flower; its an ellipse that is copied and pasted on an axis
  for (var i = 0; i < 10; i++) {
    beginShape();
    vertex(0, 0);
    vertex(64, 34);
    vertex(24, 24);
    vertex(34, 64);
    endShape(CLOSE);
    //this is the axis that it is roated on
    rotate(PI / 3);
  }
}

function draw() {

  // var r = rSlider.value();
  // var g = gSlider.value();
  // var b = bSlider.value();
  // fill(r, g, b);
  // flowerone();

}



//////////////////////

// void flowerone(){
// //this is the color of the flower
// var val = slider.value();
// fill(val, 100, 100, 1); // hsba
// // coloring the flower with the position of the slider
// //this is the position of the flower in the canvas
// translate(176, 125);
// //this is the flower; its an ellipse that is copied and pasted on an axis
// for (var i = 0; i < 10; i++) {
//   beginShape();
//   vertex(0, 0);
//   vertex(84, 34);
//   vertex(84, 84);
//   vertex(34, 84);
//   endShape(CLOSE);
//   //this is the axis that it is roated on
//   rotate(PI / 3);
//   }
// }

//this is another flower, so please ignore it


/* function flowertwo() {
  //this is the color of the flower
  //want to be the innerHTML of a color form?
  fill(r, g, b);
  //this is the position of the flower in the canvas
  translate(176, 125);
  noStroke();
  //this is the flower; its an ellipse that is copied and pasted on an axis
  for (var i = 0; i < 10; i++) {
    ellipse(0, 0, 70, 500);
    //this is the axis that it is roated on
    rotate(PI / 3);
  }
}
*/
