var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
// size 600,600
// context.moveTo(150,75);
// context.lineTo(300,150);
context.arc(300,300,250,0,Math.PI*1.5);
context.arc(550,50,250,Math.PI*0.5,Math.PI*1);
context.stroke();