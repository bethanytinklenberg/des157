//bethany tinklenberg audience test js

"use strict;"

//global variables
var petalone = document.getElementById('petal1');
var petaltwo = document.getElementById('petal2');
var petalthree = document.getElementById('petal3');
var showresults = document.getElementById('results');
var undo = document.getElementById('undo');
var sizebutton = document.getElementById('sizebutton');


petalone.addEventListener('click', function(){
  // showresults.style.display = 'block';
  alert("This is the petal style you have selected");
})

petaltwo.addEventListener('click', function() {
  alert("Awesome, this button works! Unfortunately, its under construction right now.");
});

petalthree.addEventListener('click', function() {
  alert("Awesome, this button works! Unfortunately, its under construction right now.");
});

undo.addEventListener('click', function() {
  alert("Awesome, this button works! Unfortunately, its under construction right now.");
});

sizebutton.addEventListener('click', function() {
  alert("Awesome, this button works! Unfortunately, its under construction right now.");
});

var slider;

//setting up the canvas
function setup() {

  var resultCanvas = createCanvas(900, 800);
  resultCanvas.parent('results');
  noStroke();

  colorMode(HSB, 350, 100, 85);
  slider = createSlider(10, 330, 190, 0);
  slider.parent('colorslider');
  slider.position(10, 10);
  slider.style('width', '80px', 'height', '10px',);
  slider.size(800);
}

function draw() {
  //this is the color of the flower
  var val = slider.value();
  fill(val, 100, 100, 1); // hsba
  // coloring the flower with the position of the slider
  //this is the position of the flower in the canvas
  translate(450, 400);
  //this is the flower; its an ellipse that is copied and pasted on an axis
  for (var i = 0; i < 10; i++) {
    beginShape();
    vertex(0, 0);
    vertex(250, 100);
    vertex(250, 250);
    vertex(100, 250);
    endShape(CLOSE);
    //this is the axis that it is roated on
    rotate(PI / 3);
    }
  }



//////////////////////

//this is another flower, so please ignore it


/* function draw() {
  //this is the color of the flower
  //want to be the innerHTML of a color form?
  var c = color('darkblue');
  fill(c); // Use 'c' as fill color
  //this is the position of the flower in the canvas
  translate(400, 400);
  noStroke();
  //this is the flower; its an ellipse that is copied and pasted on an axis
  for (var i = 0; i < 10; i++) {
    ellipse(0, 0, 70, 500);
    //this is the axis that it is roated on
    rotate(PI / 3);
  }
}
*/
