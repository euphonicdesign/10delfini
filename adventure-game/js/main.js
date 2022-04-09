var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/* SQUARES AND CIRCLES
//Draw a square
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

//Draw a circle
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

//Draw an empty square
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();
*/

let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;

var ballRadius = 10;
let ballColor = "rgba(0, 0, 255, 1.0)";

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth) / 2;
var paddleY = canvas.height - paddleHeight;
var relativeX = paddleX; //mouse click position
var relativeY = paddleY;
var paddle_dx = 2;
var paddle_dy = 2;

var rightPressed = false;
var leftPressed = false;

var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

var score = 0;
var lives = 3;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = ballColor; //"#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function draw() {
    // drawing code
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //drawBricks();
    //drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();

    x += dx;
    y += dy;

    //Wall collision - reverse direction
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
        randomColor1 = Math.random()*255;
        randomColor2 = Math.random()*255;
        randomColor3 = Math.random()*255;
        ballColor = `rgba(${randomColor1},${randomColor2},${randomColor3},1.0)`;
    }
    /*
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
        randomColor1 = Math.random()*255;
        randomColor2 = Math.random()*255;
        randomColor3 = Math.random()*255;
        ballColor = `rgba(${randomColor1},${randomColor2},${randomColor3},1.0)`;
    }*/


    /*
    if(y + dy < ballRadius) {
        dy = -dy;
    } else if(y + dy > canvas.height-ballRadius) {
        //paddle collision - detection
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
            x += Math.random()*7;
        }
        else {
          lives--;
          if(!lives) {
            //alert("GAME OVER");
            console.log("Game over!");
            //input = prompt();
            //console.log(input);
            //document.location.reload();
            ////clearInterval(interval); // Needed for Chrome to end game
          }
          else {
            x = canvas.width/2;
            y = canvas.height-30;
            dx = 2;
            dy = -2;
            //paddleX = (canvas.width-paddleWidth)/2;
          }
        }
    }*/

    //paddle movement and wall detection
    /*
    if(rightPressed) {
        paddleX += 4;
        if (paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if(leftPressed) {
        paddleX -= 4;
        if (paddleX < 0){
            paddleX = 0;
        }
    }*/

    //Follow mouse on x
    //console.log(relativeX);
    if(relativeX - paddleX > 10){
        paddleX += paddle_dx;
        if (paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if(relativeX - paddleX < 0) {
        paddleX -= paddle_dx;
        if (paddleX < 0){
            paddleX = 0;
        }
    }

    //Follow mous on y
    if(relativeY - paddleY > 10){
        paddleY += paddle_dy;
        if (paddleY + paddleHeight > canvas.height){
            paddleY = canvas.height - paddleHeight;
        }
    }
    else if(relativeY - paddleY < 0) {
        paddleY -= paddle_dy;
    }

    requestAnimationFrame(draw);
}

//CONTROLS
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
//document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("click", mouseMoveHandler, false);

function mouseMoveHandler(e) {
    relativeX = e.clientX - canvas.offsetLeft;
    relativeY = e.clientY - canvas.offsetTop;
    /*
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
    if(relativeY > 0 && relativeY < canvas.height) {
        paddleY = relativeY - paddleHeight/2;
    }*/
}

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    salvareCadru();
                    if(score == brickRowCount*brickColumnCount) {
                        //alert("YOU WIN, CONGRATULATIONS!");
                        console.log("you win!");
                        //document.location.reload();
                        ////clearInterval(interval); // Needed for Chrome to end game
                    }
                }
            }
        }
    }
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

function initializare() {
    setareCadru();
}

function salvareCadru() {
  console.log("se salveaza cadrul cu numarul: " + lives);
  localStorage.setItem('cadru', lives);
}

function setareCadru() {
  if(!localStorage.getItem('cadru')) {
    salvareCadru();
    //console.log("setare NrArie initiala " + nr_arie);
  } else {
    lives = parseInt(localStorage.getItem('cadru'));
    console.log("cadru incarcat: " + lives);
  }
}


//var interval = setInterval(draw, 10); //10ms
initializare();
draw();
