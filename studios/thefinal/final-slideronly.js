//bethany tinklenberg audience test js

var rSlider;
var gSlider;
var bSlider;
var mycanvas;

function setup() {
  // create canvas
  mycanvas = createCanvas(335, 400);
  // mycanvas.position(40,50);
  mycanvas.parent('coloreditor');
  textSize(50);
  noStroke();

  // create sliders
  rSlider = createSlider(0, 255, 100);
  rSlider.position(30, 420);
  rSlider.style('background-color','#d31919');
  rSlider.style('padding', 15 +'px');
  // rSlider.parent('colorslider');
  gSlider = createSlider(0, 255, 0);
  gSlider.position(30, 450);
  gSlider.style('background-color','#33a012');
  gSlider.style('padding', 15 +'px');
  // rSlider.parent('gslider');
  bSlider = createSlider(0, 255, 255);
  bSlider.position(30, 480);
  bSlider.style('background-color','#1458c1');
  bSlider.style('padding', 15 +'px');
  // rSlider.parent('bslider');
}

function draw() {
  // console.log('readingjs');
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  background(r, g, b);
  text("red", rSlider.x * 2 + rSlider.width, 420);
  // console.log('readingjs');
  text("green", gSlider.x * 2 + gSlider.width, 460);
  text("blue", bSlider.x * 2 + bSlider.width, 480);
}
