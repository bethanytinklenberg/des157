//Bethany Tinklenberg Studio 4
// ‘use strict’;

var flower1 = getElementById('flower1');
var flower2 = getElementById('flower2');
var flower3 = getElementById('flower3');
var flower4 = getElementById('flower4');
var flower5 = getElementById('flower5');
var flower6 = getElementById('flower6');
var petal1 = getElementById('petal1');
var petal2 = getElementById('petal2');
var petal3 = getElementById('petal3');
var petal4 = getElementById('petal4');
var petal5 = getElementById('petal5');
var petal6 = getElementById('petal6');
var workspace = getElementById('workspace');
var options = getElementById('options');

//if my #workspace contains a certain petal, display that flower
if contains() {
  // "div:has(img)"
  // flower1.style.display = ('block');
  var workspace = document.getElementById('workspace').childNodes;
  for (var i=0; i <childElements.length; i++) {
    if (childElements [i].localName != null && childElements[i].localName.toLowerCase () == 'img') {
      return true;
    }
  }
return false;
}


// function hasImage(id) {
//   var childElements = document.getElementById(id).childNodes;
//   for (var i = 0; i < childElements.length; i++) {
//     if (childElements[i].localName != null && childElements[i].localName.toLowerCase() == "img") {
//       return true;
//     }
//   }
//   return false;
// }

alert(hasImage('workspace')); // true
alert(hasImage('test2')); // false
