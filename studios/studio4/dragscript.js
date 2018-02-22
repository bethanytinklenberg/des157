//Bethany Tinklenberg Studio 4
 // ‘use strict’;

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
 }
