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

var cadru_curent = 0;

var cadre = [
    //cadru 0
    { nr_cadru: 0,
      activat: false,
      x_intrare:10,
      y_intrare:200,
      entries:[
        {nr_cadru: 1, x:10, y:200, visitat:false},
        {nr_cadru: 2, x:240, y:340, visitat:false},
        {nr_cadru: 3, x:350, y:10, visitat:false},
        {nr_cadru: 4, x:450, y:110, visitat:false},
      ],
    },
    { nr_cadru: 1,
      activat: false,
      x_intrare:240,
      y_intrare:340,
      entries:[
        {nr_cadru: 2, x:240, y:340, visitat:false},
        {nr_cadru: 4, x:450, y:110, visitat:false},
      ],
    },
    { nr_cadru: 2,
      activat: false,
      x_intrare:10,
      y_intrare:200,
      entries:[
        {nr_cadru: 1, x:10, y:200, visitat:false},
        {nr_cadru: 2, x:240, y:340, visitat:false},
        {nr_cadru: 3, x:350, y:10, visitat:false},
        {nr_cadru: 4, x:450, y:110, visitat:false},
      ],
    },
    { nr_cadru: 3,
      activat: false,
      x_intrare:10,
      y_intrare:200,
      entries:[
        {nr_cadru: 1, x:10, y:200, visitat:false},
        {nr_cadru: 2, x:240, y:340, visitat:false},
        {nr_cadru: 3, x:350, y:10, visitat:false},
        {nr_cadru: 4, x:450, y:110, visitat:false},
      ],
    },
    { nr_cadru: 4,
      activat: false,
      x_intrare:10,
      y_intrare:200,
      entries:[
        {nr_cadru: 0, x:10, y:200, visitat:false},
        {nr_cadru: 2, x:240, y:340, visitat:false},
        {nr_cadru: 3, x:350, y:10, visitat:false},
        {nr_cadru: 4, x:450, y:110, visitat:false},
      ],
    },
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

function draw() {
    // drawing code
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCadruImg();
    drawPaddle();
    drawLives();
    drawCadreEntries();
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

    //Follow mouse on y
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

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawCadreEntries() {

  /*
  var cadre = [
    [ //cadru 0
      { nr_cadru: 0,
        activat: false,
        x_intrare:10,
        y_intrare:200,
        entries:[
          {nr_cadru: 1, x:10, y:200, visitat:false},
          {nr_cadru: 2, x:240, y:340, visitat:false},
          {nr_cadru: 3, x:350, y:10, visitat:false},
        ],
      },
    ],
*/

    for (let entry of cadre[cadru_curent].entries) {
        ctx.beginPath();
        ctx.rect(entry.x, entry.y, paddleWidth/2, paddleHeight*2);
        ctx.fillStyle = "#12AADD";
        ctx.fill();
        ctx.closePath();

        ctx.font = "16px Arial";
        ctx.fillStyle = "green";
        ctx.fillText("Cadru: " + entry.nr_cadru, entry.x, entry.y);
    }
}

function drawCadruImg() {
    //draw cadru
    if(cadru_curent === 0){
        ctx.drawImage(imgCadru1, 0, 0);
    }
    else if(cadru_curent === 1){
        ctx.drawImage(imgCadru2, 0, 0);
    }
    else if(cadru_curent === 2){
        ctx.drawImage(imgCadru3, 0, 0);
    }
    else if(cadru_curent === 3){
        ctx.drawImage(imgCadru4, 0, 0);
    }
    else {
        ctx.drawImage(imgCadru4, 0, 0);
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

function collisionDetection() {

  /*
  var cadre = [
    [ //cadru 0
      { nr_cadru: 0,
        activat: false,
        x_intrare:10,
        y_intrare:200,
        entries:[
          {nr_cadru: 1, x:10, y:200, visitat:false},
          {nr_cadru: 2, x:240, y:340, visitat:false},
          {nr_cadru: 3, x:350, y:10, visitat:false},
        ],
      },
    ],
*/

    //console.log("Entries cadru curent: " + cadru_curent);
    //for (let cadruEntry = 0; cadruEntry< cadre[cadru_curent][0].entries.length; cadruEntry++){
       //console.log(cadre[cadru_curent][0].entries[cadruEntry].nr_cadru);
    //}
    let hit = false;
    for (let entry of cadre[cadru_curent].entries) {
        //console.log(entry.nr_cadru);
        //verifica daca loveste intrarea si daca cadrul curent este inactiv => il face activ pentru a nu reintra din nou
        //altfel il face inactiv
        if(Math.abs(paddleX - entry.x) < paddleWidth && Math.abs(paddleY - entry.y) < paddleHeight){
            hit = true;
            if(!cadre[cadru_curent].activat){
                console.log("hit and non-activat")
                cadre[cadru_curent].activat = true;

                cadru_curent = entry.nr_cadru;
                console.log("cadru_curent: " + cadru_curent);
                salvareCadru();
            }
        }
    }
    if(!hit && cadre[cadru_curent].activat) {
        cadre[cadru_curent].activat = false;
    }

/*
    for (let cadru of cadre[cadru_curent]) {

        if(Math.abs(paddleX - cadru.x) < paddleWidth && Math.abs(paddleY - cadru.y) < paddleHeight){

          let nrCadru = cadre[cadru_curent].indexOf(cadru);
          console.log("hit cadru: " + nrCadru);

          if(cadru_curent != nrCadru) {
             cadru_curent = nrCadru;
             console.log("cadru_curent: " + cadru_curent);
             salvareCadru();
          }
        }
    }*/
}

//CONTROLS
document.addEventListener("click", mouseMoveHandler, false);

function mouseMoveHandler(e) {
    relativeX = e.clientX - canvas.offsetLeft;
    relativeY = e.clientY - canvas.offsetTop;
}

//SALVARE STARE
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

//START GAME
//var interval = setInterval(draw, 10); //10ms
initializare();
draw();
