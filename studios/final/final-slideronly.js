//bethany tinklenberg audience test js

var rSlider;
var gSlider;
var bSlider;
var mycanvas;

function setup() {
  // create canvas
  mycanvas = createCanvas(900, 800);
  // mycanvas.position(40,50);
  mycanvas.parent('coloreditor');
  textSize(50);
  noStroke();

  // create sliders
  rSlider = createSlider(0, 255, 100);
  // rSlider.position(20, 20);
  // rSlider.parent('rslider');
  gSlider = createSlider(0, 255, 0);
  // gSlider.position(20, 50);
  // rSlider.parent('gslider');
  bSlider = createSlider(0, 255, 255);
  // bSlider.position(20, 80);
  // rSlider.parent('bslider');
}

function draw() {
  // console.log('readingjs');
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  background(r, g, b);
  text("red", rSlider.x * 2 + rSlider.width, 35);
  text("green", gSlider.x * 2 + gSlider.width, 65);
  text("blue", bSlider.x * 2 + bSlider.width, 95);
}
