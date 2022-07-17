var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
// size 300,150
// context.moveTo(150,75);
// context.lineTo(300,150);
context.arc(150,75,50,0,Math.PI*1.5);
context.arc(200,25,50,Math.PI*0.5,Math.PI*1);
context.stroke();