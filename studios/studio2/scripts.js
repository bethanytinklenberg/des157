//BETHANY TINKLENBERG JS STUDIO 2
"use strict";

// global variables
var bottle = document.getElementById('bottle');
var wallet = document.getElementById('wallet');
var iphone = document.getElementById('iphone');
var overlay = document.getElementById('overlay');
var close = document.getElementById('close');

bottle.addEventListener('ontouchstart',function(){
  bottleoverlay.style.display='block';
});

wallet.addEventListener('ontouchstart',function(){
  walletoverlay.style.display='block';
});

iphone.addEventListener('ontouchstart',function(){
  iphoneoverlay.style.display='block';
});

close.addEventListener('ontouchstart',function(){
  overlay.style.display='none';
});
