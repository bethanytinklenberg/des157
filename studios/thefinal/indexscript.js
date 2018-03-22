//bethany tinklenberg audience test js

"use strict;"

//global variables
var petalone = document.getElementById('petal1');
var petaltwo = document.getElementById('petal2');
var petalthree = document.getElementById('petal3');
var showresults = document.getElementById('results');
var sizebutton = document.getElementById('sizebutton');


petalone.addEventListener('click', function(){
  // showresults.style.display = 'block';
  alert("This is the petal style you have selected");
  // What I want is for this to display the first flower type. How do I call
  //that function to be run in the draw loop?
})

petaltwo.addEventListener('click', function() {
  alert("Awesome, this button works! Unfortunately, its under construction right now.");
});

petalthree.addEventListener('click', function() {
  alert("Awesome, this button works! Unfortunately, its under construction right now.");
});

sizebutton.addEventListener('click', function() {
  alert("Awesome, this button works! Unfortunately, its under construction right now.");
});

var rSlider;
var gSlider;
var bSlider;
var mycanvas;

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
  rSlider.style('background-color','#d31919');
  rSlider.style('padding', 15 +'px');
  // rSlider.style('display','none');
  gSlider = createSlider(0, 255, 0);
  gSlider.position(25, 450);
  gSlider.style('background-color','#33a012');
  gSlider.style('padding', 15 +'px');
  bSlider = createSlider(0, 255, 255);
  bSlider.position(25, 480);
  bSlider.style('background-color','#1458c1');
  bSlider.style('padding', 15 +'px');

}

function draw() {

  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  fill(r, g, b);
  // text("red", rSlider.x * 2 + rSlider.width, 420);
  // // console.log('readingjs');
  // text("green", gSlider.x * 2 + gSlider.width, 460);
  // text("blue", bSlider.x * 2 + bSlider.width, 480);
  // coloring the flower with the position of the slider
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



//////////////////////

// function flowerone(){
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
