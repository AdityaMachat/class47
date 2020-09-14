var ground,player;
var w=800;
var h=400;
var roomw=w;
var nextRoomReached=0;
var image1;
var playerImage;
var drawingRoom,bedroom,hall;
var bg;
var gameState="start";
var choice = 0;
var seconds;

function preload(){
  image1=loadImage("temporary.png");
  playerImage=loadAnimation("images/1.png","images/2.png","images/3.png");
  drawingRoom=loadImage("images/BACK1.jpg");
  bedroom=loadImage("images/back3.jpg");
  hall=loadImage("images/BACK2.jpg");
}

function setup() {
  createCanvas(w,h);

  bg=createSprite(w/2,h/2,20,20);
  bg.addImage("bedroom",bedroom);
  bg.addImage("drawingroom",drawingRoom);
  bg.addImage("Hall",hall);

 // ground= createSprite(w/2, 0,w, h);
  //ground.addImage(image1);
  //ground.scale=4;

  player=createSprite(w/2,h/2,20,20);
  player.addAnimation("playersprite",playerImage);
  player.scale=0.5;

  seconds=second();

  console.log(seconds);
}

function draw() {
  background(255);  
  

  if(choice === 1){
    bg.changeAnimation("drawingroom",drawingRoom);
  }
  else if(choice === 2){
    bg.changeAnimation("Hall",hall);
  }
  
  camera.position.x=player.x;
  if(keyDown(RIGHT_ARROW)){
    //need to slow down player speed
    var currentPosition=player.x;

    while(player.x!==currentPosition+roomw){
    player.x=player.x+1;
    }
  }
  drawSprites();
  if(second()<(seconds+30)%60 && gameState==="start"){
    textSize(25);
    fill("black");
    stroke("grren")
    text("intro",200,50);
  }else{
    gameState="play";
  }
}