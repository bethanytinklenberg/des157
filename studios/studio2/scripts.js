//BETHANY TINKLENBERG JS STUDIO 2
"use strict";

// global variables
var bottle = document.getElementById('bottle');
var wallet = document.getElementById('wallet');
var iphone = document.getElementById('iphone');
var overlay = document.getElementById('overlay');
var close = document.getElementById('close');
var close2 = document.getElementById('close2');
var close3 = document.getElementById('close3');

bottle.addEventListener('click', function() {
  bottleoverlay.style.display = 'block';
  overlay.style.display = 'block';
  iphoneoverlay.style.display = 'none';
  walletoverlay.style.display = 'none';
  console.log("click");
});

wallet.addEventListener('click', function() {
  walletoverlay.style.display = 'block';
  overlay.style.display = 'block';
  bottleoverlay.style.display = 'none';
  iphoneoverlay.style.display = 'none';
});

iphone.addEventListener('click', function() {
  iphoneoverlay.style.display = 'block';
  overlay.style.display = 'block';
  bottleoverlay.style.display = 'none';
  walletoverlay.style.display = 'none';
});

close.addEventListener('click', function() {
  overlay.style.display = 'none';
});

close2.addEventListener('click', function() {
  overlay.style.display = 'none';
});

close3.addEventListener('click', function() {
  overlay.style.display = 'none';
});
