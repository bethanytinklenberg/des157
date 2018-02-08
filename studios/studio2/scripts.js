//BETHANY TINKLENBERG JS STUDIO 2
"use strict";

// global variables
var bottle = document.getElementById('bottle');
var wallet = document.getElementById('wallet');
var iphone = document.getElementById('iphone');
var overlay = document.getElementById('overlay');
var close = document.getElementById('close');

bottle.addEventListener('ontouchstart',function(){
  overlay.style.display='block';
  content.style.display='none';
});

wallet.addEventListener('ontouchstart',function(){
  overlay.style.display='block';
  content.style.display='none';
});

iphone.addEventListener('ontouchstart',function(){
  overlay.style.display='block';
  content.style.display='none';
});

close.addEventListener('ontouchstart',function(){
  overlay.style.display='none';
  content.style.display='block';
});
