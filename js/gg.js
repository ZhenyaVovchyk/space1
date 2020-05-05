let log = (g) => { console.log(g) };

// let canvas = document.createElement('canvas'),
//     ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// canvas.style.position = 'absolute';
// canvas.style.left = 0;
// canvas.style.top = 0;
// canvas.id = 'game';
// document.body.appendChild(canvas);

let recAnimFrame;

let ball = new Stars();




window.addEventListener('load', () => { start() });

function start() {
    draw();
    upDate();
    // recAnimFrame = requestAnimationFrame(start);
}

function draw() {
    ball.drawPocket(0, 0);
    ball.drawPocket(canvas.width, canvas.height);
    ball.drawPocket(canvas.width, 0);
    ball.drawPocket(0, canvas.height);
}

function upDate() {

}