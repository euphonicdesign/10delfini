var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

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

let spaceship = {
    color: "green",
    width: 20,
    height: 30,
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

function drawSpaceship() {
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

}

let gravity = 0.001;

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

    if(spaceship.position.y > canvas.height){
        spaceship.position.y = canvas.height;
        spaceship.velocity.y = 0;
        spaceship.velocity.x = 0;
    }
    if(spaceship.position.x < 0){
        spaceship.position.x = 0;
        spaceship.velocity.x = 0;
    }
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateSpaceship();
    drawSpaceship();
    requestAnimationFrame(draw);
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
