//bethany tinklenberg audience test js

"use strict;"

function setup() {

  var resultCanvas = createCanvas(800, 800);
  resultCanvas.parent('results');
  background(200);
  noStroke();
}

function draw() {
  //this is the color of the flower
  //want to be the innerHTML of a color form?
  var c = color('darkblue');
  fill(c); // Use 'c' as fill color
  //this is the position of the flower in the canvas
  translate(400, 400);
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

// function draw() {
//   //this is the color of the flower
//   //want to be the innerHTML of a color form?
//   var c = color('darkblue');
//   fill(c); // Use 'c' as fill color
//   //this is the position of the flower in the canvas
//   translate(400, 400);
//   noStroke();
//   //this is the flower; its an ellipse that is copied and pasted on an axis
//   for (var i = 0; i < 10; i++) {
//     ellipse(0, 0, 70, 500);
//     //this is the axis that it is roated on
//     rotate(PI / 3);
//   }
// }
