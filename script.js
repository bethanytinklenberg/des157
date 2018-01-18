function setup() {
  var myCanvas = createCanvas(800, 250);
  //has to parent to an id
  myCanvas.parent('mySketch');
  background(255);
  cursor(CROSS);
  angleMode(RADIANS);
}

function draw() {
  var lineLength = random(30, 50);
  var r = random(0, 255);
  var g = random(0, 255);
  var b = random(0, 255);
  var c = color(r, g, b, 100);
  var deg = (mouseX, mouseY);
  var rad = radians(deg);

  if (mouseIsPressed) {
    push(); //start new lines
    strokeWeight(1.0);
    noFill();
    stroke(c);
    translate(mouseX, mouseY);
    rotate(rad);
    line(0, 0, lineLength, 0);
    pop(); //reset original

    push(); //start new lines
    strokeWeight(1.0);
    noFill();
    stroke(c);
    translate(mouseX, mouseY);
    line(0, 0, lineLength, 0);
    pop(); //reset original
  }
}

function keyPressed() {
  background(255);
}
