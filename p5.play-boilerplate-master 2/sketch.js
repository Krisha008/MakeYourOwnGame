var obstacle1, obstacle2, obstacle3;
var ground, invisibleGround;
var ball;
var backgroundImg, ballImg;
var obstacle1Img, obstacle2Img, obstacle3Img, obstaclesGroup;

function preload (){
backgroundImg = loadImage("Background.png");
ballImg = loadImage("Ball.png");
obstacle1Img = loadImage("Obstacle1.png");
obstacle2Img = loadImage("Obstacle2.png");
obstacle3Img = loadImage("Obstacle3.png");
}

function setup(){
  createCanvas(800,400);

  ball = createSprite(80,250,100,100);
  ball.addImage("ball",ballImg);
  ball.scale = 0.2;

  ground = createSprite(500,360,800,100);
  ground.x = ground.width/2;

  invisibleGround = createSprite(400,380,800,100);
  invisibleGround.visible = false;
  obstaclesGroup = new Group();  

}

function draw(){
  background(backgroundImg);
  ground.velocityX = -4;
  
  if(keyDown("space")) {
    ball.velocityY = -12;
  }

  ball.velocityY = ball.velocityY + 0.8;

  if(ground.x < 0){
    ground.x = ground.width/2;
  }

  ball.collide(invisibleGround);
  
  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  if(frameCount % 50 === 0){
    obstacle = createSprite(600,380,100,100);
    obstacle.collide(invisibleGround);
    obstacle.velocityX = -4;
    
    var rand = Math.round(random(1,3));
     switch(rand){
        case 1: obstacle.addImage(obstacle1Img);
           break;
         case 2: obstacle.addImage(obstacle2Img);
           break;
         case 3: obstacle.addImage(obstacle3Img);
           break;
         default: break;
       }
    obstacle.scale = 0.6;
    obstacle.lifetime = 200;
    obstaclesGroup.add(obstacle);
  }
}

