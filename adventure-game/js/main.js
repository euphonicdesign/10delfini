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

var paddleHeight = 20;
var paddleWidth = 40;
var entriesWidth = 60;
var entriesHeight = 20;
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
    //starting_place
    { nr_cadru: 0,
      activat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 1, x:10, y:200},
        {nr_cadru: 2, x:240, y:340},
        {nr_cadru: 3, x:300, y:10},
      ],
    },//library
    { nr_cadru: 1,
      activat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 0, x:450, y:150},
      ],
    },//house
    { nr_cadru: 2,
      activat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 0, x:10, y:200},
      ],
    },//bridge end
    { nr_cadru: 3,
      activat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 0, x:200, y:350},//starting_place
        {nr_cadru: 4, x:200, y:20},
        {nr_cadru: 9, x:450, y:210},
      ],
    },//alley split
    { nr_cadru: 4,
      activat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 3, x:150, y:350},//bridge_end
        {nr_cadru: 5, x:450, y:200},
        {nr_cadru: 6, x:280, y:20},//sunny_beach
        {nr_cadru: 7, x:50, y:20},
      ],
    },//summer games
    { nr_cadru: 5,
      activat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 4, x:10, y:300},
      ],
    },//sunny_beach
    { nr_cadru: 6,
      activat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 4, x:210, y:300},
      ],
    },
    { nr_cadru: 7,//dam
      activat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 4, x:210, y:300},
        {nr_cadru: 8, x:210, y:30},
      ],
    },
    { nr_cadru: 8,//lighthouse
      activat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 7, x:210, y:300},
      ],
    },//drive stop
    { nr_cadru: 9,
      activat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 0, x:10, y:150},
        {nr_cadru: 10, x:210, y:10},
        {nr_cadru: 12, x:390, y:150},
      ],
    },//drive trees
    { nr_cadru: 10,
      activat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 9, x:200, y:350},
        {nr_cadru: 11, x:210, y:20},
      ],
    },
    //drive trees
    { nr_cadru: 11,
      activat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 10, x:200, y:350},
      ],
    },
    //city intersection
    { nr_cadru: 12,
      activat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 9, x:20, y:250},
        {nr_cadru: 13, x:460, y:250},
        {nr_cadru: 14, x:200, y:30},
      ],
    },
    //east city
    { nr_cadru: 13,
      activat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 12, x:20, y:250},
      ],
    },
    //port
    { nr_cadru: 14,
      activat: false,
      pozitieIntrareX: 250,
      pozitieIntrareY: 250,
      entries:[
        {nr_cadru: 12, x:250, y:350},
      ],
    },
];

let image_strings = [
    "./img/starting_place.jpg", //0
    "./img/library.jpg",//1
    "./img/house.jpg",//2
    "./img/bridge_end.jpg",//3
    "./img/alley_split.jpg",//4
    "./img/summer_games.jpg",//5
    "./img/sunny_beach.jpg",//6
    "./img/dam.jpg",//7
    "./img/lighthouse.jpg",//8
    "./img/drive_stop.jpg",//9
    "./img/trees.jpg",//10
    "./img/palm_beach.jpg",//11
    "./img/city_intersection.jpg",//12
    "./img/east_city.jpg",//13
    "./img/port.jpg",//14
];

let imaginiCadru = [];
for (let i=0; i<image_strings.length; i++){
    imaginiCadru[i] = new Image();
    imaginiCadru[i].src = image_strings[i];
}

function initializare() {
    setareCadru();

    for (let i=0; i<imaginiCadru.length; i++){
        imaginiCadru[i].addEventListener("load", loadImage, false);

        function loadImage(e) {
            ctx.drawImage(imaginiCadru[i], 0, 0);
        }
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
    followMouseMovement();

    requestAnimationFrame(draw);
}

function followMouseMovement(){
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
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawCadreEntries() {
    for (let entry of cadre[cadru_curent].entries) {
        ctx.beginPath();
        ctx.rect(entry.x, entry.y, entriesWidth, entriesHeight);
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
    ctx.drawImage(imaginiCadru[cadru_curent], 0, 0);

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

    let hit = false;
    let intrare_scena = true;
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
                //unde apare cursorul pe ecran dupa ce s-a schimbat cadrul
                if(intrare_scena){
                    paddleX = 250; //entry.pozitieIntrareX;
                    paddleY = 250; //entry.pozitieIntrareY;
                    intrare_scena = false;
                    relativeX = paddleX;
                    relativeY = paddleY;
                }

            }
        }
    }
    if(!hit && cadre[cadru_curent].activat) {
        cadre[cadru_curent].activat = false;
    }
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
