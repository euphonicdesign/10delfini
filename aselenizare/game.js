var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

let nrTinte = 10 + Math.floor(Math.random() * 6);
let nrObstacole = 20 + Math.floor(Math.random() * 10);
let puncte = 0;
let hits = 0;
let gravity = 0.003 + Math.random()/300;
let stars = [];

for (let i=0; i < 500; i++){
  stars[i] = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.sqrt(Math.random() * 2),
    alpha: 1.0,
    decreasing: true,
    dRatio: Math.random()*0.05
  }
}

let obstacole = [];
for (let i=0; i<nrObstacole; i++){
  obstacole[i] = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: 40,
    height: 20,
    radius: 20,
    hit: false
  }
}

let tinte = [];
for (let i=0; i<nrTinte; i++){
  tinte[i] = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: 40,
    height: 20,
    radius: 20,
    hit: false
  }
}

let spaceship = {
    color: "green",
    width: 18,
    height: 30,
    radius: 3,
    position: {
        x: 200,
        y: 200
    },
    velocity: {
        x: 0,
        y: 0
    },
    thrust: 0.01,
    angle: 0,
    engineOn: false,
    rotatingLeft: false,
    rotatingRight: false,
    crashed: false
}

//Mouse interactivity
let canvasPosition = canvas.getBoundingClientRect();
const mouse = {
    x: canvas.width/2,
    y: canvas.height/2,
    click: false
}
canvas.addEventListener('mousedown',function(event){
    mouse.click = true;
    mouse.x = event.x - canvasPosition.left;
    mouse.y = event.y - canvasPosition.top;

    const dx = spaceship.position.x - mouse.x;
    const dy = spaceship.position.y - mouse.y;
    let theta = Math.atan2(dy,dx);
    spaceship.angle = theta + 3*Math.PI/2;

    spaceship.engineOn = true;
});

canvas.addEventListener("mouseup",function(){
    mouse.click = false;
    spaceship.engineOn = false;
});

const bubblePop1 = document.createElement("audio");
bubblePop1.src = "Plop.ogg";

const bubblePop2 = document.createElement("audio");
bubblePop2.src = "bubbles-single2.wav";

function drawSpaceship() {

    if (mouse.click) {
        ctx.lineWidth = 0.2;
        ctx.strokeStyle = "aqua";
        ctx.beginPath();
        ctx.moveTo(spaceship.position.x, spaceship.position.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
        ctx.closePath();
    }

    ctx.save();
    ctx.beginPath();
    ctx.translate(spaceship.position.x, spaceship.position.y);
    ctx.rotate(spaceship.angle);
    ctx.rect(-spaceship.width * 0.5, -spaceship.height * 0.5, spaceship.width, spaceship.height);
    ctx.fillStyle = spaceship.color;
    ctx.fill();
    ctx.closePath();

    // engine flame if on
    if(spaceship.engineOn){
        ctx.beginPath();
        ctx.moveTo(spaceship.width * -0.5, spaceship.height * 0.5);
        ctx.lineTo(spaceship.width * 0.5, spaceship.height * 0.5);
        ctx.lineTo(0, spaceship.height * 0.5 + Math.random() * 8);
        ctx.lineTo(spaceship.width * -0.5, spaceship.height * 0.5);
        ctx.closePath();
        ctx.fillStyle = "orange";
        ctx.fill();
    }

    ctx.restore();
    //centru
    ctx.beginPath();
    ctx.arc(spaceship.position.x, spaceship.position.y, spaceship.radius, 0, 2*Math.PI);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();
}

function updateSpaceship(){
    spaceship.position.x += spaceship.velocity.x;
    spaceship.position.y -= spaceship.velocity.y;

    if(spaceship.rotatingRight){
        spaceship.angle += Math.PI / 180;
    }
    else if(spaceship.rotatingLeft){
        spaceship.angle -= Math.PI / 180;
    }

    if(spaceship.engineOn){
        spaceship.velocity.x -= spaceship.thrust * Math.sin(-spaceship.angle);
        spaceship.velocity.y += spaceship.thrust * Math.cos(spaceship.angle);
    }
    spaceship.velocity.y -= gravity;

    if(spaceship.position.y + spaceship.height/2 > canvas.height){
        spaceship.position.y = canvas.height - spaceship.height/2;
        spaceship.velocity.y = 0;
        spaceship.velocity.x = 0;
    }
    else if(spaceship.position.x < 0){
        spaceship.position.x = 0;
        spaceship.velocity.x = 0;
    }
    else if(spaceship.position.x > canvas.width){
        spaceship.position.x = canvas.width;
        spaceship.velocity.x = 0;
    }
    else if(spaceship.position.y < 0){
        spaceship.position.y = 0;
    }
}

function drawStars() {
  ctx.save();
  ctx.fillStyle = "#111"
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i=0; i < stars.length; i++){
    let star = stars[i];
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2*Math.PI);
    ctx.closePath();
    ctx.fillStyle = "#bbb";
    ctx.fill();
  }
  ctx.restore();
}

function drawObstacole(){
  for (let obstacol of obstacole) {
    ctx.beginPath();
    ctx.arc(obstacol.x, obstacol.y, obstacol.radius, 0, 2*Math.PI);
    ctx.closePath();
    ctx.fillStyle = "orange";
    ctx.fill();
  }
}

function drawTinte(){
  for (let tinta of tinte) {
    if(!tinta.hit){
      ctx.beginPath();
      ctx.arc(tinta.x, tinta.y, tinta.radius, 0, 2*Math.PI);
      ctx.closePath();
      ctx.fillStyle = "white";
      ctx.fill();
    }

    // ctx.beginPath();
    // ctx.rect(obstacol.x - obstacol.length/2, obstacol.y - obstacol.height/2, obstacol.length, obstacol.height);
    // ctx.fillStyle = "orange";
    // ctx.fill();

    // ctx.strokeStyle = "black";
    // ctx.stroke();
  }
}

function drawTelemetry (){
  ctx.font = "italic 16px Helvetica, system-ui, Arial, sans-serif";
  ctx.textAlign = "start";
  ctx.fillStyle = "#3399ff";

  let velocityY = Math.floor(spaceship.velocity.y*10)/10;
  if (Math.abs(velocityY) <=0.1){
    velocityY = 0;
  }
  ctx.fillText("velocity (y): " + velocityY, 20, 30);
  ctx.fillText("hits: " + hits, 20, 46);
  ctx.fillText("points: " + puncte, 20, 62);
  ctx.fillText("gravity: " + Math.floor(gravity*1000)/1000, 20, 78);
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateSpaceship();
    collisionDetectionObstacole();
    collisionDetectionTinte();
    checkWinningConditions();
    drawStars();
    drawTinte();
    drawObstacole();
    drawTelemetry();
    drawSpaceship();
    requestAnimationFrame(draw);
}

function collisionDetectionObstacole(){
  for (let obstacol of obstacole){
    if(!obstacol.hit){
      let dx = spaceship.position.x - obstacol.x;
      let dy = spaceship.position.y - obstacol.y;

      let distance = Math.sqrt(dx**2 + dy**2);
      if(distance <= obstacol.radius) {
        hits++;
        obstacol.hit = true;
        bubblePop1.play();
      }
    }
  }

  for (let obstacol of obstacole){
      let dx = spaceship.position.x - obstacol.x;
      let dy = spaceship.position.y - obstacol.y;

      let distance = Math.sqrt(dx**2 + dy**2);
      if(distance > obstacol.radius) {
        obstacol.hit = false;
      }
  }
}

function collisionDetectionTinte(){
  for (let tinta of tinte){
    if(!tinta.hit){
      let dx = spaceship.position.x - tinta.x;
      let dy = spaceship.position.y - tinta.y;

      let distance = Math.sqrt(dx**2 + dy**2);
      if(distance <= tinta.radius) {
        puncte++;
        tinta.hit = true;
        bubblePop2.play();
      }
    }
  }
}

function checkWinningConditions(){
  if(puncte == nrTinte){
    //location.reload();
    history.go(0);
  }
  if(hits > 3){
    //location.reload();
    history.go(0);
  }
}

function keyLetGo(event)
{
    switch(event.keyCode)
    {
        case 37:
            // Left Arrow key
            spaceship.rotatingLeft = false;
            break;
        case 39:
            // Right Arrow key
            spaceship.rotatingRight = false;
            break;
        case 38:
            // Up Arrow key
            spaceship.engineOn = false;
            break;
    }
}

document.addEventListener('keyup', keyLetGo);

function keyPressed(event)
{
    switch(event.keyCode)
    {
        case 37:
            // Left Arrow key
            spaceship.rotatingLeft = true;
            break;
        case 39:
            // Right Arrow key
            spaceship.rotatingRight = true;
            break;
        case 38:
            // Up Arrow key
            spaceship.engineOn = true;
            break;
    }
}

document.addEventListener('keydown', keyPressed);

draw();

// let x = 0;
// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // draw circle
//     ctx.beginPath();
//     ctx.arc(x, 100, 25, 0, 2*Math.PI);
//     ctx.fillStyle = "black";
//     ctx.fill();

//     // movement update
//     x = x + 1;

//     if (x > canvas.width) x = 0;

//     requestAnimationFrame(draw);
// }

// draw();

// ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);

// ctx.beginPath();
// ctx.rect(0, 0, 200, 50);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.strokeStyle = "black";
// ctx.stroke();


// ctx.beginPath();
// ctx.arc(100, 100, 20, 0, 2*Math.PI)
// ctx.fillStyle = "black";
// ctx.fill();


// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(200, 100);
// ctx.lineTo(100, 200);
// ctx.lineTo(100, 100);

// ctx.fillStyle = "blue";
// ctx.fill();
//
