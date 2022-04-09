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
var paddle_dx = 3;
var paddle_dy = 3;

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

var cadru_curent = 1;

var cadre = [
  {x:10, y:200, visitat:false},
  {x:240, y:340, visitat:false},
  {x:250, y:210, visitat:false},
  {x:350, y:10, visitat:false},
];

var imgCadru1 = new Image();
imgCadru1.src = "./img/starting_place.jpg";
var imgCadru2 = new Image();
imgCadru2.src = "./img/city_intersection.jpg";
var imgCadru3 = new Image();
imgCadru3.src = "./img/dam.jpg";
var imgCadru4 = new Image();
imgCadru4.src = "./img/drive_stop.jpg";
var imgCadru5 = new Image();
imgCadru5.src = "./img/house.jpg";

function initializare() {
    setareCadru();

    //incarcare imagine
    imgCadru1.addEventListener("load", loadImage, false);
    function loadImage(e) {
        //ctx.drawImage(imgCadru1, 0, 0);
    }
    imgCadru2.addEventListener("load", loadImage, false);
    function loadImage(e) {
        //ctx.drawImage(imgCadru1, 0, 0);
    }
    imgCadru3.addEventListener("load", loadImage, false);
    function loadImage(e) {
        //ctx.drawImage(imgCadru1, 0, 0);
    }
    imgCadru4.addEventListener("load", loadImage, false);
    function loadImage(e) {
        //ctx.drawImage(imgCadru1, 0, 0);
    }
    imgCadru5.addEventListener("load", loadImage, false);
    function loadImage(e) {
        //ctx.drawImage(imgCadru1, 0, 0);
    }
}


function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawCadre() {
    for (let cadru of cadre) {
        ctx.beginPath();
        ctx.rect(cadru.x, cadru.y, paddleWidth/2, paddleHeight*2);
        ctx.fillStyle = "#12AADD";
        ctx.fill();
        ctx.closePath();
    }
}

function draw() {
    // drawing code
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCadru();
    drawPaddle();
    drawLives();
    drawCadre();
    collisionDetection();

    //Follow mouse on x
    //console.log(relativeX);
    if(relativeX - paddleX > paddleWidth / 2 + paddle_dx){
        paddleX += paddle_dx;
        if (paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if(relativeX - paddleX < paddleWidth / 2 - paddle_dx) {
        paddleX -= paddle_dx;
        if (paddleX < 0){
            paddleX = 0;
        }
    }

    //Follow mous on y
    if(relativeY - paddleY > paddleHeight / 2 + paddle_dy){
        paddleY += paddle_dy;
        if (paddleY + paddleHeight > canvas.height){
            paddleY = canvas.height - paddleHeight;
        }
    }
    else if(relativeY - paddleY < paddleHeight / 2 - paddle_dy) {
        paddleY -= paddle_dy;
    }

    requestAnimationFrame(draw);
}

//CONTROLS
//document.addEventListener("keydown", keyDownHandler, false);
//document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("click", mouseMoveHandler, false);

function mouseMoveHandler(e) {
    relativeX = e.clientX - canvas.offsetLeft;
    relativeY = e.clientY - canvas.offsetTop;
}

/*
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
}*/

function collisionDetection() {
    for (let cadru of cadre) {
        let nrCadru = cadre.indexOf(cadru) + 2;
        if(Math.abs(paddleX - cadru.x) < paddleWidth && Math.abs(paddleY - cadru.y) < paddleHeight){
          //console.log("hit cadru: " + nrCadru);

          if(cadru_curent != nrCadru) {
             cadru_curent = nrCadru;
             console.log("cadru_curent: " + cadru_curent);
             salvareCadru();
          }
        }

    }
}

function drawCadru() {

    //draw cadru
    if(cadru_curent === 1){
        ctx.drawImage(imgCadru1, 0, 0);
    }
    else if(cadru_curent === 2){
        ctx.drawImage(imgCadru2, 0, 0);
    }
    else if(cadru_curent === 3){
        ctx.drawImage(imgCadru3, 0, 0);
    }
    else if(cadru_curent === 4){
        ctx.drawImage(imgCadru4, 0, 0);
    }
    else if(cadru_curent === 5){
        ctx.drawImage(imgCadru5, 0, 0);
    }


    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Cadru: " + cadru_curent, 8, 20);
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + lives, canvas.width-65, 20);
}



function salvareCadru() {
  console.log("se salveaza cadrul cu numarul: " + cadru_curent);
  localStorage.setItem('cadru', cadru_curent);
}

function setareCadru() {
  if(!localStorage.getItem('cadru')) {
    salvareCadru();
    //console.log("setare NrArie initiala " + nr_arie);
  } else {
    cadru_curent = parseInt(localStorage.getItem('cadru'));
    console.log("cadru incarcat: " + cadru_curent);
  }
}


//var interval = setInterval(draw, 10); //10ms
initializare();
draw();
