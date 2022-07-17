enemy = document.getElementsByTagName('h1')[0];
health = document.getElementsByTagName('span')[0];
hitpoint = 100;
health.innerText = hitpoint;

function hit(){
if (hitpoint>=0){
    hitpoint = hitpoint-10;
    health.innerText = hitpoint;
    }
if (hitpoint<0){
    health.innerText = hitpoint;
    hitpoint = 100;
    alert("Game Over starting again!");
    health.innerText = hitpoint;
    }
}


enemy.onclick = hit;
// health.innerText = hitpoint;
// else{

// }