//Bethany Tinklenberg Studio 4
// ‘use strict’;

var flower1 = document.getElementById('flower1');
var flower2 = document.getElementById('flower2');
var flower3 = document.getElementById('flower3');
var flower4 = document.getElementById('flower4');
var flower5 = document.getElementById('flower5');
var flower6 = document.getElementById('flower6');
// var petal1 = document.getElementById('petal1');
// var petal2 = document.getElementById('petal2');
// var petal3 = document.getElementById('petal3');
// var petal4 = document.getElementById('petal4');
// var petal5 = document.getElementById('petal5');
// var petal6 = document.getElementById('petal6');

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log('dragstart');
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  console.log(data);

  // if petal(x) is dragged and dropped, then display flower(x)

  if (data == "petal2") { //flower 2
    flower2.style.display = ('block');
    flower1.style.display = ('none');
    flower3.style.display = ('none');
    flower4.style.display = ('none');
    flower5.style.display = ('none');
    flower6.style.display = ('none');
  }
   else if (data == "petal1") { //flower 1
    flower1.style.display = ('block');
    flower2.style.display = ('none');
    flower3.style.display = ('none');
    flower4.style.display = ('none');
    flower5.style.display = ('none');
    flower6.style.display = ('none');
  }
  else if (data == "petal3") { //flower 3
   flower3.style.display = ('block');
   flower1.style.display = ('none');
   flower2.style.display = ('none');
   flower4.style.display = ('none');
   flower5.style.display = ('none');
   flower6.style.display = ('none');
 }
 else if (data == "petal4") { //flower 1
  flower4.style.display = ('block');
  flower1.style.display = ('none');
  flower2.style.display = ('none');
  flower3.style.display = ('none');
  flower5.style.display = ('none');
  flower6.style.display = ('none');
}
else if (data == "petal5") { //flower 1
 flower5.style.display = ('block');
 flower1.style.display = ('none');
 flower2.style.display = ('none');
 flower3.style.display = ('none');
 flower4.style.display = ('none');
 flower6.style.display = ('none');
}
else if (data == "petal6") { //flower 1
 flower6.style.display = ('block');
 flower1.style.display = ('none');
 flower2.style.display = ('none');
 flower3.style.display = ('none');
 flower4.style.display = ('none');
 flower5.style.display = ('none');
}
else {
  flower1.style.display = ('none');
  flower2.style.display = ('none');
  flower3.style.display = ('none');
  flower4.style.display = ('none');
  flower5.style.display = ('none');
  flower6.style.display = ('none');
}

  // if (ev = flower1) {
  //   var flower1 = document.getElementById('flower1');
  //   flower1.style.display = ('block');
  // } else {
  //   flower1.style.display = ('none');
  // }
  // if (ev = flower1) {
  //   var flower1 = document.getElementById('flower1');
  //   flower1.style.display = ('block');
  // } else {
  //   flower1.style.display = ('none');
  // }
  // if (ev = flower1) {
  //   var flower1 = document.getElementById('flower1');
  //   flower1.style.display = ('block');
  // } else {
  //   flower1.style.display = ('none');
  // }
  // if (ev = flower1) {
  //   var flower1 = document.getElementById('flower1');
  //   flower1.style.display = ('block');
  // } else {
  //   flower1.style.display = ('none');
  // }
}
