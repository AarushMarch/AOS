const START = 0;
const PLAY = 1;
const END = 2;
var caveEntranceImg, knightImg, startImg;
var knight;
var startButton;
var gameState;
var score = 0;

function preload()
{
	caveEntranceImg = loadImage("Images/CaveEntrance.jpg")
  KnightImg = loadImage("Images/KnightFlipped.png")
  startImg = loadImage("Images/startImage.png")
}

function setup() {
	createCanvas(800, 700);
  startButton = createSprite(400, 500);
  startButton.addImage(startImg);
  startButton.scale = 0.5;
  gameState = 0;

  knight = createSprite(110, 550);
  knight.addImage(KnightImg);
  knight.visible = false;
  knight.scale = 0.3
	
  
}


function draw() {
  background(caveEntranceImg);
  textSize(20)
  fill("black")
  text("Score:" + score, 600, 30);
  if(gameState === START){
    textSize(60)
    fill("red")
    text("Amulet of schlumpville", 100, 200)

  }
  if(gameState === PLAY){
    knight.visible = true
  }
  if(mousePressedOver(startButton)){
    start()
  }
  drawSprites();
 
}

function start(){
  startButton.visible = false;
  gameState = 1;
}


