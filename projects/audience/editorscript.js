//bethany tinklenberg audience test js
"use strict;"

// function setup() {
//   createCanvas(300,800);
//   var slider;
//   colorMode(HSB);
//   slider = createSlider(0, 360, 60, 40);
//   slider.position(10, 10);
// }
//
// function draw() {
//   var val = slider.value();
//   background(val, 100, 100, 1);
// }

//
function setup() {
  createCanvas(720, 400);
  background(200);

  // Set colors
  fill(204, 101, 192, 127);
  stroke(127, 63, 120);

  translate(580, 200);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
 }
