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

var ballRadius = 10;
let ballColor = "rgba(0, 0, 255, 1.0)";

var paddleHeight = 20;
var paddleWidth = 40;
var entriesWidth = 60;
var entriesHeight = 20;
var paddleX = 250;//(canvas.width-paddleWidth) / 2;
var paddleY = 250;//canvas.height - paddleHeight;
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

let imaginiCadru = [];
for (let i=0; i<image_strings.length; i++){
    imaginiCadru[i] = new Image();
    imaginiCadru[i].src = image_strings[i];
}

var buton = document.getElementById("resetButton");
buton.addEventListener("click", resetare);

let desenareTextActiune = false;
let actiuneSelectata = "";
let actiuneItems = [];

let cadruWidth = 520;
let cadruHeight = 370;

let flagsActiuni = [];

let textActiuniX = 560;
let textActiuniY = 50;

let textInventoryX = 560;
let textInventoryY = 160;

let textPovesteX = 10;
let textPovesteY = 410;

let endGamelines = "";
let flagEndGame = false;

let culoareGuyBrush = "rgba(255, 204, 102, 0.9)";
let culoareEntriesCadre = "rgba(18, 170, 221,0.4)";//"#12AADD";

function resetare(){
    localStorage.clear();
    location.reload();
}

function initializare() {
    setareCadru();
    setareNpcs();
    setareStare();


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
    //drawLives();
    drawCadreEntries();
    drawTextCadru();
    drawActiuniInventoryNpcs();
    collisionDetection();
    detectareActiuneSelectata();
    followMouseMovement();
    generarePosiblitiati();
    drawEndGameLines();

    requestAnimationFrame(draw);
}

function generarePosiblitiati() {
    //console.log("play: " + cadre[cadru_curent].actiuni[1]["active"]);
}

function drawEndGameLines(){
   //console.log(flagEndGame);
   if(endGamelines != "" && flagEndGame){
     //lines = actiuneSelectata;
     var lineHeight = ctx.measureText("M").width * 1.2;

     let x = textPovesteX;
     let y = textPovesteY;
     //ctx.fillStyle = "#0095DD";
     //ctx.fillText(actiuneSelectata, x, y - lineHeight - 2);

     ctx.fillStyle = "#333";
     for (var i = 0; i < endGamelines.length; ++i) {
       ctx.fillText(endGamelines[i].trim(), x, y);
       y += lineHeight;
     }
   }
}

function followMouseMovement(){
  //Follow mouse on x
  //console.log(relativeX);
  if(relativeX - paddleX > paddleWidth / 2 + paddle_dx){
      paddleX += paddle_dx;
      if (paddleX + paddleWidth > cadruWidth){
          paddleX = cadruWidth - paddleWidth;
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
      if (paddleY + paddleHeight > cadruHeight){
          paddleY = cadruHeight - paddleHeight;
      }
  }
  else if(relativeY - paddleY < paddleHeight / 2 - paddle_dy) {
      paddleY -= paddle_dy;
  }
}

function drawPaddle() {
  /*
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "brown";//"#0095DD";
    ctx.fill();
    ctx.closePath();
*/
    //Draw a circle
    ctx.beginPath();
    ctx.arc(paddleX, paddleY, paddleWidth / 2, 0, Math.PI*2, false);
    ctx.fillStyle = culoareGuyBrush;
    ctx.fill();
    ctx.closePath();
}

function drawCadreEntries() {
    for (let entry of cadre[cadru_curent].entries) {
        /*
        ctx.beginPath();
        ctx.rect(entry.x, entry.y, entriesWidth, entriesHeight);
        ctx.fillStyle = "#12AADD";
        ctx.fill();
        ctx.closePath();*/

        ctx.beginPath();
        ctx.arc(entry.x, entry.y, entriesWidth / 3, 0, Math.PI*2, false);
        ctx.fillStyle = culoareEntriesCadre;
        ctx.fill();
        ctx.closePath();

        ctx.font = "16px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("" + entry.nr_cadru, entry.x, entry.y + 6);
        ctx.textAlign = "start";
    }
}

function drawTextCadru() {
    ctx.font = "18px Times";
    ctx.fillStyle = "#333";
    var lineHeight = ctx.measureText("M").width * 1.2;
    var lines="";
    if(!desenareTextActiune){
        //afisare text scena - prim - if non-text actiune
        if(!cadre[cadru_curent].vizitat){
          lines = cadre[cadru_curent].textPrim.split("\n");
        }
        else {
          lines = cadre[cadru_curent].textSecund.split("\n");
        }
        let x = textPovesteX;
        let y = textPovesteY;
        for (var i = 0; i < lines.length; ++i) {
          ctx.fillText(lines[i].trim(), x, y);
          y += lineHeight;
        }
    }
    else {
        //lines = actiuneSelectata;
        let x = textPovesteX;
        let y = textPovesteY;
        ctx.fillStyle = "#0095DD";
        ctx.fillText(actiuneSelectata, x, y - lineHeight - 2);

        ctx.fillStyle = "#333";
        //console.log(actiuneSelectata);
        for (let actiune of cadre[cadru_curent].actiuni){
            //console.log(actiune.nume);
            if(actiune.nume === actiuneSelectata){
                let conditie = actiune["conditie"];
                if (typeof conditie != "undefined") {

                    //console.log(conditie["itemsRequired"]);
                    //console.log(npcs["player"].inventory);
                    //alert("This is a message box");

                    //if(npcs["player"].inventory.includes(conditie["itemRequired"])){
                    if(conditie["itemsRequired"].every(i => npcs["player"].inventory.includes(i))){

                        lines = actiune["conditie"]["textConditieFalse"].split("\n");
                        //dezactiveaza conditia
                        actiune["conditie"]["required"] = false;
                        //daca se dezactiveaza conditia incarca itemurile asociate cu
                        //conditia in inventory player
                        if(actiune["conditie"]["itemsReturned"].length > 0)
                            for (let item of actiune["conditie"]["itemsReturned"]){
                                npcs["player"].inventory.push(item);
                                actiune["conditie"]["itemsReturned"].pop(item);
                            }

                        //schimbare cadru daca exista in conditie
                        let cadruReturnat = actiune["conditie"]["cadruReturnat"];
                        if(typeof cadruReturnat != "undefined"){
                          cadru_curent = cadruReturnat;
                          console.log("hit");
                          endGamelines = actiune.text.split("\n");
                          flagEndGame = true;
                        }


                        salvareStare();
                    }else if(conditie["required"]){
                        //console.log(conditie["textConditieTrue"]);
                        lines = actiune["conditie"]["textConditieTrue"].split("\n");
                    }
                } else {
                      if(actiune["active"]){
                        lines = actiune.text.split("\n");
                      }
                      else{
                        lines = actiune["textSecund"].split("\n");
                      }
                }

                for (var i = 0; i < lines.length; ++i) {
                  ctx.fillText(lines[i].trim(), x, y);
                  y += lineHeight;
                }
            }
        }
    }

}

function drawActiuniInventoryNpcs() {
    ctx.font = "18px Times";

    var lineHeight = ctx.measureText("M").width * 1.2;
    var lines;

    //draw npcs
    /*
    x = 560;
    y = 50;
    ctx.fillStyle = "#333";
    ctx.fillText("npcs:", x, y-lineHeight);
    ctx.fillStyle = "blue";
    for (let npc of Object.keys(npcs)){
      //console.log(item);
      ctx.fillText(npc, x, y);
      y += lineHeight;
    }*/

    //draw actiuni cadru
    x = textActiuniX;//560;
    y = textActiuniY;//150;
    ctx.fillStyle = "#333";
    ctx.fillText("Actions:", x, y-lineHeight);
    ctx.fillStyle = "green";
    for (let actiune of cadre[cadru_curent].actiuni) {
        //console.log(actiune.nume);
        ctx.fillText(actiune.nume, x, y);
        y += lineHeight;
    }

    //draw inventory
    x = textInventoryX;//560;
    y = textInventoryY;//280;
    ctx.fillStyle = "#333";
    ctx.fillText("Inventory:", x, y-lineHeight);
    ctx.fillStyle = "orange";
    for (let item of npcs["player"].inventory){
      //console.log(item);
      ctx.fillText(item, x, y);
      y += lineHeight;
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
                //console.log("hit and non-activat")
                cadre[cadru_curent].activat = true;

                cadru_curent = entry.nr_cadru;
                //console.log("cadru_curent: " + cadru_curent);
                salvareCadru();

                cadre[cadru_curent]["nrVizite"]++;
                //console.log(cadre[cadru_curent]["nume_cadru"] +" "+ cadre[cadru_curent].nrVizite + " vizite");
                if(cadre[cadru_curent]["nrVizite"]>1){
                    cadre[cadru_curent].vizitat = true;
                }

                flagEndGame = false;
                salvareStare();

                //unde apare cursorul pe ecran dupa ce s-a schimbat cadrul
                if(intrare_scena){
                    paddleX = 250; //entry.pozitieIntrareX;
                    paddleY = 250; //entry.pozitieIntrareY;
                    intrare_scena = false;
                    relativeX = paddleX;
                    relativeY = paddleY;
                    desenareTextActiune = false;
                }

            }
        }
    }
    if(!hit && cadre[cadru_curent].activat) {
        cadre[cadru_curent].activat = false;
    }
}

function detectareActiuneSelectata() {
  var actionWidth = 100;
  var actionHeight = ctx.measureText("M").width * 1.2; //line height

  var xActiuni = textActiuniX;
  var yActiuni = textActiuniY;

  for (let actiune of cadre[cadru_curent].actiuni) {
      if(Math.abs(relativeX - xActiuni) < actionWidth && Math.abs(relativeY + 6 - yActiuni) < actionHeight/2){
          //Click inafara zonei pentru a deactiva butonul
          relativeX = 250;
          relativeY = 250;

          desenareTextActiune = true;
          actiuneSelectata = actiune.nume;
          actiune["numarClicks"]++;

          //console.log(actiune["numarClicks"]);

          //1 CLICK
          if(actiune["numarClicks"]==1) {
              //transfer items actiune catre player
              for (let item of actiune.items){
                npcs["player"].inventory.push(item);
              }

              //SALVARE STATE NPCS
              salvareNpcs();
          }

          //2 CLICK-uri
          if(actiune["active"] && actiune["numarClicks"] > 1){
              actiune["active"] = false;
              //console.log("actiunea " + actiune.nume + " a fost falsificata");
              //actiuneItems = actiune.items;

              //SALVARE STATE NPCS
              salvareNpcs();
          }


      }
      //urmatorea actiune e plasata cu un increment mai jos
      yActiuni += actionHeight;
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
  //console.log("se salveaza cadrul cu numarul: " + cadru_curent);
  localStorage.setItem('cadru', cadru_curent);
}

function salvareStare() {
  //console.log("se salveaza starea: ");
  localStorage.setItem('stare', JSON.stringify(cadre));
}

function salvareNpcs() {
  //console.log("se salveaza starea: ");
  localStorage.setItem('npcs', JSON.stringify(npcs));
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

function setareStare() {
  if(!localStorage.getItem('stare')) {
    salvareStare();
    //console.log("setare NrArie initiala " + nr_arie);
  } else {
    cadre = JSON.parse(localStorage.getItem('stare'));
    console.log("stare incarcata");
  }
}

function setareNpcs() {
  if(!localStorage.getItem('npcs')) {
    salvareNpcs();
    //console.log("setare NrArie initiala " + nr_arie);
  } else {
    cadre = JSON.parse(localStorage.getItem('npcs'));
    console.log("npcs incarcata");
  }
}

//START GAME
//var interval = setInterval(draw, 10); //10ms
initializare();
draw();
