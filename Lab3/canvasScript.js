var canvas = document.getElementById("mapCanvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// for (var i = 0; i < 300; i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'cyan';
//     c.stroke();
// }


var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = 4;
var dy = 4;
var radius = 100;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    const grd = c.createLinearGradient(0, 0, 700, 50);
    grd.addColorStop(0, "gold");
    grd.addColorStop(1, "white");

    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'white';
    c.fillStyle = grd;
    c.fill();
    c.stroke();

    if(x + radius > innerWidth || x - radius < 0){
        dx = -dx
    }

    if(y + radius > innerHeight || y - radius < 0){
        dy = -dy
    }

    x +=  dx;
    y += dy;
}
animate()