const START = 0;
const PLAY = 1;
const END = 2;
var caveEntranceImg, knightImg, startImg;
var knight;
var startButton;
var gameState;
var ground;
var score = 0;
var touchGround =0;
var caveSprite;
var level = 0;
var knightImgFL;

function preload()
{
	caveEntranceImg = loadImage("Images/CaveEntrance.jpg")
  caveImg = loadImage("Images/InsideCave.jpg")
  knightImg = loadImage("Images/KnightFlipped.png")
  knightImgFL = loadImage("Images/Knight.png")
  startImg = loadImage("Images/startImage.png")
}

function setup() {
	createCanvas(800, 700);
  startButton = createSprite(400, 500);
  startButton.addImage(startImg);
  startButton.scale = 0.5;
  gameState = 0;

  knight = createSprite(110, 570);
  knight.addImage("knightFL",knightImg);
  knight.visible = false;
  knight.scale = 0.3

  caveSprite = createSprite(460, 480, 10,400 )
  caveSprite.visible = false;
  caveSprite.debug = true;

  ground = createSprite(width/2, height-15, 900, 10);
  ground.visible = false;
	
  
}


function draw() {
  if (level === 0)
    background(caveEntranceImg);
    else if (level === 1)
      background(caveImg);

  textSize(35)
  fill("black")
  text("Score:" + score, 600, 30);
  knight.collide(ground);
  knight.velocityY = 5;
  if(gameState === START){
    textSize(60)
    fill("red")
    text("Amulet of schlumpville", 100, 200)

  }
  console.log(mouseX+", "+ mouseY);
  touchGround = 0;
  if(gameState === PLAY){
    knight.visible = true
    if(keyIsDown(LEFT_ARROW)){
      knight.x -=3;
      knight.changeImage("knightFL", knightImgFL);
    }
    if(keyIsDown(RIGHT_ARROW)){
      knight.x +=3;
    }
    console.log(knight.y);
    if(keyIsDown(UP_ARROW) && knight.y >=580){
      knight.velocityY = -10;
    }
          
    knight.velocityY += 0.08;

    if(knight.isTouching(caveSprite) && score=== 0 && level === 0){
      level ++;
      startLevel(1);
    }

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

function startLevel(level){
  if(level === 1){
      knight.x = 110;
      ground.y -=55
  }
}

/*
To do
1.
2.
3.
4.
5.
6.
7.
8.
*/