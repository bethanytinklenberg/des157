var moveflower = document.getElementById('flower');


moveflower.addEventListener('load', function(){
  for (var i = 0; i < 100; i++) {
  var r = random(500);
  translate(r * 5);
}

})
