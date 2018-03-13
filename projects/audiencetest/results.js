//bethany tinklenberg audience test js

"use strict;"

var slider;

function setup() {

  var resultCanvas = createCanvas(900, 800);
  resultCanvas.parent('results');
  noStroke();

  colorMode(HSB);
  slider = createSlider(0, 360, 60, 40);
  slider.position(50,1000);
}

function draw() {
  //this is the color of the flower
  //want to be the innerHTML of a color form?
  var val = slider.value();
  fill(val, 100, 100, 1); // Use 'c' as fill color
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
