var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
// size 300,150
// context.moveTo(150,75);
// context.lineTo(300,150);
context.rect(0,0,100,50);
context.rect(100,0,100,50);
context.rect(200,0,100,50);
context.rect(0,50,100,50);
context.rect(0,100,100,50);
context.rect(100,50,100,50);
context.rect(200,50,100,50);
context.rect(200,100,100,50);
context.rect(100,100,100,50);
context.stroke();